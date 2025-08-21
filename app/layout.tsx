import type React from "react"
import type { Metadata } from "next"
import { Sora, Inter } from "next/font/google"
import { Toaster } from "@/components/ui/toaster"
import { SEO } from "@/src/constants/seo"
import "./globals.css"

const sora = Sora({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sora",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: SEO.title,
    template: `%s — ${SEO.title}`,
  },
  description: SEO.description,
  keywords: SEO.keywords,
  authors: [{ name: "Alex Rivera" }],
  creator: "Alex Rivera",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SEO.url,
    title: SEO.title,
    description: SEO.description,
    siteName: SEO.title,
    images: [
      {
        url: SEO.image,
        width: 1200,
        height: 630,
        alt: SEO.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SEO.title,
    description: SEO.description,
    images: [SEO.image],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <style>{`
          html {
            --font-sora: ${sora.style.fontFamily};
            --font-inter: ${inter.style.fontFamily};
          }
        `}</style>
      </head>
      <body className={`${sora.variable} ${inter.variable} bg-black text-white antialiased`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-white text-black px-4 py-2 rounded-md z-50"
        >
          Skip to main content
        </a>
        <div className="relative min-h-screen">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-90" />
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.02'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
          <div className="relative z-10">{children}</div>
        </div>
        <Toaster />
      </body>
    </html>
  )
}
