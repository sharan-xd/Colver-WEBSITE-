import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { Clock, ArrowRight, Calendar, User } from 'lucide-react'
import Button from '@/components/ui/Button'
import { BreadcrumbsJsonLd } from '@/components/seo/JsonLd'

export const metadata: Metadata = {
  title: 'Engineering Blog & Technical Insights | Colver',
  description:
    'Deep-dive articles on web performance engineering, Core Web Vitals, sub-50ms latency, security headers, and modern Next.js architectures.',
  alternates: {
    canonical: 'https://colver.in/blog',
  },
  openGraph: {
    title: 'Engineering Blog & Technical Insights | Colver',
    description:
      'Practical notes on web performance, design craft, cloud architecture, and shipping production software.',
    url: 'https://colver.in/blog',
    siteName: 'Colver',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Colver Engineering Blog',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Engineering Blog & Technical Insights | Colver',
    description:
      'Deep-dive articles on web performance engineering, Core Web Vitals, and Next.js architectures.',
    images: ['/og-image.jpg'],
  },
  keywords: [
    'web performance blog',
    'Core Web Vitals optimization',
    'Next.js engineering articles',
    'security headers guide',
    'frontend architecture blog',
  ],
}

const posts = [
  {
    title: 'Designing Websites That Actually Feel Instant',
    excerpt: 'Why standard Core Web Vitals alone do not capture perception of speed, and how optimistic UI updates combined with prefetching eliminate perceived latency.',
    tag: 'Performance',
    date: 'October 2026',
    readTime: '6 min read',
    author: 'Colver Engineering',
  },
  {
    title: 'Strict Security Headers and CSP for Modern Jamstack & Next.js Sites',
    excerpt: 'A comprehensive walkthrough of deploying nonce-based Content Security Policies, strict transport security, and preventing cross-site scripting vulnerabilities.',
    tag: 'Security',
    date: 'September 2026',
    readTime: '9 min read',
    author: 'Security Architecture',
  },
  {
    title: 'Shipping with Fewer Moving Parts: The Case Against Microservice Sprawl',
    excerpt: 'How consolidating complex tooling into cohesive Next.js App Router monoliths helped our teams ship 3x faster with 90% fewer runtime errors.',
    tag: 'Product Architecture',
    date: 'August 2026',
    readTime: '7 min read',
    author: 'Platform Lead',
  },
  {
    title: 'Refining Glassmorphism: From Cheesy Frosted Glass to Premium Precision',
    excerpt: 'The mathematical principles behind subtle translucency, top rim light reflections, and realistic shadows that elevate enterprise web design.',
    tag: 'Design Systems',
    date: 'July 2026',
    readTime: '5 min read',
    author: 'Design Systems Lead',
  },
]

export default function BlogPage() {
  return (
    <div className="py-6 sm:py-10 space-y-12">
      <BreadcrumbsJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'Blog', url: '/blog' },
        ]}
      />
      {/* Header */}
      <div className="max-w-4xl mx-auto px-4 pt-4 sm:pt-8 text-center">
        <h1 className="text-3xl sm:text-5xl lg:text-[48px] font-bold tracking-tight mb-4 leading-tight text-foreground">
          Engineering & Architecture Journal
        </h1>
        <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
          Practical notes on software performance, resilient architectures, database modeling, and shipping high-concurrency systems.
        </p>
      </div>

      {/* Articles List */}
      <div className="max-w-4xl mx-auto px-4 space-y-6">
        {posts.map((post) => (
          <article
            key={post.title}
            className="p-6 sm:p-8 rounded-xl bg-card space-y-4 hover:bg-surface/80 transition-colors"
          >
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[13px] text-slate-400">
              <span className="font-semibold text-blue-400">{post.tag}</span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-slate-500" />
                <span>{post.date}</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-slate-500" />
                <span>{post.readTime}</span>
              </span>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold text-foreground">
              {post.title}
            </h2>

            <p className="text-base text-slate-300 leading-relaxed">
              {post.excerpt}
            </p>

            <div className="flex items-center justify-between pt-2">
              <span className="text-[13px] text-slate-400 font-medium">
                By {post.author}
              </span>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300">
                <span>Read article</span>
                <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </article>
        ))}
      </div>

      {/* Newsletter / Follow-up */}
      <div className="max-w-3xl mx-auto px-4 text-center pt-8 space-y-4">
        <h3 className="text-xl font-bold text-foreground">Want a specific topic covered?</h3>
        <p className="text-base text-slate-300 max-w-md mx-auto leading-relaxed">
          We welcome technical inquiries and architecture questions from our community.
        </p>
        <Link href="/contact">
          <Button variant="primary" size="md">
            Send Topic Suggestion
          </Button>
        </Link>
      </div>
    </div>
  )
}
