import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { ShieldCheck, Lock, Key, Server, FileText, CheckCircle2, ArrowRight } from 'lucide-react'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import { BreadcrumbsJsonLd } from '@/components/seo/JsonLd'

export const metadata: Metadata = {
  title: 'Security, Compliance & Trust Center | Colver',
  description:
    'Review Colver’s enterprise security architecture, Content Security Policy, HSTS enforcement, dependency vulnerability management, and responsible disclosure.',
  alternates: {
    canonical: 'https://colver.in/security',
  },
  openGraph: {
    title: 'Security, Compliance & Trust Center | Colver',
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
    title: 'Security, Compliance & Trust Center | Colver',
    description:
      'Hardened HTTP edge security, strict CSP, and automated vulnerability management.',
    images: ['/og-image.jpg'],
  },
  keywords: [
    'Colver security architecture',
    'enterprise web security',
    'Content Security Policy Next.js',
    'responsible disclosure policy',
    'HSTS preload security',
  ],
}

const securityPillars = [
  {
    title: 'Hardened HTTP Edge Security',
    desc: 'Strict Content-Security-Policy, HSTS (max-age 31536000 with subdomains and preload), Permissions-Policy, and X-Frame-Options DENY.',
    icon: ShieldCheck,
    status: 'Enforced',
  },
  {
    title: 'Minimal Attack Surface',
    desc: 'Static prerendering across marketing routes eliminates vulnerable runtime code evaluation and server-side injection vectors.',
    icon: Lock,
    status: 'Hardened',
  },
  {
    title: 'Encryption in Transit & Rest',
    desc: 'All network transmissions utilize TLS 1.3 with Perfect Forward Secrecy. Automated certificate rotation prevents MITM tampering.',
    icon: Key,
    status: 'TLS 1.3 Active',
  },
  {
    title: 'Continuous Dependency Auditing',
    desc: 'Automated vulnerability scanning across npm dependencies with strict semver locking and zero known CVE exposures.',
    icon: Server,
    status: 'Automated Scans',
  },
]

export default function SecurityPage() {
  return (
    <div className="py-6 sm:py-10 space-y-12">
      <BreadcrumbsJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'Security', url: '/security' },
        ]}
      />
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto px-4 pt-4 sm:pt-8">
        <h1 className="text-3xl sm:text-5xl lg:text-[48px] font-bold tracking-tight mb-4 leading-tight text-foreground">
          Security, Compliance & Trust Center
        </h1>
        <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
          Security is built into Colver&apos;s architectural foundation. We maintain strict compliance, hardened edge headers, and transparent disclosure practices.
        </p>
      </div>

      {/* Security controls */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {securityPillars.map((pillar) => {
            const Icon = pillar.icon
            return (
              <article key={pillar.title} className="p-6 sm:p-8 rounded-xl bg-card space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-lg bg-surface flex items-center justify-center text-emerald-400">
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <span className="text-[13px] font-semibold text-emerald-400 bg-surface px-3 py-1 rounded-md">
                    {pillar.status}
                  </span>
                </div>
                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-foreground">
                    {pillar.title}
                  </h2>
                  <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </article>
            )
          })}
        </div>
      </div>

      {/* Vulnerability Disclosure Policy */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-xl bg-surface flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <h3 className="text-xl font-bold text-foreground">Responsible Vulnerability Disclosure</h3>
            <p className="text-base text-slate-300 leading-relaxed">
              If you identify a potential security vulnerability within the Colver codebase or infrastructure, please notify our security response team immediately.
            </p>
          </div>
          <a href="mailto:info@colver.in?subject=Security%20Vulnerability%20Report" className="shrink-0">
            <Button variant="primary" size="lg">
              Submit Vulnerability Report
            </Button>
          </a>
        </div>
      </div>
    </div>
  )
}
