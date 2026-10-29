'use client'

import React, { useState, useEffect } from 'react'
import Header from './Header'
import MobileDrawer from './MobileDrawer'
import CommandPalette from '@/components/ui/CommandPalette'
import Footer from './Footer'

export interface AppShellProps {
  children: React.ReactNode
}

export default function AppShell({ children }: AppShellProps) {
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [isCommandOpen, setIsCommandOpen] = useState(false)

  // Global ⌘K / Ctrl+K keyboard shortcut listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setIsCommandOpen((prev) => !prev)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <div className="min-h-screen flex flex-col relative text-foreground bg-background selection:bg-primary/20 selection:text-primary">
      {/* Conventional Sticky Top Horizontal Header */}
      <Header
        onOpenMobileMenu={() => setIsMobileOpen(true)}
        onOpenCommand={() => setIsCommandOpen(true)}
      />

      {/* Main Content Area - Full width with centered max constraint, zero sidebar padding */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
        {children}
      </main>

      {/* Mobile Navigation Drawer */}
      <MobileDrawer
        isOpen={isMobileOpen}
        onClose={() => setIsMobileOpen(false)}
        onOpenCommand={() => setIsCommandOpen(true)}
      />

      {/* Global Command Palette Dialog (⌘K) */}
      <CommandPalette
        isOpen={isCommandOpen}
        onClose={() => setIsCommandOpen(false)}
      />

      {/* Global Commercial Footer */}
      <Footer />
    </div>
  )
}
