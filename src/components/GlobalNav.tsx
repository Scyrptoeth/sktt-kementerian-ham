'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { useExam } from '@/context/ExamContext';

export default function GlobalNav() {
  const pathname = usePathname();
  const { state } = useExam();
  const [menuOpen, setMenuOpen] = useState(false);

  const isCompleted = state.status === 'completed';

  const links = [
    { href: '/', label: 'Beranda', matchExact: true },
    { href: '/materi', label: 'Materi', matchExact: false },
    { href: '/ujian', label: 'Latihan Soal', matchExact: false },
    ...(isCompleted ? [{ href: '/hasil', label: 'Hasil', matchExact: true }] : []),
  ];

  function isActive(href: string, matchExact: boolean) {
    if (matchExact) return pathname === href;
    return pathname.startsWith(href);
  }

  return (
    <nav className="sticky top-0 z-50 bg-bg-primary/90 backdrop-blur-sm border-b border-sand-200 shadow-warm-sm">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          {/* Logo / Brand */}
          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-semibold text-teal-soft-600 hover:text-teal-soft-500 transition-colors"
          >
            <span className="w-6 h-6 rounded-full bg-teal-soft-200 flex items-center justify-center text-teal-soft-600 text-xs font-bold">
              H
            </span>
            <span className="hidden sm:inline">SKTT HAM</span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => {
              const active = isActive(link.href, link.matchExact);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`
                    relative px-4 py-2 text-sm font-medium rounded-lg transition-colors
                    ${active
                      ? 'text-teal-soft-600 bg-teal-soft-100'
                      : 'text-text-secondary hover:text-text-primary hover:bg-bg-secondary'
                    }
                  `}
                >
                  {link.label}
                  {active && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full bg-teal-soft-500" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden p-2 rounded-lg text-text-secondary hover:bg-bg-secondary transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-sand-200 py-2 space-y-1">
            {links.map((link) => {
              const active = isActive(link.href, link.matchExact);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`
                    block px-4 py-2.5 text-sm font-medium rounded-lg transition-colors
                    ${active
                      ? 'text-teal-soft-600 bg-teal-soft-100'
                      : 'text-text-secondary hover:text-text-primary hover:bg-bg-secondary'
                    }
                  `}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
}
