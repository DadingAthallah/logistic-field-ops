"use client"

import { useEffect, useRef, useCallback } from "react"
import createGlobe from "cobe"

interface Marker {
  id: string
  location: [number, number]
  label: string
  status?: "active" | "in-transit" | "assigned" | "failed"
}

interface Arc {
  id: string
  from: [number, number]
  to: [number, number]
  label?: string
}

interface GlobeProps {
  markers?: Marker[]
  arcs?: Arc[]
  className?: string
  markerColor?: [number, number, number]
  baseColor?: [number, number, number]
  arcColor?: [number, number, number]
  glowColor?: [number, number, number]
  dark?: number
  mapBrightness?: number
  markerSize?: number
  markerElevation?: number
  arcWidth?: number
  arcHeight?: number
  speed?: number
  theta?: number
  diffuse?: number
  mapSamples?: number
}

export function Globe({
  markers = [],
  arcs = [],
  className = "",
  markerColor = [0.97, 0.45, 0.08],
  baseColor = [0.06, 0.13, 0.22],
  arcColor = [0.97, 0.45, 0.08],
  glowColor = [0.06, 0.13, 0.22],
  dark = 1,
  mapBrightness = 6,
  markerSize = 0.03,
  markerElevation = 0.01,
  arcWidth = 1,
  arcHeight = 0.2,
  speed = 0.005,
  theta = 0.2,
  diffuse = 1.2,
  mapSamples = 16000,
}: GlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const pointerInteracting = useRef<{ x: number; y: number } | null>(null)
  const lastPointer = useRef<{ x: number; y: number; t: number } | null>(null)
  const dragOffset = useRef({ phi: 0, theta: 0 })
  const velocity = useRef({ phi: 0, theta: 0 })
  const phiOffsetRef = useRef(0)
  const thetaOffsetRef = useRef(0)
  const isPausedRef = useRef(false)

  const handlePointerDown = useCallback(
    (e: React.PointerEvent) => {
      pointerInteracting.current = { x: e.clientX, y: e.clientY }
      if (canvasRef.current) canvasRef.current.style.cursor = "grabbing"
      isPausedRef.current = true
    },
    []
  )

  const handlePointerMove = useCallback((e: PointerEvent) => {
    if (pointerInteracting.current !== null) {
      const deltaX = e.clientX - pointerInteracting.current.x
      const deltaY = e.clientY - pointerInteracting.current.y
      dragOffset.current = { phi: deltaX / 300, theta: deltaY / 1000 }
      const now = Date.now()
      if (lastPointer.current) {
        const dt = Math.max(now - lastPointer.current.t, 1)
        const maxVelocity = 0.15
        velocity.current = {
          phi: Math.max(
            -maxVelocity,
            Math.min(maxVelocity, ((e.clientX - lastPointer.current.x) / dt) * 0.3)
          ),
          theta: Math.max(
            -maxVelocity,
            Math.min(maxVelocity, ((e.clientY - lastPointer.current.y) / dt) * 0.08)
          ),
        }
      }
      lastPointer.current = { x: e.clientX, y: e.clientY, t: now }
    }
  }, [])

  const handlePointerUp = useCallback(() => {
    if (pointerInteracting.current !== null) {
      phiOffsetRef.current += dragOffset.current.phi
      thetaOffsetRef.current += dragOffset.current.theta
      dragOffset.current = { phi: 0, theta: 0 }
      lastPointer.current = null
    }
    pointerInteracting.current = null
    if (canvasRef.current) canvasRef.current.style.cursor = "grab"
    isPausedRef.current = false
  }, [])

  useEffect(() => {
    window.addEventListener("pointermove", handlePointerMove, { passive: true })
    window.addEventListener("pointerup", handlePointerUp, { passive: true })
    return () => {
      window.removeEventListener("pointermove", handlePointerMove)
      window.removeEventListener("pointerup", handlePointerUp)
    }
  }, [handlePointerMove, handlePointerUp])

  useEffect(() => {
    if (!canvasRef.current) return
    const canvas = canvasRef.current
    let globe: ReturnType<typeof createGlobe> | null = null
    let animationId: number
    let phi = 0

    function init() {
      const width = canvas.offsetWidth
      if (width === 0 || globe) return

      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      globe = createGlobe(canvas, {
        devicePixelRatio: dpr,
        width: width * dpr,
        height: width * dpr,
        phi: 0,
        theta,
        dark,
        diffuse,
        mapSamples,
        mapBrightness,
        baseColor,
        markerColor,
        glowColor,
        markerElevation,
        markers: markers.map((m) => ({
          location: m.location,
          size: markerSize,
        })),
        arcs: arcs.map((a) => ({
          from: a.from,
          to: a.to,
        })),
        arcColor,
        arcWidth,
        arcHeight,
        opacity: 0.9,
      })

      function animate() {
        if (!isPausedRef.current) {
          phi += speed
          if (
            Math.abs(velocity.current.phi) > 0.0001 ||
            Math.abs(velocity.current.theta) > 0.0001
          ) {
            phiOffsetRef.current += velocity.current.phi
            thetaOffsetRef.current += velocity.current.theta
            velocity.current.phi *= 0.95
            velocity.current.theta *= 0.95
          }
          const thetaMin = -0.4,
            thetaMax = 0.4
          if (thetaOffsetRef.current < thetaMin) {
            thetaOffsetRef.current += (thetaMin - thetaOffsetRef.current) * 0.1
          } else if (thetaOffsetRef.current > thetaMax) {
            thetaOffsetRef.current += (thetaMax - thetaOffsetRef.current) * 0.1
          }
        }
        
        const currentPhi = phi + phiOffsetRef.current + dragOffset.current.phi
        const currentTheta = theta + thetaOffsetRef.current + dragOffset.current.theta

        globe!.update({
          phi: currentPhi,
          theta: currentTheta,
          markers: markers.map((m) => ({
            location: m.location,
            size: markerSize,
          })),
          arcs: arcs.map((a) => ({
            from: a.from,
            to: a.to,
          })),
        })

        // Sync labels
        markers.forEach((m) => {
          const el = document.getElementById(`cobe-label-${m.id}`)
          if (!el) return

          // Orthographic projection math
          // Note: cobe's coordinate system might need minor adjustments for lon/lat signs
          const [lat, lon] = m.location
          const rlon = (lon * Math.PI) / 180
          const rlat = (lat * Math.PI) / 180
          
          // phi is rotation around Y axis (longitude)
          // theta is rotation around X axis (latitude)
          const x = Math.cos(rlat) * Math.sin(rlon + currentPhi)
          const y = Math.sin(rlat) * Math.cos(currentTheta) - Math.cos(rlat) * Math.cos(rlon + currentPhi) * Math.sin(currentTheta)
          const z = Math.sin(rlat) * Math.sin(currentTheta) + Math.cos(rlat) * Math.cos(rlon + currentPhi) * Math.cos(currentTheta)
          
          if (z > 0.2) { // z > 0 means the marker is on the front side
            el.style.opacity = "1"
            el.style.left = `${50 + x * 50}%`
            el.style.top = `${50 - y * 50}%`
            el.style.transform = `translate(-50%, -100%) scale(1)`
            el.style.pointerEvents = "auto"
          } else {
            el.style.opacity = "0"
            el.style.left = `${50 + x * 50}%`
            el.style.top = `${50 - y * 50}%`
            el.style.transform = `translate(-50%, -100%) scale(0.5)`
            el.style.pointerEvents = "none"
          }
        })

        animationId = requestAnimationFrame(animate)
      }
      animate()
      setTimeout(() => canvas && (canvas.style.opacity = "1"))
    }

    if (canvas.offsetWidth > 0) {
      init()
    } else {
      const ro = new ResizeObserver((entries) => {
        if (entries[0]?.contentRect.width > 0) {
          ro.disconnect()
          init()
        }
      })
      ro.observe(canvas)
    }

    return () => {
      if (animationId) cancelAnimationFrame(animationId)
      if (globe) globe.destroy()
    }
  }, [markers, arcs, markerColor, baseColor, arcColor, glowColor, dark, mapBrightness, markerSize, markerElevation, arcWidth, arcHeight, speed, theta, diffuse, mapSamples])

  return (
    <div className={`relative aspect-square select-none ${className}`}>
      <canvas
        ref={canvasRef}
        onPointerDown={handlePointerDown}
        style={{
          width: "100%",
          height: "100%",
          cursor: "grab",
          opacity: 0,
          transition: "opacity 1.2s ease",
          borderRadius: "50%",
          touchAction: "none",
        }}
      />
      
      {/* Dynamic Labels */}
      <div className="absolute inset-0 pointer-events-none">
        {markers.map((m) => (
          <div
            key={m.id}
            id={`cobe-label-${m.id}`}
            className="absolute transition-all duration-300 ease-out"
            style={{
              padding: '6px 12px',
              borderRadius: '9999px',
              fontSize: '11px',
              fontFamily: 'monospace',
              fontWeight: 'bold',
              whiteSpace: 'nowrap',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              zIndex: 30,
              backdropFilter: 'blur(8px)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
              border: '1px solid rgba(255,255,255,0.15)',
              background: m.status === 'failed' ? 'rgba(239, 68, 68, 0.9)' : 
                          m.status === 'active' ? 'rgba(16, 185, 129, 0.9)' : 
                          m.status === 'in-transit' ? 'rgba(249, 115, 22, 0.9)' : 
                          'rgba(31, 41, 55, 0.8)',
              color: 'white',
              opacity: 0,
            }}
          >
            <span className={`w-2 h-2 rounded-full bg-white ${m.status !== 'failed' ? 'animate-pulse' : ''}`} />
            <div className="flex flex-col leading-none">
              <span className="uppercase tracking-widest">{m.label}</span>
              {m.status && (
                <span className="text-[7px] opacity-70 mt-0.5 uppercase tracking-tighter">
                  {m.status.replace('-', ' ')}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
