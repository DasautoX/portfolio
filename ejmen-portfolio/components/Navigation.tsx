'use client'

import { useState, useEffect } from 'react'
import { FaHome, FaUser, FaBriefcase, FaCode, FaTrophy, FaEnvelope, FaGraduationCap } from 'react-icons/fa'

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('home')
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    // Force dark mode
    document.documentElement.classList.add('dark')

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'education', 'experience', 'skills', 'projects', 'awards', 'contact']
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      
      if (current) setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }


  const navItems = [
    { id: 'home', label: 'Home', icon: FaHome },
    { id: 'about', label: 'About', icon: FaUser },
    { id: 'education', label: 'Education', icon: FaGraduationCap },
    { id: 'experience', label: 'Experience', icon: FaBriefcase },
    { id: 'skills', label: 'Skills', icon: FaCode },
    { id: 'projects', label: 'Projects', icon: FaCode },
    { id: 'awards', label: 'Awards', icon: FaTrophy },
    { id: 'contact', label: 'Contact', icon: FaEnvelope },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'glass shadow-2xl py-4 border-b border-blue-200/30 dark:border-blue-800/30' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="relative group">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 flex items-center justify-center shadow-2xl transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-700 cursor-pointer">
              <span className="text-white font-display font-black text-2xl tracking-tight">EJ</span>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
            </div>
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-blue-600/20 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`group relative flex items-center gap-3 px-5 py-3 rounded-2xl font-semibold transition-all duration-500 ${
                  activeSection === item.id
                    ? 'bg-blue-600 text-white shadow-xl scale-105'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-blue-950/30 hover:text-blue-600 dark:hover:text-blue-400 hover:scale-105'
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <div className={`w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-300 ${
                  activeSection === item.id 
                    ? 'bg-white/20 shadow-lg' 
                    : 'group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50'
                }`}>
                  <item.icon className={`text-sm transition-all duration-300 ${
                    activeSection === item.id 
                      ? 'text-white' 
                      : 'text-slate-600 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400'
                  }`} />
                </div>
                <span className="tracking-wide">{item.label}</span>
                {activeSection === item.id && (
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl opacity-90 -z-10"></div>
                )}
              </button>
            ))}
          </div>

          {/* Mobile Navigation */}
          <div className="lg:hidden flex gap-3">
            {navItems.slice(0, 4).map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                  activeSection === item.id
                    ? 'bg-blue-600 text-white shadow-xl scale-110'
                    : 'text-slate-700 dark:text-slate-300 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950/30 hover:scale-105'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <item.icon className={`text-sm transition-transform duration-300 ${
                  activeSection === item.id ? 'scale-110' : ''
                }`} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}