'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from '@/components/ui/Icons'

const capabilitiesList = [
  {
    title: 'Distributed Architecture & Custom Data Models',
    summary: 'Bespoke relational and cache architectures replacing fragmented third-party SaaS silos.',
    details:
      'We design normalized relational database schemas (PostgreSQL) paired with in-memory Redis synchronization and edge APIs. Every table, index, and foreign key constraint is modeled around your company’s unique transactional volume—preventing lock contention, eliminating duplicate records, and keeping queries under 15ms.',
    specs: ['PostgreSQL 16 Schema Partitioning', 'Multi-tenant Row-Level Security', 'Sub-15ms Query Execution Target', 'Automated Daily Snapshot & Replication'],
    deliverableLink: '/services#custom-software',
  },
  {
    title: 'Next.js App Router & Edge-Rendered Platforms',
    summary: 'Sub-second digital platforms engineered with React 18, zero layout shift, and strict type contracts.',
    details:
      'We harness Next.js Server Components and edge caching to deliver instantaneous page loads across mobile networks. Zero expensive client-side bundle weight. Strict TypeScript 5 compiler enforcement across all data boundaries guarantees zero runtime type exceptions.',
    specs: ['Next.js 16 App Router Primitives', 'Sub-100ms Interaction to Next Paint', 'Zero Cumulative Layout Shift (CLS < 0.01)', '100% Strict TypeScript 5 Type Safety'],
    deliverableLink: '/services#web-applications',
  },
  {
    title: 'Transaction Pipelines & Indian Payment Rails',
    summary: 'High-availability checkout engines with automated GST tax calculation and webhook durability.',
    details:
      'Engineered transaction flows with idempotent payment handlers for Razorpay UPI and Stripe Elements. We build automated tax invoicing matching Indian GST regulations, automated multi-godown stock deduction with pessimistic locking, and fail-safe webhook dead-letter queues.',
    specs: ['Idempotent Transaction Handling', 'Automated GST Invoices & POs', 'Pessimistic Inventory Locking', 'Multi-Region Webhook Retries'],
    deliverableLink: '/services#ecommerce-platforms',
  },
  {
    title: 'Automated Document OCR & Workflow Pipelines',
    summary: 'High-precision document parsing extracting line items from supplier bills and purchase orders.',
    details:
      'We implement intelligent structured data extraction models that transform messy scanned supplier bills, delivery challans, and invoices into strongly-typed database records. Automated multi-point cross-checks verify totals against purchase orders before any financial commitment is booked.',
    specs: ['Multi-page PDF & Document OCR', 'Line-item Table Matrix Parsing', 'Three-Way Match Reconciliation', 'Automated Exception Flagging'],
    deliverableLink: '/services#inventory-operations',
  },
]

export default function HomeCapabilities() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0)

  const toggle = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="pb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <h2 className="font-display font-bold text-3xl sm:text-5xl tracking-tight text-[#F4F1EA] leading-tight">
              Architecture & Depth.
            </h2>
          </div>
          <p className="text-base sm:text-lg text-[#BFC3C9] max-w-md leading-relaxed">
            Expand our technical capabilities to inspect our architectural practices, runtime targets, and engineering guarantees.
          </p>
        </div>

        {/* Typographic Swiss Matrix (Unboxed open layout, zero repetitive cards) */}
        <div className="space-y-4 pt-4">
          {capabilitiesList.map((item, idx) => {
            const isExpanded = expandedIndex === idx
            return (
              <div
                key={item.title}
                className={`transition-all duration-200 p-6 sm:p-8 rounded-[2px] animate-entrance ${
                  isExpanded ? 'bg-[#141414]' : 'bg-transparent hover:bg-[#101010]'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full text-left flex flex-col md:flex-row md:items-start justify-between gap-6 group cursor-pointer focus:outline-none"
                  aria-expanded={isExpanded}
                >
                  <div className="space-y-1">
                    <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-[#F4F1EA] group-hover:text-[#C8FF00] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-base text-[#BFC3C9] leading-relaxed max-w-3xl">
                      {item.summary}
                    </p>
                  </div>

                  <div className="shrink-0 pt-1">
                    <span className="text-sm font-mono font-semibold text-[#8E929A] group-hover:text-[#F4F1EA] transition-colors">
                      {isExpanded ? '[ COLLAPSE ]' : '[ EXPAND ]'}
                    </span>
                  </div>
                </button>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-8 space-y-6">
                        <p className="text-base text-[#F4F1EA] leading-relaxed max-w-2xl">
                          {item.details}
                        </p>

                        <div className="space-y-3">
                          <span className="text-sm font-semibold text-[#8E929A] block">
                            Architectural Guarantees
                          </span>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-3xl">
                            {item.specs.map((spec) => (
                              <div
                                key={spec}
                                className="p-3 bg-[#080808] rounded-[2px] text-sm text-[#BFC3C9] font-medium flex items-center gap-2"
                              >
                                <span className="text-[#C8FF00] font-bold">+</span>
                                <span>{spec}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="pt-2">
                          <Link
                            href={item.deliverableLink}
                            className="inline-flex items-center gap-2 text-base text-[#C8FF00] hover:text-[#b8ea00] font-medium transition-colors"
                          >
                            <span>Read detailed technical capability</span>
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
