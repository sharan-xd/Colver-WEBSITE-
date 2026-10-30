import type { Metadata } from 'next'
import AboutSection from '@/app/AboutSections/AboutSection'
import { BreadcrumbsJsonLd } from '@/components/seo/JsonLd'

export const metadata: Metadata = {
  title: 'About Colver — High-Performance Engineering & Digital Craftsmanship',
  description:
    'Learn about Colver’s philosophy of high-craft software engineering, our architectural standards, and how we build systems that scale.',
  alternates: {
    canonical: 'https://colver.in/about',
  },
  openGraph: {
    title: 'About Colver — High-Performance Engineering & Digital Craftsmanship',
    description:
      'We combine architectural rigor, sub-second speeds, and modern developer tooling to ship digital platforms that endure.',
    url: 'https://colver.in/about',
    siteName: 'Colver',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'About Colver Systems',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Colver — High-Performance Engineering',
    description:
      'High-craft software engineering, architectural standards, and systems that scale.',
    images: ['/og-image.png'],
  },
  keywords: [
    'about Colver',
    'software engineering team',
    'digital platform architects',
    'high performance web development',
  ],
}

export default function AboutPage() {
  return (
    <>
      <BreadcrumbsJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'About', url: '/about' },
        ]}
      />
      <AboutSection />
    </>
  )
}
