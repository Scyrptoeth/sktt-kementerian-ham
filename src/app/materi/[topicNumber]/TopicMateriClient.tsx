'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Question, TopicMaterial } from '@/lib/types';
import TopicTag from '@/components/TopicTag';
import TabNavigation from '@/components/TabNavigation';
import TextContent from '@/components/TextContent';
import FlashCardDeck from '@/components/FlashCardDeck';
import EssayGuideView from '@/components/EssayGuideView';
import GlossaryList from '@/components/GlossaryList';
import MindMapVisual from '@/components/MindMapVisual';
import { useExamState } from '@/hooks/useExamState';

interface TopicSummary {
  topicNumber: number;
  topicName: string;
  topicTag: string;
  isEnglish: boolean;
  available: boolean;
}

interface TopicMateriClientProps {
  topicNumber: number;
  question: Question;
  material: TopicMaterial | null;
  allTopics: TopicSummary[];
}

const TABS = [
  { id: 'penjelasan', label: 'Penjelasan', icon: '📖' },
  { id: 'flashcard',  label: 'Flashcard',  icon: '🃏' },
  { id: 'esai',       label: 'Panduan Esai', icon: '✍️' },
  { id: 'glosarium',  label: 'Glosarium',  icon: '📚' },
  { id: 'visual',     label: 'Ringkasan Visual', icon: '🗺️' },
];

// Score badge — only use colors that exist in the theme palette
function ScoreBadge({ score }: { score: number }) {
  const cls =
    score >= 4 ? 'bg-teal-soft-100 text-teal-soft-600' :
    score >= 3 ? 'bg-sage-100 text-sage-600' :
    'bg-rose-dust-100 text-rose-dust-500';
  return (
    <span className={`flex-shrink-0 text-xs font-bold px-1.5 py-0.5 rounded ${cls}`}>
      {score}/5
    </span>
  );
}

