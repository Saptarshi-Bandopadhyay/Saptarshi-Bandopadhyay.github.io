import React from 'react'
import Link from 'next/link'

const RESUME_URL = 'https://drive.google.com/file/d/1H4kcE37xKn7nxAQsJb5srAsnIRqMJUxp/view?usp=sharing'

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
            <span className="cell-value">AGENTIC AI, LLMOPS & BACKENDS</span>
          </div>
          <div className="title-cell">
            <span className="cell-label">OFFICIAL CV</span>
            <span className="cell-value">
              <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--pencil-blue)', textDecoration: 'underline' }}>
                VIEW RESUME PDF ↗
              </a>
            </span>
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
            I’m <b>Saptarshi Bandopadhyay</b>, an AI engineer focused on practical systems built around language models, automated retrieval, and resilient backend pipelines. Over the past few years, my work has progressed from academic computer vision and deep learning models into the demanding domain of production agentic workflows, LLM routing gateways, and high-volume data backends.
          </p>
          <p>
            Most recently at <b>AI Tech UK</b> (through April 2026), I engineered autonomous Outlook email assistants and a 9-stage LangGraph warehouse compliance agent integrated with Microsoft Graph webhooks. Previously at <b>Binoloop</b>, I built LangGraph multi-step retrieval agents with hybrid Milvus search and automated web ETL pipelines, and contributed to the NumPy frontend of <b>Unify’s Ivy</b> framework.
          </p>
          <p>
            My engineering philosophy is simple: <b>a portfolio should behave like the work</b>. Systems should be deterministic where possible, measured against concrete precision and latency metrics, and built to solve tangible operational challenges.
          </p>
        </div>
      </article>

      {/* Core Technical Component Matrix from Resume */}
      <div className="blueprint-card" style={{ padding: '32px', marginBottom: '32px' }}>
        <h2 style={{ fontSize: '20px', margin: '0 0 20px', color: 'var(--pencil-blue-deep)' }}>
          Technical Component Matrix
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '18px' }}>
          <div style={{ background: 'var(--paper-sheet-alt)', padding: '16px', borderLeft: '3px solid var(--pencil-blue)' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--pencil-blue)', fontWeight: 700, display: 'block', marginBottom: '6px' }}>
              01 // LANGUAGES
            </span>
            <p style={{ margin: 0, fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--ink-primary)' }}>
              Python, SQL
            </p>
          </div>

          <div style={{ background: 'var(--paper-sheet-alt)', padding: '16px', borderLeft: '3px solid var(--pencil-blue)' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--pencil-blue)', fontWeight: 700, display: 'block', marginBottom: '6px' }}>
              02 // AI & ML
            </span>
            <p style={{ margin: 0, fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--ink-primary)' }}>
              LangChain, LangGraph, RAG, LLM Evaluation, TensorFlow, Keras
            </p>
          </div>

          <div style={{ background: 'var(--paper-sheet-alt)', padding: '16px', borderLeft: '3px solid var(--pencil-blue)' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--pencil-blue)', fontWeight: 700, display: 'block', marginBottom: '6px' }}>
              03 // LLMOPS
            </span>
            <p style={{ margin: 0, fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--ink-primary)' }}>
              LiteLLM, Prompt Caching, Guardrails, Langfuse, Model Gateway Routing
            </p>
          </div>

          <div style={{ background: 'var(--paper-sheet-alt)', padding: '16px', borderLeft: '3px solid var(--pencil-blue)' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--pencil-blue)', fontWeight: 700, display: 'block', marginBottom: '6px' }}>
              04 // BACKEND SYSTEMS
            </span>
            <p style={{ margin: 0, fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--ink-primary)' }}>
              FastAPI, SQLAlchemy 2.0, AsyncIO, Pydantic, Alembic
            </p>
          </div>

          <div style={{ background: 'var(--paper-sheet-alt)', padding: '16px', borderLeft: '3px solid var(--pencil-blue)' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--pencil-blue)', fontWeight: 700, display: 'block', marginBottom: '6px' }}>
              05 // DATABASES
            </span>
            <p style={{ margin: 0, fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--ink-primary)' }}>
              PostgreSQL, pgvector, Redis, MySQL
            </p>
          </div>

          <div style={{ background: 'var(--paper-sheet-alt)', padding: '16px', borderLeft: '3px solid var(--pencil-blue)' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--pencil-blue)', fontWeight: 700, display: 'block', marginBottom: '6px' }}>
              06 // TESTING & DEPLOYMENT
            </span>
            <p style={{ margin: 0, fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--ink-primary)' }}>
              Pytest, DeepEval, Docker, Git, GitHub
            </p>
          </div>

          <div style={{ background: 'var(--paper-sheet-alt)', padding: '16px', borderLeft: '3px solid var(--stamp-green)', gridColumn: '1 / -1' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--stamp-green)', fontWeight: 700, display: 'block', marginBottom: '6px' }}>
              07 // ACADEMIC RECORD
            </span>
            <p style={{ margin: 0, fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--ink-primary)' }}>
              JIS University — Bachelor of Technology in Computer Science & Engineering (CGPA: <b>9.4</b>, Sep 2021 – Jun 2025)
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
