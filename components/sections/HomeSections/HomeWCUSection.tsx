'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight } from '@/components/ui/Icons'

const comparisons = [
  {
    criterion: 'System Architecture',
    agency: 'Bloated third-party themes, unvalidated inputs, tangled spaghetti code, vendor lock-in.',
    colver: 'Custom Next.js App Router, strict TypeScript contracts, modular domain boundaries, full client code ownership.',
  },
  {
    criterion: 'Runtime Performance',
    agency: 'Multi-second page loads, heavy layout shifts, unoptimized bundles, lagging database queries.',
    colver: 'Sub-second edge transitions, sub-100ms INP, sub-15ms database query targets, minimal bundle payload.',
  },
  {
    criterion: 'Boundary Security',
    agency: 'Permissive default headers, hardcoded credentials, unshielded endpoints, zero rate limiting.',
    colver: 'Cloudflare audited, strict Content Security Policy, rate-limited edge endpoints, zero hardcoded secrets.',
  },
  {
    criterion: 'Delivery & Handoff',
    agency: 'Dumped zip archive with zero automated tests, broken documentation, and missing migration scripts.',
    colver: 'Clean Git history, 80%+ automated test suites, complete API schema contracts, and ongoing support.',
  },
]

export default function HomeWCUSection() {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="pb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-xl">
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#F4F1EA] leading-tight">
              Engineered for Longevity.
            </h2>
          </div>
          <p className="text-base text-[#BFC3C9] max-w-md leading-relaxed">
            We build software designed to scale with your business—technically, operationally, and commercially.
          </p>
        </div>

        {/* Stark Editorial Comparison Table */}
        <div className="space-y-3 pt-4">
          {/* Table Header */}
          <div className="grid grid-cols-1 md:grid-cols-12 p-4 bg-[#141414] rounded-[2px] text-base font-semibold text-[#8E929A]">
            <div className="md:col-span-3 text-[#F4F1EA]">Engineering Criterion</div>
            <div className="md:col-span-4 mt-2 md:mt-0 text-[#8E929A]">Typical Agency Delivery</div>
            <div className="md:col-span-5 mt-2 md:mt-0 text-[#C8FF00]">Colver Production Engineering</div>
          </div>

          {/* Table Rows */}
          <div className="space-y-1">
            {comparisons.map((row, idx) => (
              <div
                key={row.criterion}
                className={`grid grid-cols-1 md:grid-cols-12 p-6 rounded-[2px] gap-3 sm:gap-4 items-start hover:bg-[#141414] transition-all duration-200 animate-entrance ${
                  idx % 2 === 0 ? 'bg-[#0f0f0f]' : 'bg-transparent'
                }`}
              >
                <div className="md:col-span-3 font-display font-bold text-lg text-[#F4F1EA]">
                  {row.criterion}
                </div>
                <div className="md:col-span-4 text-base text-[#BFC3C9] leading-relaxed">
                  {row.agency}
                </div>
                <div className="md:col-span-5 text-base text-[#F4F1EA] font-medium leading-relaxed">
                  {row.colver}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Studio Manifesto Callout */}
        <div className="mt-12 p-8 bg-[#141414] rounded-[2px] flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <p className="font-display font-bold text-xl sm:text-2xl text-[#F4F1EA] tracking-tight">
              We never ship code we would not run our own business on.
            </p>
            <p className="text-base text-[#BFC3C9] leading-relaxed">
              Every system delivered by Colver includes full intellectual property transfer, unminified source code, schema migration scripts, and direct architect access.
            </p>
          </div>
          <Link href="/about" className="shrink-0">
            <button
              type="button"
              className="h-11 px-6 rounded-[2px] bg-[#181818] hover:bg-[#222222] text-[#F4F1EA] text-base font-medium flex items-center gap-2 transition-colors cursor-pointer"
            >
              <span>Read Studio Manifesto</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
