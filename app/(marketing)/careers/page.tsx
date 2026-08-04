import Section, { FadeInView } from '@/components/Section'

export const metadata = {
  title: 'Careers | Colver',
  description: 'Join the Colver team',
}

export default function CareersPage() {
  return (
    <Section padding="large">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">Careers</h1>
        <p className="text-xl text-muted max-w-2xl mx-auto mb-12">
          We keep the team intentionally small and high-trust. When we hire, we look for people who care about craft, speed, and resilience.
        </p>

        <FadeInView delay={0.2}>
          <div className="p-8 rounded-3xl bg-secondary/30 border border-border text-left">
            <h2 className="text-2xl font-semibold mb-4">Open roles</h2>
            <p className="text-muted mb-4">There are no open roles right now.</p>
            <p className="text-muted">
              If you think you’d be a fit, send a short intro to hello@colver.com.
            </p>
          </div>
        </FadeInView>
      </div>
    </Section>
  )
}