'use client'

import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Section, { FadeInView, StaggerContainer, StaggerItem } from '@/components/Section'

export default function ShowcaseSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const imageY = useTransform(scrollYProgress, [0, 1], [100, -100])
  const textX = useTransform(scrollYProgress, [0, 0.5], [-50, 0])
  const textOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1])

  return (
    <Section padding="large">
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">Showcase</h1>
        <p className="text-xl text-muted max-w-2xl mx-auto">
          Discover amazing projects built with Colver.
        </p>
      </div>

      <div ref={containerRef} className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text content */}
          <motion.div style={{ x: textX, opacity: textOpacity }}>
            

            <FadeInView delay={0.1}>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                See it in <span className="text-gradient">action</span>
              </h2>
            </FadeInView>

            <FadeInView delay={0.2}>
              <p className="text-lg text-muted mb-8 leading-relaxed">
                Experience the power of Colver through our interactive demo.
                Watch how teams collaborate in real-time, iterate faster, and ship
                products that users love.
              </p>
            </FadeInView>

            <StaggerContainer className="space-y-4" delayChildren={0.3}>
              {['Real-time collaboration', 'Smart AI suggestions', 'One-click deployment'].map(
                (item, index) => (
                  <StaggerItem key={index}>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                        <svg
                          className="w-3 h-3 text-primary"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className="text-foreground">{item}</span>
                    </div>
                  </StaggerItem>
                )
              )}
            </StaggerContainer>

            <FadeInView delay={0.5}>
              <motion.a
                href="#"
                className="inline-flex items-center gap-2 mt-8 text-primary font-medium hover:gap-4 transition-all duration-300"
                whileHover={{ x: 5 }}
              >
                Try the demo
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </motion.a>
            </FadeInView>
          </motion.div>

          {/* Visual content */}
          <motion.div className="relative" style={{ y: imageY }}>
            <div className="relative aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 p-1">
              <div className="absolute inset-0 rounded-3xl bg-secondary/50 backdrop-blur-sm flex items-center justify-center">
                {/* Mock UI */}
                <div className="w-4/5 h-4/5 rounded-2xl bg-background/80 border border-border overflow-hidden shadow-2xl">
                  <div className="h-12 bg-secondary/50 border-b border-border flex items-center px-4 gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="h-4 w-3/4 bg-secondary rounded" />
                    <div className="h-4 w-1/2 bg-secondary rounded" />
                    <div className="h-32 bg-secondary/50 rounded-lg mt-6" />
                    <div className="flex gap-3 mt-6">
                      <div className="h-10 w-24 bg-primary/20 rounded-lg" />
                      <div className="h-10 w-24 bg-secondary rounded-lg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <motion.div
              className="absolute -top-6 -right-6 w-24 h-24 rounded-2xl bg-primary/20 backdrop-blur-sm border border-primary/30 flex items-center justify-center"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </motion.div>

            <motion.div
              className="absolute -bottom-4 -left-4 w-20 h-20 rounded-xl bg-accent/20 backdrop-blur-sm border border-accent/30 flex items-center justify-center"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            >
              <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </Section>
  )
}