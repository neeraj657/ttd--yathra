"use client"

import React, { useRef, useMemo } from "react"
import { useFrame } from "@react-three/fiber"
import { Float, Text, Trail, Sparkles } from "@react-three/drei"
import * as THREE from "three"

interface TempleSceneProps {
  currentStage: number
}

// 7 Sacred Hills Waypoints coordinates in 3D space
export const HILL_STATIONS = [
  { name: "Alipiri (Base)", height: "Foot of Hills", pos: [-6, -2, 4], desc: "Starting gateway of the holy ascent" },
  { name: "Galigopuram", height: "1st Major Peak", pos: [-3.5, -0.8, 2], desc: "Panoramic breeze tower on Seshadri" },
  { name: "Mokalla Mettu", height: "Steep Knee-Bending Steps", pos: [-1, 0.4, 0], desc: "Sacred prayer ascent with camphor lights" },
  { name: "Deer Park View", height: "Forest Sanctum", pos: [1.2, 1.2, -1], desc: "Lush Seshachalam forest sanctuary" },
  { name: "Srivari Padalu", height: "Lord's Holy Footprints", pos: [3, 2.0, -2.5], desc: "Sacred pinnacle of Narayanadri" },
  { name: "Ananda Nilayam (Tirumala)", height: "Golden Summit", pos: [4.5, 3.0, -4], desc: "Supreme sanctum of Kaliyuga Lord Venkateswara" }
]

export function Temple3DModel({ position }: { position: [number, number, number] }) {
  const gopuramRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (gopuramRef.current) {
      gopuramRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 1.5) * 0.08
    }
  })

  return (
    <group ref={gopuramRef} position={position}>
      {/* Base Temple Platform */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[1.6, 0.3, 1.6]} />
        <meshStandardMaterial color="#8E212E" roughness={0.4} metalness={0.2} />
      </mesh>

      {/* Tier 1 Gopuram Pyramidal Tier */}
      <mesh position={[0, 0.45, 0]}>
        <boxGeometry args={[1.3, 0.6, 1.3]} />
        <meshStandardMaterial color="#C5A93C" roughness={0.3} metalness={0.7} />
      </mesh>

      {/* Tier 2 Gopuram Pyramidal Tier */}
      <mesh position={[0, 0.95, 0]}>
        <boxGeometry args={[1.0, 0.5, 1.0]} />
        <meshStandardMaterial color="#DFAC18" roughness={0.3} metalness={0.8} />
      </mesh>

      {/* Tier 3 Gopuram Top */}
      <mesh position={[0, 1.35, 0]}>
        <boxGeometry args={[0.7, 0.4, 0.7]} />
        <meshStandardMaterial color="#F3CA52" roughness={0.2} metalness={0.9} />
      </mesh>

      {/* Golden Kalasam (Finial Pinnacle) */}
      <mesh position={[0, 1.75, 0]}>
        <coneGeometry args={[0.2, 0.5, 16]} />
        <meshStandardMaterial
          color="#FFF2A0"
          emissive="#DFAC18"
          emissiveIntensity={0.6}
          roughness={0.1}
          metalness={1.0}
        />
      </mesh>

      {/* Golden Divine Aura Glow Sphere */}
      <mesh position={[0, 1.4, 0]}>
        <sphereGeometry args={[1.2, 16, 16]} />
        <meshBasicMaterial
          color="#FFEAA7"
          transparent
          opacity={0.18}
          wireframe
        />
      </mesh>

      <pointLight color="#FFEAA7" intensity={2.5} distance={6} position={[0, 1.6, 0]} />
    </group>
  )
}

export function PilgrimagePath() {
  // Construct a smooth 3D spline curve connecting the 6 waypoints
  const curve = useMemo(() => {
    const points = HILL_STATIONS.map((s) => new THREE.Vector3(s.pos[0], s.pos[1], s.pos[2]))
    return new THREE.CatmullRomCurve3(points)
  }, [])

  const lineGeometry = useMemo(() => {
    return new THREE.TubeGeometry(curve, 100, 0.08, 8, false)
  }, [curve])

  return (
    <group>
      {/* Solid Path Tube */}
      <mesh geometry={lineGeometry}>
        <meshStandardMaterial
          color="#DFAC18"
          emissive="#7A5600"
          emissiveIntensity={0.5}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
    </group>
  )
}

