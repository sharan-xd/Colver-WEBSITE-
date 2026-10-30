'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from '@/components/ui/Icons'

const capabilities = [
  {
    title: 'Custom Business Platforms & ERPs',
    headline: 'Unified operational hubs that replace fragmented spreadsheets.',
    detail: 'We build central operating systems for warehouse logistics, multi-stage approval workflows, role-based access consoles, and automated data synchronization.',
    stack: 'PostgreSQL · TypeScript · Redis · Edge APIs',
    sla: 'Strict Type-Safe Data Contracts',
    deliverables: ['Warehouse inventory tracking', 'Audit-logged approval flows', 'Automated data exports'],
    metric: 'Zero licensing bloat',
  },
  {
    title: 'High-Concurrency Web Applications',
    headline: 'Sub-second web platforms engineered for heavy traffic.',
    detail: 'Fullstack Next.js web applications built with React Server Components, client-side caching, and hardened security for enterprise customer portals.',
    stack: 'Next.js 16 · React 18 · Tailwind CSS · Turbopack',
    sla: 'Sub-100ms INP Performance',
    deliverables: ['Sub-second page transitions', 'Zero layout shift (CLS < 0.02)', 'WCAG AA accessible UI'],
    metric: '99.99% edge uptime',
  },
  {
    title: 'Transactional Commerce & Billing Rails',
    headline: 'Direct-to-consumer and B2B high-volume payment pipelines.',
    detail: 'Engineered checkout flows, automated Indian GST tax invoicing, multi-godown stock deduction, and real-time webhook reconciliation with payment gateways.',
    stack: 'Razorpay / UPI · Stripe · Webhooks · Redis',
    sla: 'Sub-200ms Transaction Finality',
    deliverables: ['Real-time inventory locks', 'Automated GST invoices & POs', 'Payment webhook queues'],
    metric: 'Zero double-spend risk',
  },
  {
    title: 'AI Workflows & Structured Extraction',
    headline: 'Automated document processing and intelligence pipelines.',
    detail: 'High-accuracy OCR parsing for vendor bills, purchase orders, and multi-channel message aggregation, validated strictly before hitting your database.',
    stack: 'Structured LLM Schemas · Python Workers · Node.js Gateway',
    sla: '99.4% Extraction Precision',
    deliverables: ['Vendor bill & invoice OCR', 'Purchase order parsing', 'Ledger reconciliation'],
    metric: '10x faster batch processing',
  },
]

export default function HomeWWDSection() {
  const [selectedIdx, setSelectedIdx] = useState(0)
  const current = capabilities[selectedIdx]

  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Header: Clean headline without artificial eyebrow */}
        <div className="pb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-xl">
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#F4F1EA] leading-tight">
              Software Built for Scale.
            </h2>
          </div>
          <p className="text-base sm:text-lg text-[#BFC3C9] max-w-md leading-relaxed">
            We reject bloated off-the-shelf templates. Every system is purpose-built to solve your specific operational bottlenecks.
          </p>
        </div>

        {/* Editorial Layout: Subtle Tone Separation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pt-8 items-start">
          {/* Left Column: Service Index */}
          <div className="lg:col-span-6 space-y-4">
            {capabilities.map((item, idx) => {
              const isActive = selectedIdx === idx
              return (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => setSelectedIdx(idx)}
                  className={`
                    w-full text-left p-6 transition-all duration-150 rounded-[2px] cursor-pointer block animate-entrance
                    ${
                      isActive
                        ? 'bg-[#181818] text-[#F4F1EA]'
                        : 'bg-transparent text-[#BFC3C9] hover:bg-[#141414] hover:text-[#F4F1EA]'
                    }
                  `}
                >
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-[#F4F1EA]">
                      {item.title}
                    </h3>
                    <span className="text-sm sm:text-base text-[#C8FF00] font-medium shrink-0">
                      {item.metric}
                    </span>
                  </div>

                  <p className="mt-3 text-base text-[#BFC3C9] leading-relaxed">
                    {item.headline}
                  </p>
                </button>
              )
            })}
          </div>

          {/* Right Column: Architectural Specification View */}
          <div className="lg:col-span-6 sticky top-28">
            <div className="p-8 bg-[#141414] rounded-[2px] space-y-6">
              <div className="flex items-center justify-between pb-4 text-base">
                <span className="text-[#F4F1EA] font-bold">
                  Architecture Specification
                </span>
                <span className="text-sm sm:text-base text-[#C8FF00] font-medium">
                  {current.sla}
                </span>
              </div>

              {/* Real architectural topology raster image */}
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[2px] bg-[#0d0d0d]">
                <Image
                  src="/projects/architecture.jpg"
                  alt="Colver Architecture and Database Topology"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={current.title}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-6"
                >
                  <p className="text-base text-[#F4F1EA] leading-relaxed">
                    {current.detail}
                  </p>

                  <div className="space-y-3">
                    <span className="text-sm font-semibold text-[#8E929A] block">
                      Core Deliverables
                    </span>
                    <div className="space-y-2 text-base text-[#BFC3C9]">
                      {current.deliverables.map((del) => (
                        <div key={del} className="flex items-center gap-2.5">
                          <span className="text-[#C8FF00]">→</span>
                          <span>{del}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 bg-[#0a0a0a] rounded-[2px] space-y-1 text-base">
                    <span className="text-sm font-semibold text-[#8E929A] block">
                      Validated Stack
                    </span>
                    <span className="text-[#F4F1EA] font-semibold">{current.stack}</span>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="pt-2">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 text-base text-[#C8FF00] hover:text-[#b8ea00] font-medium transition-colors"
                >
                  <span>Explore full service specifications</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
