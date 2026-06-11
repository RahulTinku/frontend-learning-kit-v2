import Link from 'next/link';

const sections = [
  { href: '/roadmap', label: 'Roadmap', emoji: '🗺️' },
  { href: '/design-systems', label: 'Design Systems', emoji: '🎨' },
  { href: '/micro-frontends', label: 'Micro-Frontends', emoji: '🧩' },
  { href: '/dx-engineering', label: 'DX Engineering', emoji: '⚡' },
  { href: '/ai-tooling', label: 'AI Tooling', emoji: '🤖' },
  { href: '/reading-list', label: 'Reading List', emoji: '📚' },
];

export function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10 flex gap-12">
      {/* Sidebar */}
      <aside className="hidden lg:block w-52 shrink-0">
        <div className="sticky top-20">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Sections</p>
          <nav className="flex flex-col gap-1">
            {sections.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 py-1.5 px-2 rounded-md hover:bg-gray-50 transition-colors"
              >
                <span>{s.emoji}</span>
                <span>{s.label}</span>
              </Link>
            ))}
          </nav>
          <div className="mt-8 pt-6 border-t border-gray-100">
            <Link href="/" className="text-xs text-gray-400 hover:text-gray-600">← Back to home</Link>
          </div>
        </div>
      </aside>

      {/* Content */}
      <article className="flex-1 min-w-0 prose prose-gray max-w-none">
        {children}
      </article>
    </div>
  );
}
