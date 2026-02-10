'use client'

import { motion } from 'framer-motion'
import { FadeInView, StaggerContainer, StaggerItem } from '@/components/Section'

const features = [
  {
    title: 'AI-Powered',
    description: 'Leverage cutting-edge AI to automate repetitive tasks and enhance your creative workflow.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Real-time Sync',
    description: 'Collaborate seamlessly with your team. Changes appear instantly across all devices.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    title: 'Enterprise Security',
    description: 'Bank-grade encryption and compliance. Your data is protected at every layer.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Global CDN',
    description: 'Lightning-fast content delivery with edge caching in 200+ locations worldwide.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Version Control',
    description: 'Track every change with built-in versioning. Rollback to any point in time.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'API First',
    description: 'Build custom integrations with our comprehensive REST and GraphQL APIs.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
]

export default function FeaturesSection() {
  return (
    <div className="max-w-7xl mx-auto px-6">
      {/* Section header */}
      <div className="text-center mb-20">
        <FadeInView>
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Features
          </span>
        </FadeInView>
        
        <FadeInView delay={0.1}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Everything you need to
            <span className="text-gradient block mt-2">build faster</span>
          </h2>
        </FadeInView>
        
        <FadeInView delay={0.2}>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            A complete toolkit designed for modern creators. From ideation to deployment, 
            we&apos;ve got you covered.
          </p>
        </FadeInView>
      </div>

      {/* Features grid */}
      <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
        {features.map((feature, index) => (
          <StaggerItem key={index}>
            <motion.div
              className="group p-8 rounded-2xl bg-secondary/30 border border-border/50
                         hover:bg-secondary/50 hover:border-primary/30 
                         transition-all duration-500 h-full"
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center
                              text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted leading-relaxed">{feature.description}</p>
            </motion.div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  )
}