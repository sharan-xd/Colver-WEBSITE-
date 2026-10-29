'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Section, { FadeInView, StaggerContainer, StaggerItem } from '@/components/Section'
import { Compass, Network, Code2, Rocket } from 'lucide-react'

const steps = [
  {
    step: '01',
    title: 'Discovery & Scope',
    desc: 'Deep-dive into business targets, operational workflows, API constraints, and performance KPIs.',
    icon: Compass,
  },
  {
    step: '02',
    title: 'Architecture & Design',
    desc: 'Defining scalable database schemas, micro-interactions, API contracts, and design tokens.',
    icon: Network,
  },
  {
    step: '03',
    title: 'Iterative Engineering',
    desc: 'Clean, typed, test-driven implementation built for blazing speed and effortless extensibility.',
    icon: Code2,
  },
  {
    step: '04',
    title: 'Deployment & Telemetry',
    desc: 'Global edge deployment, uptime telemetry, continuous security audits, and continuous optimization.',
    icon: Rocket,
  },
]

export default function HomeProcessSection() {
  return (
    <Section padding="medium">
      {/* Header */}
      <div className="text-center mb-14">
        <FadeInView delay={0.1}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-border text-xs font-semibold text-primary uppercase tracking-wider mb-4">
            Methodology
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Structured process.
            <span className="text-gradient block mt-1">Predictable outcomes.</span>
          </h2>
        </FadeInView>

        <FadeInView delay={0.2}>
          <p className="text-sm sm:text-base md:text-lg text-muted max-w-2xl mx-auto leading-relaxed">
            Eliminate guesswork. Our disciplined delivery cadence pairs rapid prototyping with
            enterprise-grade software craftsmanship.
          </p>
        </FadeInView>
      </div>

      {/* Steps Grid */}
      <div className="max-w-7xl mx-auto">
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5" staggerDelay={0.08}>
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <StaggerItem key={step.step}>
                <motion.div
                  className="
                    relative p-6 sm:p-7 rounded-2xl glass-card border border-border/60
                    hover:border-primary/40 transition-all duration-200 h-full flex flex-col justify-between
                  "
                  whileHover={{ y: -4 }}
                >
                  <div>
                    {/* Step indicator */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-xs font-mono font-bold text-primary px-2.5 py-1 rounded-lg bg-primary/10 border border-primary/20">
                        STEP {step.step}
                      </span>
                      <div className="w-9 h-9 rounded-xl bg-surface border border-border flex items-center justify-center text-muted">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    <h3 className="text-lg font-bold mb-2 tracking-tight text-foreground">
                      {step.title}
                    </h3>

                    <p className="text-muted leading-relaxed text-xs sm:text-sm">
                      {step.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-border/40 text-[11px] font-mono text-muted/80">
                    Phase 0{index + 1} // Verified Delivery
                  </div>
                </motion.div>
              </StaggerItem>
            )
          })}
        </StaggerContainer>
      </div>
    </Section>
  )
}
