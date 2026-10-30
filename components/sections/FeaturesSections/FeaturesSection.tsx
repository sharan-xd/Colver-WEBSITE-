'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { ArrowRight } from '@/components/ui/Icons'

const allFeatures = [
  {
    title: 'AI-Powered Orchestration & Extraction',
    description: 'Automated structured parsing for messy supplier bills, delivery challans, and invoices directly into normalized relational records.',
    category: 'Core Systems',
    badge: 'Neural Pipelines',
  },
  {
    title: 'Real-time State Synchronization',
    description: 'Multi-warehouse stock deduction and multi-operator approval queues synchronized predictably across edge instances.',
    category: 'Infrastructure',
    badge: 'Sub-40ms Edge',
  },
  {
    title: 'Enterprise Boundary Security',
    description: 'Bank-grade AES-256 encryption, hardened CSP rules, granular role-based permissions, and automated compliance auditing.',
    category: 'Security',
    badge: 'Zero Hardcoded Secrets',
  },
  {
    title: 'Global Anycast Edge CDN',
    description: 'Lightning-fast asset routing and HTML edge streaming in 200+ Tier-1 data centers worldwide with automatic failover.',
    category: 'Infrastructure',
    badge: 'Edge SLA',
  },
  {
    title: 'Deterministic Version Control',
    description: 'Track every asset, token, and database migration with point-in-time rollbacks, atomic branching, and instant previews.',
    category: 'Infrastructure',
    badge: 'Git-Native',
  },
  {
    title: 'Extensible API-First Core',
    description: 'Integrate existing microservices effortlessly using typed OpenAPI schemas, REST webhooks, and Redis message queues.',
    category: 'Core Systems',
    badge: 'TypeScript 5',
  },
  {
    title: 'Continuous Telemetry & Vitals',
    description: 'Real-time performance metrics tracking LCP, INP, CLS, and API latency directly streaming from ClickHouse edge clusters.',
    category: 'Infrastructure',
    badge: 'Live Telemetry',
  },
  {
    title: 'Atomic Component Architecture',
    description: 'Composable UI primitives designed with strict accessibility (WCAG AA), fluid animations, and zero CSS runtime overhead.',
    category: 'Core Systems',
    badge: 'Pure CSS Tokens',
  },
  {
    title: 'Zero Cold-Start Edge Runtime',
    description: 'Optimized serverless edge compute handles high-concurrency traffic spikes gracefully with sub-100ms response targets.',
    category: 'Infrastructure',
    badge: 'High Concurrency',
  },
]

const categories = ['All', 'Core Systems', 'Infrastructure', 'Security']

export default function FeaturesSection() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredFeatures =
    selectedCategory === 'All'
      ? allFeatures
      : allFeatures.filter((f) => f.category === selectedCategory)

  return (
    <div className="py-8 sm:py-16 space-y-20 md:space-y-28">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl space-y-6">
          <div className="flex items-center gap-2 text-base text-[#C8FF00] font-mono">
            <span className="w-2 h-2 rounded-full bg-[#C8FF00] animate-pulse" />
            <span>Platform Architecture Specifications · Next.js 16 Edge</span>
          </div>

          <h1 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-[64px] tracking-tight text-[#F4F1EA] leading-[1.04] text-balance">
            Engineered for Scale, Speed, and Longevity.
          </h1>

          <p className="text-base sm:text-xl text-[#BFC3C9] leading-relaxed max-w-3xl">
            A cohesive engineering toolkit purpose-built for modern operations and high-throughput web systems. Eliminate fragmented devtools and brittle SaaS subscriptions.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`
                  px-4 py-2 rounded-[2px] text-base font-semibold transition-all cursor-pointer
                  ${
                    selectedCategory === cat
                      ? 'bg-[#C8FF00] text-black font-bold'
                      : 'bg-[#181818] text-[#BFC3C9] hover:text-[#F4F1EA] hover:bg-[#222222]'
                  }
                `}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Index: Swiss Editorial Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFeatures.map((feature, idx) => (
            <div
              key={feature.title}
              className={`p-6 sm:p-8 rounded-[2px] space-y-4 transition-all duration-200 ${
                idx % 2 === 0 ? 'bg-[#101010]' : 'bg-[#0d0d0d]'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-mono font-semibold text-[#C8FF00] bg-[#181818] px-3 py-1 rounded-[2px]">
                  {feature.badge}
                </span>
                <span className="text-sm text-[#8E929A]">{feature.category}</span>
              </div>
              <div>
                <h2 className="font-display text-xl sm:text-2xl font-bold text-[#F4F1EA]">
                  {feature.title}
                </h2>
                <p className="mt-3 text-base text-[#BFC3C9] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Specifications Matrix */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-[2px] bg-[#101010] space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4">
            <div>
              <span className="text-sm font-mono font-semibold text-[#C8FF00] block">
                BENCHMARK COMPARISON
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#F4F1EA] mt-1">
                Colver Architecture vs. Traditional Agency Stacks
              </h2>
            </div>
            <Link href="/contact">
              <button
                type="button"
                className="h-11 px-6 rounded-[2px] bg-[#181818] hover:bg-[#222222] text-[#F4F1EA] text-base font-semibold transition-colors cursor-pointer"
              >
                Request Architecture Audit
              </button>
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-base">
              <thead className="bg-[#141414] text-[#8E929A] font-semibold">
                <tr>
                  <th className="py-4 px-6">Metric / Capability</th>
                  <th className="py-4 px-6 text-[#C8FF00]">Colver Engineering</th>
                  <th className="py-4 px-6 text-[#8E929A]">Typical Commercial Agency</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-[#F4F1EA]">
                {[
                  ['Interaction to Next Paint (INP)', '< 100 ms', '350 ms – 1.2 s'],
                  ['Core Web Vitals Pass Rate', '100% Guaranteed', '45% – 68% average'],
                  ['Edge Deployment Locations', '200+ Global Anycast', 'Single region VM or shared hosting'],
                  ['Type Safety & Validation', 'Strict TypeScript 5 + Zod', 'Untyped JS / runtime errors'],
                  ['Source Code Ownership', '100% IP Transfer & Git', 'Proprietary lock-in & monthly fees'],
                ].map(([capability, colver, legacy]) => (
                  <tr key={capability} className="hover:bg-[#141414]/60 transition-colors">
                    <td className="py-4 px-6 font-semibold text-[#F4F1EA]">{capability}</td>
                    <td className="py-4 px-6 text-[#C8FF00] font-semibold">{colver}</td>
                    <td className="py-4 px-6 text-[#8E929A]">{legacy}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-14 bg-[#121212] rounded-[2px] flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight text-[#F4F1EA] leading-tight">
              Ready to verify your system requirements?
            </h2>
            <p className="text-base sm:text-lg text-[#BFC3C9] leading-relaxed">
              Our architects will review your transaction volumes, schema requirements, and latency targets, then prepare a tailored technical blueprint within 48 hours.
            </p>
          </div>
          <div className="shrink-0">
            <Link href="/contact">
              <button
                type="button"
                className="h-12 px-7 rounded-[2px] bg-[#C8FF00] hover:bg-[#b8ea00] text-black font-semibold text-base tracking-wide flex items-center justify-center gap-2.5 transition-all cursor-pointer"
              >
                <span>Initiate Architecture Review</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
