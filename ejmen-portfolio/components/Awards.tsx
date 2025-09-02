'use client'

import { useState, useEffect } from 'react'
import { FaTrophy, FaMedal, FaStar, FaAward, FaCalendar, FaGraduationCap, FaHandsHelping } from 'react-icons/fa'
import { awards, certificates, volunteering } from '@/lib/data/portfolio-data'

export default function Awards() {
  const [inView, setInView] = useState(false)
  const [activeTab, setActiveTab] = useState('awards')

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('awards')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const getAwardIcon = (type: string) => {
    switch (type) {
      case 'Academic': return FaGraduationCap
      case 'Technical': return FaStar
      case 'Competition': return FaTrophy
      case 'Scholarship': return FaAward
      default: return FaMedal
    }
  }

  const getAwardColor = (type: string) => {
    switch (type) {
      case 'Academic': return 'blue'
      case 'Technical': return 'green'
      case 'Competition': return 'yellow'
      case 'Scholarship': return 'purple'
      default: return 'gray'
    }
  }

  return (
    <section id="awards" className="py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-950/30 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-blue-400/5 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-blue-500/5 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className={`text-center mb-20 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-white mb-8 relative">
            <span className="bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">
              Awards & Recognition
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
          <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-light">
            Recognition for academic excellence, technical achievements, and competitive success
          </p>
        </div>

        {/* Tabs */}
        <div className={`flex justify-center gap-4 mb-16 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '200ms' }}>
          <button
            onClick={() => setActiveTab('awards')}
            className={`flex items-center gap-3 px-6 py-4 rounded-2xl font-semibold transition-all duration-300 ${
              activeTab === 'awards'
                ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg transform scale-105'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700 shadow-md hover:shadow-lg border border-slate-700'
            }`}
          >
            <FaTrophy className="text-lg" />
            Awards
          </button>
          <button
            onClick={() => setActiveTab('certificates')}
            className={`flex items-center gap-3 px-6 py-4 rounded-2xl font-semibold transition-all duration-300 ${
              activeTab === 'certificates'
                ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg transform scale-105'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700 shadow-md hover:shadow-lg border border-slate-700'
            }`}
          >
            <FaAward className="text-lg" />
            Certificates
          </button>
          <button
            onClick={() => setActiveTab('volunteer')}
            className={`flex items-center gap-3 px-6 py-4 rounded-2xl font-semibold transition-all duration-300 ${
              activeTab === 'volunteer'
                ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg transform scale-105'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700 shadow-md hover:shadow-lg border border-slate-700'
            }`}
          >
            <FaHandsHelping className="text-lg" />
            Volunteer Work
          </button>
        </div>

        {/* Awards Grid */}
        {activeTab === 'awards' && (
          <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-500 ${inView ? 'opacity-100' : 'opacity-0'}`}>
            {awards.map((award, index) => {
              const IconComponent = getAwardIcon(award.type)
              const color = getAwardColor(award.type)
              
              return (
                <div 
                  key={award.id}
                  className={`premium-card p-8 rounded-3xl text-center group hover:scale-105 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${
                    color === 'blue' ? 'from-blue-500 to-blue-600' :
                    color === 'green' ? 'from-green-500 to-green-600' :
                    color === 'yellow' ? 'from-yellow-500 to-orange-600' :
                    color === 'purple' ? 'from-purple-500 to-purple-600' :
                    'from-gray-500 to-gray-600'
                  } rounded-3xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300 float`}>
                    <IconComponent className="text-white text-3xl" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">{award.title}</h3>
                  <p className="text-slate-400 mb-4 leading-relaxed">{award.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className={`px-4 py-2 rounded-full text-sm font-bold ${
                      color === 'blue' ? 'bg-blue-900/30 text-blue-300' :
                      color === 'green' ? 'bg-green-900/30 text-green-300' :
                      color === 'yellow' ? 'bg-yellow-900/30 text-yellow-300' :
                      color === 'purple' ? 'bg-purple-900/30 text-purple-300' :
                      'bg-slate-800 text-slate-300'
                    }`}>
                      {award.type}
                    </span>
                    <span className="text-slate-400 font-semibold">{award.year}</span>
                  </div>
                </div>
              )
            })}
          </div>
        )}

        {/* Certificates Grid */}
        {activeTab === 'certificates' && (
          <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-500 ${inView ? 'opacity-100' : 'opacity-0'}`}>
            {certificates.map((cert, index) => (
              <div 
                key={cert.id}
                className={`premium-card p-8 rounded-3xl text-center group hover:scale-105 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300 float">
                  <FaAward className="text-white text-3xl" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{cert.title}</h3>
                <p className="text-blue-400 font-semibold mb-4">{cert.issuer}</p>
                
                <div className="flex items-center justify-between">
                  <span className="px-4 py-2 bg-blue-900/30 text-blue-300 rounded-full text-sm font-bold">
                    {cert.type}
                  </span>
                  <span className="text-slate-400 font-semibold">{cert.year}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Volunteer Work Grid */}
        {activeTab === 'volunteer' && (
          <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-500 ${inView ? 'opacity-100' : 'opacity-0'}`}>
            {volunteering.map((vol, index) => (
              <div 
                key={vol.id}
                className={`premium-card p-8 rounded-3xl text-center group hover:scale-105 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-green-500 to-green-600 rounded-3xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300 float">
                  <FaHandsHelping className="text-white text-3xl" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{vol.title}</h3>
                <p className="text-green-400 font-semibold mb-2">{vol.organization}</p>
                <p className="text-slate-400 mb-4 text-sm leading-relaxed">{vol.description}</p>
                
                <div className="flex items-center justify-center">
                  <span className="px-4 py-2 bg-green-900/30 text-green-300 rounded-full text-sm font-bold">
                    {vol.year}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Achievement Summary */}
        <div className={`mt-20 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '1000ms' }}>
          <div className="glass p-8 rounded-3xl">
            <h3 className="text-2xl font-bold text-white text-center mb-8">Recognition Highlights</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-black gradient-blue mb-2">{awards.length}</div>
                <div className="text-slate-300 font-medium text-sm">Total Awards</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black gradient-blue mb-2">4</div>
                <div className="text-slate-300 font-medium text-sm">President&apos;s List</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black gradient-blue mb-2">{certificates.length}</div>
                <div className="text-slate-300 font-medium text-sm">Certificates</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black gradient-blue mb-2">2024</div>
                <div className="text-slate-300 font-medium text-sm">Latest Achievement</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}