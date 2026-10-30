'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowUpRight, ArrowRight } from '@/components/ui/Icons'

const projects = [
  {
    id: 'nexus',
    title: 'Nexus Workflow Engine',
    subtitle: 'Autonomous Operations Canvas',
    description: 'Distributed operational platform syncing multi-warehouse inventory, purchase approvals, and supplier ledger entries in real time across 14 enterprise hubs.',
    metrics: '4.8x Faster Operational Cycles',
    latency: 'Sub-40ms Edge Sync',
    tags: ['React Three Fiber', 'Next.js 16', 'TypeScript', 'Edge AI'],
    environment: 'Logistics & Supply Chain',
    image: '/projects/nexus.jpg',
  },
  {
    id: 'apex',
    title: 'Apex Transaction Core',
    subtitle: 'Headless Transactional Engine',
    description: 'High-throughput direct-to-consumer and B2B checkout engine handling 40,000 requests/minute with automated GST tax calculation and Indian payment rails.',
    metrics: '99.999% Payment Availability',
    latency: 'Sub-90ms Global Finality',
    tags: ['Stripe Elements', 'Razorpay UPI', 'Edge Redis', 'Tailwind CSS'],
    environment: 'Commerce Platforms',
    image: '/projects/apex.jpg',
  },
  {
    id: 'pulse',
    title: 'Pulse Observability Portal',
    subtitle: 'Telemetry & Error Budgeting',
    description: 'Enterprise observability dashboard streaming Web Vitals, API error budgets, and real-time user session health across edge clusters.',
    metrics: 'Sub-50ms Metric Refresh',
    latency: 'Zero DOM Thrash',
    tags: ['WebSockets', 'GSAP', 'Data Visualization', 'ClickHouse'],
    environment: 'Infrastructure Telemetry',
    image: '/projects/pulse.jpg',
  },
  {
    id: 'aura',
    title: 'Aura Architectural Tokens',
    subtitle: 'Universal Component System',
    description: 'Bespoke design system with liquid glass tokens, accessible ARIA state machines, and code-sync pipelines for multi-platform engineering teams.',
    metrics: 'WCAG AAA Compliant',
    latency: '0kb Runtime Overhead',
    tags: ['Design Tokens', 'Framer Motion', 'Radix Primitives'],
    environment: 'Design Engineering',
    image: '/projects/aura.jpg',
  },
]

