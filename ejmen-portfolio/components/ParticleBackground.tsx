'use client'

import { useRef, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as random from 'maath/random'
import { Suspense } from 'react'

function Stars() {
  const ref = useRef<any>()
  const sphere = random.inSphere(new Float32Array(2000 * 3), { radius: 1.2 })

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10
      ref.current.rotation.y -= delta / 15
    }
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere as Float32Array} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#3b82f6"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.8}
        />
      </Points>
    </group>
  )
}

function FloatingParticles() {
  const mesh = useRef<any>()
  const count = 100
  const positions = new Float32Array(count * 3)
  const colors = new Float32Array(count * 3)

  for (let i = 0; i < count * 3; i += 3) {
    positions[i] = (Math.random() - 0.5) * 20
    positions[i + 1] = (Math.random() - 0.5) * 20
    positions[i + 2] = (Math.random() - 0.5) * 20

    colors[i] = Math.random() * 0.5 + 0.5
    colors[i + 1] = Math.random() * 0.3 + 0.7
    colors[i + 2] = 1
  }

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x = state.clock.elapsedTime * 0.1
      mesh.current.rotation.y = state.clock.elapsedTime * 0.15
    }
  })

  return (
    <Points ref={mesh} positions={positions}>
      <PointMaterial
        transparent
        vertexColors
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
  )
}

export default function ParticleBackground() {
  return (
    <div className="fixed inset-0 -z-10 opacity-40">
      <Canvas
        camera={{ position: [0, 0, 1] }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <Stars />
          <FloatingParticles />
        </Suspense>
      </Canvas>
    </div>
  )
}