import { Question, Answer, ScoreResult, ScoreBreakdown } from './types';

function normalizeText(text: string): string {
  return text.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function containsTermOrSynonym(
  text: string,
  term: string,
  synonymMap: Record<string, string[]>
): boolean {
  const normalizedText = normalizeText(text);
  const normalizedTerm = normalizeText(term);

  if (normalizedText.includes(normalizedTerm)) return true;

  const synonyms = synonymMap[term] || [];
  return synonyms.some((syn) => normalizedText.includes(normalizeText(syn)));
}

export function scoreAnswer(answer: Answer, question: Question): ScoreResult {
  const text = answer.text;
  const { rubric } = question;

  const keywordsFound = rubric.keywords.filter((kw) =>
    containsTermOrSynonym(text, kw, rubric.synonymMap)
  );
  const conceptsFound = rubric.concepts.filter((c) =>
    containsTermOrSynonym(text, c, rubric.synonymMap)
  );
  const legalBasisFound = rubric.legalBasis.filter((lb) =>
    containsTermOrSynonym(text, lb, rubric.synonymMap)
  );
  const analysisFound = rubric.analysis.filter((a) =>
    containsTermOrSynonym(text, a, rubric.synonymMap)
  );
  const recommendationsFound = rubric.recommendations.filter((r) =>
    containsTermOrSynonym(text, r, rubric.synonymMap)
  );

  let score = 0;

  if (text.trim().length === 0) {
    score = 0;
  } else if (keywordsFound.length <= 2) {
    score = 1;
  } else if (keywordsFound.length <= 4 && conceptsFound.length <= 2) {
    score = 2;
  } else if (
    keywordsFound.length <= 6 &&
    conceptsFound.length <= 3 &&
    legalBasisFound.length >= 1
  ) {
    score = 3;
  } else if (
    keywordsFound.length <= 8 &&
    conceptsFound.length <= 4 &&
    legalBasisFound.length >= 2 &&
    recommendationsFound.length >= 1
  ) {
    score = 4;
  } else if (
    keywordsFound.length >= 9 &&
    conceptsFound.length >= 4 &&
    legalBasisFound.length >= 2 &&
    recommendationsFound.length >= 2
  ) {
    score = 5;
  } else {
    const totalScore =
      Math.min(keywordsFound.length / 9, 1) * 2 +
      Math.min(conceptsFound.length / 4, 1) * 1 +
      Math.min(legalBasisFound.length / 2, 1) * 1 +
      Math.min(recommendationsFound.length / 2, 1) * 1;
    score = Math.min(Math.round(totalScore), 5);
  }

  return {
    questionId: question.id,
    score,
    maxScore: 5,
    breakdown: {
      keywordsFound,
      conceptsFound,
      legalBasisFound,
      analysisFound,
      recommendationsFound,
    },
  };
}

export function calculateTotalScore(results: ScoreResult[]): number {
  return results.reduce((sum, r) => sum + r.score, 0);
}

export function getScoreLabel(score: number): string {
  if (score === 5) return 'Komprehensif';
  if (score === 4) return 'Mendalam';
  if (score === 3) return 'Cukup Baik';
  if (score === 2) return 'Dasar';
  if (score === 1) return 'Dangkal';
  return 'Kosong';
}

export function getPercentage(score: number, max: number): number {
  return Math.round((score / max) * 100);
}
