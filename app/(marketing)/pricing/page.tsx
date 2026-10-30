import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from '@/components/ui/Icons'
import { BreadcrumbsJsonLd } from '@/components/seo/JsonLd'

export const metadata: Metadata = {
  title: 'Engineering Sprints & SLA Tiers | Colver',
  description:
    'Transparent architecture sprint pricing, production release cadences, and mission-critical engineering SLAs with Colver Systems.',
  alternates: {
    canonical: 'https://colver.in/pricing',
  },
  openGraph: {
    title: 'Engineering Sprints & SLA Tiers | Colver',
    description:
      'Transparent architecture sprint pricing, production release cadences, and dedicated engineering retainers.',
    url: 'https://colver.in/pricing',
    siteName: 'Colver',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Colver Engineering Investment',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Engineering Sprints & SLA Tiers | Colver',
    description:
      'Transparent architecture sprints, release cadences, and engineering SLAs.',
    images: ['/og-image.png'],
  },
}

const tiers = [
  {
    tier: 'Sprint 01',
    name: 'Architecture & Prototype Sprint',
    duration: '2 Weeks Delivery',
    investment: '₹1,80,000',
    headline: 'De-risk your core architecture before committing to full build.',
    description:
      'Ideal for companies scoping a bespoke ERP, high-concurrency web platform, or complex database migration. We audit existing workflows, architect relational schemas, and ship a clickable interactive prototype with API schema contracts.',
    deliverables: [
      'Relational PostgreSQL schema & data dictionary',
      'Clickable Next.js & Tailwind UI prototype',
      'Boundary validation contracts (Zod / TypeScript)',
      'Infrastructure estimate & tech stack selection',
      'Production delivery roadmap & sprint plan',
    ],
    popular: false,
  },
  {
    tier: 'Sprint 02',
    name: 'Production Release Core',
    duration: '6–8 Weeks Delivery',
    investment: '₹4,50,000',
    headline: 'Full-stack production software deployed to zero-downtime edge.',
    description:
      'End-to-end engineering of your custom business system, transactional web app, or automated workflow engine. Built with test-driven development, sub-100ms INP, hardened security headers, and full source code IP transfer.',
    deliverables: [
      'Complete fullstack Next.js 16 production application',
      'Production database with automated daily backups',
      'Indian payment rails (Razorpay / UPI / Stripe)',
      'Minimum 80% automated unit & integration test suites',
      'Hardened CSP, SSL, and rate-limited API routes',
      'Complete Docker containers & CI/CD deployment scripts',
    ],
    popular: true,
  },
  {
    tier: 'Retainer 03',
    name: 'Dedicated Engineering & SLA',
    duration: 'Monthly Partnership',
    investment: '₹1,20,000 / mo',
    headline: 'Continuous feature engineering, performance tuning, and 24/7 SLA.',
    description:
      'For established companies whose operations depend on uninterrupted uptime and continuous iterative enhancements. Includes direct senior architect access, database index tuning, and fast SLA incident response.',
    deliverables: [
      'Continuous sprint delivery (bi-weekly production releases)',
      'Sub-1-hour incident response SLA for critical tickets',
      'Proactive security patching & framework upgrades',
      'Database query optimization as data scale expands',
      'Direct Slack channel with senior systems architect',
      'Zero long-term lock-in: cancel or pause anytime',
    ],
    popular: false,
  },
]

