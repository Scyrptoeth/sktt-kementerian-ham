'use client';
import { useState, useCallback, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Question } from '@/lib/types';
import { useExam } from '@/context/ExamContext';
import { questions } from '@/lib/questions';
import { useTimer } from '@/hooks/useTimer';
import Timer from '@/components/Timer';
import EssayInput from '@/components/EssayInput';
import ProgressBar from '@/components/ProgressBar';
import TopicTag from '@/components/TopicTag';

interface UjianClientProps {
  question: Question;
  questionNumber: number;
}

export default function UjianClient({ question, questionNumber }: UjianClientProps) {
  const router = useRouter();
  const { state, submitAnswer, nextQuestion, startExam } = useExam();
  const [answerText, setAnswerText] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const isLastQuestion = questionNumber === questions.length;

  // Sync exam state when navigating to this page
  useEffect(() => {
    if (state.status === 'idle') {
      startExam();
    }
    // Reset local answer state for this question
    const existingAnswer = state.answers.find(a => a.questionId === question.id);
    if (existingAnswer) {
      setAnswerText(existingAnswer.text);
      setSubmitted(true);
    } else {
      setAnswerText('');
      setSubmitted(false);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [question.id]);

  const handleSubmit = useCallback(
    (isAuto = false) => {
      if (submitted) return;
      setSubmitted(true);
      submitAnswer(answerText, isAuto);

      setTimeout(() => {
        if (isLastQuestion) {
          nextQuestion();
          router.push('/hasil');
        } else {
          nextQuestion();
          router.push(`/ujian/${questionNumber + 1}`);
        }
      }, 200);
    },
    [submitted, answerText, submitAnswer, isLastQuestion, nextQuestion, router, questionNumber]
  );

  const handleExpire = useCallback(() => {
    if (!submitted) {
      handleSubmit(true);
    }
  }, [submitted, handleSubmit]);

  const { timeLeft, isRunning, start, reset } = useTimer(question.timeLimit, handleExpire);

  // Start timer when question loads
  useEffect(() => {
    reset(question.timeLimit);
    setTimeout(() => start(), 100);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [question.id]);

  return (
    <div className="min-h-screen bg-bg-primary flex flex-col">
      {/* Header */}
      <header className="bg-bg-secondary border-b border-sand-200 px-4 py-4">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <div>
            <p className="text-xs font-medium text-text-muted">
              SKTT Kementerian HAM
            </p>
            <h1 className="font-bold text-lg text-text-primary">Paket Latihan</h1>
          </div>
          <Timer timeLeft={timeLeft} isRunning={isRunning} />
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
                disabled={submitted}
                placeholder={
                  question.isEnglish
                    ? 'Write your essay answer here... (minimum 150 words recommended)'
                    : 'Tulis jawaban esai Anda di sini... (minimal 150 kata dianjurkan)'
                }
              />
            </div>

            {/* Submit Button */}
            <div className="flex items-center justify-between pt-2">
              <p className="text-xs text-text-muted">
                {submitted
                  ? 'Jawaban terkirim, melanjutkan...'
                  : 'Jawaban otomatis terkirim saat waktu habis'}
              </p>
              <button
                onClick={() => handleSubmit(false)}
                disabled={submitted}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-teal-soft-600 hover:bg-teal-soft-500 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-warm-sm"
              >
                {isLastQuestion
                  ? (question.isEnglish ? 'Submit & See Results' : 'Kirim & Lihat Hasil')
                  : (question.isEnglish ? 'Submit & Next' : 'Kirim Jawaban & Lanjut')}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
