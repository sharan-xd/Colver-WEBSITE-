import type { Metadata } from 'next'
import ShowcaseSection from '@/components/sections/ShowcaseSection/ShowcaseSection'
import { BreadcrumbsJsonLd } from '@/components/seo/JsonLd'

export const metadata: Metadata = {
  title: 'Showcase & Case Studies | Colver',
  description:
    'Explore production web applications, e-commerce engines, and enterprise software built by Colver across industries.',
  alternates: {
    canonical: 'https://colver.in/showcase',
  },
  openGraph: {
    title: 'Showcase & Case Studies | Colver',
    description:
      'Explore live digital products and applications engineered with sub-second speeds and custom architectures.',
    url: 'https://colver.in/showcase',
    siteName: 'Colver',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Colver Product Showcase',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Showcase & Case Studies | Colver',
    description:
      'Explore live digital products and applications engineered with sub-second speeds.',
    images: ['/og-image.png'],
  },
  keywords: [
    'software case studies',
    'Next.js portfolio',
    'web app showcase',
    'enterprise application examples',
  ],
}

export default function ShowcasePage() {
  return (
    <>
      <BreadcrumbsJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'Showcase', url: '/showcase' },
        ]}
      />
      <ShowcaseSection />
    </>
  )
}
