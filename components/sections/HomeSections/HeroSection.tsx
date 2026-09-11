'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { RevealText } from '@/components/Section'

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  })
  
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9])
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100])

  return (
    <div 
      ref={containerRef} 
      className="relative min-h-screen w-full flex items-center justify-center"
    >
      <motion.div 
        className="w-full max-w-5xl mx-auto px-6 text-center flex flex-col items-center justify-center"
        style={{ opacity, scale, y }}
      >
        {/* Badge */}
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-sm text-muted">Tomorrow&apos;s Tech , Trusted Today</span>
        </motion.div>

        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
          <RevealText className="block">
            The future of
          </RevealText>
          <span className="block mt-2">
            <RevealText delay={0.2} className="text-gradient">
              digital creation
            </RevealText>
          </span>
        </h1>

        {/* Subtitle */}
        <motion.p
          className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Colver empowers creators with AI-driven tools, seamless collaboration, 
          and infinite possibilities. Build what&apos;s next.
        </motion.p>

        {/* CTA Buttons - Navigate to other pages */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Link href="/features">
            <motion.button
              className="px-8 py-4 rounded-full bg-foreground text-background font-medium
                       hover:bg-foreground/90 transition-colors duration-300
                       shadow-lg shadow-foreground/20"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Features
            </motion.button>
          </Link>
          <Link href="/showcase">
            <motion.button
              className="px-8 py-4 rounded-full bg-secondary/50 border border-border font-medium
                       hover:bg-secondary transition-colors duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              View Showcase
            </motion.button>
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-3 gap-8 mt-20 max-w-lg mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {[
            { value: '10K+', label: 'Creators' },
            { value: '1M+', label: 'Projects' },
            { value: '99.9%', label: 'Uptime' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</div>
              <div className="text-sm text-muted mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator - removed since no more sections to scroll to */}
    </div>
  )
}