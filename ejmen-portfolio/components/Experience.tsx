'use client'

import { useState, useEffect } from 'react'
import { FaBriefcase, FaCalendar, FaMapMarkerAlt, FaClock, FaChevronDown, FaChevronUp, FaStar, FaTrophy, FaAward, FaPlay, FaPause } from 'react-icons/fa'
import { experiences } from '@/lib/data/portfolio-data'

export default function Experience() {
  const [inView, setInView] = useState(false)
  const [expandedCard, setExpandedCard] = useState<number | null>(null)
  const [activeTimeline, setActiveTimeline] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
        }
      },
      { threshold: 0.05 }
    )

    const element = document.getElementById('experience')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  // Scroll-based timeline activation
  useEffect(() => {
    if (!inView) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-experience-index') || '0')
            setActiveTimeline(index)
          }
        })
      },
      { 
        threshold: 0.3,
        rootMargin: '0% 0px -50% 0px'
      }
    )

    const experienceCards = document.querySelectorAll('[data-experience-index]')
    experienceCards.forEach((card, index) => {
      observer.observe(card)
      // Set initial active state for the first card
      if (index === 0 && card.getBoundingClientRect().top < window.innerHeight * 0.7) {
        setActiveTimeline(0)
      }
    })

    return () => observer.disconnect()
  }, [inView])

  // Auto-play timeline animation (when enabled)
  useEffect(() => {
    if (isPlaying && inView) {
      const interval = setInterval(() => {
        setActiveTimeline(prev => (prev + 1) % experiences.length)
      }, 3000)
      return () => clearInterval(interval)
    }
  }, [isPlaying, inView])

  const toggleCard = (id: number) => {
    setExpandedCard(expandedCard === id ? null : id)
  }

  const handleTimelineClick = (index: number) => {
    setActiveTimeline(index)
    setIsPlaying(false)
  }

  const togglePlayback = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <section id="experience" className="py-32 bg-gradient-to-br from-blue-50 via-slate-50 to-blue-50/30 dark:from-slate-800 dark:via-slate-900 dark:to-blue-950/30 relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-400/10 dark:bg-blue-400/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '12s' }}></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '15s', animationDelay: '6s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header with EJ Experience Badge */}
        <div className={`text-center mb-20 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex justify-center mb-8">
            <div className="flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full shadow-2xl">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-white font-display font-black text-lg tracking-tighter">EJ</span>
              </div>
              <div className="text-white">
                <div className="font-display font-bold text-lg tracking-wide">EXPERIENCE</div>
                <div className="text-blue-200 text-sm font-medium">Professional Journey</div>
              </div>
            </div>
          </div>
          
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-slate-900 dark:text-white mb-8 ej-section-header">
            <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 dark:from-white dark:via-blue-200 dark:to-white bg-clip-text text-transparent">
              Professional Experience
            </span>
          </h2>
          
          <div className="flex items-center justify-center gap-6 mb-12">
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-blue-600 to-blue-600 rounded-full"></div>
            <div className="relative">
              <div className="w-4 h-4 bg-blue-600 rounded-full animate-pulse"></div>
              <div className="absolute inset-0 bg-blue-600 rounded-full animate-ping opacity-20"></div>
            </div>
            <div className="w-24 h-0.5 bg-gradient-to-l from-transparent via-blue-600 to-blue-600 rounded-full"></div>
          </div>
          
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-4xl mx-auto leading-relaxed font-light">
            Professional journey with{' '}
            <span className="font-medium text-blue-700 dark:text-blue-400 relative">
              <span className="absolute -inset-1 bg-blue-100 dark:bg-blue-900/30 rounded blur opacity-30"></span>
              <span className="relative">measurable impact</span>
            </span>
          </p>

          {/* Experience Stats */}
          <div className="flex justify-center gap-8 mt-8">
            <div className="text-center">
              <div className="text-3xl font-display font-bold text-blue-600 dark:text-blue-400">3+</div>
              <div className="text-sm text-slate-600 dark:text-slate-400 font-medium">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-display font-bold text-blue-600 dark:text-blue-400">85%</div>
              <div className="text-sm text-slate-600 dark:text-slate-400 font-medium">Project Success</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-display font-bold text-blue-600 dark:text-blue-400">92%</div>
              <div className="text-sm text-slate-600 dark:text-slate-400 font-medium">Client Satisfaction</div>
            </div>
          </div>
        </div>

        {/* Interactive Timeline */}
        <div className="relative max-w-6xl mx-auto">
          {/* Desktop Timeline */}
          <div className="hidden lg:block">
            {/* Timeline Line with Progress */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 h-full">
              <div className="w-1 h-full bg-slate-200 dark:bg-slate-700 rounded-full"></div>
              <div 
                className="absolute top-0 w-1 bg-gradient-to-b from-blue-500 via-blue-600 to-blue-700 rounded-full transition-all duration-1000 ease-out"
                style={{ 
                  height: `${((activeTimeline + 1) / experiences.length) * 100}%`,
                }}
              ></div>
            </div>

            {/* Experience Cards */}
            <div className="space-y-24">
              {experiences.map((exp, index) => {
                const isActive = activeTimeline >= index
                const isCurrent = activeTimeline === index
                const isExpanded = expandedCard === exp.id
                const isLeft = index % 2 === 0

                return (
                  <div 
                    key={exp.id}
                    data-experience-index={index}
                    className={`experience-card relative transition-all duration-1000 ${inView ? 'opacity-100' : 'opacity-0'}`}
                    style={{ 
                      transitionDelay: `${index * 200}ms`,
                      transform: inView ? 'translateY(0)' : 'translateY(50px)'
                    }}
                  >
                    {/* Timeline Node */}
                    <div 
                      className={`absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-4 cursor-pointer transition-all duration-500 z-10 ${
                        isCurrent 
                          ? 'bg-blue-600 border-white shadow-2xl scale-125 shadow-blue-500/50' 
                          : isActive
                          ? 'bg-blue-500 border-white shadow-xl'
                          : 'bg-slate-300 dark:bg-slate-600 border-slate-400 dark:border-slate-500'
                      }`}
                      onClick={() => handleTimelineClick(index)}
                    >
                      {isCurrent && (
                        <div className="absolute inset-0 rounded-full bg-blue-600 animate-ping opacity-20"></div>
                      )}
                    </div>

                    {/* Experience Card */}
                    <div className={`flex ${isLeft ? 'justify-start' : 'justify-end'}`}>
                      <div className={`w-5/12 ${isLeft ? 'pr-8' : 'pl-8'}`}>
                        <div 
                          className={`premium-card p-8 rounded-3xl cursor-pointer transition-all duration-700 ${
                            isCurrent ? 'scale-105 shadow-2xl shadow-blue-500/20' : isActive ? 'scale-100' : 'scale-95 opacity-70'
                          } ${isExpanded ? 'ej-gradient-border' : ''}`}
                          onClick={() => toggleCard(exp.id)}
                        >
                          {/* Card Header */}
                          <div className="flex items-start justify-between mb-6">
                            <div className="flex-1">
                              <div className="flex items-center gap-4 mb-4">
                                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg transition-all duration-500 ${
                                  isCurrent 
                                    ? 'bg-gradient-to-br from-blue-500 to-blue-600 scale-110' 
                                    : 'bg-gradient-to-br from-slate-400 to-slate-500'
                                }`}>
                                  <FaBriefcase className="text-white text-lg" />
                                </div>
                                <div>
                                  <h3 className={`text-2xl font-display font-bold transition-colors duration-500 ${
                                    isCurrent 
                                      ? 'text-blue-700 dark:text-blue-400' 
                                      : 'text-slate-900 dark:text-white'
                                  }`}>
                                    {exp.title}
                                  </h3>
                                  <p className="text-lg font-semibold text-slate-600 dark:text-slate-400">{exp.company}</p>
                                </div>
                              </div>
                              
                              <div className="flex items-center gap-6 text-sm text-slate-500 dark:text-slate-400 mb-4">
                                <div className="flex items-center gap-2">
                                  <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                                    <FaCalendar className="text-xs" />
                                  </div>
                                  <span className="font-medium">{exp.duration}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                                    <FaMapMarkerAlt className="text-xs" />
                                  </div>
                                  <span className="font-medium">{exp.location}</span>
                                </div>
                              </div>
                            </div>

                            <div className="flex items-center gap-3">
                              <span className="px-3 py-1.5 bg-blue-100/70 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 rounded-xl text-xs font-semibold border border-blue-200 dark:border-blue-800">
                                {exp.type}
                              </span>
                              <button className={`p-2 rounded-xl transition-all duration-300 ${
                                isExpanded 
                                  ? 'bg-blue-600 text-white' 
                                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                              }`}>
                                {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
                              </button>
                            </div>
                          </div>

                          {/* Description */}
                          <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6 line-clamp-3">
                            {exp.description}
                          </p>

                          {/* Expanded Content */}
                          {isExpanded && (
                            <div className="space-y-6 animate-fadeInUp">
                              {/* Key Achievements */}
                              <div>
                                <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                                  <FaTrophy className="text-blue-600" />
                                  Key Achievements
                                </h4>
                                <div className="space-y-3">
                                  {(exp as any).achievements?.slice(0, 3).map((achievement: string, idx: number) => (
                                    <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-blue-50/50 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/50">
                                      <div className="w-6 h-6 rounded-lg bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <FaStar className="text-blue-600 dark:text-blue-400 text-xs" />
                                      </div>
                                      <span className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">{achievement}</span>
                                    </div>
                                  )) || (
                                    <div className="grid grid-cols-2 gap-4">
                                      <div className="text-center p-4 bg-blue-50/50 dark:bg-blue-950/30 rounded-xl border border-blue-100 dark:border-blue-900/50">
                                        <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">15%</div>
                                        <div className="text-xs text-slate-600 dark:text-slate-400">Efficiency Gain</div>
                                      </div>
                                      <div className="text-center p-4 bg-green-50/50 dark:bg-green-950/30 rounded-xl border border-green-100 dark:border-green-900/50">
                                        <div className="text-2xl font-bold text-green-600 dark:text-green-400">98%</div>
                                        <div className="text-xs text-slate-600 dark:text-slate-400">Quality Score</div>
                                      </div>
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="lg:hidden space-y-8">
            {experiences.map((exp, index) => {
              const isExpanded = expandedCard === exp.id
              
              return (
                <div 
                  key={exp.id}
                  className={`relative transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div 
                    className="premium-card p-6 rounded-3xl cursor-pointer transition-all duration-500 hover:scale-105"
                    onClick={() => toggleCard(exp.id)}
                  >
                    {/* Mobile Card Content */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg">
                            <FaBriefcase className="text-white text-sm" />
                          </div>
                          <div>
                            <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white">{exp.title}</h3>
                            <p className="text-base font-semibold text-blue-600 dark:text-blue-400">{exp.company}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
                          <span className="flex items-center gap-1">
                            <FaCalendar />
                            {exp.duration}
                          </span>
                          <span className="flex items-center gap-1">
                            <FaMapMarkerAlt />
                            {exp.location}
                          </span>
                        </div>
                      </div>

                      <button className={`p-2 rounded-xl transition-all duration-300 ${
                        isExpanded 
                          ? 'bg-blue-600 text-white' 
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                      }`}>
                        {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
                      </button>
                    </div>

                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed line-clamp-2">
                      {exp.description}
                    </p>

                    {isExpanded && (
                      <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700 animate-fadeInUp">
                        <h4 className="text-base font-semibold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                          <FaTrophy className="text-blue-600" />
                          Achievements
                        </h4>
                        <div className="space-y-2">
                          {(exp as any).achievements?.map((achievement: string, idx: number) => (
                            <div key={idx} className="flex items-start gap-2 text-sm">
                              <FaStar className="text-blue-600 dark:text-blue-400 text-xs mt-1 flex-shrink-0" />
                              <span className="text-slate-700 dark:text-slate-300">{achievement}</span>
                            </div>
                          )) || (
                            <p className="text-slate-600 dark:text-slate-400 text-sm">Detailed achievements available upon request.</p>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}