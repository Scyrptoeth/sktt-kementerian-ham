import { Question, PacketId, PacketInfo } from '../types';
import { paket1Questions } from './paket-1';
import { paket2Questions } from './paket-2';
import { paket3Questions } from './paket-3';
import { paket4Questions } from './paket-4';
import { paket5Questions } from './paket-5';
import { paket6Questions } from './paket-6';
import { paket7Questions } from './paket-7';
import { paket8Questions } from './paket-8';
import { paket9Questions } from './paket-9';
import { paket10Questions } from './paket-10';

// ─── Packet Registry ──────────────────────────────────────────────────────────

const packetMap: Record<PacketId, Question[]> = {
  1: paket1Questions,
  2: paket2Questions,
  3: paket3Questions,
  4: paket4Questions,
  5: paket5Questions,
  6: paket6Questions,
  7: paket7Questions,
  8: paket8Questions,
  9: paket9Questions,
  10: paket10Questions,
};

export const packetInfoList: PacketInfo[] = [
  { id: 1, name: 'Paket 1', description: 'Studi kasus utama HAM Indonesia', questionCount: 12, isAvailable: true },
  { id: 2, name: 'Paket 2', description: 'Studi kasus lanjutan HAM Indonesia', questionCount: 12, isAvailable: true },
  { id: 3, name: 'Paket 3', description: 'Studi kasus kontemporer HAM Indonesia', questionCount: 12, isAvailable: true },
  { id: 4, name: 'Paket 4', description: 'Studi kasus historis HAM Indonesia', questionCount: 12, isAvailable: true },
  { id: 5, name: 'Paket 5', description: 'Studi kasus tematik HAM Indonesia', questionCount: 12, isAvailable: true },
  { id: 6, name: 'Paket 6', description: 'Studi kasus digital dan ekologis HAM Indonesia', questionCount: 12, isAvailable: true },
  { id: 7, name: 'Paket 7', description: 'Studi kasus struktural dan kelompok marjinal HAM Indonesia', questionCount: 12, isAvailable: true },
  { id: 8, name: 'Paket 8', description: 'Studi kasus ketenagakerjaan, migrasi, dan hak ekonomi HAM Indonesia', questionCount: 12, isAvailable: true },
  { id: 9, name: 'Paket 9', description: 'Studi kasus perempuan, anak, dan hak sosial budaya HAM Indonesia', questionCount: 12, isAvailable: true },
  { id: 10, name: 'Paket 10', description: 'Studi kasus demokrasi, tata kelola, dan reformasi kelembagaan HAM Indonesia', questionCount: 12, isAvailable: true },
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
export { paket6Questions } from './paket-6';
export { paket7Questions } from './paket-7';
export { paket8Questions } from './paket-8';
export { paket9Questions } from './paket-9';
export { paket10Questions } from './paket-10';
