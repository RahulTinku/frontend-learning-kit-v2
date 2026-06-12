import type { Metadata } from 'next';
import { Nav } from '@/components/Nav';
import './globals.css';

const BASE_URL = 'https://frontend-learning-kit-v2.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Frontend Learning Kit v2',
    template: '%s — Frontend Learning Kit',
  },
  description: 'The definitive roadmap and resource hub for frontend platform engineers. Covers platform engineering, design systems, micro-frontends, DX engineering, and AI tooling.',
  keywords: ['frontend platform engineering', 'design systems', 'micro-frontends', 'developer experience', 'frontend roadmap', 'module federation'],
  authors: [{ name: 'Rahul Kumar', url: 'https://github.com/RahulTinku' }],
  openGraph: {
    type: 'website',
    siteName: 'Frontend Learning Kit',
    title: 'Frontend Learning Kit v2',
    description: 'The definitive roadmap and resource hub for frontend platform engineers.',
    url: BASE_URL,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Frontend Learning Kit v2',
    description: 'The definitive roadmap and resource hub for frontend platform engineers.',
    creator: '@rahulkumar_ddev',
  },
  alternates: {
    canonical: BASE_URL,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 antialiased">
        <Nav />
        {children}
      </body>
    </html>
  );
}
