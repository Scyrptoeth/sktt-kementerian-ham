import { Question, PacketId, PacketInfo } from '../types';
import { paket1Questions } from './paket-1';
import { paket2Questions } from './paket-2';
import { paket3Questions } from './paket-3';
import { paket4Questions } from './paket-4';
import { paket5Questions } from './paket-5';

// ─── Packet Registry ──────────────────────────────────────────────────────────

const packetMap: Record<PacketId, Question[]> = {
  1: paket1Questions,
  2: paket2Questions,
  3: paket3Questions,
  4: paket4Questions,
  5: paket5Questions,
};

export const packetInfoList: PacketInfo[] = [
  { id: 1, name: 'Paket 1', description: 'Studi kasus utama HAM Indonesia', questionCount: 12, isAvailable: true },
  { id: 2, name: 'Paket 2', description: 'Studi kasus lanjutan HAM Indonesia', questionCount: 12, isAvailable: true },
  { id: 3, name: 'Paket 3', description: 'Studi kasus kontemporer HAM Indonesia', questionCount: 12, isAvailable: true },
  { id: 4, name: 'Paket 4', description: 'Studi kasus historis HAM Indonesia', questionCount: 12, isAvailable: false },
  { id: 5, name: 'Paket 5', description: 'Studi kasus tematik HAM Indonesia', questionCount: 12, isAvailable: false },
];

// ─── Helper Functions ─────────────────────────────────────────────────────────

/** Get questions for a specific packet */
export function getPacketQuestions(packetId: PacketId): Question[] {
  return packetMap[packetId];
}

/** Get a single question from a specific packet */
export function getQuestion(packetId: PacketId, questionIndex: number): Question | undefined {
  return packetMap[packetId][questionIndex];
}

/** Get all available packets (with actual questions) */
export function getAvailablePackets(): PacketInfo[] {
  return packetInfoList.filter(p => p.isAvailable);
}

/** Get packet info by ID */
export function getPacketInfo(packetId: PacketId): PacketInfo | undefined {
  return packetInfoList.find(p => p.id === packetId);
}

/** Get total question count across all available packets */
export function getTotalQuestionCount(): number {
  return packetInfoList
    .filter(p => p.isAvailable)
    .reduce((sum, p) => sum + p.questionCount, 0);
}

// ─── Backward Compatibility ───────────────────────────────────────────────────

/**
 * BACKWARD COMPAT: Default export = paket 1 questions
 * Ensures all existing `import { questions } from '@/lib/questions'` continue
 * to work without any changes. Will be removed after full multi-packet migration.
 */
export const questions: Question[] = paket1Questions;

// Re-export individual packets for direct import
export { paket1Questions } from './paket-1';
export { paket2Questions } from './paket-2';
export { paket3Questions } from './paket-3';
export { paket4Questions } from './paket-4';
export { paket5Questions } from './paket-5';
