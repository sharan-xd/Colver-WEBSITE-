import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from '@/components/ui/Icons'
import { BreadcrumbsJsonLd } from '@/components/seo/JsonLd'

export const metadata: Metadata = {
  title: 'Developer Guides & Architectural Walkthroughs | Colver',
  description:
    'In-depth technical guides for Next.js 16 architectures, Swiss typography, security headers, and edge performance optimization.',
  alternates: {
    canonical: 'https://colver.in/guides',
  },
  openGraph: {
    title: 'Developer Guides & Architectural Walkthroughs | Colver',
    description:
      'Step-by-step engineering tutorials on performance, design tokens, security headers, and edge deployment.',
    url: 'https://colver.in/guides',
    siteName: 'Colver',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Colver Guides & Tutorials',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Developer Guides & Architectural Walkthroughs | Colver',
    description:
      'Deep-dive technical tutorials written by systems engineers for product teams.',
    images: ['/og-image.png'],
  },
}

const guides = [
  {
    title: 'Migrating from Legacy Frameworks to Colver App Router',
    description: 'Step-by-step instructions for porting existing React components and CSS into the Colver Next.js 16 App Router architecture.',
    category: 'Architecture',
    duration: '8 min read',
    level: 'Intermediate',
  },
  {
    title: 'Implementing 3D Isometric Viewports with Zero Hydration Thrashing',
    description: 'How to use pure Three.js running inside standard useEffect loops for silky smooth 60fps renders on Next.js 16 App Router.',
    category: 'Design Systems',
    duration: '6 min read',
    level: 'Advanced',
  },
  {
    title: 'Configuring Hardened Security Headers and Strict CSP',
    description: 'Audit and deploy strict Content Security Policies, HSTS, frame-ancestors, and permissions policies without breaking dev HMR.',
    category: 'Security',
    duration: '10 min read',
    level: 'Advanced',
  },
  {
    title: 'Setting Up the Colver Command Palette (⌘K)',
    description: 'Customizing keyboard shortcuts, dynamic search indexing, and custom actions inside the global command dialog.',
    category: 'Frontend Engineering',
    duration: '5 min read',
    level: 'Beginner',
  },
  {
    title: 'Zero-Hydration-Mismatch Dark Theme Switching',
    description: 'Persisting theme tokens in localStorage with data attributes and CSS variables without flash-of-unstyled-content.',
    category: 'Frontend Engineering',
    duration: '7 min read',
    level: 'Intermediate',
  },
  {
    title: 'Deploying Colver to Global Edge Networks with Turbopack',
    description: 'Best practices for optimizing production builds, caching static assets, and minimizing serverless cold starts.',
    category: 'DevOps & Cloud',
    duration: '9 min read',
    level: 'Intermediate',
  },
]

export default function GuidesPage() {
  return (
    <div className="py-8 sm:py-16 space-y-20 md:space-y-28 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <BreadcrumbsJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'Guides', url: '/guides' },
        ]}
      />

      {/* Header */}
      <div className="space-y-6">
        <div className="flex items-center gap-2 text-base text-[#C8FF00] font-mono">
          <span className="w-2 h-2 rounded-full bg-[#C8FF00] animate-pulse" />
          <span>Architectural Blueprints · Engineering Tutorials</span>
        </div>

        <h1 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-[64px] tracking-tight text-[#F4F1EA] leading-[1.04] text-balance">
          Developer Guides & Architectural Walkthroughs.
        </h1>

        <p className="text-base sm:text-xl text-[#BFC3C9] leading-relaxed max-w-3xl">
          Deep-dive technical tutorials written by senior software engineers for modern product and operations teams.
        </p>
      </div>

      {/* Guides List */}
      <div className="space-y-4">
        {guides.map((guide, idx) => (
          <article
            key={guide.title}
            className={`p-6 sm:p-8 rounded-[2px] space-y-3 transition-all duration-200 hover:bg-[#141414] ${
              idx % 2 === 0 ? 'bg-[#101010]' : 'bg-[#0d0d0d]'
            }`}
          >
            <div className="flex flex-wrap items-center justify-between gap-2 text-sm">
              <span className="font-semibold text-[#C8FF00]">
                {guide.category} · {guide.level}
              </span>
              <span className="text-[#8E929A]">
                {guide.duration}
              </span>
            </div>

            <h2 className="font-display text-xl sm:text-2xl font-bold text-[#F4F1EA]">
              {guide.title}
            </h2>

            <p className="text-base text-[#BFC3C9] leading-relaxed">
              {guide.description}
            </p>

            <div className="pt-2">
              <span className="inline-flex items-center gap-2 text-base font-semibold text-[#C8FF00] hover:text-[#b8ea00] cursor-pointer">
                <span>Read guide</span>
                <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </article>
        ))}
      </div>

      {/* Community Banner */}
      <div className="p-8 sm:p-14 bg-[#121212] rounded-[2px] flex flex-col md:flex-row md:items-center justify-between gap-8">
        <div className="space-y-3 max-w-2xl">
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-[#F4F1EA] tracking-tight">
            Want to request a specific architectural guide?
          </h2>
          <p className="text-base sm:text-lg text-[#BFC3C9] leading-relaxed">
            Our engineering studio regularly publishes requested topics on database modeling, edge computing, and fullstack security.
          </p>
        </div>
        <div className="shrink-0">
          <Link href="/contact">
            <button
              type="button"
              className="h-12 px-7 rounded-[2px] bg-[#C8FF00] hover:bg-[#b8ea00] text-black font-semibold text-base tracking-wide flex items-center justify-center gap-2.5 transition-all cursor-pointer"
            >
              <span>Submit Topic Request</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
