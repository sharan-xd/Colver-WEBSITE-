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
      <Header
        onOpenMobileMenu={() => setIsMobileOpen(true)}
        onOpenCommand={() => setIsCommandOpen(true)}
      />

      <main className="flex-1 w-full">
        {children}
      </main>

      <MobileDrawer
        isOpen={isMobileOpen}
        onClose={() => setIsMobileOpen(false)}
        onOpenCommand={() => setIsCommandOpen(true)}
      />

      <CommandPalette
        isOpen={isCommandOpen}
        onClose={() => setIsCommandOpen(false)}
      />

      <Footer />
    </div>
  )
}
