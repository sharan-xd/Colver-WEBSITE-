'use client'

import React from 'react'
import { motion } from 'framer-motion'
import {
  Zap,
  Cpu,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
} from '@/components/ui/Icons'

const comparisons = [
  {
    criterion: 'Architecture',
    agency: 'Bloated third-party themes, messy spaghetti scripts, unvalidated inputs',
    colver: 'Custom Next.js App Router, strict TypeScript, modular components',
  },
  {
    criterion: 'Performance',
    agency: 'Sluggish multi-second page loads, heavy layout shifts, unoptimized bundles',
    colver: 'Sub-second edge transitions, minimal DOM thrash, sub-100ms INP',
  },
  {
    criterion: 'Security',
    agency: 'Default permissive headers, hardcoded credentials, unshielded endpoints',
    colver: 'Cloudflare audited, strict Content Security Policy, rate-limited APIs',
  },
  {
    criterion: 'Handoff',
    agency: 'Dumped zip archive with zero documentation or ongoing engineering support',
    colver: 'Full schema documentation, clean Git history, automated test suites',
  },
]

export default function HomeWhyChooseSection() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="max-w-3xl mb-14"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-foreground leading-tight">
            Engineered for longevity.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            We build software designed to scale with your business—technically, operationally, and commercially.
          </p>
        </motion.div>

        {/* Comparative Ledger Table */}
        <motion.div
          className="rounded-xl bg-card overflow-hidden"
          data-ui="audit-telemetry"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-12 p-6 sm:p-8 bg-surface">
            <div className="md:col-span-3 text-sm font-bold text-foreground">
              Engineering Criterion
            </div>
            <div className="md:col-span-4 text-sm font-semibold text-slate-400 mt-2 md:mt-0">
              Typical Agency Delivery
            </div>
            <div className="md:col-span-5 text-sm font-bold text-blue-400 mt-2 md:mt-0">
              Colver Production Engineering
            </div>
          </div>

          <div className="divide-y divide-border/20">
            {comparisons.map((item, idx) => (
              <div
                key={item.criterion}
                className="grid grid-cols-1 md:grid-cols-12 p-6 sm:p-8 gap-3 sm:gap-4 items-start"
              >
                <div className="md:col-span-3 text-base font-bold text-foreground">
                  {item.criterion}
                </div>
                <div className="md:col-span-4 text-sm text-slate-400 leading-relaxed">
                  {item.agency}
                </div>
                <div className="md:col-span-5 text-sm text-slate-100 font-medium leading-relaxed">
                  {item.colver}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Quality Manifesto Callout */}
        <motion.div
          className="mt-12 p-8 rounded-xl bg-surface flex flex-col md:flex-row md:items-center justify-between gap-6"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.15 }}
        >
          <div className="max-w-2xl space-y-2">
            <h3 className="text-xl font-bold text-foreground tracking-tight">
              Zero compromise on engineering standards.
            </h3>
            <p className="text-base text-slate-300 leading-relaxed">
              We do not cut corners with bloated templates. Everything is custom-engineered with clean Next.js App Router architectures and measured against real web performance metrics.
            </p>
          </div>
          <div className="shrink-0 text-sm font-semibold text-white bg-primary px-4 py-2 rounded-md">
            WCAG AA & OWASP Standards
          </div>
        </motion.div>
      </div>
    </section>
  )
}
