import ShowcaseSection from '../sections/ShowcaseSection'
import Section from '@/components/Section'
import AnimatedBackground from '@/components/AnimatedBackground'

export const metadata = {
  title: 'Showcase | Colver',
  description: 'See what others are building with Colver',
}

export default function ShowcasePage() {
  return (
    <main className="relative pt-24">
      <AnimatedBackground />
      
      <Section padding="large">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Showcase</h1>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Discover amazing projects built with Colver.
          </p>
        </div>
        <ShowcaseSection />
      </Section>
    </main>
  )
}