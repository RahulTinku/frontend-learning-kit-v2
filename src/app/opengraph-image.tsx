import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Frontend Learning Kit v2';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#ffffff',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          fontFamily: 'system-ui, sans-serif',
          position: 'relative',
        }}
      >
        {/* Top accent bar */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 6, background: '#2563eb' }} />

        {/* Label */}
        <div style={{ fontSize: 18, color: '#2563eb', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 24 }}>
          frontend platform engineering
        </div>

        {/* Title */}
        <div style={{ fontSize: 72, fontWeight: 800, color: '#111827', lineHeight: 1.1, marginBottom: 28 }}>
          Frontend Learning Kit
          <span style={{ color: '#2563eb' }}> v2</span>
        </div>

        {/* Subtitle */}
        <div style={{ fontSize: 28, color: '#6b7280', lineHeight: 1.4, maxWidth: 800 }}>
          The definitive roadmap and resource hub for frontend platform engineers.
        </div>

        {/* Sections row */}
        <div style={{ display: 'flex', gap: 12, marginTop: 52 }}>
          {['Roadmap', 'Design Systems', 'Micro-Frontends', 'DX Engineering', 'AI Tooling'].map((s) => (
            <div
              key={s}
              style={{
                background: '#f3f4f6',
                color: '#374151',
                fontSize: 16,
                fontWeight: 500,
                padding: '6px 14px',
                borderRadius: 6,
              }}
            >
              {s}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div style={{ position: 'absolute', bottom: 48, left: 80, fontSize: 18, color: '#9ca3af' }}>
          github.com/RahulTinku/frontend-learning-kit-v2
        </div>
      </div>
    ),
    { ...size }
  );
}
