'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ArrowUpRight, CheckCircle2 } from '@/components/ui/Icons'

const projects = [
  {
    id: 'nexus',
    title: 'Nexus Workflow Engine',
    category: 'Operations & Logistics',
    headline: 'Unified operational canvas syncing inventory and multi-hub approval workflows.',
    description:
      'A multi-warehouse operational engine engineered for 14 physical distribution hubs. Replaces legacy spreadsheet silos with real-time stock deductions, pessimistic inventory locking, and immutable audit logs.',
    metrics: '4.8x Faster Iteration Cycles',
    latency: 'Sub-40ms Edge Sync',
    image: '/projects/nexus.jpg',
    tags: ['Next.js 16', 'TypeScript', 'PostgreSQL 16', 'Redis Queues', 'Docker'],
    achievements: [
      'Multi-region deterministic state synchronization',
      'Pessimistic locking preventing warehouse allocation collisions',
      'Zero unhandled exceptions over 1.2M daily transactions',
    ],
  },
  {
    id: 'apex',
    title: 'Apex Transaction Core',
    category: 'Commerce Infrastructure',
    headline: 'Headless transactional engine processing 40,000 req/min with zero double-spend.',
    description:
      'High-throughput direct-to-consumer and wholesale checkout engine with automated Indian GST tax calculations, instant Razorpay UPI authorization, and fail-safe webhook dead-letter queues.',
    metrics: '99.999% Payment Reliability',
    latency: 'Sub-90ms Global Finality',
    image: '/projects/apex.jpg',
    tags: ['Razorpay UPI', 'Stripe Elements', 'Edge Redis', 'FastAPI', 'Tailwind CSS'],
    achievements: [
      'Sub-180ms UPI authorization latency',
      'Automated digitally signed GST tax compliance invoices',
      'Idempotent payment tokens eliminating double-spend risk',
    ],
  },
  {
    id: 'pulse',
    title: 'Pulse Observability Portal',
    category: 'Telemetry & Systems',
    headline: 'Enterprise telemetry dashboard streaming Web Vitals and error budgets in real-time.',
    description:
      'Real-time observability platform monitoring 2.4M active client sessions across South Asia edge clusters. Streams Web Vitals, API error rates, and connection pool saturation without client DOM thrashing.',
    metrics: 'Sub-50ms Metric Refresh',
    latency: 'Zero Layout Shift',
    image: '/projects/pulse.jpg',
    tags: ['WebSockets', 'ClickHouse', 'TypeScript', 'Edge Workers', 'Data Visualization'],
    achievements: [
      'Sub-50ms metric streaming directly from ClickHouse cluster',
      'Automated SLA threshold alerts and incident paging',
      'Continuous Core Web Vitals telemetry logging',
    ],
  },
  {
    id: 'aura',
    title: 'Aura Architectural Tokens',
    category: 'Design Engineering',
    headline: 'Universal component library with accessible ARIA state machines and zero runtime overhead.',
    description:
      'Bespoke design system with dynamic tokens, WCAG AAA compliance, and bidirectional Figma sync. Engineered for engineering teams demanding pixel-level precision with zero runtime bundle overhead.',
    metrics: 'WCAG AAA Compliant',
    latency: '0kb Runtime Overhead',
    image: '/projects/aura.jpg',
    tags: ['Design Tokens', 'Framer Motion', 'Radix Primitives', 'Tailwind CSS'],
    achievements: [
      '18.2:1 contrast ratio exceeding WCAG AAA standards',
      'Accessible keyboard focus traps and screen reader live regions',
      'Automated token generation for web and native targets',
    ],
  },
]

