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
        opacity: 0.18,
        userSelect: 'none',
      }}
    >
      {/* =========================================================================
          TOP RIGHT: HEAVILY DETAILED HYPERSONIC STEALTH JET & AVIONICS
          ========================================================================= */}
      <svg
        className="blueprint-svg blueprint-jet"
        viewBox="0 0 800 800"
        style={{
          position: 'absolute',
          top: '-60px',
          right: '-70px',
          width: '740px',
          height: '740px',
          stroke: 'var(--pencil-blue)',
          fill: 'none',
          strokeWidth: '1.1',
        }}
      >
        <g transform="translate(400, 400) rotate(16)">
          {/* Coordinate Axes & Dense Radial Radar Grid */}
          <circle cx="0" cy="0" r="340" strokeDasharray="3 4" strokeWidth="0.7" />
          <circle cx="0" cy="0" r="280" strokeDasharray="2 3" strokeWidth="0.6" />
          <circle cx="0" cy="0" r="200" strokeDasharray="4 4" strokeWidth="0.7" />
          <circle cx="0" cy="0" r="110" strokeDasharray="2 2" strokeWidth="0.5" />
          <circle cx="0" cy="0" r="45" strokeWidth="0.8" />
          <line x1="-370" y1="0" x2="370" y2="0" strokeDasharray="5 5" strokeWidth="0.8" />
          <line x1="0" y1="-370" x2="0" y2="370" strokeDasharray="5 5" strokeWidth="0.8" />
          <line x1="-260" y1="-260" x2="260" y2="260" strokeDasharray="2 4" strokeWidth="0.5" />
          <line x1="-260" y1="260" x2="260" y2="-260" strokeDasharray="2 4" strokeWidth="0.5" />

          {/* Fuselage Outline & Diamond Nose Cone */}
          <path d="M 0,-330 L 14,-260 L 26,-180 L 34,-90 L 46,30 L 60,180 L 28,245 L 0,260 L -28,245 L -60,180 L -46,30 L -34,-90 L -26,-180 L -14,-260 Z" strokeWidth="1.6" />
          {/* Internal Structural Bulkheads */}
          <line x1="-20" y1="-220" x2="20" y2="-220" strokeWidth="0.9" />
          <line x1="-26" y1="-160" x2="26" y2="-160" strokeWidth="0.9" />
          <line x1="-32" y1="-100" x2="32" y2="-100" strokeWidth="0.9" />
          <line x1="-38" y1="-40" x2="38" y2="-40" strokeWidth="0.9" />
          <line x1="-46" y1="40" x2="46" y2="40" strokeWidth="0.9" />
          <line x1="-54" y1="120" x2="54" y2="120" strokeWidth="0.9" />

          {/* Cockpit & AESA Radar Array in Radome */}
          <path d="M 0,-320 L 7,-270 L -7,-270 Z" fill="rgba(24, 82, 140, 0.15)" strokeWidth="0.8" />
          <path d="M 0,-250 Q 14,-190 12,-110 Q 0,-85 -12,-110 Q -14,-190 0,-250 Z" fill="rgba(24, 82, 140, 0.08)" strokeWidth="1.3" />
          <line x1="0" y1="-240" x2="0" y2="-115" strokeDasharray="2 2" strokeWidth="0.7" />
          <circle cx="0" cy="-175" r="4" fill="var(--pencil-blue)" />

          {/* Main Swept Wings with Control Slats & Flaps */}
          <path d="M 28,-100 L 255,100 L 285,190 L 230,195 L 48,160" strokeWidth="1.5" />
          <path d="M -28,-100 L -255,100 L -285,190 L -230,195 L -48,160" strokeWidth="1.5" />
          {/* Wing Ribs & Structural Grid */}
          <line x1="60" y1="-10" x2="240" y2="135" strokeDasharray="3 3" strokeWidth="0.8" />
          <line x1="-60" y1="-10" x2="-240" y2="135" strokeDasharray="3 3" strokeWidth="0.8" />
          <line x1="90" y1="20" x2="225" y2="175" strokeWidth="0.9" />
          <line x1="-90" y1="20" x2="-225" y2="175" strokeWidth="0.9" />
          <line x1="130" y1="80" x2="160" y2="180" strokeWidth="0.7" strokeDasharray="2 2" />
          <line x1="-130" y1="80" x2="-160" y2="180" strokeWidth="0.7" strokeDasharray="2 2" />
          <line x1="190" y1="120" x2="210" y2="190" strokeWidth="0.7" strokeDasharray="2 2" />
          <line x1="-190" y1="120" x2="-210" y2="190" strokeWidth="0.7" strokeDasharray="2 2" />

          {/* Forward Canards with Actuator Pivots */}
          <polygon points="18,-180 110,-120 90,-105 24,-135" strokeWidth="1.3" fill="rgba(24, 82, 140, 0.05)" />
          <polygon points="-18,-180 -110,-120 -90,-105 -24,-135" strokeWidth="1.3" fill="rgba(24, 82, 140, 0.05)" />
          <circle cx="65" cy="-135" r="4" strokeWidth="1" />
          <circle cx="-65" cy="-135" r="4" strokeWidth="1" />

          {/* Twin 3D Vectoring Turbofan Engines & Afterburner Rings */}
          <rect x="12" y="240" width="34" height="42" strokeWidth="1.4" />
          <rect x="-46" y="240" width="34" height="42" strokeWidth="1.4" />
          <ellipse cx="29" cy="275" rx="14" ry="5" strokeWidth="1.2" fill="rgba(24, 82, 140, 0.2)" />
          <ellipse cx="-29" cy="275" rx="14" ry="5" strokeWidth="1.2" fill="rgba(24, 82, 140, 0.2)" />
          <ellipse cx="29" cy="260" rx="10" ry="3" strokeDasharray="2 2" />
          <ellipse cx="-29" cy="260" rx="10" ry="3" strokeDasharray="2 2" />

          {/* Highly Detailed CS & Avionics Annotations */}
          <g style={{ fontSize: '9px', fontFamily: 'monospace', fill: 'var(--pencil-blue)' }}>
            <line x1="-300" y1="190" x2="-300" y2="240" strokeWidth="0.8" />
            <line x1="300" y1="190" x2="300" y2="240" strokeWidth="0.8" />
            <line x1="-300" y1="215" x2="300" y2="215" strokeDasharray="2 2" strokeWidth="0.8" />
            <text x="0" y="210" textAnchor="middle" stroke="none">WINGSPAN: 22.40m // RADAR CROSS SECTION: &lt;0.0001 m²</text>

            <line x1="-285" y1="100" x2="-340" y2="60" strokeWidth="0.8" />
            <line x1="-340" y1="60" x2="-410" y2="60" strokeWidth="0.8" />
            <text x="-415" y="56" textAnchor="end" stroke="none">FLY-BY-WIRE TELEMETRY // BUS 100 Gbps</text>

            <line x1="110" y1="-150" x2="160" y2="-190" strokeWidth="0.8" />
            <text x="165" y="-188" stroke="none">AESA RADAR GAIN: 34.2 dBi</text>
            <text x="55" y="315" stroke="none">VECTOR EXHAUST 185 kN</text>
          </g>
        </g>
      </svg>

      {/* =========================================================================
          MIDDLE LEFT: INTRICATE EXOSKELETON ARMOR & NEURAL COGNITION SYSTEM
          ========================================================================= */}
      <svg
        className="blueprint-svg blueprint-armor"
        viewBox="0 0 700 800"
        style={{
          position: 'absolute',
          top: '32%',
          left: '-60px',
          width: '650px',
          height: '750px',
          stroke: 'var(--pencil-blue)',
          fill: 'none',
          strokeWidth: '1.1',
        }}
      >
        <g transform="translate(320, 380)">
          {/* Drafting Cartesian Grid Lines */}
          <line x1="-260" y1="0" x2="260" y2="0" strokeDasharray="4 4" strokeWidth="0.7" />
          <line x1="0" y1="-330" x2="0" y2="330" strokeDasharray="4 4" strokeWidth="0.7" />
          <circle cx="0" cy="0" r="180" strokeDasharray="2 3" strokeWidth="0.6" />

          {/* Neural Visor & Cranial Assembly */}
          <path d="M -40,-280 Q 0,-310 40,-280 L 48,-220 L 26,-195 L -26,-195 L -48,-220 Z" strokeWidth="1.5" />
          {/* HUD Optics Array */}
          <polygon points="-32,-245 32,-245 24,-225 -24,-225" fill="rgba(24, 82, 140, 0.16)" strokeWidth="1.2" />
          <circle cx="-14" cy="-235" r="3" fill="var(--pencil-blue)" />
          <circle cx="14" cy="-235" r="3" fill="var(--pencil-blue)" />
          <circle cx="0" cy="-235" r="2" strokeWidth="0.8" />
          {/* Cranial Telemetry Antennas */}
          <line x1="-38" y1="-270" x2="-65" y2="-320" strokeWidth="1.2" />
          <line x1="38" y1="-270" x2="65" y2="-320" strokeWidth="1.2" />
          <circle cx="-65" cy="-320" r="2.5" fill="var(--pencil-blue)" />
          <circle cx="65" cy="-320" r="2.5" fill="var(--pencil-blue)" />

          {/* Cervical Interlock & Neck Actuators */}
          <rect x="-20" y="-195" width="40" height="20" strokeWidth="1.2" />
          <line x1="-12" y1="-195" x2="-12" y2="-175" />
          <line x1="12" y1="-195" x2="12" y2="-175" />

          {/* Articulated Shoulder Pauldrons */}
          <path d="M 52,-180 L 155,-165 L 175,-105 L 115,-90 L 44,-135 Z" strokeWidth="1.5" fill="rgba(24, 82, 140, 0.04)" />
          <path d="M -52,-180 L -155,-165 L -175,-105 L -115,-90 L -44,-135 Z" strokeWidth="1.5" fill="rgba(24, 82, 140, 0.04)" />
          {/* Rotary Kinetic Servo Bearings */}
          <circle cx="135" cy="-125" r="16" strokeWidth="1.3" />
          <circle cx="-135" cy="-125" r="16" strokeWidth="1.3" />
          <circle cx="135" cy="-125" r="6" fill="var(--pencil-blue)" />
          <circle cx="-135" cy="-125" r="6" fill="var(--pencil-blue)" />
          <circle cx="135" cy="-125" r="24" strokeDasharray="3 3" strokeWidth="0.7" />
          <circle cx="-135" cy="-125" r="24" strokeDasharray="3 3" strokeWidth="0.7" />

          {/* Chest Pectoral Exoskeleton Plates */}
          <polygon points="-44,-165 0,-155 44,-165 65,-70 0,-45 -65,-70" strokeWidth="1.6" />
          {/* Reactor / Energy Core */}
          <circle cx="0" cy="-105" r="28" strokeWidth="1.6" />
          <circle cx="0" cy="-105" r="18" strokeDasharray="2 2" strokeWidth="1.2" />
          <circle cx="0" cy="-105" r="8" fill="var(--pencil-blue)" />
          <line x1="0" y1="-133" x2="0" y2="-77" strokeWidth="0.8" />
          <line x1="-28" y1="-105" x2="28" y2="-105" strokeWidth="0.8" />

          {/* Spinal Load Chassis & Bilateral Pistons */}
          <rect x="-14" y="-45" width="28" height="110" strokeWidth="1.5" />
          <line x1="0" y1="-45" x2="0" y2="65" strokeWidth="2.5" />
          <line x1="-48" y1="-40" x2="-28" y2="60" strokeWidth="1.4" />
          <line x1="48" y1="-40" x2="28" y2="60" strokeWidth="1.4" />
          <circle cx="-48" cy="-40" r="5" strokeWidth="1" />
          <circle cx="48" cy="-40" r="5" strokeWidth="1" />
          <circle cx="-28" cy="60" r="5" strokeWidth="1" />
          <circle cx="28" cy="60" r="5" strokeWidth="1" />

          {/* Pelvic Gimbal & Hip Connectors */}
          <polygon points="-55,65 55,65 35,125 -35,125" strokeWidth="1.5" />
          <circle cx="-58" cy="98" r="18" strokeWidth="1.3" />
          <circle cx="58" cy="98" r="18" strokeWidth="1.3" />

          {/* Detailed CS Labels */}
          <g style={{ fontSize: '9px', fontFamily: 'monospace', fill: 'var(--pencil-blue)' }}>
            <line x1="28" y1="-105" x2="100" y2="-105" strokeWidth="0.8" />
            <line x1="100" y1="-105" x2="135" y2="-80" strokeWidth="0.8" />
            <text x="140" y="-76" stroke="none">TOROID CORE // 1.2 GW FLUX</text>

            <line x1="-135" y1="-125" x2="-200" y2="-150" strokeWidth="0.8" />
            <text x="-205" y="-152" textAnchor="end" stroke="none">SERVO ACTUATOR [LATENCY &lt;1.8ms]</text>

            <text x="-80" y="165" stroke="none">SYS-SPEC: KINEMATIC EXOFRAME</text>
          </g>
        </g>
      </svg>

      {/* =========================================================================
          BOTTOM RIGHT: DEEP-SPACE ORBITAL VESSEL WITH PROPULSION MANIFOLDS
          ========================================================================= */}
      <svg
        className="blueprint-svg blueprint-ship"
        viewBox="0 0 800 800"
        style={{
          position: 'absolute',
          bottom: '-60px',
          right: '-50px',
          width: '740px',
          height: '740px',
          stroke: 'var(--pencil-blue)',
          fill: 'none',
          strokeWidth: '1.1',
        }}
      >
        <g transform="translate(400, 400) rotate(-10)">
          {/* Multi-Orbital Coordinate Grid */}
          <ellipse cx="0" cy="0" rx="320" ry="120" strokeDasharray="3 3" strokeWidth="0.7" />
          <ellipse cx="0" cy="0" rx="220" ry="85" strokeDasharray="2 2" strokeWidth="0.6" />
          <ellipse cx="0" cy="0" rx="130" ry="50" strokeDasharray="4 4" strokeWidth="0.8" />
          <line x1="-360" y1="0" x2="360" y2="0" strokeDasharray="4 4" strokeWidth="0.8" />
          <line x1="0" y1="-360" x2="0" y2="360" strokeDasharray="4 4" strokeWidth="0.8" />

          {/* Forward Hull & Habitat Ring Assembly */}
          <path d="M 0,-310 L 55,-210 L 60,-110 L 85,20 L 70,170 L 0,205 L -70,170 L -85,20 L -60,-110 L -55,-210 Z" strokeWidth="1.6" />
          {/* Command Deck Window Grid */}
          <polygon points="0,-280 26,-235 -26,-235" fill="rgba(24, 82, 140, 0.15)" strokeWidth="1.2" />
          <line x1="0" y1="-280" x2="0" y2="-235" strokeDasharray="1 1" />

          {/* Habitation Centrifuge Ring */}
          <ellipse cx="0" cy="-60" rx="145" ry="40" strokeWidth="1.4" />
          <ellipse cx="0" cy="-60" rx="115" ry="30" strokeDasharray="2 2" strokeWidth="0.8" />
          <line x1="-145" y1="-60" x2="-60" y2="-60" strokeWidth="1.2" />
          <line x1="60" y1="-60" x2="145" y2="-60" strokeWidth="1.2" />

          {/* Deployable Radiator Heat Fins */}
          <rect x="85" y="-30" width="160" height="50" strokeWidth="1.3" fill="rgba(24, 82, 140, 0.04)" />
          <rect x="-245" y="-30" width="160" height="50" strokeWidth="1.3" fill="rgba(24, 82, 140, 0.04)" />
          {/* Micro-Heat Pipes */}
          {[-210, -170, -130, 125, 165, 205].map((x) => (
            <line key={x} x1={x} y1="-30" x2={x} y2="20" strokeDasharray="2 2" strokeWidth="0.7" />
          ))}

          {/* Outrigger Warp/Ion Nacelles */}
          <path d="M 105,60 L 195,85 L 205,245 L 165,250 L 105,170 Z" strokeWidth="1.4" />
          <path d="M -105,60 L -195,85 L -205,245 L -165,250 L -105,170 Z" strokeWidth="1.4" />
          <ellipse cx="185" cy="245" rx="20" ry="8" strokeWidth="1.3" fill="rgba(24, 82, 140, 0.2)" />
          <ellipse cx="-185" cy="245" rx="20" ry="8" strokeWidth="1.3" fill="rgba(24, 82, 140, 0.2)" />

          {/* Main Fusion Thruster Nozzle */}
          <ellipse cx="0" cy="205" rx="42" ry="16" strokeWidth="1.6" fill="rgba(24, 82, 140, 0.15)" />
          <ellipse cx="0" cy="225" rx="30" ry="10" strokeDasharray="2 2" strokeWidth="1" />
          <line x1="0" y1="221" x2="0" y2="300" strokeDasharray="3 3" strokeWidth="1.2" />

          {/* CS & Space Telemetry Annotations */}
          <g style={{ fontSize: '9px', fontFamily: 'monospace', fill: 'var(--pencil-blue)' }}>
            <line x1="245" y1="-30" x2="280" y2="-30" strokeWidth="0.8" />
            <line x1="280" y1="-30" x2="310" y2="-5" strokeWidth="0.8" />
            <text x="315" y="-2" stroke="none">THERMAL EMISSIVITY: 0.94 ε</text>

            <line x1="-205" y1="245" x2="-250" y2="280" strokeWidth="0.8" />
            <text x="-255" y="284" textAnchor="end" stroke="none">ION DRIVE [SPECIFIC IMPULSE 9200s]</text>
            <text x="-90" y="-325" stroke="none">ORBITAL FRAMEWORK // SYS-ARGO-IX</text>
          </g>
        </g>
      </svg>
    </div>
  )
}
