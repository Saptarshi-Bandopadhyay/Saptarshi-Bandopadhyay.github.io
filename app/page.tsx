import React from 'react'
import Link from 'next/link'
import { projects } from '@/lib/projects'
import { getAllPosts } from '@/lib/blog'
import { ProjectExplorer } from '@/components/ProjectExplorer'

export default function Home() {
  const recentPosts = getAllPosts().slice(0, 3)

  return (
    <div className="page-container">
      {/* =====================================================================
          ARCHITECTURAL TITLE BLOCK (HEADER SPEC)
          ===================================================================== */}
      <section className="arch-title-block">
        <div className="title-block-grid">
          <div className="title-cell">
            <span className="cell-label">PROJECT SPECIFICATION</span>
            <span className="cell-value">SAPTARSHI.DEV // AUTONOMOUS AI & DATA SYSTEMS</span>
          </div>
          <div className="title-cell">
            <span className="cell-label">DESIGN ENGINEER</span>
            <span className="cell-value">SAPTARSHI BANDOPADHYAY</span>
          </div>
          <div className="title-cell">
            <span className="cell-label">STATUS CODE</span>
            <span className="cell-value" style={{ color: 'var(--stamp-red)' }}>PROD-READY // REV-04</span>
          </div>
        </div>

        <div className="title-block-hero">
          <div className="hero-titles">
            <h1>I architect systems<br />that do useful things.</h1>
            <p className="hero-tagline">
              Autonomous agents, hybrid Milvus retrieval, high-volume ETL, and event-driven backends — engineered for real production constraints.
            </p>
          </div>
          <div className="hero-stamp-wrap hide-mobile">
            <div className="stamp stamp-approved">
              APPROVED FOR PRODUCTION
            </div>
          </div>
        </div>

        {/* Quick Route Shortcuts Bar */}
        <div style={{ display: 'flex', gap: '12px', padding: '14px 28px', borderTop: '1px solid var(--pencil-blue)', background: 'var(--pencil-blue-light)', flexWrap: 'wrap' }}>
          <Link href="/projects/" className="action-link" style={{ fontWeight: 700 }}>
            <span>PAGE 02: ALL PROJECTS</span>
            <span>→</span>
          </Link>
          <span style={{ color: 'var(--pencil-blue)' }}>|</span>
          <Link href="/experience/" className="action-link" style={{ fontWeight: 700 }}>
            <span>PAGE 03: SERVICE LOGBOOK</span>
            <span>→</span>
          </Link>
          <span style={{ color: 'var(--pencil-blue)' }}>|</span>
          <Link href="/blog/" className="action-link" style={{ fontWeight: 700 }}>
            <span>PAGE 04: TECHNICAL BLOG</span>
            <span>→</span>
          </Link>
          <span style={{ color: 'var(--pencil-blue)' }}>|</span>
          <Link href="/about/" className="action-link">
            <span>PAGE 05: ABOUT SPEC</span>
            <span>→</span>
          </Link>
        </div>
      </section>

      {/* =====================================================================
          CORE INTERACTIVE BLUEPRINT SCHEMATIC
          ===================================================================== */}
      <section style={{ margin: '48px 0' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '18px' }}>
          <div>
            <span className="stamp stamp-spec" style={{ fontSize: '10px' }}>SECTION 01 // ARCHITECTURE CAD</span>
            <h2 style={{ fontSize: '28px', margin: '8px 0 0', letterSpacing: '-0.02em' }}>
              Interactive System Blueprint
            </h2>
          </div>
          <Link href="/projects/" className="action-link">
            <span>EXPLORE ALL 7 SPECIFICATIONS</span>
            <span>↗</span>
          </Link>
        </div>

        <ProjectExplorer items={projects} />
      </section>

      {/* =====================================================================
          DUAL SPEC SHEETS: EXPERIENCE LOGBOOK PREVIEW & RECENT WRITING
          ===================================================================== */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '28px', marginTop: '48px' }}>
        {/* Service Record Summary Card */}
        <div className="blueprint-card">
          <div className="blueprint-header">
            <span className="dwg-no">LOGBOOK EXCERPT // CAREER SERVICE</span>
            <span className="dwg-type">SHEET 03/05</span>
          </div>
          <div className="blueprint-body">
            <h3 style={{ margin: '0 0 16px', fontSize: '20px' }}>Engineering Trajectory</h3>
            <div style={{ borderLeft: '2px solid var(--pencil-blue)', paddingLeft: '16px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--pencil-blue)', fontWeight: 700 }}>
                  2025 — PRESENT // AI TECH UK (LEEDS)
                </span>
                <p style={{ margin: '4px 0 0', fontSize: '14px', color: 'var(--ink-secondary)' }}>
                  AI Engineer architecting autonomous Outlook assistants, warehouse compliance agents via Microsoft Graph API, and FastAPI/AWS SES backends.
                </p>
              </div>

              <div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--pencil-blue)', fontWeight: 700 }}>
                  2024 — 2025 // BINOLOOP (ALBERTA)
                </span>
                <p style={{ margin: '4px 0 0', fontSize: '14px', color: 'var(--ink-secondary)' }}>
                  ML Engineer Intern engineering LangGraph RAG multi-step agents with Milvus and autonomous Playwright ETL pipelines.
                </p>
              </div>

              <div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--pencil-blue)', fontWeight: 700 }}>
                  2023 — 2024 // UNIFY (LONDON)
                </span>
                <p style={{ margin: '4px 0 0', fontSize: '14px', color: 'var(--ink-secondary)' }}>
                  Recognized as Top Contributor to the Ivy unified machine learning framework (Merged PR #22199).
                </p>
              </div>
            </div>

            <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px dashed var(--paper-border-strong)' }}>
              <Link href="/experience/" className="action-link" style={{ fontWeight: 700 }}>
                <span>READ COMPLETE SERVICE LOGBOOK</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Technical Blog / Memorandums Preview */}
        <div className="blueprint-card">
          <div className="blueprint-header">
            <span className="dwg-no">FIELD NOTES // TECHNICAL MEMORANDUMS</span>
            <span className="dwg-type">SHEET 04/05</span>
          </div>
          <div className="blueprint-body">
            <h3 style={{ margin: '0 0 16px', fontSize: '20px' }}>Recent Whitepapers</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {recentPosts.map((post, idx) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}/`}
                  style={{ display: 'block', padding: '10px 12px', background: 'var(--paper-sheet-alt)', borderLeft: '3px solid var(--pencil-blue)' }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--ink-muted)', marginBottom: '4px' }}>
                    <span>MEMO-0{idx + 1}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h4 style={{ margin: 0, fontSize: '14px', color: 'var(--ink-primary)' }}>{post.title}</h4>
                </Link>
              ))}
            </div>

            <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px dashed var(--paper-border-strong)' }}>
              <Link href="/blog/" className="action-link" style={{ fontWeight: 700 }}>
                <span>BROWSE ALL TECHNICAL WRITING</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
