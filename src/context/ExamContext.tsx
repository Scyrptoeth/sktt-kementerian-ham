'use client';
import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { ExamState, Answer } from '@/lib/types';
import { questions } from '@/lib/questions';
import { scoreAnswer } from '@/lib/scoring';

type ExamAction =
  | { type: 'START_EXAM' }
  | { type: 'SUBMIT_ANSWER'; payload: { text: string; isAutoSubmitted: boolean } }
  | { type: 'NEXT_QUESTION' }
  | { type: 'RESET_EXAM' };

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

function examReducer(state: ExamState, action: ExamAction): ExamState {
  switch (action.type) {
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

  const resetExam = () => dispatch({ type: 'RESET_EXAM' });

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
