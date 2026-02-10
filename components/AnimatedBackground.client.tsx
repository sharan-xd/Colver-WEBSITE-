'use client'

import { useRef, useMemo, useEffect, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Stars, Float, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'
import { useTheme } from '@/lib/theme'
import { lerp, clamp } from '@/lib/animations'

// ============================================
// TYPES
// ============================================

interface BlobProps {
  position: [number, number, number]
  color: string
  scale?: number
  speed?: number
  distort?: number
}

interface ParticleFieldProps {
  count?: number
  mousePosition: React.MutableRefObject<{ x: number; y: number }>
}

interface BackgroundSceneProps {
  sectionProgress: React.MutableRefObject<number>
  mousePosition: React.MutableRefObject<{ x: number; y: number }>
  currentSection: React.MutableRefObject<number>
}

interface AnimatedBackgroundProps {
  sectionProgress?: React.MutableRefObject<number>
  currentSection?: React.MutableRefObject<number>
}

// ============================================
// ORGANIC BLOB
// ============================================

function OrganicBlob({
  position,
  color,
  scale = 1,
  speed = 1,
  distort = 0.4,
}: BlobProps) {
  const meshRef = useRef<THREE.Mesh>(null)
  const { resolvedTheme } = useTheme()

  useFrame(({ clock }) => {
    if (!meshRef.current) return

    const t = clock.elapsedTime * speed
    meshRef.current.position.y = position[1] + Math.sin(t * 0.5) * 0.3
    meshRef.current.rotation.x = Math.sin(t * 0.3) * 0.1
    meshRef.current.rotation.y = Math.cos(t * 0.2) * 0.1
    
    // ❌ REMOVE THIS - MeshDistortMaterial doesn't expose uniforms this way
    // if (materialRef.current) {
    //   materialRef.current.uniforms.time.value = t
    // }
  })

  return (
    <Float speed={speed * 0.5} rotationIntensity={0.3} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <sphereGeometry args={[1, 64, 64]} />
        <MeshDistortMaterial
          // ❌ ref={materialRef} // Remove this if not needed
          color={color}
          transparent
          opacity={resolvedTheme === 'dark' ? 0.6 : 0.4}
          distort={distort}
          speed={speed} // ✅ This prop handles the animation internally
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
    </Float>
  )
}

// ============================================
// PARTICLES
// ============================================

function ParticleField({ count = 150, mousePosition }: ParticleFieldProps) {
  const pointsRef = useRef<THREE.Points>(null)
  const { resolvedTheme } = useTheme()

  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const randoms = new Float32Array(count)

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10
      randoms[i] = Math.random()
    }

    return { positions, randoms }
  }, [count])

  useFrame(({ clock }) => {
    if (!pointsRef.current) return

    const t = clock.elapsedTime
    const pos = pointsRef.current.geometry.attributes.position
      .array as Float32Array

    const mx = (mousePosition.current.x - 0.5) * 2
    const my = (mousePosition.current.y - 0.5) * 2

    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      const r = particles.randoms[i]

      pos[i3 + 1] += Math.sin(t * 0.5 + r * Math.PI * 2) * 0.002
      pos[i3] = lerp(pos[i3], particles.positions[i3] + mx * r * 0.5, 0.02)
      pos[i3 + 1] = lerp(
        pos[i3 + 1],
        particles.positions[i3 + 1] + my * r * 0.5,
        0.02
      )
    }

    pointsRef.current.geometry.attributes.position.needsUpdate = true
    pointsRef.current.rotation.y = t * 0.02
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={particles.positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={resolvedTheme === 'dark' ? 0.05 : 0.08}
        color={resolvedTheme === 'dark' ? '#ffffff' : '#000000'}
        transparent
        opacity={resolvedTheme === 'dark' ? 0.6 : 0.4}
        sizeAttenuation
      />
    </points>
  )
}

// ============================================
// SCENE
// ============================================

function Scene({
  sectionProgress,
  mousePosition,
  currentSection,
}: BackgroundSceneProps) {
  const groupRef = useRef<THREE.Group>(null)
  const { resolvedTheme } = useTheme()

  useFrame(() => {
    if (!groupRef.current) return

    const tx = (mousePosition.current.x - 0.5) * 0.5
    const ty = (mousePosition.current.y - 0.5) * 0.5

    groupRef.current.rotation.x = lerp(
      groupRef.current.rotation.x,
      ty * 0.1,
      0.02
    )
    groupRef.current.rotation.y = lerp(
      groupRef.current.rotation.y,
      tx * 0.1,
      0.02
    )
  })

  const colors =
    resolvedTheme === 'dark'
      ? ['#3b82f6', '#8b5cf6', '#ec4899']
      : ['#60a5fa', '#a78bfa', '#f472b6']

  return (
    <group ref={groupRef}>
      <Stars radius={50} depth={50} count={1000} factor={4} fade speed={0.5} />

      <OrganicBlob position={[-4, 2, -3]} color={colors[0]} scale={2} />
      <OrganicBlob position={[4, -1, -4]} color={colors[1]} scale={1.5} />
      <OrganicBlob position={[0, 3, -5]} color={colors[2]} scale={1} />

      <ParticleField mousePosition={mousePosition} />

      <ambientLight intensity={resolvedTheme === 'dark' ? 0.3 : 0.6} />
      <directionalLight position={[5, 5, 5]} intensity={0.5} />
    </group>
  )
}

// ============================================
// ROOT CLIENT COMPONENT
// ============================================

export default function AnimatedBackgroundClient({
  sectionProgress,
  currentSection,
}: AnimatedBackgroundProps) {
  const mousePosition = useRef({ x: 0.5, y: 0.5 })
  const [visible, setVisible] = useState(true)

  const progressRef = sectionProgress ?? useRef(0)
  const sectionRef = currentSection ?? useRef(0)

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mousePosition.current = {
        x: clamp(e.clientX / window.innerWidth, 0, 1),
        y: clamp(e.clientY / window.innerHeight, 0, 1),
      }
    }
    window.addEventListener('mousemove', move, { passive: true })
    return () => window.removeEventListener('mousemove', move)
  }, [])

  useEffect(() => {
    const vis = () => setVisible(!document.hidden)
    document.addEventListener('visibilitychange', vis)
    return () => document.removeEventListener('visibilitychange', vis)
  }, [])

  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 50 }}
        dpr={[1, 2]}
        frameloop={visible ? 'always' : 'never'}
        gl={{ antialias: true, alpha: true }}
      >
        <Scene
          sectionProgress={progressRef}
          mousePosition={mousePosition}
          currentSection={sectionRef}
        />
      </Canvas>
    </div>
  )
}
