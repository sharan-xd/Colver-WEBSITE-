'use client'

import React from 'react'
import Section, { FadeInView, StaggerContainer, StaggerItem } from '@/components/Section'
import { motion } from 'framer-motion'
import { Globe, Layout, ShoppingBag, Cpu, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const pillars = [
  {
    title: 'Custom Software Systems',
    desc: 'Bespoke ERPs, client portals, internal workflow tools, and operations dashboards built around your business rules.',
    icon: Globe,
    tag: 'Core Systems',
    href: '/services#custom-software',
  },
  {
    title: 'Web Applications',
    desc: 'High-concurrency web apps, SaaS platforms, and responsive customer portals engineered with modern Next.js and React.',
    icon: Layout,
    tag: 'Web Products',
    href: '/services#web-applications',
  },
  {
    title: 'Ecommerce & Ordering',
    desc: 'Custom online stores, B2B wholesale portals, Indian payment rails (UPI, Razorpay), and automated invoice generation.',
    icon: ShoppingBag,
    tag: 'Commerce & Sales',
    href: '/services#ecommerce-platforms',
  },
  {
    title: 'Operations & AI Workflows',
    desc: 'Real-time multi-godown inventory tracking, document data extraction, and pragmatic workflow automations.',
    icon: Cpu,
    tag: 'Operations & AI',
    href: '/services#inventory-operations',
  },
]

export default function HomeWWDSection() {
  return (
    <Section padding="medium">
      {/* Header */}
      <div className="text-center mb-14">
        <FadeInView delay={0.1}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-border text-xs font-semibold text-primary uppercase tracking-wider mb-4">
            Engineering Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Software solutions built for
            <span className="text-gradient block mt-1">real-world operations</span>
          </h2>
        </FadeInView>

        <FadeInView delay={0.2}>
          <p className="text-sm sm:text-base md:text-lg text-muted max-w-2xl mx-auto leading-relaxed">
            We architect and deploy tailored software systems, high-performance web applications,
            and operational platforms that streamline business growth.
          </p>
        </FadeInView>
      </div>

      {/* Pillars Grid */}
      <div className="max-w-7xl mx-auto">
        <StaggerContainer
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
          staggerDelay={0.08}
        >
          {pillars.map((pillar) => {
            const Icon = pillar.icon
            return (
              <StaggerItem key={pillar.title}>
                <Link href={pillar.href} className="block h-full">
                  <motion.div
                    className="
                      group relative p-6 sm:p-7 rounded-2xl glass-card
                      flex flex-col justify-between h-full border border-border/60
                      hover:border-primary/40 transition-all duration-200 cursor-pointer
                    "
                    whileHover={{ y: -4 }}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-5">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-[10px] uppercase font-semibold tracking-wider text-muted px-2 py-0.5 rounded-full bg-surface border border-border">
                          {pillar.tag}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold mb-2.5 tracking-tight text-foreground group-hover:text-primary transition-colors">
                        {pillar.title}
                      </h3>

                      <p className="text-muted leading-relaxed text-xs sm:text-sm">
                        {pillar.desc}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-border/40 flex items-center text-xs font-semibold text-primary gap-1 group-hover:gap-2 transition-all">
                      <span>Explore service details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </motion.div>
                </Link>
              </StaggerItem>
            )
          })}
        </StaggerContainer>

        <div className="text-center mt-10">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
          >
            <span>View all software services and technical capabilities</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </Section>
  )
}
