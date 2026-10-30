'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight, CheckCircle2 } from '@/components/ui/Icons'

const principles = [
  {
    principle: 'Immutability & Pure Functions',
    headline: 'Deterministic state transitions without side effects.',
    detail: 'We enforce unidirectional data flow and pure transformations across data boundaries. This eliminates silent state mutation bugs, guarantees idempotent transaction processing, and makes debugging straightforward.',
    image: '/projects/nexus.jpg',
  },
  {
    principle: 'Sub-100ms Interaction Latency',
    headline: 'Zero DOM thrashing, zero Cumulative Layout Shift.',
    detail: 'Software should feel instant. We leverage React Server Components to stream HTML directly from edge nodes, prune client-side JavaScript, and target sub-15ms database query execution times.',
    image: '/projects/pulse.jpg',
  },
  {
    principle: 'Complete IP & Code Ownership',
    headline: 'Zero proprietary lock-in or recurring platform fees.',
    detail: 'We build for longevity. When a project completes, clients receive 100% intellectual property ownership, cleanly formatted Git repositories, unminified source code, Docker configs, and database migration scripts.',
    image: '/projects/pipeline.jpg',
  },
  {
    principle: 'Security at the Boundary',
    headline: 'Strict input schemas, CSP headers, and audited endpoints.',
    detail: 'Every external request is validated through strict Zod contracts. We never store hardcoded secrets in source code, enforce rate limits on sensitive routes, and implement least-privilege database roles.',
    image: '/projects/apex.jpg',
  },
]

