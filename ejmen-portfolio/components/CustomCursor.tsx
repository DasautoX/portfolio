'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isPointer, setIsPointer] = useState(false)

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const updateCursorType = () => {
      const target = document.elementFromPoint(mousePosition.x, mousePosition.y)
      const isClickable = target?.tagName === 'A' || 
                         target?.tagName === 'BUTTON' || 
                         target?.closest('a') !== null ||
                         target?.closest('button') !== null ||
                         window.getComputedStyle(target as Element).cursor === 'pointer'
      
      setIsPointer(isClickable || false)
    }

    window.addEventListener('mousemove', updateMousePosition)
    window.addEventListener('mouseover', updateCursorType)

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
      window.removeEventListener('mouseover', updateCursorType)
    }
  }, [mousePosition.x, mousePosition.y])

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-primary-600 rounded-full pointer-events-none z-[100] mix-blend-difference"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
          scale: isPointer ? 2 : 1
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28
        }}
      />
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border-2 border-primary-400 rounded-full pointer-events-none z-[99]"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isPointer ? 1.5 : 1
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20
        }}
      />
    </>
  )
}