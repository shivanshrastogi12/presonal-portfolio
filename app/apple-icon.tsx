import { ImageResponse } from 'next/og'
import { PERSONAL } from '@/src/constants/personal'

export const runtime = 'edge'
export const size = {
    width: 180,
    height: 180,
}
export const contentType = 'image/png'

export default async function AppleIcon() {
    return new ImageResponse(
        (
            <div
                style={{
                    fontSize: 80,
                    background: 'linear-gradient(135deg, #8b5cf6, #06b6d4)',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontWeight: 'bold',
                    borderRadius: '32px',
                }}
            >
                {PERSONAL.logoText}
            </div>
        ),
        {
            ...size,
        }
    )
}
