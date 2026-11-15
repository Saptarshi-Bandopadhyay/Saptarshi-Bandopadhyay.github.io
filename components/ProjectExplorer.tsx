'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import type { Project } from '@/lib/projects'
import { sound } from '@/lib/sound'

export function ProjectExplorer({ items }: { items: Project[] }) {
  const [activeProject, setActiveProject] = useState<Project>(items[0])
  const [activeStage, setActiveStage] = useState<number>(0)

  const handleSelectProject = (p: Project) => {
    sound.playMechanicalClick()
    setActiveProject(p)
    setActiveStage(0)
  }

  const handleSelectStage = (idx: number) => {
    sound.playPencilTick()
    setActiveStage(idx)
  }

  return (
    <div className="schematic-viewer">
      {/* Top Bar: System Architecture Spec */}
      <div className="schematic-top">
        <div className="schematic-title">
          <span>⚡ SYSTEM PIPELINE:</span>
          <span>{activeProject.sysId} // {activeProject.name}</span>
          <span className="stamp stamp-spec" style={{ fontSize: '9px', padding: '2px 8px' }}>
            {activeProject.status}
          </span>
        </div>
        <div className="schematic-controls">
          <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--ink-muted)', alignSelf: 'center' }}>
            STAGE {activeStage + 1} OF {activeProject.stages.length}:
          </span>
          {activeProject.stages.map((_, i) => (
            <button
              key={i}
              className={`step-btn ${i === activeStage ? 'active' : ''}`}
              onClick={() => handleSelectStage(i)}
            >
              0{i + 1}
            </button>
          ))}
        </div>
      </div>

      {/* Interactive Architecture Flow Graph */}
      <div className="pipeline-flow">
        {activeProject.stages.map((st, i) => {
          const isSelected = i === activeStage
          return (
            <div
              key={st.id}
              className={`node-card ${isSelected ? 'active' : ''}`}
              onClick={() => handleSelectStage(i)}
            >
              <span className="node-idx">STAGE {st.id} [{st.type.toUpperCase()}]</span>
              <h3 className="node-title">{st.title}</h3>
              <p className="node-desc">{st.spec}</p>
              {isSelected && (
                <div className="dimension-line" style={{ margin: '8px 0 0', fontSize: '9px' }}>
                  <span>ACTIVE EXECUTION PATH</span>
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* System Footer Details: Metrics, Stack, Links */}
      <div style={{ padding: '20px', borderTop: '1px solid var(--pencil-blue)', background: 'var(--paper-sheet)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--pencil-blue)', display: 'block', fontWeight: 600 }}>
              {activeProject.metricLabel}
            </span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '15px', fontWeight: 700, color: 'var(--pencil-blue-deep)' }}>
              {activeProject.metric}
            </span>
          </div>

          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            {activeProject.github && (
              <a
                href={activeProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="action-link"
                onClick={() => sound.playMechanicalClick()}
              >
                <span>GITHUB REPO</span>
                <span>↗</span>
              </a>
            )}
            {activeProject.demo && (
              <a
                href={activeProject.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="action-link"
                onClick={() => sound.playMechanicalClick()}
              >
                <span>LIVE DEMO</span>
                <span>↗</span>
              </a>
            )}
            {activeProject.prUrl && (
              <a
                href={activeProject.prUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="action-link"
                onClick={() => sound.playMechanicalClick()}
              >
                <span>VERIFY PR</span>
                <span>↗</span>
              </a>
            )}
            <Link
              href={`/projects/${activeProject.slug}/`}
              className="action-link"
              onClick={() => sound.playMechanicalClick()}
              style={{ fontWeight: 700 }}
            >
              <span>INSPECT ARCHITECTURE</span>
              <span>→</span>
            </Link>
          </div>
        </div>

        {/* Tech Stack Chips */}
        <div className="stack-tags" style={{ marginTop: '14px' }}>
          {activeProject.stack.map((tech) => (
            <span key={tech} className="stack-tag">{tech}</span>
          ))}
        </div>
      </div>

      {/* Select System Tab */}
      <div style={{ borderTop: '1px solid var(--paper-border)', background: 'var(--paper-sheet-alt)', padding: '10px 16px', display: 'flex', gap: '8px', overflowX: 'auto' }}>
        <span style={{ fontSize: '10px', fontFamily: 'var(--font-mono)', color: 'var(--ink-muted)', alignSelf: 'center', whiteSpace: 'nowrap' }}>
          SELECT MODULE:
        </span>
        {items.map((p) => (
          <button
            key={p.slug}
            className={`filter-btn ${p.slug === activeProject.slug ? 'active' : ''}`}
            onClick={() => handleSelectProject(p)}
            style={{ fontSize: '10px', whiteSpace: 'nowrap' }}
          >
            {p.sysId} · {p.name}
          </button>
        ))}
      </div>
    </div>
  )
}
