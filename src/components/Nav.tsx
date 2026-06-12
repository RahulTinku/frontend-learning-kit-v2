'use client';

import Link from 'next/link';
import { useState } from 'react';

const sections = [
  { href: '/', label: 'Home' },
  { href: '/roadmap', label: 'Roadmap' },
  { href: '/design-systems', label: 'Design Systems' },
  { href: '/micro-frontends', label: 'Micro-Frontends' },
  { href: '/dx-engineering', label: 'DX Engineering' },
  { href: '/ai-tooling', label: 'AI Tooling' },
  { href: '/reading-list', label: 'Reading List' },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-10 bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link href="/" className="font-bold text-gray-900 text-sm tracking-tight">
          Frontend Learning Kit
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {sections.slice(1).map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
            >
              {s.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/RahulTinku/frontend-learning-kit-v2"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
          >
            GitHub ↗
          </a>

          {/* Hamburger — mobile only */}
          <button
            className="md:hidden flex flex-col justify-center gap-1.5 w-8 h-8 p-1"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            <span className={`block h-0.5 bg-gray-700 transition-transform duration-200 ${open ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`block h-0.5 bg-gray-700 transition-opacity duration-200 ${open ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 bg-gray-700 transition-transform duration-200 ${open ? '-translate-y-2 -rotate-45' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <nav className="md:hidden border-t border-gray-100 bg-white px-6 py-3 flex flex-col gap-1">
          {sections.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              onClick={() => setOpen(false)}
              className="py-2.5 text-sm text-gray-600 hover:text-gray-900 border-b border-gray-50 last:border-0 transition-colors"
            >
              {s.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
