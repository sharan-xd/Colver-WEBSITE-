import Section, { FadeInView, StaggerContainer, StaggerItem } from '@/components/Section'

export const metadata = {
  title: 'Pricing | Colver',
  description: 'Simple pricing options for Colver',
}

const plans = [
  {
    name: 'Starter',
    price: 'Free',
    description: 'For teams validating ideas and early-stage projects.',
    features: ['Basic showcase site', 'Contact flow', 'Email support'],
  },
  {
    name: 'Growth',
    price: '$49/mo',
    description: 'For growing teams that need more polish and scale.',
    features: ['Advanced pages', 'Performance tuning', 'Priority support'],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For complex requirements, workflows, and integrations.',
    features: ['Custom architecture', 'Security review', 'Dedicated delivery'],
  },
]

export default function PricingPage() {
  return (
    <Section padding="large">
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">Pricing</h1>
        <p className="text-xl text-muted max-w-2xl mx-auto">
          Transparent pricing for teams that want a focused build and a calm delivery process.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <StaggerContainer className="grid md:grid-cols-3 gap-6" staggerDelay={0.1}>
          {plans.map((plan) => (
            <StaggerItem key={plan.name}>
              <div className="h-full p-8 rounded-3xl bg-secondary/30 border border-border/50">
                <p className="text-sm uppercase tracking-[0.3em] text-muted mb-4">{plan.name}</p>
                <h2 className="text-4xl font-bold mb-4">{plan.price}</h2>
                <p className="text-muted leading-relaxed mb-6">{plan.description}</p>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-foreground">
                      <span className="w-2 h-2 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeInView delay={0.3}>
          <div className="mt-12 p-8 rounded-3xl bg-secondary/20 border border-border text-center">
            <h3 className="text-2xl font-semibold mb-3">Need something custom?</h3>
            <p className="text-muted mb-6 max-w-2xl mx-auto">
              For larger launches and complex systems, we scope the project before pricing so there are no surprises.
            </p>
            <a href="/contact" className="inline-flex px-6 py-3 rounded-full bg-primary text-white font-medium">
              Talk to us
            </a>
          </div>
        </FadeInView>
      </div>
    </Section>
  )
}