'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  ExternalLink, 
  Terminal, 
  Activity, 
  Cpu, 
  Layers, 
  Zap, 
  Shield 
} from 'lucide-react'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'

const projects = [
  {
    title: 'Nexus Workflow Engine',
    category: 'AI Platform',
    description: 'Autonomous orchestration canvas syncing code changes, design tokens, and live test suites across distributed teams.',
    metrics: '4.8x Faster Iterations',
    tags: ['React Three Fiber', 'Next.js 16', 'TypeScript', 'Edge AI'],
    activeTab: 'Canvas View',
  },
  {
    title: 'Apex Global Commerce',
    category: 'E-Commerce',
    description: 'Headless multi-currency storefront processing 40,000 requests/minute with sub-100ms international checkout latency.',
    metrics: '99.999% Availability',
    tags: ['Stripe Elements', 'Edge Caching', 'Tailwind CSS'],
    activeTab: 'Checkout Flow',
  },
  {
    title: 'Pulse Telemetry Portal',
    category: 'Enterprise SaaS',
    description: 'Enterprise observability dashboard streaming Web Vitals, API error budgets, and real-time user session replays.',
    metrics: 'Sub-50ms Refresh',
    tags: ['WebSockets', 'GSAP', 'Data Visualization'],
    activeTab: 'Metrics Feed',
  },
  {
    title: 'Aura Design System',
    category: 'Design Engineering',
    description: 'Universal component library with native glassmorphism tokens, accessible ARIA primitives, and Figma code-sync.',
    metrics: 'WCAG AAA Compliant',
    tags: ['Design Tokens', 'Framer Motion', 'Radix Primitives'],
    activeTab: 'Token Inspector',
  },
]

export default function ShowcaseSection() {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0)
  const currentProject = projects[activeProjectIndex]

  return (
    <div className="py-6 sm:py-10 space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto px-4 pt-4 sm:pt-8">
        <h1 className="text-3xl sm:text-5xl lg:text-[48px] font-bold tracking-tight mb-4 leading-tight text-foreground">
          Engineered with Colver. Proven in Production.
        </h1>
        <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
          Explore high-performance business applications, transactional commerce platforms, and intelligent workflows shipped using Colver architecture.
        </p>
      </div>

      {/* Main Interactive Showcase Console */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-xl bg-card overflow-hidden">
          {/* Top Bar with Project Switcher */}
          <div className="p-4 bg-surface flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2 overflow-x-auto">
              {projects.map((p, idx) => (
                <button
                  key={p.title}
                  type="button"
                  onClick={() => setActiveProjectIndex(idx)}
                  className={`px-3.5 py-1.5 rounded-md text-sm font-medium transition-colors cursor-pointer ${activeProjectIndex === idx ? 'bg-card text-foreground font-semibold' : 'text-slate-400 hover:text-foreground'}`}
                >
                  {p.title.split(' ')[0]}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2 text-sm text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Production Live Preview</span>
            </div>
          </div>

          {/* Interactive Showcase Preview Panel */}
          <div className="p-6 sm:p-10 grid lg:grid-cols-2 gap-10 items-center">
            {/* Left: Project Details */}
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="text-[13px] font-semibold text-blue-400">{currentProject.category}</span>
                  <span className="text-[13px] text-emerald-400 font-semibold">
                    {currentProject.metrics}
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
                  {currentProject.title}
                </h2>
                <p className="text-base text-slate-300 leading-relaxed">
                  {currentProject.description}
                </p>
              </div>

              {/* Feature Checklist */}
              <div className="space-y-2.5 pt-2">
                {[
                  'Multi-region deterministic state persistence',
                  'Automated security headers & CSP enforcement',
                  'Lighthouse 100 Performance & SEO verified',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5 text-sm text-foreground">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {currentProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded bg-surface text-[13px] font-medium text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex items-center gap-3">
                <Link href="/contact">
                  <Button variant="primary" iconRight={<ArrowRight className="w-4 h-4" />}>
                    Request Full Walkthrough
                  </Button>
                </Link>
                <Link href="/features">
                  <Button variant="secondary">
                    Architecture Specs
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right: Simulated System Viewport */}
            <div className="rounded-xl bg-surface overflow-hidden">
              {/* Window Titlebar */}
              <div className="h-10 px-4 bg-surface/80 flex items-center justify-between text-sm text-slate-300">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-500" />
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-500" />
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-500" />
                </div>
                <span className="font-medium text-foreground">{currentProject.activeTab}</span>
                <span className="text-[13px] text-slate-400">Production</span>
              </div>

              {/* Interactive Window Visuals */}
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between py-3 rounded-lg bg-card px-4">
                  <div className="flex items-center gap-2.5">
                    <Activity className="w-4 h-4 text-blue-400" />
                    <span className="text-sm font-medium text-foreground">Edge Response Time</span>
                  </div>
                  <span className="text-sm font-bold text-emerald-400">28 ms</span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="p-4 rounded-lg bg-card">
                    <p className="text-[13px] text-slate-400 font-medium">Core Web Vital</p>
                    <p className="text-base font-bold text-foreground mt-1">LCP: 0.64s</p>
                    <p className="text-[13px] text-emerald-400 font-medium mt-0.5">Top 1% Percentile</p>
                  </div>
                  <div className="p-4 rounded-lg bg-card">
                    <p className="text-[13px] text-slate-400 font-medium">Security Grade</p>
                    <p className="text-base font-bold text-foreground mt-1">A+ Rating</p>
                    <p className="text-[13px] text-emerald-400 font-medium mt-0.5">Zero CVE Warnings</p>
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-card text-[13px] space-y-1.5 text-slate-300 leading-relaxed font-mono">
                  <p className="text-emerald-400">✓ Compiled client bundle (68.4 kB total)</p>
                  <p className="text-blue-400">→ Route hydrated with zero layout shifts</p>
                  <p className="text-slate-400">⚡ 100% test coverage across 42 integration suites</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Grid of All Showcase Projects */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
          Selected Production Architectures
        </h2>
        <div className="space-y-4">
          {projects.map((proj, idx) => (
            <button
              key={proj.title}
              type="button"
              onClick={() => setActiveProjectIndex(idx)}
              aria-pressed={activeProjectIndex === idx}
              className={`w-full text-left p-6 rounded-xl bg-card transition-colors cursor-pointer grid grid-cols-1 md:grid-cols-12 gap-4 items-center ${activeProjectIndex === idx ? 'ring-1 ring-primary' : 'hover:bg-surface/80'}`}
            >
              <div className="md:col-span-4">
                <span className="text-[13px] font-semibold text-blue-400 block">{proj.category}</span>
                <h3 className="mt-1 text-lg font-bold text-foreground">{proj.title}</h3>
              </div>
              <p className="md:col-span-6 text-sm text-slate-300 leading-relaxed">
                {proj.description}
              </p>
              <div className="md:col-span-2 text-left md:text-right">
                <span className="text-sm font-bold text-emerald-400">{proj.metrics}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
