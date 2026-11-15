'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { projects, Project } from '@/lib/projects'
import { sound } from '@/lib/sound'

const CATEGORIES = [
  'ALL',
  'AGENTIC AI',
  'RETRIEVAL',
  'DATA & ETL',
  'COMPUTER VISION',
  'NLP',
  'OPEN SOURCE',
]

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL')

  const filteredProjects = selectedCategory === 'ALL'
    ? projects
    : projects.filter(p => p.category === selectedCategory)

  const handleFilterClick = (cat: string) => {
    sound.playMechanicalClick()
    setSelectedCategory(cat)
  }

  return (
    <div className="page-container">
      {/* Page Title Block */}
      <div className="arch-title-block">
        <div className="title-block-grid">
          <div className="title-cell">
            <span className="cell-label">CATALOG SHEET</span>
            <span className="cell-value">DWG-SPEC-CATALOG // ALL SYSTEMS</span>
          </div>
          <div className="title-cell">
            <span className="cell-label">TOTAL DRAWINGS</span>
            <span className="cell-value">{projects.length} SPECIFICATIONS</span>
          </div>
          <div className="title-cell">
            <span className="cell-label">VERIFIED CODEBASES</span>
            <span className="cell-value" style={{ color: 'var(--stamp-green)' }}>100% PRODUCTION / DEMO</span>
          </div>
        </div>

        <div className="title-block-hero">
          <div className="hero-titles">
            <h1>Systems & Architecture</h1>
            <p className="hero-tagline">
              Autonomous agents, vector search graphs, data pipelines, and deep learning systems engineered with production constraints.
            </p>
          </div>
          <div className="stamp stamp-spec hide-mobile">
            SHEET 02 / 05
          </div>
        </div>
      </div>

      {/* Category Filter Bar */}
      <div className="project-filters">
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--pencil-blue)', alignSelf: 'center', fontWeight: 600, marginRight: '4px' }}>
          FILTER BY DOMAIN:
        </span>
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${cat === selectedCategory ? 'active' : ''}`}
            onClick={() => handleFilterClick(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Blueprint Grid */}
      <div className="projects-grid">
        {filteredProjects.map((p: Project) => (
          <article key={p.slug} className="blueprint-card">
            {/* Drawing Number & Status */}
            <div className="blueprint-header">
              <span className="dwg-no">{p.dwgNo} // {p.category}</span>
              <span className={`stamp ${p.status === 'PRODUCTION-GRADE' ? 'stamp-approved' : p.status === 'VERIFIED PR' ? 'stamp-verified' : 'stamp-spec'}`} style={{ fontSize: '9px', padding: '2px 6px' }}>
                {p.status}
              </span>
            </div>

            <div className="blueprint-body">
              <h2 style={{ fontSize: '20px', margin: '0 0 8px', letterSpacing: '-0.02em', color: 'var(--ink-primary)' }}>
                {p.name}
              </h2>
              <p style={{ fontSize: '13px', color: 'var(--ink-secondary)', margin: '0 0 16px', lineHeight: 1.6 }}>
                {p.summary}
              </p>

              {/* Measured Dimension Metric */}
              <div className="dimension-line">
                <span className="dimension-arrow-left"></span>
                <span>{p.metric}</span>
                <span className="dimension-arrow-right"></span>
              </div>

              {/* Architecture Node Pipeline Preview */}
              <div style={{ background: 'var(--paper-sheet-alt)', border: '1px dashed var(--pencil-blue)', padding: '10px', borderRadius: '2px', margin: '14px 0' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--pencil-blue)', fontWeight: 700, display: 'block', marginBottom: '6px' }}>
                  CORE PIPELINE STAGES:
                </span>
                <ol style={{ margin: 0, paddingLeft: '16px', fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--ink-secondary)' }}>
                  {p.steps.slice(0, 3).map((st) => (
                    <li key={st.id} style={{ marginBottom: '3px' }}>{st.title}</li>
                  ))}
                  {p.steps.length > 3 && <li>+ {p.steps.length - 3} additional sub-process...</li>}
                </ol>
              </div>

              {/* Tech Stack Chips */}
              <div className="stack-tags">
                {p.stack.map((t) => (
                  <span key={t} className="stack-tag">{t}</span>
                ))}
              </div>

              {/* Project Action Links */}
              <div className="project-links">
                <Link
                  href={`/projects/${p.slug}/`}
                  className="action-link"
                  onClick={() => sound.playMechanicalClick()}
                  style={{ fontWeight: 700 }}
                >
                  <span>INSPECT SPEC</span>
                  <span>→</span>
                </Link>

                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="action-link"
                    onClick={() => sound.playMechanicalClick()}
                  >
                    <span>GITHUB</span>
                    <span>↗</span>
                  </a>
                )}

                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="action-link"
                    onClick={() => sound.playMechanicalClick()}
                  >
                    <span>LIVE DEMO</span>
                    <span>↗</span>
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
