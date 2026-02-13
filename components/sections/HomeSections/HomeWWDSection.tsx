'use client'

import Section, { FadeInView, StaggerContainer, StaggerItem } from '@/components/Section'
import { motion } from 'framer-motion'

const pillars = [
  {
    title: 'Static & Corporate Websites',
    desc: 'Fast, responsive, SEO-ready sites built for credibility and performance.',
  },
  {
    title: 'Dynamic & Web Applications',
    desc: 'Custom dashboards, portals, booking systems, internal tools.',
  },
  {
    title: 'Ecommerce Platforms',
    desc: 'Conversion-focused online stores with payment integration, inventory control, and automation.',
  },
  {
    title: 'AI & Intelligent Systems',
    desc: 'Custom AI integrations, automation workflows, predictive models, and data-driven solutions.',
  },
]

export default function HomeWWDSection() {
  return (
    <Section padding="large">
      
      {/* Header */}
      <div className="text-center mb-16">
      

        <FadeInView delay={0.1}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Digital products built for
            <span className="text-gradient block mt-2">growth</span>
          </h2>
        </FadeInView>

        <FadeInView delay={0.2}>
          <p className="text-lg text-muted max-w-2xl mx-auto leading-relaxed">
            We design and develop high-performance websites, scalable ecommerce platforms, 
            custom software systems, and AI-powered solutions tailored to your business.
          </p>
        </FadeInView>
      </div>

      {/* Pillars Grid */}
      <div className="max-w-7xl mx-auto px-6">
        <StaggerContainer
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          staggerDelay={0.1}
        >
          {pillars.map((pillar, index) => (
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
                <h3 className="text-xl font-semibold mb-3 tracking-tight">
                  {pillar.title}
                </h3>

                <p className="text-muted leading-relaxed text-sm">
                  {pillar.desc}
                </p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

    </Section>
  )
}
