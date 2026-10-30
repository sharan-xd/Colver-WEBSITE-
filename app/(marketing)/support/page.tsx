import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { LifeBuoy, MessageSquare, Mail, Terminal, ArrowRight, CheckCircle2, Clock } from 'lucide-react'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import { BreadcrumbsJsonLd } from '@/components/seo/JsonLd'

export const metadata: Metadata = {
  title: 'Support Hub & SLA Incident Management | Colver',
  description:
    'Need technical assistance? Access Colver’s developer support desk, enterprise SLAs, documentation guides, and incident reporting.',
  alternates: {
    canonical: 'https://colver.in/support',
  },
  openGraph: {
    title: 'Support Hub & SLA Incident Management | Colver',
    description:
      'Direct developer assistance, enterprise 1-hour response SLAs, and system status telemetry.',
    url: 'https://colver.in/support',
    siteName: 'Colver',
    images: [
      {
        url: '/og-image.jpg',
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
    title: 'Support Hub & SLA Incident Management | Colver',
    description:
      'Direct developer assistance and enterprise response SLAs from the engineers who built the system.',
    images: ['/og-image.jpg'],
  },
  keywords: [
    'Colver technical support',
    'enterprise SLA support',
    'developer help desk',
    'software incident management',
  ],
}

const channels = [
  {
    title: 'Enterprise Priority Support',
    description: 'Dedicated 24/7 Slack channel and 1-hour response SLA for enterprise production clients.',
    icon: Clock,
    badge: '< 1 hr SLA',
    cta: 'Open SLA Ticket',
    href: '/contact?type=enterprise-support',
  },
  {
    title: 'Developer Inquiries & Tickets',
    description: 'Direct email support for technical questions, integration troubleshooting, and account inquiries.',
    icon: Mail,
    badge: '< 4 hr SLA',
    cta: 'Contact Support',
    href: '/contact',
  },
  {
    title: 'Self-Serve Documentation',
    description: 'Browse architectural specifications, design system guides, and release notes anytime.',
    icon: Terminal,
    badge: 'Immediate',
    cta: 'Browse Docs',
    href: '/docs',
  },
]

export default function SupportPage() {
  return (
    <div className="py-6 sm:py-10 space-y-14">
      <BreadcrumbsJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'Support', url: '/support' },
        ]}
      />
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto px-4 pt-4 sm:pt-8">
        <h1 className="text-3xl sm:text-5xl lg:text-[48px] font-bold tracking-tight mb-4 leading-tight text-foreground">
          Production Support & SLA Incident Management
        </h1>
        <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
          Get direct help from the engineers who built your systems. We resolve operational challenges with speed, clarity, and precision.
        </p>

        {/* Status Pill */}
        <div className="mt-6 inline-flex items-center gap-2 text-sm text-slate-300">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-semibold text-foreground">All core edge services operational</span>
        </div>
      </div>

      {/* Support channels */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {channels.map((ch) => {
            const Icon = ch.icon
            return (
              <article key={ch.title} className="p-6 sm:p-8 rounded-xl bg-card space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-9 h-9 rounded-lg bg-surface flex items-center justify-center text-blue-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[13px] font-semibold text-blue-400 bg-surface px-2.5 py-1 rounded">
                      {ch.badge}
                    </span>
                  </div>
                  <h2 className="text-lg font-bold text-foreground">
                    {ch.title}
                  </h2>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {ch.description}
                  </p>
                </div>
                <div className="pt-2">
                  <Link href={ch.href} className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300">
                    <span>{ch.cta}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            )
          })}
        </div>
      </div>

      {/* Incident Protocol */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-xl bg-surface text-center space-y-3">
          <h3 className="text-xl font-bold text-foreground">Emergency Production Incidents</h3>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
            If you are experiencing critical downtime on an active client deployment, email{' '}
            <a href="mailto:contact@colver.in?subject=URGENT:%20Production%20Incident" className="text-blue-400 font-semibold hover:underline">
              contact@colver.in
            </a>{' '}
            with &ldquo;URGENT&rdquo; in the subject line for immediate engineer paging.
          </p>
        </div>
      </div>
    </div>
  )
}
