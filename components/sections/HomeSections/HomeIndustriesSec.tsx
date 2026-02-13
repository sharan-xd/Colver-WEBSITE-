'use client'

import { motion } from 'framer-motion'
import Section, { FadeInView, StaggerContainer, StaggerItem } from '@/components/Section'

const industries = [
  {
    title: 'Startups',
    desc: 'MVP platforms, product websites, investor decks, and scalable backend systems built for rapid iteration.',
  },
  {
    title: 'Retail & Ecommerce',
    desc: 'Online stores, payment integrations, inventory systems, and automation workflows designed for conversion.',
  },
  {
    title: 'Service Businesses',
    desc: 'Lead generation websites, booking systems, CRM dashboards, and operational management tools.',
  },
  {
    title: 'Enterprises',
    desc: 'Internal software platforms, workflow automation, AI integrations, and secure enterprise-grade systems.',
  },
]

export default function HomeIndustriesSection() {
  return (
    <Section padding="large">

      {/* Header */}
      <div className="text-center mb-16">
        <FadeInView>
          <span
            className="
              inline-flex items-center justify-center
              px-5 py-2.5
              rounded-full
              bg-primary/10
              text-primary
              text-sm font-semibold
              tracking-wide uppercase
              border border-primary/20
              mb-6
            "
          >
            Industries & use cases
          </span>
        </FadeInView>

        <FadeInView delay={0.1}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Solutions across
            <span className="text-gradient block mt-2">industries</span>
          </h2>
        </FadeInView>

        <FadeInView delay={0.2}>
          <p className="text-lg text-muted max-w-2xl mx-auto leading-relaxed">
            From early-stage startups to enterprise organizations, we design and build digital systems
            aligned to operational scale, industry workflows, and long-term growth requirements.
          </p>
        </FadeInView>
      </div>

      {/* Overview Block */}
      <div className="max-w-7xl mx-auto px-6">
        <FadeInView delay={0.25}>
          <div className="p-8 rounded-2xl bg-secondary/20 border border-border mb-10 text-center">
            <p className="text-lg text-muted leading-relaxed max-w-4xl mx-auto">
              Every industry operates differently — in customer journeys, operational complexity,
              compliance needs, and technology maturity. We don’t apply one-size-fits-all templates.
              We architect solutions tailored to business models, data flows, and scalability demands.
            </p>

            <p className="text-lg text-muted leading-relaxed max-w-4xl mx-auto mt-4">
              Whether building high-performance ecommerce platforms, AI-powered enterprise tools,
              or conversion-focused service websites, our systems are designed to integrate seamlessly
              into real business environments — not just look good in presentations.
            </p>
          </div>
        </FadeInView>

        {/* Industries Grid */}
        <StaggerContainer
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          staggerDelay={0.1}
        >
          {industries.map((industry, index) => (
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
                  {industry.title}
                </h3>

                <p className="text-muted leading-relaxed text-sm">
                  {industry.desc}
                </p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Closing Line */}
        <FadeInView delay={0.35}>
          <div className="text-center mt-12">
            <p className="text-lg text-muted leading-relaxed max-w-3xl mx-auto">
              Different industries. Different challenges. One consistent approach — scalable systems
              engineered for performance, usability, and measurable business impact.
            </p>
          </div>
        </FadeInView>
      </div>
    </Section>
  )
}
