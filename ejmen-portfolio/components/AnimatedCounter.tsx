'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface CounterProps {
  end: number
  duration?: number
  suffix?: string
  prefix?: string
  decimals?: number
}

export function AnimatedCounter({ 
  end, 
  duration = 2, 
  suffix = '', 
  prefix = '', 
  decimals = 0 
}: CounterProps) {
  const [count, setCount] = useState(0)
  const [ref, inView] = useInView({ triggerOnce: true })

  useEffect(() => {
    if (inView) {
      let startTime: number
      const startValue = 0

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1)
        
        const easeOutQuart = 1 - Math.pow(1 - progress, 4)
        const currentCount = startValue + (end - startValue) * easeOutQuart
        
        setCount(currentCount)

        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }

      requestAnimationFrame(animate)
    }
  }, [inView, end, duration])

  return (
    <span ref={ref} className="font-mono">
      {prefix}{count.toFixed(decimals)}{suffix}
    </span>
  )
}

interface StatItemProps {
  number: number
  label: string
  suffix?: string
  prefix?: string
  decimals?: number
  icon?: React.ReactNode
  delay?: number
}

export function StatItem({ 
  number, 
  label, 
  suffix = '', 
  prefix = '', 
  decimals = 0, 
  icon, 
  delay = 0 
}: StatItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="text-center p-6 glass-card rounded-2xl hover:shadow-cyber transition-all duration-300 group"
    >
      {icon && (
        <motion.div
          className="text-4xl mb-4 text-primary-500 group-hover:text-secondary-500 transition-colors duration-300"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.2 }}
        >
          {icon}
        </motion.div>
      )}
      <motion.div
        className="text-3xl md:text-4xl font-bold gradient-text mb-2"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
        <AnimatedCounter 
          end={number} 
          suffix={suffix} 
          prefix={prefix} 
          decimals={decimals}
          duration={2.5}
        />
      </motion.div>
      <p className="text-slate-600 dark:text-slate-400 font-medium">{label}</p>
    </motion.div>
  )
}

export default function StatsSection() {
  const stats = [
    {
      number: 7,
      label: 'Major Projects',
      suffix: '+',
      icon: '🚀',
      delay: 0
    },
    {
      number: 3.85,
      label: 'GPA Score',
      decimals: 2,
      icon: '🎓',
      delay: 0.1
    },
    {
      number: 4,
      label: 'President\'s List',
      suffix: ' Semesters',
      icon: '🏆',
      delay: 0.2
    },
    {
      number: 6,
      label: 'Work Experience',
      suffix: ' Roles',
      icon: '💼',
      delay: 0.3
    }
  ]

  return (
    <section className="py-12">
      <div className="max-width-wrapper section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold gradient-text mb-4">
            Achievements by Numbers
          </h3>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A snapshot of my academic excellence and professional journey
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              number={stat.number}
              label={stat.label}
              suffix={stat.suffix}
              decimals={stat.decimals}
              icon={stat.icon}
              delay={stat.delay}
            />
          ))}
        </div>
      </div>
    </section>
  )
}