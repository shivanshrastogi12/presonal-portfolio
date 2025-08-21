import { PERSONAL, CONTACT_INFO, SOCIALS } from '@/src/constants/personal'
import { SEO } from '@/src/constants/seo'

// Person Schema for SEO
export const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: PERSONAL.name,
    jobTitle: PERSONAL.jobTitle,
    description: PERSONAL.shortBio,
    url: SEO.url,
    image: `${SEO.url}/opengraph-image`,
    email: CONTACT_INFO.email,
    telephone: CONTACT_INFO.phone,
    address: {
        '@type': 'PostalAddress',
        addressLocality: PERSONAL.location.city,
        addressCountry: PERSONAL.location.country,
    },
    alumniOf: {
        '@type': 'EducationalOrganization',
        name: PERSONAL.university.name,
    },
    sameAs: SOCIALS.map(social => social.url),
    knowsAbout: [
        'Full-Stack Development',
        'React',
        'Next.js',
        'TypeScript',
        'JavaScript',
        'Node.js',
        'Web Development',
        'Software Engineering',
        'Frontend Development',
        'Backend Development',
    ],
    hasOccupation: {
        '@type': 'Occupation',
        name: PERSONAL.jobTitle,
        occupationLocation: {
            '@type': 'City',
            name: PERSONAL.location.city,
        },
        skills: [
            'React',
            'Next.js',
            'TypeScript',
            'JavaScript',
            'Node.js',
            'Python',
            'Java',
            'Database Design',
            'API Development',
            'Cloud Computing',
        ],
    },
}

// Website Schema
export const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SEO.title,
    description: SEO.description,
    url: SEO.url,
    author: {
        '@type': 'Person',
        name: PERSONAL.name,
    },
    inLanguage: 'en-US',
    copyrightYear: new Date().getFullYear(),
    copyrightHolder: {
        '@type': 'Person',
        name: PERSONAL.name,
    },
}

// Portfolio/Creative Work Schema
export const portfolioSchema = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: `${PERSONAL.name} - Portfolio`,
    description: `Professional portfolio showcasing ${PERSONAL.jobTitle} work and projects`,
    url: SEO.url,
    author: {
        '@type': 'Person',
        name: PERSONAL.name,
    },
    dateCreated: '2024-01-01', // Update with your actual portfolio creation date
    dateModified: new Date().toISOString().split('T')[0],
    genre: 'Portfolio',
    inLanguage: 'en-US',
}

// Breadcrumb Schema Generator
export const generateBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: item.url,
    })),
})

// FAQ Schema Generator (useful for About section)
export const generateFAQSchema = (faqs: Array<{ question: string; answer: string }>) => ({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
        },
    })),
})

// Organization Schema (if you have a company or work for one)
export const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: PERSONAL.name,
    url: SEO.url,
    logo: `${SEO.url}/icon`,
    contactPoint: {
        '@type': 'ContactPoint',
        email: CONTACT_INFO.email,
        contactType: 'Professional Inquiry',
        availableLanguage: 'English',
    },
    address: {
        '@type': 'PostalAddress',
        addressLocality: PERSONAL.location.city,
        addressCountry: PERSONAL.location.country,
    },
    sameAs: SOCIALS.map(social => social.url),
}

// Complete structured data for the homepage
export const homepageStructuredData = {
    '@context': 'https://schema.org',
    '@graph': [
        personSchema,
        websiteSchema,
        portfolioSchema,
        organizationSchema,
    ],
}