export default function PricingPage() {
  return (
    <div className="py-8 sm:py-16 space-y-24 md:space-y-32">
      <BreadcrumbsJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'Pricing', url: '/pricing' },
        ]}
      />

      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl space-y-6">
          <div className="flex items-center gap-2 text-base text-[#C8FF00] font-mono">
            <span className="w-2 h-2 rounded-full bg-[#C8FF00] animate-pulse" />
            <span>Transparent Investment · 100% IP Transfer · Zero Seat Tax</span>
          </div>

          <h1 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-[64px] tracking-tight text-[#F4F1EA] leading-[1.04] text-balance">
            Predictable Engineering Cadence. Uncompromised Craft.
          </h1>

          <p className="text-base sm:text-xl text-[#BFC3C9] leading-relaxed max-w-3xl">
            We reject hidden agency retainers and recurring platform licensing fees. Every Colver project is structured around clear sprint milestones, guaranteed deliverables, and unminified source code ownership.
          </p>
        </div>
      </section>

      {/* Sprints Matrix: Swiss Editorial Layout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`p-6 sm:p-10 rounded-[2px] transition-all duration-200 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start ${
                tier.popular ? 'bg-[#141414]' : 'bg-[#0e0e0e]'
              }`}
            >
              <div className="lg:col-span-4 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-semibold text-[#C8FF00] block">{tier.tier}</span>
                  <span className="text-sm text-[#8E929A] font-medium block">· {tier.duration}</span>
                </div>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#F4F1EA] tracking-tight">
                  {tier.name}
                </h2>
                <div className="font-display text-3xl sm:text-4xl font-extrabold text-[#F4F1EA]">
                  {tier.investment}
                </div>
                <p className="text-base text-[#F4F1EA] font-medium leading-relaxed">
                  {tier.headline}
                </p>
                <p className="text-base text-[#BFC3C9] leading-relaxed">
                  {tier.description}
                </p>
                <div className="pt-2">
                  <Link href={`/contact?sprint=${encodeURIComponent(tier.name)}`}>
                    <button
                      type="button"
                      className={`h-12 px-7 rounded-[2px] font-semibold text-base tracking-wide flex items-center justify-center gap-2.5 transition-all cursor-pointer ${
                        tier.popular
                          ? 'bg-[#C8FF00] hover:bg-[#b8ea00] text-black'
                          : 'bg-[#181818] hover:bg-[#222222] text-[#F4F1EA]'
                      }`}
                    >
                      <span>Book Sprint Slot</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-8 p-6 bg-[#080808] rounded-[2px] space-y-4">
                <span className="text-sm font-semibold text-[#8E929A] uppercase tracking-wide block">
                  Included Engineering Deliverables
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {tier.deliverables.map((item) => (
                    <div key={item} className="flex items-start gap-2.5 text-base text-[#BFC3C9]">
                      <span className="text-[#C8FF00] font-bold">+</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Comparative Guarantees */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#101010] p-8 sm:p-14 rounded-[2px] space-y-6">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#F4F1EA] tracking-tight">
            The Colver Commercial Guarantee.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2 text-base">
            <div className="space-y-2 p-5 bg-[#141414] rounded-[2px]">
              <span className="text-lg font-bold text-[#F4F1EA] block">Zero Seat Licenses</span>
              <p className="text-base text-[#BFC3C9] leading-relaxed">
                Add 10 or 10,000 employees to your system without paying extra monthly per-user licensing fees.
              </p>
            </div>
            <div className="space-y-2 p-5 bg-[#141414] rounded-[2px]">
              <span className="text-lg font-bold text-[#F4F1EA] block">100% IP Transfer</span>
              <p className="text-base text-[#BFC3C9] leading-relaxed">
                You own 100% of the code, data schemas, design tokens, and infrastructure configurations forever.
              </p>
            </div>
            <div className="space-y-2 p-5 bg-[#141414] rounded-[2px]">
              <span className="text-lg font-bold text-[#F4F1EA] block">Fixed Milestone Scopes</span>
              <p className="text-base text-[#BFC3C9] leading-relaxed">
                Every sprint has an immutable spec. No runaway surprise invoices or surprise hourly bills.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-14 bg-[#121212] rounded-[2px] flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="max-w-2xl space-y-3">
            <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight text-[#F4F1EA] leading-tight">
              Need custom enterprise scoping?
            </h2>
            <p className="text-base sm:text-lg text-[#BFC3C9] leading-relaxed">
              For complex multi-facility ERPs, multi-region database replication, or high-volume payment routing, our senior architects will conduct a detailed technical discovery.
            </p>
          </div>
          <div className="shrink-0">
            <Link href="/contact">
              <button
                type="button"
                className="h-12 px-7 rounded-[2px] bg-[#C8FF00] hover:bg-[#b8ea00] text-black font-semibold text-base tracking-wide flex items-center justify-center gap-2.5 transition-all cursor-pointer"
              >
                <span>Request Custom Scoping</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
