import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from '@/components/ui/Icons'
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
}

const posts = [
  {
    title: 'Designing Websites That Actually Feel Instant',
    excerpt: 'Why standard Core Web Vitals alone do not capture perception of speed, and how optimistic UI updates combined with edge prefetching eliminate perceived latency.',
    tag: 'Performance',
    date: 'October 2026',
    readTime: '6 min read',
    author: 'Colver Engineering',
  },
  {
    title: 'Strict Security Headers and CSP for Modern Next.js Sites',
    excerpt: 'A comprehensive walkthrough of deploying nonce-based Content Security Policies, strict transport security, and preventing cross-site scripting vulnerabilities.',
    tag: 'Security',
    date: 'September 2026',
    readTime: '9 min read',
    author: 'Security Architecture',
  },
  {
    title: 'Shipping with Fewer Moving Parts: The Case Against Microservice Sprawl',
    excerpt: 'How consolidating complex tooling into cohesive Next.js App Router monoliths helped our teams ship 3x faster with 90% fewer runtime exceptions.',
    tag: 'Product Architecture',
    date: 'August 2026',
    readTime: '7 min read',
    author: 'Platform Lead',
  },
  {
    title: 'Refining Digital Brutalism: Swiss Typography & 3D Isometric Viewports',
    excerpt: 'The mathematical principles behind subtle translucency, chromatic finishes, and realistic shadows that elevate enterprise web design without framework bloat.',
    tag: 'Design Systems',
    date: 'July 2026',
    readTime: '5 min read',
    author: 'Design Engineering Lead',
  },
]

export default function BlogPage() {
  return (
    <div className="py-8 sm:py-16 space-y-20 md:space-y-28 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <BreadcrumbsJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'Blog', url: '/blog' },
        ]}
      />

      {/* Header */}
      <div className="space-y-6">
        <div className="flex items-center gap-2 text-base text-[#C8FF00] font-mono">
          <span className="w-2 h-2 rounded-full bg-[#C8FF00] animate-pulse" />
          <span>Engineering Journal · Production Architecture</span>
        </div>

        <h1 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-[64px] tracking-tight text-[#F4F1EA] leading-[1.04] text-balance">
          Engineering & Architecture Journal.
        </h1>

        <p className="text-base sm:text-xl text-[#BFC3C9] leading-relaxed max-w-3xl">
          Practical notes on software performance, resilient architectures, database modeling, and shipping high-concurrency systems.
        </p>
      </div>

      {/* Articles List */}
      <div className="space-y-4">
        {posts.map((post, idx) => (
          <article
            key={post.title}
            className={`p-6 sm:p-8 rounded-[2px] space-y-4 transition-all duration-200 hover:bg-[#141414] ${
              idx % 2 === 0 ? 'bg-[#101010]' : 'bg-[#0d0d0d]'
            }`}
          >
            <div className="flex flex-wrap items-center gap-3 text-sm text-[#8E929A]">
              <span className="font-semibold text-[#C8FF00]">{post.tag}</span>
              <span>·</span>
              <span>{post.date}</span>
              <span>·</span>
              <span>{post.readTime}</span>
              <span>·</span>
              <span>By {post.author}</span>
            </div>

            <h2 className="font-display text-xl sm:text-2xl font-bold text-[#F4F1EA]">
              {post.title}
            </h2>

            <p className="text-base text-[#BFC3C9] leading-relaxed">
              {post.excerpt}
            </p>

            <div className="pt-2">
              <span className="inline-flex items-center gap-2 text-base font-semibold text-[#C8FF00] hover:text-[#b8ea00] cursor-pointer">
                <span>Read article</span>
                <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </article>
        ))}
      </div>

      {/* Newsletter / Follow-up */}
      <div className="p-8 sm:p-14 bg-[#121212] rounded-[2px] flex flex-col md:flex-row md:items-center justify-between gap-8">
        <div className="space-y-3 max-w-2xl">
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-[#F4F1EA] tracking-tight">
            Want a specific architecture topic covered?
          </h2>
          <p className="text-base sm:text-lg text-[#BFC3C9] leading-relaxed">
            We regularly publish deep-dive breakdowns requested by founders, CTOs, and systems engineers.
          </p>
        </div>
        <div className="shrink-0">
          <Link href="/contact">
            <button
              type="button"
              className="h-12 px-7 rounded-[2px] bg-[#C8FF00] hover:bg-[#b8ea00] text-black font-semibold text-base tracking-wide flex items-center justify-center gap-2.5 transition-all cursor-pointer"
            >
              <span>Submit Topic Suggestion</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
