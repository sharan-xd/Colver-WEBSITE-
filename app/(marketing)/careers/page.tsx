import React from 'react'
import Link from 'next/link'
import { Briefcase, ArrowRight, CheckCircle2, Globe, Heart, Zap, Shield } from 'lucide-react'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'

export const metadata = {
  title: 'Careers | Colver',
  description: 'Join the Colver team building next-generation web architectures and AI platforms',
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
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto px-4">
        <Badge variant="purple" dot className="mb-4">
          Join the Core Team
        </Badge>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
          Build the future of
          <span className="text-gradient block mt-1">digital craftsmanship</span>
        </h1>
        <p className="text-base sm:text-lg text-muted leading-relaxed">
          We keep our team intentionally small, high-trust, and focused on exceptional engineering standards.
        </p>
      </div>

      {/* Perks Grid */}
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid sm:grid-cols-2 gap-5">
          {perks.map((p) => {
            const Icon = p.icon
            return (
              <div key={p.title} className="p-6 sm:p-7 rounded-2xl glass-card border border-border/60 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-foreground">{p.title}</h3>
                <p className="text-xs sm:text-sm text-muted leading-relaxed">{p.desc}</p>
              </div>
            )
          })}
        </div>
      </div>

      {/* Open Roles List */}
      <div className="max-w-5xl mx-auto px-4 space-y-6">
        <div className="flex items-center justify-between pb-3 border-b border-border/50">
          <div>
            <h2 className="text-2xl font-bold text-foreground">Open Engineering Roles</h2>
            <p className="text-xs sm:text-sm text-muted">Direct impact on high-scale production systems</p>
          </div>
          <Badge variant="success" dot>Active Hiring</Badge>
        </div>

        <div className="grid gap-4">
          {openRoles.map((role) => (
            <div
              key={role.title}
              className="p-6 sm:p-7 rounded-2xl glass-panel border border-border/70 hover:border-primary/40 flex flex-col sm:flex-row sm:items-center justify-between gap-5 transition-all group"
            >
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-surface border border-border text-primary">
                    {role.team}
                  </span>
                  <span className="text-xs text-muted font-mono">{role.location}</span>
                  <span className="text-muted/40">•</span>
                  <span className="text-xs text-muted font-mono">{role.type}</span>
                </div>
                <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                  {role.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted leading-relaxed max-w-2xl">
                  {role.description}
                </p>
              </div>

              <div className="shrink-0">
                <Link href={`/contact?subject=${encodeURIComponent(`Application: ${role.title}`)}`}>
                  <Button variant="primary" size="sm" iconRight={<ArrowRight className="w-3.5 h-3.5" />}>
                    Apply Now
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Talent Network Callout */}
      <div className="max-w-3xl mx-auto px-4 text-center">
        <div className="p-8 rounded-3xl glass-panel border border-border space-y-4">
          <h3 className="text-lg font-bold text-foreground">Don&apos;t see an exact match?</h3>
          <p className="text-xs sm:text-sm text-muted leading-relaxed max-w-md mx-auto">
            If you are an exceptional engineer or designer passionate about high-performance web systems, send your GitHub or portfolio to us directly.
          </p>
          <a
            href="mailto:info@colver.in?subject=General%20Engineering%20Application"
            className="inline-block"
          >
            <Button variant="secondary" size="md" className="glass-panel">
              Email Engineering Team
            </Button>
          </a>
        </div>
      </div>
    </div>
  )
}
