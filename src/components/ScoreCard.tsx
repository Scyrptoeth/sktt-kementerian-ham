import { ScoreResult } from '@/lib/types';
import { getScoreLabel } from '@/lib/scoring';
import { questions } from '@/lib/questions';

interface ScoreCardProps {
  result: ScoreResult;
  questionNumber: number;
}

const scoreColors: Record<number, { bg: string; text: string; border: string }> = {
  0: { bg: 'bg-bg-card',         text: 'text-text-muted',        border: 'border-sand-200' },
  1: { bg: 'bg-rose-dust-50',    text: 'text-rose-dust-500',     border: 'border-rose-dust-300' },
  2: { bg: 'bg-sand-50',         text: 'text-sand-500',          border: 'border-sand-300' },
  3: { bg: 'bg-sand-100',        text: 'text-warning',           border: 'border-sand-400' },
  4: { bg: 'bg-teal-soft-100',   text: 'text-teal-soft-500',     border: 'border-teal-soft-300' },
  5: { bg: 'bg-sage-100',        text: 'text-sage-600',          border: 'border-sage-300' },
};

export default function ScoreCard({ result, questionNumber }: ScoreCardProps) {
  const question = questions.find((q) => q.id === result.questionId);
  const color = scoreColors[result.score] ?? scoreColors[0];
  const label = getScoreLabel(result.score);
  const percent = Math.round((result.score / result.maxScore) * 100);

  return (
    <div className={`rounded-xl border-2 ${color.border} ${color.bg} p-5 space-y-3 shadow-warm-sm`}>
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs text-text-muted font-medium uppercase tracking-wide">
            Soal {questionNumber}
          </p>
          <h3 className="font-semibold text-text-primary mt-0.5">
            {question?.topicName ?? `Topik ${result.questionId}`}
          </h3>
        </div>
        <div className={`flex flex-col items-center rounded-lg px-3 py-1.5 ${color.bg} border ${color.border}`}>
          <span className={`text-2xl font-bold ${color.text}`}>
            {result.score}/{result.maxScore}
          </span>
          <span className={`text-xs font-semibold ${color.text}`}>{label}</span>
        </div>
      </div>

      <div className="w-full bg-bg-card rounded-full h-2">
        <div
          className={`h-2 rounded-full transition-all duration-500 ${
            result.score >= 4
              ? 'bg-teal-soft-400'
              : result.score >= 3
              ? 'bg-warning'
              : result.score >= 2
              ? 'bg-sand-400'
              : result.score >= 1
              ? 'bg-rose-dust-400'
              : 'bg-sand-200'
          }`}
          style={{ width: `${percent}%` }}
        />
      </div>

      <div className="grid grid-cols-2 gap-2 text-xs text-text-secondary">
        <div>
          <span className="font-medium">Kata kunci ditemukan:</span>{' '}
          <span className={color.text}>{result.breakdown.keywordsFound.length}</span>
        </div>
        <div>
          <span className="font-medium">Konsep:</span>{' '}
          <span className={color.text}>{result.breakdown.conceptsFound.length}</span>
        </div>
        <div>
          <span className="font-medium">Dasar hukum:</span>{' '}
          <span className={color.text}>{result.breakdown.legalBasisFound.length}</span>
        </div>
        <div>
          <span className="font-medium">Rekomendasi:</span>{' '}
          <span className={color.text}>{result.breakdown.recommendationsFound.length}</span>
        </div>
      </div>
    </div>
  );
}
