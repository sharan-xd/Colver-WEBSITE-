'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  Layers,
  Cpu,
  ShieldCheck,
} from '@/components/ui/Icons'
import Button from '@/components/ui/Button'
import ColverLiveConsole from '@/components/sections/HomeSections/ColverLiveConsole'

export default function HeroSection() {
  return (
    <section className="relative w-full pt-8 md:pt-16 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left: Confident Editorial Title and Statement */}
          <motion.div
            className="lg:col-span-6 space-y-6"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h1 className="text-3xl sm:text-5xl lg:text-[50px] font-bold tracking-tight text-foreground leading-[1.08]">
              Software Built for Real Operations
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed">
              Colver designs and engineers bespoke business systems, high-concurrency web applications, and intelligent operational workflows for growing companies.
            </p>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <Link href="/contact" className="inline-block">
                <Button
                  size="lg"
                  variant="primary"
                  className="w-full sm:w-auto"
                  iconRight={<ArrowRight className="w-4 h-4" />}
                >
                  Discuss Your Architecture
                </Button>
              </Link>
              <Link href="/showcase" className="inline-block">
                <Button
                  size="lg"
                  variant="secondary"
                  className="w-full sm:w-auto"
                  iconRight={<Layers className="w-4 h-4" />}
                >
                  Explore Our Work
                </Button>
              </Link>
            </div>

            {/* Core Architectural Guarantees */}
            <div className="pt-6 grid grid-cols-2 gap-6 text-sm">
              <div className="space-y-1">
                <span className="font-semibold text-foreground block">
                  Custom Architecture
                </span>
                <p className="text-sm text-slate-400 leading-normal">
                  Bespoke data models built around your exact business rules.
                </p>
              </div>
              <div className="space-y-1">
                <span className="font-semibold text-foreground block">
                  Verified Performance
                </span>
                <p className="text-sm text-slate-400 leading-normal">
                  Sub-second response latencies and high-concurrency stability.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: The Colver Interactive Live System Console */}
          <motion.div
            className="lg:col-span-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
          >
            <ColverLiveConsole />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
