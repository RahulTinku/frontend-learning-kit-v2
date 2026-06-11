import type { Metadata } from 'next';
import { Nav } from '@/components/Nav';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Frontend Learning Kit v2',
    template: '%s — Frontend Learning Kit',
  },
  description: 'The definitive roadmap and resource hub for frontend platform engineers.',
  openGraph: {
    title: 'Frontend Learning Kit v2',
    description: 'The definitive roadmap and resource hub for frontend platform engineers.',
    url: 'https://github.com/RahulTinku/frontend-learning-kit-v2',
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
