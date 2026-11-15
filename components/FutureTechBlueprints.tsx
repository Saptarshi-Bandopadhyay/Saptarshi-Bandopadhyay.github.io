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
          1. TOP-RIGHT: ANDROID-V8 BIPEDAL HUMANOID ROBOT
             Casually angled across the upper-right corner of the drafting board
          ===================================================================== */}
      <div
        style={{
          position: 'absolute',
          top: '-35px',
          right: '-45px',
          width: '560px',
          maxWidth: '38vw',
          opacity: 0.23,
          filter: 'contrast(1.18) brightness(0.95)',
          transform: 'rotate(6.5deg)',
          border: '1.5px solid var(--pencil-blue)',
          boxShadow: '6px 12px 36px rgba(18, 54, 94, 0.22), 0 2px 6px rgba(0, 0, 0, 0.08)',
          background: 'rgba(24, 82, 140, 0.06)',
          borderRadius: '2px',
        }}
      >
        {/* Drafting Tape Strip (Top Edge) */}
        <div
          style={{
            position: 'absolute',
            top: '-9px',
            right: '48px',
            width: '54px',
            height: '18px',
            background: 'rgba(235, 224, 200, 0.82)',
            border: '1px solid rgba(180, 165, 130, 0.5)',
            transform: 'rotate(-6deg)',
            boxShadow: '0 1px 3px rgba(0,0,0,0.12)',
            zIndex: 2,
          }}
        />
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
          2. TOP-LEFT: DEXTEROUS BIONIC HAND & SENSORY MANIPULATOR
             Slid naturally to the top-left margin; safely isolated above
          ===================================================================== */}
      <div
        style={{
          position: 'absolute',
          top: '32px',
          left: '-55px',
          width: '450px',
          maxWidth: '32vw',
          opacity: 0.18,
          filter: 'contrast(1.15) brightness(0.95)',
          transform: 'rotate(-7deg)',
          border: '1.5px solid var(--pencil-blue)',
          boxShadow: '5px 10px 30px rgba(18, 54, 94, 0.18), 0 2px 6px rgba(0, 0, 0, 0.06)',
          background: 'rgba(24, 82, 140, 0.05)',
          borderRadius: '2px',
        }}
      >
        {/* Drafting Tape Strip (Corner) */}
        <div
          style={{
            position: 'absolute',
            top: '-8px',
            left: '36px',
            width: '48px',
            height: '17px',
            background: 'rgba(235, 224, 200, 0.82)',
            border: '1px solid rgba(180, 165, 130, 0.5)',
            transform: 'rotate(10deg)',
            boxShadow: '0 1px 3px rgba(0,0,0,0.12)',
            zIndex: 2,
          }}
        />
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

      {/* =====================================================================
          3. BOTTOM-LEFT: MK-VIII HEAVY POWERED EXOSUIT & COMBAT MECH ARMOR
             Anchored to the lower-left table edge; huge clearance from top-left
          ===================================================================== */}
      <div
        style={{
          position: 'absolute',
          bottom: '-45px',
          left: '-35px',
          width: '530px',
          maxWidth: '36vw',
          opacity: 0.22,
          filter: 'contrast(1.18) brightness(0.95)',
          transform: 'rotate(-4.5deg)',
          border: '1.5px solid var(--pencil-blue)',
          boxShadow: '6px 12px 34px rgba(18, 54, 94, 0.20), 0 2px 6px rgba(0, 0, 0, 0.08)',
          background: 'rgba(24, 82, 140, 0.06)',
          borderRadius: '2px',
        }}
      >
        {/* Drafting Tape Strip (Bottom Corner) */}
        <div
          style={{
            position: 'absolute',
            top: '-9px',
            right: '42px',
            width: '52px',
            height: '18px',
            background: 'rgba(235, 224, 200, 0.82)',
            border: '1px solid rgba(180, 165, 130, 0.5)',
            transform: 'rotate(-5deg)',
            boxShadow: '0 1px 3px rgba(0,0,0,0.12)',
            zIndex: 2,
          }}
        />
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
          4. BOTTOM-RIGHT: ALCUBIERRE RELATIVISTIC WARP STARSHIP
             Offset inward slightly for an authentic, asymmetrical drafting feel
          ===================================================================== */}
      <div
        style={{
          position: 'absolute',
          bottom: '-50px',
          right: '15px',
          width: '560px',
          maxWidth: '38vw',
          opacity: 0.22,
          filter: 'contrast(1.18) brightness(0.95)',
          transform: 'rotate(2.5deg)',
          border: '1.5px solid var(--pencil-blue)',
          boxShadow: '6px 12px 36px rgba(18, 54, 94, 0.20), 0 2px 6px rgba(0, 0, 0, 0.08)',
          background: 'rgba(24, 82, 140, 0.06)',
          borderRadius: '2px',
        }}
      >
        {/* Drafting Tape Strip (Top Edge) */}
        <div
          style={{
            position: 'absolute',
            top: '-8px',
            left: '46px',
            width: '52px',
            height: '18px',
            background: 'rgba(235, 224, 200, 0.82)',
            border: '1px solid rgba(180, 165, 130, 0.5)',
            transform: 'rotate(6deg)',
            boxShadow: '0 1px 3px rgba(0,0,0,0.12)',
            zIndex: 2,
          }}
        />
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
    </div>
  )
}
