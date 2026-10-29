'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
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
      <div className="text-center max-w-3xl mx-auto px-4">
        <Badge variant="purple" dot className="mb-4">
          Company & Positioning
        </Badge>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
          Built to eliminate
          <span className="text-gradient block mt-1">workflow friction</span>
        </h1>
        <p className="text-base sm:text-lg text-muted leading-relaxed">
          Colver exists to help engineering and design teams move from concept to shipped production
          with less noise, fewer fragmented tools, and sustained momentum.
        </p>
      </div>

      {/* Mission & Vision Grid */}
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-7 sm:p-9 rounded-3xl glass-card border border-border/60 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center">
              <Target className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-foreground">Our Mission</h2>
            <p className="text-sm sm:text-base text-muted leading-relaxed">
              To empower modern engineering teams to ship high-polish, scalable web software
              faster — without sacrificing stability, accessibility, or code elegance.
            </p>
          </div>

          <div className="p-7 sm:p-9 rounded-3xl glass-card border border-border/60 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-accent/10 border border-accent/20 text-accent flex items-center justify-center">
              <Eye className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-foreground">Our Vision</h2>
            <p className="text-sm sm:text-base text-muted leading-relaxed">
              A future where software creators spend zero time wrangling fragmented devtools
              and 100% of their creative energy designing meaningful outcomes that delight users.
            </p>
          </div>
        </div>
      </div>

      {/* Why We Built Colver Banner */}
      <div className="max-w-5xl mx-auto px-4">
        <div className="p-8 sm:p-12 rounded-3xl glass-panel border border-border text-center space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-primary font-bold">
            The Philosophy
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">
            Why we built Colver
          </h2>
          <p className="text-sm sm:text-base text-muted max-w-2xl mx-auto leading-relaxed">
            Teams don&apos;t fail because they lack ambition; they stall because their workflows get noisy.
            Context switching between five incompatible SaaS dashboards kills creative flow.
            Colver unifies architectural foundations, AI-driven automation, and live previews into a calm, deterministic workspace.
          </p>
        </div>
      </div>

      {/* Core Values Grid */}
      <div className="max-w-5xl mx-auto px-4 space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">
            What we value
          </h2>
          <p className="text-sm text-muted">
            These principles guide every architectural decision and product release.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {values.map((v) => {
            const Icon = v.icon
            return (
              <div
                key={v.title}
                className="p-6 sm:p-7 rounded-2xl glass-card border border-border/60 space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-surface border border-border flex items-center justify-center text-primary">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-foreground">{v.title}</h3>
                <p className="text-xs sm:text-sm text-muted leading-relaxed">{v.desc}</p>
              </div>
            )
          })}
        </div>
      </div>

      {/* Trust & Enterprise Badges */}
      <div className="max-w-5xl mx-auto px-4 pt-8 border-t border-border/40 text-center space-y-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-muted">
          Engineered to standards trusted across industry leaders
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-60">
          {['Linear Standards', 'Vercel Edge', 'Stripe Payments', 'TypeScript', 'Tailwind 3.4'].map(
            (item) => (
              <span key={item} className="text-sm sm:text-base font-bold text-foreground font-mono">
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
            <Button size="lg" variant="secondary" className="glass-panel">
              Contact Engineering
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
