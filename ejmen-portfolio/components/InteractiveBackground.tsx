'use client'

import { useEffect, useRef } from 'react'

export default function InteractiveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mousePosition = useRef({ x: 0, y: 0 })
  const particles = useRef<Array<{
    x: number
    y: number
    vx: number
    vy: number
    size: number
    opacity: number
    color: string
  }>>([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.current = { x: e.clientX, y: e.clientY }
    }

    const colors = [
      'rgba(99, 102, 241, 0.4)',   // primary
      'rgba(139, 92, 246, 0.4)',  // purple
      'rgba(217, 70, 239, 0.4)',  // pink
      'rgba(16, 185, 129, 0.4)',  // accent
    ]

    // Initialize particles
    const initParticles = () => {
      particles.current = []
      const particleCount = Math.floor((canvas.width * canvas.height) / 15000)
      
      for (let i = 0; i < particleCount; i++) {
        particles.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 2 + 1,
          opacity: Math.random() * 0.5 + 0.2,
          color: colors[Math.floor(Math.random() * colors.length)]
        })
      }
    }

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.current.forEach((particle, index) => {
        // Update particle position
        particle.x += particle.vx
        particle.y += particle.vy

        // Mouse interaction
        const dx = mousePosition.current.x - particle.x
        const dy = mousePosition.current.y - particle.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        
        if (distance < 150) {
          const force = (150 - distance) / 150
          particle.vx += (dx / distance) * force * 0.01
          particle.vy += (dy / distance) * force * 0.01
        }

        // Apply friction
        particle.vx *= 0.995
        particle.vy *= 0.995

        // Boundary collision
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.vx *= -0.8
          particle.x = Math.max(0, Math.min(canvas.width, particle.x))
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.vy *= -0.8
          particle.y = Math.max(0, Math.min(canvas.height, particle.y))
        }

        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.fill()

        // Draw connections
        particles.current.slice(index + 1).forEach(otherParticle => {
          const dx = otherParticle.x - particle.x
          const dy = otherParticle.y - particle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            const opacity = (100 - distance) / 100 * 0.2
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(otherParticle.x, otherParticle.y)
            ctx.strokeStyle = `rgba(99, 102, 241, ${opacity})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        })

        // Mouse connection
        const mouseDx = mousePosition.current.x - particle.x
        const mouseDy = mousePosition.current.y - particle.y
        const mouseDistance = Math.sqrt(mouseDx * mouseDx + mouseDy * mouseDy)

        if (mouseDistance < 120) {
          const mouseOpacity = (120 - mouseDistance) / 120 * 0.3
          ctx.beginPath()
          ctx.moveTo(particle.x, particle.y)
          ctx.lineTo(mousePosition.current.x, mousePosition.current.y)
          ctx.strokeStyle = `rgba(217, 70, 239, ${mouseOpacity})`
          ctx.lineWidth = 1
          ctx.stroke()
        }
      })
    }

    const animate = () => {
      drawParticles()
      requestAnimationFrame(animate)
    }

    resizeCanvas()
    initParticles()
    animate()

    window.addEventListener('resize', () => {
      resizeCanvas()
      initParticles()
    })
    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-30"
      style={{ mixBlendMode: 'screen' }}
    />
  )
}