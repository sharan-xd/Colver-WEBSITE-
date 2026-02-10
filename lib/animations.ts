import { Variants } from 'framer-motion'

// ============================================
// FRAMER MOTION VARIANTS
// ============================================

export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1], // expo-out
    },
  },
}

export const fadeIn: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
}

export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
}

export const slideInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
}

export const slideInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
}

// Stagger container for child animations
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

export const staggerItem: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
}

// ============================================
// GSAP SCROLL TRIGGER CONFIG
// ============================================

export const scrollTriggerConfig = {
  // Default settings for scroll triggers
  defaults: {
    start: 'top 80%',
    end: 'bottom 20%',
    toggleActions: 'play none none reverse',
  },
  
  // Section-specific configurations
  sections: {
    hero: {
      start: 'top top',
      end: 'bottom top',
      scrub: 1,
      pin: false,
    },
    feature: {
      start: 'top 70%',
      end: 'bottom 30%',
      scrub: 0.5,
    },
    showcase: {
      start: 'top 60%',
      end: 'center center',
      scrub: 1,
    },
  },
}

// ============================================
// EASING FUNCTIONS
// ============================================

export const easings = {
  // Expo easings - premium feel
  expoOut: [0.16, 1, 0.3, 1],
  expoIn: [0.7, 0, 0.84, 0],
  expoInOut: [0.87, 0, 0.13, 1],
  
  // Custom easings
  smooth: [0.4, 0, 0.2, 1],
  bounce: [0.68, -0.55, 0.265, 1.55],
  
  // Apple-style
  apple: [0.25, 0.1, 0.25, 1],
}

// ============================================
// DURATION PRESETS
// ============================================

export const durations = {
  instant: 0.1,
  fast: 0.3,
  normal: 0.5,
  slow: 0.8,
  slower: 1.2,
  slowest: 2,
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

/**
 * Creates a parallax transform value based on scroll progress
 */
export function createParallax(
  scrollProgress: number,
  startValue: number,
  endValue: number
): number {
  return startValue + (endValue - startValue) * scrollProgress
}

/**
 * Linear interpolation
 */
export function lerp(start: number, end: number, factor: number): number {
  return start + (end - start) * factor
}

/**
 * Clamp a value between min and max
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max)
}

/**
 * Map a value from one range to another
 */
export function mapRange(
  value: number,
  inMin: number,
  inMax: number,
  outMin: number,
  outMax: number
): number {
  return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin
}

// ============================================
// MOUSE PARALLAX
// ============================================

interface MousePosition {
  x: number
  y: number
}

/**
 * Calculate parallax offset based on mouse position
 */
export function calculateMouseParallax(
  mousePosition: MousePosition,
  intensity: number = 0.1
): { x: number; y: number } {
  const x = (mousePosition.x - 0.5) * intensity * 100
  const y = (mousePosition.y - 0.5) * intensity * 100
  return { x, y }
}

// ============================================
// REDUCED MOTION CHECK
// ============================================

/**
 * Check if user prefers reduced motion
 */
export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

// ============================================
// ANIMATION PRESETS FOR REUSABILITY
// ============================================

export const animationPresets = {
  // Hero text reveal
  heroReveal: {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1, ease: easings.expoOut },
  },
  
  // Card hover
  cardHover: {
    whileHover: { y: -8, scale: 1.02 },
    whileTap: { scale: 0.98 },
    transition: { duration: 0.3, ease: easings.expoOut },
  },
  
  // Button press
  buttonPress: {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
    transition: { duration: 0.2 },
  },
  
  // Fade in with blur
  blurIn: {
    initial: { opacity: 0, filter: 'blur(10px)' },
    animate: { opacity: 1, filter: 'blur(0px)' },
    transition: { duration: 0.8, ease: easings.expoOut },
  },
}
