'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function LiquidCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const [isHovering, setIsHovering] = useState(false)
  const [cursorText, setCursorText] = useState('')
  
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  const springConfig = { damping: 25, stiffness: 700 }
  const cursorX = useSpring(mouseX, springConfig)
  const cursorY = useSpring(mouseY, springConfig)

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX - 16)
      mouseY.set(e.clientY - 16)
    }

    const handleMouseEnter = (e: Event) => {
      const target = e.target as HTMLElement
      if (target.closest('a, button, [role="button"]')) {
        setIsHovering(true)
        const text = target.getAttribute('data-cursor-text')
        if (text) setCursorText(text)
      }
    }

    const handleMouseLeave = (e: Event) => {
      const target = e.target as HTMLElement
      if (target.closest('a, button, [role="button"]')) {
        setIsHovering(false)
        setCursorText('')
      }
    }

    document.addEventListener('mousemove', moveCursor)
    document.addEventListener('mouseenter', handleMouseEnter, true)
    document.addEventListener('mouseleave', handleMouseLeave, true)

    return () => {
      document.removeEventListener('mousemove', moveCursor)
      document.removeEventListener('mouseenter', handleMouseEnter, true)
      document.removeEventListener('mouseleave', handleMouseLeave, true)
    }
  }, [mouseX, mouseY])

  return (
    <>
      {/* Main cursor */}
      <motion.div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
        }}
      >
        <motion.div
          className="relative"
          animate={{
            scale: isHovering ? 2 : 1,
          }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 28
          }}
        >
          {/* Outer ring */}
          <motion.div
            className="w-8 h-8 border-2 border-white rounded-full"
            animate={{
              scale: isHovering ? 1.5 : 1,
              opacity: isHovering ? 0.8 : 1,
            }}
          />
          
          {/* Inner dot */}
          <motion.div
            className="absolute top-1/2 left-1/2 w-1 h-1 bg-white rounded-full"
            style={{ x: '-50%', y: '-50%' }}
            animate={{
              scale: isHovering ? 0 : 1,
            }}
          />
          
          {/* Text */}
          {cursorText && (
            <motion.div
              className="absolute top-10 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-white text-black rounded text-xs font-medium whitespace-nowrap"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
            >
              {cursorText}
            </motion.div>
          )}
        </motion.div>
      </motion.div>

      {/* Trailing dots */}
      {Array.from({ length: 5 }).map((_, i) => (
        <TrailingDot key={i} delay={i * 0.05} mouseX={mouseX} mouseY={mouseY} />
      ))}
    </>
  )
}

function TrailingDot({ 
  delay, 
  mouseX, 
  mouseY 
}: { 
  delay: number
  mouseX: any
  mouseY: any 
}) {
  const dotX = useSpring(mouseX, { damping: 25, stiffness: 400 })
  const dotY = useSpring(mouseY, { damping: 25, stiffness: 400 })

  return (
    <motion.div
      className="fixed top-0 left-0 w-2 h-2 bg-white/30 rounded-full pointer-events-none z-[9998] mix-blend-difference"
      style={{
        x: dotX,
        y: dotY,
        translateX: '50%',
        translateY: '50%'
      }}
    />
  )
}