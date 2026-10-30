'use client'

import React, { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'

export default function IsometricChromeCanvas() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const container = containerRef.current
    if (!container) return

    const width = container.clientWidth || 500
    const height = container.clientHeight || 540

    const scene = new THREE.Scene()

    const aspect = width / height
    const d = 5.2
    const camera = new THREE.OrthographicCamera(
      -d * aspect,
      d * aspect,
      d,
      -d,
      0.1,
      1000
    )
    camera.position.set(14, 14, 14)
    camera.lookAt(0, 0, 0)

    let renderer: THREE.WebGLRenderer
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
      })
    } catch {
      return
    }

    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.shadowMap.enabled = true
    container.appendChild(renderer.domElement)

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9)
    scene.add(ambientLight)

    const keyLight = new THREE.DirectionalLight(0xffffff, 2.4)
    keyLight.position.set(12, 22, 14)
    scene.add(keyLight)

    const limePoint = new THREE.PointLight(0xc8ff00, 2.8, 25)
    limePoint.position.set(4, -3, 4)
    scene.add(limePoint)

    const bluePoint = new THREE.PointLight(0x405cff, 2.2, 25)
    bluePoint.position.set(-6, -4, -6)
    scene.add(bluePoint)

    const orangePoint = new THREE.PointLight(0xff5a1f, 1.6, 20)
    orangePoint.position.set(-4, 8, -4)
    scene.add(orangePoint)

    // Root Group for interactive rotation
    const rootGroup = new THREE.Group()
    scene.add(rootGroup)

    // 1. Central Liquid Chrome Polyhedron Core
    const coreGeo = new THREE.OctahedronGeometry(1.6, 2)
    const chromeMaterial = new THREE.MeshStandardMaterial({
      color: 0xf0f4f8,
      metalness: 0.96,
      roughness: 0.08,
    })
    const coreMesh = new THREE.Mesh(coreGeo, chromeMaterial)
    rootGroup.add(coreMesh)

    // 2. Outer Liquid Chrome Orbit Ring
    const ringGeo = new THREE.TorusGeometry(2.7, 0.06, 16, 100)
    const ringMaterial = new THREE.MeshStandardMaterial({
      color: 0xbfc3c9,
      metalness: 0.98,
      roughness: 0.04,
    })
    const ringMesh = new THREE.Mesh(ringGeo, ringMaterial)
    ringMesh.rotation.x = Math.PI / 3
    rootGroup.add(ringMesh)

    // 3. Technical Wireframe Box
    const wireGeo = new THREE.EdgesGeometry(new THREE.BoxGeometry(3.6, 3.6, 3.6))
    const wireMat = new THREE.LineBasicMaterial({
      color: 0xc8ff00,
      transparent: true,
      opacity: 0.35,
    })
    const wireCube = new THREE.LineSegments(wireGeo, wireMat)
    rootGroup.add(wireCube)

    // 4. Floating Isometric Architecture Slabs
    const slabMat1 = new THREE.MeshStandardMaterial({
      color: 0x141414,
      metalness: 0.8,
      roughness: 0.2,
    })
    const slab1 = new THREE.Mesh(new THREE.BoxGeometry(3.4, 0.12, 3.4), slabMat1)
    slab1.position.y = -1.3
    slab1.rotation.y = Math.PI / 6
    rootGroup.add(slab1)

    const slabMat2 = new THREE.MeshStandardMaterial({
      color: 0x1c1c1c,
      metalness: 0.85,
      roughness: 0.15,
    })
    const slab2 = new THREE.Mesh(new THREE.BoxGeometry(2.2, 0.08, 2.2), slabMat2)
    slab2.position.y = 1.4
    slab2.rotation.y = -Math.PI / 4
    rootGroup.add(slab2)

    // 5. Small Satellite Data Nodes
    const nodeLime = new THREE.Mesh(
      new THREE.BoxGeometry(0.35, 0.35, 0.35),
      new THREE.MeshStandardMaterial({
        color: 0xc8ff00,
        emissive: 0xc8ff00,
        emissiveIntensity: 0.4,
      })
    )
    nodeLime.position.set(2.4, 0.8, -1.2)
    rootGroup.add(nodeLime)

    const nodeOrange = new THREE.Mesh(
      new THREE.OctahedronGeometry(0.28, 0),
      new THREE.MeshStandardMaterial({
        color: 0xff5a1f,
        emissive: 0xff5a1f,
        emissiveIntensity: 0.3,
      })
    )
    nodeOrange.position.set(-2.5, -0.6, 1.4)
    rootGroup.add(nodeOrange)

    const nodeBlue = new THREE.Mesh(
      new THREE.SphereGeometry(0.22, 16, 16),
      new THREE.MeshStandardMaterial({
        color: 0x405cff,
        emissive: 0x405cff,
        emissiveIntensity: 0.5,
      })
    )
    nodeBlue.position.set(1.6, -1.9, 1.6)
    rootGroup.add(nodeBlue)

    // 6. Ground Grid
    const grid = new THREE.GridHelper(16, 16, 0xc8ff00, 0x222222)
    grid.position.y = -2.6
    rootGroup.add(grid)

    let targetX = 0
    let targetY = 0

    const handlePointerMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      targetX = ((e.clientX - rect.left) / rect.width) * 2 - 1
      targetY = -(((e.clientY - rect.top) / rect.height) * 2 - 1)
    }

    window.addEventListener('mousemove', handlePointerMove, { passive: true })

    let animId: number
    const clock = new THREE.Clock()

    const animate = () => {
      animId = requestAnimationFrame(animate)
      const delta = clock.getDelta()
      const elapsedTime = clock.getElapsedTime()

      rootGroup.rotation.y = THREE.MathUtils.lerp(
        rootGroup.rotation.y,
        (targetX * Math.PI) / 8,
        0.05
      )
      rootGroup.rotation.x = THREE.MathUtils.lerp(
        rootGroup.rotation.x,
        (-targetY * Math.PI) / 8,
        0.05
      )

      coreMesh.rotation.y += delta * 0.4
      coreMesh.rotation.z += delta * 0.2
      ringMesh.rotation.x += delta * 0.3
      ringMesh.rotation.y -= delta * 0.2
      wireCube.rotation.y -= delta * 0.15

      slab1.position.y = Math.sin(elapsedTime * 1.5) * 0.18 - 1.3
      slab2.position.y = Math.cos(elapsedTime * 1.2) * 0.18 + 1.4
      coreMesh.position.y = Math.sin(elapsedTime * 2.0) * 0.1

      renderer.render(scene, camera)
    }

    animate()

    const handleResize = () => {
      if (!container) return
      const w = container.clientWidth
      const h = container.clientHeight
      const asp = w / h
      camera.left = -d * asp
      camera.right = d * asp
      camera.top = d
      camera.bottom = -d
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('mousemove', handlePointerMove)
      window.removeEventListener('resize', handleResize)
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }
      renderer.dispose()
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="w-full h-full min-h-[420px] lg:min-h-[560px] relative rounded-[2px] overflow-hidden bg-[#121212]"
    >
      <div className="absolute top-4 left-5 z-10 flex items-center gap-2 text-sm text-[#F4F1EA] pointer-events-none select-none">
        <span className="w-2 h-2 rounded-full bg-[#C8FF00] animate-pulse" />
        <span className="font-semibold">Interactive 3D Architecture Monolith</span>
      </div>
    </div>
  )
}
