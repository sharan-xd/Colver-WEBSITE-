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
      <div className="text-center max-w-3xl mx-auto px-4">
        <Badge variant="info" dot className="mb-4">
          Client & Ecosystem Deployments
        </Badge>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
          Engineered with Colver.
          <span className="text-gradient block mt-1">Proven in production.</span>
        </h1>
        <p className="text-base sm:text-lg text-muted leading-relaxed">
          Discover high-performance web applications, headless commerce platforms, and AI systems shipped using Colver architecture.
        </p>
      </div>

      {/* Main Interactive Showcase Console */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="rounded-3xl glass-panel border border-border overflow-hidden shadow-2xl">
          {/* Top Bar with Project Switcher */}
          <div className="p-3 sm:p-4 bg-surface/70 border-b border-border/60 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-1.5 overflow-x-auto py-1">
              {projects.map((p, idx) => (
                <button
                  key={p.title}
                  type="button"
                  onClick={() => setActiveProjectIndex(idx)}
                  className={`
                    px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-150 cursor-pointer
                    ${
                      activeProjectIndex === idx
                        ? 'bg-primary text-white shadow-sm'
                        : 'text-muted hover:text-foreground hover:bg-surface/60'
                    }
                  `}
                >
                  {p.title.split(' ')[0]}
                </button>
              ))}
            </div>

            <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-muted">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Production Live Preview</span>
            </div>
          </div>

          {/* Interactive Showcase Preview Panel */}
          <div className="p-6 sm:p-10 grid lg:grid-cols-2 gap-8 items-center">
            {/* Left: Project Details */}
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Badge variant="purple">{currentProject.category}</Badge>
                  <span className="text-xs font-mono text-emerald-400 font-semibold px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                    {currentProject.metrics}
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                  {currentProject.title}
                </h2>
                <p className="text-sm sm:text-base text-muted leading-relaxed">
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
                  <div key={item} className="flex items-center gap-2.5 text-xs sm:text-sm text-foreground">
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
                    className="text-xs font-mono px-2.5 py-1 rounded-lg bg-surface border border-border text-muted"
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
                  <Button variant="secondary" className="glass-panel">
                    Architecture Specs
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right: Simulated macOS Glass Viewport */}
            <div className="rounded-2xl glass-panel border border-border/80 overflow-hidden shadow-xl bg-card/60">
              {/* Window Titlebar */}
              <div className="h-9 px-4 bg-surface/90 border-b border-border/60 flex items-center justify-between text-xs text-muted font-mono">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <span>{currentProject.activeTab}</span>
                <Terminal className="w-3.5 h-3.5" />
              </div>

              {/* Interactive Window Visuals */}
              <div className="p-6 space-y-4">
                {/* Simulated UI components */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-surface/70 border border-border/60">
                  <div className="flex items-center gap-2.5">
                    <Activity className="w-4 h-4 text-primary" />
                    <span className="text-xs font-medium text-foreground">Edge Response Time</span>
                  </div>
                  <span className="text-xs font-mono font-bold text-emerald-400">28 ms</span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-xl bg-surface/50 border border-border/40">
                    <p className="text-[11px] text-muted uppercase font-mono">Core Web Vital</p>
                    <p className="text-base font-bold text-foreground mt-1">LCP: 0.64s</p>
                    <p className="text-[10px] text-emerald-400 mt-0.5">Top 1% Percentile</p>
                  </div>
                  <div className="p-3 rounded-xl bg-surface/50 border border-border/40">
                    <p className="text-[11px] text-muted uppercase font-mono">Security Grade</p>
                    <p className="text-base font-bold text-foreground mt-1">A+ Rating</p>
                    <p className="text-[10px] text-emerald-400 mt-0.5">Zero CVE Warnings</p>
                  </div>
                </div>

                {/* Simulated Code/Log Block */}
                <div className="p-3.5 rounded-xl bg-black/40 border border-border/60 font-mono text-[11px] space-y-1.5 text-muted leading-relaxed">
                  <p className="text-emerald-400">✓ Compiled client bundle (68.4 kB total)</p>
                  <p className="text-blue-400">→ Route hydrated with zero layout shifts</p>
                  <p className="text-muted/80">⚡ 100% test coverage across 42 integration suites</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Grid of All Showcase Projects */}
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-6">
          Explore Production Architectures
        </h2>
        <div className="grid sm:grid-cols-2 gap-5">
          {projects.map((proj, idx) => (
            <div
              key={proj.title}
              onClick={() => setActiveProjectIndex(idx)}
              className={`
                p-6 rounded-2xl glass-card border cursor-pointer transition-all duration-200
                ${
                  activeProjectIndex === idx
                    ? 'border-primary ring-1 ring-primary/30 bg-primary/[0.04]'
                    : 'border-border/60 hover:border-border'
                }
              `}
            >
              <div className="flex items-center justify-between mb-3">
                <Badge variant={activeProjectIndex === idx ? 'purple' : 'default'}>
                  {proj.category}
                </Badge>
                <span className="text-xs font-mono text-emerald-400 font-semibold">
                  {proj.metrics}
                </span>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-1.5">{proj.title}</h3>
              <p className="text-xs sm:text-sm text-muted leading-relaxed mb-4">
                {proj.description}
              </p>
              <div className="flex items-center justify-between text-xs font-semibold text-primary">
                <span>Select for live view</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
