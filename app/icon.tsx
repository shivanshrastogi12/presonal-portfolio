import { ImageResponse } from 'next/og'
import { PERSONAL } from '@/src/constants/personal'

export const runtime = 'edge'
export const size = {
    width: 32,
    height: 32,
}
export const contentType = 'image/png'

export default async function Icon() {
    return new ImageResponse(
        (
            <div
                style={{
                    fontSize: 20,
                    background: 'linear-gradient(135deg, #8b5cf6, #06b6d4)',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontWeight: 'bold',
                    borderRadius: '6px',
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
