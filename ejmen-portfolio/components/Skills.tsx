'use client'

import { useState, useEffect } from 'react'
import { FaCode, FaLaptopCode, FaDatabase, FaMobile, FaBrain, FaTools } from 'react-icons/fa'
import { skills } from '@/lib/data/portfolio-data'

export default function Skills() {
  const [inView, setInView] = useState(false)
  const [activeCategory, setActiveCategory] = useState('programming')

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('skills')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const skillCategories = [
    { id: 'programming', label: 'Programming', icon: FaCode, color: 'blue' },
    { id: 'development', label: 'Development', icon: FaLaptopCode, color: 'green' },
    { id: 'software', label: 'Software & Tools', icon: FaTools, color: 'purple' }
  ]

  const getSkillLevel = (skill: any) => {
    // Handle both old string format and new object format
    if (typeof skill === 'object' && skill.level) {
      return skill.level
    }
    // Fallback for string skills
    const expertSkills = ['Python', 'JavaScript', 'TypeScript', 'React', 'Next.js']
    const advancedSkills = ['Java', 'C/C++', 'Node.js', 'TensorFlow', 'MongoDB']
    
    const skillName = typeof skill === 'string' ? skill : skill.name
    if (expertSkills.some(s => skillName.includes(s))) return 95
    if (advancedSkills.some(s => skillName.includes(s))) return 85
    return 75
  }

  const getSkillName = (skill: any) => {
    return typeof skill === 'string' ? skill : skill.name
  }

  const getSkillExperience = (skill: any) => {
    return typeof skill === 'object' && skill.experience ? skill.experience : ''
  }

  return (
    <section id="skills" className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-950/30 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-400/5 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-blue-500/5 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className={`text-center mb-20 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-white mb-8 relative">
            <span className="bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">
              Technical Skills
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
            Technical expertise across various domains of software engineering and AI
          </p>
        </div>

        {/* Category Tabs */}
        <div className={`flex flex-wrap justify-center gap-4 mb-16 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '200ms' }}>
          {skillCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-3 px-6 py-4 rounded-2xl font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? `bg-gradient-to-r ${
                      category.color === 'blue' ? 'from-blue-600 to-blue-700' :
                      category.color === 'green' ? 'from-green-600 to-green-700' :
                      'from-purple-600 to-purple-700'
                    } text-white shadow-lg transform scale-105`
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700 shadow-md hover:shadow-lg border border-slate-700'
              }`}
            >
              <category.icon className="text-lg" />
              {category.label}
            </button>
          ))}
        </div>

        {/* Programming Languages */}
        {activeCategory === 'programming' && (
          <div className={`transition-all duration-500 ${inView ? 'opacity-100' : 'opacity-0'}`}>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="premium-card p-8 rounded-3xl">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <FaCode className="text-blue-400" />
                  Programming Languages
                </h3>
                <div className="space-y-4">
                  {skills.programming.map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <div>
                          <span className="font-semibold text-white">{getSkillName(skill)}</span>
                          {getSkillExperience(skill) && (
                            <span className="text-xs text-slate-400 ml-2">({getSkillExperience(skill)})</span>
                          )}
                        </div>
                        <span className="text-sm font-bold text-blue-400">{getSkillLevel(skill)}%</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-blue-400 to-blue-500 rounded-full transition-all duration-1000 shimmer"
                          style={{ 
                            width: inView ? `${getSkillLevel(skill)}%` : '0%',
                            transitionDelay: `${index * 100}ms`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="premium-card p-8 rounded-3xl">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <FaTools className="text-purple-400" />
                  Software & Tools
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {skills.software.map((tool, index) => (
                    <div 
                      key={index}
                      className="flex items-center gap-3 p-3 bg-gradient-to-r from-slate-800 to-blue-950/50 rounded-xl hover:from-slate-700 hover:to-blue-900/50 transition-all duration-300 transform hover:scale-105"
                    >
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-slate-300 font-medium text-sm">{tool}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Development Skills */}
        {activeCategory === 'development' && (
          <div className={`transition-all duration-500 ${inView ? 'opacity-100' : 'opacity-0'}`}>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {Object.entries(skills.development).map(([category, techs], index) => {
                const getCategoryIcon = (cat: string) => {
                  switch (cat) {
                    case 'Frontend': return FaCode
                    case 'Backend': return FaDatabase
                    case 'Mobile': return FaMobile
                    case 'AI/ML': return FaBrain
                    case 'Cloud & DevOps': return FaTools
                    case 'Databases': return FaDatabase
                    default: return FaLaptopCode
                  }
                }
                
                const getCategoryColor = (cat: string) => {
                  switch (cat) {
                    case 'Frontend': return 'blue'
                    case 'Backend': return 'green'
                    case 'Mobile': return 'purple'
                    case 'AI/ML': return 'pink'
                    case 'Cloud & DevOps': return 'orange'
                    case 'Databases': return 'indigo'
                    default: return 'gray'
                  }
                }
                
                const IconComponent = getCategoryIcon(category)
                const color = getCategoryColor(category)
                
                return (
                  <div key={category} className="premium-card p-6 rounded-3xl text-center group hover:neon-blue transition-all duration-300">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-300 ${
                      color === 'blue' ? 'bg-gradient-to-br from-blue-500 to-blue-600' :
                      color === 'green' ? 'bg-gradient-to-br from-green-500 to-green-600' :
                      color === 'purple' ? 'bg-gradient-to-br from-purple-500 to-purple-600' :
                      color === 'pink' ? 'bg-gradient-to-br from-pink-500 to-pink-600' :
                      color === 'orange' ? 'bg-gradient-to-br from-orange-500 to-orange-600' :
                      color === 'indigo' ? 'bg-gradient-to-br from-indigo-500 to-indigo-600' :
                      'bg-gradient-to-br from-gray-500 to-gray-600'
                    }`}>
                      <IconComponent className="text-white text-2xl" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-4">{category}</h3>
                    <div className="space-y-2">
                      {techs.map((tech, techIndex) => (
                        <div key={techIndex} className={`px-3 py-2 rounded-lg text-sm font-medium hover:shadow-md transition-all duration-300 ${
                          color === 'blue' ? 'bg-blue-900/20 text-blue-300' :
                          color === 'green' ? 'bg-green-900/20 text-green-300' :
                          color === 'purple' ? 'bg-purple-900/20 text-purple-300' :
                          color === 'pink' ? 'bg-pink-900/20 text-pink-300' :
                          color === 'orange' ? 'bg-orange-900/20 text-orange-300' :
                          color === 'indigo' ? 'bg-indigo-900/20 text-indigo-300' :
                          'bg-gray-900/20 text-gray-300'
                        }`}>
                          {tech}
                        </div>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {/* Software Category */}
        {activeCategory === 'software' && (
          <div className={`transition-all duration-500 ${inView ? 'opacity-100' : 'opacity-0'}`}>
            <div className="premium-card p-8 rounded-3xl">
              <h3 className="text-3xl font-bold text-white mb-8 text-center">Professional Tools</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {skills.software.map((tool, index) => (
                  <div 
                    key={index}
                    className="group relative p-6 bg-gradient-to-br from-slate-800 to-blue-950/30 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2"
                  >
                    <div className="text-center">
                      <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300">
                        <FaTools className="text-white text-lg" />
                      </div>
                      <span className="text-slate-200 font-semibold text-sm">{tool}</span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Skill Summary */}
        <div className={`mt-20 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '800ms' }}>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 glass rounded-3xl">
              <div className="text-4xl font-black gradient-blue mb-3">8+</div>
              <div className="text-slate-300 font-semibold">Programming Languages</div>
            </div>
            <div className="text-center p-8 glass rounded-3xl">
              <div className="text-4xl font-black gradient-blue mb-3">20+</div>
              <div className="text-slate-300 font-semibold">Technologies & Frameworks</div>
            </div>
            <div className="text-center p-8 glass rounded-3xl">
              <div className="text-4xl font-black gradient-blue mb-3">10+</div>
              <div className="text-slate-300 font-semibold">Professional Tools</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}