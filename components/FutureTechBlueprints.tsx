'use client'

import React, { useState } from 'react'
import { sound } from '@/lib/sound'

const BLUEPRINT_GALLERY = [
  {
    id: 'BP-01',
    title: 'HYPERSONIC STEALTH FIGHTER JET // CAD SCHEMATIC',
    src: '/blueprints/blueprint-jet.jpg',
    desc: 'Orthographic projections (dorsal plan, lateral turbine cutaway, anterior elevation) with dimension callouts, AESA radar array, and thrust vectoring nozzles.',
    spec: 'WINGSPAN: 22.4m // MACH 4.8 CAPABLE // RCS <0.0001 m²',
  },
  {
    id: 'BP-02',
    title: 'DEEP-SPACE ORBITAL CRUISER // U.S.S. AEGIS',
    src: '/blueprints/blueprint-spaceship.jpg',
    desc: 'Full longitudinal cross-section depicting magnetic fusion torus, rotating centrifuge habitat ring, ion thruster manifolds, and deployable heat radiators.',
    spec: 'LENGTH: 420m // TORUS FLUX: 1.2 GW // SPECIFIC IMPULSE: 9200s',
  },
  {
    id: 'BP-03',
    title: 'MK-VII ADVANCED COMBAT EXOSKELETON // CHASSIS SPEC',
    src: '/blueprints/blueprint-mech.jpg',
    desc: 'Front elevation, lateral cross-section with spinal load-bearing hydraulic pistons, exploded HUD visor assembly, and rotary joint kinematic bearings.',
    spec: 'PAYLOAD: 850kg // SERVO LATENCY: <1.8ms // TOROID CORE',
  },
]

export function FutureTechBlueprints() {
  const [selectedBlueprint, setSelectedBlueprint] = useState<typeof BLUEPRINT_GALLERY[0] | null>(null)

  const handleOpen = (bp: typeof BLUEPRINT_GALLERY[0]) => {
    sound.playMechanicalClick()
    setSelectedBlueprint(bp)
  }

  const handleClose = () => {
    sound.playMechanicalClick()
    setSelectedBlueprint(null)
  }

  return (
    <>
      {/* =====================================================================
          BACKGROUND BLUEPRINT IMAGE WATERMARKS
          ===================================================================== */}
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
        {/* Top-Right: Hypersonic Jet Blueprint */}
        <div
          style={{
            position: 'absolute',
            top: '-20px',
            right: '-40px',
            width: '640px',
            maxWidth: '50vw',
            opacity: 0.22,
            filter: 'contrast(1.15) brightness(0.95)',
            transform: 'rotate(6deg)',
            border: '2px solid var(--pencil-blue)',
            boxShadow: '0 8px 32px rgba(24, 82, 140, 0.15)',
            background: 'rgba(24, 82, 140, 0.05)',
            overflow: 'hidden',
          }}
        >
          <img
            src="/blueprints/blueprint-jet.jpg"
            alt="Hypersonic Jet Schematic"
            style={{ width: '100%', height: 'auto', display: 'block', mixBlendMode: 'multiply' }}
          />
        </div>

        {/* Middle-Left: Exoskeleton Mech Blueprint */}
        <div
          style={{
            position: 'absolute',
            top: '38%',
            left: '-60px',
            width: '600px',
            maxWidth: '45vw',
            opacity: 0.20,
            filter: 'contrast(1.15) brightness(0.95)',
            transform: 'rotate(-4deg)',
            border: '2px solid var(--pencil-blue)',
            boxShadow: '0 8px 32px rgba(24, 82, 140, 0.15)',
            background: 'rgba(24, 82, 140, 0.05)',
            overflow: 'hidden',
          }}
        >
          <img
            src="/blueprints/blueprint-mech.jpg"
            alt="Exoskeleton Mech Schematic"
            style={{ width: '100%', height: 'auto', display: 'block', mixBlendMode: 'multiply' }}
          />
        </div>

        {/* Bottom-Right: Deep-Space Cruiser Blueprint */}
        <div
          style={{
            position: 'absolute',
            bottom: '-40px',
            right: '-30px',
            width: '680px',
            maxWidth: '52vw',
            opacity: 0.22,
            filter: 'contrast(1.15) brightness(0.95)',
            transform: 'rotate(-8deg)',
            border: '2px solid var(--pencil-blue)',
            boxShadow: '0 8px 32px rgba(24, 82, 140, 0.15)',
            background: 'rgba(24, 82, 140, 0.05)',
            overflow: 'hidden',
          }}
        >
          <img
            src="/blueprints/blueprint-spaceship.jpg"
            alt="Orbital Spaceship Schematic"
            style={{ width: '100%', height: 'auto', display: 'block', mixBlendMode: 'multiply' }}
          />
        </div>
      </div>

      {/* =====================================================================
          FLOATING CAD BLUEPRINT QUICK-VIEW WIDGET
          ===================================================================== */}
      <div
        style={{
          position: 'fixed',
          bottom: '38px',
          right: '20px',
          zIndex: 35,
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            background: 'var(--paper-sheet)',
            border: '1.5px solid var(--pencil-blue)',
            padding: '6px 12px',
            boxShadow: '3px 3px 0 rgba(24, 82, 140, 0.2)',
          }}
        >
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--pencil-blue)', fontWeight: 700 }}>
            📐 CAD BLUEPRINTS:
          </span>
          {BLUEPRINT_GALLERY.map((bp) => (
            <button
              key={bp.id}
              onClick={() => handleOpen(bp)}
              className="step-btn"
              style={{ fontSize: '10px', padding: '3px 8px' }}
              title={`Inspect ${bp.title}`}
            >
              {bp.id}
            </button>
          ))}
        </div>
      </div>

      {/* =====================================================================
          HIGH-RESOLUTION CAD BLUEPRINT MODAL VIEWER
          ===================================================================== */}
      {selectedBlueprint && (
        <div
          className="palette-overlay"
          onClick={handleClose}
          style={{ padding: '40px 20px', zIndex: 60 }}
        >
          <div
            className="palette-box"
            onClick={(e) => e.stopPropagation()}
            style={{ maxWidth: '900px', maxHeight: '90vh', display: 'flex', flexDirection: 'column' }}
          >
            {/* Modal Header */}
            <div className="blueprint-header" style={{ padding: '12px 18px' }}>
              <div>
                <span className="dwg-no">{selectedBlueprint.id} // {selectedBlueprint.title}</span>
                <span style={{ display: 'block', fontSize: '10px', color: 'var(--ink-muted)', marginTop: '2px' }}>
                  {selectedBlueprint.spec}
                </span>
              </div>
              <button
                onClick={handleClose}
                className="step-btn"
                style={{ padding: '4px 10px', fontSize: '11px' }}
              >
                ESC / CLOSE ✕
              </button>
            </div>

            {/* High-Resolution Blueprint Image */}
            <div style={{ overflow: 'auto', padding: '16px', background: '#0a1626', display: 'flex', justifyContent: 'center' }}>
              <img
                src={selectedBlueprint.src}
                alt={selectedBlueprint.title}
                style={{ maxWidth: '100%', maxHeight: '68vh', objectFit: 'contain', border: '1px solid #1E5288' }}
              />
            </div>

            {/* Modal Footer Description */}
            <div style={{ padding: '14px 18px', background: 'var(--paper-sheet)', borderTop: '1px solid var(--pencil-blue)' }}>
              <p style={{ margin: 0, fontSize: '13px', color: 'var(--ink-secondary)', fontFamily: 'var(--font-mono)' }}>
                {selectedBlueprint.desc}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
