import React from 'react'
import Link from 'next/link'
import { Compass, Clock, ArrowRight, Sparkles, Terminal, Code2 } from 'lucide-react'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'

export const metadata = {
  title: 'Guides | Colver',
  description: 'In-depth tutorials and architectural walkthroughs for Colver',
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
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto px-4">
        <Badge variant="info" dot className="mb-4">
          Tutorials & Walkthroughs
        </Badge>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
          Colver Developer Guides
        </h1>
        <p className="text-base sm:text-lg text-muted leading-relaxed">
          Deep-dive technical tutorials written by systems engineers for product teams.
        </p>
      </div>

      {/* Guides Grid */}
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-5">
          {guides.map((guide) => (
            <div
              key={guide.title}
              className="p-6 sm:p-7 rounded-2xl glass-card border border-border/60 hover:border-primary/40 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-surface border border-border text-muted">
                    {guide.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-muted">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{guide.duration}</span>
                  </div>
                </div>

                <h2 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                  {guide.title}
                </h2>

                <p className="text-xs sm:text-sm text-muted leading-relaxed">
                  {guide.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-border/40 flex items-center justify-between text-xs">
                <span className="text-muted font-mono">{guide.level}</span>
                <span className="text-primary font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Read Walkthrough <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Community Banner */}
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="p-8 rounded-3xl glass-panel border border-border space-y-4">
          <h3 className="text-xl font-bold text-foreground">Want to request a specific architectural guide?</h3>
          <p className="text-sm text-muted max-w-xl mx-auto">
            Our documentation team regularly publishes requested topics on state management, WebGL rendering, and fullstack security.
          </p>
          <div className="pt-2">
            <Link href="/contact">
              <Button variant="secondary" size="md" className="glass-panel">
                Submit Topic Request
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
