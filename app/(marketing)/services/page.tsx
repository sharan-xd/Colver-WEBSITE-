import React from 'react'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
} from '@/components/ui/Icons'
import { ServicesJsonLd, BreadcrumbsJsonLd } from '@/components/seo/JsonLd'

export const metadata: Metadata = {
  title: 'Software Services & Engineering Capabilities | Colver',
  description:
    'Custom software development, web applications, e-commerce platforms, operations systems, and AI workflows tailored to business needs.',
  alternates: {
    canonical: 'https://colver.in/services',
  },
  openGraph: {
    title: 'Software Engineering Services & Capabilities | Colver',
    description:
      'Custom software development, high-performance web apps, e-commerce platforms, operations systems, and AI workflows.',
    url: 'https://colver.in/services',
    siteName: 'Colver',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Colver Software Engineering Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Software Engineering Services & Capabilities | Colver',
    description:
      'Custom software, web applications, e-commerce platforms, and AI workflows engineered for business scale.',
    images: ['/og-image.png'],
  },
}

interface ServiceSpec {
  id: string
  title: string
  category: string
  headline: string
  description: string
  image: string
  imageAlt: string
  metrics: { label: string; value: string }[]
  problemsSolved: string[]
  deliverables: string[]
  stack: string[]
}

const serviceSpecs: ServiceSpec[] = [
  {
    id: 'custom-erp',
    title: 'Custom ERP & Core Operations',
    category: 'Operational Core',
    headline: 'Bespoke operational backbones replacing fragile spreadsheet silos.',
    description:
      'Tailored internal tooling, multi-department approval engines, and role-based workflows built exactly around proprietary logistics and supply chains.',
    image: '/projects/nexus.jpg',
    imageAlt: 'Nexus ERP Production Console Interface',
    metrics: [
      { label: 'System throughput', value: '45k events/sec' },
      { label: 'Sync latency', value: '18ms p99' },
    ],
    problemsSolved: [
      'Fragmented operational data scattered across spreadsheets',
      'Multi-department approval bottlenecks and audit failures',
      'Excessive per-seat licensing costs of legacy vendor packages',
    ],
    deliverables: [
      'Multi-tenant administrative operational console',
      'Granular RBAC access controls & audit logging',
      'Automated batch processors and real-time ledger export',
    ],
    stack: ['TypeScript', 'Next.js', 'PostgreSQL', 'Prisma', 'Docker'],
  },
  {
    id: 'web-platforms',
    title: 'High-Concurrency Web Systems',
    category: 'Digital Platforms',
    headline: 'Low-latency customer portals and mission-critical cloud dashboards.',
    description:
      'Sub-second transactional applications engineered for high concurrent traffic, dynamic state synchronization, and zero-downtime reliability.',
    image: '/projects/apex.jpg',
    imageAlt: 'Apex Commerce Cloud Architecture Interface',
    metrics: [
      { label: 'Page load speed', value: '140ms LCP' },
      { label: 'Uptime availability', value: '99.99%' },
    ],
    problemsSolved: [
      'Legacy web portals crashing during peak promotional traffic',
      'Sluggish interaction latency causing customer drop-off',
      'High server infrastructure costs from unoptimized query cascades',
    ],
    deliverables: [
      'Server-rendered Next.js web applications',
      'Real-time WebSocket data synchronization channels',
      'Optimized edge caching with sub-second API responses',
    ],
    stack: ['React', 'Next.js 16', 'Node.js', 'Redis', 'Tailwind CSS'],
  },
  {
    id: 'transaction-rails',
    title: 'Commerce & Transaction Rails',
    category: 'Transaction Core',
    headline: 'High-integrity payment pipelines with automated reconciliation.',
    description:
      'Unified payment gateway integrations, instantaneous UPI payment handling, automated GST tax receipting, and multi-warehouse inventory sync.',
    image: '/projects/pulse.jpg',
    imageAlt: 'Pulse Telemetry Transaction Monitoring Stream',
    metrics: [
      { label: 'UPI success rate', value: '99.85%' },
      { label: 'Reconciliation', value: 'Real-time' },
    ],
    problemsSolved: [
      'Payment drop-offs caused by friction in standard checkout forms',
      'Accounting discrepancies between bank webhooks and order states',
      'Inventory over-selling across multi-channel retail storefronts',
    ],
    deliverables: [
      'Custom frictionless checkout flows with instant UPI rails',
      'Automated invoice generation & GST-compliant receipting',
      'Real-time multi-warehouse inventory reservation locks',
    ],
    stack: ['Razorpay SDK', 'Stripe API', 'PostgreSQL', 'Redis Queue'],
  },
  {
    id: 'ai-automation',
    title: 'AI Data Extraction & Automation',
    category: 'Intelligent Automation',
    headline: 'Pragmatic machine intelligence eliminating manual data entry.',
    description:
      'Deterministic document parsing pipelines converting unstructured supplier invoices, PDF receipts, and shipping manifests into validated database records.',
    image: '/projects/aura.jpg',
    imageAlt: 'Aura AI Cognitive Parsing Stream',
    metrics: [
      { label: 'OCR accuracy rate', value: '99.4%' },
      { label: 'Processing time', value: '450ms / doc' },
    ],
    problemsSolved: [
      'Hundreds of manual employee hours lost parsing physical invoices',
      'Human data entry mistakes causing inventory and accounting errors',
      'Customer support teams bogged down by routine status tickets',
    ],
    deliverables: [
      'Deterministic OCR and document intelligence pipelines',
      'Domain-tuned support automation with strict grounding bounds',
      'Automated email and webhook dispatch workflows',
    ],
    stack: ['Python', 'FastAPI', 'Claude API', 'pgvector', 'TypeScript'],
  },
  {
    id: 'api-infrastructure',
    title: 'Enterprise API & Gateway Mesh',
    category: 'Integration Layer',
    headline: 'Secure, typed communication layers connecting distributed services.',
    description:
      'High-throughput REST and GraphQL gateways linking core ERP databases, logistics partner carriers, and third-party SaaS systems seamlessly.',
    image: '/projects/pipeline.jpg',
    imageAlt: 'Continuous Automated Verification Pipeline',
    metrics: [
      { label: 'Request throughput', value: '60,000 req/s' },
      { label: 'Network error rate', value: '< 0.001%' },
    ],
    problemsSolved: [
      'Siloed software applications incapable of secure communication',
      'Unindexed legacy queries causing database locking and timeouts',
      'Lack of granular rate limiting exposing systems to abuse',
    ],
    deliverables: [
      'High-throughput API gateway with token-bucket rate limiting',
      'Carrier shipping logistics connectors (Shiprocket, Delhivery)',
      'Typed OpenAPI contracts with automated client SDK generation',
    ],
    stack: ['Node.js', 'Express', 'Redis', 'PostgreSQL', 'Docker'],
  },
]

