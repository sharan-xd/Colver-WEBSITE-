'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/features', label: 'Features' },
  { href: '/showcase', label: 'Showcase' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

type HeaderProps = {
  brandName?: string
  ctaHref?: string
  ctaLabel?: string
}

export default function Header({
  brandName = 'Colver',
  ctaHref = '/features',
  ctaLabel = 'Get started',
}: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  // Close mobile menu when route changes
  useEffect(() => {
    const frame = requestAnimationFrame(() => setIsOpen(false))

    return () => cancelAnimationFrame(frame)
  }, [pathname])

  return (
    <nav className="mx-4 mt-4" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-6 py-4 rounded-2xl bg-background/80 backdrop-blur-xl border border-border/50">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-foreground">
            {brandName}
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm transition-colors hover:text-primary ${
                  pathname === link.href ? 'text-primary font-medium' : 'text-muted'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <Link
              href={ctaHref}
              className="hidden sm:block px-4 py-2 rounded-full bg-foreground text-background text-sm font-medium"
            >
              {ctaLabel}
            </Link>

            {/* Mobile menu button */}
            <button
              type="button"
              aria-label="Toggle menu"
              className="md:hidden p-2"
              onClick={() => setIsOpen((v) => !v)}
            >
              <div className="w-5 h-4 flex flex-col justify-between">
                <span
                  className={`w-full h-0.5 bg-foreground transition-transform ${
                    isOpen ? 'rotate-45 translate-y-1.5' : ''
                  }`}
                />
                <span
                  className={`w-full h-0.5 bg-foreground transition-opacity ${
                    isOpen ? 'opacity-0' : ''
                  }`}
                />
                <span
                  className={`w-full h-0.5 bg-foreground transition-transform ${
                    isOpen ? '-rotate-45 -translate-y-1.5' : ''
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="md:hidden mt-2 mx-2 p-6 rounded-2xl bg-background/95 backdrop-blur-xl border border-border/50"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-lg ${
                    pathname === link.href ? 'text-primary font-medium' : 'text-muted'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}