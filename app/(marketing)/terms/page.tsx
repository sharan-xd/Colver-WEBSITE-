import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { FileCheck, ShieldAlert, Award, ArrowRight } from 'lucide-react'
import Badge from '@/components/ui/Badge'
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
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Colver Terms of Service' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms of Service & Delivery Conditions | Colver',
    description: 'Commercial software delivery agreements and engagement terms for Colver.',
    images: ['/og-image.jpg'],
  },
}

export default function TermsPage() {
  return (
    <div className="py-6 sm:py-10 space-y-12 max-w-4xl mx-auto px-4">
      <BreadcrumbsJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'Terms of Service', url: '/terms' },
        ]}
      />
      {/* Header */}
      <div className="text-center space-y-3 pt-4 sm:pt-8">
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-foreground">
          Terms of Service & Delivery Conditions
        </h1>
        <p className="text-sm text-slate-400">
          Last revised: October 2026 • Effective immediately
        </p>
      </div>

      <div className="p-8 sm:p-12 rounded-xl bg-card space-y-8 text-base text-slate-300 leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-foreground">1. Acceptance of Terms</h2>
          <p>
            By accessing or utilizing the website, software components, documentation, or services provided by Colver Systems Inc., you agree to be bound by these Terms of Service and all incorporated legal policies.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-foreground">2. Permitted Use & Licensing</h2>
          <p>
            All custom components, designs, and architectural patterns developed by Colver for enterprise clients are delivered under license or full work-for-hire assignment as specified in dedicated client service agreements. You may not reverse-engineer, exploit, or distribute proprietary core libraries outside authorized scopes.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-foreground">3. Service Level & Availability</h2>
          <p>
            While Colver strives for 99.99% uptime across all edge delivery infrastructure, the public website and demo environments are provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis without warranties of uninterrupted availability.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-foreground">4. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by applicable law, Colver Systems Inc. shall not be held liable for indirect, incidental, consequential, or punitive damages arising from the use or inability to use our platforms.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-foreground">5. Inquiries & Legal Notices</h2>
          <p>
            Formal legal notices and questions regarding these terms should be addressed to our legal department at{' '}
            <a href="mailto:info@colver.in" className="text-primary hover:underline font-semibold">
              info@colver.in
            </a>.
          </p>
        </section>
      </div>
    </div>
  )
}
