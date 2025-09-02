'use client'

import { useState, useEffect } from 'react'
import { FaGithub, FaExternalLinkAlt, FaClock, FaCode, FaRocket, FaStar, FaEye, FaBrain, FaUsers, FaChartLine } from 'react-icons/fa'
import { projects } from '@/lib/data/portfolio-data'

export default function Projects() {
  const [inView, setInView] = useState(false)
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('projects')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const getProjectIcon = (type: string) => {
    switch (type) {
      case 'Research Project': return FaRocket
      case 'Web Development': return FaCode
      case 'Mobile Application': return FaCode
      case 'AI Project': return FaBrain
      default: return FaStar
    }
  }

  return (
    <section id="projects" className="py-32 bg-gradient-to-br from-slate-900 via-blue-950/30 to-slate-900 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/5 rounded-full filter blur-3xl animate-pulse" style={{ animationDuration: '8s' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full filter blur-3xl animate-pulse" style={{ animationDuration: '10s', animationDelay: '4s' }}></div>
        
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.05]" style={{
          backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.5) 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className={`text-center mb-20 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* EJ Projects Badge */}
          <div className="flex justify-center mb-8">
            <div className="flex items-center gap-4 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl shadow-2xl">
              <div className="w-10 h-10 bg-white/20 rounded-2xl flex items-center justify-center">
                <span className="text-white font-display font-black text-sm tracking-tighter">EJ</span>
              </div>
              <span className="text-white font-semibold tracking-wide">PORTFOLIO</span>
            </div>
          </div>
          
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-white mb-8 relative">
            <span className="bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">
              Featured Projects
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
          
          <p className="text-xl md:text-2xl text-slate-400 max-w-4xl mx-auto leading-relaxed font-light">
            A collection of projects in{' '}
            <span className="font-medium text-blue-400 relative">
              <span className="absolute -inset-1 bg-blue-900/30 rounded blur opacity-30"></span>
              <span className="relative">AI & machine learning</span>
            </span>,{' '}
            <span className="font-medium text-blue-400 relative">
              <span className="absolute -inset-1 bg-blue-900/30 rounded blur opacity-30"></span>
              <span className="relative">web development</span>
            </span>, and{' '}
            <span className="font-medium text-slate-300">software engineering</span>
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, 6).map((project, index) => {
            const IconComponent = getProjectIcon(project.type)
            return (
              <div 
                key={project.id} 
                className={`group relative premium-card p-8 rounded-3xl transition-all duration-700 hover:scale-105 ej-gradient-border magnetic card-3d ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Project Type Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-blue-500/30 group-hover:scale-110 transition-all duration-500">
                    <IconComponent className="text-white text-xl" />
                  </div>
                  <div className="flex gap-2">
                    <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs font-semibold border border-blue-200 dark:border-blue-800">
                      {project.type}
                    </span>
                  </div>
                </div>

                {/* Project Title & Duration */}
                <div className="mb-6">
                  <h3 className="text-2xl font-display font-bold text-white mb-3 group-hover:text-blue-400 transition-all duration-500">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-3 text-sm text-slate-400">
                    <div className="w-8 h-8 rounded-lg bg-blue-900/30 flex items-center justify-center">
                      <FaClock className="text-blue-400 text-xs" />
                    </div>
                    <span className="font-medium">{project.duration}</span>
                  </div>
                </div>
                
                {/* Description */}
                <p className="text-slate-400 mb-8 text-base leading-relaxed">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-slate-300 mb-3 uppercase tracking-wide">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-2 bg-blue-950/50 text-blue-300 text-xs rounded-xl font-medium border border-blue-800 hover:bg-blue-950/70 hover:scale-105 transition-all duration-300 font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Highlights */}
                <div className="space-y-3 mb-8">
                  <h4 className="text-sm font-semibold text-slate-300 uppercase tracking-wide">Key Highlights</h4>
                  {project.highlights.map((highlight, highlightIndex) => (
                    <div key={highlightIndex} className="group/highlight flex items-start gap-4 p-3 hover:bg-blue-950/30 rounded-xl transition-all duration-300">
                      <div className="w-6 h-6 rounded-lg bg-yellow-900/30 flex items-center justify-center flex-shrink-0 group-hover/highlight:scale-110 transition-transform duration-300">
                        <FaStar className="text-yellow-400 text-xs" />
                      </div>
                      <span className="text-slate-300 text-sm leading-relaxed">{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Project Status & Impact */}
                <div className="mb-6 p-4 bg-slate-800/50 rounded-2xl border border-slate-700">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-semibold text-slate-300 uppercase tracking-wide">Status</span>
                    <span className={`px-3 py-1.5 rounded-xl text-xs font-semibold ${
                      (project as any).status === 'Live' ? 'bg-green-900/30 text-green-400 border border-green-800' :
                      (project as any).status === 'In Development' ? 'bg-yellow-900/30 text-yellow-400 border border-yellow-800' :
                      'bg-blue-900/30 text-blue-400 border border-blue-800'
                    }`}>
                      {(project as any).status}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-900/30 flex items-center justify-center">
                      <FaUsers className="text-blue-400 text-sm" />
                    </div>
                    <span className="text-sm text-slate-400 font-medium">{(project as any).impact}</span>
                  </div>
                </div>

                {/* Project Links */}
                <div className="flex gap-4 pt-6 border-t border-slate-700">
                  {(project as any).link && (
                    <a 
                      href={(project as any).link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link flex-1 flex items-center justify-center gap-3 py-4 px-6 bg-blue-600 text-white rounded-2xl hover:bg-blue-700 transition-all duration-500 font-semibold text-sm shadow-xl hover:shadow-2xl transform hover:scale-105 overflow-hidden relative"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300"></div>
                      <FaExternalLinkAlt className="relative z-10 group-hover/link:scale-110 transition-transform duration-300" />
                      <span className="relative z-10">Live Demo</span>
                    </a>
                  )}
                  {(project as any).github && (
                    <a 
                      href={(project as any).github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/github flex items-center justify-center w-14 h-14 bg-slate-700 text-white rounded-2xl hover:bg-slate-600 transition-all duration-500 shadow-xl hover:shadow-2xl transform hover:scale-110"
                    >
                      <FaGithub className="text-lg group-hover/github:scale-110 transition-transform duration-300" />
                    </a>
                  )}
                </div>

                {/* Enhanced Hover Effect Overlay */}
                {hoveredProject === project.id && (
                  <div className="absolute inset-0 bg-blue-400/5 rounded-3xl pointer-events-none transition-all duration-500 border border-blue-800/50"></div>
                )}
              </div>
            )
          })}
        </div>

        {/* Enhanced View All Projects Button */}
        <div className={`text-center mt-20 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '1000ms' }}>
          <button className="group relative px-12 py-5 bg-blue-600 text-white rounded-3xl font-display font-bold shadow-2xl hover:shadow-blue-500/30 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10 flex items-center gap-3">
              <span>View All Projects</span>
              <FaRocket className="group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="absolute inset-0 shimmer rounded-3xl"></div>
          </button>
        </div>
      </div>
    </section>
  )
}