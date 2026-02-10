'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '@/lib/theme'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/features', label: 'Features' },
  { href: '/showcase', label: 'Showcase' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()
  const pathname = usePathname()

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <nav className="mx-4 mt-4">
        <div className="max-w-7xl mx-auto px-6 py-4 rounded-2xl bg-background/80 backdrop-blur-xl border border-border/50">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="text-xl font-bold text-foreground">
              Colver
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
              <button
                onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-full hover:bg-secondary transition-colors"
              >
                {resolvedTheme === 'dark' ? '☀️' : '🌙'}
              </button>
              
              <Link
                href="/features"
                className="hidden sm:block px-4 py-2 rounded-full bg-foreground text-background text-sm font-medium"
              >
                Get started
              </Link>

              {/* Mobile menu button */}
              <button
                className="md:hidden p-2"
                onClick={() => setIsOpen(!isOpen)}
              >
                <div className="w-5 h-4 flex flex-col justify-between">
                  <span className={`w-full h-0.5 bg-foreground transition-transform ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
                  <span className={`w-full h-0.5 bg-foreground transition-opacity ${isOpen ? 'opacity-0' : ''}`} />
                  <span className={`w-full h-0.5 bg-foreground transition-transform ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden mt-2 mx-2 p-6 rounded-2xl bg-background/95 backdrop-blur-xl border border-border/50"
            >
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-lg ${pathname === link.href ? 'text-primary font-medium' : 'text-muted'}`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}