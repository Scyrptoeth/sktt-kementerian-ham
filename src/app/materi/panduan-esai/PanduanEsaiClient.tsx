'use client';
import { useState } from 'react';
import Link from 'next/link';
import { generalEssayGuide } from '@/lib/essayGuideGeneral';

const NAV_SECTIONS = [
  { id: 'structure', label: 'Struktur Esai', icon: '📐' },
  { id: 'scoring', label: 'Cara Skor Tinggi', icon: '🎯' },
  { id: 'time', label: 'Manajemen Waktu', icon: '⏱️' },
  { id: 'mistakes', label: 'Kesalahan Umum', icon: '⚠️' },
  { id: 'protips', label: 'Tips Pro', icon: '💡' },
];

export default function PanduanEsaiClient() {
  const [activeSection, setActiveSection] = useState('structure');
  const guide = generalEssayGuide;

  return (
    <div className="min-h-screen bg-bg-primary">
      {/* Hero */}
      <section
        className="py-14 px-4"
        style={{ background: 'linear-gradient(135deg, #F5EFE5 0%, #E8F2F0 50%, #EDE8F5 100%)' }}
      >
        <div className="max-w-4xl mx-auto space-y-3">
          <Link
            href="/materi"
            className="inline-flex items-center gap-1.5 text-sm text-text-muted hover:text-text-secondary transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Materi
          </Link>
          <div className="inline-block bg-white/60 border border-rose-dust-200 px-3 py-1 rounded-full text-xs font-medium text-rose-dust-600">
            Panduan Umum
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-text-primary leading-tight">
            {guide.title}
          </h1>
          <p className="text-text-secondary max-w-2xl leading-relaxed">{guide.subtitle}</p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="/ujian/1"
              className="inline-flex items-center gap-2 bg-teal-soft-600 hover:bg-teal-soft-500 text-white font-semibold px-5 py-2.5 rounded-xl transition-colors shadow-warm-sm text-sm"
            >
              Mulai Latihan Sekarang
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 py-10 flex gap-8">
        {/* Sidebar nav */}
        <aside className="hidden lg:block w-52 flex-shrink-0 self-start sticky top-20">
          <nav className="space-y-1">
            {NAV_SECTIONS.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setActiveSection(s.id)}
                className={`w-full text-left flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                  activeSection === s.id
                    ? 'bg-teal-soft-100 text-teal-soft-600 font-medium'
                    : 'text-text-secondary hover:bg-bg-card hover:text-text-primary'
                }`}
              >
                <span>{s.icon}</span>
                {s.label}
              </button>
            ))}
          </nav>
        </aside>

        {/* Mobile tab nav */}
        <div className="lg:hidden fixed bottom-0 left-0 right-0 z-30 bg-bg-secondary border-t border-sand-200 flex overflow-x-auto">
          {NAV_SECTIONS.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setActiveSection(s.id)}
              className={`flex-1 flex flex-col items-center gap-0.5 px-2 py-2.5 text-xs font-medium transition-colors whitespace-nowrap ${
                activeSection === s.id ? 'text-teal-soft-600' : 'text-text-muted'
              }`}
            >
              <span className="text-base">{s.icon}</span>
              {s.label.split(' ')[0]}
            </button>
          ))}
        </div>

        {/* Main content */}
        <main className="flex-1 min-w-0 pb-20 lg:pb-0">
          {/* Structure section */}
          {activeSection === 'structure' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-bold text-text-primary mb-1">{guide.structure.title}</h2>
                <p className="text-text-secondary text-sm leading-relaxed">{guide.structure.overview}</p>
              </div>
              <div className="space-y-4">
                {guide.structure.parts.map((part, i) => (
                  <div key={i} className="bg-bg-secondary border border-sand-200 rounded-xl p-5 space-y-3">
                    <div className="flex items-center gap-2.5">
                      <span className="w-7 h-7 rounded-full bg-teal-soft-100 text-teal-soft-700 font-bold text-sm flex items-center justify-center flex-shrink-0">
                        {i + 1}
                      </span>
                      <h3 className="font-semibold text-text-primary text-sm">{part.name}</h3>
                    </div>
                    <p className="text-sm text-text-secondary leading-relaxed">{part.description}</p>
                    <ul className="space-y-1.5">
                      {part.tips.map((tip, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-text-secondary">
                          <span className="mt-1 w-1.5 h-1.5 rounded-full bg-teal-soft-400 flex-shrink-0" />
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Scoring section */}
          {activeSection === 'scoring' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-bold text-text-primary mb-1">{guide.scoringTips.title}</h2>
                <p className="text-text-secondary text-sm leading-relaxed">{guide.scoringTips.overview}</p>
              </div>
              {/* Score levels */}
              <div className="space-y-3">
                {guide.scoringTips.levels.map((level) => {
                  const colors: Record<number, string> = {
                    5: 'bg-teal-soft-50 border-teal-soft-200',
                    4: 'bg-sage-50 border-sage-200',
                    3: 'bg-sand-50 border-sand-200',
                    2: 'bg-rose-dust-50 border-rose-dust-200',
                    1: 'bg-bg-card border-sand-100',
                  };
                  const badgeColors: Record<number, string> = {
                    5: 'bg-teal-soft-100 text-teal-soft-700',
                    4: 'bg-sage-100 text-sage-700',
                    3: 'bg-sand-100 text-sand-700',
                    2: 'bg-rose-dust-100 text-rose-dust-700',
                    1: 'bg-bg-card text-text-muted',
                  };
                  return (
                    <div key={level.score} className={`border rounded-xl p-4 ${colors[level.score] ?? ''}`}>
                      <div className="flex items-center gap-3 mb-2">
                        <span className={`px-2.5 py-0.5 rounded-full text-sm font-bold ${badgeColors[level.score] ?? ''}`}>
                          {level.score}/5
                        </span>
                        <span className="font-semibold text-text-primary text-sm">{level.label}</span>
                      </div>
                      <p className="text-xs text-text-secondary mb-1.5">{level.criteria}</p>
                      <p className="text-xs text-text-secondary font-medium">
                        <span className="text-text-primary">Strategi: </span>{level.strategy}
                      </p>
                    </div>
                  );
                })}
              </div>
              {/* Keyword strategy */}
              <div className="bg-bg-secondary border border-sand-200 rounded-xl p-5">
                <h3 className="font-semibold text-text-primary text-sm mb-3">Strategi Penggunaan Keywords</h3>
                <ul className="space-y-2">
                  {guide.scoringTips.keywordStrategy.map((tip, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                      <span className="mt-1 w-1.5 h-1.5 rounded-full bg-sage-400 flex-shrink-0" />
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Time management section */}
          {activeSection === 'time' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-bold text-text-primary mb-1">{guide.timeManagement.title}</h2>
                <p className="text-text-secondary text-sm leading-relaxed">{guide.timeManagement.overview}</p>
              </div>
              <div className="space-y-3">
                {guide.timeManagement.phases.map((phase, i) => (
                  <div key={i} className="bg-bg-secondary border border-sand-200 rounded-xl p-4 flex gap-4">
                    <div className="flex-shrink-0 text-center">
                      <div className="w-10 h-10 rounded-full bg-teal-soft-100 text-teal-soft-700 font-bold text-sm flex items-center justify-center">
                        {i + 1}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-baseline gap-2 mb-1">
                        <h3 className="font-semibold text-text-primary text-sm">{phase.phase}</h3>
                        <span className="text-xs text-teal-soft-600 font-medium">{phase.duration}</span>
                      </div>
                      <p className="text-sm text-text-secondary">{phase.action}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-rose-dust-50 border border-rose-dust-200 rounded-xl p-5">
                <h3 className="font-semibold text-text-primary text-sm mb-3">Tips Darurat (Waktu Hampir Habis)</h3>
                <ul className="space-y-2">
                  {guide.timeManagement.emergencyTips.map((tip, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                      <span className="mt-1 text-rose-dust-500">⚡</span>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Common mistakes section */}
          {activeSection === 'mistakes' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-bold text-text-primary mb-1">{guide.commonMistakes.title}</h2>
              </div>
              <div className="space-y-4">
                {guide.commonMistakes.mistakes.map((item, i) => (
                  <div key={i} className="bg-bg-secondary border border-sand-200 rounded-xl p-5 space-y-3">
                    <div className="flex items-start gap-2.5">
                      <span className="mt-0.5 text-rose-dust-500 text-lg">✗</span>
                      <h3 className="font-semibold text-text-primary text-sm leading-snug">{item.mistake}</h3>
                    </div>
                    <div className="ml-7 space-y-2">
                      <p className="text-xs text-rose-dust-600 bg-rose-dust-50 border border-rose-dust-100 rounded-lg px-3 py-2">
                        <span className="font-medium">Dampak: </span>{item.impact}
                      </p>
                      <p className="text-xs text-teal-soft-700 bg-teal-soft-50 border border-teal-soft-100 rounded-lg px-3 py-2">
                        <span className="font-medium">Solusi: </span>{item.fix}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Pro tips section */}
          {activeSection === 'protips' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-bold text-text-primary mb-1">{guide.proTips.title}</h2>
              </div>
              <div className="space-y-4">
                {guide.proTips.tips.map((item, i) => (
                  <div key={i} className="bg-bg-secondary border border-sand-200 rounded-xl p-5 space-y-2">
                    <div className="flex items-start gap-2.5">
                      <span className="text-xl">💡</span>
                      <h3 className="font-semibold text-text-primary text-sm leading-snug">{item.tip}</h3>
                    </div>
                    <p className="ml-8 text-sm text-text-secondary">{item.explanation}</p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-8 border border-teal-soft-200 rounded-xl p-6 bg-teal-soft-50 text-center space-y-3">
                <p className="font-semibold text-text-primary">Siap Mempraktikkan Tips Ini?</p>
                <p className="text-sm text-text-secondary">
                  Terapkan strategi di atas langsung dalam latihan soal nyata
                </p>
                <Link
                  href="/ujian/1"
                  className="inline-flex items-center gap-2 bg-teal-soft-600 hover:bg-teal-soft-500 text-white font-semibold px-6 py-3 rounded-xl transition-colors shadow-warm-sm text-sm"
                >
                  Mulai Latihan Soal
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
