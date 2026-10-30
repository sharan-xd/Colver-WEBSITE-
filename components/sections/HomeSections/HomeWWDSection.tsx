'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  CheckCircle2,
} from '@/components/ui/Icons'

const capabilities = [
  {
    id: 'core-systems',
    title: 'Custom Business Platforms',
    headline: 'Bespoke operational hubs eliminating fragmented spreadsheets.',
    spec: 'Multi-tenant ERPs, warehouse consoles, role-based approval pipelines, and data sync engines.',
    stack: 'Next.js 16, TypeScript, PostgreSQL, Redis, Edge APIs',
    deliverables: ['Custom ERP consoles', 'Role-based access & audit logs', 'Automated data exports'],
    href: '/services#custom-software',
  },
  {
    id: 'web-apps',
    title: 'High-Concurrency Web Apps',
    headline: 'Sub-second web platforms engineered for heavy traffic.',
    spec: 'Modern fullstack SaaS platforms and customer portals with strict type contracts and minimal latency.',
    stack: 'React 18, Next.js Server Components, Turbopack, Tailwind CSS',
    deliverables: ['Sub-second transitions', '100% Type-Safe APIs', 'Accessible WCAG AA UI'],
    href: '/services#web-applications',
  },
  {
    id: 'commerce',
    title: 'Commerce & Order Pipelines',
    headline: 'B2B and direct-to-consumer transactional engines.',
    spec: 'Unified checkout, automated GST tax invoicing, multi-godown inventory deduction, and Indian payment rails.',
    stack: 'Razorpay / UPI, Webhooks, Resend, Redis Cache, Next.js',
    deliverables: ['Real-time stock validation', 'Automated GST invoices', 'Warehouse synchronization'],
    href: '/services#ecommerce-platforms',
  },
  {
    id: 'ai-workflows',
    title: 'AI Workflows & Automation',
    headline: 'Automated document extraction and business pipelines.',
    spec: 'Structured OCR parsing for supplier invoices, purchase orders, and multi-channel webhook aggregation.',
    stack: 'Structured LLM Schemas, Python Workers, Node.js Gateway',
    deliverables: ['Structured invoice & PO parsing', 'High-accuracy OCR', 'Ledger reconciliation'],
    href: '/services#inventory-operations',
  },
]

export default function HomeWWDSection() {
  const [selectedCap, setSelectedCap] = useState(0)

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          className="max-w-3xl mb-14"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-foreground leading-tight">
            Software engineered for scale.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            We build software tailored to the exact requirements of your business, eliminating fragmented tools and accelerating operations.
          </p>
        </motion.div>

        {/* Narrative Asymmetric Split: Interactive Architecture Specimen */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Capability Index */}
          <div className="lg:col-span-5 space-y-2">
            {capabilities.map((item, index) => {
              const isActive = selectedCap === index
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setSelectedCap(index)}
                  className={`
                    w-full text-left py-4 px-3.5 rounded-md transition-colors cursor-pointer block
                    ${isActive ? 'bg-surface text-foreground' : 'text-slate-400 hover:text-foreground hover:bg-surface/40'}
                  `}
                >
                  <span className={`text-base font-bold block ${isActive ? 'text-foreground' : 'text-slate-300'}`}>
                    {item.title}
                  </span>
                  <p className="mt-1 text-sm text-slate-400 leading-relaxed">
                    {item.headline}
                  </p>
                </button>
              )
            })}
          </div>

          {/* Right Column: Architectural Specimen Interface Fragment */}
          <div className="lg:col-span-7" data-ui="architecture-spec">
            <motion.div
              key={selectedCap}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className="p-8 rounded-xl bg-card space-y-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <span className="text-sm font-semibold text-blue-400">
                  Architecture Specification
                </span>
                <span className="text-sm text-slate-400">
                  Engineering Scope: Production Ready
                </span>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight">
                  {capabilities[selectedCap].title}
                </h3>
                <p className="mt-2 text-base text-slate-300 leading-relaxed">
                  {capabilities[selectedCap].spec}
                </p>
              </div>

              <div className="p-4 rounded-lg bg-surface space-y-2">
                <span className="text-sm text-slate-400 block">Technology Blueprint</span>
                <p className="text-sm font-semibold text-foreground">
                  {capabilities[selectedCap].stack}
                </p>
              </div>

              <div className="space-y-3">
                <span className="text-sm text-slate-400 block">Key Production Deliverables</span>
                <div className="space-y-2">
                  {capabilities[selectedCap].deliverables.map((del) => (
                    <div key={del} className="flex items-center gap-3 p-3 rounded-lg bg-surface text-sm text-foreground">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span className="font-medium">{del}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href={capabilities[selectedCap].href}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <span>Explore full technical documentation</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
