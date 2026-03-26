'use client';
import { useExam } from '@/context/ExamContext';
import { questions } from '@/lib/questions';
import { scoreAnswer } from '@/lib/scoring';
import { Answer, ScoreResult } from '@/lib/types';

export function useExamState() {
  const exam = useExam();

  const totalQuestions = questions.length;
  const answeredCount = exam.state.answers.length;
  const progressPercent = Math.round((answeredCount / totalQuestions) * 100);

  const getAnswerForQuestion = (questionId: number): Answer | undefined => {
    return exam.state.answers.find((a) => a.questionId === questionId);
  };

  const getAllScoreResults = (): ScoreResult[] => {
    return exam.state.answers.map((answer) => {
      const question = questions.find((q) => q.id === answer.questionId);
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
    return exam.state.answers.reduce((sum, a) => sum + a.score, 0);
  };

  const getMaxPossibleScore = (): number => {
    return totalQuestions * 5;
  };

  const getOverallPercentage = (): number => {
    const max = getMaxPossibleScore();
    if (max === 0) return 0;
    return Math.round((getTotalScore() / max) * 100);
  };

  return {
    ...exam,
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
