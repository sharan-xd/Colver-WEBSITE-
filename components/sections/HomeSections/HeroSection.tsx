'use client'

import React from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { ArrowRight, Layers } from '@/components/ui/Icons'

const WebThreads = dynamic(
  () => import('@/components/WebThreads/WebThreads'),
  { ssr: false }
)

export default function HeroSection() {
  return (
    <section className="relative w-full pt-12 md:pt-20 pb-28 overflow-hidden min-h-[640px] lg:min-h-[720px] flex items-center">
      {/* Animated WebThreads Background occupying the entire background area behind foreground content */}
      <div
        className="absolute inset-0 z-0 pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        <WebThreads
          colors={['#5227FF', '#FF9FFC']}
          coreColor="#FFFFFF"
          threadCount={6}
          spread={0.18}
        />
      </div>

      {/* Foreground Content with High-Priority z-index */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Confident Swiss Typography */}
          <div className="lg:col-span-8 space-y-8 animate-entrance">
            {/* Headline: Under 2 lines across all breakpoints */}
            <h1 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-[68px] tracking-tight text-[#F4F1EA] leading-[1.04] text-balance">
              Software Built for Real Operations.
            </h1>

            {/* Supporting Statement */}
            <p className="text-base sm:text-xl text-[#BFC3C9] max-w-2xl leading-relaxed">
              Colver designs and engineers bespoke business systems, high-concurrency web applications, and automated operational pipelines for growing companies.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link href="/contact" className="inline-block">
                <button
                  type="button"
                  className="w-full sm:w-auto h-12 px-7 rounded-[2px] bg-[#C8FF00] hover:bg-[#b8ea00] text-black font-semibold text-base tracking-wide flex items-center justify-center gap-2.5 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                >
                  <span>Discuss Your Architecture</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
              <Link href="/showcase" className="inline-block">
                <button
                  type="button"
                  className="w-full sm:w-auto h-12 px-6 rounded-[2px] bg-[#181818] hover:bg-[#222222] text-[#F4F1EA] font-semibold text-base tracking-wide flex items-center justify-center gap-2 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                >
                  <Layers className="w-4 h-4 text-[#C8FF00]" />
                  <span>Explore Selected Work</span>
                </button>
              </Link>
            </div>

            {/* Core Architectural Guarantees: Open Swiss Layout */}
            <div className="pt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-base">
              <div className="space-y-1.5">
                <span className="font-display font-bold text-base text-[#F4F1EA] block">
                  Bespoke Schema
                </span>
                <p className="text-base text-[#BFC3C9] leading-relaxed">
                  Tailored relational data models mapped to your operational business rules.
                </p>
              </div>

              <div className="space-y-1.5">
                <span className="font-display font-bold text-base text-[#F4F1EA] block">
                  Verified Speed
                </span>
                <p className="text-base text-[#BFC3C9] leading-relaxed">
                  Sub-second edge transitions and sub-100ms interaction latency.
                </p>
              </div>

              <div className="space-y-1.5">
                <span className="font-display font-bold text-base text-[#F4F1EA] block">
                  Hardened Security
                </span>
                <p className="text-base text-[#BFC3C9] leading-relaxed">
                  Zero hardcoded secrets, strict CSP, and rate-limited API routes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
