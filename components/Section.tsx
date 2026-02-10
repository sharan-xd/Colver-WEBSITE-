'use client'

import { useRef, useEffect, ReactNode } from 'react'
import { motion, useInView, useScroll, useTransform, Variants } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { staggerContainer, fadeInUp } from '@/lib/animations'

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

// ============================================
// TYPES
// ============================================

interface SectionProps {
  children: ReactNode
  id?: string
  className?: string
  fullHeight?: boolean
  padding?: 'none' | 'small' | 'medium' | 'large'
  background?: 'transparent' | 'muted' | 'gradient'
  animate?: boolean
  onEnter?: () => void
  onLeave?: () => void
}

interface ParallaxLayerProps {
  children: ReactNode
  speed?: number
  className?: string
}

// ============================================
// SECTION COMPONENT
// ============================================

export default function Section({
  children,
  id,
  className = '',
  fullHeight = false,
  padding = 'large',
  background = 'transparent',
  animate = true,
  onEnter,
  onLeave,
}: SectionProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { 
    once: false, 
    amount: 0.2,
    margin: '-100px'
  })

  // Notify parent of visibility changes
  useEffect(() => {
    if (isInView && onEnter) onEnter()
    if (!isInView && onLeave) onLeave()
  }, [isInView, onEnter, onLeave])

  // Padding classes
  const paddingClasses = {
    none: '',
    small: 'py-8',
    medium: 'py-16',
    large: 'py-24 md:py-32',
  }

  // Background classes
  const backgroundClasses = {
    transparent: '',
    muted: 'bg-secondary/30',
    gradient: 'bg-gradient-to-b from-transparent via-secondary/10 to-transparent',
  }

  return (
    <motion.section
      ref={sectionRef}
      id={id}
      className={`
        relative w-full
        ${fullHeight ? 'min-h-screen flex items-center' : ''}
        ${paddingClasses[padding]}
        ${backgroundClasses[background]}
        ${className}
      `}
      initial={animate ? 'hidden' : 'visible'}
      whileInView={animate ? 'visible' : undefined}
      viewport={{ once: false, amount: 0.2 }}
      variants={animate ? staggerContainer : undefined}
    >
      {children}
    </motion.section>
  )
}

// ============================================
// PARALLAX LAYER COMPONENT
// ============================================

export function ParallaxLayer({ 
  children, 
  speed = 0.5, 
  className = '' 
}: ParallaxLayerProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [100 * speed, -100 * speed])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <motion.div
      ref={ref}
      style={{ y, opacity }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// ============================================
// REVEAL TEXT COMPONENT
// ============================================

interface RevealTextProps {
  children: string
  className?: string
  delay?: number
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span'
}

export function RevealText({ 
  children, 
  className = '', 
  delay = 0,
  as: Component = 'span'
}: RevealTextProps) {
  const words = children.split(' ')
  
  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: delay,
      },
    },
  }
  
  const child: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
      rotateX: -90,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  }

  return (
    <motion.span
      className={`inline-block ${className}`}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="inline-block mr-[0.25em]"
          variants={child}
          style={{ transformOrigin: 'bottom' }}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  )
}

// ============================================
// FADE IN VIEW COMPONENT
// ============================================

interface FadeInViewProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  distance?: number
  duration?: number
}

export function FadeInView({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  distance = 40,
  duration = 0.8,
}: FadeInViewProps) {
  const directions = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
    none: {},
  }

  return (
    <motion.div
      className={className}
      initial={{ 
        opacity: 0, 
        ...directions[direction] 
      }}
      whileInView={{ 
        opacity: 1, 
        x: 0, 
        y: 0 
      }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  )
}

// ============================================
// STAGGER CONTAINER COMPONENT
// ============================================

interface StaggerContainerProps {
  children: ReactNode
  className?: string
  staggerDelay?: number
  delayChildren?: number
}

export function StaggerContainer({
  children,
  className = '',
  staggerDelay = 0.1,
  delayChildren = 0,
}: StaggerContainerProps) {
  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren,
      },
    },
  }

  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  )
}

// ============================================
// STAGGER ITEM COMPONENT
// ============================================

interface StaggerItemProps {
  children: ReactNode
  className?: string
}

export function StaggerItem({ children, className = '' }: StaggerItemProps) {
  const item: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  }

  return (
    <motion.div className={className} variants={item}>
      {children}
    </motion.div>
  )
}

// ============================================
// PINNED SECTION (GSAP)
// ============================================

interface PinnedSectionProps {
  children: ReactNode
  className?: string
  pinDuration?: string
}

export function PinnedSection({ 
  children, 
  className = '',
  pinDuration = '200%'
}: PinnedSectionProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const triggerRef = useRef<ScrollTrigger | null>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      triggerRef.current = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: `+=${pinDuration}`,
        pin: true,
        pinSpacing: true,
        scrub: 1,
      })
    }, sectionRef)

    return () => {
      ctx.revert()
    }
  }, [pinDuration])

  return (
    <section ref={sectionRef} className={`relative min-h-screen ${className}`}>
      {children}
    </section>
  )
}

// ============================================
// SCROLL PROGRESS BAR
// ============================================

export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll()
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary z-50 origin-left"
      style={{ scaleX }}
    />
  )
}
