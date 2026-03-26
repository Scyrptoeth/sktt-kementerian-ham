'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useExamState } from '@/hooks/useExamState';
import { questions } from '@/lib/questions';
import { getScoreLabel } from '@/lib/scoring';
import ScoreCard from '@/components/ScoreCard';
import BestAnswer from '@/components/BestAnswer';
import TopicTag from '@/components/TopicTag';

export default function HasilClient() {
  const router = useRouter();
  const {
    state,
    resetExam,
    getAllScoreResults,
    getTotalScore,
    getMaxPossibleScore,
    getOverallPercentage,
  } = useExamState();

  useEffect(() => {
    if (state.status === 'idle') {
      router.replace('/');
    }
  }, [state.status, router]);

  if (state.status !== 'completed' && state.status !== 'active') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Memuat hasil...</p>
      </div>
    );
  }

  const results = getAllScoreResults();
  const totalScore = getTotalScore();
  const maxScore = getMaxPossibleScore();
  const percentage = getOverallPercentage();

  const scoreColor =
    percentage >= 80
      ? '#16a34a'
      : percentage >= 60
      ? '#ca8a04'
      : '#dc2626';

  const scoreLabel =
    percentage >= 80
      ? 'Sangat Baik'
      : percentage >= 60
      ? 'Cukup'
      : 'Perlu Ditingkatkan';

  const handleReset = () => {
    resetExam();
    router.push('/ujian/1');
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header style={{ backgroundColor: '#0f2244' }} className="text-white px-4 py-6">
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <p className="text-sm" style={{ color: '#a5b8fc' }}>SKTT Kementerian HAM — Hasil Latihan</p>
          <h1 className="text-2xl font-bold">Paket Latihan Selesai</h1>

          {/* Score Circle */}
          <div className="inline-flex flex-col items-center justify-center w-32 h-32 rounded-full bg-white border-4 mt-4" style={{ borderColor: scoreColor }}>
            <span className="text-3xl font-bold" style={{ color: scoreColor }}>
              {totalScore}
            </span>
            <span className="text-gray-400 text-sm">dari {maxScore}</span>
          </div>

          <div className="flex flex-col items-center gap-1">
            <span className="text-2xl font-bold" style={{ color: scoreColor === '#16a34a' ? '#86efac' : scoreColor === '#ca8a04' ? '#fde68a' : '#fca5a5' }}>
              {percentage}%
            </span>
            <span className="text-white font-medium">{scoreLabel}</span>
          </div>

          <div className="flex flex-wrap justify-center gap-6 pt-2 text-sm" style={{ color: '#c7d7fe' }}>
            <span>{results.length} soal dijawab</span>
            <span>{results.filter(r => r.score >= 4).length} soal mendalam/komprehensif</span>
            <span>{results.filter(r => r.score <= 1).length} soal perlu diperbaiki</span>
          </div>
        </div>
      </header>

      {/* Actions */}
      <div className="max-w-3xl mx-auto px-4 py-6 flex flex-wrap gap-3">
        <button
          onClick={handleReset}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white transition-colors"
          style={{ backgroundColor: '#0f2244' }}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          Ulangi Paket
        </button>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold border-2 transition-colors"
          style={{ borderColor: '#0f2244', color: '#0f2244', backgroundColor: 'white' }}
        >
          Kembali ke Beranda
        </Link>
      </div>

      {/* Per-Question Results */}
      <div className="max-w-3xl mx-auto px-4 pb-12 space-y-8">
        <h2 className="text-xl font-bold" style={{ color: '#0f2244' }}>
          Detail Per Soal
        </h2>

        {questions.map((question, index) => {
          const result = results.find(r => r.questionId === question.id);
          const userAnswer = state.answers.find(a => a.questionId === question.id);

          if (!result) return null;

          return (
            <div key={question.id} className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
              {/* Topic header */}
              <div style={{ backgroundColor: '#f0f4ff', borderBottom: '1px solid #c7d7fe' }} className="px-6 py-4">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide" style={{ color: '#152d5a' }}>
                      Topik {question.topicNumber}
                    </p>
                    <h3 className="font-bold" style={{ color: '#0f2244' }}>{question.topicName}</h3>
                  </div>
                  <TopicTag tag={question.topicTag} isEnglish={question.isEnglish} />
                </div>
              </div>

              <div className="px-6 py-5 space-y-4">
                {/* Score Summary */}
                <ScoreCard result={result} questionNumber={index + 1} />

                {/* Auto-submit notice */}
                {userAnswer?.isAutoSubmitted && (
                  <div className="flex items-center gap-2 text-sm text-orange-600 bg-orange-50 border border-orange-200 rounded-lg px-3 py-2">
                    <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Jawaban ini dikirim otomatis karena waktu habis
                  </div>
                )}

                {/* Scenario reminder */}
                <div className="rounded-lg border p-3" style={{ backgroundColor: '#f8fafc', borderColor: '#e2e8f0' }}>
                  <p className="text-xs font-bold uppercase tracking-wide text-gray-400 mb-1">
                    {question.isEnglish ? 'Pertanyaan' : 'Pertanyaan'}
                  </p>
                  <p className="text-gray-700 text-sm leading-relaxed">{question.question}</p>
                </div>

                {/* Score label */}
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-gray-600">Nilai:</span>
                  <span
                    className="text-sm font-bold"
                    style={{
                      color:
                        result.score >= 4 ? '#16a34a' :
                        result.score >= 3 ? '#ca8a04' :
                        result.score >= 1 ? '#dc2626' : '#6b7280'
                    }}
                  >
                    {result.score}/{result.maxScore} — {getScoreLabel(result.score)}
                  </span>
                </div>

                {/* Best Answer Comparison */}
                <BestAnswer
                  question={question}
                  userAnswer={userAnswer?.text ?? ''}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
