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
        opacity: 0.16,
        userSelect: 'none',
      }}
    >
      {/* =========================================================================
          TOP RIGHT: HYPERSONIC STEALTH JET SCHEMATIC (DWG: AERO-HYPER-9)
          ========================================================================= */}
      <svg
        className="blueprint-svg blueprint-jet"
        viewBox="0 0 600 600"
        style={{
          position: 'absolute',
          top: '-40px',
          right: '-50px',
          width: '580px',
          height: '580px',
          stroke: 'var(--pencil-blue)',
          fill: 'none',
          strokeWidth: '1.2',
        }}
      >
        <g transform="translate(300, 300) rotate(18)">
          {/* Outer Construction Circles & Drafting Rays */}
          <circle cx="0" cy="0" r="220" strokeDasharray="3 4" strokeWidth="0.8" />
          <circle cx="0" cy="0" r="140" strokeDasharray="2 3" strokeWidth="0.6" />
          <line x1="-260" y1="0" x2="260" y2="0" strokeDasharray="4 4" strokeWidth="0.8" />
          <line x1="0" y1="-260" x2="0" y2="260" strokeDasharray="4 4" strokeWidth="0.8" />

          {/* Jet Fuselage Centerline & Cockpit */}
          <path d="M 0,-210 L 16,-110 L 22,-40 L 32,40 L 45,150 L 20,185 L 0,195 L -20,185 L -45,150 L -32,40 L -22,-40 L -16,-110 Z" strokeWidth="1.5" />
          {/* Cockpit Canopy */}
          <path d="M 0,-165 Q 12,-110 9,-60 Q 0,-40 -9,-60 Q -12,-110 0,-165 Z" fill="rgba(28, 81, 134, 0.08)" strokeWidth="1.2" />
          
          {/* Delta Wings with variable geometry slats */}
          <path d="M 18,-60 L 175,70 L 195,140 L 155,145 L 35,110" strokeWidth="1.4" />
          <path d="M -18,-60 L -175,70 L -195,140 L -155,145 L -35,110" strokeWidth="1.4" />
          {/* Wing Paneling & Flaps */}
          <line x1="45" y1="20" x2="165" y2="105" strokeDasharray="2 2" strokeWidth="0.8" />
          <line x1="-45" y1="20" x2="-165" y2="105" strokeDasharray="2 2" strokeWidth="0.8" />
          <line x1="85" y1="75" x2="155" y2="145" strokeWidth="1.0" />
          <line x1="-85" y1="75" x2="-155" y2="145" strokeWidth="1.0" />

          {/* Canards (Forward Winglets) */}
          <polygon points="12,-120 70,-80 55,-70 16,-90" strokeWidth="1.2" fill="rgba(28, 81, 134, 0.04)" />
          <polygon points="-12,-120 -70,-80 -55,-70 -16,-90" strokeWidth="1.2" fill="rgba(28, 81, 134, 0.04)" />

          {/* Twin Vectoring Exhaust Nozzles */}
          <rect x="8" y="185" width="22" height="28" strokeWidth="1.2" />
          <rect x="-30" y="185" width="22" height="28" strokeWidth="1.2" />
          <line x1="19" y1="185" x2="19" y2="213" strokeDasharray="2 2" />
          <line x1="-19" y1="185" x2="-19" y2="213" strokeDasharray="2 2" />

          {/* Dimension Lines & Engineering Callouts */}
          <g style={{ fontSize: '9px', fontFamily: 'monospace', fill: 'var(--pencil-blue)' }}>
            <line x1="-210" y1="140" x2="-210" y2="190" strokeWidth="0.7" />
            <line x1="210" y1="140" x2="210" y2="190" strokeWidth="0.7" />
            <line x1="-210" y1="165" x2="210" y2="165" strokeDasharray="2 2" strokeWidth="0.7" />
            <text x="-48" y="160" stroke="none">SPAN: 24.8m</text>

            <line x1="-195" y1="70" x2="-235" y2="50" strokeWidth="0.8" />
            <text x="-250" y="45" stroke="none" textAnchor="end">FIG 1.0A // MACH 4.8 AIRFRAME</text>
            <text x="110" y="-120" stroke="none">[CANARD-VECTORED]</text>
          </g>
        </g>
      </svg>

      {/* =========================================================================
          MIDDLE LEFT: EXOSKELETON ARMOR & MECH CORE (DWG: MECH-X10)
          ========================================================================= */}
      <svg
        className="blueprint-svg blueprint-armor"
        viewBox="0 0 540 650"
        style={{
          position: 'absolute',
          top: '38%',
          left: '-40px',
          width: '500px',
          height: '600px',
          stroke: 'var(--pencil-blue)',
          fill: 'none',
          strokeWidth: '1.2',
        }}
      >
        <g transform="translate(250, 300)">
          {/* Center Coordinate Grid */}
          <line x1="-200" y1="0" x2="200" y2="0" strokeDasharray="3 3" strokeWidth="0.7" />
          <line x1="0" y1="-260" x2="0" y2="260" strokeDasharray="3 3" strokeWidth="0.7" />

          {/* Helmet / Cranial Targeting Visor */}
          <path d="M -30,-220 Q 0,-245 30,-220 L 35,-175 L 20,-155 L -20,-155 L -35,-175 Z" strokeWidth="1.5" />
          <polygon points="-24,-195 24,-195 18,-180 -18,-180" fill="rgba(28, 81, 134, 0.12)" strokeWidth="1.2" />
          <circle cx="0" cy="-187" r="3" fill="var(--pencil-blue)" />

          {/* Neck Support & Cervical Actuators */}
          <rect x="-14" y="-155" width="28" height="15" strokeWidth="1" strokeDasharray="2 2" />

          {/* Heavy Shoulders / Pauldrons */}
          <path d="M 38,-150 L 115,-140 L 130,-90 L 85,-80 L 32,-115 Z" strokeWidth="1.4" fill="rgba(28, 81, 134, 0.05)" />
          <path d="M -38,-150 L -115,-140 L -130,-90 L -85,-80 L -32,-115 Z" strokeWidth="1.4" fill="rgba(28, 81, 134, 0.05)" />
          {/* Joint Pivot Bearings */}
          <circle cx="100" cy="-110" r="12" strokeWidth="1.2" />
          <circle cx="-100" cy="-110" r="12" strokeWidth="1.2" />
          <circle cx="100" cy="-110" r="4" fill="var(--pencil-blue)" />
          <circle cx="-100" cy="-110" r="4" fill="var(--pencil-blue)" />

          {/* Chest Pectoral Plates */}
          <polygon points="-32,-135 0,-130 32,-135 48,-60 0,-40 -48,-60" strokeWidth="1.5" />
          {/* Arc Reactor Core Assembly */}
          <circle cx="0" cy="-85" r="22" strokeWidth="1.5" />
          <circle cx="0" cy="-85" r="14" strokeDasharray="2 2" strokeWidth="1" />
          <polygon points="0,-95 9,-80 -9,-80" strokeWidth="1.2" fill="rgba(28, 81, 134, 0.15)" />

          {/* Torso & Spinal Load Framework */}
          <line x1="0" y1="-40" x2="0" y2="50" strokeWidth="2.5" />
          <path d="M -36,-35 L -25,45 L 25,45 L 36,-35" strokeWidth="1.2" />
          {/* Abdominal Hydraulic Actuators */}
          <line x1="-18" y1="-30" x2="-14" y2="40" strokeWidth="1.2" />
          <line x1="18" y1="-30" x2="14" y2="40" strokeWidth="1.2" />
          <line x1="-30" y1="5" x2="30" y2="5" strokeDasharray="2 3" strokeWidth="0.8" />
          <line x1="-28" y1="25" x2="28" y2="25" strokeDasharray="2 3" strokeWidth="0.8" />

          {/* Pelvis & Hip Ball Joint Mounts */}
          <polygon points="-40,50 40,50 25,95 -25,95" strokeWidth="1.4" />
          <circle cx="-42" cy="75" r="14" strokeWidth="1.2" />
          <circle cx="42" cy="75" r="14" strokeWidth="1.2" />

          {/* Upper Thigh Exoskeletal Struts */}
          <path d="M -52,90 L -60,180 L -30,185 L -28,95" strokeWidth="1.3" />
          <path d="M 52,90 L 60,180 L 30,185 L 28,95" strokeWidth="1.3" />

          {/* Technical Annotations */}
          <g style={{ fontSize: '9px', fontFamily: 'monospace', fill: 'var(--pencil-blue)' }}>
            <line x1="22" y1="-85" x2="80" y2="-85" strokeWidth="0.8" />
            <line x1="80" y1="-85" x2="110" y2="-65" strokeWidth="0.8" />
            <text x="115" y="-62" stroke="none">ARC-CORE // FUSION BATTERY</text>

            <line x1="-100" y1="-110" x2="-150" y2="-130" strokeWidth="0.8" />
            <text x="-155" y="-132" stroke="none" textAnchor="end">KINEMATIC SERVO [420Nm]</text>

            <text x="-60" y="225" stroke="none">SPEC: MARK-VII EXO-FRAME</text>
          </g>
        </g>
      </svg>

      {/* =========================================================================
          BOTTOM RIGHT: ORBITAL SPACESHIP & DEEP SPACE CRAFT (DWG: ORB-CRUISER)
          ========================================================================= */}
      <svg
        className="blueprint-svg blueprint-ship"
        viewBox="0 0 650 650"
        style={{
          position: 'absolute',
          bottom: '-50px',
          right: '-40px',
          width: '620px',
          height: '620px',
          stroke: 'var(--pencil-blue)',
          fill: 'none',
          strokeWidth: '1.2',
        }}
      >
        <g transform="translate(325, 325) rotate(-12)">
          {/* Isometric Orientation Grids */}
          <ellipse cx="0" cy="0" rx="240" ry="90" strokeDasharray="3 3" strokeWidth="0.7" />
          <ellipse cx="0" cy="0" rx="160" ry="60" strokeDasharray="2 2" strokeWidth="0.6" />
          <line x1="-280" y1="0" x2="280" y2="0" strokeDasharray="4 4" strokeWidth="0.8" />
          <line x1="0" y1="-280" x2="0" y2="280" strokeDasharray="4 4" strokeWidth="0.8" />

          {/* Forward Command Hull & Sensor Array */}
          <path d="M 0,-240 L 45,-160 L 50,-80 L 70,20 L 55,140 L 0,165 L -55,140 L -70,20 L -50,-80 L -45,-160 Z" strokeWidth="1.5" />
          {/* Bridge Viewing Dome */}
          <polygon points="0,-215 22,-180 -22,-180" fill="rgba(28, 81, 134, 0.15)" strokeWidth="1.1" />

          {/* Heat Radiator Wings (Foldable Solar/Thermal Arrays) */}
          <rect x="70" y="-60" width="130" height="40" strokeWidth="1.2" fill="rgba(28, 81, 134, 0.04)" />
          <rect x="-200" y="-60" width="130" height="40" strokeWidth="1.2" fill="rgba(28, 81, 134, 0.04)" />
          {/* Array Paneling */}
          <line x1="102" y1="-60" x2="102" y2="-20" strokeDasharray="2 2" />
          <line x1="135" y1="-60" x2="135" y2="-20" strokeDasharray="2 2" />
          <line x1="168" y1="-60" x2="168" y2="-20" strokeDasharray="2 2" />
          <line x1="-168" y1="-60" x2="-168" y2="-20" strokeDasharray="2 2" />
          <line x1="-135" y1="-60" x2="-135" y2="-20" strokeDasharray="2 2" />
          <line x1="-102" y1="-60" x2="-102" y2="-20" strokeDasharray="2 2" />

          {/* Outrigger Warp/Ion Nacelles */}
          <path d="M 85,30 L 150,50 L 155,180 L 125,185 L 85,120 Z" strokeWidth="1.3" />
          <path d="M -85,30 L -150,50 L -155,180 L -125,185 L -85,120 Z" strokeWidth="1.3" />
          <ellipse cx="140" cy="180" rx="15" ry="6" strokeWidth="1.2" fill="rgba(28, 81, 134, 0.2)" />
          <ellipse cx="-140" cy="180" rx="15" ry="6" strokeWidth="1.2" fill="rgba(28, 81, 134, 0.2)" />

          {/* Center Fusion Drive Thruster */}
          <ellipse cx="0" cy="165" rx="32" ry="12" strokeWidth="1.5" fill="rgba(28, 81, 134, 0.15)" />
          <line x1="0" y1="177" x2="0" y2="230" strokeDasharray="2 3" strokeWidth="1" />

          {/* Technical Dimension Marks */}
          <g style={{ fontSize: '9px', fontFamily: 'monospace', fill: 'var(--pencil-blue)' }}>
            <line x1="205" y1="-60" x2="230" y2="-60" strokeWidth="0.8" />
            <line x1="205" y1="-20" x2="230" y2="-20" strokeWidth="0.8" />
            <line x1="220" y1="-60" x2="220" y2="-20" strokeWidth="0.8" />
            <text x="235" y="-37" stroke="none">THERMAL TILES</text>

            <line x1="-155" y1="180" x2="-190" y2="210" strokeWidth="0.8" />
            <text x="-195" y="215" stroke="none" textAnchor="end">ION DRIVE [IMPULSE 8400s]</text>
            <text x="-70" y="-250" stroke="none">DWG: DEEP-SPACE ARGO-V</text>
          </g>
        </g>
      </svg>

      {/* =========================================================================
          TOP LEFT: ORBITAL TELEMETRY SATELLITE & FUSION TORUS (DWG: SAT-COMM)
          ========================================================================= */}
      <svg
        className="blueprint-svg blueprint-sat"
        viewBox="0 0 450 450"
        style={{
          position: 'absolute',
          top: '30px',
          left: '10px',
          width: '380px',
          height: '380px',
          stroke: 'var(--pencil-blue)',
          fill: 'none',
          strokeWidth: '1.1',
        }}
      >
        <g transform="translate(200, 200) rotate(-25)">
          {/* Parabolic Dish & Feed Horn */}
          <path d="M -110,-50 Q 0,40 110,-50" strokeWidth="1.8" />
          <path d="M -90,-40 Q 0,30 90,-40" strokeDasharray="2 2" strokeWidth="0.8" />
          <line x1="0" y1="10" x2="0" y2="-65" strokeWidth="1.2" />
          <circle cx="0" cy="-65" r="7" strokeWidth="1.2" fill="rgba(28, 81, 134, 0.12)" />
          <line x1="-25" y1="-30" x2="0" y2="-65" strokeWidth="0.8" />
          <line x1="25" y1="-30" x2="0" y2="-65" strokeWidth="0.8" />

          {/* Central Bus & Gyro Assembly */}
          <rect x="-24" y="10" width="48" height="60" strokeWidth="1.4" />
          <circle cx="0" cy="40" r="14" strokeDasharray="2 2" strokeWidth="0.9" />

          {/* Solar Booms */}
          <line x1="-24" y1="40" x2="-130" y2="40" strokeWidth="1.5" />
          <line x1="24" y1="40" x2="130" y2="40" strokeWidth="1.5" />
          <rect x="-170" y="25" width="40" height="30" strokeWidth="1" />
          <rect x="130" y="25" width="40" height="30" strokeWidth="1" />

          <g style={{ fontSize: '8.5px', fontFamily: 'monospace', fill: 'var(--pencil-blue)' }}>
            <text x="0" y="-85" textAnchor="middle" stroke="none">QUANTUM PHACED ARRAY</text>
            <text x="0" y="95" textAnchor="middle" stroke="none">ORBITAL SYNCH: 35,786 KM</text>
          </g>
        </g>
      </svg>
    </div>
  )
}
