export interface Question {
  id: number;
  topicNumber: number;
  topicName: string;
  topicTag: string;
  isEnglish: boolean;
  scenario: string;
  question: string;
  timeLimit: number;
  rubric: Rubric;
  bestAnswer: string;
  explanation: string;
}

export interface Rubric {
  keywords: string[];
  concepts: string[];
  legalBasis: string[];
  analysis: string[];
  recommendations: string[];
  synonymMap: Record<string, string[]>;
}

export interface Answer {
  questionId: number;
  text: string;
  score: number;
  submittedAt: Date;
  isAutoSubmitted: boolean;
}

export interface ExamState {
  status: 'idle' | 'active' | 'completed';
  currentQuestionIndex: number;
  answers: Answer[];
  startedAt: Date | null;
  completedAt: Date | null;
}

export interface ScoreResult {
  questionId: number;
  score: number;
  maxScore: number;
  breakdown: ScoreBreakdown;
}

export interface ScoreBreakdown {
  keywordsFound: string[];
  conceptsFound: string[];
  legalBasisFound: string[];
  analysisFound: string[];
  recommendationsFound: string[];
}

// ─── Material System ───────────────────────────────────────────────────────────

export interface TopicMaterial {
  topicNumber: number;
  topicName: string;
  topicTag: string;
  isEnglish: boolean;
  overview: string;
  textContent: TextSection[];
  flashCards: FlashCard[];
  glossary: GlossaryTerm[];
  essayGuide: EssayGuide;
  infographic: InfographicData;
  relatedQuestionId: number;
  relatedQuestionIds?: Record<PacketId, number>; // mapping per paket
}

// ─── Multi-Packet System ──────────────────────────────────────────────────────

export type PacketId = 1 | 2 | 3 | 4 | 5 | 6 | 7;

export interface PacketInfo {
  id: PacketId;
  name: string;
  description: string;
  questionCount: number;
  isAvailable: boolean;
}

export interface PacketProgress {
  packetId: PacketId;
  status: 'idle' | 'active' | 'completed';
  currentQuestionIndex: number;
  answers: Answer[];
  startedAt: Date | null;
  completedAt: Date | null;
}

export interface MultiPacketExamState {
  activePacketId: PacketId | null;
  packets: Record<PacketId, PacketProgress>;
}

export interface TextSection {
  id: string;
  title: string;
  content: string;
  keyPoints: string[];
  order: number;
}

export interface FlashCard {
  id: string;
  front: string;
  back: string;
  category: 'concept' | 'legal' | 'case' | 'definition';
}

export interface GlossaryTerm {
  term: string;
  definition: string;
  relatedTerms: string[];
  category: 'concept' | 'legal' | 'institution' | 'mechanism';
}

export interface EssayGuide {
  introduction: EssaySection;
  body: EssaySection;
  conclusion: EssaySection;
  sampleOutline: string;
  tips: string[];
  commonMistakes: string[];
}

export interface EssaySection {
  title: string;
  explanation: string;
  template: string;
  doList: string[];
  dontList: string[];
}

export interface InfographicData {
  title: string;
  centerTopic: string;
  branches: InfographicBranch[];
  connections: string[];
}

export interface InfographicBranch {
  label: string;
  items: string[];
  color: string;
}
