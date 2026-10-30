'use client'

import React from 'react'
import { motion } from 'framer-motion'
import {
  CheckCircle2,
} from '@/components/ui/Icons'

const milestones = [
  {
    phase: 'Phase 1 · Architecture Audit',
    title: 'Discovery & Blueprint',
    detail: 'We audit workflows, quantify data throughput, and produce formal architecture specifications.',
    output: 'System Architecture Specification',
  },
  {
    phase: 'Phase 2 · Schema Design',
    title: 'Modeling & Prototype',
    detail: 'We define database schemas, validation boundaries, and test interactive interface prototypes.',
    output: 'Interactive UI Prototype & Schema Contracts',
  },
  {
    phase: 'Phase 3 · Test-Driven Build',
    title: 'Iterative Engineering',
    detail: 'We build modular, strongly-typed code backed by test-driven development and strict review gates.',
    output: 'Production Codebase with 80%+ Test Coverage',
  },
  {
    phase: 'Phase 4 · Edge Telemetry',
    title: 'Deployment & Launch',
    detail: 'We configure hardened Content Security Policies, rate limiting, and real-time monitoring.',
    output: 'Production Launch & Telemetry Dashboard',
  },
]

export default function HomeProcessSection() {
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
            Disciplined delivery. Predictable milestones.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Eliminate guesswork. Our structured software delivery cadence pairs rapid prototyping with enterprise-grade software craftsmanship.
          </p>
        </motion.div>

        {/* Narrative Flow (Continuous Architectural Ledger instead of generic icon cards) */}
        <div className="rounded-xl bg-card p-6 sm:p-10 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {milestones.map((item, idx) => (
              <div key={item.phase} className="space-y-3">
                <span className="text-[13px] font-semibold text-blue-400 block">
                  {item.phase}
                </span>
                <h3 className="text-lg font-bold text-foreground tracking-tight">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {item.detail}
                </p>
                <div className="pt-2">
                  <span className="text-[13px] text-slate-300 block font-medium">
                    Artifact: {item.output}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* CI/CD & Delivery Telemetry Ledger Interface Fragment */}
          <div
            className="pt-6 border-t border-border/40 space-y-4"
            data-ui="delivery-telemetry"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <span className="text-sm font-semibold text-foreground">
                  Continuous Delivery & Audit Gate
                </span>
              </div>
              <span className="text-[13px] text-slate-300 font-medium">
                Automated Verification: All 21 Routes Green
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-lg bg-surface">
                <span className="text-[13px] text-slate-400 block">Type Safety</span>
                <p className="text-base font-bold text-foreground mt-0.5">TypeScript 5 Strict</p>
                <span className="text-[13px] text-emerald-400 font-medium">0 Type Errors</span>
              </div>
              <div className="p-4 rounded-lg bg-surface">
                <span className="text-[13px] text-slate-400 block">Security Audit</span>
                <p className="text-base font-bold text-foreground mt-0.5">Cloudflare Verified</p>
                <span className="text-[13px] text-emerald-400 font-medium">0 Known CVEs</span>
              </div>
              <div className="p-4 rounded-lg bg-surface">
                <span className="text-[13px] text-slate-400 block">Production Build</span>
                <p className="text-base font-bold text-foreground mt-0.5">Next.js 16.4.3</p>
                <span className="text-[13px] text-emerald-400 font-medium">Turbopack Optimized</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
