import Link from 'next/link';

const sections = [
  {
    href: '/roadmap',
    emoji: '🗺️',
    title: 'Platform Engineering Roadmap',
    desc: 'A structured learning path from frontend developer to frontend platform engineer. Skills, tools, and concepts in order.',
    time: '20 min read',
  },
  {
    href: '/design-systems',
    emoji: '🎨',
    title: 'Design Systems',
    desc: 'How to build, scale, and maintain a design system that actually gets adopted. Tokens, components, governance.',
    time: '18 min read',
  },
  {
    href: '/micro-frontends',
    emoji: '🧩',
    title: 'Micro-Frontends & Module Federation',
    desc: 'When to use micro-frontends, how Module Federation works, and the tradeoffs teams rarely talk about.',
    time: '15 min read',
  },
  {
    href: '/dx-engineering',
    emoji: '⚡',
    title: 'Developer Experience Engineering',
    desc: 'Turning workflow friction into platform solutions. CI/CD, local dev, tooling, and measuring DX.',
    time: '16 min read',
  },
  {
    href: '/ai-tooling',
    emoji: '🤖',
    title: 'AI Tooling for Frontend Developers',
    desc: 'MCP servers, AI-assisted code reviews, codemod automation, and how AI is reshaping the platform engineer role.',
    time: '14 min read',
  },
  {
    href: '/reading-list',
    emoji: '📚',
    title: 'Curated Reading List',
    desc: 'RFCs, blog posts, talks, and papers that shaped how I think about frontend platform engineering.',
    time: 'Reference',
  },
];

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      {/* Hero */}
      <div className="mb-16">
        <p className="text-sm font-mono text-blue-600 mb-4 uppercase tracking-widest">
          frontend platform engineering
        </p>
        <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Frontend Learning Kit
          <span className="text-blue-600"> v2</span>
        </h1>
        <p className="text-xl text-gray-500 max-w-2xl leading-relaxed mb-8">
          A structured resource for engineers who want to go beyond feature work — into platform
          thinking, developer experience, design systems, and AI-assisted tooling.
        </p>
        <div className="flex gap-4">
          <Link
            href="/roadmap"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
          >
            Start with the Roadmap →
          </Link>
          <a
            href="https://github.com/RahulTinku/frontend-learning-kit-v2"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-gray-200 text-gray-600 px-5 py-2.5 rounded-lg text-sm font-medium hover:border-gray-400 transition-colors"
          >
            GitHub ↗
          </a>
        </div>
      </div>

      {/* Section grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {sections.map((s) => (
          <Link
            key={s.href}
            href={s.href}
            className="group p-6 border border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-sm transition-all"
          >
            <div className="flex items-start justify-between mb-3">
              <span className="text-2xl">{s.emoji}</span>
              <span className="text-xs text-gray-400 font-mono">{s.time}</span>
            </div>
            <h2 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
              {s.title}
            </h2>
            <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
          </Link>
        ))}
      </div>

      {/* Footer */}
      <footer className="mt-20 pt-8 border-t border-gray-100 text-center text-sm text-gray-400">
        Built by{' '}
        <a href="https://github.com/RahulTinku" className="text-gray-500 hover:text-gray-900">
          Rahul Kumar
        </a>{' '}
        · Staff Frontend Platform Engineer ·{' '}
        <a
          href="https://github.com/RahulTinku/frontend-learning-kit-v2"
          className="text-gray-500 hover:text-gray-900"
        >
          Contribute on GitHub
        </a>
      </footer>
    </main>
  );
}
