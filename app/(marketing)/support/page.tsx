import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from '@/components/ui/Icons'
import { BreadcrumbsJsonLd } from '@/components/seo/JsonLd'

export const metadata: Metadata = {
  title: 'Production Support & SLA Incident Management | Colver',
  description:
    'Need technical assistance? Access Colver’s developer support desk, enterprise SLAs, documentation guides, and incident reporting.',
  alternates: {
    canonical: 'https://colver.in/support',
  },
  openGraph: {
    title: 'Production Support & SLA Incident Management | Colver',
    description:
      'Direct developer assistance, enterprise 1-hour response SLAs, and system status telemetry.',
    url: 'https://colver.in/support',
    siteName: 'Colver',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Colver Support Hub',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Production Support & SLA Incident Management | Colver',
    description:
      'Direct developer assistance and enterprise response SLAs from the engineers who built the system.',
    images: ['/og-image.png'],
  },
}

const channels = [
  {
    title: 'Enterprise Priority Support',
    description: 'Dedicated 24/7 Slack channel and 1-hour response SLA for enterprise production clients.',
    badge: '< 1 hr SLA',
    cta: 'Open SLA Ticket',
    href: '/contact?type=enterprise-support',
  },
  {
    title: 'Developer Inquiries & Tickets',
    description: 'Direct email support for technical questions, integration troubleshooting, and account inquiries.',
    badge: '< 4 hr SLA',
    cta: 'Contact Support',
    href: '/contact',
  },
  {
    title: 'Self-Serve Documentation',
    description: 'Browse architectural specifications, design system guides, and release notes anytime.',
    badge: 'Immediate',
    cta: 'Browse Docs',
    href: '/docs',
  },
]

export default function SupportPage() {
  return (
    <div className="py-8 sm:py-16 space-y-20 md:space-y-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <BreadcrumbsJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'Support', url: '/support' },
        ]}
      />

      {/* Header */}
      <div className="max-w-4xl space-y-6">
        <div className="flex items-center gap-2 text-base text-[#C8FF00] font-mono">
          <span className="w-2.5 h-2.5 rounded-full bg-[#C8FF00] animate-pulse" />
          <span>All Core Edge Services Operational · Sub-15ms Edge Latency</span>
        </div>

        <h1 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-[64px] tracking-tight text-[#F4F1EA] leading-[1.04] text-balance">
          Production Support & SLA Incident Management.
        </h1>

        <p className="text-base sm:text-xl text-[#BFC3C9] leading-relaxed max-w-3xl">
          Get direct help from the software architects and systems engineers who built your systems. We resolve operational challenges with speed, clarity, and precision.
        </p>
      </div>

      {/* Support channels: Swiss Editorial Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {channels.map((ch, idx) => (
          <article
            key={ch.title}
            className={`p-8 rounded-[2px] space-y-6 flex flex-col justify-between transition-all duration-200 hover:bg-[#141414] ${
              idx === 0 ? 'bg-[#141414]' : 'bg-[#101010]'
            }`}
          >
            <div className="space-y-3">
              <span className="text-sm font-mono font-semibold text-[#C8FF00] bg-[#181818] px-3 py-1 rounded-[2px] inline-block">
                {ch.badge}
              </span>
              <h2 className="font-display text-xl sm:text-2xl font-bold text-[#F4F1EA]">
                {ch.title}
              </h2>
              <p className="text-base text-[#BFC3C9] leading-relaxed">
                {ch.description}
              </p>
            </div>
            <div className="pt-2">
              <Link
                href={ch.href}
                className="inline-flex items-center gap-2 text-base font-semibold text-[#C8FF00] hover:text-[#b8ea00] transition-colors"
              >
                <span>{ch.cta}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </article>
        ))}
      </div>

      {/* Incident Protocol */}
      <div className="p-8 sm:p-14 bg-[#121212] rounded-[2px] flex flex-col md:flex-row md:items-center justify-between gap-8">
        <div className="space-y-3 max-w-2xl">
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-[#F4F1EA] tracking-tight">
            Emergency Production Incidents
          </h2>
          <p className="text-base sm:text-lg text-[#BFC3C9] leading-relaxed">
            If you are experiencing critical downtime on an active client deployment, email{' '}
            <a href="mailto:contact@colver.in?subject=URGENT:%20Production%20Incident" className="text-[#C8FF00] font-semibold underline">
              contact@colver.in
            </a>{' '}
            with &ldquo;URGENT&rdquo; in the subject line for immediate senior engineer paging.
          </p>
        </div>
      </div>
    </div>
  )
}
