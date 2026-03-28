'use client';
import React, { createContext, useContext, useReducer, useState, useEffect, ReactNode } from 'react';
import { ExamState, Answer } from '@/lib/types';
import { questions } from '@/lib/questions';
import { scoreAnswer } from '@/lib/scoring';

type ExamAction =
  | { type: 'START_EXAM' }
  | { type: 'SUBMIT_ANSWER'; payload: { text: string; isAutoSubmitted: boolean } }
  | { type: 'NEXT_QUESTION' }
  | { type: 'RESET_EXAM' }
  | { type: 'HYDRATE'; payload: ExamState };

interface ExamContextValue {
  state: ExamState;
  currentQuestion: (typeof questions)[number] | null;
  isLastQuestion: boolean;
  dispatch: React.Dispatch<ExamAction>;
  startExam: () => void;
  submitAnswer: (text: string, isAutoSubmitted?: boolean) => void;
  nextQuestion: () => void;
  resetExam: () => void;
}

const initialState: ExamState = {
  status: 'idle',
  currentQuestionIndex: 0,
  answers: [],
  startedAt: null,
  completedAt: null,
};

const STORAGE_KEY = 'sktt-exam-state';

function saveState(state: ExamState): void {
  try {
    const serializable = {
      ...state,
      startedAt: state.startedAt?.toISOString() ?? null,
      completedAt: state.completedAt?.toISOString() ?? null,
      answers: state.answers.map(a => ({
        ...a,
        submittedAt: a.submittedAt instanceof Date ? a.submittedAt.toISOString() : a.submittedAt,
      })),
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(serializable));
  } catch {
    // Silently fail if localStorage unavailable
  }
}

function loadState(): ExamState | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    return {
      ...parsed,
      startedAt: parsed.startedAt ? new Date(parsed.startedAt) : null,
      completedAt: parsed.completedAt ? new Date(parsed.completedAt) : null,
      answers: (parsed.answers ?? []).map((a: Record<string, unknown>) => ({
        ...a,
        submittedAt: new Date(a.submittedAt as string),
      })),
    };
  } catch {
    return null;
  }
}

function clearState(): void {
  try { localStorage.removeItem(STORAGE_KEY); } catch {}
}

function examReducer(state: ExamState, action: ExamAction): ExamState {
  switch (action.type) {
    case 'HYDRATE':
      return action.payload;

    case 'START_EXAM':
      return {
        ...initialState,
        status: 'active',
        startedAt: new Date(),
      };

    case 'SUBMIT_ANSWER': {
      const currentQ = questions[state.currentQuestionIndex];
      if (!currentQ) return state;

      const answerDraft: Answer = {
        questionId: currentQ.id,
        text: action.payload.text,
        score: 0,
        submittedAt: new Date(),
        isAutoSubmitted: action.payload.isAutoSubmitted,
      };

      const scored = scoreAnswer(answerDraft, currentQ);
      const answer: Answer = { ...answerDraft, score: scored.score };

      const existingIndex = state.answers.findIndex(
        (a) => a.questionId === currentQ.id
      );

      const newAnswers =
        existingIndex >= 0
          ? state.answers.map((a, i) => (i === existingIndex ? answer : a))
          : [...state.answers, answer];

      return { ...state, answers: newAnswers };
    }

    case 'NEXT_QUESTION': {
      const nextIndex = state.currentQuestionIndex + 1;
      if (nextIndex >= questions.length) {
        return {
          ...state,
          status: 'completed',
          completedAt: new Date(),
        };
      }
      return { ...state, currentQuestionIndex: nextIndex };
    }

    case 'RESET_EXAM':
      return { ...initialState };

    default:
      return state;
  }
}

const ExamContext = createContext<ExamContextValue | null>(null);

export function ExamProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(examReducer, initialState);
  const [isHydrated, setIsHydrated] = useState(false);

  // Load saved state on mount (client-side only)
  useEffect(() => {
    const saved = loadState();
    if (saved && saved.status !== 'idle') {
      dispatch({ type: 'HYDRATE', payload: saved });
    }
    setIsHydrated(true);
  }, []);

  // Persist state to localStorage after every change (only after hydration)
  useEffect(() => {
    if (isHydrated) {
      saveState(state);
    }
  }, [state, isHydrated]);

  const currentQuestion =
    state.currentQuestionIndex < questions.length
      ? questions[state.currentQuestionIndex]
      : null;

  const isLastQuestion = state.currentQuestionIndex === questions.length - 1;

  const startExam = () => dispatch({ type: 'START_EXAM' });

  const submitAnswer = (text: string, isAutoSubmitted = false) => {
    dispatch({ type: 'SUBMIT_ANSWER', payload: { text, isAutoSubmitted } });
  };

  const nextQuestion = () => dispatch({ type: 'NEXT_QUESTION' });

  const resetExam = () => {
    clearState();
    dispatch({ type: 'RESET_EXAM' });
  };

  return (
    <ExamContext.Provider
      value={{
        state,
        currentQuestion,
        isLastQuestion,
        dispatch,
        startExam,
        submitAnswer,
        nextQuestion,
        resetExam,
      }}
    >
      {children}
    </ExamContext.Provider>
  );
}

export function useExam(): ExamContextValue {
  const ctx = useContext(ExamContext);
  if (!ctx) {
    throw new Error('useExam must be used within ExamProvider');
  }
  return ctx;
}
