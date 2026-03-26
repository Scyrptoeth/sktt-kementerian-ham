import { ImageResponse } from 'next/og'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#FAFAF8',
          borderRadius: 40,
        }}
      >
        <div style={{ fontSize: 120, lineHeight: 1, color: '#C48B8B' }}>❤</div>
      </div>
    ),
    { ...size }
  )
}
