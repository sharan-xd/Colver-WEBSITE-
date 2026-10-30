import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { BreadcrumbsJsonLd } from '@/components/seo/JsonLd'
import { ArrowRight } from '@/components/ui/Icons'

export const metadata: Metadata = {
  title: 'Security Architecture & Trust Specifications | Colver',
  description:
    'Review Colver’s enterprise security architecture, Content Security Policy, HSTS enforcement, dependency vulnerability management, and responsible disclosure.',
  alternates: {
    canonical: 'https://colver.in/security',
  },
  openGraph: {
    title: 'Security Architecture & Trust Specifications | Colver',
    description:
      'Enterprise security architecture, hardened HTTP edge controls, and responsible disclosure policies.',
    url: 'https://colver.in/security',
    siteName: 'Colver',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Colver Security & Trust',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Security Architecture & Trust Specifications | Colver',
    description:
      'Hardened HTTP edge security, strict CSP, and automated vulnerability management.',
    images: ['/og-image.jpg'],
  },
}

const securityPillars = [
  {
    title: 'Hardened HTTP Edge Security',
    desc: 'Strict Content-Security-Policy, HSTS (max-age 31536000 with subdomains and preload), Permissions-Policy, and X-Frame-Options DENY.',
    status: 'Enforced',
  },
  {
    title: 'Minimal Attack Surface',
    desc: 'Static prerendering across marketing routes eliminates vulnerable runtime code evaluation and server-side injection vectors.',
    status: 'Hardened',
  },
  {
    title: 'Encryption in Transit & Rest',
    desc: 'All network transmissions utilize TLS 1.3 with Perfect Forward Secrecy. Automated certificate rotation prevents MITM tampering.',
    status: 'TLS 1.3 Active',
  },
  {
    title: 'Continuous Dependency Auditing',
    desc: 'Automated vulnerability scanning across npm dependencies with strict semver locking and zero known CVE exposures.',
    status: 'Automated Scans',
  },
]

export default function SecurityPage() {
  return (
    <div className="py-8 sm:py-16 space-y-20 md:space-y-28">
      <BreadcrumbsJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'Security', url: '/security' },
        ]}
      />

      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl space-y-6">
          <div className="flex items-center gap-2 text-base text-[#C8FF00] font-mono">
            <span className="w-2 h-2 rounded-full bg-[#C8FF00] animate-pulse" />
            <span>A+ Security Rating · Zero CVE Exposure</span>
          </div>

          <h1 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-[64px] tracking-tight text-[#F4F1EA] leading-[1.04] text-balance">
            Security, Compliance & Trust Architecture.
          </h1>

          <p className="text-base sm:text-xl text-[#BFC3C9] leading-relaxed max-w-3xl">
            Security is built into Colver&apos;s architectural foundation. We maintain strict compliance, hardened edge headers, and transparent responsible disclosure practices.
          </p>
        </div>
      </section>

      {/* Security Pillars: Swiss Editorial Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {securityPillars.map((pillar) => (
            <article key={pillar.title} className="p-8 rounded-[2px] bg-[#101010] space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-mono font-semibold text-[#C8FF00] bg-[#181818] px-3 py-1 rounded-[2px]">
                  {pillar.status}
                </span>
              </div>
              <div>
                <h2 className="font-display text-xl sm:text-2xl font-bold text-[#F4F1EA]">
                  {pillar.title}
                </h2>
                <p className="mt-3 text-base text-[#BFC3C9] leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Vulnerability Disclosure Policy */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-14 bg-[#121212] rounded-[2px] flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-[#F4F1EA] tracking-tight">
              Responsible Vulnerability Disclosure
            </h2>
            <p className="text-base sm:text-lg text-[#BFC3C9] leading-relaxed">
              If you identify a potential security vulnerability within the Colver codebase or infrastructure, please notify our senior security response team immediately.
            </p>
          </div>
          <div className="shrink-0">
            <a href="mailto:security@colver.in?subject=Security%20Vulnerability%20Report">
              <button
                type="button"
                className="h-12 px-7 rounded-[2px] bg-[#C8FF00] hover:bg-[#b8ea00] text-black font-semibold text-base tracking-wide flex items-center justify-center gap-2.5 transition-all cursor-pointer"
              >
                <span>Submit Vulnerability Report</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
