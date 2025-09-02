'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

const navItems = [
  { name: 'Home', href: '#home', icon: '◉' },
  { name: 'About', href: '#about', icon: '◎' },
  { name: 'Experience', href: '#experience', icon: '◈' },
  { name: 'Projects', href: '#projects', icon: '◆' },
  { name: 'Skills', href: '#skills', icon: '◇' },
  { name: 'Awards', href: '#awards', icon: '◊' },
  { name: 'Contact', href: '#contact', icon: '◐' },
]

export default function FloatingNav() {
  const [activeSection, setActiveSection] = useState('home')
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setIsVisible(currentScrollY <= lastScrollY || currentScrollY < 100)
      setLastScrollY(currentScrollY)

      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.slice(1))
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      
      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden lg:block"
        >
          <nav className="flex flex-col gap-4">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <Link
                  href={item.href}
                  className={`
                    w-3 h-3 rounded-full border-2 transition-all duration-300 flex items-center justify-center
                    ${activeSection === item.href.slice(1)
                      ? 'bg-accent-600 border-accent-600 scale-125'
                      : 'bg-transparent border-gray-400 hover:border-accent-400 hover:scale-110'
                    }
                  `}
                >
                </Link>
                
                <motion.div
                  initial={{ opacity: 0, x: 10, scale: 0.8 }}
                  whileHover={{ opacity: 1, x: 0, scale: 1 }}
                  className="absolute right-5 top-1/2 -translate-y-1/2 px-3 py-1 bg-navy-900 text-white text-sm rounded-lg pointer-events-none whitespace-nowrap"
                >
                  {item.name}
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 w-2 h-2 bg-navy-900 rotate-45" />
                </motion.div>
              </motion.div>
            ))}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  )
}