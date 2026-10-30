'use client'

import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'

interface MotionRevealProps {
  children: React.ReactNode
  className?: string
  variant?: 'fadeUp' | 'fade' | 'slideLeft' | 'slideRight' | 'scaleUp'
  delay?: number
  duration?: number
  amount?: number
  once?: boolean
}

const easeSwiss = [0.16, 1, 0.3, 1] as const

/**
 * MotionReveal: Adds restrained, refined scroll entrance effects.
 * Elements gently assemble as the user scrolls into view.
 * Fully respects prefers-reduced-motion settings.
 */
export default function MotionReveal({
  children,
  className = '',
  variant = 'fadeUp',
  delay = 0,
  duration = 0.5,
  amount = 0.15,
  once = true,
}: MotionRevealProps) {
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>
  }

  const getInitial = () => {
    switch (variant) {
      case 'fade':
        return { opacity: 0 }
      case 'slideLeft':
        return { opacity: 0, x: -16 }
      case 'slideRight':
        return { opacity: 0, x: 16 }
      case 'scaleUp':
        return { opacity: 0, scale: 0.98, y: 12 }
      case 'fadeUp':
      default:
        return { opacity: 0, y: 16 }
    }
  }

  const getAnimate = () => {
    switch (variant) {
      case 'fade':
        return { opacity: 1 }
      case 'slideLeft':
      case 'slideRight':
        return { opacity: 1, x: 0 }
      case 'scaleUp':
        return { opacity: 1, scale: 1, y: 0 }
      case 'fadeUp':
      default:
        return { opacity: 1, y: 0 }
    }
  }

  return (
    <motion.div
      initial={getInitial()}
      whileInView={getAnimate()}
      viewport={{ once, amount, margin: '0px 0px -40px 0px' }}
      transition={{
        duration,
        delay,
        ease: easeSwiss,
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/**
 * StaggerContainer orchestrates a sequence of child StaggerItem reveals as a section scrolls into view.
 */
export function StaggerContainer({
  children,
  className = '',
  staggerDelay = 0.08,
  delayChildren = 0.04,
  amount = 0.15,
  once = true,
}: {
  children: React.ReactNode
  className?: string
  staggerDelay?: number
  delayChildren?: number
  amount?: number
  once?: boolean
}) {
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount, margin: '0px 0px -40px 0px' }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
            delayChildren,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/**
 * StaggerItem represents an individual assembling unit inside a StaggerContainer.
 */
export function StaggerItem({
  children,
  className = '',
  yOffset = 14,
  duration = 0.45,
}: {
  children: React.ReactNode
  className?: string
  yOffset?: number
  duration?: number
}) {
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: yOffset },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration,
            ease: easeSwiss,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
