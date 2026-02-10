import AboutSection from '../sections/AboutSection'
import Section from '@/components/Section'
import AnimatedBackground from '@/components/AnimatedBackground'

export const metadata = {
  title: 'About | Colver',
  description: 'Learn about Colver and our mission',
}

export default function AboutPage() {
  return (
    <main className="relative pt-24">
      <AnimatedBackground />
      
      <Section padding="large" centerContent>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About Us</h1>
          <p className="text-xl text-muted">
            We&apos;re building the future of digital creation.
          </p>
        </div>
        <AboutSection />
      </Section>
    </main>
  )
}