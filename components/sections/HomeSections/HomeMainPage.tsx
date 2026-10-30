'use client'

import React from 'react'
import HeroSection from '@/components/sections/HomeSections/HeroSection'
import HomeWWDSection from '@/components/sections/HomeSections/HomeWWDSection'
import HomeSelectedWork from '@/components/sections/HomeSections/HomeSelectedWork'
import HomeCapabilities from '@/components/sections/HomeSections/HomeCapabilities'
import HomeProcessSection from '@/components/sections/HomeSections/HomeProcessSection'
import HomeWCUSection from '@/components/sections/HomeSections/HomeWCUSection'
import HomeCTASection from '@/components/sections/HomeSections/HomeCTASection'

export default function HomePage() {
  return (
    <div className="relative w-full">
      {/* 1. Hero with Interactive 3D Isometric Monolith Canvas */}
      <HeroSection />

      {/* 2. What We Do: Editorial Split Layout (Zero Cards) */}
      <HomeWWDSection />

      {/* 3. Selected Work: Large Curated Project Previews */}
      <HomeSelectedWork />

      {/* 4. Capabilities Matrix: Typographic Expandable Structure */}
      <HomeCapabilities />

      {/* 5. Process: Continuous Connected Architectural Timeline */}
      <HomeProcessSection />

      {/* 6. Why Colver: Comparative Ledger & Engineering Standard */}
      <HomeWCUSection />

      {/* 7. Visually Striking Closing CTA */}
      <HomeCTASection />
    </div>
  )
}
