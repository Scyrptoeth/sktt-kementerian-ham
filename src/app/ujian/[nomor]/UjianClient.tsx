'use client';
import { useState, useCallback, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Question } from '@/lib/types';
import { useExam } from '@/context/ExamContext';
import { questions } from '@/lib/questions';
import { scoreAnswer } from '@/lib/scoring';
import { useTimer } from '@/hooks/useTimer';
import Timer from '@/components/Timer';
import EssayInput from '@/components/EssayInput';
import ProgressBar from '@/components/ProgressBar';
import TopicTag from '@/components/TopicTag';

interface UjianClientProps {
  question: Question;
  questionNumber: number;
}

type QuestionPhase = 'answering' | 'reviewed';

function ScoreBadge({ score }: { score: number }) {
  const colorClass =
    score >= 4
      ? 'bg-teal-soft-100 text-teal-soft-600 border-teal-soft-300'
      : score >= 2
      ? 'bg-sand-100 text-sand-500 border-sand-300'
      : 'bg-danger-light text-danger border-rose-dust-300';

  const label =
    score === 5
      ? 'Komprehensif'
      : score === 4
      ? 'Mendalam'
      : score === 3
      ? 'Cukup Baik'
      : score === 2
      ? 'Dasar'
      : score === 1
      ? 'Dangkal'
      : 'Kosong';

  return (
    <div className={`rounded-xl border-2 px-6 py-4 flex items-center justify-between ${colorClass}`}>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide opacity-70 mb-1">Skor Anda</p>
        <p className="text-3xl font-bold">{score}/5</p>
      </div>
      <div className="text-right">
        <p className="text-lg font-semibold">{label}</p>
        <div className="flex gap-1 mt-1 justify-end">
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className={`w-5 h-2 rounded-full ${i <= score ? 'opacity-100' : 'opacity-20'}`}
              style={{ backgroundColor: 'currentColor' }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function UjianClient({ question, questionNumber }: UjianClientProps) {
  const router = useRouter();
  const { state, submitAnswer, nextQuestion, startExam } = useExam();
  const [answerText, setAnswerText] = useState('');
  const [questionPhase, setQuestionPhase] = useState<QuestionPhase>('answering');
  const [submittedScore, setSubmittedScore] = useState<number>(0);
  const [frozenTimeLeft, setFrozenTimeLeft] = useState<number | null>(null);

  const isLastQuestion = questionNumber === questions.length;

  // Sync exam state when navigating to this question
  useEffect(() => {
    if (state.status === 'idle') {
      startExam();
    }
    // Reset phase for new question
    const existingAnswer = state.answers.find((a) => a.questionId === question.id);
    if (existingAnswer) {
      setAnswerText(existingAnswer.text);
      setSubmittedScore(existingAnswer.score);
      setQuestionPhase('reviewed');
    } else {
      setAnswerText('');
      setSubmittedScore(0);
      setFrozenTimeLeft(null);
      setQuestionPhase('answering');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [question.id]);

  const handleSubmit = useCallback(
    (isAuto = false) => {
      if (questionPhase === 'reviewed') return;

      // Calculate score before submitting so we can display it immediately
      const draftAnswer = {
        questionId: question.id,
        text: answerText,
        score: 0,
        submittedAt: new Date(),
        isAutoSubmitted: isAuto,
      };
      const scored = scoreAnswer(draftAnswer, question);

      submitAnswer(answerText, isAuto);
      setSubmittedScore(scored.score);
      setQuestionPhase('reviewed');
    },
    [questionPhase, answerText, submitAnswer, question]
  );

  const handleExpire = useCallback(() => {
    if (questionPhase !== 'reviewed') {
      setFrozenTimeLeft(0);
      handleSubmit(true);
    }
  }, [questionPhase, handleSubmit]);

  const { timeLeft, isRunning, start, stop, reset } = useTimer(question.timeLimit, handleExpire);

  // Start timer when question loads
  useEffect(() => {
    reset(question.timeLimit);
    setTimeout(() => start(), 100);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [question.id]);

  // Stop timer when phase changes to reviewed
  useEffect(() => {
    if (questionPhase === 'reviewed') {
      setFrozenTimeLeft((prev) => (prev !== null ? prev : timeLeft));
      stop();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [questionPhase]);

  const handleNext = useCallback(() => {
    nextQuestion();
    if (isLastQuestion) {
      router.push('/hasil');
    } else {
      router.push(`/ujian/${questionNumber + 1}`);
    }
  }, [nextQuestion, isLastQuestion, router, questionNumber]);

  const displayTimeLeft = questionPhase === 'reviewed' ? (frozenTimeLeft ?? timeLeft) : timeLeft;

  return (
    <div className="min-h-screen bg-bg-primary flex flex-col">
      {/* Header */}
      <header className="bg-bg-secondary border-b border-sand-200 px-4 py-4">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium text-text-secondary hover:text-text-primary hover:bg-bg-card border border-sand-200 hover:border-sand-300 transition-all duration-150"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Beranda
            </Link>
            <div>
              <p className="text-xs font-medium text-text-muted">
                SKTT Kementerian HAM
              </p>
              <h1 className="font-bold text-lg text-text-primary">Paket Latihan</h1>
            </div>
          </div>
          {questionPhase === 'answering' ? (
            <Timer timeLeft={timeLeft} isRunning={isRunning} />
          ) : (
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-lg transition-colors duration-300 border-2 bg-bg-secondary text-text-primary border-sand-300">
              <svg
                className="w-5 h-5 text-text-secondary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="font-bold timer-digit">
                {displayTimeLeft === 0
                  ? 'Waktu selesai'
                  : (() => {
                      const m = Math.floor(displayTimeLeft / 60);
                      const s = displayTimeLeft % 60;
                      return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
                    })()}
              </span>
            </div>
          )}
        </div>
      </header>

      <main className="flex-1 max-w-3xl mx-auto w-full px-4 py-6 space-y-6">
        {/* Progress */}
        <ProgressBar current={questionNumber} total={questions.length} />

        {/* Question Card */}
        <div className="bg-white rounded-xl border border-sand-200 shadow-warm-sm overflow-hidden">
          {/* Topic Header */}
          <div className="bg-bg-card border-b border-sand-200 px-6 py-4">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-text-muted">
                  Topik {question.topicNumber}
                </p>
                <h2 className="text-lg font-bold text-text-primary">
                  {question.topicName}
                </h2>
              </div>
              <TopicTag tag={question.topicTag} isEnglish={question.isEnglish} topicNumber={question.topicNumber} />
            </div>
          </div>

          <div className="px-6 py-5 space-y-5">
            {/* Scenario */}
            <div className="rounded-r-lg border-l-4 border-sage-300 bg-bg-card p-4">
              <p className="text-xs font-bold uppercase tracking-wide text-text-muted mb-2">
                {question.isEnglish ? 'Case Scenario' : 'Skenario Kasus'}
              </p>
              <p className="text-text-secondary text-sm leading-relaxed">{question.scenario}</p>
            </div>

            {/* Question */}
            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-text-muted mb-2">
                {question.isEnglish ? 'Question' : 'Pertanyaan'}
              </p>
              <p className="text-text-primary font-medium leading-relaxed">{question.question}</p>
            </div>

            {/* Essay Input */}
            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-text-muted mb-2">
                {question.isEnglish ? 'Your Answer' : 'Jawaban Anda'}
              </p>
              <EssayInput
                value={answerText}
                onChange={setAnswerText}
                disabled={questionPhase === 'reviewed'}
                placeholder={
                  question.isEnglish
                    ? 'Write your essay answer here... (minimum 150 words recommended)'
                    : 'Tulis jawaban esai Anda di sini... (minimal 150 kata dianjurkan)'
                }
              />
            </div>

            {/* FASE ANSWERING: Submit Button */}
            {questionPhase === 'answering' && (
              <div className="flex items-center justify-between pt-2">
                <p className="text-xs text-text-muted">
                  Jawaban otomatis terkirim saat waktu habis
                </p>
                <button
                  onClick={() => handleSubmit(false)}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-teal-soft-600 hover:bg-teal-soft-500 transition-all duration-200 shadow-warm-sm"
                >
                  {isLastQuestion
                    ? (question.isEnglish ? 'Submit & See Results' : 'Kirim Jawaban & Lanjut')
                    : (question.isEnglish ? 'Submit & Next' : 'Kirim Jawaban & Lanjut')}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </div>
            )}

            {/* FASE REVIEWED: Score + Best Answer + Pembahasan + Next Button */}
            {questionPhase === 'reviewed' && (
              <div className="space-y-4 pt-2">
                {/* Score Badge */}
                <ScoreBadge score={submittedScore} />

                {/* Best Answer */}
                <div className="rounded-lg border border-sage-200 overflow-hidden">
                  <div className="px-4 py-3 bg-sage-50 border-b border-sage-200">
                    <p className="text-xs font-semibold uppercase tracking-wide text-sage-600">
                      {question.isEnglish ? 'Best Answer' : 'Jawaban Terbaik'}
                    </p>
                  </div>
                  <div className="px-4 py-4 bg-white">
                    <p className="text-sm text-text-primary leading-relaxed whitespace-pre-wrap">
                      {question.bestAnswer}
                    </p>
                  </div>
                </div>

                {/* Pembahasan */}
                <div className="rounded-lg border border-sand-200 overflow-hidden">
                  <div className="px-4 py-3 bg-bg-card border-b border-sand-200">
                    <p className="text-xs font-semibold uppercase tracking-wide text-text-muted">
                      {question.isEnglish ? 'Explanation' : 'Pembahasan'}
                    </p>
                  </div>
                  <div className="px-4 py-4 bg-bg-card">
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {question.explanation}
                    </p>
                  </div>
                </div>

                {/* Next Button */}
                <div className="flex justify-end pt-2">
                  <button
                    onClick={handleNext}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-teal-soft-600 hover:bg-teal-soft-500 transition-all duration-200 shadow-warm-sm"
                  >
                    {isLastQuestion
                      ? (question.isEnglish ? 'See Full Results →' : 'Lihat Hasil Lengkap →')
                      : (question.isEnglish ? 'Next Question →' : 'Lanjut ke Soal Berikutnya →')}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
