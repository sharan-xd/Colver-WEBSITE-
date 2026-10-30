'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Github, Twitter, Linkedin, ArrowUpRight } from '@/components/ui/Icons'
import ColverLogo from '@/components/ui/ColverLogo'

const navColumns = [
  {
    title: 'Systems & Code',
    links: [
      { label: 'Custom Architecture', href: '/services#custom-software' },
      { label: 'High-Concurrency Web', href: '/services#web-applications' },
      { label: 'Commerce Engines', href: '/services#ecommerce-platforms' },
      { label: 'Operations & ERP', href: '/services#inventory-operations' },
      { label: 'Selected Work', href: '/showcase' },
    ],
  },
  {
    title: 'Telemetry & Docs',
    links: [
      { label: 'Architecture Docs', href: '/docs' },
      { label: 'Production Guides', href: '/guides' },
      { label: 'Engineering Blog', href: '/blog' },
      { label: 'Pricing & Sprints', href: '/pricing' },
      { label: 'System Changelog', href: '/changelog' },
    ],
  },
  {
    title: 'Studio & Trust',
    links: [
      { label: 'About Studio', href: '/about' },
      { label: 'Security & Trust', href: '/security' },
      { label: 'Careers', href: '/careers' },
      { label: 'Client Support', href: '/support' },
      { label: 'Privacy Policy', href: '/privacy' },
    ],
  },
]

export default function Footer() {
  const [istTime, setIstTime] = useState('')

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setIstTime(
        now.toLocaleTimeString('en-US', {
          timeZone: 'Asia/Kolkata',
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        }) + ' IST'
      )
    }
    updateTime()
    const timer = setInterval(updateTime, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <footer className="w-full bg-[#050505] pt-20 pb-12 mt-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Monolithic Wordmark Header */}
        <div className="pb-16 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div>
            <span className="text-sm text-[#C8FF00] font-semibold block mb-2">
              Bengaluru Studio · 12.9716° N, 77.5946° E
            </span>
            <div className="pt-2">
              <Link href="/" aria-label="COLVER Homepage">
                <ColverLogo
                  variant="full"
                  className="h-20 sm:h-24 lg:h-28 w-20 sm:w-24 lg:w-28"
                />
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-start lg:items-end gap-2 text-sm text-[#BFC3C9]">
            <div className="flex items-center gap-2 text-[#F4F1EA]">
              <span className="w-2 h-2 rounded-full bg-[#C8FF00] animate-pulse" />
              <span>Studio Clock: {istTime || '12:00:00 IST'}</span>
            </div>
            <span>Production Latency: 14ms to Edge</span>
            <Link
              href="/contact"
              className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-black bg-[#C8FF00] hover:bg-[#b8ea00] px-4 py-2 rounded-[2px] transition-colors"
            >
              <span>Connect with an Architect</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Swiss Grid Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 py-16 bg-[#080808] p-8 rounded-[2px]">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-base font-bold text-[#F4F1EA] tracking-wide block">
              Engineering Studio Specification
            </span>
            <p className="text-base text-[#BFC3C9] leading-relaxed max-w-sm">
              Colver is a software architecture and product engineering studio based in Bengaluru. We replace fragmented tools with high-speed, custom business platforms, transaction pipelines, and autonomous workflows.
            </p>
            <div className="pt-2 text-base text-[#BFC3C9] space-y-1">
              <div>Inquiries: <a href="mailto:contact@colver.in" className="text-[#F4F1EA] hover:text-[#C8FF00] underline decoration-white/30">contact@colver.in</a></div>
              <div>Studio: Indiranagar, Bengaluru, Karnataka 560038</div>
            </div>
          </div>

          {navColumns.map((col) => (
            <div key={col.title} className="lg:col-span-2 space-y-3">
              <span className="text-sm font-bold text-[#F4F1EA] tracking-wide block">
                {col.title}
              </span>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#BFC3C9] hover:text-[#C8FF00] transition-colors block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="lg:col-span-1 space-y-3">
            <span className="text-sm font-bold text-[#F4F1EA] tracking-wide block">
              Network
            </span>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="https://github.com/sharan-xd/Colver-WEBSITE-"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#BFC3C9] hover:text-[#C8FF00] transition-colors flex items-center gap-1.5"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/colver-systems"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#BFC3C9] hover:text-[#C8FF00] transition-colors flex items-center gap-1.5"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/colver_systems"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#BFC3C9] hover:text-[#C8FF00] transition-colors flex items-center gap-1.5"
                >
                  <Twitter className="w-4 h-4" />
                  <span>X (Twitter)</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[#8E929A]">
          <div className="flex items-center gap-2.5">
            <ColverLogo variant="emblem" className="h-5 w-5" ariaLabel="Colver" />
            <span>© {new Date().getFullYear()} Colver Systems. Proudly engineered in Bengaluru.</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-[#F4F1EA] transition-colors">Privacy Policy</Link>
            <span>·</span>
            <Link href="/terms" className="hover:text-[#F4F1EA] transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
