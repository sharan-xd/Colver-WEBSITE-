'use client'

import React from 'react'
import Link from 'next/link'
import { Zap, Github, Twitter, MessageSquare, Linkedin, ArrowUpRight } from '@/components/ui/Icons'

const footerSections = [
  {
    title: 'Services & Solutions',
    links: [
      { label: 'Custom Software', href: '/services' },
      { label: 'Web Applications', href: '/services' },
      { label: 'E-Commerce Platforms', href: '/services' },
      { label: 'Inventory & Operations', href: '/services' },
      { label: 'AI & Automation', href: '/services' },
    ],
  },
  {
    title: 'Platform & Work',
    links: [
      { label: 'Showcase', href: '/showcase' },
      { label: 'Capabilities', href: '/features' },
      { label: 'Documentation', href: '/docs' },
      { label: 'Engineering Guides', href: '/guides' },
      { label: 'Blog', href: '/blog' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Colver', href: '/about' },
      { label: 'Careers', href: '/careers' },
      { label: 'Discuss Your Project', href: '/contact' },
      { label: 'Client Support', href: '/support' },
    ],
  },
  {
    title: 'Trust & Legal',
    links: [
      { label: 'Security & Trust', href: '/security' },
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
    ],
  },
]

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/sharan-xd/Colver-WEBSITE-', icon: Github, external: true },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/colver-systems', icon: Linkedin, external: true },
  { label: 'Twitter', href: 'https://x.com/colver_systems', icon: Twitter, external: true },
  { label: 'Inquiries', href: '/contact', icon: MessageSquare, external: false },
]

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-border/60 bg-surface/30 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand Col */}
          <div className="col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-primary via-indigo-600 to-accent flex items-center justify-center shrink-0 shadow-sm">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-lg tracking-tight text-foreground">Colver</span>
            </Link>

            <p className="text-sm text-muted max-w-sm leading-relaxed">
              Software built around your business. We engineer tailored software systems, high-performance web applications, and intelligent digital workflows.
            </p>

            {/* Social & Contact Links */}
            <div className="flex items-center gap-2 pt-2">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <Link
                    key={social.label}
                    href={social.href}
                    {...(social.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    aria-label={social.label}
                    className="w-9 h-9 rounded-xl bg-surface/60 hover:bg-surface border border-border/60 hover:border-primary/40 flex items-center justify-center text-muted hover:text-foreground transition-all duration-150"
                  >
                    <Icon className="w-4 h-4" />
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Navigation Columns */}
          {footerSections.map((section) => (
            <div key={section.title} className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-wider text-foreground">
                {section.title}
              </p>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted hover:text-foreground transition-colors duration-150 inline-flex items-center gap-1 group"
                    >
                      <span>{link.label}</span>
                      {link.href.startsWith('http') && (
                        <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted">
          <p>© {new Date().getFullYear()} Colver Systems. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Production Systems Operational</span>
            </span>
            <Link href="/privacy" className="hover:text-foreground transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
