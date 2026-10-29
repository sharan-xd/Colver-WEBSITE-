'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Section, { FadeInView, StaggerContainer, StaggerItem } from '@/components/Section'
import { Rocket, Store, Briefcase, Building2, ArrowRight } from 'lucide-react'
import Button from '@/components/ui/Button'

const industries = [
  {
    title: 'High-Growth Startups',
    desc: 'Scalable MVP architectures, rapid iteration pipelines, investor demos, and reactive web applications.',
    icon: Rocket,
    tag: 'Series A+',
  },
  {
    title: 'Modern Retail & Ecommerce',
    desc: 'High-conversion storefronts, multi-currency checkout, headless CMS catalogs, and warehouse sync.',
    icon: Store,
    tag: 'DTC & Retail',
  },
  {
    title: 'Professional & Client Services',
    desc: 'High-trust brand websites, custom client booking portals, secure file sharing, and operations dashboards.',
    icon: Briefcase,
    tag: 'B2B Services',
  },
  {
    title: 'Enterprise Platforms',
    desc: 'Mission-critical internal tools, compliance workflows, legacy migration, and autonomous AI systems.',
    icon: Building2,
    tag: 'Enterprise',
  },
]

export default function HomeIndustriesSection() {
  return (
    <Section padding="medium">
      {/* Header */}
      <div className="text-center mb-14">
        <FadeInView delay={0.1}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-border text-xs font-semibold text-primary uppercase tracking-wider mb-4">
            Domain Expertise
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Engineered for your
            <span className="text-gradient block mt-1">specific industry</span>
          </h2>
        </FadeInView>

        <FadeInView delay={0.2}>
          <p className="text-sm sm:text-base md:text-lg text-muted max-w-2xl mx-auto leading-relaxed">
            From agile startups to enterprise organizations, we craft digital platforms
            aligned directly to operational scale and security requirements.
          </p>
        </FadeInView>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto">
        <StaggerContainer
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
          staggerDelay={0.08}
        >
          {industries.map((industry) => {
            const Icon = industry.icon
            return (
              <StaggerItem key={industry.title}>
                <motion.div
                  className="
                    p-6 sm:p-7 rounded-2xl glass-card border border-border/60
                    hover:border-primary/40 transition-all duration-200 h-full flex flex-col justify-between
                  "
                  whileHover={{ y: -4 }}
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-semibold tracking-wider text-muted px-2 py-0.5 rounded-full bg-surface border border-border">
                        {industry.tag}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold mb-2 tracking-tight text-foreground">
                      {industry.title}
                    </h3>

                    <p className="text-muted leading-relaxed text-xs sm:text-sm">
                      {industry.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-border/40 flex items-center gap-1 text-xs font-semibold text-primary">
                    <span>View solutions</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </motion.div>
              </StaggerItem>
            )
          })}
        </StaggerContainer>

        {/* Global CTA Banner */}
        <FadeInView delay={0.3}>
          <div className="mt-14 p-8 sm:p-12 rounded-3xl glass-panel border border-primary/30 text-center relative overflow-hidden bg-gradient-to-b from-surface/50 to-surface/20">
            <div className="max-w-2xl mx-auto space-y-4">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                Ready to accelerate your next release?
              </h3>
              <p className="text-sm sm:text-base text-muted leading-relaxed">
                Schedule a technical consultation to explore custom software architectures, operational workflows, or project roadmaps.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-3">
                <Link href="/contact" className="w-full sm:w-auto">
                  <Button size="lg" variant="primary" iconRight={<ArrowRight className="w-4 h-4" />}>
                    Discuss Your Project
                  </Button>
                </Link>
                <Link href="/services" className="w-full sm:w-auto">
                  <Button size="lg" variant="secondary" className="glass-panel">
                    Explore Services
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </FadeInView>
      </div>
    </Section>
  )
}
