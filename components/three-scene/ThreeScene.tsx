"use client"

import React, { useState, useEffect, Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { Sparkles, MapPin, Compass, Eye, ChevronRight, Mountain, ShieldCheck, RefreshCw } from "lucide-react"
import TempleScene, { HILL_STATIONS } from "./TempleScene"
import { Button } from "@/components/ui/button"

function SceneFallback() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#2D0D14] via-[#1B0B0E] to-[#120507] p-8 text-center text-white">
      <Mountain className="w-12 h-12 text-gold-400 mb-3 animate-pulse" />
      <h3 className="font-serif text-2xl font-bold text-gold-300">
        Ascent to Tirumala — Sacred Sapthagiri Route
      </h3>
      <p className="text-xs text-sand-300 max-w-md mt-2 leading-relaxed">
        3D View is preparing or running on 2D mode. Experience the 7 hills from Alipiri base to the golden Ananda Nilayam temple summit.
      </p>
    </div>
  )
}

export default function ThreeScene() {
  const [activeStage, setActiveStage] = useState(5)
  const [hasWebGL, setHasWebGL] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    try {
      const canvas = document.createElement("canvas")
      const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl")
      if (!gl) {
        setHasWebGL(false)
      }
    } catch {
      setHasWebGL(false)
    }
  }, [])

  const currentStationInfo = HILL_STATIONS[activeStage] || HILL_STATIONS[5]

  return (
    <section id="3d-journey" className="py-20 lg:py-28 bg-[#171312] text-white relative overflow-hidden">
      {/* Decorative Gold Top & Bottom Glows */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold-500/60 to-transparent" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-maroon-700/20 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Headline */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-950/80 border border-gold-600/50 text-gold-400 text-xs font-semibold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span>Interactive 3D Pilgrimage Route</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Journey to <span className="text-gold-400 italic font-normal">Tirumala</span>
          </h2>

          <p className="text-sm sm:text-base text-sand-300/80 leading-relaxed">
            Ascend the sacred 7 hills (Sapthagiri) in 3D. Explore each sacred altitude marker along the winding ghat road to the golden gopuram at the summit.
          </p>
        </div>

        {/* 3D Canvas & Interactive Explorer Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center rounded-3xl bg-[#231A1C]/90 border border-gold-900/60 p-4 sm:p-8 shadow-2xl backdrop-blur-md">
          {/* 3D Canvas Viewer (Left 8 Cols) */}
          <div className="lg:col-span-8 relative h-[380px] sm:h-[480px] w-full rounded-2xl overflow-hidden bg-gradient-to-b from-[#1E0E12] to-[#12080A] border border-maroon-900/50">
            {mounted && hasWebGL ? (
              <Suspense fallback={<SceneFallback />}>
                <Canvas
                  camera={{ position: [0, 4, 11], fov: 45 }}
                  className="w-full h-full cursor-grab active:cursor-grabbing"
                >
                  <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    maxPolarAngle={Math.PI / 2 - 0.05}
                    minPolarAngle={Math.PI / 4}
                    maxAzimuthAngle={Math.PI / 3}
                    minAzimuthAngle={-Math.PI / 3}
                    rotateSpeed={0.5}
                    dampingFactor={0.05}
                  />
                  <TempleScene currentStage={activeStage} />
                </Canvas>
              </Suspense>
            ) : (
              <SceneFallback />
            )}

            {/* Canvas Overlay Controls Tip */}
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between pointer-events-none text-[11px] text-gold-300/80 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-xl border border-gold-900/40">
              <span className="flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-gold-400" />
                Drag with mouse / touch to rotate 3D view
              </span>
              <span className="hidden sm:inline text-sand-400">
                Live Interactive Render
              </span>
            </div>
          </div>

          {/* Right Waypoint Selector & Elevation Info (Right 4 Cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between h-full space-y-6">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-sand-800/80">
                <h3 className="font-serif text-lg font-bold text-white flex items-center gap-2">
                  <Mountain className="w-4 h-4 text-gold-400" />
                  <span>Sacred Hill Stations</span>
                </h3>
                <span className="text-[11px] text-gold-400 font-semibold px-2 py-0.5 rounded bg-gold-950 border border-gold-800">
                  Sapthagiri
                </span>
              </div>

              {/* Waypoint Clickable Buttons */}
              <div className="space-y-2 mt-4">
                {HILL_STATIONS.map((station, idx) => {
                  const isSelected = activeStage === idx
                  return (
                    <button
                      key={station.name}
                      onClick={() => setActiveStage(idx)}
                      className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs transition-all flex items-center justify-between border ${
                        isSelected
                          ? "bg-gradient-to-r from-maroon-800 to-maroon-900 border-gold-500/80 text-white shadow-md"
                          : "bg-black/30 border-sand-900/60 text-sand-300 hover:bg-black/50 hover:text-white"
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span
                          className={`h-5 w-5 rounded-full flex items-center justify-center font-bold text-[10px] ${
                            isSelected
                              ? "bg-gold-500 text-ink"
                              : "bg-sand-800 text-sand-300"
                          }`}
                        >
                          {idx + 1}
                        </span>
                        <span className="font-medium truncate">{station.name}</span>
                      </div>
                      <span className="text-[10px] text-gold-400/90 font-mono">
                        {station.height}
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Active Waypoint Detail Box */}
            <div className="p-4 rounded-2xl bg-gradient-to-br from-gold-950/70 to-maroon-950/70 border border-gold-800/50">
              <span className="text-[10px] font-bold uppercase tracking-widest text-gold-400 block mb-1">
                Altitude Highlight #{activeStage + 1}
              </span>
              <h4 className="font-serif text-base font-bold text-white mb-1">
                {currentStationInfo.name}
              </h4>
              <p className="text-xs text-sand-300/90 leading-relaxed">
                {currentStationInfo.desc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
