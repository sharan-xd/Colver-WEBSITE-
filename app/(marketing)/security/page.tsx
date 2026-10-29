import React from 'react'
import Link from 'next/link'
import { ShieldCheck, Lock, Key, Server, FileText, CheckCircle2, ArrowRight } from 'lucide-react'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'

export const metadata = {
  title: 'Security & Trust | Colver',
  description: 'Enterprise security architecture, data protection controls, and vulnerability disclosure for Colver',
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
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto px-4">
        <Badge variant="success" dot className="mb-4">
          Enterprise Security Architecture
        </Badge>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
          Security & Trust Center
        </h1>
        <p className="text-base sm:text-lg text-muted leading-relaxed">
          Security is built into Colver&apos;s architectural foundation. We maintain strict compliance, hardened headers, and transparent disclosure practices.
        </p>
      </div>

      {/* Security Grid */}
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-5">
          {securityPillars.map((pillar) => {
            const Icon = pillar.icon
            return (
              <div key={pillar.title} className="p-7 rounded-3xl glass-card border border-border/60 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    {pillar.status}
                  </span>
                </div>

                <h2 className="text-xl font-bold text-foreground">{pillar.title}</h2>
                <p className="text-xs sm:text-sm text-muted leading-relaxed">{pillar.desc}</p>
              </div>
            )
          })}
        </div>
      </div>

      {/* Vulnerability Disclosure Policy */}
      <div className="max-w-4xl mx-auto px-4">
        <div className="p-8 sm:p-10 rounded-3xl glass-panel border border-border space-y-4 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <h3 className="text-xl font-bold text-foreground">Responsible Vulnerability Disclosure</h3>
            <p className="text-xs sm:text-sm text-muted leading-relaxed">
              If you identify a potential security vulnerability within the Colver codebase or infrastructure, please notify our security response team immediately.
            </p>
          </div>
          <a href="mailto:info@colver.in?subject=Security%20Vulnerability%20Report" className="shrink-0">
            <Button variant="primary" size="md">
              Submit Vulnerability Report
            </Button>
          </a>
        </div>
      </div>
    </div>
  )
}
