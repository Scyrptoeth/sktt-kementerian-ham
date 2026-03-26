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