const deliveryCadence = [
  {
    stage: '01',
    phase: 'Architecture Blueprint',
    duration: 'Week 1–2',
    description:
      'Deep operational audit of workflows and bottlenecks. We architect schema contracts, state machines, and interface prototypes for full alignment before writing code.',
  },
  {
    stage: '02',
    phase: 'Core Engine Sprint',
    duration: 'Week 3–5',
    description:
      'Rapid engineering of the transactional database, core business logic, and API endpoints. Live staging previews updated on every commit with continuous test runs.',
  },
  {
    stage: '03',
    phase: 'Interface & Integration',
    duration: 'Week 6–7',
    description:
      'Frontend implementation with Swiss typography, sub-second client transitions, and secure integration with payment gateways, carriers, and hardware scanners.',
  },
  {
    stage: '04',
    phase: 'Verification & Release',
    duration: 'Week 8',
    description:
      'Stress testing, security hardening, and zero-downtime production deployment. Includes hands-on team onboarding and complete intellectual property transfer.',
  },
]

export default function ServicesPage() {
  return (
    <div className="py-8 sm:py-16 space-y-24 md:space-y-36">
      <ServicesJsonLd />
      <BreadcrumbsJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services' },
        ]}
      />

      {/* Hero Section — Prominent Display Typography + Large Architecture Specimen */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 animate-entrance">
            <h1 className="font-display font-extrabold text-5xl sm:text-7xl lg:text-[84px] tracking-tight text-[#F4F1EA] leading-[0.98] uppercase">
              Engineered Systems.
            </h1>
            <p className="text-lg sm:text-xl text-[#F4F1EA] font-medium leading-relaxed max-w-xl">
              Bespoke operations software, transaction rails, and cloud architecture engineered for business scale.
            </p>
            <p className="text-base text-[#BFC3C9] leading-relaxed max-w-xl">
              From tailored internal software to high-concurrency payment pipelines, we architect and ship production digital infrastructure eliminating your operational bottlenecks.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link href="/contact">
                <button
                  type="button"
                  className="h-12 px-7 rounded-[2px] bg-[#C8FF00] hover:bg-[#b8ea00] text-black font-semibold text-base tracking-wide flex items-center justify-center gap-2.5 transition-all cursor-pointer"
                >
                  <span>Discuss Your Architecture</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
              <Link href="/showcase">
                <button
                  type="button"
                  className="h-12 px-6 rounded-[2px] bg-[#141414] hover:bg-[#1a1a1a] text-[#F4F1EA] font-semibold text-base tracking-wide flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <span>Explore Work</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 animate-entrance stagger-1">
            <div className="relative aspect-[4/3] w-full rounded-[2px] overflow-hidden bg-[#101010]">
              <Image
                src="/projects/architecture.jpg"
                alt="Colver Architecture Topology Blueprint"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-sm font-mono text-[#F4F1EA] px-3 py-2 bg-[#080808] rounded-[2px]">
                <span className="text-[#C8FF00]">High-concurrency mesh topology</span>
                <span>Verified 99.99%</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section — Open Editorial Layout with Real Raster Interface Fragments */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6">
          <div className="space-y-3 max-w-xl animate-entrance">
            <h2 className="font-display font-bold text-3xl sm:text-5xl tracking-tight text-[#F4F1EA] leading-tight">
              Capabilities.
            </h2>
          </div>
          <p className="text-base text-[#BFC3C9] max-w-md leading-relaxed animate-entrance stagger-1">
            Every system is custom-engineered to eliminate operational bottlenecks, ensure absolute uptime, and provide 100% intellectual property ownership.
          </p>
        </div>

        <div className="space-y-24 md:space-y-32">
          {serviceSpecs.map((service) => {
            return (
              <article
                key={service.id}
                id={service.id}
                className="scroll-mt-28 grid lg:grid-cols-12 gap-8 lg:gap-14 items-start animate-entrance"
              >
                {/* Narrative Specification Column */}
                <div className="lg:col-span-6 space-y-6">
                  <div className="space-y-2">
                    <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#F4F1EA]">
                      {service.title}
                    </h3>
                    <p className="text-base font-semibold text-[#C8FF00]">
                      {service.headline}
                    </p>
                  </div>

                  <p className="text-base text-[#BFC3C9] leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-3 pt-2">
                    <span className="text-sm font-semibold text-[#F4F1EA] block">
                      Target Deliverables
                    </span>
                    <ul className="space-y-2 text-base text-[#F4F1EA]">
                      {service.deliverables.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 leading-relaxed">
                          <CheckCircle2 className="w-5 h-5 text-[#C8FF00] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2 flex flex-wrap items-center gap-2 text-sm text-[#8E929A]">
                    <span className="text-[#C8FF00] font-semibold">Tech stack:</span>
                    {service.stack.map((tech) => (
                      <span key={tech} className="px-2.5 py-1 bg-[#141414] text-[#BFC3C9] rounded-[2px]">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="pt-2">
                    <Link
                      href={`/contact?service=${encodeURIComponent(service.title)}`}
                      className="inline-flex items-center gap-2 text-base font-semibold text-[#C8FF00] hover:text-[#b8ea00] transition-colors"
                    >
                      <span>Architect this system</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                {/* Visual Interface Column */}
                <div className="lg:col-span-6 space-y-3">
                  <div className="relative aspect-[16/10] w-full rounded-[2px] overflow-hidden bg-[#101010]">
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/90 via-transparent to-transparent" />
                    <div className="absolute top-3 left-3 px-3 py-1 bg-[#080808] rounded-[2px] text-sm font-medium text-[#C8FF00]">
                      {service.category}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 pt-1">
                    {service.metrics.map((m) => (
                      <div key={m.label} className="p-3.5 bg-[#101010] rounded-[2px]">
                        <span className="text-sm text-[#8E929A] block font-medium">{m.label}</span>
                        <span className="text-base font-bold text-[#F4F1EA] font-mono">{m.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </section>

      {/* Delivery Cadence Section — Open Editorial Stepped Layout */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6">
          <div className="space-y-3 max-w-xl animate-entrance">
            <h2 className="font-display font-bold text-3xl sm:text-5xl tracking-tight text-[#F4F1EA] leading-tight">
              Delivery Cadence.
            </h2>
          </div>
          <p className="text-base text-[#BFC3C9] max-w-md leading-relaxed animate-entrance stagger-1">
            Every business system ships in structured milestone cycles with demonstrable builds and transparent staging deployments.
          </p>
        </div>

        <div className="space-y-6 pt-2">
          {deliveryCadence.map((step, idx) => (
            <div
              key={step.phase}
              className={`py-8 flex flex-col md:flex-row md:items-start justify-between gap-6 transition-transform duration-300 hover:translate-x-1 animate-entrance stagger-${idx + 1}`}
            >
              <div className="md:w-1/4 space-y-1">
                <span className="text-sm font-semibold text-[#C8FF00] block">
                  Stage {step.stage} // {step.duration}
                </span>
                <span className="font-display text-2xl font-bold text-[#F4F1EA] block">
                  {step.phase}
                </span>
              </div>
              <div className="md:w-3/4 space-y-2">
                <p className="text-base text-[#BFC3C9] leading-relaxed max-w-2xl">
                  {step.description}
                </p>
              </div>
            </div>
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
              Schedule an engineering scoping consultation. We analyze your requirements and provide an actionable architecture plan within 48 hours.
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
