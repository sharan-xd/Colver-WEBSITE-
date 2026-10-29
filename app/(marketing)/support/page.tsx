import React from 'react'
import Link from 'next/link'
import { LifeBuoy, MessageSquare, Mail, Terminal, ArrowRight, CheckCircle2, Clock } from 'lucide-react'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'

export const metadata = {
  title: 'Support Hub | Colver',
  description: 'Technical support, ticketing, community discord, and SLA incident reporting for Colver',
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
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto px-4">
        <Badge variant="info" dot className="mb-4">
          Assistance & Reliability
        </Badge>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
          Colver Support Hub
        </h1>
        <p className="text-base sm:text-lg text-muted leading-relaxed">
          Get direct help from the engineers who built the system. We resolve issues with speed, clarity, and precision.
        </p>

        {/* Status Pill */}
        <div className="mt-6 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border-border text-xs">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-semibold text-foreground">All Core Edge Services Operational</span>
        </div>
      </div>

      {/* Channels Grid */}
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-5">
          {channels.map((ch) => {
            const Icon = ch.icon
            return (
              <div
                key={ch.title}
                className="p-6 sm:p-7 rounded-3xl glass-card border border-border/60 hover:border-primary/40 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-surface border border-border text-muted">
                      {ch.badge}
                    </span>
                  </div>

                  <h2 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                    {ch.title}
                  </h2>

                  <p className="text-xs sm:text-sm text-muted leading-relaxed">
                    {ch.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-border/40">
                  <Link href={ch.href} className="block w-full">
                    <Button variant="secondary" size="sm" className="w-full glass-panel" iconRight={<ArrowRight className="w-3.5 h-3.5" />}>
                      {ch.cta}
                    </Button>
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Incident Protocol */}
      <div className="max-w-4xl mx-auto px-4">
        <div className="p-8 rounded-3xl glass-panel border border-border text-center space-y-3">
          <h3 className="text-xl font-bold text-foreground">Emergency Production Incidents</h3>
          <p className="text-xs sm:text-sm text-muted max-w-xl mx-auto leading-relaxed">
            If you are experiencing critical downtime on an active client deployment, email{' '}
            <a href="mailto:info@colver.in?subject=URGENT:%20Production%20Incident" className="text-primary font-semibold hover:underline">
              info@colver.in
            </a>{' '}
            with &ldquo;URGENT&rdquo; in the subject line for automatic engineer paging.
          </p>
        </div>
      </div>
    </div>
  )
}
