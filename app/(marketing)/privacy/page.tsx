import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { Lock, Shield, EyeOff, FileText } from 'lucide-react'
import Badge from '@/components/ui/Badge'
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
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Colver Privacy Policy' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy & Data Governance | Colver',
    description: 'Privacy-by-default architecture and transparent data rights at Colver.',
    images: ['/og-image.jpg'],
  },
}

export default function PrivacyPage() {
  return (
    <div className="py-6 sm:py-10 space-y-12 max-w-4xl mx-auto px-4">
      <BreadcrumbsJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'Privacy Policy', url: '/privacy' },
        ]}
      />
      {/* Header */}
      <div className="text-center space-y-3 pt-4 sm:pt-8">
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-foreground">
          Privacy Policy & Data Governance
        </h1>
        <p className="text-sm text-slate-400">
          Last revised: October 2026 • Effective immediately
        </p>
      </div>

      <div className="p-8 sm:p-12 rounded-xl bg-card space-y-8 text-base text-slate-300 leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-foreground">1. Our Core Privacy Commitment</h2>
          <p>
            Colver is architected around privacy-by-default. We do not sell your personal data, we do not utilize invasive cross-site advertising trackers, and we minimize data collection strictly to what is necessary for providing and securing our services.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-foreground">2. Information We Collect</h2>
          <p>
            When you interact with our website or contact our team, we may collect:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-foreground/80">
            <li><strong>Contact details:</strong> Name, work email address, and message contents submitted via our inquiry form.</li>
            <li><strong>Technical telemetry:</strong> Aggregated, privacy-preserving browser performance vitals (such as page load duration) with zero user fingerprinting.</li>
            <li><strong>Theme preferences:</strong> Local storage flags to remember your dark/light interface preference.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-foreground">3. How Information Is Used</h2>
          <p>
            Information collected is utilized exclusively to respond to your technical inquiries, fulfill enterprise contracts, ensure system reliability, and protect against malicious cyber activity.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-foreground">4. Data Retention & User Rights</h2>
          <p>
            Under GDPR, CCPA, and global privacy standards, you maintain the right to inspect, correct, export, or request the deletion of any personal communications sent to our organization.
          </p>
          <p>
            To exercise any data rights, email our data protection officer directly at{' '}
            <a href="mailto:info@colver.in" className="text-primary hover:underline font-semibold">
              info@colver.in
            </a>.
          </p>
        </section>
      </div>
    </div>
  )
}
