import React from 'react'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="page-container narrow">
      {/* Title Block */}
      <div className="arch-title-block">
        <div className="title-block-grid">
          <div className="title-cell">
            <span className="cell-label">DOSSIER REF</span>
            <span className="cell-value">DWG-DOSSIER-SB // FIELD SPEC</span>
          </div>
          <div className="title-cell">
            <span className="cell-label">PRIMARY FOCUS</span>
            <span className="cell-value">AGENTIC AI & DATA PIPELINES</span>
          </div>
          <div className="title-cell">
            <span className="cell-label">BASE STATION</span>
            <span className="cell-value">LEEDS, UK / KOLKATA, INDIA</span>
          </div>
        </div>

        <div className="title-block-hero">
          <div className="hero-titles">
            <h1>Engineer Dossier</h1>
            <p className="hero-tagline">
              Curious about how machines, models, and real-world software architectures actually behave.
            </p>
          </div>
          <div className="stamp stamp-spec hide-mobile">
            SHEET 05 / 05
          </div>
        </div>
      </div>

      {/* Narrative Blueprint Card */}
      <article className="blueprint-card" style={{ padding: '32px', marginBottom: '32px' }}>
        <h2 style={{ fontSize: '22px', margin: '0 0 16px', color: 'var(--pencil-blue-deep)' }}>
          Background & Engineering Philosophy
        </h2>
        <div style={{ fontSize: '15px', lineHeight: 1.8, color: 'var(--ink-secondary)' }}>
          <p>
            I’m <b>Saptarshi Bandopadhyay</b>, an AI engineer with a deep fascination for the messy middle between a high-level model and a dependable production system. Over the past few years, my work has evolved from classical deep learning and computer vision models into the demanding world of production agentic workflows, dynamic ETL systems, and hybrid retrieval engines.
          </p>
          <p>
            Right now at <b>AI Tech UK</b>, I engineer autonomous systems that interface directly with enterprise email infrastructure via the Microsoft Graph API, handling intelligent calendar scheduling, compliance audits, and event-driven report synthesis. Before this, I worked at <b>Binoloop</b> deploying LangGraph multi-step retrieval agents and Playwright scraping pipelines, and contributed to the NumPy frontend of <b>Unify’s Ivy</b> framework.
          </p>
          <p>
            My engineering philosophy is simple: <b>a portfolio should behave like the work</b>. Systems must be resilient against failure modes, measured on concrete throughput, and built to solve tangible operational bottlenecks.
          </p>
        </div>
      </article>

      {/* Core Technical Specifications Grid */}
      <div className="blueprint-card" style={{ padding: '32px', marginBottom: '32px' }}>
        <h2 style={{ fontSize: '20px', margin: '0 0 20px', color: 'var(--pencil-blue-deep)' }}>
          Technical Component Matrix
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
          <div style={{ background: 'var(--paper-sheet-alt)', padding: '16px', borderLeft: '3px solid var(--pencil-blue)' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--pencil-blue)', fontWeight: 700, display: 'block', marginBottom: '6px' }}>
              01 // CORE LANGUAGES
            </span>
            <p style={{ margin: 0, fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--ink-primary)' }}>
              Python, TypeScript, SQL, Bash
            </p>
          </div>

          <div style={{ background: 'var(--paper-sheet-alt)', padding: '16px', borderLeft: '3px solid var(--pencil-blue)' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--pencil-blue)', fontWeight: 700, display: 'block', marginBottom: '6px' }}>
              02 // AI & AGENTS
            </span>
            <p style={{ margin: 0, fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--ink-primary)' }}>
              LangGraph, Milvus, LangChain, OpenAI, HuggingFace
            </p>
          </div>

          <div style={{ background: 'var(--paper-sheet-alt)', padding: '16px', borderLeft: '3px solid var(--pencil-blue)' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--pencil-blue)', fontWeight: 700, display: 'block', marginBottom: '6px' }}>
              03 // BACKEND & DATA
            </span>
            <p style={{ margin: 0, fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--ink-primary)' }}>
              FastAPI, PostgreSQL, SQLAlchemy, Playwright, MySQL
            </p>
          </div>

          <div style={{ background: 'var(--paper-sheet-alt)', padding: '16px', borderLeft: '3px solid var(--pencil-blue)' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--pencil-blue)', fontWeight: 700, display: 'block', marginBottom: '6px' }}>
              04 // INFRA & APIS
            </span>
            <p style={{ margin: 0, fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--ink-primary)' }}>
              Microsoft Graph API, AWS SES, Docker, Git
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Links */}
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        <Link href="/experience/" className="resume-btn" style={{ padding: '10px 20px' }}>
          <span>INSPECT SERVICE LOGBOOK</span>
          <span>→</span>
        </Link>
        <Link href="/projects/" className="filter-btn" style={{ padding: '10px 20px', fontWeight: 600 }}>
          <span>EXPLORE SYSTEMS CATALOG</span>
          <span>→</span>
        </Link>
      </div>
    </div>
  )
}
