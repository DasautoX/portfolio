'use client'

import { useState, useEffect, useMemo, useRef } from 'react'
import { FaDownload, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'
import { personalInfo } from '@/lib/data/portfolio-data'
import ParticleSystem from './ParticleSystem'

export default function Hero() {
  const [currentText, setCurrentText] = useState('')
  const [textIndex, setTextIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const heroRef = useRef<HTMLElement>(null)

  const texts = useMemo(() => [
    'Computer Engineering Student',
    'Full-Stack Developer',
    'AI/ML Researcher',
    'Innovation Enthusiast',
    'Problem Solver',
    'Tech Creator'
  ], [])

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Enhanced typing effect
  useEffect(() => {
    const text = texts[textIndex]
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < text.length) {
          setCurrentText(text.substring(0, charIndex + 1))
          setCharIndex(charIndex + 1)
        } else {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        if (charIndex > 0) {
          setCurrentText(text.substring(0, charIndex - 1))
          setCharIndex(charIndex - 1)
        } else {
          setIsDeleting(false)
          setTextIndex((textIndex + 1) % texts.length)
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, textIndex, texts])

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-950/30 to-slate-900"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        {/* Particle System */}
        <ParticleSystem />
        
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-[0.08]" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px',
          animation: 'subtle-pulse 4s ease-in-out infinite'
        }}></div>
        
        {/* Liquid Morphing Orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400/5 blur-3xl liquid-morph"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/5 blur-3xl liquid-morph" style={{ animationDelay: '6s' }}></div>
        
        {/* Holographic Overlay */}
        <div className="absolute inset-0 holographic opacity-20"></div>
      </div>
      
      <div className="relative z-10 max-w-5xl mx-auto text-center px-6">
        {/* Enhanced Professional Name */}
        <div className="mb-12 animate-fadeInUp">
          <div className="relative mb-8">
            {/* EJ Logo */}
            <div className="flex justify-center mb-6">
              <div className="relative group magnetic card-3d">
                <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 flex items-center justify-center shadow-2xl group-hover:shadow-blue-500/50 transform group-hover:scale-105 transition-all duration-300 ej-logo">
                  <span className="text-white font-display font-black text-3xl tracking-tighter neon-text">EJ</span>
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg"></div>
                </div>
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-blue-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 to-blue-700/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000 animate-pulse"></div>
              </div>
            </div>
            
            {/* Name */}
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-white leading-tight tracking-tight mb-6 text-center relative z-10 text-reveal">
              <span className="bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent ej-text-glow">
                {personalInfo.name}
              </span>
            </h1>
            
            {/* Enhanced divider */}
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-blue-600 to-blue-600 rounded-full"></div>
              <div className="relative">
                <div className="w-3 h-3 bg-blue-600 rounded-full animate-pulse"></div>
                <div className="absolute inset-0 bg-blue-600 rounded-full animate-ping opacity-20"></div>
              </div>
              <div className="w-20 h-0.5 bg-gradient-to-l from-transparent via-blue-600 to-blue-600 rounded-full"></div>
            </div>
          </div>
        </div>
        
        {/* Professional Title */}
        <div className="mb-8 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
          <div className="relative">
            <div className="text-2xl md:text-3xl lg:text-4xl font-medium text-slate-300 mb-4 font-mono tracking-wide">
              <span className="text-blue-400">const</span>
              <span className="text-slate-400 mx-2">role</span>
              <span className="text-slate-500">=</span>
              <span className="text-green-400 ml-2">&apos;{currentText}&apos;</span>
              <span className="inline-block w-0.5 h-7 bg-blue-600 ml-1 animate-pulse"></span>
            </div>
          </div>
        </div>
        
        {/* Professional Description */}
        <div className="animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
          <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-4xl mx-auto leading-relaxed">
            Computer Engineering student at{' '}
            <span className="relative font-semibold text-blue-400">
              <span className="absolute -inset-1 bg-blue-900/30 rounded-lg blur opacity-30"></span>
              <span className="relative">Hamad Bin Khalifa University</span>
            </span>{' '}
            with expertise in full-stack development, artificial intelligence, and innovative problem-solving. 
            <br className="hidden md:block" />
            Passionate about creating{' '}
            <span className="font-medium text-slate-300">technology solutions that make a real-world impact.</span>
          </p>
        </div>
        
        {/* Enhanced Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
          <a
            href="/Ejmen-CV.pdf"
            download
            className="group relative inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl font-semibold overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <FaDownload className="relative z-10 group-hover:scale-110 transition-transform duration-300" />
            <span className="relative z-10">Download CV</span>
            <div className="absolute inset-0 shimmer"></div>
          </a>
          
          <a
            href={`mailto:${personalInfo.email}`}
            className="group relative inline-flex items-center gap-3 px-10 py-4 border-2 border-blue-600 text-blue-400 rounded-2xl font-semibold overflow-hidden hover:bg-blue-600 hover:text-white transition-all duration-500 transform hover:scale-105"
          >
            <FaEnvelope className="group-hover:scale-110 transition-transform duration-300" />
            <span>Get In Touch</span>
          </a>
        </div>

        {/* Enhanced Social Links */}
        <div className="flex gap-6 justify-center mb-16 animate-fadeInUp" style={{ animationDelay: '0.8s' }}>
          <a
            href={`mailto:${personalInfo.email}`}
            className="group relative w-14 h-14 flex items-center justify-center rounded-2xl bg-slate-800/80 backdrop-blur-sm border border-blue-800/50 text-blue-400 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105"
            aria-label="Email"
          >
            <FaEnvelope className="text-lg group-hover:scale-110 transition-transform duration-300" />
            <div className="absolute inset-0 rounded-2xl bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
          
          <a
            href="https://linkedin.com/in/ejmen-al-ubejdij"
            className="group relative w-14 h-14 flex items-center justify-center rounded-2xl bg-slate-800/80 backdrop-blur-sm border border-blue-800/50 text-blue-400 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="text-lg group-hover:scale-110 transition-transform duration-300" />
            <div className="absolute inset-0 rounded-2xl bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
          
          <a
            href="https://github.com/DasautoX"
            className="group relative w-14 h-14 flex items-center justify-center rounded-2xl bg-slate-800/80 backdrop-blur-sm border border-blue-800/50 text-blue-400 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105"
            aria-label="GitHub"
          >
            <FaGithub className="text-lg group-hover:scale-110 transition-transform duration-300" />
            <div className="absolute inset-0 rounded-2xl bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-fadeInUp" style={{ animationDelay: '1s' }}>
          <div 
            className="group cursor-pointer"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <div className="flex flex-col items-center gap-3 text-blue-400 hover:text-blue-300 transition-all duration-300">
              <div className="relative">
                <div className="w-8 h-14 border-2 border-current rounded-full flex justify-center relative group-hover:border-blue-300 transition-colors">
                  <div className="w-1.5 h-4 bg-current rounded-full mt-3 animate-bounce group-hover:animate-pulse"></div>
                </div>
                <div className="absolute -inset-2 rounded-full bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <span className="text-sm font-medium tracking-wider uppercase group-hover:translate-y-1 transition-transform duration-300">Explore</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}