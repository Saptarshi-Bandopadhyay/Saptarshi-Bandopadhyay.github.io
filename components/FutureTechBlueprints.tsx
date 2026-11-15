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
          1. TOP-RIGHT: ANDROID-V8 BIPEDAL HUMANOID ROBOT ENDOSKELETON
          ===================================================================== */}
      <div
        style={{
          position: 'absolute',
          top: '-25px',
          right: '-40px',
          width: '600px',
          maxWidth: '46vw',
          opacity: 0.23,
          filter: 'contrast(1.18) brightness(0.95)',
          transform: 'rotate(4deg)',
          border: '2px solid var(--pencil-blue)',
          boxShadow: '0 8px 32px rgba(24, 82, 140, 0.16)',
          background: 'rgba(24, 82, 140, 0.05)',
          overflow: 'hidden',
          borderRadius: '2px',
        }}
      >
        <div
          style={{
            background: 'var(--pencil-blue)',
            color: '#FFFFFF',
            fontFamily: 'var(--font-mono)',
            fontSize: '9px',
            fontWeight: 700,
            padding: '2px 8px',
            letterSpacing: '0.08em',
          }}
        >
          DWG: ANDROID-V8 // BIPEDAL ROBOTICS ENDOSKELETON
        </div>
        <img
          src="/blueprints/blueprint-humanoid.jpg"
          alt="Humanoid Robotics Blueprint"
          style={{
            width: '100%',
            height: 'auto',
            display: 'block',
            mixBlendMode: 'multiply',
          }}
        />
      </div>

      {/* =====================================================================
          2. BOTTOM-LEFT: MK-VIII HEAVY POWERED EXOSUIT & COMBAT MECH ARMOR
          (Fixed to bottom-left to prevent any overlap with top-left schematic)
          ===================================================================== */}
      <div
        style={{
          position: 'absolute',
          bottom: '-35px',
          left: '-40px',
          width: '560px',
          maxWidth: '44vw',
          opacity: 0.21,
          filter: 'contrast(1.18) brightness(0.95)',
          transform: 'rotate(-4deg)',
          border: '2px solid var(--pencil-blue)',
          boxShadow: '0 8px 32px rgba(24, 82, 140, 0.16)',
          background: 'rgba(24, 82, 140, 0.05)',
          overflow: 'hidden',
          borderRadius: '2px',
        }}
      >
        <div
          style={{
            background: 'var(--pencil-blue)',
            color: '#FFFFFF',
            fontFamily: 'var(--font-mono)',
            fontSize: '9px',
            fontWeight: 700,
            padding: '2px 8px',
            letterSpacing: '0.08em',
          }}
        >
          DWG: MK-VIII EXOSUIT // HEAVY COMBAT ARMOR
        </div>
        <img
          src="/blueprints/blueprint-exosuit.jpg"
          alt="Exosuit Mech Blueprint"
          style={{
            width: '100%',
            height: 'auto',
            display: 'block',
            mixBlendMode: 'multiply',
          }}
        />
      </div>

      {/* =====================================================================
          3. BOTTOM-RIGHT: ALCUBIERRE RELATIVISTIC WARP STARSHIP
          ===================================================================== */}
      <div
        style={{
          position: 'absolute',
          bottom: '-35px',
          right: '-40px',
          width: '620px',
          maxWidth: '48vw',
          opacity: 0.23,
          filter: 'contrast(1.18) brightness(0.95)',
          transform: 'rotate(-4deg)',
          border: '2px solid var(--pencil-blue)',
          boxShadow: '0 8px 32px rgba(24, 82, 140, 0.16)',
          background: 'rgba(24, 82, 140, 0.05)',
          overflow: 'hidden',
          borderRadius: '2px',
        }}
      >
        <div
          style={{
            background: 'var(--pencil-blue)',
            color: '#FFFFFF',
            fontFamily: 'var(--font-mono)',
            fontSize: '9px',
            fontWeight: 700,
            padding: '2px 8px',
            letterSpacing: '0.08em',
          }}
        >
          DWG: AERO-03 // ALCUBIERRE RELATIVISTIC WARP STARSHIP
        </div>
        <img
          src="/blueprints/blueprint-starship.jpg"
          alt="Alcubierre Warp Starship Blueprint"
          style={{
            width: '100%',
            height: 'auto',
            display: 'block',
            mixBlendMode: 'multiply',
          }}
        />
      </div>

      {/* =====================================================================
          4. TOP-LEFT: DEXTEROUS BIONIC HAND & SENSORY MANIPULATOR
          (Anchored strictly to top-left corner, isolated from bottom-left)
          ===================================================================== */}
      <div
        style={{
          position: 'absolute',
          top: '-25px',
          left: '-35px',
          width: '480px',
          maxWidth: '40vw',
          opacity: 0.18,
          filter: 'contrast(1.15) brightness(0.95)',
          transform: 'rotate(3deg)',
          border: '1.5px solid var(--pencil-blue)',
          boxShadow: '0 6px 24px rgba(24, 82, 140, 0.12)',
          background: 'rgba(24, 82, 140, 0.04)',
          overflow: 'hidden',
          borderRadius: '2px',
        }}
      >
        <div
          style={{
            background: 'var(--pencil-blue)',
            color: '#FFFFFF',
            fontFamily: 'var(--font-mono)',
            fontSize: '9px',
            fontWeight: 700,
            padding: '2px 8px',
            letterSpacing: '0.08em',
          }}
        >
          DWG: BIONIC-04 // DEXTEROUS NEURAL MANIPULATOR
        </div>
        <img
          src="/blueprints/blueprint-bionic-hand.jpg"
          alt="Bionic Hand Manipulator Blueprint"
          style={{
            width: '100%',
            height: 'auto',
            display: 'block',
            mixBlendMode: 'multiply',
          }}
        />
      </div>
    </div>
  )
}
