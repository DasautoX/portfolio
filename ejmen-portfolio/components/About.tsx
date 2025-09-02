'use client'

import { useState, useEffect } from 'react'
import { 
  FaGraduationCap, 
  FaBriefcase, 
  FaTrophy, 
  FaLanguage, 
  FaBrain, 
  FaRocket,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaStar,
  FaCode,
  FaLightbulb,
  FaUsers,
  FaChartLine
} from 'react-icons/fa'
import { education, experiences, awards, personalInfo } from '@/lib/data/portfolio-data'

export default function About() {
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('about')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-950/30 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-72 h-72 bg-blue-400/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className={`relative text-center mb-20 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* EJ Logo Badge */}
          <div className="flex justify-center mb-8">
            <div className="relative group">
              <div className="w-20 h-20 ej-logo">
                <span className="text-2xl tracking-tighter">EJ</span>
              </div>
            </div>
          </div>
          
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-white mb-8 relative">
            <span className="bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent ej-text-glow">
              About EJ
            </span>
          </h2>
          
          <div className="flex items-center justify-center gap-6 mb-12">
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-blue-600 to-blue-600 rounded-full"></div>
            <div className="relative">
              <div className="w-4 h-4 bg-blue-600 rounded-full animate-pulse"></div>
              <div className="absolute inset-0 bg-blue-600 rounded-full animate-ping opacity-20"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-blue-800/20 rounded-full blur-sm"></div>
            </div>
            <div className="w-24 h-0.5 bg-gradient-to-l from-transparent via-blue-600 to-blue-600 rounded-full"></div>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <p className="text-xl md:text-2xl text-slate-400 leading-relaxed font-light mb-6">
              <span className="font-display font-semibold text-2xl md:text-3xl bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Ejmen &quot;EJ&quot; Al-Ubejdij
              </span>
              <br className="mb-4" />
              Computer Engineering student at{' '}
              <span className="relative inline-block">
                <span className="absolute -inset-2 bg-gradient-to-r from-blue-900/50 to-blue-800/50 rounded-xl blur opacity-50"></span>
                <span className="relative font-semibold text-blue-400 px-3 py-1">Hamad Bin Khalifa University</span>
              </span>
            </p>
            
            <p className="text-lg md:text-xl text-slate-400 leading-relaxed">
              Dedicated to leveraging cutting-edge technology to solve real-world problems. 
              With extensive experience in research, development, and leadership, EJ bridges the gap between{' '}
              <span className="font-medium text-slate-300 relative">
                <span className="absolute -inset-1 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded blur"></span>
                <span className="relative">academic excellence and practical innovation</span>
              </span>.
            </p>
          </div>
        </div>

        {/* Enhanced Professional Overview */}
        <div className={`relative mb-20 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '200ms' }}>
          <div className="premium-card rounded-3xl p-10 backdrop-blur-sm">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Personal Info */}
              <div className="space-y-8">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg">
                    <FaUsers className="text-white text-lg" />
                  </div>
                  <h3 className="text-3xl font-display text-white">
                    Personal Information
                  </h3>
                </div>
                <div className="space-y-6">
                  <div className="group flex items-center gap-4 p-4 rounded-2xl bg-blue-950/30 hover:bg-blue-950/50 transition-all duration-300">
                    <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                      <FaMapMarkerAlt className="text-white text-sm" />
                    </div>
                    <div>
                      <span className="font-semibold text-white block">Location</span>
                      <span className="text-slate-400">{personalInfo.location}</span>
                    </div>
                  </div>
                  <div className="group flex items-center gap-4 p-4 rounded-2xl bg-blue-950/30 hover:bg-blue-950/50 transition-all duration-300">
                    <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                      <FaGraduationCap className="text-white text-sm" />
                    </div>
                    <div>
                      <span className="font-semibold text-white block">Education</span>
                      <div className="text-slate-400">
                        <div className="font-medium">{education.degree}</div>
                        <div className="text-sm opacity-75">{education.institution}</div>
                      </div>
                    </div>
                  </div>
                  <div className="group flex items-start gap-4 p-4 rounded-2xl bg-blue-950/30 hover:bg-blue-950/50 transition-all duration-300">
                    <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300 mt-1">
                      <FaLanguage className="text-white text-sm" />
                    </div>
                    <div>
                      <span className="font-semibold text-slate-900 dark:text-white block mb-2">Languages</span>
                      <div className="space-y-1">
                        {personalInfo.languages.map((lang, index) => (
                          <div key={index} className="text-slate-400 text-sm flex items-center justify-between bg-slate-800/50 rounded-lg px-3 py-1">
                            <span className="font-medium">{lang.name}</span>
                            <span className="text-blue-400 text-xs font-medium">{lang.level}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Core Skills */}
              <div className="space-y-8">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg">
                    <FaLightbulb className="text-white text-lg" />
                  </div>
                  <h3 className="text-3xl font-display text-white">
                    Core Expertise
                  </h3>
                </div>
                <div className="space-y-6">
                  <div className="group relative p-6 rounded-2xl bg-gradient-to-br from-blue-950/30 to-blue-900/20 hover:from-blue-950/50 hover:to-blue-900/30 transition-all duration-500 overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-t-2xl"></div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <FaCode className="text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">Full-Stack Development</h4>
                        <p className="text-slate-400 font-mono text-sm">React • Next.js • Node.js</p>
                      </div>
                    </div>
                  </div>
                  <div className="group relative p-6 rounded-2xl bg-gradient-to-br from-blue-950/30 to-blue-900/20 hover:from-blue-950/50 hover:to-blue-900/30 transition-all duration-500 overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-t-2xl"></div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <FaBrain className="text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">AI & Machine Learning</h4>
                        <p className="text-slate-400 font-mono text-sm">TensorFlow • PyTorch • Computer Vision</p>
                      </div>
                    </div>
                  </div>
                  <div className="group relative p-6 rounded-2xl bg-gradient-to-br from-blue-950/30 to-blue-900/20 hover:from-blue-950/50 hover:to-blue-900/30 transition-all duration-500 overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-t-2xl"></div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <FaChartLine className="text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">Research & Development</h4>
                        <p className="text-slate-400 font-mono text-sm">Data Science • Academic Publications</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Professional Stats */}
        <div className={`relative transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '400ms' }}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group relative p-8 text-center premium-card rounded-3xl overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-blue-600 group-hover:from-blue-400 group-hover:to-blue-700 transition-all duration-500"></div>
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-500">
                <FaStar className="text-white text-xl" />
              </div>
              <div className="text-4xl font-display font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">3.85</div>
              <div className="text-sm font-medium text-slate-400 uppercase tracking-wide">Cumulative GPA</div>
            </div>
            <div className="group relative p-8 text-center premium-card rounded-3xl overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-blue-600 group-hover:from-blue-400 group-hover:to-blue-700 transition-all duration-500"></div>
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-500">
                <FaTrophy className="text-white text-xl" />
              </div>
              <div className="text-4xl font-display font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">4</div>
              <div className="text-sm font-medium text-slate-400 uppercase tracking-wide">President&apos;s List</div>
            </div>
            <div className="group relative p-8 text-center premium-card rounded-3xl overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-blue-600 group-hover:from-blue-400 group-hover:to-blue-700 transition-all duration-500"></div>
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-500">
                <FaBriefcase className="text-white text-xl" />
              </div>
              <div className="text-4xl font-display font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">6</div>
              <div className="text-sm font-medium text-slate-400 uppercase tracking-wide">Work Experiences</div>
            </div>
            <div className="group relative p-8 text-center premium-card rounded-3xl overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-blue-600 group-hover:from-blue-400 group-hover:to-blue-700 transition-all duration-500"></div>
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-500">
                <FaRocket className="text-white text-xl" />
              </div>
              <div className="text-4xl font-display font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">7+</div>
              <div className="text-sm font-medium text-slate-400 uppercase tracking-wide">Major Projects</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}