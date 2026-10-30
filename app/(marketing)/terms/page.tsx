import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { BreadcrumbsJsonLd } from '@/components/seo/JsonLd'

export const metadata: Metadata = {
  title: 'Terms of Service & Delivery Conditions | Colver',
  description:
    'Commercial terms, software licensing, client warranties, and engagement terms for Colver Systems.',
  alternates: {
    canonical: 'https://colver.in/terms',
  },
  openGraph: {
    title: 'Terms of Service & Delivery Conditions | Colver',
    description: 'Commercial software delivery agreements and engagement terms for Colver.',
    url: 'https://colver.in/terms',
    siteName: 'Colver',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Colver Terms of Service' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms of Service & Delivery Conditions | Colver',
    description: 'Commercial software delivery agreements and engagement terms for Colver.',
    images: ['/og-image.png'],
  },
}

export default function TermsPage() {
  return (
    <div className="py-8 sm:py-16 space-y-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <BreadcrumbsJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'Terms of Service', url: '/terms' },
        ]}
      />

      {/* Header */}
      <div className="space-y-4 pt-4">
        <div className="flex items-center gap-2 text-sm text-[#C8FF00] font-mono">
          <span className="w-2 h-2 rounded-full bg-[#C8FF00] animate-pulse" />
          <span>Last revised: October 2026 · Effective immediately</span>
        </div>
        <h1 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-tight text-[#F4F1EA]">
          Terms of Service & Delivery Conditions.
        </h1>
      </div>

      <div className="p-8 sm:p-12 rounded-[2px] bg-[#101010] space-y-8 text-base text-[#BFC3C9] leading-relaxed">
        <section className="space-y-3">
          <h2 className="font-display text-xl sm:text-2xl font-bold text-[#F4F1EA]">
            1. Acceptance of Terms
          </h2>
          <p>
            By accessing or utilizing the website, software components, documentation, or services provided by Colver Systems, you agree to be bound by these Terms of Service and all incorporated legal policies.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl sm:text-2xl font-bold text-[#F4F1EA]">
            2. Permitted Use & IP Ownership
          </h2>
          <p>
            All custom components, designs, and architectural patterns developed by Colver for enterprise clients are delivered under full intellectual property assignment as specified in dedicated client service agreements. Clients retain 100% ownership of bespoke source code and data schemas upon milestone settlement.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl sm:text-2xl font-bold text-[#F4F1EA]">
            3. Service Level & Availability
          </h2>
          <p>
            While Colver strives for 99.99% uptime across all edge delivery infrastructure, the public website and demo environments are provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis without warranties of uninterrupted availability.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl sm:text-2xl font-bold text-[#F4F1EA]">
            4. Limitation of Liability
          </h2>
          <p>
            To the maximum extent permitted by applicable Indian and international law, Colver Systems shall not be held liable for indirect, incidental, consequential, or punitive damages arising from the use or inability to use our platforms.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl sm:text-2xl font-bold text-[#F4F1EA]">
            5. Governing Law & Jurisdiction
          </h2>
          <p>
            These terms are governed by the laws of India. Any legal disputes arising in connection with services shall be resolved within the exclusive jurisdiction of the courts of Bengaluru, Karnataka.
          </p>
        </section>
      </div>
    </div>
  )
}
