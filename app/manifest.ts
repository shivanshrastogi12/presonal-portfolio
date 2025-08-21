import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Shivansh Rastogi - Senior Full-Stack Developer',
        short_name: 'Shivansh Rastogi',
        description: 'Crafting solutions where code meets efficiency and innovation',
        start_url: '/',
        display: 'standalone',
        background_color: '#000000',
        theme_color: '#8b5cf6',
        orientation: 'portrait-primary',
        scope: '/',
        lang: 'en',
        categories: ['portfolio', 'developer', 'technology'],
        icons: [
            {
                src: '/icon-192x192.png',
                sizes: '192x192',
                type: 'image/png',
                purpose: 'any',
            },
            {
                src: '/icon-256x256.png',
                sizes: '256x256',
                type: 'image/png',
            },
            {
                src: '/icon-384x384.png',
                sizes: '384x384',
                type: 'image/png',
            },
            {
                src: '/icon-512x512.png',
                sizes: '512x512',
                type: 'image/png',
                purpose: 'any',
            },
            {
                src: '/apple-touch-icon.png',
                sizes: '180x180',
                type: 'image/png',
            },
        ],
        shortcuts: [
            {
                name: 'View Projects',
                short_name: 'Projects',
                description: 'Explore my latest projects and work',
                url: '/#projects',
                icons: [{ src: '/icon-192x192.png', sizes: '192x192' }],
            },
            {
                name: 'Download Resume',
                short_name: 'Resume',
                description: 'Download my resume',
                url: '/resume',
                icons: [{ src: '/icon-192x192.png', sizes: '192x192' }],
            },
            {
                name: 'Contact Me',
                short_name: 'Contact',
                description: 'Get in touch',
                url: '/#contact',
                icons: [{ src: '/icon-192x192.png', sizes: '192x192' }],
            },
        ],
    }
}
