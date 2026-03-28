import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Latihan SKTT Kementerian HAM';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #C8D5C4 0%, #F5EFE5 50%, #F5E8E8 100%)',
          fontFamily: 'system-ui, sans-serif',
          padding: '60px',
        }}
      >
        {/* Badge */}
        <div
          style={{
            background: 'rgba(255,255,255,0.7)',
            border: '1px solid #A8C8C0',
            borderRadius: '999px',
            padding: '8px 20px',
            fontSize: 18,
            fontWeight: 600,
            color: '#3B7269',
            marginBottom: 24,
          }}
        >
          Kementerian Hak Asasi Manusia RI
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            color: '#2D2D2D',
            textAlign: 'center',
            lineHeight: 1.2,
            marginBottom: 20,
          }}
        >
          Latihan SKTT
        </div>
        <div
          style={{
            fontSize: 52,
            fontWeight: 700,
            color: '#3B7269',
            textAlign: 'center',
            marginBottom: 40,
          }}
        >
          Kementerian HAM
        </div>

        {/* Feature pills */}
        <div style={{ display: 'flex', gap: 16 }}>
          {['7 Paket · 84 Soal', 'Esai + Scoring', 'Materi Lengkap'].map((label) => (
            <div
              key={label}
              style={{
                background: 'rgba(255,255,255,0.8)',
                border: '1px solid #C8D5C4',
                borderRadius: 12,
                padding: '12px 24px',
                fontSize: 22,
                fontWeight: 600,
                color: '#4A7A47',
              }}
            >
              {label}
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
