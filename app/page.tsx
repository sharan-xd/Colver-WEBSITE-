import HeroSection from './sections/HeroSection'
import Section from '@/components/Section'
import AnimatedBackground from '@/components/AnimatedBackground'

export default function Home() {
  return (
    <main className="relative">
      <AnimatedBackground />
      
      <Section id="hero" fullHeight padding="none">
        <HeroSection />
      </Section>
    </main>
  )
}