export default function TopicMateriClient({
  topicNumber,
  question,
  material,
  allTopics,
}: TopicMateriClientProps) {
  const [activeTab, setActiveTab] = useState('penjelasan');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { state } = useExamState();

  const getTopicScore = (tn: number) =>
    state.answers.find((a) => a.questionId === tn)?.score ?? null;

  return (
    <div className="min-h-screen bg-bg-primary">
      {/* Mobile sidebar toggle bar */}
      <div className="lg:hidden border-b border-sand-200 px-4 py-2.5 flex items-center gap-3 bg-bg-secondary">
        <button
          type="button"
          onClick={() => setSidebarOpen((v) => !v)}
          aria-label={sidebarOpen ? 'Tutup daftar topik' : 'Buka daftar topik'}
          aria-expanded={sidebarOpen}
          className="p-1.5 rounded-lg hover:bg-bg-card transition-colors text-text-secondary"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <span className="text-sm text-text-secondary truncate">
          Topik {topicNumber}: <span className="font-medium text-text-primary">{question.topicName}</span>
        </span>
      </div>

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/20 z-30"
          style={{ top: 56 }}
          onClick={() => setSidebarOpen(false)}
          aria-hidden="true"
        />
      )}

      <div className="max-w-6xl mx-auto flex">
        {/* ── Sidebar ── */}
        <aside
          aria-label="Daftar topik materi"
          className={`
            fixed left-0 bottom-0 z-40 w-72 bg-bg-secondary border-r border-sand-200 overflow-y-auto
            transform transition-transform duration-200
            lg:sticky lg:translate-x-0 lg:w-64 lg:flex-shrink-0 lg:self-start
            ${sidebarOpen ? 'translate-x-0 shadow-warm-lg' : '-translate-x-full'}
          `}
          style={{ top: 56, maxHeight: 'calc(100vh - 56px)' }}
        >
          <div className="p-4">
            <p className="text-xs font-semibold text-text-muted uppercase tracking-wide mb-3 px-1">
              12 Topik Materi
            </p>
            <nav className="space-y-1" aria-label="Topik materi">
              {allTopics.map((t) => {
                const isActive = t.topicNumber === topicNumber;
                const score = getTopicScore(t.topicNumber);
                return (
                  <Link
                    key={t.topicNumber}
                    href={`/materi/${t.topicNumber}`}
                    onClick={() => setSidebarOpen(false)}
                    aria-current={isActive ? 'page' : undefined}
                    className={`
                      flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm transition-colors
                      ${isActive
                        ? 'bg-teal-soft-100 text-teal-soft-600 font-medium'
                        : t.available
                        ? 'text-text-secondary hover:bg-bg-card hover:text-text-primary'
                        : 'text-text-muted cursor-default opacity-60'
                      }
                    `}
                  >
                    <span
                      className={`flex-shrink-0 w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center ${
                        isActive ? 'bg-teal-soft-200 text-teal-soft-600' : 'bg-bg-card text-text-muted'
                      }`}
                    >
                      {t.topicNumber}
                    </span>
                    <span className="flex-1 leading-tight line-clamp-2">{t.topicName}</span>
                    {score !== null ? (
                      <ScoreBadge score={score} />
                    ) : !t.available ? (
                      <span className="flex-shrink-0 text-xs text-sand-400">·</span>
                    ) : null}
                  </Link>
                );
              })}
            </nav>
          </div>
        </aside>

        {/* ── Main content ── */}
        <main id="main-content" className="flex-1 min-w-0 px-4 lg:px-8 py-6">
          {/* Topic header */}
          <div className="mb-6 space-y-2">
            <div className="flex items-start gap-3 flex-wrap">
              <span
                aria-hidden="true"
                className="w-10 h-10 rounded-full bg-sage-100 text-sage-600 font-bold flex items-center justify-center flex-shrink-0"
              >
                {topicNumber}
              </span>
              <div className="flex-1 min-w-0">
                <h1 className="text-xl font-bold text-text-primary leading-snug">
                  {question.topicName}
                </h1>
                <div className="mt-1.5">
                  <TopicTag tag={question.topicTag} isEnglish={question.isEnglish} topicNumber={topicNumber} />
                </div>
              </div>
            </div>
            {material && (
              <p className="text-sm text-text-secondary leading-relaxed max-w-2xl">
                {material.overview}
              </p>
            )}
          </div>

          {/* Content unavailable */}
          {!material ? (
            <div className="text-center py-20 space-y-4 border border-sand-200 rounded-2xl bg-bg-secondary">
              <div className="text-4xl" aria-hidden="true">🏗️</div>
              <h2 className="font-semibold text-text-primary">Materi Segera Hadir</h2>
              <p className="text-text-muted text-sm max-w-xs mx-auto">
                Konten untuk topik ini sedang dalam pengembangan dan akan tersedia segera.
              </p>
              <Link
                href="/materi"
                className="inline-block text-sm text-teal-soft-600 hover:text-teal-soft-500 font-medium transition-colors"
              >
                ← Kembali ke daftar materi
              </Link>
            </div>
          ) : (
            <>
              {/* Tabs */}
              <TabNavigation
                tabs={TABS}
                activeTab={activeTab}
                onTabChange={setActiveTab}
              />

              {/* Tab panels */}
              <div className="mt-6">
                {TABS.map((tab) => (
                  <div
                    key={tab.id}
                    role="tabpanel"
                    id={`tabpanel-${tab.id}`}
                    aria-labelledby={`tab-${tab.id}`}
                    hidden={activeTab !== tab.id}
                    tabIndex={0}
                    className="focus:outline-none"
                  >
                    {tab.id === 'penjelasan' && activeTab === 'penjelasan' && (
                      <TextContent sections={material.textContent} />
                    )}
                    {tab.id === 'flashcard' && activeTab === 'flashcard' && (
                      <div className="max-w-lg mx-auto sm:max-w-none">
                        <FlashCardDeck cards={material.flashCards} />
                      </div>
                    )}
                    {tab.id === 'esai' && activeTab === 'esai' && (
                      <>
                        <EssayGuideView guide={material.essayGuide} />
                        <div className="mt-4 flex items-center gap-3 bg-teal-soft-50 border border-teal-soft-200 rounded-xl px-4 py-3">
                          <span aria-hidden="true" className="text-lg">✍️</span>
                          <div className="flex-1 text-sm">
                            <span className="text-text-secondary">Ingin strategi esai yang lebih lengkap? </span>
                            <Link href="/materi/panduan-esai" className="text-teal-soft-600 font-medium hover:underline">
                              Baca Panduan Umum Menulis Esai →
                            </Link>
                          </div>
                        </div>
                      </>
                    )}
                    {tab.id === 'glosarium' && activeTab === 'glosarium' && (
                      <GlossaryList terms={material.glossary} />
                    )}
                    {tab.id === 'visual' && activeTab === 'visual' && (
                      <div className="bg-bg-secondary border border-sand-200 rounded-xl p-4 md:p-5">
                        <MindMapVisual data={material.infographic} />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Bottom CTA */}
              <div className="mt-10 border-t border-sand-200 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-text-primary">Siap berlatih?</p>
                  <p className="text-xs text-text-muted">
                    Kerjakan soal esai berbasis kasus nyata untuk topik ini
                  </p>
                </div>
                <Link
                  href={`/ujian/${topicNumber}`}
                  className="inline-flex items-center gap-2 bg-teal-soft-600 hover:bg-teal-soft-500 text-white font-semibold px-5 py-2.5 rounded-xl transition-colors shadow-warm-sm text-sm flex-shrink-0"
                >
                  Latihan Soal Topik Ini
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </>
          )}
        </main>
      </div>
    </div>
  );
}
