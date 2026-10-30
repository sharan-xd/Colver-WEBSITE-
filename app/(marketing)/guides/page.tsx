import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { Clock, ArrowRight } from 'lucide-react'
import Button from '@/components/ui/Button'
import { BreadcrumbsJsonLd } from '@/components/seo/JsonLd'

export const metadata: Metadata = {
  title: 'Developer Guides, Tutorials & Walkthroughs | Colver',
  description:
    'In-depth technical guides for Next.js 16 architectures, glassmorphism design systems, security headers, and edge performance optimization.',
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
        url: '/og-image.jpg',
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
    images: ['/og-image.jpg'],
  },
  keywords: [
    'Next.js 16 tutorial',
    'web engineering guides',
    'security headers walkthrough',
    'glassmorphism design system tutorial',
    'edge performance best practices',
  ],
}

const guides = [
  {
    title: 'Migrating from Legacy Frameworks to Colver',
    description: 'Step-by-step instructions for porting existing React components and CSS into the Colver Next.js 16 App Router architecture.',
    category: 'Architecture',
    duration: '8 min read',
    level: 'Intermediate',
  },
  {
    title: 'Implementing Refined Glassmorphism with Zero Layout Thrashing',
    description: 'How to use backdrop-filter blur parameters, RGB token layers, and rim reflections while maintaining a constant 60 FPS.',
    category: 'Design Systems',
    duration: '6 min read',
    level: 'Advanced',
  },
  {
    title: 'Configuring Hardened Security Headers and CSP',
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
    title: 'Zero-Hydration-Mismatch Dark/Light Theme Switching',
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
    <div className="py-6 sm:py-10 space-y-12">
      <BreadcrumbsJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'Guides', url: '/guides' },
        ]}
      />
      {/* Header */}
      <div className="max-w-4xl mx-auto px-4 pt-4 sm:pt-8 text-center">
        <h1 className="text-3xl sm:text-5xl lg:text-[48px] font-bold tracking-tight mb-4 leading-tight text-foreground">
          Developer Guides & Architectural Walkthroughs
        </h1>
        <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
          Deep-dive technical tutorials written by software engineers for modern product and operations teams.
        </p>
      </div>

      {/* Guides index */}
      <div className="max-w-4xl mx-auto px-4 space-y-6">
        {guides.map((guide) => (
          <article
            key={guide.title}
            className="p-6 sm:p-8 rounded-xl bg-card space-y-3 hover:bg-surface/80 transition-colors"
          >
            <div className="flex flex-wrap items-center justify-between gap-2 text-[13px]">
              <span className="font-semibold text-blue-400">
                {guide.category} · {guide.level}
              </span>
              <span className="flex items-center gap-1.5 text-slate-400">
                <Clock className="w-4 h-4 text-slate-500" />
                <span>{guide.duration}</span>
              </span>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold text-foreground">
              {guide.title}
            </h2>

            <p className="text-base text-slate-300 leading-relaxed">
              {guide.description}
            </p>

            <div className="pt-2">
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300">
                <span>Read guide</span>
                <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </article>
        ))}
      </div>

      {/* Community Banner */}
      <div className="max-w-3xl mx-auto px-4 text-center pt-8 space-y-4">
        <h3 className="text-xl font-bold text-foreground">Want to request a specific architectural guide?</h3>
        <p className="text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
          Our engineering studio regularly publishes requested topics on database models, edge computing, and fullstack security.
        </p>
        <div className="pt-2">
          <Link href="/contact">
            <Button variant="primary" size="md">
              Submit Topic Request
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
