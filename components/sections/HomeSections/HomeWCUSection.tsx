'use client'

import { motion } from 'framer-motion'
import Section, { FadeInView, StaggerContainer, StaggerItem } from '@/components/Section'

const valuePoints = [
  {
    title: 'Performance-first development',
    desc: 'Optimized for speed, responsiveness, and real-world usage. Performance is built-in, not added later.',
  },
  {
    title: 'Clean, maintainable architecture',
    desc: 'Structured, scalable code that’s easy to extend, document, and hand over without friction.',
  },
  {
    title: 'SEO and speed optimized',
    desc: 'Technical SEO, semantic structure, and core performance foundations that improve long-term visibility.',
  },
  {
    title: 'Secure and scalable backend systems',
    desc: 'Reliable architecture across auth, data, and APIs — designed for protection and future scale.',
  },
  {
    title: 'Transparent communication',
    desc: 'Clear timelines, structured updates, and predictable delivery — so you always know what’s next.',
  },
]

export default function HomeWhyChooseSection() {
  return (
    <Section padding="large">
      {/* Header */}
      <div className="text-center mb-16">
       
        <FadeInView delay={0.1}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Built like a product,
            <span className="text-gradient block mt-2">not just a project</span>
          </h2>
        </FadeInView>

        <FadeInView delay={0.2}>
          <p className="text-lg text-muted max-w-3xl mx-auto leading-relaxed">
            We think long-term. Every solution is designed to scale with your business — technically, operationally,
            and commercially.
          </p>
        </FadeInView>
      </div>

      {/* Overview + Grid */}
      <div className="max-w-7xl mx-auto px-6">
        <FadeInView delay={0.25}>
          <div className="p-8 rounded-2xl bg-secondary/20 border border-border mb-10 text-center">
            <p className="text-lg text-muted leading-relaxed max-w-4xl mx-auto">
              We don’t approach development as a one-time deliverable. We design digital systems the way modern
              products are built — with performance, scalability, security, and long-term maintainability at the core.
              From high-performance websites and ecommerce platforms to custom web applications and AI-driven
              automation systems, every build is engineered to support growth, not just launch.
            </p>
            <p className="text-lg text-muted leading-relaxed max-w-4xl mx-auto mt-4">
              Our focus goes beyond visual design. We architect platforms that load fast, rank well, handle scale, and
              adapt as your business evolves — ensuring your digital infrastructure remains an asset, not a limitation.
            </p>
          </div>
        </FadeInView>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
          {valuePoints.map((item, index) => (
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
                <h3 className="text-xl font-semibold mb-3 tracking-tight">{item.title}</h3>
                <p className="text-muted leading-relaxed text-sm">{item.desc}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeInView delay={0.35}>
          <div className="text-center mt-12">
            <p className="text-lg text-muted leading-relaxed max-w-3xl mx-auto">
              We’re not the cheapest option — and that’s intentional. We build systems designed to perform, scale, and
              endure long after launch day.
            </p>
          </div>
        </FadeInView>
      </div>
    </Section>
  )
}
