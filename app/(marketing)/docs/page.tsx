'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { 
  BookOpen, 
  Terminal, 
  Cpu, 
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

export default function DocsPage() {
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
      <div className="text-center max-w-3xl mx-auto px-4">
        <Badge variant="purple" dot className="mb-4">
          Documentation & Reference
        </Badge>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
          Colver Technical Docs
        </h1>
        <p className="text-base sm:text-lg text-muted leading-relaxed">
          Comprehensive guides, architectural blueprints, and component specifications to help you build and scale with Colver.
        </p>

        {/* Search bar */}
        <div className="mt-8 max-w-md mx-auto relative">
          <Search className="w-4 h-4 text-muted absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search documentation articles..."
            className="w-full h-11 pl-11 pr-4 text-sm rounded-xl glass-input placeholder:text-muted/60"
          />
        </div>
      </div>

      {/* Quickstart Command Card */}
      <div className="max-w-4xl mx-auto px-4">
        <div className="p-6 rounded-2xl glass-panel border border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <p className="text-xs uppercase font-mono font-bold text-primary">Quick Launch</p>
            <p className="text-sm text-foreground font-medium">Clone, install dependencies, and run local dev server</p>
          </div>
          <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-black/50 border border-border font-mono text-xs text-foreground">
            <span className="text-primary">$</span>
            <span>npm run dev</span>
            <button
              type="button"
              onClick={handleCopy}
              className="ml-2 p-1 text-muted hover:text-foreground transition-colors cursor-pointer"
              title="Copy command"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Doc Sections Grid */}
      <div className="max-w-6xl mx-auto px-4 space-y-10">
        {filteredSections.map((section) => {
          const Icon = section.icon
          return (
            <div key={section.title} className="space-y-4">
              <div className="flex items-center gap-2.5 pb-2 border-b border-border/40">
                <Icon className="w-5 h-5 text-primary" />
                <h2 className="text-xl font-bold text-foreground">{section.title}</h2>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                {section.articles.map((art) => (
                  <div
                    key={art.title}
                    className="p-5 rounded-2xl glass-card border border-border/60 hover:border-primary/40 flex flex-col justify-between group"
                  >
                    <div>
                      <h3 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors mb-1.5">
                        {art.title}
                      </h3>
                      <p className="text-xs text-muted leading-relaxed">
                        {art.desc}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-border/40 flex items-center justify-between text-xs text-primary font-semibold">
                      <span>Read guide</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>

      {/* Help footer */}
      <div className="max-w-3xl mx-auto px-4 text-center pt-8 border-t border-border/40 space-y-3">
        <p className="text-sm text-muted">
          Can&apos;t find what you&apos;re looking for? Reach out to our core engineering maintainers.
        </p>
        <Link href="/contact">
          <Button variant="secondary" size="sm" className="glass-panel">
            Ask in Support Channel
          </Button>
        </Link>
      </div>
    </div>
  )
}
