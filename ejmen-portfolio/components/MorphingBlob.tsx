'use client'

import { motion } from 'framer-motion'

interface MorphingBlobProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
  color?: 'blue' | 'purple' | 'pink' | 'green'
}

const sizeClasses = {
  sm: 'w-32 h-32',
  md: 'w-48 h-48', 
  lg: 'w-64 h-64'
}

const colorClasses = {
  blue: 'from-blue-400/20 to-cyan-400/20',
  purple: 'from-purple-400/20 to-pink-400/20',
  pink: 'from-pink-400/20 to-rose-400/20',
  green: 'from-green-400/20 to-emerald-400/20'
}

export default function MorphingBlob({ 
  className = '', 
  size = 'md',
  color = 'blue' 
}: MorphingBlobProps) {
  return (
    <motion.div
      className={`absolute ${sizeClasses[size]} bg-gradient-to-br ${colorClasses[color]} rounded-full blur-3xl ${className}`}
      animate={{
        scale: [1, 1.2, 0.8, 1.1, 1],
        borderRadius: ["50%", "40%", "60%", "30%", "50%"],
        rotate: [0, 90, 180, 270, 360],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
        times: [0, 0.25, 0.5, 0.75, 1]
      }}
    />
  )
}