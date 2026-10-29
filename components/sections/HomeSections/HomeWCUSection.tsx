'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Section, { FadeInView, StaggerContainer, StaggerItem } from '@/components/Section'
import { Zap, Cpu, Sparkles, ShieldCheck, MessageSquareCode, Check } from 'lucide-react'

const valuePoints = [
  {
    title: 'Performance-First Engineering',
    desc: 'Sub-second initial loads, zero layout thrashing, and GPU-optimized micro-interactions built into every view.',
    icon: Zap,
    metric: '<100ms INP',
  },
  {
    title: 'Clean, Maintainable Architecture',
    desc: 'TypeScript-first modular codebases designed for effortless handover, strict typing, and multi-year maintainability.',
    icon: Cpu,
    metric: '100% Type-Safe',
  },
  {
    title: 'Technical SEO & Edge Delivery',
    desc: 'Structured JSON-LD schema, dynamic open graph generation, and global CDN edge routing for organic discovery.',
    icon: Sparkles,
    metric: '100 Lighthouse',
  },
  {
    title: 'Enterprise Security by Default',
    desc: 'Hardened HTTP headers, strict Content Security Policies, rate limiting, and automated dependency protection.',
    icon: ShieldCheck,
    metric: 'A+ Security Score',
  },
  {
    title: 'Radical Delivery Transparency',
    desc: 'Direct engineering Slack/Discord channels, real-time preview deployments, and continuous progress milestones.',
    icon: MessageSquareCode,
    metric: 'Daily Previews',
  },
]

export default function HomeWhyChooseSection() {
  return (
    <Section padding="medium">
      {/* Header */}
      <div className="text-center mb-14">
        <FadeInView delay={0.1}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-border text-xs font-semibold text-primary uppercase tracking-wider mb-4">
            Advantage
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Built like an enterprise product,
            <span className="text-gradient block mt-1">not an agency handoff</span>
          </h2>
        </FadeInView>

        <FadeInView delay={0.2}>
          <p className="text-sm sm:text-base md:text-lg text-muted max-w-2xl mx-auto leading-relaxed">
            We architect systems designed to scale with your business — technically, operationally, and commercially.
          </p>
        </FadeInView>
      </div>

      {/* Feature cards grid */}
      <div className="max-w-7xl mx-auto">
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-5" staggerDelay={0.08}>
          {valuePoints.map((item) => {
            const Icon = item.icon
            return (
              <StaggerItem key={item.title}>
                <motion.div
                  className="
                    p-6 sm:p-7 rounded-2xl glass-card border border-border/60
                    hover:border-primary/40 transition-all duration-200 h-full flex flex-col justify-between
                  "
                  whileHover={{ y: -4 }}
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded-md bg-surface border border-border text-emerald-400">
                        {item.metric}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold mb-2.5 tracking-tight text-foreground">
                      {item.title}
                    </h3>

                    <p className="text-muted leading-relaxed text-xs sm:text-sm">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-border/40 flex items-center gap-2 text-xs text-muted">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Included in core specification</span>
                  </div>
                </motion.div>
              </StaggerItem>
            )
          })}

          {/* Callout Card */}
          <StaggerItem>
            <div className="p-6 sm:p-7 rounded-2xl glass-panel border border-primary/30 h-full flex flex-col justify-between bg-gradient-to-br from-primary/10 via-accent/5 to-transparent">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-primary font-bold">
                  Quality Philosophy
                </span>
                <h3 className="text-xl font-bold mt-2 mb-3 text-foreground">
                  Zero compromise on engineering standards.
                </h3>
                <p className="text-xs sm:text-sm text-muted leading-relaxed">
                  We don&apos;t cut corners with bloated templates. Everything is custom-engineered with clean Next.js App Router architectures and measured against real web vitals.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-border/40 flex items-center justify-between text-xs font-semibold text-primary">
                <span>Verified Standards</span>
                <span className="text-muted font-mono">SOC2 / WCAG AA</span>
              </div>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </Section>
  )
}
