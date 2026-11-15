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
        opacity: 0.32,
      }}
    >
      {/* =========================================================================
          TOP RIGHT: ADVANCED BIPEDAL HUMANOID ROBOT KINEMATICS (SPEC: ANDROID-H1)
          ========================================================================= */}
      <svg
        className="blueprint-svg blueprint-humanoid"
        viewBox="0 0 850 850"
        style={{
          position: 'absolute',
          top: '-30px',
          right: '-50px',
          width: '780px',
          height: '780px',
          stroke: 'var(--pencil-blue)',
          fill: 'none',
          strokeWidth: '1.1',
        }}
      >
        <g transform="translate(425, 425) rotate(12)">
          {/* Construction Coordinate Grid & Kinematic Reach Envelopes */}
          <circle cx="0" cy="0" r="360" strokeDasharray="3 4" strokeWidth="0.7" />
          <circle cx="0" cy="0" r="280" strokeDasharray="2 3" strokeWidth="0.6" />
          <circle cx="0" cy="0" r="190" strokeDasharray="4 4" strokeWidth="0.8" />
          <circle cx="0" cy="-180" r="160" strokeDasharray="2 4" strokeWidth="0.5" />
          <line x1="-390" y1="0" x2="390" y2="0" strokeDasharray="5 5" strokeWidth="0.7" />
          <line x1="0" y1="-390" x2="0" y2="390" strokeDasharray="5 5" strokeWidth="0.7" />

          {/* Cranial Sensor Head & Optical Vision Lenses */}
          <path d="M -32,-330 Q 0,-360 32,-330 L 38,-270 L 22,-245 L -22,-245 L -38,-270 Z" strokeWidth="1.6" />
          {/* Stereoscopic Camera Pod & LiDAR Aperture */}
          <circle cx="-14" cy="-295" r="7" strokeWidth="1.3" />
          <circle cx="14" cy="-295" r="7" strokeWidth="1.3" />
          <circle cx="-14" cy="-295" r="2.5" fill="var(--pencil-blue)" />
          <circle cx="14" cy="-295" r="2.5" fill="var(--pencil-blue)" />
          <rect x="-8" y="-280" width="16" height="5" strokeWidth="1" strokeDasharray="2 2" />
          {/* Neural Compute Bus (NPU) Core */}
          <rect x="-16" y="-325" width="32" height="18" strokeWidth="1.2" strokeDasharray="2 2" />
          <line x1="-10" y1="-316" x2="10" y2="-316" strokeWidth="1.5" />

          {/* 3-DoF Cervical Neck Gimbal & Strain Gauge */}
          <rect x="-14" y="-245" width="28" height="22" strokeWidth="1.3" />
          <circle cx="0" cy="-234" r="5" strokeWidth="1.2" />

          {/* Torso Exoskeletal Cage & Battery Core */}
          <polygon points="-55,-220 55,-220 72,-130 0,-100 -72,-130" strokeWidth="1.7" />
          {/* Carbon Fiber Sternum Ribs */}
          <line x1="-50" y1="-190" x2="50" y2="-190" strokeWidth="1.1" />
          <line x1="-58" y1="-160" x2="58" y2="-160" strokeWidth="1.1" />
          <line x1="-48" y1="-130" x2="48" y2="-130" strokeWidth="1.1" />
          {/* High-Density Solid-State Battery Assembly */}
          <rect x="-24" y="-185" width="48" height="65" strokeWidth="1.4" strokeDasharray="3 3" />
          <circle cx="0" cy="-152" r="12" strokeWidth="1.4" />
          <circle cx="0" cy="-152" r="4" fill="var(--pencil-blue)" />

          {/* Dual Harmonic Drive Shoulder Joint Hubs */}
          <circle cx="-95" cy="-205" r="18" strokeWidth="1.5" />
          <circle cx="95" cy="-205" r="18" strokeWidth="1.5" />
          <circle cx="-95" cy="-205" r="7" fill="var(--pencil-blue)" />
          <circle cx="95" cy="-205" r="7" fill="var(--pencil-blue)" />
          <circle cx="-95" cy="-205" r="26" strokeDasharray="3 3" strokeWidth="0.7" />
          <circle cx="95" cy="-205" r="26" strokeDasharray="3 3" strokeWidth="0.7" />

          {/* Bimanual Arms with Linear Actuators & Elbow Pivot */}
          {/* Left Arm (Viewer's Left) */}
          <line x1="-95" y1="-187" x2="-135" y2="-85" strokeWidth="2.2" />
          <line x1="-80" y1="-185" x2="-120" y2="-85" strokeWidth="1" strokeDasharray="2 2" />
          <circle cx="-135" cy="-85" r="14" strokeWidth="1.4" />
          <circle cx="-135" cy="-85" r="4" fill="var(--pencil-blue)" />
          <line x1="-135" y1="-71" x2="-155" y2="25" strokeWidth="2" />
          {/* Articulated Hand & Fingers */}
          <circle cx="-155" cy="25" r="9" strokeWidth="1.2" />
          <path d="M -155,34 L -165,65 M -150,34 L -155,70 M -145,34 L -145,68 M -160,30 L -175,50" strokeWidth="1.3" />

          {/* Right Arm (Viewer's Right) */}
          <line x1="95" y1="-187" x2="135" y2="-85" strokeWidth="2.2" />
          <line x1="80" y1="-185" x2="120" y2="-85" strokeWidth="1" strokeDasharray="2 2" />
          <circle cx="135" cy="-85" r="14" strokeWidth="1.4" />
          <circle cx="135" cy="-85" r="4" fill="var(--pencil-blue)" />
          <line x1="135" y1="-71" x2="155" y2="25" strokeWidth="2" />
          <circle cx="155" cy="25" r="9" strokeWidth="1.2" />
          <path d="M 155,34 L 165,65 M 150,34 L 155,70 M 145,34 L 145,68 M 160,30 L 175,50" strokeWidth="1.3" />

          {/* Pelvis & 2-DoF Hip Cycloidal Gearboxes */}
          <polygon points="-48,-100 48,-100 32,-35 -32,-35" strokeWidth="1.6" />
          <circle cx="-38" cy="-55" r="16" strokeWidth="1.4" />
          <circle cx="38" cy="-55" r="16" strokeWidth="1.4" />
          <circle cx="-38" cy="-55" r="6" fill="var(--pencil-blue)" />
          <circle cx="38" cy="-55" r="6" fill="var(--pencil-blue)" />

          {/* Legs & Knee Kinematic Mechanism */}
          {/* Left Leg */}
          <line x1="-38" y1="-39" x2="-55" y2="105" strokeWidth="2.5" />
          <line x1="-24" y1="-39" x2="-40" y2="105" strokeWidth="1" strokeDasharray="3 3" />
          <circle cx="-55" cy="105" r="16" strokeWidth="1.4" />
          <circle cx="-55" cy="105" r="5" fill="var(--pencil-blue)" />
          <line x1="-55" y1="121" x2="-65" y2="235" strokeWidth="2.2" />
          {/* Ankle Force-Torque Sensor & Foot Pad */}
          <circle cx="-65" cy="235" r="9" strokeWidth="1.3" />
          <path d="M -85,255 L -45,255 L -52,240 L -78,240 Z" strokeWidth="1.6" />

          {/* Right Leg */}
          <line x1="38" y1="-39" x2="55" y2="105" strokeWidth="2.5" />
          <line x1="24" y1="-39" x2="40" y2="105" strokeWidth="1" strokeDasharray="3 3" />
          <circle cx="55" cy="105" r="16" strokeWidth="1.4" />
          <circle cx="55" cy="105" r="5" fill="var(--pencil-blue)" />
          <line x1="55" y1="121" x2="65" y2="235" strokeWidth="2.2" />
          <circle cx="65" cy="235" r="9" strokeWidth="1.3" />
          <path d="M 85,255 L 45,255 L 52,240 L 78,240 Z" strokeWidth="1.6" />

          {/* Dense CS & Robotics Kinematic Annotations */}
          <g style={{ fontSize: '9px', fontFamily: 'monospace', fill: 'var(--pencil-blue)' }}>
            <line x1="-310" y1="-220" x2="-310" y2="255" strokeWidth="0.8" />
            <line x1="-300" y1="-220" x2="-320" y2="-220" strokeWidth="0.8" />
            <line x1="-300" y1="255" x2="-320" y2="255" strokeWidth="0.8" />
            <text x="-325" y="18" textAnchor="end" stroke="none">STANDING HEIGHT: 1.76m // 34-DoF ACTUATION</text>

            <line x1="95" y1="-205" x2="180" y2="-250" strokeWidth="0.8" />
            <line x1="180" y1="-250" x2="260" y2="-250" strokeWidth="0.8" />
            <text x="265" y="-246" stroke="none">CYCLOIDAL GEARBOX // TORQUE 380 Nm</text>

            <line x1="-135" y1="-85" x2="-210" y2="-120" strokeWidth="0.8" />
            <text x="-215" y="-122" textAnchor="end" stroke="none">INVERTED PENDULUM RT-LOOP: 1000 Hz</text>

            <text x="75" y="175" stroke="none">FORCE-TORQUE SENSOR [6-AXIS]</text>
            <text x="-95" y="-355" stroke="none">HUMANOID SCHEMATIC // SYS-ANDROID-H1</text>
          </g>
        </g>
      </svg>

      {/* =========================================================================
          MIDDLE LEFT: ARTICULATED CYBERNETIC HAND & NEURAL BUS INTERFACE
          ========================================================================= */}
      <svg
        className="blueprint-svg blueprint-hand"
        viewBox="0 0 750 750"
        style={{
          position: 'absolute',
          top: '36%',
          left: '-40px',
          width: '660px',
          height: '660px',
          stroke: 'var(--pencil-blue)',
          fill: 'none',
          strokeWidth: '1.1',
        }}
      >
        <g transform="translate(360, 375)">
          {/* Coordinate Circles & Tendon Vector Grids */}
          <circle cx="0" cy="0" r="260" strokeDasharray="3 3" strokeWidth="0.6" />
          <circle cx="0" cy="0" r="160" strokeDasharray="2 3" strokeWidth="0.6" />
          <line x1="-300" y1="0" x2="300" y2="0" strokeDasharray="4 4" strokeWidth="0.7" />
          <line x1="0" y1="-320" x2="0" y2="320" strokeDasharray="4 4" strokeWidth="0.7" />

          {/* Wrist Joint Hub & Tendon Spools */}
          <rect x="-45" y="110" width="90" height="90" strokeWidth="1.5" />
          <circle cx="-22" cy="155" r="14" strokeWidth="1.3" />
          <circle cx="22" cy="155" r="14" strokeWidth="1.3" />
          <circle cx="-22" cy="155" r="4" fill="var(--pencil-blue)" />
          <circle cx="22" cy="155" r="4" fill="var(--pencil-blue)" />

          {/* Palm Chassis (Metacarpal Frame) */}
          <polygon points="-65,110 65,110 55,-35 -55,-35" strokeWidth="1.7" />
          {/* Micro DC Motor Bays inside Palm */}
          {[-38, -12, 12, 38].map((x, i) => (
            <rect key={i} x={x - 8} y="-15" width="16" height="55" strokeWidth="1.1" strokeDasharray="2 2" />
          ))}

          {/* Metacarpophalangeal (MCP) Joint Knuckles */}
          {[-42, -14, 14, 42].map((x, i) => (
            <circle key={i} cx={x} cy="-35" r="10" strokeWidth="1.3" />
          ))}

          {/* Four Articulated Fingers (Phalanges & Tendon Cables) */}
          {/* Index Finger */}
          <path d="M -42,-45 L -52,-120 L -56,-180 L -58,-235" strokeWidth="1.8" />
          <circle cx="-52" cy="-120" r="6" strokeWidth="1" />
          <circle cx="-56" cy="-180" r="5" strokeWidth="1" />
          <circle cx="-58" cy="-235" r="7" strokeWidth="1.4" fill="rgba(24, 82, 140, 0.15)" />

          {/* Middle Finger (Longest) */}
          <path d="M -14,-45 L -16,-135 L -18,-205 L -18,-265" strokeWidth="1.8" />
          <circle cx="-16" cy="-135" r="6" strokeWidth="1" />
          <circle cx="-18" cy="-205" r="5" strokeWidth="1" />
          <circle cx="-18" cy="-265" r="7" strokeWidth="1.4" fill="rgba(24, 82, 140, 0.15)" />

          {/* Ring Finger */}
          <path d="M 14,-45 L 18,-125 L 22,-190 L 24,-245" strokeWidth="1.8" />
          <circle cx="18" cy="-125" r="6" strokeWidth="1" />
          <circle cx="22" cy="-190" r="5" strokeWidth="1" />
          <circle cx="24" cy="-245" r="7" strokeWidth="1.4" fill="rgba(24, 82, 140, 0.15)" />

          {/* Little / Pinky Finger */}
          <path d="M 42,-45 L 50,-105 L 56,-160 L 60,-205" strokeWidth="1.8" />
          <circle cx="50" cy="-105" r="6" strokeWidth="1" />
          <circle cx="56" cy="-160" r="5" strokeWidth="1" />
          <circle cx="60" cy="-205" r="7" strokeWidth="1.4" fill="rgba(24, 82, 140, 0.15)" />

          {/* Opposable Dual-Gimbal Thumb */}
          <path d="M -62,55 L -115,20 L -155,-25 L -185,-65" strokeWidth="2" />
          <circle cx="-62" cy="55" r="14" strokeWidth="1.4" />
          <circle cx="-115" cy="20" r="8" strokeWidth="1.2" />
          <circle cx="-155" cy="-25" r="7" strokeWidth="1.2" />
          <circle cx="-185" cy="-65" r="9" strokeWidth="1.4" fill="rgba(24, 82, 140, 0.15)" />

          {/* Tactile Sensor Array Annotations */}
          <g style={{ fontSize: '9px', fontFamily: 'monospace', fill: 'var(--pencil-blue)' }}>
            <line x1="-18" y1="-265" x2="70" y2="-295" strokeWidth="0.8" />
            <text x="75" y="-292" stroke="none">32x32 PIEZO-TACTILE ARRAY // 0.02N RES</text>

            <line x1="-185" y1="-65" x2="-230" y2="-95" strokeWidth="0.8" />
            <text x="-235" y="-98" textAnchor="end" stroke="none">OPPOSABLE 4-AXIS THUMB GIMBAL</text>

            <line x1="0" y1="200" x2="0" y2="250" strokeWidth="0.8" />
            <text x="0" y="265" textAnchor="middle" stroke="none">SYNAPTIC NEURAL INTERFACE // 4096 CHANNELS</text>
            <text x="-120" y="235" stroke="none">DWG: CYBERNETIC-MANIPULATOR-V7</text>
          </g>
        </g>
      </svg>

      {/* =========================================================================
          BOTTOM RIGHT: INTERSTELLAR ALCUBIERRE WARP DRIVE & DYSON ENERGY MANIFOLD
          ========================================================================= */}
      <svg
        className="blueprint-svg blueprint-warp"
        viewBox="0 0 850 850"
        style={{
          position: 'absolute',
          bottom: '-40px',
          right: '-40px',
          width: '780px',
          height: '780px',
          stroke: 'var(--pencil-blue)',
          fill: 'none',
          strokeWidth: '1.1',
        }}
      >
        <g transform="translate(425, 425) rotate(-14)">
          {/* Spacetime Distortion Field Contours */}
          <ellipse cx="0" cy="0" rx="350" ry="140" strokeDasharray="4 4" strokeWidth="0.8" />
          <ellipse cx="0" cy="0" rx="270" ry="105" strokeDasharray="3 3" strokeWidth="0.7" />
          <ellipse cx="0" cy="0" rx="180" ry="70" strokeDasharray="2 2" strokeWidth="0.6" />
          <ellipse cx="0" cy="0" rx="90" ry="35" strokeWidth="1.2" />

          {/* Central Habitation & Command Sphere */}
          <circle cx="0" cy="0" r="42" strokeWidth="1.8" />
          <circle cx="0" cy="0" r="30" strokeDasharray="2 2" strokeWidth="1" />
          <circle cx="0" cy="0" r="10" fill="var(--pencil-blue)" />

          {/* Forward Spacetime Contraction Deflector Nozzle */}
          <path d="M -40,-40 L -90,-160 L 0,-280 L 90,-160 L 40,-40" strokeWidth="1.5" />
          <ellipse cx="0" cy="-280" rx="45" ry="16" strokeWidth="1.4" fill="rgba(24, 82, 140, 0.12)" />

          {/* Aft Spacetime Expansion Field Emitter */}
          <path d="M -40,40 L -120,180 L 0,310 L 120,180 L 40,40" strokeWidth="1.5" />
          <ellipse cx="0" cy="310" rx="75" ry="24" strokeWidth="1.6" fill="rgba(24, 82, 140, 0.15)" />
          <ellipse cx="0" cy="310" rx="50" ry="15" strokeDasharray="2 3" strokeWidth="1" />

          {/* Toroidal Exotic Matter Ring (Negative Energy Generator) */}
          <path d="M -320,0 C -320,-80 -180,-80 -180,0 C -180,80 -320,80 -320,0 Z" strokeWidth="1.5" fill="rgba(24, 82, 140, 0.05)" />
          <path d="M 320,0 C 320,-80 180,-80 180,0 C 180,80 320,80 320,0 Z" strokeWidth="1.5" fill="rgba(24, 82, 140, 0.05)" />
          {/* Magnetic Containment Field Ring Coils */}
          {[-280, -250, -220, 220, 250, 280].map((x) => (
            <ellipse key={x} cx={x} cy="0" rx="14" ry="45" strokeWidth="1.2" strokeDasharray="2 2" />
          ))}

          {/* Dyson Swarm Solar Field Collector Arrays */}
          <line x1="-180" y1="-70" x2="-40" y2="-35" strokeWidth="1.3" />
          <line x1="180" y1="-70" x2="40" y2="-35" strokeWidth="1.3" />
          <line x1="-180" y1="70" x2="-40" y2="35" strokeWidth="1.3" />
          <line x1="180" y1="70" x2="40" y2="35" strokeWidth="1.3" />

          {/* Relativistic Spacetime & Energy Annotations */}
          <g style={{ fontSize: '9px', fontFamily: 'monospace', fill: 'var(--pencil-blue)' }}>
            <line x1="0" y1="-280" x2="90" y2="-330" strokeWidth="0.8" />
            <text x="95" y="-327" stroke="none">SPACETIME CONTRACTION // v &gt; c METRIC</text>

            <line x1="280" y1="0" x2="340" y2="-40" strokeWidth="0.8" />
            <text x="345" y="-38" stroke="none">EXOTIC TOROID // T_μν NEGATIVE MASS DENSITY</text>

            <line x1="0" y1="310" x2="110" y2="360" strokeWidth="0.8" />
            <text x="115" y="362" stroke="none">EXPANSION MANIFOLD // CASIMIR FLUX 4.2 × 10¹⁸ J</text>
            <text x="-150" y="-310" stroke="none">ALCUBIERRE WARP DRIVE // SYS-RELATIVISTIC-IX</text>
          </g>
        </g>
      </svg>
    </div>
  )
}
