'use client'

import React from 'react'
import HeroSection from '@/components/sections/HomeSections/HeroSection'
import HomeWWDSection from '@/components/sections/HomeSections/HomeWWDSection'
import HomeProcessSection from '@/components/sections/HomeSections/HomeProcessSection'
import HomeWhyChooseUs from '@/components/sections/HomeSections/HomeWCUSection'
import HomeIndustriesSection from '@/components/sections/HomeSections/HomeIndustriesSec'

export default function HomePage() {
  return (
    <div className="relative space-y-12 md:space-y-20">
      <HeroSection />
      <HomeWWDSection />
      <HomeProcessSection />
      <HomeWhyChooseUs />
      <HomeIndustriesSection />
    </div>
  )
}
