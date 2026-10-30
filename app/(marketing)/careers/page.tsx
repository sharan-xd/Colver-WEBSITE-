import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { Briefcase, ArrowRight, CheckCircle2, Globe, Heart, Zap, Shield } from 'lucide-react'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import { BreadcrumbsJsonLd } from '@/components/seo/JsonLd'

export const metadata: Metadata = {
  title: 'Engineering Careers & Opportunities | Colver',
  description:
    'Join Colver’s core engineering team. Build high-scale digital platforms, Next.js architectures, and AI workflows with a remote-first, high-autonomy team.',
  alternates: {
    canonical: 'https://colver.in/careers',
  },
  openGraph: {
    title: 'Careers at Colver — Engineering & Design Roles',
    description:
      'We hire exceptional engineers and product designers passionate about high-polish craftsmanship and sub-second performance.',
    url: 'https://colver.in/careers',
    siteName: 'Colver',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Colver Careers',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Careers at Colver — Engineering & Design Roles',
    description:
      'Join Colver’s remote-first engineering team building high-scale web systems.',
    images: ['/og-image.jpg'],
  },
  keywords: [
    'software engineering jobs',
    'remote Next.js developer',
    'frontend engineer roles',
    'full stack performance engineer',
    'Colver careers',
  ],
}

const perks = [
  {
    title: 'High Autonomy & Deep Focus',
    desc: 'No endless sync meetings or status theater. We prioritize uninterrupted blocks for creative and technical flow.',
    icon: Zap,
  },
  {
    title: 'Fully Remote & Global First',
    desc: 'Work from wherever you produce your best work. We hire based on exceptional craftsmanship, not postal codes.',
    icon: Globe,
  },
  {
    title: 'Competitive Compensation & Equity',
    desc: 'Top-tier base compensation paired with real equity ownership in the platforms we architect.',
    icon: Shield,
  },
  {
    title: 'Learning & Equipment Budget',
    desc: 'Top-spec hardware, ergonomic setups, conference stipends, and books to continually sharpen your craft.',
    icon: Heart,
  },
]

const openRoles = [
  {
    title: 'Senior Frontend Systems Architect',
    team: 'Platform Engineering',
    location: 'Remote / Global',
    type: 'Full-time',
    description: 'Lead our Next.js 16, React Three Fiber, and WebGL rendering infrastructure across global production client sites.',
  },
  {
    title: 'Design Systems Lead (Figma + React)',
    team: 'Design Craft',
    location: 'Remote / Global',
    type: 'Full-time',
    description: 'Architect accessible, high-polish component primitives, micro-interactions, and design tokens for the Colver platform.',
  },
  {
    title: 'Full-Stack Performance Engineer',
    team: 'Core Infrastructure',
    location: 'Remote / Global',
    type: 'Full-time',
    description: 'Optimize edge database caching, sub-50ms latency SLAs, and automated Core Web Vitals telemetry.',
  },
]

export default function CareersPage() {
  return (
    <div className="py-6 sm:py-10 space-y-16">
      <BreadcrumbsJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'Careers', url: '/careers' },
        ]}
      />
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto px-4 pt-4 sm:pt-8">
        <h1 className="text-3xl sm:text-5xl lg:text-[48px] font-bold tracking-tight mb-4 leading-tight text-foreground">
          Build High-Scale Software with Colver
        </h1>
        <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
          We keep our studio intentionally small, high-trust, and dedicated to exceptional engineering craftsmanship and performance standards.
        </p>
      </div>

      {/* How the team works */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {perks.map((p) => {
            const Icon = p.icon
            return (
              <div key={p.title} className="p-6 rounded-xl bg-card space-y-3">
                <div className="w-9 h-9 rounded-lg bg-surface flex items-center justify-center text-blue-400">
                  <Icon className="w-5 h-5" aria-hidden="true" />
                </div>
                <h3 className="text-base font-bold text-foreground">
                  {p.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            )
          })}
        </div>
      </div>

      {/* Open Roles List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Open Engineering Roles</h2>
          <p className="text-sm text-slate-400 mt-1">Direct impact on high-scale production systems</p>
        </div>

        <div className="space-y-4">
          {openRoles.map((role) => (
            <div
              key={role.title}
              className="p-6 sm:p-8 rounded-xl bg-card flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
            >
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-3 text-[13px] text-slate-400">
                  <span className="text-blue-400 font-semibold">{role.team}</span>
                  <span>•</span>
                  <span>{role.location}</span>
                  <span>•</span>
                  <span>{role.type}</span>
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  {role.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed max-w-2xl">
                  {role.description}
                </p>
              </div>

              <div className="shrink-0">
                <Link href={`/contact?subject=${encodeURIComponent(`Application: ${role.title}`)}`}>
                  <Button variant="primary" size="md" iconRight={<ArrowRight className="w-4 h-4" />}>
                    Apply Now
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Talent Network Callout */}
      <div className="max-w-3xl mx-auto px-4 text-center pt-8 space-y-4">
        <h3 className="text-xl font-bold text-foreground">Don&apos;t see an exact match?</h3>
        <p className="text-base text-slate-300 leading-relaxed max-w-md mx-auto">
          If you are an exceptional software engineer passionate about high-performance web systems, send your GitHub or work to us directly.
        </p>
        <a
          href="mailto:contact@colver.in?subject=General%20Engineering%20Application"
          className="inline-block pt-2"
        >
          <Button variant="secondary" size="md">
            Email Engineering Studio
          </Button>
        </a>
      </div>
    </div>
  )
}
