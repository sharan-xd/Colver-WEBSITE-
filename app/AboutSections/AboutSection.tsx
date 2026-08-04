'use client'

import Section, { FadeInView } from '@/components/Section'

const values = [
  {
    title: 'Clarity over complexity',
    desc: 'We remove friction, reduce noise, and make the next step obvious.',
  },
  {
    title: 'Build fast, ship confidently',
    desc: 'Speed matters — but reliability and trust matter more.',
  },
  {
    title: 'Collaboration by default',
    desc: 'Great products are built together. We design for teams, not silos.',
  },
  {
    title: 'Craft is a feature',
    desc: 'Polish, performance, and thoughtful details are part of the product.',
  },
]

export default function AboutSection() {
  return (
    <Section padding="large">
      {/* Title block */}
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">About Us</h1>
        <p className="text-xl text-muted max-w-2xl mx-auto">
          Colver exists to help teams go from idea → shipped product with less friction,
          fewer tools, and more momentum.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-6">

        {/* Main Headline */}
        <FadeInView delay={0.1}>
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Built to reduce
              <span className="text-gradient block mt-2">
                workflow friction
              </span>
            </h2>
          </div>
        </FadeInView>

        <FadeInView delay={0.2}>
          <p className="text-lg text-muted mb-12 max-w-2xl mx-auto text-center leading-relaxed">
            Colver was created to help teams execute without constant context switching,
            messy handoffs, and “where did that file go?” chaos. We believe the best tools
            feel calm, fast, and obvious — from the first click.
          </p>
        </FadeInView>

        {/* Mission + Vision */}
        <FadeInView delay={0.25}>
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            <div className="p-6 rounded-2xl bg-secondary/30 border border-border">
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Our
                <span className="text-gradient block mt-2">
                  Mission
                </span>
              </h3>

              <p className="text-muted leading-relaxed">
                Help creators and teams move faster with less friction — from planning
                to shipping.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-secondary/30 border border-border">
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Our
                <span className="text-gradient block mt-2">
                  Vision
                </span>
              </h3>

              <p className="text-muted leading-relaxed">
                A future where teams spend less time managing tools and more time
                creating meaningful outcomes.
              </p>
            </div>
          </div>
        </FadeInView>

        {/* Why We Built Colver */}
        <FadeInView delay={0.3}>
          <div className="p-8 rounded-2xl bg-secondary/20 border border-border mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Why we built
              <span className="text-gradient block mt-2">
                Colver
              </span>
            </h2>

            <p className="text-lg text-muted leading-relaxed max-w-3xl mx-auto">
              Teams don’t fail because they lack talent — they fail because workflows
              get noisy. Colver brings planning, collaboration, and execution into a
              single flow, with smart automation where it helps and simplicity where
              it matters.
            </p>
          </div>
        </FadeInView>

        {/* Values */}
        <FadeInView delay={0.35}>
          <div className="mb-16">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                What we
                <span className="text-gradient block mt-2">
                  value
                </span>
              </h2>

              <p className="text-muted max-w-2xl mx-auto">
                These aren’t slogans — they’re how we make product decisions.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="p-6 rounded-2xl bg-secondary/30 border border-border"
                >
                  <h4 className="font-semibold mb-2">{v.title}</h4>
                  <p className="text-muted leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeInView>

        {/* CTA */}
        <FadeInView delay={0.4}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center mb-16">
            <a
              href="/features"
              className="px-8 py-4 rounded-full bg-primary text-white font-medium
                         hover:bg-primary/90 transition-colors duration-300
                         shadow-lg shadow-primary/25"
            >
              Explore features
            </a>

            <a
              href="/contact"
              className="px-8 py-4 rounded-full bg-secondary/50 border border-border font-medium
                         hover:bg-secondary transition-colors duration-300"
            >
              Contact us
            </a>
          </div>
        </FadeInView>

        {/* Trust Section */}
        <FadeInView delay={0.45}>
          <div className="pt-16 border-t border-border text-center">
            <h4 className="text-3xl md:text-4xl font-bold tracking-tight mb-10">
              Trusted by
              <span className="text-gradient block mt-2">
                leading companies
              </span>
            </h4>

            <div className="flex flex-wrap items-center justify-center gap-8 opacity-50">
              {['Vercel', 'Stripe', 'Linear', 'Notion', 'Figma'].map(
                (company) => (
                  <span
                    key={company}
                    className="text-lg font-semibold text-muted"
                  >
                    {company}
                  </span>
                )
              )}
            </div>
          </div>
        </FadeInView>

      </div>
    </Section>
  )
}
