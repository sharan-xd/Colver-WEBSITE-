'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight, Mail } from '@/components/ui/Icons'

export default function HomeCTASection() {
  return (
    <section className="py-24 relative bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#121212] p-8 sm:p-14 lg:p-16 rounded-[2px] space-y-8">
          {/* Headline: Under 2 lines at all viewports */}
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-tight text-[#F4F1EA] leading-[1.08] max-w-3xl text-balance">
            Ready to Architect Your System?
          </h2>

          {/* Supporting Copy */}
          <p className="text-base sm:text-lg text-[#BFC3C9] max-w-2xl leading-relaxed">
            Bring your operational bottlenecks, product specifications, or high-concurrency requirements. Our senior architects will analyze your system parameters and respond with a formal engineering blueprint within 48 hours.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <Link href="/contact" className="inline-block">
              <button
                type="button"
                className="w-full sm:w-auto h-12 px-8 rounded-[2px] bg-[#C8FF00] hover:bg-[#b8ea00] text-black font-semibold text-sm tracking-wide flex items-center justify-center gap-2.5 transition-all active:scale-[0.98] cursor-pointer"
              >
                <span>Initiate Architecture Audit</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>

            <Link href="/pricing" className="inline-block">
              <button
                type="button"
                className="w-full sm:w-auto h-12 px-7 rounded-[2px] bg-[#181818] hover:bg-[#222222] text-[#F4F1EA] font-semibold text-sm tracking-wide flex items-center justify-center gap-2 transition-all active:scale-[0.98] cursor-pointer"
              >
                <span>View Sprint Pricing</span>
              </button>
            </Link>
          </div>

          {/* Direct Contact */}
          <div className="pt-6 mt-4 p-5 bg-[#0a0a0a] rounded-[2px] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-sm sm:text-base text-[#8E929A]">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#C8FF00]" />
              <span>Direct Inquiries: <a href="mailto:contact@colver.in" className="text-[#F4F1EA] hover:text-[#C8FF00] underline decoration-white/30">contact@colver.in</a></span>
            </div>
            <div>
              Bengaluru Studio · Indiranagar 560038
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
