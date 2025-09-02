'use client'

import { motion } from 'framer-motion'

export default function BackgroundGrid() {
  return (
    <div className="fixed inset-0 -z-20 overflow-hidden opacity-20">
      {/* Animated grid lines */}
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="grid"
            width="60"
            height="60"
            patternUnits="userSpaceOnUse"
          >
            <motion.path
              d="M 60 0 L 0 0 0 60"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="text-slate-300 dark:text-slate-600"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          </pattern>
          <pattern
            id="dots"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <motion.circle
              cx="2"
              cy="2"
              r="1"
              fill="currentColor"
              className="text-blue-400"
              animate={{
                r: [1, 1.5, 1],
                opacity: [0.3, 0.8, 0.3]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </pattern>
        </defs>
        
        <rect width="100%" height="100%" fill="url(#grid)" />
        <rect width="100%" height="100%" fill="url(#dots)" />
        
        {/* Animated scan lines */}
        {Array.from({ length: 3 }).map((_, i) => (
          <motion.line
            key={i}
            x1="0"
            y1="0"
            x2="100%"
            y2="0"
            stroke="url(#gradient)"
            strokeWidth="2"
            className="text-blue-500"
            animate={{
              y1: ['0%', '100%'],
              y2: ['0%', '100%'],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 1.5,
              ease: "easeInOut"
            }}
          />
        ))}
        
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="currentColor" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
      </svg>
      
      {/* Floating geometric shapes */}
      <div className="absolute inset-0">
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </div>
  )
}