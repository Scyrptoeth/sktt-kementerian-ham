'use client';
import { useExam } from '@/context/ExamContext';
import { getPacketQuestions } from '@/lib/questions';
import { scoreAnswer } from '@/lib/scoring';
import { Answer, PacketId, ScoreResult } from '@/lib/types';

export function useExamState(packetId: PacketId = 1) {
  const exam = useExam();
  const packetProgress = exam.getPacketProgress(packetId);
  const packetQuestions = getPacketQuestions(packetId);

  const totalQuestions = packetQuestions.length;
  const answeredCount = packetProgress.answers.length;
  const progressPercent = Math.round((answeredCount / totalQuestions) * 100);

  const getAnswerForQuestion = (questionId: number): Answer | undefined => {
    return packetProgress.answers.find((a) => a.questionId === questionId);
  };

  const getAllScoreResults = (): ScoreResult[] => {
    return packetProgress.answers.map((answer) => {
      const question = packetQuestions.find((q) => q.id === answer.questionId);
      if (!question) {
        return {
          questionId: answer.questionId,
          score: 0,
          maxScore: 5,
          breakdown: {
            keywordsFound: [],
            conceptsFound: [],
            legalBasisFound: [],
            analysisFound: [],
            recommendationsFound: [],
          },
        };
      }
      return scoreAnswer(answer, question);
    });
  };

  const getTotalScore = (): number => {
    return packetProgress.answers.reduce((sum, a) => sum + a.score, 0);
  };

  const getMaxPossibleScore = (): number => totalQuestions * 5;

  const getOverallPercentage = (): number => {
    const max = getMaxPossibleScore();
    if (max === 0) return 0;
    return Math.round((getTotalScore() / max) * 100);
  };

  const resetExam = () => exam.resetPacket(packetId);

  // Expose a backward-compatible state shape for components that read state.status / state.answers
  const state = {
    status: packetProgress.status,
    currentQuestionIndex: packetProgress.currentQuestionIndex,
    answers: packetProgress.answers,
    startedAt: packetProgress.startedAt,
    completedAt: packetProgress.completedAt,
  };

  return {
    state,
    packetQuestions,
    resetExam,
    totalQuestions,
    answeredCount,
    progressPercent,
    getAnswerForQuestion,
    getAllScoreResults,
    getTotalScore,
    getMaxPossibleScore,
    getOverallPercentage,
  };
}
