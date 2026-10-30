'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Search, Copy, Check } from '@/components/ui/Icons'
import { useToast } from '@/components/ui/Toast'

const docSections = [
  {
    title: 'Getting Started & Architecture',
    articles: [
      { title: 'System Requirements & Node.js Setup', desc: 'Node.js 18+, Next.js 16 App Router configuration and environment variables.' },
      { title: 'Directory Architecture & Boundaries', desc: 'Overview of layout, components, section layers, and server/client boundary patterns.' },
      { title: 'Running Local Development with Turbopack', desc: 'Fast hot-module replacement and instant route compilation in development.' },
    ],
  },
  {
    title: 'Design System & Architectural Tokens',
    articles: [
      { title: 'Brutalist Swiss Design Tokens', desc: 'CSS variables for obsidian surfaces, high-contrast typography, and electric accents.' },
      { title: 'Three.js 3D Isometric Viewports', desc: 'Lightweight canvas scenes running pure WebGL with zero React reconciler drag.' },
      { title: 'Micro-Interactions & Hardware Acceleration', desc: 'Pure CSS keyframes and Framer Motion layout animations targeting 60fps.' },
    ],
  },
  {
    title: 'Component Library & Primitives',
    articles: [
      { title: 'Button, Input & Form Controls', desc: 'Accessible form elements with live boundary validation and keyboard focus rings.' },
      { title: 'Command Palette (⌘K)', desc: 'Instant keyboard-driven navigation across all application routes and system preferences.' },
      { title: 'Monolithic Navigation & Mobile Drawer', desc: 'Full-screen mobile drawer with live IST studio clock and rapid destination search.' },
    ],
  },
  {
    title: 'Security & Edge Deployment',
    articles: [
      { title: 'Hardened HTTP Headers & CSP', desc: 'Content Security Policy, strict HSTS, Frame options, and Referrer protection.' },
      { title: 'Static & Edge Prerendering', desc: 'Prerendering 21 static routes with sub-10ms edge response times.' },
      { title: 'Audit Checklists & WCAG AA Compliance', desc: 'Accessibility compliance, contrast validation, and Lighthouse performance tuning.' },
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
    toast('Command copied', 'Run in your terminal to start local dev.', 'info')
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
    <div className="py-8 sm:py-16 space-y-20 md:space-y-28 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="space-y-6">
        <div className="flex items-center gap-2 text-base text-[#C8FF00] font-mono">
          <span className="w-2 h-2 rounded-full bg-[#C8FF00] animate-pulse" />
          <span>Technical Architecture & Developer Documentation</span>
        </div>

        <h1 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-[64px] tracking-tight text-[#F4F1EA] leading-[1.04] text-balance">
          System Documentation & Specifications.
        </h1>

        <p className="text-base sm:text-xl text-[#BFC3C9] leading-relaxed max-w-3xl">
          Comprehensive guides, system blueprints, component specifications, and deployment runbooks for engineers building with Colver.
        </p>

        {/* Search bar */}
        <div className="pt-2 max-w-xl relative">
          <Search className="w-5 h-5 text-[#8E929A] absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search documentation articles and components..."
            className="w-full h-12 pl-12 pr-4 text-base rounded-[2px] bg-[#101010] text-[#F4F1EA] placeholder-[#8E929A] border border-white/10 focus:outline-none focus:ring-1 focus:ring-[#C8FF00]"
          />
        </div>
      </div>

      {/* Quickstart Command Banner */}
      <div className="p-6 rounded-[2px] bg-[#101010] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <span className="text-sm font-semibold text-[#C8FF00] block">Local Quickstart</span>
          <p className="text-base text-[#F4F1EA] font-semibold">Clone repository and launch Turbopack edge development server</p>
        </div>
        <div className="flex items-center gap-3 px-4 py-2.5 rounded-[2px] bg-[#080808] font-mono text-base text-[#F4F1EA]">
          <span className="text-[#C8FF00]">$</span>
          <span>npm run dev</span>
          <button
            type="button"
            onClick={handleCopy}
            className="ml-3 text-[#8E929A] hover:text-[#C8FF00] transition-colors cursor-pointer"
            title="Copy command"
          >
            {copied ? <Check className="w-4 h-4 text-[#C8FF00]" /> : <Copy className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Doc Sections */}
      <div className="space-y-10">
        {filteredSections.map((section) => (
          <div key={section.title} className="p-8 rounded-[2px] bg-[#101010] space-y-6">
            <h2 className="font-display text-2xl font-bold text-[#F4F1EA] tracking-tight">
              {section.title}
            </h2>

            <div className="divide-y divide-white/5">
              {section.articles.map((art) => (
                <div
                  key={art.title}
                  className="grid sm:grid-cols-[1fr_auto] gap-4 py-5 first:pt-2 last:pb-0 group"
                >
                  <div className="space-y-1">
                    <h3 className="font-display text-lg font-bold text-[#F4F1EA] group-hover:text-[#C8FF00] transition-colors">
                      {art.title}
                    </h3>
                    <p className="text-base text-[#BFC3C9] leading-relaxed">
                      {art.desc}
                    </p>
                  </div>

                  <div className="flex items-center gap-1.5 text-base text-[#C8FF00] font-semibold self-center shrink-0">
                    <span>Inspect</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Engineering Support CTA */}
      <div className="p-8 sm:p-14 bg-[#121212] rounded-[2px] flex flex-col md:flex-row md:items-center justify-between gap-8">
        <div className="space-y-3 max-w-2xl">
          <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight text-[#F4F1EA] leading-tight">
            Need custom architecture guidance?
          </h2>
          <p className="text-base sm:text-lg text-[#BFC3C9] leading-relaxed">
            Our senior systems maintainers and architects are available for deep-dive technical reviews.
          </p>
        </div>
        <div className="shrink-0">
          <Link href="/contact">
            <button
              type="button"
              className="h-12 px-7 rounded-[2px] bg-[#C8FF00] hover:bg-[#b8ea00] text-black font-semibold text-base tracking-wide flex items-center justify-center gap-2.5 transition-all cursor-pointer"
            >
              <span>Connect with Maintainers</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
