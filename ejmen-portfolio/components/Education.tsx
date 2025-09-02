'use client'

import { useState, useEffect } from 'react'
import { 
  FaGraduationCap, 
  FaUniversity, 
  FaStar, 
  FaTrophy, 
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaBookOpen,
  FaAward,
  FaChartLine
} from 'react-icons/fa'
import { education } from '@/lib/data/portfolio-data'

export default function Education() {
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

    const element = document.getElementById('education')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const academicHighlights = [
    {
      title: "President's List",
      description: "4 consecutive semesters of academic excellence",
      icon: FaTrophy,
      color: "yellow",
      metric: "4x"
    },
    {
      title: "Cumulative GPA",
      description: "Consistent high academic performance",
      icon: FaChartLine,
      color: "blue",
      metric: "3.85/4.0"
    },
    {
      title: "Academic Focus",
      description: "Machine Learning, Software Development, IoT",
      icon: FaBookOpen,
      color: "green",
      metric: "3 Areas"
    },
    {
      title: "Expected Graduation",
      description: "Bachelor's in Computer Engineering",
      icon: FaAward,
      color: "purple",
      metric: "2026"
    }
  ]

  const coursework = [
    "Data Structures & Algorithms",
    "Machine Learning & AI",
    "Software Engineering",
    "Computer Networks",
    "Database Systems",
    "Mobile App Development",
    "Computer Vision",
    "IoT Systems",
    "Web Technologies",
    "Cybersecurity"
  ]

  return (
    <section id="education" className="py-32 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-blue-950/30 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-slate-900 dark:text-white mb-8 relative">
            <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 dark:from-white dark:via-blue-200 dark:to-white bg-clip-text text-transparent">
              Education
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
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed font-light">
            Academic journey marked by consistent excellence and innovative research
          </p>
        </div>

        {/* Clean Education Card */}
        <div className={`mb-16 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '200ms' }}>
          <div className="premium-card p-8 rounded-3xl">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <FaGraduationCap className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">{education.degree}</h3>
                    <p className="text-lg font-medium text-slate-700 dark:text-slate-300 mb-2">{education.institution}</p>
                    <div className="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-400">
                      <span className="flex items-center gap-1">
                        <FaMapMarkerAlt />
                        {education.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <FaCalendarAlt />
                        {education.duration}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  {education.details.map((detail, index) => (
                    <div key={index} className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-center">
                <div className="bg-white dark:bg-slate-900 rounded-lg p-6 border border-slate-200 dark:border-slate-700">
                  <div className="text-4xl font-bold text-slate-900 dark:text-white mb-2">{education.gpa}</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Cumulative GPA</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Relevant Coursework */}
        <div className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '400ms' }}>
          <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6">Relevant Coursework</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-3">
            {coursework.map((course, index) => (
              <div 
                key={index}
                className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-center hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
              >
                <span className="text-sm font-medium text-blue-800 dark:text-blue-300">{course}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}