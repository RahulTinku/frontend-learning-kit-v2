import Link from 'next/link';

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
  return (
    <header className="sticky top-0 z-10 bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link href="/" className="font-bold text-gray-900 text-sm tracking-tight">
          Frontend Learning Kit
        </Link>
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
        <a
          href="https://github.com/RahulTinku/frontend-learning-kit-v2"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
        >
          GitHub ↗
        </a>
      </div>
    </header>
  );
}
