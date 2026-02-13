'use client'

import { motion } from 'framer-motion'
import Section, { FadeInView, StaggerContainer, StaggerItem } from '@/components/Section'

const steps = [
  {
   
    title: 'Discovery',
    desc: 'We understand your business model, goals, and technical constraints.',
  },
  {
    
    title: 'Architecture',
    desc: 'We define system structure, technology stack, and scalability plan.',
  },
  {
  
    title: 'Development',
    desc: 'Clean, maintainable code built for performance and future expansion.',
  },
  {
   
    title: 'Launch & Support',
    desc: 'Deployment, monitoring, optimization, and ongoing improvement.',
  },
]

export default function HomeProcessSection() {
  return (
    <Section padding="large">
      {/* Header */}
      <div className="text-center mb-16">
        <FadeInView delay={0.1}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Structured process.
            <span className="text-gradient block mt-2">Predictable results.</span>
          </h2>
        </FadeInView>

        <FadeInView delay={0.2}>
          <p className="text-lg text-muted max-w-2xl mx-auto leading-relaxed">
            Clients don’t care about code. They care about clarity, delivery, and outcomes. This is how we work.
          </p>
        </FadeInView>
      </div>

      {/* Steps */}
      <div className="max-w-7xl mx-auto px-6">
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
          {steps.map((step, index) => (
            <StaggerItem key={index}>
              <motion.div
                className="
                  group
                  p-8
                  rounded-2xl
                  bg-secondary/30
                  border border-border/50
                  hover:bg-secondary/50
                  hover:border-primary/30
                  transition-all duration-500
                  h-full
                "
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                <h3 className="text-xl font-semibold mb-3 tracking-tight">{step.title}</h3>
                <p className="text-muted leading-relaxed text-sm">{step.desc}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </Section>
  )
}
