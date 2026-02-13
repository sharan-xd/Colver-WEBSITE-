'use client'

import HeroSection from '@/components/sections/HomeSections/HeroSection'
import HomeWWDSection from '@/components/sections/HomeSections/HomeWWDSection'
import HomeProcessSection from '@/components/sections/HomeSections/HomeProcessSection'
import HomeWhyChooseUs from '@/components/sections/HomeSections/HomeWCUSection'
import HomeIndustriesSection from './HomeIndustriesSec'
import AnimatedBackground from '@/components/layout/background/AnimatedBackground'
import Section from '@/components/Section'

export default function HomePage() {
  return (
    <main className="relative">
      <AnimatedBackground />

      <Section id="hero" fullHeight padding="none">
        <HeroSection />
      </Section>

      <HomeWWDSection />
      <HomeProcessSection />
      {/* why choose us  /> */}
        <HomeWhyChooseUs />

        
        <HomeIndustriesSection />
         {/* <HomeTestimonialsSection /> */}
    </main>
  )
}
