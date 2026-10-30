'use client'

import React from 'react'
import Link from 'next/link'
import { Github, Twitter, MessageSquare, Linkedin, ArrowUpRight } from '@/components/ui/Icons'

const footerSections = [
  {
    title: 'Services & Solutions',
    links: [
      { label: 'Custom Software', href: '/services#custom-software' },
      { label: 'Web Applications', href: '/services#web-applications' },
      { label: 'E-Commerce Platforms', href: '/services#ecommerce-platforms' },
      { label: 'Inventory & Operations', href: '/services#inventory-operations' },
      { label: 'AI & Automation', href: '/services#ai-workflows' },
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
    title: 'Studio',
    links: [
      { label: 'About Colver', href: '/about' },
      { label: 'Careers', href: '/careers' },
      { label: 'Discuss Your Project', href: '/contact' },
      { label: 'Client Support', href: '/support' },
    ],
  },
  {
    title: 'Trust & Standards',
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
    <footer className="mt-32 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-10 lg:gap-12">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <div className="w-6 h-6 rounded-md bg-primary flex items-center justify-center shrink-0">
                <span className="w-2.5 h-2.5 bg-white rounded-sm" />
              </div>
              <span className="font-bold text-lg tracking-tight text-foreground">Colver</span>
            </Link>

            <p className="text-base text-slate-300 max-w-sm leading-relaxed">
              Software built around your business. We engineer tailored software systems, high-performance web applications, and intelligent digital workflows in Bengaluru, India.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-2 pt-2">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <Link
                    key={social.label}
                    href={social.href}
                    {...(social.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    aria-label={social.label}
                    className="w-9 h-9 rounded-md bg-surface hover:bg-surface/80 flex items-center justify-center text-slate-400 hover:text-foreground transition-colors"
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
              <p className="text-sm font-semibold text-foreground">
                {section.title}
              </p>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-foreground transition-colors inline-flex items-center gap-1 group"
                    >
                      <span>{link.label}</span>
                      {link.href.startsWith('http') && (
                        <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-400">
          <p>© {new Date().getFullYear()} Colver Systems. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="inline-flex items-center gap-2 text-foreground font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
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
