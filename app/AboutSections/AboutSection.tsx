'use client'

import React from 'react'
import Link from 'next/link'
import { 
  Target, 
  Eye, 
  Sparkles, 
  Zap, 
  Users, 
  ShieldCheck, 
  ArrowRight, 
  Award,
  Layers
} from 'lucide-react'
import Section, { FadeInView, StaggerContainer, StaggerItem } from '@/components/Section'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'

const values = [
  {
    title: 'Clarity over complexity',
    desc: 'We aggressively eliminate technical noise, reduce tooling sprawl, and make the next architectural step obvious.',
    icon: Sparkles,
  },
  {
    title: 'Build fast, ship confidently',
    desc: 'Velocity matters, but rock-solid reliability, type safety, and user trust matter even more.',
    icon: Zap,
  },
  {
    title: 'Collaboration by default',
    desc: 'Great digital products are forged together. We design systems for cross-functional teams, not isolated silos.',
    icon: Users,
  },
  {
    title: 'Craft is a core feature',
    desc: 'Performance metrics, micro-interaction feedback, and thoughtful accessibility are non-negotiable details.',
    icon: Award,
  },
]

export default function AboutSection() {
  return (
    <div className="py-6 sm:py-10 space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto px-4 pt-4 sm:pt-8">
        <h1 className="text-3xl sm:text-5xl lg:text-[48px] font-bold tracking-tight mb-4 leading-tight text-foreground">
          Built to Eliminate Workflow Friction
        </h1>
        <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
          Colver exists to help ambitious engineering and operations teams move from concept to shipped production
          with less noise, zero tooling sprawl, and sustained operational velocity.
        </p>
      </div>

      {/* Mission & vision */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-8 rounded-xl bg-card space-y-4">
            <div className="flex items-center gap-3 text-blue-400">
              <Target className="w-5 h-5" aria-hidden="true" />
              <h2 className="text-xs font-semibold uppercase tracking-[0.16em]">Our mission</h2>
            </div>
            <p className="text-lg sm:text-xl text-foreground leading-relaxed">
              To empower modern engineering teams to ship high-polish, scalable web software faster — without sacrificing stability, accessibility, or code elegance.
            </p>
          </div>

          <div className="p-8 rounded-xl bg-card space-y-4">
            <div className="flex items-center gap-3 text-blue-400">
              <Eye className="w-5 h-5" aria-hidden="true" />
              <h2 className="text-xs font-semibold uppercase tracking-[0.16em]">Our vision</h2>
            </div>
            <p className="text-lg sm:text-xl text-foreground leading-relaxed">
              A future where software creators spend zero time wrangling fragmented devtools and 100% of their creative energy designing meaningful outcomes that delight users.
            </p>
          </div>
        </div>
      </div>

      {/* Why we built Colver */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-xl bg-surface space-y-3">
          <span className="text-[13px] uppercase tracking-[0.16em] text-blue-400 font-semibold block">The philosophy</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Why we built Colver</h2>
          <p className="text-base text-slate-300 max-w-3xl leading-relaxed">
            Teams don&apos;t fail because they lack ambition; they stall because their workflows get noisy.
            Context switching between five incompatible SaaS dashboards kills creative flow.
            Colver unifies architectural foundations, AI-driven automation, and live previews into a calm, deterministic workspace.
          </p>
        </div>
      </div>

      {/* Core Values Grid */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-4xl font-bold text-foreground">
            What We Value
          </h2>
          <p className="text-base text-slate-300">
            These principles guide every architectural decision and product release.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((v) => {
            const Icon = v.icon
            return (
              <div key={v.title} className="p-6 rounded-xl bg-card space-y-3">
                <div className="w-9 h-9 rounded-lg bg-surface flex items-center justify-center text-blue-400">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-foreground">
                  {v.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {v.desc}
                </p>
              </div>
            )
          })}
        </div>
      </div>

      {/* Trust & Enterprise Badges */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 text-center space-y-6">
        <p className="text-[13px] font-semibold uppercase tracking-wider text-slate-400">
          Engineered to standards trusted across industry leaders
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
          {['Linear Standards', 'Vercel Edge', 'Stripe Payments', 'TypeScript', 'Tailwind 3.4'].map(
            (item) => (
              <span key={item} className="text-sm sm:text-base font-bold text-slate-200">
                {item}
              </span>
            )
          )}
        </div>

        {/* CTA Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link href="/features" className="w-full sm:w-auto">
            <Button size="lg" variant="primary" iconRight={<ArrowRight className="w-4 h-4" />}>
              Explore Features
            </Button>
          </Link>
          <Link href="/contact" className="w-full sm:w-auto">
            <Button size="lg" variant="secondary">
              Contact Engineering
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
