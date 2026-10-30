import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from '@/components/ui/Icons'
import { BreadcrumbsJsonLd } from '@/components/seo/JsonLd'
import ColverLogo from '@/components/ui/ColverLogo'

export const metadata: Metadata = {
  title: 'System Changelog & Architecture Releases | Colver',
  description:
    'Milestones, security updates, and architectural release notes for the Colver digital systems platform and engineering client deployments.',
  alternates: {
    canonical: 'https://colver.in/changelog',
  },
  openGraph: {
    title: 'System Changelog & Architecture Releases | Colver',
    description:
      'Milestones, security updates, and architectural release notes for Colver systems.',
    url: 'https://colver.in/changelog',
    siteName: 'Colver',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Colver System Changelog',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'System Changelog & Architecture Releases | Colver',
    description:
      'Continuous delivery milestones and security updates for Colver systems.',
    images: ['/og-image.png'],
  },
}

interface ReleaseEntry {
  version: string
  date: string
  tag: string
  title: string
  summary: string
  highlights: string[]
}

const releases: ReleaseEntry[] = [
  {
    version: 'v2.1',
    date: 'October 2026',
    tag: 'Identity & Brand Engine',
    title: 'Official Vector Emblem, Multi-DPI Favicons, and Social Graph Architecture',
    summary:
      'Incorporated the official Colver circular checkmark vector identity into header, footer, mobile drawers, and multi-format favicons (.svg, .ico, apple-touch-icon, and 1200x630 OpenGraph cards).',
    highlights: [
      'Crisp mathematical SVG vector representation with scalable currentColor inheritance.',
      '1200x630 branded OpenGraph preview cards for social discovery across X, LinkedIn, and messaging platforms.',
      'Full-spectrum favicons supporting modern SVG browsers, Apple Touch icons, and legacy fallback sizes.',
      '100% crawlable page titles, descriptions, and semantic heading structure audits.',
    ],
  },
  {
    version: 'v2.0',
    date: 'October 2026',
    tag: 'Interactive WebGL & AEO/GEO',
    title: 'Neural WebThreads Background, AEO Schema Matrix, and Generative Engine Optimization',
    summary:
      'Upgraded the opening hero environment to React Bits WebThreads WebGL2 architecture while deploying structured FAQ schemas and the /llms.txt standard.',
    highlights: [
      'Interactive WebThreads WebGL2 background with reduced-motion fallbacks and fluid cursor responsiveness.',
      'Google AI Overviews & Bing Copilot Answer Engine Optimization (AEO) FAQPage JSON-LD integration.',
      'Standardized /llms.txt file and route handler for AI search retrieval (Perplexity, SearchGPT, Claude).',
      'Clean removal of legacy monolith 3D badges in favor of open brutalist Swiss typography.',
    ],
  },
  {
    version: 'v1.4',
    date: 'September 2026',
    tag: 'Security & Lead Rails',
    title: 'Sanitized Customer Intake Engine, Multi-Provider Mailer, and Rate Limiting',
    summary:
      'Engineered a zero-leakage customer inquiry API backed by HTML sanitization, carriage-return stripping, honeypot traps, and multi-transport delivery (Resend, SMTP, Webhooks).',
    highlights: [
      'HTML entity escaping (escapeHtml) and newline neutralization (sanitizeHeaderValue) against XSS and SMTP injection.',
      'Multi-transport dispatch supporting Resend REST API, authenticated SMTP, and instant Slack/Discord Webhooks.',
      'Invisible honeypot protection diverting automated spam bots with zero user friction.',
      'Sliding-window IP rate limiting (5 req/min) preventing denial-of-service attempts.',
    ],
  },
  {
    version: 'v1.0',
    date: 'August 2026',
    tag: 'Production Core',
    title: 'Next.js 16 App Router Production Deployment with Strict CSP and Swiss Layout',
    summary:
      'Initial public release of the Colver systems studio architecture, showcasing high-concurrency web platforms, transaction rails, and sub-100ms response targets.',
    highlights: [
      'Zero-card digital brutalist design language with electric lime (#C8FF00) accents.',
      'PostgreSQL, Redis, and ClickHouse architectural blueprints for client enterprise systems.',
      'Automated CI/CD verification pipelines and TypeScript strict mode across all modules.',
    ],
  },
]

export default function ChangelogPage() {
  return (
    <>
      <BreadcrumbsJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'Changelog', url: '/changelog' },
        ]}
      />

      <div className="min-h-screen bg-[#080808] text-[#F4F1EA] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-16">
          {/* Header */}
          <div className="space-y-4 border-b border-white/10 pb-10">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#C8FF00]">
              <ColverLogo variant="emblem" className="h-3.5 w-auto text-[#C8FF00]" ariaLabel="Colver" />
              <span>System Release Ledger</span>
            </div>
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#F4F1EA]">
              Architectural Changelog
            </h1>
            <p className="text-base sm:text-lg text-[#BFC3C9] max-w-2xl leading-relaxed">
              Chronological log of system enhancements, security fortifications, design token updates, and production runtime improvements.
            </p>
          </div>

          {/* Release Timeline */}
          <div className="space-y-12">
            {releases.map((rel) => (
              <article
                key={rel.version}
                className="relative pl-6 sm:pl-8 border-l-2 border-white/15 space-y-4 transition-colors hover:border-[#C8FF00]"
              >
                {/* Release Indicator Dot */}
                <span className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-[#080808] border-2 border-[#C8FF00]" />

                {/* Meta */}
                <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
                  <span className="px-2 py-0.5 rounded-[2px] bg-[#C8FF00] text-black font-bold">
                    {rel.version}
                  </span>
                  <span className="text-[#8E929A]">{rel.date}</span>
                  <span className="text-[#8E929A]">·</span>
                  <span className="text-[#BFC3C9] uppercase tracking-wider">{rel.tag}</span>
                </div>

                {/* Title */}
                <h2 className="font-display font-bold text-xl sm:text-2xl text-[#F4F1EA]">
                  {rel.title}
                </h2>

                {/* Summary */}
                <p className="text-sm sm:text-base text-[#BFC3C9] leading-relaxed max-w-3xl">
                  {rel.summary}
                </p>

                {/* Highlights */}
                <ul className="space-y-2 pt-2">
                  {rel.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#8E929A]">
                      <span className="text-[#C8FF00] font-mono select-none">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          {/* Closing Ingestion CTA */}
          <div className="pt-12 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <span className="text-xs font-mono uppercase text-[#8E929A] block">Stay Informed</span>
              <span className="text-sm text-[#F4F1EA] font-semibold">Subscribing to system releases &amp; architectural blueprints?</span>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#C8FF00] hover:bg-[#b8ea00] text-black text-sm font-semibold rounded-[2px] transition-colors"
            >
              <span>Connect with an Architect</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
