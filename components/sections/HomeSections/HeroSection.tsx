'use client'

import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import {
  Sparkles,
  ArrowRight,
  Layers,
  ShieldCheck,
  Terminal,
  CheckCircle2,
  Cpu,
  Boxes,
  Zap,
} from '@/components/ui/Icons'
import { RevealText } from '@/components/Section'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.45], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.45], [1, 0.94])
  const y = useTransform(scrollYProgress, [0, 0.45], [0, 60])

  return (
    <div
      ref={containerRef}
      className="relative w-full pt-8 md:pt-16 pb-16 flex flex-col items-center justify-center overflow-hidden"
    >
      <motion.div
        className="w-full max-w-5xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center justify-center"
        style={{ opacity, scale, y }}
      >
        {/* Capability Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-6"
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass-panel border border-border/70 hover:border-primary/40 transition-colors shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-medium text-foreground/90">
              Custom Software & Digital Product Engineering
            </span>
            <span className="text-muted/40">•</span>
            <span className="text-xs text-muted">Bangalore, India</span>
          </div>
        </motion.div>

        {/* Core Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1]">
          <RevealText className="block text-foreground">
            Software Built Around
          </RevealText>
          <span className="block mt-1 sm:mt-2">
            <RevealText delay={0.15} className="text-gradient">
              Your Business.
            </RevealText>
          </span>
        </h1>

        {/* Subtitle */}
        <motion.p
          className="text-base sm:text-lg md:text-xl text-muted max-w-3xl mx-auto mb-10 leading-relaxed font-normal"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Colver designs and develops modern digital products, custom business applications,
          and software solutions tailored to real-world requirements.
        </motion.p>

        {/* Action CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link href="/contact" className="w-full sm:w-auto">
            <Button
              size="lg"
              variant="primary"
              className="w-full sm:w-auto shadow-lg shadow-primary/25"
              iconRight={<ArrowRight className="w-4 h-4" />}
            >
              Discuss Your Project
            </Button>
          </Link>
          <Link href="/showcase" className="w-full sm:w-auto">
            <Button
              size="lg"
              variant="secondary"
              className="w-full sm:w-auto glass-panel"
              iconRight={<Layers className="w-4 h-4" />}
            >
              Explore Our Work
            </Button>
          </Link>
        </motion.div>

        {/* Honest Value Props / Technical Capabilities */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-14 sm:mt-16 pt-8 border-t border-border/50 max-w-3xl w-full mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
        >
          <div className="text-center sm:text-left p-3 rounded-2xl glass-card border border-border/60">
            <div className="flex items-center justify-center sm:justify-start gap-2 mb-1.5 text-primary">
              <Cpu className="w-4 h-4" />
              <span className="text-sm font-bold text-foreground">Tailored Architecture</span>
            </div>
            <p className="text-xs text-muted leading-relaxed">
              Custom systems designed around your exact business workflows, rules, and data structures.
            </p>
          </div>

          <div className="text-center sm:text-left p-3 rounded-2xl glass-card border border-border/60">
            <div className="flex items-center justify-center sm:justify-start gap-2 mb-1.5 text-primary">
              <Zap className="w-4 h-4" />
              <span className="text-sm font-bold text-foreground">Modern Tech Stack</span>
            </div>
            <p className="text-xs text-muted leading-relaxed">
              TypeScript, Next.js, Node.js, PostgreSQL, and cloud edge infrastructure for speed.
            </p>
          </div>

          <div className="text-center sm:text-left p-3 rounded-2xl glass-card border border-border/60">
            <div className="flex items-center justify-center sm:justify-start gap-2 mb-1.5 text-primary">
              <ShieldCheck className="w-4 h-4" />
              <span className="text-sm font-bold text-foreground">End-to-End Delivery</span>
            </div>
            <p className="text-xs text-muted leading-relaxed">
              From requirement analysis and architecture to production deployment and long-term maintenance.
            </p>
          </div>
        </motion.div>

        {/* Interactive Glass Mockup Preview Window */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="w-full max-w-4xl mt-14 rounded-2xl glass-panel border border-border/70 overflow-hidden shadow-2xl relative text-left"
        >
          {/* Window Chrome Header */}
          <div className="h-10 px-4 bg-surface/80 border-b border-border/60 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/70" />
              <span className="w-3 h-3 rounded-full bg-amber-500/70" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/70" />
              <span className="ml-3 text-[11px] font-mono text-muted">colver-client-console — production</span>
            </div>
            <div className="flex items-center gap-2 text-[11px] text-muted font-mono">
              <Terminal className="w-3.5 h-3.5" />
              <span>Tailored Platform Architecture</span>
            </div>
          </div>

          {/* Window Body: Real Business Capabilities */}
          <div className="p-6 sm:p-8 grid md:grid-cols-3 gap-6">
            <div className="space-y-3">
              <Badge variant="purple" dot>Custom Business Apps</Badge>
              <h3 className="text-base font-bold text-foreground">Operational Workflows & Portals</h3>
              <p className="text-xs text-muted leading-relaxed">
                Consolidate fragmented spreadsheets and legacy tools into clean, role-based web platforms.
              </p>
              <div className="flex items-center gap-2 text-xs text-primary font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Zero bloated subscription fees</span>
              </div>
            </div>

            <div className="space-y-3">
              <Badge variant="info" dot>Inventory & Logistics</Badge>
              <h3 className="text-base font-bold text-foreground">Real-Time Stock & Multi-Godown Sync</h3>
              <p className="text-xs text-muted leading-relaxed">
                Live inventory tracking, automated reorder thresholds, barcode scanning, and GST receipts.
              </p>
              <div className="flex items-center gap-2 text-xs text-primary font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Sub-second ledger updates</span>
              </div>
            </div>

            <div className="space-y-3">
              <Badge variant="success" dot>Payment & API Rails</Badge>
              <h3 className="text-base font-bold text-foreground">Unified UPI & Gateway Integrations</h3>
              <p className="text-xs text-muted leading-relaxed">
                Flawless integrations with Razorpay, Stripe, WhatsApp alerts, and third-party logistics APIs.
              </p>
              <div className="flex items-center gap-2 text-xs text-primary font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Encrypted end-to-end</span>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
