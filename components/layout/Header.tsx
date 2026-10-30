'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, Search, ArrowRight } from '@/components/ui/Icons'

export interface HeaderProps {
  onOpenMobileMenu?: () => void
  onOpenCommand?: () => void
}

const navLinks = [
  { label: 'Work', href: '/showcase' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Docs', href: '/docs' },
]

export default function Header({
  onOpenMobileMenu,
  onOpenCommand,
}: HeaderProps) {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname === href || pathname?.startsWith(href + '/')
  }

  return (
    <header
      className={`
        sticky top-0 z-40 w-full transition-all duration-200
        ${scrolled ? 'bg-[#080808]/95 backdrop-blur-md py-4' : 'bg-transparent py-5'}
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-6">
        {/* Brand Wordmark */}
        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="group flex items-center gap-3 focus:outline-none"
            aria-label="COLVER Home"
          >
            <div className="w-8 h-8 bg-[#C8FF00] text-black font-bold text-sm flex items-center justify-center rounded-[2px] transition-transform group-hover:rotate-6">
              C/
            </div>
            <span className="font-display font-extrabold text-2xl tracking-tight text-[#F4F1EA] glitch-hover leading-none">
              COLVER
            </span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav
          className="hidden md:flex items-center gap-2 text-sm font-medium"
          aria-label="Main Navigation"
        >
          {navLinks.map((item) => {
            const active = isActive(item.href)
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  relative px-4 py-2 transition-colors duration-150
                  ${active ? 'text-[#C8FF00] font-semibold' : 'text-[#BFC3C9] hover:text-[#F4F1EA]'}
                `}
              >
                <span>{item.label}</span>
                {active && (
                  <span className="absolute bottom-0 left-4 right-4 h-[2px] bg-[#C8FF00]" />
                )}
              </Link>
            )
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          {/* Quick Search Action */}
          <button
            type="button"
            onClick={onOpenCommand}
            className="hidden lg:flex items-center gap-2 px-3 py-2 rounded-[2px] bg-[#181818] hover:bg-[#222222] text-[#BFC3C9] hover:text-[#F4F1EA] text-sm transition-colors cursor-pointer"
            aria-label="Open Command Palette"
          >
            <Search className="w-4 h-4" />
            <span>Search</span>
            <kbd className="px-1.5 py-0.5 rounded bg-black/50 text-xs text-[#C8FF00]">
              ⌘K
            </kbd>
          </button>

          {/* Contact CTA: Visible on desktop */}
          <Link href="/contact" className="hidden md:inline-block">
            <button
              type="button"
              className="h-10 px-5 rounded-[2px] bg-[#C8FF00] hover:bg-[#b8ea00] text-black font-semibold text-sm tracking-wide flex items-center gap-2 transition-all active:scale-[0.98] cursor-pointer"
            >
              <span>Discuss Architecture</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </Link>

          {/* Mobile/Tablet Menu Button */}
          <button
            type="button"
            onClick={onOpenMobileMenu}
            className="md:hidden p-2 rounded-[2px] bg-[#181818] text-[#F4F1EA] hover:bg-[#222222] transition-colors cursor-pointer"
            aria-label="Open navigation menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  )
}