export function AnimatedPilgrimBeacon() {
  const beaconRef = useRef<THREE.Mesh>(null)

  const curve = useMemo(() => {
    const points = HILL_STATIONS.map((s) => new THREE.Vector3(s.pos[0], s.pos[1], s.pos[2]))
    return new THREE.CatmullRomCurve3(points)
  }, [])

  useFrame((state) => {
    if (beaconRef.current) {
      // Loop along curve between 0 and 1
      const loopTime = 12 // seconds
      const t = (state.clock.elapsedTime % loopTime) / loopTime
      const point = curve.getPointAt(t)
      beaconRef.current.position.set(point.x, point.y + 0.15, point.z)
    }
  })

  return (
    <mesh ref={beaconRef}>
      <sphereGeometry args={[0.18, 16, 16]} />
      <meshStandardMaterial
        color="#FFF9D2"
        emissive="#FFC107"
        emissiveIntensity={1.8}
      />
      <pointLight color="#FFD54F" intensity={2} distance={3} />
    </mesh>
  )
}

export function StylizedHillsTerrain() {
  return (
    <group position={[0, -2.5, 0]}>
      {/* 7 Sacred Hills undulating mountain cones */}
      <mesh position={[-6, 0.5, 3]}>
        <coneGeometry args={[2.5, 2.5, 7]} />
        <meshStandardMaterial color="#4A1821" roughness={0.9} />
      </mesh>

      <mesh position={[-3.5, 1.2, 1.5]}>
        <coneGeometry args={[3.2, 3.2, 8]} />
        <meshStandardMaterial color="#5C1A27" roughness={0.85} />
      </mesh>

      <mesh position={[-1, 1.8, -0.5]}>
        <coneGeometry args={[3.8, 4.0, 8]} />
        <meshStandardMaterial color="#4E1520" roughness={0.85} />
      </mesh>

      <mesh position={[1.5, 2.4, -1.8]}>
        <coneGeometry args={[3.6, 4.6, 8]} />
        <meshStandardMaterial color="#6B1D2E" roughness={0.85} />
      </mesh>

      <mesh position={[4.5, 3.2, -4]}>
        <coneGeometry args={[4.2, 5.5, 9]} />
        <meshStandardMaterial color="#7A1C24" roughness={0.8} />
      </mesh>

      {/* Base Valley Plane */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
        <planeGeometry args={[30, 20]} />
        <meshStandardMaterial color="#1E1918" roughness={1} />
      </mesh>
    </group>
  )
}

export function WaypointMarkers({ currentStage }: { currentStage: number }) {
  return (
    <group>
      {HILL_STATIONS.map((station, idx) => {
        const isActive = idx <= currentStage
        return (
          <group key={station.name} position={[station.pos[0], station.pos[1], station.pos[2]]}>
            <mesh position={[0, 0.2, 0]}>
              <cylinderGeometry args={[0.15, 0.2, 0.4, 12]} />
              <meshStandardMaterial
                color={isActive ? "#FFD700" : "#A78A60"}
                emissive={isActive ? "#C5A93C" : "#000000"}
                emissiveIntensity={isActive ? 0.8 : 0}
                roughness={0.3}
                metalness={0.7}
              />
            </mesh>

            {isActive && (
              <pointLight color="#FFE082" intensity={1.2} distance={2} position={[0, 0.4, 0]} />
            )}
          </group>
        )
      })}
    </group>
  )
}

export default function TempleScene({ currentStage }: TempleSceneProps) {
  return (
    <>
      {/* Atmospheric Lighting */}
      <ambientLight intensity={0.65} color="#FFE6CC" />
      <directionalLight position={[10, 15, 8]} intensity={1.4} color="#FFF8E7" castShadow />
      <directionalLight position={[-10, 5, -8]} intensity={0.4} color="#C5A93C" />

      {/* Stylized Mountain Terrain */}
      <StylizedHillsTerrain />

      {/* Glowing Pilgrimage Ghat Path */}
      <PilgrimagePath />

      {/* Animated Moving Traveler Beacon */}
      <AnimatedPilgrimBeacon />

      {/* 6 Waypoint Stations on Hills */}
      <WaypointMarkers currentStage={currentStage} />

      {/* Sacred Temple Model at the Summit */}
      <Temple3DModel position={[4.5, 3.2, -4]} />

      {/* Floating Diya Gold Sparkles */}
      <Sparkles
        count={50}
        scale={[18, 12, 14]}
        size={3}
        speed={0.4}
        color="#FDE68A"
        opacity={0.7}
      />
    </>
  )
}
