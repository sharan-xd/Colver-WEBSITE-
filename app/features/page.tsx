import FeaturesSection from '../sections/FeaturesSection'
import Section from '@/components/Section'
import AnimatedBackground from '@/components/AnimatedBackground'

export const metadata = {
  title: 'Features | Colver',
  description: 'Explore the powerful features of Colver',
}

export default function FeaturesPage() {
  return (
    <main className="relative pt-24">
      <AnimatedBackground />
      
      <Section padding="large">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Features</h1>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Everything you need to build, collaborate, and ship faster.
          </p>
        </div>
        <FeaturesSection />
      </Section>
    </main>
  )
}