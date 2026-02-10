'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import LoadingScreen from './LoadingScreen'

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true)
  const pathname = usePathname()

  useEffect(() => {
    setIsLoading(true)
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [pathname])

  return (
    <>
      {isLoading && <LoadingScreen />}
      <div className={isLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'}>
        {children}
      </div>
    </>
  )
}