import { ScoreResult } from '@/lib/types';
import { getScoreLabel } from '@/lib/scoring';
import { questions } from '@/lib/questions';

interface ScoreCardProps {
  result: ScoreResult;
  questionNumber: number;
}

const scoreColors: Record<number, { bg: string; text: string; border: string }> = {
  0: { bg: 'bg-gray-100', text: 'text-gray-600', border: 'border-gray-300' },
  1: { bg: 'bg-red-50', text: 'text-red-700', border: 'border-red-300' },
  2: { bg: 'bg-orange-50', text: 'text-orange-700', border: 'border-orange-300' },
  3: { bg: 'bg-yellow-50', text: 'text-yellow-700', border: 'border-yellow-400' },
  4: { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-400' },
  5: { bg: 'bg-green-50', text: 'text-green-700', border: 'border-green-500' },
};

export default function ScoreCard({ result, questionNumber }: ScoreCardProps) {
  const question = questions.find((q) => q.id === result.questionId);
  const color = scoreColors[result.score] ?? scoreColors[0];
  const label = getScoreLabel(result.score);
  const percent = Math.round((result.score / result.maxScore) * 100);

  return (
    <div className={`rounded-xl border-2 ${color.border} ${color.bg} p-5 space-y-3`}>
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">
            Soal {questionNumber}
          </p>
          <h3 className="font-semibold text-gray-800 mt-0.5">
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

      <div className="w-full bg-white rounded-full h-2">
        <div
          className={`h-2 rounded-full transition-all duration-500 ${
            result.score >= 4
              ? 'bg-green-500'
              : result.score >= 3
              ? 'bg-yellow-500'
              : result.score >= 2
              ? 'bg-orange-500'
              : result.score >= 1
              ? 'bg-red-400'
              : 'bg-gray-300'
          }`}
          style={{ width: `${percent}%` }}
        />
      </div>

      <div className="grid grid-cols-2 gap-2 text-xs text-gray-600">
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
