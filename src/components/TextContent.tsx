'use client';
import { useState } from 'react';
import { TextSection } from '@/lib/types';

interface TextContentProps {
  sections: TextSection[];
}

export default function TextContent({ sections }: TextContentProps) {
  const sorted = [...sections].sort((a, b) => a.order - b.order);
  const [openSections, setOpenSections] = useState<Set<string>>(
    () => new Set([sorted[0]?.id])
  );

  function toggle(id: string) {
    setOpenSections((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }

  function openAll() {
    setOpenSections(new Set(sorted.map((s) => s.id)));
  }

  return (
    <div className="space-y-3">
      <div className="flex justify-end">
        <button
          type="button"
          onClick={openAll}
          className="text-xs text-teal-soft-500 hover:text-teal-soft-600 font-medium transition-colors"
        >
          Buka Semua ↓
        </button>
      </div>

      {sorted.map((section, index) => {
        const isOpen = openSections.has(section.id);
        return (
          <div
            key={section.id}
            className="border border-sand-200 rounded-xl overflow-hidden"
          >
            {/* Section header */}
            <button
              type="button"
              onClick={() => toggle(section.id)}
              className="w-full flex items-center justify-between px-5 py-4 bg-bg-secondary hover:bg-bg-card text-left transition-colors"
            >
              <div className="flex items-center gap-3">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-teal-soft-100 text-teal-soft-600 flex items-center justify-center text-xs font-bold">
                  {index + 1}
                </span>
                <span className="font-semibold text-text-primary">{section.title}</span>
              </div>
              <svg
                className={`w-4 h-4 text-text-muted transition-transform flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Section body */}
            {isOpen && (
              <div className="px-5 pb-5 pt-4 space-y-4 bg-bg-primary">
                {/* Prose content */}
                <div className="space-y-3">
                  {section.content.split('\n\n').map((para, i) => (
                    <p key={i} className="text-text-secondary leading-relaxed text-sm">
                      {para}
                    </p>
                  ))}
                </div>

                {/* Key points */}
                {section.keyPoints.length > 0 && (
                  <div className="bg-sage-50 border border-sage-200 rounded-lg p-4">
                    <p className="text-xs font-semibold text-sage-600 uppercase tracking-wide mb-2.5">
                      Poin Kunci
                    </p>
                    <ul className="space-y-1.5">
                      {section.keyPoints.map((point, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                          <span className="flex-shrink-0 mt-0.5 w-4 h-4 rounded-full bg-sage-200 flex items-center justify-center">
                            <svg className="w-2.5 h-2.5 text-sage-600" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
