'use client';
import { useState } from 'react';
import { EssayGuide, EssaySection } from '@/lib/types';

interface EssayGuideViewProps {
  guide: EssayGuide;
}

function SectionPanel({
  section,
  isOpen,
  onToggle,
  accentColor,
}: {
  section: EssaySection;
  isOpen: boolean;
  onToggle: () => void;
  accentColor: string;
}) {
  return (
    <div className="border border-sand-200 rounded-xl overflow-hidden">
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between px-5 py-4 bg-bg-secondary hover:bg-bg-card text-left transition-colors"
      >
        <span className="font-semibold text-text-primary">{section.title}</span>
        <svg
          className={`w-4 h-4 text-text-muted transition-transform flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="px-5 pb-5 pt-4 space-y-4 bg-bg-primary">
          <p className="text-sm text-text-secondary leading-relaxed">{section.explanation}</p>

          {/* Template */}
          <div className={`rounded-lg p-4 border ${accentColor}`}>
            <p className="text-xs font-semibold uppercase tracking-wide mb-2 opacity-70">
              Template Pembuka
            </p>
            <p className="text-sm italic leading-relaxed">&ldquo;{section.template}&rdquo;</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* Do list */}
            <div className="bg-sage-50 border border-sage-200 rounded-lg p-4">
              <p className="text-xs font-semibold text-sage-600 uppercase tracking-wide mb-2.5">
                ✓ Yang Harus Dilakukan
              </p>
              <ul className="space-y-1.5">
                {section.doList.map((item, i) => (
                  <li key={i} className="text-xs text-text-secondary flex items-start gap-1.5">
                    <span className="flex-shrink-0 text-sage-500 mt-0.5">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Don't list */}
            <div className="bg-rose-dust-50 border border-rose-dust-200 rounded-lg p-4">
              <p className="text-xs font-semibold text-rose-dust-500 uppercase tracking-wide mb-2.5">
                ✗ Yang Harus Dihindari
              </p>
              <ul className="space-y-1.5">
                {section.dontList.map((item, i) => (
                  <li key={i} className="text-xs text-text-secondary flex items-start gap-1.5">
                    <span className="flex-shrink-0 text-rose-dust-400 mt-0.5">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function EssayGuideView({ guide }: EssayGuideViewProps) {
  const [openPanels, setOpenPanels] = useState<Set<string>>(new Set(['intro']));

  function toggle(id: string) {
    setOpenPanels((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }

  const panels = [
    {
      id: 'intro',
      section: guide.introduction,
      color: 'bg-teal-soft-100 border-teal-soft-200 text-teal-soft-600',
    },
    {
      id: 'body',
      section: guide.body,
      color: 'bg-sand-100 border-sand-200 text-sand-500',
    },
    {
      id: 'conclusion',
      section: guide.conclusion,
      color: 'bg-lavender-100 border-lavender-200 text-lavender-400',
    },
  ];

  return (
    <div className="space-y-5">
      {/* Three collapsible sections */}
      <div className="space-y-3">
        {panels.map((p) => (
          <SectionPanel
            key={p.id}
            section={p.section}
            isOpen={openPanels.has(p.id)}
            onToggle={() => toggle(p.id)}
            accentColor={p.color}
          />
        ))}
      </div>

      {/* Sample outline */}
      <div className="bg-bg-secondary border border-sand-200 rounded-xl p-5 space-y-3">
        <h3 className="font-semibold text-text-primary text-sm">Contoh Kerangka Esai</h3>
        <pre className="text-xs text-text-secondary leading-relaxed whitespace-pre-wrap font-mono bg-bg-card border border-sand-200 rounded-lg p-4">
          {guide.sampleOutline}
        </pre>
      </div>

      {/* Tips */}
      <div className="bg-teal-soft-100 border border-teal-soft-200 rounded-xl p-5">
        <h3 className="font-semibold text-teal-soft-600 text-sm mb-3">
          💡 Tips Menulis Esai Topik Ini
        </h3>
        <ul className="space-y-2">
          {guide.tips.map((tip, i) => (
            <li key={i} className="text-sm text-text-secondary flex items-start gap-2">
              <span className="flex-shrink-0 font-semibold text-teal-soft-500">{i + 1}.</span>
              {tip}
            </li>
          ))}
        </ul>
      </div>

      {/* Common mistakes */}
      <div className="bg-rose-dust-50 border border-rose-dust-200 rounded-xl p-5">
        <h3 className="font-semibold text-rose-dust-500 text-sm mb-3">
          ⚠️ Kesalahan Umum yang Harus Dihindari
        </h3>
        <ul className="space-y-2">
          {guide.commonMistakes.map((mistake, i) => (
            <li key={i} className="text-sm text-text-secondary flex items-start gap-2">
              <span className="flex-shrink-0 text-rose-dust-400">✗</span>
              {mistake}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
