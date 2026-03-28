'use client';
import { useState, useEffect, useCallback, useRef } from 'react';
import { FlashCard } from '@/lib/types';

interface FlashCardDeckProps {
  cards: FlashCard[];
}

const categoryConfig: Record<FlashCard['category'], { label: string; color: string }> = {
  concept:    { label: 'Konsep',  color: 'bg-teal-soft-100 text-teal-soft-600' },
  legal:      { label: 'Hukum',   color: 'bg-lavender-100 text-lavender-400' },
  case:       { label: 'Kasus',   color: 'bg-rose-dust-100 text-rose-dust-500' },
  definition: { label: 'Definisi',color: 'bg-sand-100 text-sand-500' },
};

function shuffleArray<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export default function FlashCardDeck({ cards }: FlashCardDeckProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [filter, setFilter] = useState<FlashCard['category'] | 'all'>('all');
  const [deck, setDeck] = useState<FlashCard[]>(cards);
  const [isShuffled, setIsShuffled] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const filtered = filter === 'all' ? deck : deck.filter((c) => c.category === filter);
  const current = filtered[currentIndex];
  const total = filtered.length;

  const goTo = useCallback((index: number) => {
    setIsFlipped(false);
    setTimeout(() => setCurrentIndex(index), 50);
  }, []);

  const prev = useCallback(() => {
    if (currentIndex > 0) goTo(currentIndex - 1);
  }, [currentIndex, goTo]);

  const next = useCallback(() => {
    if (currentIndex < total - 1) goTo(currentIndex + 1);
  }, [currentIndex, total, goTo]);

  const flip = useCallback(() => setIsFlipped((v) => !v), []);

  // Keyboard navigation
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      if (e.key === 'ArrowLeft') { e.preventDefault(); prev(); }
      if (e.key === 'ArrowRight') { e.preventDefault(); next(); }
      if (e.key === ' ') { e.preventDefault(); flip(); }
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [prev, next, flip]);

  function handleFilterChange(cat: FlashCard['category'] | 'all') {
    setFilter(cat);
    setCurrentIndex(0);
    setIsFlipped(false);
  }

  function handleShuffle() {
    if (isShuffled) {
      setDeck(cards);
      setIsShuffled(false);
    } else {
      setDeck(shuffleArray(cards));
      setIsShuffled(true);
    }
    setCurrentIndex(0);
    setIsFlipped(false);
  }

  // Touch / swipe handlers
  function handleTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  }
  function handleTouchEnd(e: React.TouchEvent) {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const dx = touchStartX.current - e.changedTouches[0].clientX;
    const dy = touchStartY.current - e.changedTouches[0].clientY;
    if (Math.abs(dx) > 44 && Math.abs(dx) > Math.abs(dy)) {
      if (dx > 0) next();
      else prev();
    }
    touchStartX.current = null;
    touchStartY.current = null;
  }

  if (!current) {
    return (
      <div className="text-center py-12 text-text-muted text-sm">
        Tidak ada kartu untuk kategori ini.
      </div>
    );
  }

  return (
    <div className="space-y-5">
      {/* Filter + Shuffle row */}
      <div className="flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={() => handleFilterChange('all')}
          className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
            filter === 'all'
              ? 'bg-text-primary text-white'
              : 'bg-bg-card text-text-secondary hover:bg-bg-secondary'
          }`}
        >
          Semua ({cards.length})
        </button>
        {(Object.keys(categoryConfig) as FlashCard['category'][]).map((cat) => {
          const count = cards.filter((c) => c.category === cat).length;
          if (count === 0) return null;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => handleFilterChange(cat)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                filter === cat
                  ? categoryConfig[cat].color + ' ring-1 ring-current'
                  : 'bg-bg-card text-text-secondary hover:bg-bg-secondary'
              }`}
            >
              {categoryConfig[cat].label} ({count})
            </button>
          );
        })}

        {/* Shuffle button */}
        <button
          type="button"
          onClick={handleShuffle}
          title={isShuffled ? 'Kembalikan urutan asli' : 'Acak urutan kartu'}
          className={`ml-auto flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
            isShuffled
              ? 'bg-teal-soft-100 text-teal-soft-600 ring-1 ring-teal-soft-300'
              : 'bg-bg-card text-text-secondary hover:bg-bg-secondary'
          }`}
        >
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          {isShuffled ? 'Urutan Asli' : 'Acak'}
        </button>
      </div>

      {/* Counter + keyboard hint */}
      <div className="flex items-center justify-between text-xs text-text-muted px-1">
        <span>Kartu {currentIndex + 1} dari {total}</span>
        <span className="hidden sm:inline">← → pindah  ·  Space flip</span>
      </div>

      {/* Flashcard */}
      <div
        className="flashcard-scene h-52 md:h-64 cursor-pointer select-none"
        onClick={flip}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => (e.key === 'Enter' ? flip() : undefined)}
        aria-label={isFlipped ? 'Kartu: jawaban. Klik untuk lihat pertanyaan' : 'Kartu: pertanyaan. Klik untuk lihat jawaban'}
      >
        <div className={`flashcard-inner h-full ${isFlipped ? 'is-flipped' : ''}`}>
          {/* Front */}
          <div className="flashcard-face flashcard-front-face h-full">
            <div className="h-full bg-bg-secondary border-2 border-sand-200 rounded-2xl p-5 md:p-6 flex flex-col shadow-warm-md">
              <div className="flex items-center justify-between mb-3">
                <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${categoryConfig[current.category].color}`}>
                  {categoryConfig[current.category].label}
                </span>
                <span className="text-xs text-text-muted">Ketuk untuk jawaban ↗</span>
              </div>
              <div className="flex-1 flex items-center justify-center">
                <p className="text-center text-text-primary font-semibold text-base md:text-lg leading-snug">
                  {current.front}
                </p>
              </div>
            </div>
          </div>

          {/* Back */}
          <div className="flashcard-face flashcard-back-face h-full">
            <div className="h-full bg-teal-soft-50 border-2 border-teal-soft-300 rounded-2xl p-5 md:p-6 flex flex-col shadow-warm-md">
              <div className="flex items-center justify-between mb-3">
                <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${categoryConfig[current.category].color}`}>
                  {categoryConfig[current.category].label}
                </span>
                <span className="text-xs text-teal-soft-500">↙ Ketuk untuk pertanyaan</span>
              </div>
              <div className="flex-1 flex items-center justify-center">
                <p className="text-center text-text-primary leading-relaxed text-sm">
                  {current.back}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* aria-live region for screen readers */}
      <div aria-live="polite" className="sr-only">
        {isFlipped ? `Jawaban: ${current.back}` : `Pertanyaan: ${current.front}`}
      </div>

      {/* Navigation buttons */}
      <div className="flex items-center justify-center gap-3">
        <button
          type="button"
          onClick={prev}
          disabled={currentIndex === 0}
          aria-label="Kartu sebelumnya"
          className="flex items-center gap-1.5 px-4 py-2 rounded-xl border border-sand-200 text-sm font-medium text-text-secondary hover:bg-bg-secondary transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Sebelumnya
        </button>
        <button
          type="button"
          onClick={next}
          disabled={currentIndex === total - 1}
          aria-label="Kartu berikutnya"
          className="flex items-center gap-1.5 px-4 py-2 rounded-xl border border-sand-200 text-sm font-medium text-text-secondary hover:bg-bg-secondary transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Berikutnya
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Dot navigation */}
      <div className="flex justify-center gap-1.5 flex-wrap" role="tablist" aria-label="Navigasi kartu">
        {filtered.map((_, i) => (
          <button
            key={i}
            type="button"
            role="tab"
            aria-selected={i === currentIndex}
            onClick={() => goTo(i)}
            className={`w-2 h-2 rounded-full transition-colors ${
              i === currentIndex ? 'bg-teal-soft-500' : 'bg-sand-300 hover:bg-sand-400'
            }`}
            aria-label={`Kartu ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
