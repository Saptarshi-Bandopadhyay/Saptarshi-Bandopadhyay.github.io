'use client'

import React from 'react'

export function FutureTechBlueprints() {
  return (
    <div
      className="future-blueprints-bg"
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden',
        userSelect: 'none',
      }}
    >
      {/* =====================================================================
          TOP RIGHT: ADVANCED HUMANOID ROBOTICS & CYBERNETIC ENDOSKELETON
          ===================================================================== */}
      <div
        style={{
          position: 'absolute',
          top: '-20px',
          right: '-30px',
          width: '640px',
          maxWidth: '52vw',
          opacity: 0.38,
          mixBlendMode: 'multiply',
          transform: 'rotate(2deg)',
          pointerEvents: 'none',
        }}
      >
        <img
          src="/blueprints/humanoid-robot-blueprint.jpg"
          alt="Humanoid Robotics Blueprint"
          style={{
            width: '100%',
            height: 'auto',
            display: 'block',
            mixBlendMode: 'multiply',
            filter: 'contrast(1.18) saturate(1.1)',
          }}
        />
      </div>

      {/* =====================================================================
          BOTTOM LEFT / MID: DEEP-SPACE ALCUBIERRE WARP & ORBITAL TECHNOLOGY
          ===================================================================== */}
      <div
        style={{
          position: 'absolute',
          bottom: '-30px',
          left: '-30px',
          width: '680px',
          maxWidth: '55vw',
          opacity: 0.36,
          mixBlendMode: 'multiply',
          transform: 'rotate(-2deg)',
          pointerEvents: 'none',
        }}
      >
        <img
          src="/blueprints/space-tech-blueprint.jpg"
          alt="Deep Space Technology Blueprint"
          style={{
            width: '100%',
            height: 'auto',
            display: 'block',
            mixBlendMode: 'multiply',
            filter: 'contrast(1.18) saturate(1.1)',
          }}
        />
      </div>
    </div>
  )
}
