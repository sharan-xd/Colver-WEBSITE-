'use client'

import { FadeInView } from '@/components/Section'

export default function AboutSection() {
  return (
    <div className="max-w-4xl mx-auto px-6 text-center">
      <FadeInView>
        <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
          Get Started
        </span>
      </FadeInView>

      <FadeInView delay={0.1}>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
          Ready to transform
          <span className="text-gradient block mt-2">your workflow?</span>
        </h2>
      </FadeInView>

      <FadeInView delay={0.2}>
        <p className="text-lg text-muted mb-10 max-w-2xl mx-auto">
          Join thousands of creators who are already building the future with Colver. 
          Start free, scale as you grow.
        </p>
      </FadeInView>

      <FadeInView delay={0.3}>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#"
            className="px-8 py-4 rounded-full bg-primary text-white font-medium
                       hover:bg-primary/90 transition-colors duration-300
                       shadow-lg shadow-primary/25"
          >
            Start building free
          </a>
          <a
            href="#"
            className="px-8 py-4 rounded-full bg-secondary/50 border border-border font-medium
                       hover:bg-secondary transition-colors duration-300"
          >
            Contact sales
          </a>
        </div>
      </FadeInView>

      {/* Trust badges */}
      <FadeInView delay={0.4}>
        <div className="mt-16 pt-16 border-t border-border">
          <p className="text-sm text-muted mb-8">Trusted by leading companies</p>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-50">
            {['Vercel', 'Stripe', 'Linear', 'Notion', 'Figma'].map((company) => (
              <span key={company} className="text-lg font-semibold text-muted">
                {company}
              </span>
            ))}
          </div>
        </div>
      </FadeInView>
    </div>
  )
}