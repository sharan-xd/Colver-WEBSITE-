import React from 'react'
import Link from 'next/link'
import { FileText, Clock, ArrowRight, Calendar, User } from 'lucide-react'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'

export const metadata = {
  title: 'Blog | Colver',
  description: 'Notes, technical updates, and engineering thinking from the Colver team',
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
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto px-4">
        <Badge variant="purple" dot className="mb-4">
          Engineering & Design Journal
        </Badge>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
          Colver Blog
        </h1>
        <p className="text-base sm:text-lg text-muted leading-relaxed">
          Practical notes on web performance, design craft, cloud architecture, and shipping production software.
        </p>
      </div>

      {/* Articles List */}
      <div className="max-w-4xl mx-auto px-4 space-y-5">
        {posts.map((post) => (
          <article
            key={post.title}
            className="p-7 sm:p-8 rounded-3xl glass-card border border-border/60 hover:border-primary/40 flex flex-col sm:flex-row sm:items-center justify-between gap-6 group"
          >
            <div className="space-y-3 flex-1">
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-mono uppercase tracking-wider font-bold px-2 py-0.5 rounded-full bg-surface border border-border text-primary">
                  {post.tag}
                </span>
                <span className="text-xs text-muted flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{post.date}</span>
                </span>
                <span className="text-muted/40">•</span>
                <span className="text-xs text-muted flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{post.readTime}</span>
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                {post.title}
              </h2>

              <p className="text-xs sm:text-sm text-muted leading-relaxed">
                {post.excerpt}
              </p>

              <div className="flex items-center gap-2 text-xs text-muted pt-1">
                <User className="w-3.5 h-3.5 text-primary" />
                <span>By {post.author}</span>
              </div>
            </div>

            <div className="shrink-0 self-start sm:self-center">
              <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-surface/70 group-hover:bg-primary group-hover:text-white border border-border text-xs font-semibold text-foreground transition-all">
                <span>Read Article</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </article>
        ))}
      </div>

      {/* Newsletter / Follow-up */}
      <div className="max-w-3xl mx-auto px-4 text-center pt-8 border-t border-border/40 space-y-4">
        <h3 className="text-lg font-bold text-foreground">Want a specific topic covered?</h3>
        <p className="text-xs sm:text-sm text-muted max-w-md mx-auto">
          We welcome questions and technical proposals from developers in our community.
        </p>
        <Link href="/contact">
          <Button variant="secondary" size="sm" className="glass-panel">
            Send Topic Suggestion
          </Button>
        </Link>
      </div>
    </div>
  )
}
