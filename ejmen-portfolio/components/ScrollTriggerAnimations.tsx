'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, ReactNode } from 'react'

interface ScrollRevealProps {
  children: ReactNode
  direction?: 'up' | 'down' | 'left' | 'right'
  delay?: number
  className?: string
}

export function ScrollReveal({ 
  children, 
  direction = 'up', 
  delay = 0,
  className = '' 
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const directionMap = {
    up: { y: [50, 0], x: [0, 0] },
    down: { y: [-50, 0], x: [0, 0] },
    left: { x: [50, 0], y: [0, 0] },
    right: { x: [-50, 0], y: [0, 0] }
  }

  const { x, y } = directionMap[direction]
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1])
  const transform = useTransform(scrollYProgress, [0, 0.3], direction === 'up' || direction === 'down' ? y : x)

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        opacity,
        [direction === 'up' || direction === 'down' ? 'y' : 'x']: transform
      }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  )
}

interface ParallaxElementProps {
  children: ReactNode
  speed?: number
  className?: string
}

export function ParallaxElement({ 
  children, 
  speed = 0.5,
  className = '' 
}: ParallaxElementProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [0, speed * 100])
  
  return (
    <motion.div ref={ref} className={className} style={{ y }}>
      {children}
    </motion.div>
  )
}

interface FadeInScaleProps {
  children: ReactNode
  delay?: number
  className?: string
}

export function FadeInScale({ 
  children, 
  delay = 0,
  className = '' 
}: FadeInScaleProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ 
        duration: 0.6, 
        delay,
        type: "spring",
        stiffness: 100
      }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  )
}