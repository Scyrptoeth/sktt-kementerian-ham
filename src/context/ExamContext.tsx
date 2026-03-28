'use client';
import React, { createContext, useContext, useReducer, useState, useEffect, ReactNode } from 'react';
import { Answer, PacketId, PacketProgress } from '@/lib/types';
import { getPacketQuestions } from '@/lib/questions';
import { scoreAnswer } from '@/lib/scoring';

// ─── Types ────────────────────────────────────────────────────────────────────

interface ExamState {
  activePacketId: PacketId | null;
  packets: Partial<Record<PacketId, PacketProgress>>;
}

type ExamAction =
  | { type: 'SELECT_PACKET'; payload: { packetId: PacketId } }
  | { type: 'START_EXAM'; payload: { packetId: PacketId } }
  | { type: 'SUBMIT_ANSWER'; payload: { packetId: PacketId; text: string; isAutoSubmitted: boolean } }
  | { type: 'NEXT_QUESTION'; payload: { packetId: PacketId } }
  | { type: 'RESET_PACKET'; payload: { packetId: PacketId } }
  | { type: 'RESET_ALL' }
  | { type: 'HYDRATE'; payload: ExamState };

interface ExamContextValue {
  state: ExamState;
  selectPacket: (packetId: PacketId) => void;
  startExam: (packetId: PacketId) => void;
  submitAnswer: (packetId: PacketId, text: string, isAutoSubmitted: boolean) => void;
  nextQuestion: (packetId: PacketId) => void;
  resetPacket: (packetId: PacketId) => void;
  resetAll: () => void;
  getPacketProgress: (packetId: PacketId) => PacketProgress;
  activePacket: PacketProgress | null;
}

// ─── Initial State ────────────────────────────────────────────────────────────

function initialPacketProgress(packetId: PacketId): PacketProgress {
  return {
    packetId,
    status: 'idle',
    currentQuestionIndex: 0,
    answers: [],
    startedAt: null,
    completedAt: null,
  };
}

const initialState: ExamState = {
  activePacketId: null,
  packets: {},
};

// ─── localStorage ─────────────────────────────────────────────────────────────

const STORAGE_KEY = 'sktt-exam-state';
const STORAGE_VERSION = 2;

function migrateFromV1(oldState: Record<string, unknown>): ExamState {
  // Old format: { status, currentQuestionIndex, answers, startedAt, completedAt }
  if (oldState && oldState.status && !oldState.packets) {
    const migratedPacket: PacketProgress = {
      packetId: 1,
      status: oldState.status as 'idle' | 'active' | 'completed',
      currentQuestionIndex: (oldState.currentQuestionIndex as number) ?? 0,
      answers: ((oldState.answers as Array<Record<string, unknown>>) ?? []).map(a => ({
        ...a,
        submittedAt: new Date(a.submittedAt as string),
      })) as Answer[],
      startedAt: oldState.startedAt ? new Date(oldState.startedAt as string) : null,
      completedAt: oldState.completedAt ? new Date(oldState.completedAt as string) : null,
    };
    return {
      activePacketId: oldState.status !== 'idle' ? 1 : null,
      packets: { 1: migratedPacket },
    };
  }
  return oldState as unknown as ExamState;
}

function deserializeState(parsed: Record<string, unknown>): ExamState {
  const isV2 = parsed._version === STORAGE_VERSION || parsed.packets;
  if (!isV2) {
    return migrateFromV1(parsed);
  }

  const packets: Partial<Record<PacketId, PacketProgress>> = {};
  const rawPackets = (parsed.packets ?? {}) as Record<string, Record<string, unknown>>;

  for (const [key, rawPacket] of Object.entries(rawPackets)) {
    const packetId = parseInt(key, 10) as PacketId;
    packets[packetId] = {
      packetId,
      status: rawPacket.status as 'idle' | 'active' | 'completed',
      currentQuestionIndex: rawPacket.currentQuestionIndex as number,
      answers: ((rawPacket.answers as Array<Record<string, unknown>>) ?? []).map(a => ({
        ...a,
        submittedAt: new Date(a.submittedAt as string),
      })) as Answer[],
      startedAt: rawPacket.startedAt ? new Date(rawPacket.startedAt as string) : null,
      completedAt: rawPacket.completedAt ? new Date(rawPacket.completedAt as string) : null,
    };
  }

  return {
    activePacketId: parsed.activePacketId as PacketId | null,
    packets,
  };
}

function serializeState(state: ExamState): Record<string, unknown> {
  const serializedPackets: Record<string, unknown> = {};

  for (const [key, packet] of Object.entries(state.packets)) {
    if (!packet) continue;
    serializedPackets[key] = {
      ...packet,
      startedAt: packet.startedAt?.toISOString() ?? null,
      completedAt: packet.completedAt?.toISOString() ?? null,
      answers: packet.answers.map(a => ({
        ...a,
        submittedAt: a.submittedAt instanceof Date ? a.submittedAt.toISOString() : a.submittedAt,
      })),
    };
  }

  return {
    _version: STORAGE_VERSION,
    activePacketId: state.activePacketId,
    packets: serializedPackets,
  };
}

function saveState(state: ExamState): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(serializeState(state)));
  } catch {
    // Silently fail if localStorage unavailable
  }
}

