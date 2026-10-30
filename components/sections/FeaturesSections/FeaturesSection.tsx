'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Section, { FadeInView, StaggerContainer, StaggerItem } from '@/components/Section'
import {
  Cpu,
  RefreshCw,
  ShieldCheck,
  Globe,
  GitBranch,
  Code2,
  Activity,
  Layers,
  Zap,
  CheckCircle2
} from 'lucide-react'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'

const allFeatures = [
  {
    title: 'AI-Powered Orchestration',
    description: 'Leverage cutting-edge AI models to automate repetitive code generation, data migrations, and creative design tokens.',
    category: 'Core Intelligence',
    icon: Cpu,
    badge: 'Neural Engine',
  },
  {
    title: 'Real-time State Sync',
    description: 'Collaborate seamlessly with multi-cursor teamwork. State changes synchronize predictably across all edge instances.',
    category: 'Infrastructure',
    icon: RefreshCw,
    badge: 'Sub-50ms',
  },
  {
    title: 'Enterprise Security',
    description: 'Bank-grade AES-256 encryption, hardened CSP rules, granular role-based permissions, and automated compliance auditing.',
    category: 'Security',
    icon: ShieldCheck,
    badge: 'SOC2 Type II',
  },
  {
    title: 'Global Anycast CDN',
    description: 'Lightning-fast asset routing and HTML edge caching in 200+ Tier-1 data centers worldwide with automatic failover.',
    category: 'Infrastructure',
    icon: Globe,
    badge: 'Edge SLA',
  },
  {
    title: 'Deterministic Version Control',
    description: 'Track every asset, token, and database migration with point-in-time rollbacks, atomic branching, and instant previews.',
    category: 'Infrastructure',
    icon: GitBranch,
    badge: 'Git-Native',
  },
  {
    title: 'Extensible API-First Core',
    description: 'Integrate existing microservices effortlessly using typed GraphQL schemas, REST webhooks, and OpenAPI SDKs.',
    category: 'Core Intelligence',
    icon: Code2,
    badge: 'TypeScript SDK',
  },
  {
    title: 'Continuous Telemetry & Vitals',
    description: 'Real-time performance metrics tracking LCP, FID, CLS, and API latency directly inside your dashboard.',
    category: 'Infrastructure',
    icon: Activity,
    badge: 'Real-time',
  },
  {
    title: 'Atomic Component Architecture',
    description: 'Composable UI primitives designed with strict accessibility (WCAG AA), fluid animations, and zero CSS bloat.',
    category: 'Core Intelligence',
    icon: Layers,
    badge: 'Tailwind 3.4',
  },
  {
    title: 'Zero Cold-Start Runtime',
    description: 'Optimized serverless edge compute handles traffic spikes gracefully with instantaneous responses.',
    category: 'Infrastructure',
    icon: Zap,
    badge: 'High Concurrency',
  },
]

const categories = ['All', 'Core Intelligence', 'Infrastructure', 'Security']

export default function FeaturesSection() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredFeatures =
    selectedCategory === 'All'
      ? allFeatures
      : allFeatures.filter((f) => f.category === selectedCategory)

  return (
    <div className="py-6 sm:py-10 space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto px-4 pt-4 sm:pt-8">
        <h1 className="text-3xl sm:text-5xl lg:text-[48px] font-bold tracking-tight mb-4 leading-tight text-foreground">
          Platform Architecture & Engineering Capabilities
        </h1>
        <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
          A cohesive engineering toolkit built for modern product and operations teams. From architecture audit to enterprise scale, Colver eliminates context switching.
        </p>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`
                px-3.5 py-1.5 rounded-md text-sm font-medium transition-colors cursor-pointer
                ${
                  selectedCategory === cat
                    ? 'bg-surface text-foreground font-semibold'
                    : 'text-slate-400 hover:text-foreground hover:bg-surface/50'
                }
              `}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Capabilities index */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFeatures.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="p-6 rounded-xl bg-card space-y-4"
              >
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 rounded-lg bg-surface flex items-center justify-center text-blue-400">
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <span className="text-[13px] font-semibold text-blue-400">
                    {feature.badge}
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Technical Specifications Matrix */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-10 rounded-xl bg-card space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-[13px] uppercase tracking-wide text-blue-400 font-bold block">
                Benchmark Comparison
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mt-1">
                Colver Architecture vs. Traditional Stacks
              </h2>
            </div>
            <Link href="/contact">
              <Button size="sm" variant="primary">
                Request Tech Spec
              </Button>
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-surface text-slate-300 font-semibold">
                <tr>
                  <th className="py-3.5 px-6">Metric / Capability</th>
                  <th className="py-3.5 px-6 text-blue-400">Colver Engine</th>
                  <th className="py-3.5 px-6 text-slate-400">Legacy CMS / Frameworks</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/20 text-foreground">
                {[
                  ['Time to Interactive (TTI)', '< 120 ms', '600 ms – 1.8 s'],
                  ['Core Web Vitals Pass Rate', '100% Guaranteed', '45% – 68% average'],
                  ['Edge Deployment Locations', '200+ Global Anycast', 'Single region or complex CDN setup'],
                  ['Type Safety & Schema Validation', 'Full End-to-End TypeScript', 'Manual validation & runtime errors'],
                  ['AI Agent Orchestration', 'Native & Event-Driven', 'External third-party patchwork'],
                ].map(([capability, colver, legacy]) => (
                  <tr key={capability} className="hover:bg-surface/40 transition-colors">
                    <td className="py-3.5 px-6 font-medium text-foreground">{capability}</td>
                    <td className="py-3.5 px-6 text-emerald-400 font-semibold flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{colver}</span>
                    </td>
                    <td className="py-3.5 px-6 text-slate-400">{legacy}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
