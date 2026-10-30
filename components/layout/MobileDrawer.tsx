'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Search, ArrowRight } from '@/components/ui/Icons'

export interface MobileDrawerProps {
  isOpen: boolean
  onClose: () => void
  onOpenCommand: () => void
}

const navItems = [
  { code: '01', label: 'Selected Work', href: '/showcase' },
  { code: '02', label: 'Services & Systems', href: '/services' },
  { code: '03', label: 'About Studio', href: '/about' },
  { code: '04', label: 'Pricing & Sprints', href: '/pricing' },
  { code: '05', label: 'Documentation', href: '/docs' },
  { code: '06', label: 'Engineering Blog', href: '/blog' },
  { code: '07', label: 'Security & Trust', href: '/security' },
  { code: '08', label: 'Start Project', href: '/contact' },
]

export default function MobileDrawer({
  isOpen,
  onClose,
  onOpenCommand,
}: MobileDrawerProps) {
  const pathname = usePathname()
  const [timeStr, setTimeStr] = useState('')

  useEffect(() => {
    onClose()
  }, [pathname, onClose])

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setTimeStr(
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
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-[#080808] flex flex-col p-6 overflow-y-auto"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C8FF00] animate-pulse" />
              <span className="font-mono text-xs text-[#8E929A] tracking-wider uppercase">
                COLVER STUDIO // {timeStr}
              </span>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="p-2 border border-white/20 text-[#F4F1EA] hover:border-[#C8FF00] hover:text-[#C8FF00] transition-colors rounded-[2px]"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Search Action */}
          <div className="pt-6">
            <button
              type="button"
              onClick={() => {
                onClose()
                onOpenCommand()
              }}
              className="w-full py-3 px-4 rounded-[2px] bg-white/[0.04] border border-white/10 flex items-center justify-between text-xs font-mono text-[#8E929A]"
            >
              <span className="flex items-center gap-2">
                <Search className="w-4 h-4 text-[#C8FF00]" />
                <span>SEARCH DOCUMENTATION / CODE</span>
              </span>
              <span className="text-[#C8FF00]">⌘K</span>
            </button>
          </div>

          {/* Nav List with Oversized Typographic Links */}
          <nav className="flex-1 py-8 flex flex-col justify-center space-y-4">
            {navItems.map((item, idx) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.04 }}
              >
                <Link
                  href={item.href}
                  className="group flex items-baseline justify-between py-2 border-b border-white/5 hover:border-[#C8FF00] transition-colors"
                >
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-xs text-[#C8FF00]/60 group-hover:text-[#C8FF00]">
                      [{item.code}]
                    </span>
                    <span className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#F4F1EA] group-hover:translate-x-2 transition-transform">
                      {item.label}
                    </span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#8E929A] group-hover:text-[#C8FF00] transition-colors" />
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Bottom Telemetry & Direct Contact */}
          <div className="pt-6 border-t border-white/10 flex flex-col gap-4 font-mono text-xs">
            <div className="flex items-center justify-between text-[#8E929A]">
              <span>BLR_COORDS</span>
              <span className="text-[#F4F1EA]">12.9716° N, 77.5946° E</span>
            </div>
            <Link href="/contact" className="w-full">
              <button
                type="button"
                className="w-full py-3.5 bg-[#C8FF00] hover:bg-[#b8ea00] text-black font-bold uppercase tracking-wider text-xs rounded-[2px]"
              >
                DISCUSS ARCHITECTURE SPEC
              </button>
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
