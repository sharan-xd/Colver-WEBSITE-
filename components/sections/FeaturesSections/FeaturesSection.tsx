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
  ArrowRight,
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
      <div className="text-center max-w-3xl mx-auto px-4">
        <Badge variant="purple" dot className="mb-4">
          Capabilities Architecture
        </Badge>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
          Everything you need to
          <span className="text-gradient block mt-1">build and ship faster</span>
        </h1>
        <p className="text-base sm:text-lg text-muted leading-relaxed">
          A cohesive engineering toolkit engineered for modern product teams. From initial prototyping to enterprise scale, Colver eliminates context switching.
        </p>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`
                px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-150 cursor-pointer
                ${
                  selectedCategory === cat
                    ? 'bg-primary text-white shadow-sm shadow-primary/20'
                    : 'bg-surface/70 hover:bg-surface text-muted hover:text-foreground border border-border/60'
                }
              `}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredFeatures.map((feature) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="group p-6 sm:p-7 rounded-2xl glass-card border border-border/60 hover:border-primary/40 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-surface border border-border text-muted">
                      {feature.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold mb-2.5 tracking-tight text-foreground group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-muted leading-relaxed text-xs sm:text-sm">
                    {feature.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-border/40 flex items-center justify-between text-xs text-muted">
                  <span className="font-mono text-[11px]">{feature.category}</span>
                  <span className="text-primary font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Inspect <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Technical Specifications Matrix */}
      <div className="max-w-5xl mx-auto px-4">
        <div className="rounded-3xl glass-panel border border-border overflow-hidden">
          <div className="p-6 sm:p-8 border-b border-border/60 bg-surface/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-primary font-bold">
                Benchmark Comparison
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mt-1">
                Colver Architecture vs. Traditional Stacks
              </h2>
            </div>
            <Link href="/contact">
              <Button size="sm" variant="outline">
                Request Tech Spec
              </Button>
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-surface/50 border-b border-border/40 text-muted font-semibold">
                <tr>
                  <th className="py-3.5 px-6">Metric / Capability</th>
                  <th className="py-3.5 px-6 text-primary">Colver Engine</th>
                  <th className="py-3.5 px-6 text-muted">Legacy CMS / Frameworks</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/30 text-foreground">
                {[
                  ['Time to Interactive (TTI)', '< 120 ms', '600 ms – 1.8 s'],
                  ['Core Web Vitals Pass Rate', '100% Guaranteed', '45% – 68% average'],
                  ['Edge Deployment Locations', '200+ Global Anycast', 'Single region or complex CDN setup'],
                  ['Type Safety & Schema Validation', 'Full End-to-End TypeScript', 'Manual validation & runtime errors'],
                  ['AI Agent Orchestration', 'Native & Event-Driven', 'External third-party patchwork'],
                ].map(([capability, colver, legacy]) => (
                  <tr key={capability} className="hover:bg-surface/30 transition-colors">
                    <td className="py-3.5 px-6 font-medium text-foreground">{capability}</td>
                    <td className="py-3.5 px-6 text-emerald-400 font-semibold flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{colver}</span>
                    </td>
                    <td className="py-3.5 px-6 text-muted">{legacy}</td>
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
