import type { Metadata } from 'next'
import ContactSection from '@/components/sections/ContactSection/ContactSection'
import { ContactPageJsonLd, BreadcrumbsJsonLd } from '@/components/seo/JsonLd'

export const metadata: Metadata = {
  title: 'Contact Engineering & Project Inquiries | Colver',
  description:
    'Discuss your software specifications, web development requirements, or enterprise automation project with Colver senior engineers.',
  alternates: {
    canonical: 'https://colver.in/contact',
  },
  openGraph: {
    title: 'Contact Engineering & Project Inquiries | Colver',
    description:
      'Reach out to Colver for tailored software systems, high-speed web apps, and enterprise engineering consultation.',
    url: 'https://colver.in/contact',
    siteName: 'Colver',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact Colver Systems',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Engineering & Project Inquiries | Colver',
    description:
      'Discuss your software specifications and technical requirements with Colver.',
    images: ['/og-image.jpg'],
  },
  keywords: [
    'contact Colver',
    'hire Next.js developers',
    'software engineering inquiry',
    'custom web development agency',
    'enterprise tech consultation',
  ],
}

export default function ContactPage() {
  return (
    <>
      <ContactPageJsonLd />
      <BreadcrumbsJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'Contact', url: '/contact' },
        ]}
      />
      <ContactSection />
    </>
  )
}
