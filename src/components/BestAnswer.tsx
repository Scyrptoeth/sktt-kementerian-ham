'use client';
import { useState } from 'react';
import { Question } from '@/lib/types';

interface BestAnswerProps {
  question: Question;
  userAnswer: string;
}

export default function BestAnswer({ question, userAnswer }: BestAnswerProps) {
  const [showBest, setShowBest] = useState(false);
  const [showUser, setShowUser] = useState(false);

  return (
    <div className="space-y-4 mt-4">
      <div className="rounded-lg border border-sand-200 overflow-hidden">
        <button
          onClick={() => setShowUser(!showUser)}
          className="w-full flex items-center justify-between px-4 py-3 bg-bg-card hover:bg-bg-secondary transition-colors text-left"
        >
          <span className="font-medium text-text-secondary">Jawaban Anda</span>
          <svg
            className={`w-5 h-5 text-text-muted transition-transform ${showUser ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {showUser && (
          <div className="px-4 py-3 text-text-secondary text-sm leading-relaxed whitespace-pre-wrap bg-white">
            {userAnswer.trim() || (
              <span className="text-text-muted italic">Tidak ada jawaban</span>
            )}
          </div>
        )}
      </div>

      <div className="rounded-lg border border-sage-200 overflow-hidden">
        <button
          onClick={() => setShowBest(!showBest)}
          className="w-full flex items-center justify-between px-4 py-3 bg-sage-50 hover:bg-sage-100 transition-colors text-left"
        >
          <span className="font-medium text-sage-600">Jawaban Terbaik</span>
          <svg
            className={`w-5 h-5 text-sage-500 transition-transform ${showBest ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {showBest && (
          <div className="px-4 py-3 space-y-3 bg-white">
            <div className="text-sm text-text-primary leading-relaxed whitespace-pre-wrap">
              {question.bestAnswer}
            </div>
            <div className="border-t border-sage-100 pt-3">
              <p className="text-xs font-semibold text-sage-600 uppercase tracking-wide mb-1">
                Mengapa jawaban ini terbaik:
              </p>
              <p className="text-xs text-text-secondary leading-relaxed">{question.explanation}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
