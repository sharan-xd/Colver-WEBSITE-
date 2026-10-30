import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from '@/components/ui/Icons'
import { BreadcrumbsJsonLd } from '@/components/seo/JsonLd'

export const metadata: Metadata = {
  title: 'Engineering Careers & Opportunities | Colver',
  description:
    'Join Colver’s core engineering team in Bengaluru and globally. Build high-scale digital platforms, Next.js architectures, and AI workflows.',
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
      'Join Colver’s engineering team building high-scale web systems.',
    images: ['/og-image.jpg'],
  },
}

const perks = [
  {
    title: 'High Autonomy & Deep Focus',
    desc: 'No endless sync meetings or status theater. We prioritize uninterrupted blocks for creative and technical flow.',
  },
  {
    title: 'Bengaluru Hub & Remote Flexibility',
    desc: 'Work from our Indiranagar studio or wherever you produce your best code. We evaluate output and craftsmanship, not seat time.',
  },
  {
    title: 'Competitive Compensation & Equity',
    desc: 'Top-tier cash compensation paired with real equity and profit-sharing in the systems we architect.',
  },
  {
    title: 'Top-Tier Hardware & Tooling',
    desc: 'Maxed-out development workstations, 4K displays, and comprehensive book/conference stipends to sharpen your craft.',
  },
]

const openRoles = [
  {
    title: 'Senior Frontend Systems Architect',
    team: 'Platform Engineering',
    location: 'Bengaluru / Remote',
    type: 'Full-time',
    description: 'Lead our Next.js 16, Three.js 3D isometric pipelines, and WebGL rendering infrastructure across production deployments.',
  },
  {
    title: 'Design Systems Lead (Figma + React)',
    team: 'Design Engineering',
    location: 'Bengaluru / Remote',
    type: 'Full-time',
    description: 'Architect accessible, high-polish component primitives, micro-interaction state machines, and design tokens.',
  },
  {
    title: 'Full-Stack Performance Engineer',
    team: 'Core Infrastructure',
    location: 'Bengaluru / Remote',
    type: 'Full-time',
    description: 'Optimize edge database caching, sub-15ms PostgreSQL queries, and automated Core Web Vitals telemetry.',
  },
]

export default function CareersPage() {
  return (
    <div className="py-8 sm:py-16 space-y-24 md:space-y-32">
      <BreadcrumbsJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'Careers', url: '/careers' },
        ]}
      />

      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl space-y-6">
          <div className="flex items-center gap-2 text-base text-[#C8FF00] font-mono">
            <span className="w-2 h-2 rounded-full bg-[#C8FF00] animate-pulse" />
            <span>High Autonomy · High Standards · Bengaluru Studio</span>
          </div>

          <h1 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-[64px] tracking-tight text-[#F4F1EA] leading-[1.04] text-balance">
            Build High-Scale Systems with Colver.
          </h1>

          <p className="text-base sm:text-xl text-[#BFC3C9] leading-relaxed max-w-3xl">
            We keep our studio intentionally compact, high-trust, and dedicated to exceptional engineering craftsmanship, sub-second performance, and clean architectural design.
          </p>
        </div>
      </section>

      {/* Engineering Culture: Swiss Editorial Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {perks.map((p, idx) => (
            <div
              key={p.title}
              className={`p-8 rounded-[2px] transition-all duration-200 ${
                idx % 2 === 0 ? 'bg-[#101010]' : 'bg-[#0e0e0e]'
              }`}
            >
              <h2 className="font-display text-xl sm:text-2xl font-bold text-[#F4F1EA]">
                {p.title}
              </h2>
              <p className="mt-3 text-base text-[#BFC3C9] leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Open Roles: Editorial List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="pb-4">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#F4F1EA] tracking-tight">
            Open Engineering Roles.
          </h2>
          <p className="text-base text-[#BFC3C9] mt-2">
            Direct ownership and impact on mission-critical client platforms.
          </p>
        </div>

        <div className="space-y-4">
          {openRoles.map((role) => (
            <div
              key={role.title}
              className="p-6 sm:p-8 rounded-[2px] bg-[#101010] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 transition-all duration-200 hover:bg-[#141414]"
            >
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-3 text-sm text-[#8E929A]">
                  <span className="text-[#C8FF00] font-semibold">{role.team}</span>
                  <span>·</span>
                  <span>{role.location}</span>
                  <span>·</span>
                  <span>{role.type}</span>
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-[#F4F1EA]">
                  {role.title}
                </h3>
                <p className="text-base text-[#BFC3C9] leading-relaxed max-w-2xl">
                  {role.description}
                </p>
              </div>

              <div className="shrink-0">
                <Link href={`/contact?subject=${encodeURIComponent(`Application: ${role.title}`)}`}>
                  <button
                    type="button"
                    className="h-11 px-6 rounded-[2px] bg-[#C8FF00] hover:bg-[#b8ea00] text-black font-semibold text-base flex items-center gap-2 transition-all cursor-pointer"
                  >
                    <span>Apply for Role</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* General Application Callout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-14 bg-[#121212] rounded-[2px] flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="max-w-2xl space-y-3">
            <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight text-[#F4F1EA] leading-tight">
              Don&apos;t see an exact match?
            </h2>
            <p className="text-base sm:text-lg text-[#BFC3C9] leading-relaxed">
              If you are an exceptional systems engineer or designer passionate about sub-second web platforms, send your GitHub or portfolio directly to our engineering partners.
            </p>
          </div>
          <div className="shrink-0">
            <a href="mailto:careers@colver.in?subject=Engineering%20Application">
              <button
                type="button"
                className="h-12 px-7 rounded-[2px] bg-[#181818] hover:bg-[#222222] text-[#F4F1EA] font-semibold text-base tracking-wide flex items-center justify-center gap-2.5 transition-all cursor-pointer"
              >
                <span>Email Engineering Studio</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
