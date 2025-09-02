'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

interface GlitchTextProps {
  children: string
  className?: string
  intensity?: 'low' | 'medium' | 'high'
}

export default function GlitchText({ 
  children, 
  className = '',
  intensity = 'medium' 
}: GlitchTextProps) {
  const [isGlitching, setIsGlitching] = useState(false)
  
  const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?'
  const [glitchedText, setGlitchedText] = useState(children)
  
  const intensitySettings = {
    low: { probability: 0.02, duration: 100, interval: 3000 },
    medium: { probability: 0.05, duration: 150, interval: 2000 },
    high: { probability: 0.08, duration: 200, interval: 1500 }
  }
  
  const settings = intensitySettings[intensity]

  useEffect(() => {
    const triggerGlitch = () => {
      setIsGlitching(true)
      
      // Create glitched version
      const chars = children.split('')
      const glitched = chars.map(char => {
        if (char === ' ') return char
        return Math.random() < settings.probability 
          ? glitchChars[Math.floor(Math.random() * glitchChars.length)]
          : char
      }).join('')
      
      setGlitchedText(glitched)
      
      setTimeout(() => {
        setGlitchedText(children)
        setIsGlitching(false)
      }, settings.duration)
    }

    const interval = setInterval(triggerGlitch, settings.interval)
    return () => clearInterval(interval)
  }, [children, settings])

  return (
    <motion.span
      className={`relative inline-block ${className}`}
      animate={isGlitching ? {
        x: [0, -1, 1, -1, 0],
        filter: [
          'hue-rotate(0deg)',
          'hue-rotate(90deg)',
          'hue-rotate(180deg)',
          'hue-rotate(270deg)',
          'hue-rotate(0deg)'
        ]
      } : {}}
      transition={{ duration: 0.1, repeat: isGlitching ? 3 : 0 }}
    >
      {glitchedText}
      {isGlitching && (
        <>
          <motion.span
            className="absolute top-0 left-0 text-red-500 dark:text-red-400 mix-blend-multiply"
            style={{ clipPath: 'inset(0 0 90% 0)' }}
            animate={{ x: [0, 2, -2, 0] }}
            transition={{ duration: 0.1, repeat: 3 }}
          >
            {children}
          </motion.span>
          <motion.span
            className="absolute top-0 left-0 text-cyan-500 dark:text-cyan-400 mix-blend-multiply"
            style={{ clipPath: 'inset(90% 0 0 0)' }}
            animate={{ x: [0, -2, 2, 0] }}
            transition={{ duration: 0.1, repeat: 3 }}
          >
            {children}
          </motion.span>
        </>
      )}
    </motion.span>
  )
}