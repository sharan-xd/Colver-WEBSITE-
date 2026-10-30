'use client'

import React from 'react'

const processStages = [
  {
    step: 'Phase 1',
    phase: 'Discovery',
    title: 'Workflow Audit & Specification',
    detail: 'We audit business rules, quantify data throughput, and model system boundaries before writing a line of code.',
    artifact: 'System Architecture Specification',
  },
  {
    step: 'Phase 2',
    phase: 'Modeling',
    title: 'Schema Design & UI Contracts',
    detail: 'We define PostgreSQL schemas, strict Zod boundary contracts, and validate clickable interface prototypes with stakeholders.',
    artifact: 'Verified Schemas & UI Contracts',
  },
  {
    step: 'Phase 3',
    phase: 'Engineering',
    title: 'Iterative Sprints & CI Gates',
    detail: 'Modular, strongly-typed Next.js code engineered under test-driven development with minimum 80% test coverage.',
    artifact: 'Production Code & Automated Test Suites',
  },
  {
    step: 'Phase 4',
    phase: 'Deployment',
    title: 'Zero-Downtime Edge Launch',
    detail: 'Hardened Content Security Policy, rate limiting, and real-time monitoring deployed across global edge clusters.',
    artifact: 'Production Release & Live Telemetry',
  },
]

export default function HomeProcessSection() {
  return (
    <section className="py-24 relative bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="pb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <h2 className="font-display font-bold text-3xl sm:text-5xl tracking-tight text-[#F4F1EA] leading-tight">
              Delivery Pipeline.
            </h2>
          </div>
          <p className="text-base sm:text-lg text-[#BFC3C9] max-w-md leading-relaxed">
            Eliminate guesswork. Our structured engineering cadence pairs rapid prototyping with enterprise-grade software craftsmanship.
          </p>
        </div>

        {/* Stepped Process List (Open Editorial Layout, zero boxed cards) */}
        <div className="space-y-4 pt-4">
          {processStages.map((stage) => (
            <div
              key={stage.step}
              className="py-8 flex flex-col md:flex-row md:items-start justify-between gap-6 transition-transform duration-300 hover:translate-x-1 animate-entrance"
            >
              <div className="md:w-1/4 space-y-1">
                <span className="text-sm font-bold text-[#C8FF00] block">
                  {stage.step}
                </span>
                <span className="font-display text-xl sm:text-2xl font-bold text-[#F4F1EA] block">
                  {stage.phase}
                </span>
              </div>

              <div className="md:w-1/2 space-y-2">
                <h3 className="font-display text-lg sm:text-xl font-bold text-[#F4F1EA]">
                  {stage.title}
                </h3>
                <p className="text-base text-[#BFC3C9] leading-relaxed">
                  {stage.detail}
                </p>
              </div>

              <div className="md:w-1/4 text-sm md:text-right space-y-1">
                <span className="text-sm text-[#8E929A] block">Verified Deliverable</span>
                <span className="text-base font-semibold text-[#F4F1EA] block">
                  {stage.artifact}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Verification Summary with Real Pipeline Telemetry Screenshot */}
        <div className="mt-12 p-8 bg-[#121212] rounded-[2px] space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-base">
            <div className="flex items-center gap-2 text-[#F4F1EA] font-semibold">
              <span className="w-2.5 h-2.5 rounded-full bg-[#C8FF00] animate-pulse" />
              <span>Continuous Delivery & Verification Gate</span>
            </div>
            <span className="text-sm sm:text-base text-[#C8FF00] font-medium">
              Automated Verification: All 21 App Routes Green
            </span>
          </div>

          {/* Real Raster Pipeline Screenshot */}
          <div className="relative aspect-[16/8] w-full rounded-[2px] overflow-hidden bg-[#0d0d0d]">
            <img
              src="/projects/pipeline.jpg"
              alt="Automated CI/CD Verification Telemetry"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2 text-base">
            <div className="space-y-1 p-4 bg-[#0a0a0a] rounded-[2px]">
              <span className="text-sm text-[#8E929A] block">
                Type System
              </span>
              <div className="text-lg font-bold text-[#F4F1EA]">TypeScript 5 Strict</div>
              <div className="text-sm text-[#C8FF00]">0 Type Errors</div>
            </div>

            <div className="space-y-1 p-4 bg-[#0a0a0a] rounded-[2px]">
              <span className="text-sm text-[#8E929A] block">
                Compiler Engine
              </span>
              <div className="text-lg font-bold text-[#F4F1EA]">Next.js 16 App Router</div>
              <div className="text-sm text-[#F4F1EA]">Sub-5s Production Build</div>
            </div>

            <div className="space-y-1 p-4 bg-[#0a0a0a] rounded-[2px]">
              <span className="text-sm text-[#8E929A] block">
                Security Headers
              </span>
              <div className="text-lg font-bold text-[#F4F1EA]">Hardened CSP & CORS</div>
              <div className="text-sm text-[#C8FF00]">A+ Security Score</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
