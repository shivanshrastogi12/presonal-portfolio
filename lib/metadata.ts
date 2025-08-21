import { Metadata } from 'next'
import { SEO } from '@/src/constants/seo'
import { PERSONAL } from '@/src/constants/personal'

export function generateMetadata({
    title,
    description,
    image,
    url,
}: {
    title?: string
    description?: string
    image?: string
    url?: string
} = {}): Metadata {
    const metaTitle = title ? `${title} — ${SEO.title}` : SEO.title
    const metaDescription = description || SEO.description
    const metaImage = image || SEO.image
    const metaUrl = url || SEO.url

    return {
        title: metaTitle,
        description: metaDescription,
        keywords: SEO.keywords,
        authors: [{ name: PERSONAL.name, url: metaUrl }],
        creator: PERSONAL.name,
        publisher: PERSONAL.name,
        formatDetection: {
            email: false,
            address: false,
            telephone: false,
        },
        metadataBase: new URL(metaUrl),
        alternates: {
            canonical: metaUrl,
        },
        openGraph: {
            type: 'website',
            locale: 'en_US',
            url: metaUrl,
            title: metaTitle,
            description: metaDescription,
            siteName: SEO.title,
            images: [
                {
                    url: metaImage,
                    width: 1200,
                    height: 630,
                    alt: metaTitle,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: metaTitle,
            description: metaDescription,
            images: [metaImage],
            creator: '@shivanshrastogi12', // Update with your Twitter handle
        },
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                'max-video-preview': -1,
                'max-image-preview': 'large',
                'max-snippet': -1,
            },
        },
        verification: {
            // Add your verification codes here
            google: 'your-google-site-verification-code',
            // yandex: 'your-yandex-verification-code',
            // yahoo: 'your-yahoo-verification-code',
            // other: 'your-other-verification-code',
        },
        category: 'technology',
        classification: 'Portfolio Website',
    }
}

export const defaultMetadata = generateMetadata()
