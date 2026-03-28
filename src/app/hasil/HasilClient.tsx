'use client';
import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { useExamState } from '@/hooks/useExamState';
import { getScoreLabel } from '@/lib/scoring';
import type { PacketId } from '@/lib/types';
import ScoreCard from '@/components/ScoreCard';
import BestAnswer from '@/components/BestAnswer';
import TopicTag from '@/components/TopicTag';

export default function HasilClient() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const rawPaket = searchParams.get('paket');
  const packetId = (rawPaket ? parseInt(rawPaket, 10) : 1) as PacketId;

  const {
    state,
    packetQuestions,
    resetExam,
    getAllScoreResults,
    getTotalScore,
    getMaxPossibleScore,
    getOverallPercentage,
  } = useExamState(packetId);

  useEffect(() => {
    if (state.status === 'idle') {
      router.replace('/');
    }
  }, [state.status, router]);

  if (state.status !== 'completed' && state.status !== 'active') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-bg-primary">
        <p className="text-text-muted">Memuat hasil...</p>
      </div>
    );
  }

  const results = getAllScoreResults();
  const totalScore = getTotalScore();
  const maxScore = getMaxPossibleScore();
  const percentage = getOverallPercentage();

  const scoreColorClass =
    percentage >= 80
      ? 'text-success'
      : percentage >= 60
      ? 'text-warning'
      : 'text-danger';

  const scoreBorderColor =
    percentage >= 80
      ? '#6B9E6B'
      : percentage >= 60
      ? '#D4A852'
      : '#C97B6B';

  const scoreLabel =
    percentage >= 80
      ? 'Sangat Baik'
      : percentage >= 60
      ? 'Cukup'
      : 'Perlu Ditingkatkan';

  const handleReset = () => {
    resetExam();
    router.push(`/ujian/${packetId}/1`);
  };

  return (
    <div id="main-content" className="min-h-screen bg-bg-primary">
      {/* Header */}
      <header
        className="px-4 py-16"
        style={{ background: 'linear-gradient(135deg, #C8D5C4 0%, #F5EFE5 40%, #F5E8E8 100%)' }}
      >
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <p className="text-sm text-text-secondary font-medium">SKTT Kementerian HAM — Hasil Latihan</p>
          <h1 className="text-2xl font-bold text-text-primary">Paket {packetId} Selesai</h1>

          {/* Score Circle */}
          <div
            className="inline-flex flex-col items-center justify-center w-32 h-32 rounded-full bg-white border-4 mt-4 shadow-warm-md"
            style={{ borderColor: scoreBorderColor }}
          >
            <span className={`text-3xl font-bold ${scoreColorClass}`}>
              {totalScore}
            </span>
            <span className="text-text-muted text-sm">dari {maxScore}</span>
          </div>

          <div className="flex flex-col items-center gap-1">
            <span className={`text-2xl font-bold ${scoreColorClass}`}>
              {percentage}%
            </span>
            <span className="text-text-primary font-medium">{scoreLabel}</span>
          </div>

          <div className="flex flex-wrap justify-center gap-6 pt-2 text-sm text-text-secondary">
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
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-teal-soft-600 hover:bg-teal-soft-500 transition-colors shadow-warm-sm"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          Ulangi Paket {packetId}
        </button>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold border-2 border-sand-300 text-text-primary bg-white hover:bg-bg-secondary transition-colors"
        >
          Kembali ke Beranda
        </Link>
      </div>

      {/* Per-Question Results */}
      <div className="max-w-3xl mx-auto px-4 pb-12 space-y-8">
        <h2 className="text-xl font-bold text-text-primary">
          Detail Per Soal
        </h2>

        {packetQuestions.map((question, index) => {
          const result = results.find(r => r.questionId === question.id);
          const userAnswer = state.answers.find(a => a.questionId === question.id);

          if (!result) return null;

          return (
            <div key={question.id} className="bg-white rounded-xl border border-sand-200 shadow-warm-sm overflow-hidden">
              {/* Topic header */}
              <div className="bg-bg-card border-b border-sand-200 px-6 py-4">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-text-muted">
                      Topik {question.topicNumber}
                    </p>
                    <h3 className="font-bold text-text-primary">{question.topicName}</h3>
                  </div>
                  <TopicTag tag={question.topicTag} isEnglish={question.isEnglish} topicNumber={question.topicNumber} />
                </div>
              </div>

              <div className="px-6 py-5 space-y-4">
                {/* Score Summary */}
                <ScoreCard result={result} questionNumber={index + 1} />

                {/* Auto-submit notice */}
                {userAnswer?.isAutoSubmitted && (
                  <div className="flex items-center gap-2 text-sm text-warning bg-sand-50 border border-sand-300 rounded-lg px-3 py-2">
                    <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Jawaban ini dikirim otomatis karena waktu habis
                  </div>
                )}

                {/* Scenario reminder */}
                <div className="rounded-lg border border-sand-200 p-3 bg-bg-card">
                  <p className="text-xs font-bold uppercase tracking-wide text-text-muted mb-1">
                    Pertanyaan
                  </p>
                  <p className="text-text-secondary text-sm leading-relaxed">{question.question}</p>
                </div>

                {/* Score label */}
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-text-secondary">Nilai:</span>
                  <span
                    className={`text-sm font-bold ${
                      result.score >= 4 ? 'text-success' :
                      result.score >= 3 ? 'text-warning' :
                      result.score >= 1 ? 'text-danger' : 'text-text-muted'
                    }`}
                  >
                    {result.score}/{result.maxScore} — {getScoreLabel(result.score)}
                  </span>
                </div>

                {/* Materi link — always shown, contextual message based on score */}
                <Link
                  href={`/materi/${question.topicNumber}`}
                  className={`flex items-center gap-2.5 rounded-lg px-4 py-2.5 text-sm transition-colors border ${
                    result.score >= 4
                      ? 'bg-sage-50 border-sage-200 hover:bg-sage-100'
                      : 'bg-teal-soft-50 border-teal-soft-200 hover:bg-teal-soft-100'
                  }`}
                >
                  <span>📖</span>
                  <span className="text-text-secondary">
                    {result.score >= 4
                      ? 'Review dan konsolidasi pemahaman topik ini'
                      : 'Pelajari materi topik ini untuk meningkatkan pemahaman'}
                  </span>
                  <span className={`font-medium ml-auto flex-shrink-0 ${result.score >= 4 ? 'text-sage-600' : 'text-teal-soft-600'}`}>
                    {result.score >= 4 ? 'Review →' : 'Belajar →'}
                  </span>
                </Link>

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
