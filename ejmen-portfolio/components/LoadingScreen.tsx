'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(timer)
          setTimeout(() => setLoading(false), 500)
          return 100
        }
        return prevProgress + Math.random() * 15
      })
    }, 150)

    return () => clearInterval(timer)
  }, [])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[999] flex items-center justify-center bg-white dark:bg-slate-900"
        >
          <div className="text-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "linear"
              }}
              className="w-12 h-12 mx-auto mb-8"
            >
              <div className="w-full h-full rounded-full border-4 border-slate-200 dark:border-slate-700 border-t-blue-600 dark:border-t-blue-400" />
            </motion.div>

            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-3xl font-bold text-slate-900 dark:text-white mb-4"
            >
              EJMEN AL-UBEJDIJ
            </motion.h1>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-slate-600 dark:text-slate-400 mb-8"
            >
              Loading Portfolio...
            </motion.p>

            <div className="w-64 h-1 bg-slate-200 dark:bg-slate-700 rounded-full mx-auto overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
                className="h-full bg-blue-600 dark:bg-blue-400 rounded-full"
              />
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-slate-500 dark:text-slate-400 text-sm mt-4"
            >
              {Math.round(progress)}%
            </motion.p>
          </div>

        </motion.div>
      )}
    </AnimatePresence>
  )
}