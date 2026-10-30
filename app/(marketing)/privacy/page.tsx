import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { BreadcrumbsJsonLd } from '@/components/seo/JsonLd'

export const metadata: Metadata = {
  title: 'Privacy Policy & Data Governance | Colver',
  description:
    'Learn how Colver protects user privacy, minimal data collection standards, and enterprise compliance practices.',
  alternates: {
    canonical: 'https://colver.in/privacy',
  },
  openGraph: {
    title: 'Privacy Policy & Data Governance | Colver',
    description: 'Privacy-by-default architecture and transparent data rights at Colver.',
    url: 'https://colver.in/privacy',
    siteName: 'Colver',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Colver Privacy Policy' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy & Data Governance | Colver',
    description: 'Privacy-by-default architecture and transparent data rights at Colver.',
    images: ['/og-image.png'],
  },
}

export default function PrivacyPage() {
  return (
    <div className="py-8 sm:py-16 space-y-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <BreadcrumbsJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'Privacy Policy', url: '/privacy' },
        ]}
      />

      {/* Header */}
      <div className="space-y-4 pt-4">
        <div className="flex items-center gap-2 text-sm text-[#C8FF00] font-mono">
          <span className="w-2 h-2 rounded-full bg-[#C8FF00] animate-pulse" />
          <span>Last revised: October 2026 · Effective immediately</span>
        </div>
        <h1 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-tight text-[#F4F1EA]">
          Privacy Policy & Data Governance.
        </h1>
      </div>

      <div className="p-8 sm:p-12 rounded-[2px] bg-[#101010] space-y-8 text-base text-[#BFC3C9] leading-relaxed">
        <section className="space-y-3">
          <h2 className="font-display text-xl sm:text-2xl font-bold text-[#F4F1EA]">
            1. Core Privacy Commitment
          </h2>
          <p>
            Colver is architected around privacy-by-default. We do not sell your personal data, we do not utilize invasive cross-site advertising trackers, and we minimize data collection strictly to what is necessary for providing and securing our services.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl sm:text-2xl font-bold text-[#F4F1EA]">
            2. Information We Collect
          </h2>
          <p>
            When you interact with our website or contact our team, we may collect:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-[#F4F1EA]/90">
            <li><strong>Contact details:</strong> Name, work email address, and message contents submitted via our inquiry form.</li>
            <li><strong>Technical telemetry:</strong> Aggregated, privacy-preserving browser performance vitals (such as page load duration) with zero user fingerprinting.</li>
            <li><strong>Theme preferences:</strong> Local storage flags to remember your dark/light interface preference.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl sm:text-2xl font-bold text-[#F4F1EA]">
            3. How Information Is Used
          </h2>
          <p>
            Information collected is utilized exclusively to respond to your technical inquiries, fulfill enterprise contracts, ensure system reliability, and protect against malicious cyber activity.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl sm:text-2xl font-bold text-[#F4F1EA]">
            4. Data Retention & User Rights
          </h2>
          <p>
            Under GDPR, CCPA, and Indian Digital Personal Data Protection (DPDP) standards, you maintain the right to inspect, correct, export, or request the deletion of any personal communications sent to our organization.
          </p>
          <p>
            To exercise any data rights, email our data protection officer directly at{' '}
            <a href="mailto:privacy@colver.in" className="text-[#C8FF00] hover:underline font-semibold">
              privacy@colver.in
            </a>.
          </p>
        </section>
      </div>
    </div>
  )
}
