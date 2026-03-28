'use client';
import { useState } from 'react';
import { InfographicData } from '@/lib/types';

interface MindMapVisualProps {
  data: InfographicData;
}

// Radial positions for up to 6 branches (as % of container, translate(-50%,0))
const POSITIONS: { top: string; left: string }[] = [
  { top: '6%',  left: '50%'  }, // top
  { top: '18%', left: '80%'  }, // top-right
  { top: '62%', left: '83%'  }, // bottom-right
  { top: '74%', left: '50%'  }, // bottom
  { top: '62%', left: '17%'  }, // bottom-left
  { top: '18%', left: '20%'  }, // top-left
];

// SVG line endpoints — approximate center of each branch label (in 0-100 viewBox units)
const SVG_ENDPOINTS = [
  { x: 50, y: 12 },
  { x: 80, y: 25 },
  { x: 83, y: 68 },
  { x: 50, y: 80 },
  { x: 17, y: 68 },
  { x: 20, y: 25 },
];

// Tailwind class map (no dynamic interpolation)
const colorMap: Record<string, { bg: string; border: string; text: string; dot: string; line: string }> = {
  'sage':      { bg: 'bg-sage-100',      border: 'border-sage-300',      text: 'text-sage-600',      dot: 'bg-sage-400',      line: 'var(--color-sage-300)'      },
  'teal-soft': { bg: 'bg-teal-soft-100', border: 'border-teal-soft-300', text: 'text-teal-soft-600', dot: 'bg-teal-soft-400', line: 'var(--color-teal-soft-300)' },
  'rose-dust': { bg: 'bg-rose-dust-100', border: 'border-rose-dust-300', text: 'text-rose-dust-500', dot: 'bg-rose-dust-300', line: 'var(--color-rose-dust-300)' },
  'sand':      { bg: 'bg-sand-100',      border: 'border-sand-300',      text: 'text-sand-500',      dot: 'bg-sand-400',      line: 'var(--color-sand-400)'      },
  'lavender':  { bg: 'bg-lavender-100',  border: 'border-lavender-300',  text: 'text-lavender-400',  dot: 'bg-lavender-300',  line: 'var(--color-lavender-300)'  },
};

function getColors(colorKey: string) {
  return colorMap[colorKey] ?? colorMap['sage'];
}

export default function MindMapVisual({ data }: MindMapVisualProps) {
  const [expandedBranch, setExpandedBranch] = useState<number | null>(0);

  function toggleBranch(index: number) {
    setExpandedBranch((prev) => (prev === index ? null : index));
  }

  return (
    <>
      {/* ── Desktop: radial mind map ── */}
      <div className="hidden sm:block">
        <h3 className="font-semibold text-text-primary mb-3 text-sm">{data.title}</h3>

        <div className="mindmap-container" style={{ minHeight: 480 }}>
          {/* SVG connector lines */}
          <svg
            aria-hidden="true"
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              zIndex: 0,
              pointerEvents: 'none',
            }}
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            {data.branches.map((branch, i) => {
              const ep = SVG_ENDPOINTS[i];
              if (!ep) return null;
              const colors = getColors(branch.color);
              return (
                <line
                  key={branch.label}
                  x1="50" y1="50"
                  x2={ep.x} y2={ep.y}
                  stroke={colors.line}
                  strokeWidth="0.5"
                  strokeDasharray="2.5 1.5"
                  opacity="0.55"
                />
              );
            })}
          </svg>

          {/* Center node */}
          <div className="mindmap-center" style={{ zIndex: 10 }}>
            <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-teal-soft-200 border-2 border-teal-soft-400 flex items-center justify-center shadow-warm-md">
              <p className="text-center text-teal-soft-700 font-bold text-xs md:text-sm leading-tight px-2">
                {data.centerTopic}
              </p>
            </div>
          </div>

          {/* Branch nodes */}
          {data.branches.map((branch, i) => {
            const pos = POSITIONS[i] ?? POSITIONS[0];
            const colors = getColors(branch.color);
            const isExpanded = expandedBranch === i;

            return (
              <div
                key={branch.label}
                className="absolute"
                style={{ top: pos.top, left: pos.left, transform: 'translate(-50%, 0)', zIndex: 5 }}
              >
                <button
                  type="button"
                  onClick={() => toggleBranch(i)}
                  aria-expanded={isExpanded}
                  className={`
                    px-3 py-2 rounded-xl border-2 shadow-warm-sm text-left transition-shadow
                    ${colors.bg} ${colors.border}
                    hover:shadow-warm-md
                    ${isExpanded ? 'shadow-warm-md' : ''}
                  `}
                  style={{ minWidth: 110, maxWidth: 155 }}
                >
                  <div className="flex items-center justify-between gap-1">
                    <p className={`text-xs font-bold ${colors.text} leading-tight`}>{branch.label}</p>
                    <svg
                      className={`w-3 h-3 ${colors.text} flex-shrink-0 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
                      fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>

                  {/* Items — CSS max-height transition */}
                  <div
                    className="overflow-hidden"
                    style={{
                      maxHeight: isExpanded ? `${branch.items.length * 28 + 8}px` : '0px',
                      opacity: isExpanded ? 1 : 0,
                      transition: 'max-height 0.25s ease, opacity 0.2s ease',
                    }}
                  >
                    <ul className="mt-2 space-y-1">
                      {branch.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-1 text-xs text-text-secondary">
                          <span className={`flex-shrink-0 w-1.5 h-1.5 rounded-full mt-1 ${colors.dot}`} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </button>
              </div>
            );
          })}
        </div>

        {/* Connections */}
        {data.connections.length > 0 && (
          <div className="mt-4 border-t border-sand-200 pt-4">
            <p className="text-xs text-text-muted font-medium mb-2">Keterkaitan Antar Konsep:</p>
            <div className="flex flex-wrap gap-2">
              {data.connections.map((conn, i) => (
                <span
                  key={i}
                  className="text-xs bg-bg-secondary border border-sand-200 px-2.5 py-1 rounded-full text-text-secondary"
                >
                  {conn}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* ── Mobile: hierarchical accordion ── */}
      <div className="sm:hidden space-y-3">
        <h3 className="font-semibold text-text-primary text-sm">{data.title}</h3>

        <div className="bg-teal-soft-200 border border-teal-soft-300 rounded-xl px-4 py-3 text-center">
          <p className="font-bold text-teal-soft-700 text-sm">{data.centerTopic}</p>
        </div>

        <div className="space-y-2">
          {data.branches.map((branch, i) => {
            const colors = getColors(branch.color);
            const isExpanded = expandedBranch === i;
            return (
              <div key={branch.label} className="border border-sand-200 rounded-xl overflow-hidden">
                <button
                  type="button"
                  onClick={() => toggleBranch(i)}
                  aria-expanded={isExpanded}
                  className={`w-full flex items-center justify-between px-4 py-3 text-left ${colors.bg}`}
                >
                  <span className={`font-semibold text-sm ${colors.text}`}>{branch.label}</span>
                  <svg
                    className={`w-4 h-4 ${colors.text} transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className="overflow-hidden"
                  style={{
                    maxHeight: isExpanded ? `${branch.items.length * 32 + 24}px` : '0px',
                    transition: 'max-height 0.25s ease',
                  }}
                >
                  <ul className="px-4 py-3 space-y-1.5 bg-bg-primary">
                    {branch.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-text-secondary">
                        <span className={`flex-shrink-0 w-1.5 h-1.5 rounded-full mt-1.5 ${colors.dot}`} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
