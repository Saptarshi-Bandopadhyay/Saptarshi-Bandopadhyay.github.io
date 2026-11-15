import React from 'react'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="page-container narrow">
      {/* Title Block */}
      <div className="arch-title-block">
        <div className="title-block-grid">
          <div className="title-cell">
            <span className="cell-label">SYSTEM SPECIFICATION</span>
            <span className="cell-value">ABOUT SAPTARSHI BANDOPADHYAY</span>
          </div>
          <div className="title-cell">
            <span className="cell-label">CORE SPECIALTY</span>
            <span className="cell-value">AGENTIC AI & DISTRIBUTED DATA</span>
          </div>
          <div className="title-cell">
            <span className="cell-label">LOCATION BASE</span>
            <span className="cell-value">LEEDS, UK / KOLKATA, INDIA</span>
          </div>
        </div>

        <div className="title-block-hero">
          <div className="hero-titles">
            <h1>Engineer Specification</h1>
            <p className="hero-tagline">
              Curious about how language models, state machines, and real-world backend architectures actually behave under load.
            </p>
          </div>
          <div className="stamp stamp-spec hide-mobile">
            ABOUT // 05
          </div>
        </div>
      </div>

      {/* Narrative Card */}
      <article className="blueprint-card" style={{ padding: '32px', marginBottom: '32px' }}>
        <h2 style={{ fontSize: '22px', margin: '0 0 16px', color: 'var(--pencil-blue-deep)' }}>
          Background & Engineering Philosophy
        </h2>
        <div style={{ fontSize: '15px', lineHeight: 1.8, color: 'var(--ink-secondary)' }}>
          <p>
            I’m <b>Saptarshi Bandopadhyay</b>, an AI engineer focused on practical systems built around language models, automated retrieval, and distributed data pipelines. Over the past few years, my work has progressed from academic computer vision and deep learning models into the demanding domain of production agentic workflows and high-volume data backends.
          </p>
          <p>
            At <b>AI Tech UK</b>, I engineer autonomous systems that monitor enterprise communication streams via the Microsoft Graph API, handling automated calendar scheduling, compliance audits, and event-driven report generation. Previously at <b>Binoloop</b>, I built LangGraph multi-step retrieval agents with hybrid Milvus search and automated web data extraction pipelines, and contributed to the NumPy frontend of <b>Unify’s Ivy</b> framework.
          </p>
          <p>
            My engineering philosophy is simple: <b>a portfolio should behave like the work</b>. Systems should be deterministic where possible, measured against concrete throughput and latency metrics, and built to solve tangible operational challenges.
          </p>
        </div>
      </article>

      {/* Core Technical Component Matrix */}
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
              04 // INFRA & PROTOCOLS
            </span>
            <p style={{ margin: 0, fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--ink-primary)' }}>
              Microsoft Graph API, AWS SES, Docker, Git
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Links */}
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        <Link href="/projects/" className="resume-btn" style={{ padding: '10px 20px' }}>
          <span>EXPLORE PROJECTS</span>
          <span>→</span>
        </Link>
        <Link href="/experience/" className="filter-btn" style={{ padding: '10px 20px', fontWeight: 600 }}>
          <span>VIEW EXPERIENCE</span>
          <span>→</span>
        </Link>
      </div>
    </div>
  )
}
