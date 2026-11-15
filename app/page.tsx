import React from 'react'
import Link from 'next/link'
import { projects } from '@/lib/projects'
import { getAllPosts } from '@/lib/blog'
import { ProjectExplorer } from '@/components/ProjectExplorer'

const CONTACT_CHANNELS = [
  { label: 'EMAIL', value: 'bandopadhyaysaptarshi@gmail.com', href: 'mailto:bandopadhyaysaptarshi@gmail.com' },
  { label: 'GITHUB', value: 'github.com/Saptarshi-Bandopadhyay', href: 'https://github.com/Saptarshi-Bandopadhyay' },
  { label: 'LINKEDIN', value: 'linkedin.com/in/saptarshi003', href: 'https://linkedin.com/in/saptarshi003' },
  { label: 'X / TWITTER', value: 'x.com/saptarshi_021', href: 'https://twitter.com/saptarshi_021' },
]

export default function Home() {
  const recentPosts = getAllPosts().slice(0, 3)

  return (
    <div className="page-container">
      {/* =====================================================================
          ARCHITECTURAL TITLE BLOCK
          ===================================================================== */}
      <section className="arch-title-block">
        <div className="title-block-grid">
          <div className="title-cell">
            <span className="cell-label">SYSTEM CLASSIFICATION</span>
            <span className="cell-value">AI ENGINEER & DISTRIBUTED SYSTEMS</span>
          </div>
          <div className="title-cell">
            <span className="cell-label">ENGINEER</span>
            <span className="cell-value">SAPTARSHI BANDOPADHYAY</span>
          </div>
          <div className="title-cell">
            <span className="cell-label">STATUS</span>
            <span className="cell-value" style={{ color: 'var(--stamp-green)' }}>ACTIVE // PRODUCTION</span>
          </div>
        </div>

        <div className="title-block-hero">
          <div className="hero-titles">
            <h1>I build systems<br />that do useful things.</h1>
            <p className="hero-tagline">
              Autonomous agents, hybrid Milvus retrieval, high-throughput ETL, and event-driven FastAPI backends — engineered around real production constraints.
            </p>
          </div>
          <div className="hero-stamp-wrap hide-mobile">
            <div className="stamp stamp-approved">
              PRODUCTION VERIFIED
            </div>
          </div>
        </div>

        {/* Quick Navigation Strip Including ABOUT */}
        <div style={{ display: 'flex', gap: '16px', padding: '14px 28px', borderTop: '1px solid var(--pencil-blue)', background: 'var(--pencil-blue-light)', flexWrap: 'wrap' }}>
          <Link href="/projects/" className="action-link" style={{ fontWeight: 700 }}>
            <span>PROJECTS CATALOG</span>
            <span>→</span>
          </Link>
          <span style={{ color: 'var(--pencil-blue)' }}>|</span>
          <Link href="/experience/" className="action-link" style={{ fontWeight: 700 }}>
            <span>PROFESSIONAL EXPERIENCE</span>
            <span>→</span>
          </Link>
          <span style={{ color: 'var(--pencil-blue)' }}>|</span>
          <Link href="/blog/" className="action-link" style={{ fontWeight: 700 }}>
            <span>TECHNICAL BLOG</span>
            <span>→</span>
          </Link>
          <span style={{ color: 'var(--pencil-blue)' }}>|</span>
          <Link href="/about/" className="action-link" style={{ fontWeight: 700 }}>
            <span>ABOUT SPEC</span>
            <span>→</span>
          </Link>
          <span style={{ color: 'var(--pencil-blue)' }}>|</span>
          <a href="mailto:bandopadhyaysaptarshi@gmail.com" className="action-link">
            <span>CONTACT ME</span>
            <span>↗</span>
          </a>
        </div>
      </section>

      {/* =====================================================================
          FEATURED INDEPENDENT SYSTEMS & PIPELINES
          ===================================================================== */}
      <section style={{ margin: '48px 0' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '18px' }}>
          <div>
            <span className="stamp stamp-spec" style={{ fontSize: '10px' }}>SECTION 01 // ARCHITECTURE GRAPH</span>
            <h2 style={{ fontSize: '28px', margin: '8px 0 0', letterSpacing: '-0.02em' }}>
              Interactive System Pipeline
            </h2>
          </div>
          <Link href="/projects/" className="action-link">
            <span>VIEW ALL PROJECTS</span>
            <span>↗</span>
          </Link>
        </div>

        <ProjectExplorer items={projects} />
      </section>

      {/* =====================================================================
          TWO-COLUMN DRAFTING SHEETS: WORK EXPERIENCE & WRITING
          ===================================================================== */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '28px', marginTop: '48px' }}>
        {/* Work Experience Summary */}
        <div className="blueprint-card">
          <div className="blueprint-header">
            <span className="dwg-no">PRODUCTION SYSTEMS // CAREER SUMMARY</span>
            <span className="dwg-type">EXPERIENCE</span>
          </div>
          <div className="blueprint-body">
            <h3 style={{ margin: '0 0 16px', fontSize: '20px' }}>Where I’ve Built</h3>
            <div style={{ borderLeft: '2px solid var(--pencil-blue)', paddingLeft: '16px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--pencil-blue)', fontWeight: 700 }}>
                  2025 — APR 2026 // AI TECH UK (LEEDS)
                </span>
                <p style={{ margin: '4px 0 0', fontSize: '14px', color: 'var(--ink-secondary)' }}>
                  AI Engineer engineering autonomous Outlook assistants, 9-stage LangGraph warehouse compliance agents via Microsoft Graph webhooks, and event-driven FastAPI backends.
                </p>
              </div>

              <div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--pencil-blue)', fontWeight: 700 }}>
                  2024 — 2025 // BINOLOOP (ALBERTA)
                </span>
                <p style={{ margin: '4px 0 0', fontSize: '14px', color: 'var(--ink-secondary)' }}>
                  ML Engineer Intern engineering LangGraph RAG multi-step retrieval agents with Milvus and autonomous Playwright ETL pipelines.
                </p>
              </div>

              <div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--pencil-blue)', fontWeight: 700 }}>
                  2023 — 2024 // UNIFY (LONDON)
                </span>
                <p style={{ margin: '4px 0 0', fontSize: '14px', color: 'var(--ink-secondary)' }}>
                  Top Contributor to Ivy unified machine learning runtime (Merged PR #22199).
                </p>
              </div>
            </div>

            <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px dashed var(--paper-border-strong)' }}>
              <Link href="/experience/" className="action-link" style={{ fontWeight: 700 }}>
                <span>EXPLORE DETAILED EXPERIENCE & SYSTEMS</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Technical Writing Summary */}
        <div className="blueprint-card">
          <div className="blueprint-header">
            <span className="dwg-no">TECHNICAL NOTES // WHITE PAPERS</span>
            <span className="dwg-type">PUBLICATIONS</span>
          </div>
          <div className="blueprint-body">
            <h3 style={{ margin: '0 0 16px', fontSize: '20px' }}>Recent Writing</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {recentPosts.map((post, idx) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}/`}
                  style={{ display: 'block', padding: '10px 12px', background: 'var(--paper-sheet-alt)', borderLeft: '3px solid var(--pencil-blue)' }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--ink-muted)', marginBottom: '4px' }}>
                    <span>NOTE-0{idx + 1}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h4 style={{ margin: 0, fontSize: '14px', color: 'var(--ink-primary)' }}>{post.title}</h4>
                </Link>
              ))}
            </div>

            <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px dashed var(--paper-border-strong)' }}>
              <Link href="/blog/" className="action-link" style={{ fontWeight: 700 }}>
                <span>READ ALL TECHNICAL ARTICLES</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================================
          INTEGRATED COMMUNICATIONS & CONTACT STRIP
          ===================================================================== */}
      <section className="blueprint-card" style={{ marginTop: '48px', padding: '28px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', flexWrap: 'wrap', gap: '8px' }}>
          <div>
            <span className="stamp stamp-spec" style={{ fontSize: '10px' }}>SECTION 03 // TRANSMISSION</span>
            <h3 style={{ margin: '6px 0 0', fontSize: '20px' }}>Get In Touch</h3>
          </div>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--pencil-blue)' }}>
            STATUS: OPEN FOR NEW OPPORTUNITIES
          </span>
        </div>

        <p style={{ margin: '0 0 20px', fontSize: '14px', color: 'var(--ink-secondary)', maxWidth: '650px' }}>
          Interested in discussing agent architectures, high-volume data extraction, or distributed backends? Feel free to connect across any channel below.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
          {CONTACT_CHANNELS.map((ch) => (
            <a
              key={ch.label}
              href={ch.href}
              target={ch.href.startsWith('mailto:') ? '_self' : '_blank'}
              rel="noopener noreferrer"
              style={{
                display: 'block',
                padding: '12px 14px',
                background: 'var(--paper-sheet-alt)',
                border: '1px solid var(--paper-border)',
                borderLeft: '3px solid var(--pencil-blue)',
                fontFamily: 'var(--font-mono)',
              }}
            >
              <span style={{ fontSize: '10px', color: 'var(--pencil-blue)', display: 'block', fontWeight: 700 }}>
                {ch.label} ↗
              </span>
              <span style={{ fontSize: '12px', color: 'var(--ink-primary)', wordBreak: 'break-all' }}>
                {ch.value}
              </span>
            </a>
          ))}
        </div>
      </section>
    </div>
  )
}
