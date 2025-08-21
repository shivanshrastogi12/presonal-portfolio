import { ImageResponse } from 'next/og'
import { PERSONAL } from '@/src/constants/personal'

export const runtime = 'edge'
export const alt = `${PERSONAL.name} - ${PERSONAL.jobTitle}`
export const size = {
    width: 1200,
    height: 630,
}
export const contentType = 'image/png'

export default async function OGImage() {
    return new ImageResponse(
        (
            <div
                style={{
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#000000',
                    backgroundImage: `
            radial-gradient(circle at 25% 25%, #8b5cf6 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, #06b6d4 0%, transparent 50%)
          `,
                }}
            >
                {/* Logo/Initials */}
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '120px',
                        height: '120px',
                        backgroundColor: 'rgba(139, 92, 246, 0.2)',
                        border: '2px solid rgba(139, 92, 246, 0.5)',
                        borderRadius: '20px',
                        fontSize: '48px',
                        fontWeight: 'bold',
                        color: '#ffffff',
                        marginBottom: '40px',
                        backdropFilter: 'blur(10px)',
                    }}
                >
                    {PERSONAL.logoText}
                </div>

                {/* Name */}
                <div
                    style={{
                        fontSize: '60px',
                        fontWeight: 'bold',
                        color: '#ffffff',
                        marginBottom: '20px',
                        textAlign: 'center',
                        background: 'linear-gradient(90deg, #8b5cf6, #06b6d4)',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                    }}
                >
                    {PERSONAL.name}
                </div>

                {/* Job Title */}
                <div
                    style={{
                        fontSize: '32px',
                        color: '#ffffff',
                        opacity: 0.9,
                        marginBottom: '30px',
                        textAlign: 'center',
                    }}
                >
                    {PERSONAL.jobTitle}
                </div>

                {/* Tagline */}
                <div
                    style={{
                        fontSize: '20px',
                        color: '#ffffff',
                        opacity: 0.7,
                        textAlign: 'center',
                        maxWidth: '800px',
                    }}
                >
                    {PERSONAL.shortBio}
                </div>

                {/* Location */}
                <div
                    style={{
                        position: 'absolute',
                        bottom: '40px',
                        right: '60px',
                        fontSize: '16px',
                        color: '#ffffff',
                        opacity: 0.6,
                    }}
                >
                    📍 {PERSONAL.location.city}, {PERSONAL.location.country}
                </div>
            </div>
        ),
        {
            ...size,
        }
    )
}
