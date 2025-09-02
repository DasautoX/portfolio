'use client'

import { useState, useEffect } from 'react'

export default function FloatingEJBadge() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show badge when scrolled past hero section
      setIsVisible(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div
      className={`ej-floating-badge transition-all duration-700 cursor-pointer ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
      }`}
      onClick={scrollToTop}
      style={{ transitionDelay: isVisible ? '0ms' : '200ms' }}
    >
      <div className="flex flex-col items-center">
        <span className="text-white font-display font-black text-lg tracking-tighter">EJ</span>
        <div className="w-6 h-0.5 bg-white/40 rounded-full mt-1"></div>
        <span className="text-white/80 text-xs font-medium mt-1 tracking-wider">TOP</span>
      </div>
    </div>
  )
}