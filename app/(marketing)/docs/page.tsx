import type { Metadata } from 'next'
import DocsClient from './DocsClient'
import { BreadcrumbsJsonLd } from '@/components/seo/JsonLd'

export const metadata: Metadata = {
  title: 'Technical Documentation & Architecture | Colver',
  description:
    'Comprehensive technical documentation, setup requirements, directory architecture, component APIs, and security configurations for Colver.',
  alternates: {
    canonical: 'https://colver.in/docs',
  },
  openGraph: {
    title: 'Technical Documentation & Architecture | Colver',
    description:
      'Developer guides, design tokens, component library APIs, and security configurations for Colver.',
    url: 'https://colver.in/docs',
    siteName: 'Colver',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Colver Documentation',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Technical Documentation & Architecture | Colver',
    description:
      'Technical documentation, component APIs, and architecture blueprints for Colver.',
    images: ['/og-image.jpg'],
  },
  keywords: [
    'Colver documentation',
    'Next.js 16 setup',
    'Turbopack dev guide',
    'Framer Motion GSAP docs',
    'web app architecture specs',
  ],
}

export default function DocsPage() {
  return (
    <>
      <BreadcrumbsJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'Documentation', url: '/docs' },
        ]}
      />
      <DocsClient />
    </>
  )
}