export default function AboutSection() {
  const [istTime, setIstTime] = useState<string>('')

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const formatter = new Intl.DateTimeFormat('en-IN', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      })
      setIstTime(formatter.format(now) + ' IST')
    }
    updateTime()
    const timer = setInterval(updateTime, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="py-8 sm:py-16 space-y-24 md:space-y-36">
      {/* Hero Section — Prominent Display Typography + Studio Blueprint Specimen */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 animate-entrance">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#141414] rounded-[2px] text-sm font-mono text-[#C8FF00]">
              <span className="w-2 h-2 rounded-full bg-[#C8FF00] animate-glow-dot" />
              <span>Bengaluru Studio · 12.9716° N, 77.5946° E · {istTime || '14:30 IST'}</span>
            </div>

            <h1 className="font-display font-extrabold text-5xl sm:text-7xl lg:text-[84px] tracking-tight text-[#F4F1EA] leading-[0.98] uppercase">
              Bengaluru Studio.
            </h1>

            <p className="text-lg sm:text-xl text-[#F4F1EA] font-medium leading-relaxed max-w-xl">
              Independent software architecture and systems engineering studio building production digital infrastructure for operations.
            </p>

            <p className="text-base text-[#BFC3C9] leading-relaxed max-w-xl">
              We partner with Indian enterprises and ambitious high-growth companies to replace brittle SaaS tools with custom, high-speed business operating systems.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link href="/contact">
                <button
                  type="button"
                  className="h-12 px-7 rounded-[2px] bg-[#C8FF00] hover:bg-[#b8ea00] text-black font-semibold text-base tracking-wide flex items-center justify-center gap-2.5 transition-all cursor-pointer"
                >
                  <span>Initiate Architecture Audit</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
              <Link href="/showcase">
                <button
                  type="button"
                  className="h-12 px-6 rounded-[2px] bg-[#141414] hover:bg-[#1a1a1a] text-[#F4F1EA] font-semibold text-base tracking-wide flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <span>Inspect Systems</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 animate-entrance stagger-1">
            <div className="relative aspect-[4/3] w-full rounded-[2px] overflow-hidden bg-[#101010]">
              <Image
                src="/projects/architecture.jpg"
                alt="Colver Bengaluru Studio Architecture Blueprint"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-sm font-mono text-[#F4F1EA] px-3 py-2 bg-[#080808] rounded-[2px]">
                <span className="text-[#C8FF00]">STUDIO LOCATION</span>
                <span>INDIRANAGAR, BENGALURU</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Studio Manifesto Split */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-entrance">
        <div className="bg-[#101010] p-8 sm:p-14 rounded-[2px] grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-4">
            <h2 className="font-display font-bold text-3xl sm:text-5xl text-[#F4F1EA] tracking-tight leading-tight">
              Engineering Manifesto.
            </h2>
            <p className="text-lg font-medium text-[#C8FF00] leading-relaxed">
              We reject bloated SaaS subscriptions that force companies into rigid workflows.
            </p>
            <p className="text-base text-[#BFC3C9] leading-relaxed">
              Every growing business eventually hits the ceiling of off-the-shelf software: licensing fees escalate, features bloat, and fragmented data is scattered across disconnected dashboards.
            </p>
            <p className="text-base text-[#BFC3C9] leading-relaxed">
              At Colver, we engineer custom software platforms built strictly around your business rules. Every database table, API endpoint, and user interface is designed to solve your operational bottlenecks—delivering extreme speed, full intellectual property ownership, and zero monthly seat tax.
            </p>
          </div>

          <div className="lg:col-span-6">
            <div className="relative aspect-[16/10] w-full rounded-[2px] overflow-hidden bg-[#0d0d0d]">
              <Image
                src="/projects/pipeline.jpg"
                alt="Automated CI/CD Delivery Verification Telemetry"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/90 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 text-sm font-mono text-[#C8FF00] bg-[#080808] px-3 py-1 rounded-[2px]">
                TELEMETRY // AUTOMATED PIPELINE VERIFICATION
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Architectural Principles: Open Swiss Layout */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6">
          <div className="space-y-3 max-w-xl animate-entrance">
            <h2 className="font-display font-bold text-3xl sm:text-5xl tracking-tight text-[#F4F1EA] leading-tight">
              Architectural Guarantees.
            </h2>
          </div>
          <p className="text-base text-[#BFC3C9] max-w-md leading-relaxed animate-entrance stagger-1">
            These four non-negotiable engineering standards guide every line of production code committed by our studio.
          </p>
        </div>

        <div className="space-y-24 md:space-y-32">
          {principles.map((item, idx) => {
            const isReversed = idx % 2 === 1
            return (
              <article
                key={item.principle}
                className="grid lg:grid-cols-12 gap-8 lg:gap-14 items-center animate-entrance"
              >
                {/* Narrative Column */}
                <div
                  className={`lg:col-span-6 space-y-5 ${
                    isReversed ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#F4F1EA]">
                    {item.principle}
                  </h3>
                  <p className="text-base font-semibold text-[#C8FF00]">
                    {item.headline}
                  </p>
                  <p className="text-base text-[#BFC3C9] leading-relaxed">
                    {item.detail}
                  </p>
                </div>

                {/* Specimen Visual Column */}
                <div
                  className={`lg:col-span-6 ${
                    isReversed ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div className="relative aspect-[16/10] w-full rounded-[2px] overflow-hidden bg-[#101010]">
                    <Image
                      src={item.image}
                      alt={`${item.principle} Architecture Verification`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/90 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3 px-3 py-1 bg-[#080808] rounded-[2px] text-sm font-mono text-[#C8FF00]">
                      VERIFIED SPECIMEN // 0{idx + 1}
                    </div>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </section>

      {/* Studio Location & Consultation CTA */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-entrance">
        <div className="p-8 sm:p-14 bg-[#101010] rounded-[2px] flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="max-w-2xl space-y-3">
            <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight text-[#F4F1EA] leading-tight">
              Studio Consultation.
            </h2>
            <p className="text-base sm:text-lg text-[#BFC3C9] leading-relaxed">
              We welcome founders, operators, and engineering leads for in-depth architectural workshops at our Indiranagar studio in Bengaluru.
            </p>
            <div className="pt-2 text-base text-[#F4F1EA] font-mono">
              Inquiries: <a href="mailto:contact@colver.in" className="text-[#C8FF00] underline">contact@colver.in</a>
            </div>
          </div>
          <div className="shrink-0">
            <Link href="/contact">
              <button
                type="button"
                className="h-12 px-7 rounded-[2px] bg-[#C8FF00] hover:bg-[#b8ea00] text-black font-semibold text-base tracking-wide flex items-center justify-center gap-2.5 transition-all cursor-pointer"
              >
                <span>Schedule a Studio Session</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
