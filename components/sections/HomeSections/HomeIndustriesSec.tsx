'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Rocket,
  Store,
  Briefcase,
  Building2,
  ArrowRight,
  CheckCircle2,
} from '@/components/ui/Icons'
import Button from '@/components/ui/Button'

const domains = [
  {
    id: 'startups',
    title: 'High-Growth Tech Startups',
    sector: 'Startups & Ventures',
    summary: 'Scalable MVP foundations, rapid iteration pipelines, investor-ready prototypes, and reactive web applications.',
    workflows: ['User authentication & RBAC', 'Subscription & Stripe/Razorpay billing', 'Real-time collaborative dashboards'],
    icon: Rocket,
  },
  {
    id: 'commerce',
    title: 'Retail & Multi-Channel Commerce',
    sector: 'Commerce & Logistics',
    summary: 'High-conversion storefronts, multi-warehouse stock sync, automated GST billing, and payment gateway routing.',
    workflows: ['Live inventory sync across godowns', 'Automated GST invoice generation', 'Custom ERP & logistics hooks'],
    icon: Store,
  },
  {
    id: 'b2b',
    title: 'Professional & B2B Services',
    sector: 'B2B & Professional',
    summary: 'High-trust brand platforms, client booking portals, secure document exchange, and operational dashboards.',
    workflows: ['Client onboarding portals', 'Encrypted document repositories', 'Automated schedule orchestration'],
    icon: Briefcase,
  },
  {
    id: 'enterprise',
    title: 'Enterprise Operations',
    sector: 'Enterprise Systems',
    summary: 'Mission-critical internal tools, compliance workflows, legacy software modernization, and automated data pipelines.',
    workflows: ['Legacy database migration', 'Automated audit trail logging', 'Custom multi-department approvals'],
    icon: Building2,
  },
]

export default function HomeIndustriesSection() {
  const [selectedDomain, setSelectedDomain] = useState(0)

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
            Software for your operational domain.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            From agile startups to mature enterprises, we engineer digital platforms aligned directly with your business model and operational scale.
          </p>
        </motion.div>

        {/* Domain Matrix Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start" data-ui="domain-matrix">
          {/* Domain Selector */}
          <div className="lg:col-span-5 space-y-2">
            {domains.map((item, idx) => {
              const isActive = selectedDomain === idx
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setSelectedDomain(idx)}
                  className={`
                    w-full text-left py-4 px-3.5 rounded-md transition-colors cursor-pointer block
                    ${isActive ? 'bg-surface text-foreground' : 'text-slate-400 hover:text-foreground hover:bg-surface/40'}
                  `}
                >
                  <span className={`text-base font-bold block ${isActive ? 'text-foreground' : 'text-slate-300'}`}>
                    {item.title}
                  </span>
                  <span className="mt-1 text-[13px] text-blue-400 font-medium block">
                    {item.sector}
                  </span>
                </button>
              )
            })}
          </div>

          {/* Domain Detail Display */}
          <div className="lg:col-span-7">
            <motion.div
              key={selectedDomain}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className="p-8 rounded-xl bg-card space-y-6"
            >
              <div>
                <span className="text-sm font-semibold text-blue-400 block mb-2">
                  {domains[selectedDomain].sector}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight">
                  {domains[selectedDomain].title}
                </h3>
                <p className="mt-2.5 text-base text-slate-300 leading-relaxed">
                  {domains[selectedDomain].summary}
                </p>
              </div>

              <div className="p-5 rounded-lg bg-surface space-y-3">
                <span className="text-[13px] text-slate-400 block font-medium">Standard Architectural Workflows</span>
                <div className="space-y-2.5">
                  {domains[selectedDomain].workflows.map((wf) => (
                    <div key={wf} className="flex items-center gap-2.5 text-sm text-foreground">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{wf}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <span>Explore domain engineering solutions</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Final Conversion Action */}
        <motion.div
          className="mt-16 p-8 sm:p-10 rounded-xl bg-card flex flex-col md:flex-row md:items-center justify-between gap-6"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <div className="max-w-2xl space-y-2">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight">
              Ready to engineer your next software release?
            </h3>
            <p className="text-base text-slate-300 leading-relaxed">
              Schedule a technical consultation to explore custom system architectures, operational requirements, and delivery roadmaps.
            </p>
          </div>
          <Link href="/contact" className="shrink-0">
            <Button size="lg" variant="primary" iconRight={<ArrowRight className="w-4 h-4" />}>
              Discuss Your Project
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
