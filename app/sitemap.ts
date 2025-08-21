import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://shivanshrastogi.vercel.app'
    const lastModified = new Date()

    // Static pages
    const staticPages = [
        {
            url: `${baseUrl}`,
            lastModified,
            changeFrequency: 'monthly' as const,
            priority: 1,
        },
        {
            url: `${baseUrl}/resume`,
            lastModified,
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
    ]

    // Section-specific URLs (for deep linking)
    const sections = [
        {
            url: `${baseUrl}/#about`,
            lastModified,
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        },
        {
            url: `${baseUrl}/#skills`,
            lastModified,
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        },
        {
            url: `${baseUrl}/#experience`,
            lastModified,
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/#projects`,
            lastModified,
            changeFrequency: 'weekly' as const,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/#certifications`,
            lastModified,
            changeFrequency: 'monthly' as const,
            priority: 0.6,
        },
        {
            url: `${baseUrl}/#contact`,
            lastModified,
            changeFrequency: 'yearly' as const,
            priority: 0.5,
        },
    ]

    return [...staticPages, ...sections]
}