function loadState(): ExamState | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Record<string, unknown>;
    const deserialized = deserializeState(parsed);
    // Save migrated state back (no-op if already v2)
    saveState(deserialized);
    return deserialized;
  } catch {
    return null;
  }
}

function clearState(): void {
  try { localStorage.removeItem(STORAGE_KEY); } catch {}
}

// ─── Reducer ──────────────────────────────────────────────────────────────────

function examReducer(state: ExamState, action: ExamAction): ExamState {
  switch (action.type) {
    case 'HYDRATE':
      return action.payload;

    case 'SELECT_PACKET': {
      const { packetId } = action.payload;
      const existing = state.packets[packetId];
      return {
        ...state,
        activePacketId: packetId,
        packets: existing
          ? state.packets
          : { ...state.packets, [packetId]: initialPacketProgress(packetId) },
      };
    }

    case 'START_EXAM': {
      const { packetId } = action.payload;
      const existing = state.packets[packetId] ?? initialPacketProgress(packetId);
      return {
        ...state,
        activePacketId: packetId,
        packets: {
          ...state.packets,
          [packetId]: {
            ...existing,
            status: 'active',
            currentQuestionIndex: 0,
            answers: [],
            startedAt: new Date(),
            completedAt: null,
          },
        },
      };
    }

    case 'SUBMIT_ANSWER': {
      const { packetId, text, isAutoSubmitted } = action.payload;
      const packetProgress = state.packets[packetId] ?? initialPacketProgress(packetId);
      const packetQuestions = getPacketQuestions(packetId);
      const currentQ = packetQuestions[packetProgress.currentQuestionIndex];
      if (!currentQ) return state;

      const answerDraft: Answer = {
        questionId: currentQ.id,
        text,
        score: 0,
        submittedAt: new Date(),
        isAutoSubmitted,
      };

      const scored = scoreAnswer(answerDraft, currentQ);
      const answer: Answer = { ...answerDraft, score: scored.score };

      const existingIndex = packetProgress.answers.findIndex(a => a.questionId === currentQ.id);
      const newAnswers = existingIndex >= 0
        ? packetProgress.answers.map((a, i) => (i === existingIndex ? answer : a))
        : [...packetProgress.answers, answer];

      return {
        ...state,
        packets: {
          ...state.packets,
          [packetId]: { ...packetProgress, answers: newAnswers },
        },
      };
    }

    case 'NEXT_QUESTION': {
      const { packetId } = action.payload;
      const packetProgress = state.packets[packetId] ?? initialPacketProgress(packetId);
      const packetQuestions = getPacketQuestions(packetId);
      const nextIndex = packetProgress.currentQuestionIndex + 1;

      if (nextIndex >= packetQuestions.length) {
        return {
          ...state,
          packets: {
            ...state.packets,
            [packetId]: {
              ...packetProgress,
              status: 'completed',
              completedAt: new Date(),
            },
          },
        };
      }

      return {
        ...state,
        packets: {
          ...state.packets,
          [packetId]: { ...packetProgress, currentQuestionIndex: nextIndex },
        },
      };
    }

    case 'RESET_PACKET': {
      const { packetId } = action.payload;
      return {
        ...state,
        activePacketId: state.activePacketId === packetId ? null : state.activePacketId,
        packets: {
          ...state.packets,
          [packetId]: initialPacketProgress(packetId),
        },
      };
    }

    case 'RESET_ALL':
      return { ...initialState };

    default:
      return state;
  }
}

// ─── Context ──────────────────────────────────────────────────────────────────

const ExamContext = createContext<ExamContextValue | null>(null);

export function ExamProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(examReducer, initialState);
  const [isHydrated, setIsHydrated] = useState(false);

  // Load saved state on mount (client-side only)
  useEffect(() => {
    const saved = loadState();
    if (saved && Object.keys(saved.packets).length > 0) {
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

  function getPacketProgress(packetId: PacketId): PacketProgress {
    return state.packets[packetId] ?? initialPacketProgress(packetId);
  }

  const activePacket = state.activePacketId !== null
    ? getPacketProgress(state.activePacketId)
    : null;

  const selectPacket = (packetId: PacketId) =>
    dispatch({ type: 'SELECT_PACKET', payload: { packetId } });

  const startExam = (packetId: PacketId) =>
    dispatch({ type: 'START_EXAM', payload: { packetId } });

  const submitAnswer = (packetId: PacketId, text: string, isAutoSubmitted: boolean) =>
    dispatch({ type: 'SUBMIT_ANSWER', payload: { packetId, text, isAutoSubmitted } });

  const nextQuestion = (packetId: PacketId) =>
    dispatch({ type: 'NEXT_QUESTION', payload: { packetId } });

  const resetPacket = (packetId: PacketId) => {
    dispatch({ type: 'RESET_PACKET', payload: { packetId } });
  };

  const resetAll = () => {
    clearState();
    dispatch({ type: 'RESET_ALL' });
  };

  return (
    <ExamContext.Provider
      value={{
        state,
        selectPacket,
        startExam,
        submitAnswer,
        nextQuestion,
        resetPacket,
        resetAll,
        getPacketProgress,
        activePacket,
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
