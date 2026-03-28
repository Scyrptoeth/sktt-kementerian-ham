'use client';
import { useState, useMemo } from 'react';
import { GlossaryTerm } from '@/lib/types';

interface GlossaryListProps {
  terms: GlossaryTerm[];
}

const categoryConfig: Record<GlossaryTerm['category'], { label: string; color: string }> = {
  concept:   { label: 'Konsep',    color: 'bg-teal-soft-100 text-teal-soft-600' },
  legal:     { label: 'Hukum',     color: 'bg-lavender-100 text-lavender-400' },
  institution:{ label: 'Lembaga',  color: 'bg-sand-100 text-sand-500' },
  mechanism: { label: 'Mekanisme', color: 'bg-rose-dust-100 text-rose-dust-500' },
};

function termId(termName: string) {
  return `gterm-${termName.replace(/\s+/g, '-').replace(/[^a-zA-Z0-9-]/g, '')}`;
}

function HighlightedText({ text, query }: { text: string; query: string }) {
  if (!query.trim()) return <>{text}</>;
  const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(`(${escaped})`, 'gi');
  const parts = text.split(regex);
  return (
    <>
      {parts.map((part, i) =>
        regex.test(part) ? (
          <mark key={i} className="bg-sand-200 text-text-primary rounded px-0.5 not-italic">
            {part}
          </mark>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}

export default function GlossaryList({ terms }: GlossaryListProps) {
  const [query, setQuery] = useState('');
  const [filterCat, setFilterCat] = useState<GlossaryTerm['category'] | 'all'>('all');
  const [expandedTerms, setExpandedTerms] = useState<Set<string>>(new Set());

  const termSet = useMemo(() => new Set(terms.map((t) => t.term)), [terms]);

  const sorted = useMemo(
    () => [...terms].sort((a, b) => a.term.localeCompare(b.term, 'id')),
    [terms]
  );

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    return sorted.filter((t) => {
      const matchesQuery =
        !q ||
        t.term.toLowerCase().includes(q) ||
        t.definition.toLowerCase().includes(q);
      const matchesCat = filterCat === 'all' || t.category === filterCat;
      return matchesQuery && matchesCat;
    });
  }, [sorted, query, filterCat]);

  function toggleTerm(term: string) {
    setExpandedTerms((prev) => {
      const next = new Set(prev);
      next.has(term) ? next.delete(term) : next.add(term);
      return next;
    });
  }

  function scrollToTerm(targetTerm: string) {
    // Clear filters to ensure term is visible
    setQuery('');
    setFilterCat('all');
    // Expand and scroll after React re-render
    setTimeout(() => {
      setExpandedTerms((prev) => { const s = new Set(prev); s.add(targetTerm); return s; });
      const el = document.getElementById(termId(targetTerm));
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 60);
  }

  const categories = useMemo(
    () => [...new Set(terms.map((t) => t.category))] as GlossaryTerm['category'][],
    [terms]
  );

  return (
    <div className="space-y-4">
      {/* Search */}
      <div className="relative">
        <svg
          className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Cari istilah..."
          aria-label="Cari istilah dalam glosarium"
          className="w-full pl-9 pr-4 py-2.5 text-sm border border-sand-200 rounded-lg bg-bg-primary focus:outline-none focus:border-teal-soft-300 focus:ring-1 focus:ring-teal-soft-200 transition-colors"
        />
      </div>

      {/* Category filter */}
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter kategori">
        <button
          type="button"
          onClick={() => setFilterCat('all')}
          className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
            filterCat === 'all'
              ? 'bg-text-primary text-white'
              : 'bg-bg-card text-text-secondary hover:bg-bg-secondary'
          }`}
        >
          Semua ({terms.length})
        </button>
        {categories.map((cat) => {
          const count = terms.filter((t) => t.category === cat).length;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => setFilterCat(cat)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                filterCat === cat
                  ? categoryConfig[cat].color + ' ring-1 ring-current'
                  : 'bg-bg-card text-text-secondary hover:bg-bg-secondary'
              }`}
            >
              {categoryConfig[cat].label} ({count})
            </button>
          );
        })}
      </div>

      {/* Results count */}
      <p className="text-xs text-text-muted" aria-live="polite">
        {filtered.length} istilah ditemukan
      </p>

      {/* Term list */}
      <div className="space-y-1.5">
        {filtered.length === 0 ? (
          <p className="text-center py-8 text-text-muted text-sm">
            Tidak ada istilah yang cocok dengan pencarian Anda.
          </p>
        ) : (
          filtered.map((term) => {
            const isExpanded = expandedTerms.has(term.term);
            return (
              <div
                key={term.term}
                id={termId(term.term)}
                className="border border-sand-200 rounded-lg overflow-hidden scroll-mt-4"
              >
                <button
                  type="button"
                  onClick={() => toggleTerm(term.term)}
                  aria-expanded={isExpanded}
                  className="w-full flex items-center justify-between px-4 py-3 bg-bg-secondary hover:bg-bg-card text-left transition-colors"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <h3 className="font-semibold text-text-primary text-sm truncate">
                      <HighlightedText text={term.term} query={query} />
                    </h3>
                    <span className={`flex-shrink-0 px-2 py-0.5 rounded-full text-xs font-medium ${categoryConfig[term.category].color}`}>
                      {categoryConfig[term.category].label}
                    </span>
                  </div>
                  <svg
                    className={`w-4 h-4 text-text-muted transition-transform flex-shrink-0 ml-2 ${isExpanded ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {isExpanded && (
                  <div className="px-4 pb-4 pt-3 bg-bg-primary space-y-2.5">
                    <p className="text-sm text-text-secondary leading-relaxed">
                      <HighlightedText text={term.definition} query={query} />
                    </p>
                    {term.relatedTerms.length > 0 && (
                      <div className="flex items-center gap-2 flex-wrap pt-0.5">
                        <span className="text-xs text-text-muted flex-shrink-0">Lihat juga:</span>
                        {term.relatedTerms.map((rt) => {
                          const exists = termSet.has(rt);
                          return exists ? (
                            <button
                              key={rt}
                              type="button"
                              onClick={() => scrollToTerm(rt)}
                              className="text-xs bg-teal-soft-50 border border-teal-soft-200 text-teal-soft-600 px-2 py-0.5 rounded hover:bg-teal-soft-100 transition-colors"
                            >
                              {rt} ↗
                            </button>
                          ) : (
                            <span
                              key={rt}
                              className="text-xs bg-bg-card border border-sand-200 px-2 py-0.5 rounded text-text-secondary"
                            >
                              {rt}
                            </span>
                          );
                        })}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