export default function ShowcaseSection() {
  return (
    <div className="py-8 sm:py-16 space-y-24 md:space-y-36">
      {/* Hero Section — Prominent Display Typography + Architecture Topology Preview */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 animate-entrance">
            <h1 className="font-display font-extrabold text-5xl sm:text-7xl lg:text-[84px] tracking-tight text-[#F4F1EA] leading-[0.98] uppercase">
              Proven in Production.
            </h1>
            <p className="text-lg sm:text-xl text-[#F4F1EA] font-medium leading-relaxed max-w-xl">
              High-concurrency systems, transactional commerce platforms, and intelligent workflows shipped with engineering rigor.
            </p>
            <p className="text-base text-[#BFC3C9] leading-relaxed max-w-xl">
              Every case study below represents real production software engineered for Indian businesses, operating under continuous high-traffic load with verified SLA guarantees.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link href="/contact">
                <button
                  type="button"
                  className="h-12 px-7 rounded-[2px] bg-[#C8FF00] hover:bg-[#b8ea00] text-black font-semibold text-base tracking-wide flex items-center justify-center gap-2.5 transition-all cursor-pointer"
                >
                  <span>Initiate Architecture Review</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
              <Link href="/services">
                <button
                  type="button"
                  className="h-12 px-6 rounded-[2px] bg-[#141414] hover:bg-[#1a1a1a] text-[#F4F1EA] font-semibold text-base tracking-wide flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <span>View Services</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 animate-entrance stagger-1">
            <div className="relative aspect-[4/3] w-full rounded-[2px] overflow-hidden bg-[#101010]">
              <Image
                src="/projects/architecture.jpg"
                alt="Production Architecture Topology"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-sm font-mono text-[#F4F1EA] px-3 py-2 bg-[#080808] rounded-[2px]">
                <span className="text-[#C8FF00]">Mesh Topology // Edge Verified</span>
                <span>4 Production Systems</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Production Case Studies — Open Editorial Showcase Stream (Zero Tab Hiding, All Pictures Live) */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6">
          <div className="space-y-3 max-w-xl animate-entrance">
            <h2 className="font-display font-bold text-3xl sm:text-5xl tracking-tight text-[#F4F1EA] leading-tight">
              Selected Systems.
            </h2>
          </div>
          <p className="text-base text-[#BFC3C9] max-w-md leading-relaxed animate-entrance stagger-1">
            Explore complete technical specifications, architectural benchmarks, and real-time operational telemetry from our deployed production portfolio.
          </p>
        </div>

        <div className="space-y-24 md:space-y-32">
          {projects.map((project) => (
            <article
              key={project.id}
              id={project.id}
              className="scroll-mt-28 grid lg:grid-cols-12 gap-8 lg:gap-14 items-start animate-entrance"
            >
              {/* Narrative & Specification Column */}
              <div className="lg:col-span-6 space-y-6">
                <div className="space-y-2">
                  <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#F4F1EA]">
                    {project.title}
                  </h3>
                  <p className="text-base font-semibold text-[#C8FF00]">
                    {project.headline}
                  </p>
                </div>

                <p className="text-base text-[#BFC3C9] leading-relaxed">
                  {project.description}
                </p>

                <div className="space-y-3 pt-2">
                  <span className="text-sm font-semibold text-[#F4F1EA] block">
                    Architectural Benchmarks
                  </span>
                  <ul className="space-y-2 text-base text-[#F4F1EA]">
                    {project.achievements.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 leading-relaxed">
                        <CheckCircle2 className="w-5 h-5 text-[#C8FF00] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-2 text-sm text-[#8E929A]">
                  <span className="text-[#C8FF00] font-semibold">Tech stack:</span>
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 bg-[#141414] text-[#BFC3C9] rounded-[2px]">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-2">
                  <Link
                    href={`/contact?project=${encodeURIComponent(project.title)}`}
                    className="inline-flex items-center gap-2 text-base font-semibold text-[#C8FF00] hover:text-[#b8ea00] transition-colors"
                  >
                    <span>Consult on similar architecture</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Visual Interface & Metrics Column */}
              <div className="lg:col-span-6 space-y-3">
                <div className="relative aspect-[16/10] w-full rounded-[2px] overflow-hidden bg-[#101010]">
                  <Image
                    src={project.image}
                    alt={`${project.title} Production Architecture Specimen`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/90 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3 px-3 py-1 bg-[#080808] rounded-[2px] text-sm font-medium text-[#C8FF00]">
                    {project.category}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-1">
                  <div className="p-3.5 bg-[#101010] rounded-[2px]">
                    <span className="text-sm text-[#8E929A] block font-medium">Performance benchmark</span>
                    <span className="text-base font-bold text-[#F4F1EA] font-mono">{project.metrics}</span>
                  </div>
                  <div className="p-3.5 bg-[#101010] rounded-[2px]">
                    <span className="text-sm text-[#8E929A] block font-medium">Edge sync latency</span>
                    <span className="text-base font-bold text-[#C8FF00] font-mono">{project.latency}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Closing CTA */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-entrance">
        <div className="p-8 sm:p-14 rounded-[2px] bg-[#101010] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight text-[#F4F1EA] leading-tight">
              Initiate Architecture.
            </h2>
            <p className="text-base text-[#BFC3C9] leading-relaxed">
              Have a high-throughput system or transaction rail in mind? Our team will audit your volume demands and outline a concrete implementation roadmap within 48 hours.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Link href="/contact">
              <button
                type="button"
                className="h-12 px-8 rounded-[2px] bg-[#C8FF00] hover:bg-[#b8ea00] text-black font-semibold text-base tracking-wide flex items-center justify-center gap-2.5 transition-all cursor-pointer"
              >
                <span>Request Scoping Call</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
            <Link href="/pricing">
              <button
                type="button"
                className="h-12 px-6 rounded-[2px] bg-[#181818] hover:bg-[#222222] text-[#F4F1EA] font-semibold text-base tracking-wide flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <span>Review Sprint Rates</span>
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
