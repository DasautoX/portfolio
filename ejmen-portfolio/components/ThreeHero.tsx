'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Stars, Sphere, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'

function Particles({ count = 3000 }) {
  const mesh = useRef<THREE.Points>(null)
  const light = useRef<THREE.PointLight>(null)

  const particles = useMemo(() => {
    const temp = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      temp[i3] = (Math.random() - 0.5) * 20
      temp[i3 + 1] = (Math.random() - 0.5) * 20
      temp[i3 + 2] = (Math.random() - 0.5) * 20
    }
    return temp
  }, [count])

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x = state.clock.elapsedTime * 0.05
      mesh.current.rotation.y = state.clock.elapsedTime * 0.08
    }
    if (light.current) {
      light.current.position.x = Math.sin(state.clock.elapsedTime * 0.5) * 8
      light.current.position.z = Math.cos(state.clock.elapsedTime * 0.5) * 8
    }
  })

  return (
    <>
      <pointLight ref={light} distance={50} intensity={2} color="#4facfe" />
      <points ref={mesh}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particles.length / 3}
            array={particles}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial size={0.02} color="#667eea" sizeAttenuation transparent opacity={0.6} />
      </points>
    </>
  )
}

function FloatingGeometry() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3
    }
  })

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={meshRef} args={[1.5, 100, 100]} position={[3, 0, -5]}>
        <MeshDistortMaterial
          color="#667eea"
          attach="material"
          distort={0.5}
          speed={2}
          transparent
          opacity={0.1}
        />
      </Sphere>
    </Float>
  )
}

export default function ThreeHero() {
  return (
    <div className="absolute inset-0 -z-10 opacity-40">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <fog attach="fog" args={['#f8fafc', 8, 25]} />
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <Stars radius={300} depth={60} count={3000} factor={7} saturation={0} fade />
        <Particles />
        <FloatingGeometry />
      </Canvas>
    </div>
  )
}