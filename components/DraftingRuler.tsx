'use client'

import React, { useEffect, useState } from 'react'

export function DraftingRuler() {
  const [coords, setCoords] = useState<{ x: number; y: number }>({ x: 0, y: 0 })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate scaled millimeter equivalents based on 96 DPI (approx 3.78 px per mm)
      const mmX = Math.round((e.clientX / 3.78) * 10) / 10
      const mmY = Math.round((e.clientY / 3.78) * 10) / 10
      setCoords({ x: mmX, y: mmY })
    }
    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  if (!mounted) return null

  return (
    <>
      {/* Top Margin Coordinate Bar */}
      <div className="drafting-ruler top-ruler" aria-hidden="true">
        <div className="ruler-ticks">
          {Array.from({ length: 24 }).map((_, i) => (
            <span key={i} className="ruler-mark">
              <i></i>
              <small>{i * 10}</small>
            </span>
          ))}
        </div>
      </div>

      {/* Floating Bottom HUD: Coordinate Tracker & System Spec */}
      <div className="drafting-hud">
        <div className="hud-cell">
          <span className="hud-label">COORD</span>
          <span className="hud-val">X: {coords.x.toFixed(1)}mm / Y: {coords.y.toFixed(1)}mm</span>
        </div>
        <div className="hud-cell hide-mobile">
          <span className="hud-label">PROJECTION</span>
          <span className="hud-val">ISOMETRIC 1:1</span>
        </div>
        <div className="hud-cell hide-mobile">
          <span className="hud-label">GRID</span>
          <span className="hud-val">5mm ENGINEERING GRAPH</span>
        </div>
        <div className="hud-cell">
          <span className="hud-indicator"></span>
          <span className="hud-val">SYS: ACTIVE</span>
        </div>
      </div>
    </>
  )
}
