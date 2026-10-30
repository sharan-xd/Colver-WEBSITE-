import type { Metadata } from 'next'
import FeaturesSection from '@/components/sections/FeaturesSections/FeaturesSection'
import { BreadcrumbsJsonLd } from '@/components/seo/JsonLd'

export const metadata: Metadata = {
  title: 'Platform Features & Core Technologies | Colver',
  description:
    'Discover Colver’s core capabilities: sub-second SSR, real-time WebSockets, hardened security headers, and AI-accelerated developer workflows.',
  alternates: {
    canonical: 'https://colver.in/features',
  },
  openGraph: {
    title: 'Platform Features & Core Technologies | Colver',
    description:
      'Explore the architectural pillars that power Colver: GPU-accelerated graphics, sub-second latency, and enterprise security.',
    url: 'https://colver.in/features',
    siteName: 'Colver',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Colver Platform Features',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Platform Features & Core Technologies | Colver',
    description:
      'Sub-second SSR, real-time WebSockets, hardened security headers, and AI workflows.',
    images: ['/og-image.png'],
  },
  keywords: [
    'web platform features',
    'Next.js 16 architecture',
    'real time web apps',
    'sub second latency',
    'edge rendering',
  ],
}

export default function FeaturesPage() {
  return (
    <>
      <BreadcrumbsJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'Features', url: '/features' },
        ]}
      />
      <FeaturesSection />
    </>
  )
}