export default function HomeSelectedWork() {
  const [p1, p2, p3, p4] = projects

  return (
    <section className="py-24 relative bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="pb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <h2 className="font-display font-bold text-3xl sm:text-5xl tracking-tight text-[#F4F1EA] leading-tight">
              Selected Systems.
            </h2>
          </div>
          <Link
            href="/showcase"
            className="inline-flex items-center gap-2 text-base text-[#F4F1EA] hover:text-[#C8FF00] font-medium transition-colors"
          >
            <span>View all production releases</span>
            <ArrowRight className="w-4 h-4 text-[#C8FF00]" />
          </Link>
        </div>

        {/* Editorial Project Stream: 4 Real Raster Specimen Layouts */}
        <div className="space-y-16 pt-4">
          {/* Project 1: Nexus (Large Feature Split) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-[#101010] p-6 sm:p-10 rounded-[2px] transition-transform duration-300 hover:translate-y-[-2px] animate-entrance">
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                <h3 className="font-display font-bold text-2xl sm:text-4xl text-[#F4F1EA] tracking-tight">
                  {p1.title}
                </h3>
                <div className="text-base font-semibold text-[#C8FF00]">
                  {p1.environment} · {p1.latency}
                </div>
                <p className="text-base text-[#BFC3C9] leading-relaxed pt-2">
                  {p1.description}
                </p>
              </div>

              <div className="p-5 bg-[#161616] rounded-[2px] space-y-1">
                <span className="text-sm font-medium text-[#8E929A] block">
                  Verified Operational Outcome
                </span>
                <span className="text-xl font-bold text-[#F4F1EA] block">
                  {p1.metrics}
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {p1.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-[2px] bg-[#181818] text-sm text-[#BFC3C9] font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div>
                <Link href="/showcase">
                  <button
                    type="button"
                    className="h-11 px-6 rounded-[2px] bg-[#181818] hover:bg-[#222222] text-[#F4F1EA] text-base font-medium flex items-center gap-2 transition-all cursor-pointer"
                  >
                    <span>Inspect System Architecture</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="relative aspect-[16/10] w-full rounded-[2px] overflow-hidden bg-[#0d0d0d]">
                <img
                  src={p1.image}
                  alt={`${p1.title} Production Architecture Preview`}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Projects 2 & 3: Side-by-Side Dual Feature (Apex & Pulse) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project 2: Apex */}
            <div className="bg-[#101010] p-6 sm:p-8 rounded-[2px] space-y-6 flex flex-col justify-between transition-transform duration-300 hover:translate-y-[-2px] animate-entrance">
              <div className="space-y-4">
                <div className="relative aspect-[16/10] w-full rounded-[2px] overflow-hidden bg-[#0d0d0d]">
                  <img
                    src={p2.image}
                    alt={`${p2.title} Production Transaction Core`}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-[1.02]"
                    loading="lazy"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-[#F4F1EA] tracking-tight">
                    {p2.title}
                  </h3>
                  <div className="text-base font-semibold text-[#7090FF]">
                    {p2.environment} · {p2.latency}
                  </div>
                  <p className="text-base text-[#BFC3C9] leading-relaxed">
                    {p2.description}
                  </p>
                </div>
              </div>

              <div className="space-y-4 pt-2">
                <div className="p-4 bg-[#161616] rounded-[2px]">
                  <span className="text-sm text-[#8E929A] block">Verified Benchmark</span>
                  <span className="text-lg font-bold text-[#F4F1EA] block">{p2.metrics}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {p2.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 rounded-[2px] bg-[#181818] text-sm text-[#BFC3C9]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Project 3: Pulse */}
            <div className="bg-[#101010] p-6 sm:p-8 rounded-[2px] space-y-6 flex flex-col justify-between transition-transform duration-300 hover:translate-y-[-2px] animate-entrance">
              <div className="space-y-4">
                <div className="relative aspect-[16/10] w-full rounded-[2px] overflow-hidden bg-[#0d0d0d]">
                  <img
                    src={p3.image}
                    alt={`${p3.title} Observability Portal`}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-[1.02]"
                    loading="lazy"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-[#F4F1EA] tracking-tight">
                    {p3.title}
                  </h3>
                  <div className="text-base font-semibold text-[#FF7A3F]">
                    {p3.environment} · {p3.latency}
                  </div>
                  <p className="text-base text-[#BFC3C9] leading-relaxed">
                    {p3.description}
                  </p>
                </div>
              </div>

              <div className="space-y-4 pt-2">
                <div className="p-4 bg-[#161616] rounded-[2px]">
                  <span className="text-sm text-[#8E929A] block">Telemetry Rate</span>
                  <span className="text-lg font-bold text-[#F4F1EA] block">{p3.metrics}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {p3.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 rounded-[2px] bg-[#181818] text-sm text-[#BFC3C9]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Project 4: Aura Tokens (Full Width Feature) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-[#101010] p-6 sm:p-10 rounded-[2px] transition-transform duration-300 hover:translate-y-[-2px] animate-entrance">
            <div className="lg:col-span-7">
              <div className="relative aspect-[16/10] w-full rounded-[2px] overflow-hidden bg-[#0d0d0d]">
                <img
                  src={p4.image}
                  alt={`${p4.title} Architectural Tokens`}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#F4F1EA] tracking-tight">
                  {p4.title}
                </h3>
                <div className="text-base font-semibold text-[#C8FF00]">
                  {p4.environment} · {p4.latency}
                </div>
                <p className="text-base text-[#BFC3C9] leading-relaxed pt-2">
                  {p4.description}
                </p>
              </div>

              <div className="p-5 bg-[#161616] rounded-[2px] space-y-1">
                <span className="text-sm font-medium text-[#8E929A] block">
                  Accessibility Benchmark
                </span>
                <span className="text-xl font-bold text-[#F4F1EA] block">
                  {p4.metrics}
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {p4.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-[2px] bg-[#181818] text-sm text-[#BFC3C9] font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
