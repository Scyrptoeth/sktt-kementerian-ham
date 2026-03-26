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
      <div className="rounded-lg border border-gray-200 overflow-hidden">
        <button
          onClick={() => setShowUser(!showUser)}
          className="w-full flex items-center justify-between px-4 py-3 bg-gray-50 hover:bg-gray-100 transition-colors text-left"
        >
          <span className="font-medium text-gray-700">Jawaban Anda</span>
          <svg
            className={`w-5 h-5 text-gray-500 transition-transform ${showUser ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {showUser && (
          <div className="px-4 py-3 text-gray-700 text-sm leading-relaxed whitespace-pre-wrap bg-white">
            {userAnswer.trim() || (
              <span className="text-gray-400 italic">Tidak ada jawaban</span>
            )}
          </div>
        )}
      </div>

      <div className="rounded-lg border border-green-200 overflow-hidden">
        <button
          onClick={() => setShowBest(!showBest)}
          className="w-full flex items-center justify-between px-4 py-3 bg-green-50 hover:bg-green-100 transition-colors text-left"
        >
          <span className="font-medium text-green-800">Jawaban Terbaik</span>
          <svg
            className={`w-5 h-5 text-green-600 transition-transform ${showBest ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {showBest && (
          <div className="px-4 py-3 space-y-3 bg-white">
            <div className="text-sm text-green-900 leading-relaxed whitespace-pre-wrap">
              {question.bestAnswer}
            </div>
            <div className="border-t border-green-100 pt-3">
              <p className="text-xs font-semibold text-green-700 uppercase tracking-wide mb-1">
                Mengapa jawaban ini terbaik:
              </p>
              <p className="text-xs text-green-800 leading-relaxed">{question.explanation}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
