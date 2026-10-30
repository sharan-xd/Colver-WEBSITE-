'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { 
  Terminal, 
  Code2, 
  ShieldCheck, 
  ArrowRight, 
  Search, 
  Copy, 
  Check, 
  Sparkles 
} from 'lucide-react'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import { useToast } from '@/components/ui/Toast'

const docSections = [
  {
    title: 'Getting Started',
    icon: Terminal,
    articles: [
      { title: 'System Requirements & Setup', desc: 'Node.js 18+, Next.js 16 App Router configuration and environment variables.' },
      { title: 'Project Directory Architecture', desc: 'Overview of layout, components, section layers, and theme tokens.' },
      { title: 'Running Local Development', desc: 'Start the Turbopack dev server and test hot module reloading.' },
    ],
  },
  {
    title: 'Design System & Theming',
    icon: Sparkles,
    articles: [
      { title: 'Glassmorphism Design Tokens', desc: 'CSS variables for glass-panel, glass-card, and backdrop-filter blur parameters.' },
      { title: 'Dark & Light Mode Persistence', desc: 'Using ThemeProvider and localStorage with zero hydration mismatch.' },
      { title: 'Micro-Interactions & Animations', desc: 'Fluid transitions using Framer Motion springs and GSAP ScrollTrigger.' },
    ],
  },
  {
    title: 'Component Library',
    icon: Code2,
    articles: [
      { title: 'Button, Input & Form Controls', desc: 'Accessible form elements with live validation, loading spinners, and focus rings.' },
      { title: 'Command Palette (⌘K)', desc: 'Instant keyboard-driven navigation across all application routes and preferences.' },
      { title: 'Persistent Responsive Sidebar', desc: 'Collapsible desktop navigation with automatic tooltip hover states.' },
    ],
  },
  {
    title: 'Security & Deployment',
    icon: ShieldCheck,
    articles: [
      { title: 'Hardened HTTP Headers & CSP', desc: 'Content Security Policy, strict HSTS, Frame options, and Referrer protection.' },
      { title: 'Static & Edge Generation', desc: 'Prerendering 19+ static routes with sub-millisecond edge response times.' },
      { title: 'Audit Checklists & WCAG AA', desc: 'Accessibility compliance and Lighthouse performance tuning.' },
    ],
  },
]

export default function DocsClient() {
  const [copied, setCopied] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const { toast } = useToast()

  const handleCopy = () => {
    navigator.clipboard.writeText('npm run dev')
    setCopied(true)
    toast('Command copied', 'Run in your terminal to start developing.', 'info')
    setTimeout(() => setCopied(false), 2000)
  }

  const filteredSections = docSections.map((sec) => ({
    ...sec,
    articles: sec.articles.filter(
      (a) =>
        a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        a.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        sec.title.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  })).filter((sec) => sec.articles.length > 0)

  return (
    <div className="py-6 sm:py-10 space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto px-4 pt-4 sm:pt-8">
        <h1 className="text-3xl sm:text-5xl lg:text-[48px] font-bold tracking-tight mb-4 leading-tight text-foreground">
          Technical Architecture & Documentation
        </h1>
        <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
          Comprehensive guides, system blueprints, and component specifications to help you build and scale with Colver.
        </p>

        {/* Search bar */}
        <div className="mt-8 max-w-md mx-auto relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search documentation articles..."
            className="w-full h-11 pl-11 pr-4 text-sm rounded-lg bg-surface text-foreground placeholder:text-slate-400 border-none focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>

      {/* Quickstart Command Card */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-5 rounded-xl bg-card flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <p className="text-[13px] font-semibold text-blue-400">Quick Launch</p>
            <p className="text-sm text-foreground font-medium">Clone, install dependencies, and run local dev server</p>
          </div>
          <div className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-surface font-mono text-[13px] text-foreground">
            <span className="text-blue-400">$</span>
            <span>npm run dev</span>
            <button
              type="button"
              onClick={handleCopy}
              className="ml-2 p-1 text-slate-400 hover:text-foreground transition-colors cursor-pointer"
              title="Copy command"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Doc Sections Grid */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {filteredSections.map((section) => {
          const Icon = section.icon
          return (
            <div key={section.title} className="p-6 sm:p-8 rounded-xl bg-card space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-surface flex items-center justify-center text-blue-400">
                  <Icon className="w-4 h-4" />
                </div>
                <h2 className="text-xl font-bold text-foreground">{section.title}</h2>
              </div>

              <div className="divide-y divide-border/20">
                {section.articles.map((art) => (
                  <div
                    key={art.title}
                    className="grid sm:grid-cols-[1fr_auto] gap-3 py-4 first:pt-2 last:pb-0 group"
                  >
                    <div>
                      <h3 className="text-base font-semibold text-foreground group-hover:text-blue-400 transition-colors mb-1">
                        {art.title}
                      </h3>
                      <p className="text-sm text-slate-400 leading-relaxed">
                        {art.desc}
                      </p>
                    </div>

                    <div className="flex items-center gap-1.5 text-[13px] text-blue-400 font-semibold self-center">
                      <span>Read guide</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>

      {/* Help footer */}
      <div className="max-w-3xl mx-auto px-4 text-center pt-8 space-y-3">
        <p className="text-base text-slate-300">
          Can&apos;t find what you&apos;re looking for? Reach out to our core engineering maintainers.
        </p>
        <Link href="/contact">
          <Button variant="primary" size="md">
            Ask in Support Channel
          </Button>
        </Link>
      </div>
    </div>
  )
}
