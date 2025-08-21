// Google Analytics 4 Configuration
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID

// Google Tag Manager Configuration
export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID

// Track page views
export const trackPageView = (url: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('config', GA_TRACKING_ID!, {
            page_location: url,
        })
    }
}

// Track custom events
export const trackEvent = ({
    action,
    category,
    label,
    value,
}: {
    action: string
    category: string
    label?: string
    value?: number
}) => {
    if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', action, {
            event_category: category,
            event_label: label,
            value: value,
        })
    }
}

// Common event tracking functions
export const analytics = {
    // Navigation events
    trackNavigation: (section: string) => {
        trackEvent({
            action: 'navigation',
            category: 'User Interaction',
            label: section,
        })
    },

    // Download events
    trackDownload: (file: string) => {
        trackEvent({
            action: 'download',
            category: 'Engagement',
            label: file,
        })
    },

    // Contact form events
    trackContactForm: (action: 'submit' | 'error' | 'success') => {
        trackEvent({
            action: 'contact_form',
            category: 'Form Interaction',
            label: action,
        })
    },

    // Project view events
    trackProjectView: (projectName: string) => {
        trackEvent({
            action: 'project_view',
            category: 'Content',
            label: projectName,
        })
    },

    // External link clicks
    trackExternalLink: (url: string, label?: string) => {
        trackEvent({
            action: 'external_link_click',
            category: 'Outbound Link',
            label: label || url,
        })
    },

    // Social media clicks
    trackSocialClick: (platform: string) => {
        trackEvent({
            action: 'social_click',
            category: 'Social Media',
            label: platform,
        })
    },

    // Resume actions
    trackResumeAction: (action: 'view' | 'download') => {
        trackEvent({
            action: 'resume_action',
            category: 'Resume',
            label: action,
        })
    },
}

// Types for TypeScript
declare global {
    interface Window {
        gtag: (
            command: string,
            targetId: string,
            config?: {
                page_location?: string
                event_category?: string
                event_label?: string
                value?: number
            }
        ) => void
        dataLayer: any[]
    }
}
