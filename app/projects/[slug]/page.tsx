import React from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { projects } from '@/lib/projects'

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const p = projects.find((x) => x.slug === slug)

  if (!p) {
    return notFound()
  }

  return (
    <div className="page-container narrow">
      {/* Return to Catalog Breadcrumb */}
      <div style={{ marginBottom: '24px' }}>
        <Link href="/projects/" className="action-link" style={{ fontWeight: 600 }}>
          <span>← BACK TO PROJECTS</span>
        </Link>
      </div>

      {/* Main Engineering Blueprint Spec Sheet */}
      <article className="blueprint-card" style={{ padding: '0', border: '2px solid var(--pencil-blue)' }}>
        {/* Title Block */}
        <div className="arch-title-block" style={{ margin: 0, border: 'none', borderBottom: '2px solid var(--pencil-blue)' }}>
          <div className="title-block-grid">
            <div className="title-cell">
              <span className="cell-label">MODULE IDENTIFIER</span>
              <span className="cell-value">{p.sysId} // {p.category}</span>
            </div>
            <div className="title-cell">
              <span className="cell-label">SYSTEM TYPE</span>
              <span className="cell-value">{p.type}</span>
            </div>
            <div className="title-cell">
              <span className="cell-label">DEPLOYMENT STATUS</span>
              <span className="cell-value" style={{ color: 'var(--stamp-red)' }}>{p.status}</span>
            </div>
          </div>

          <div className="title-block-hero">
            <div className="hero-titles">
              <h1 style={{ fontSize: 'clamp(28px, 4vw, 36px)' }}>{p.name}</h1>
              <p className="hero-tagline">{p.summary}</p>
            </div>
          </div>
        </div>

        <div className="blueprint-body" style={{ padding: '32px' }}>
          {/* Measured Output Metric */}
          <div className="dimension-line" style={{ margin: '0 0 28px', fontSize: '12px' }}>
            <span className="dimension-arrow-left"></span>
            <span>SYSTEM BENCHMARK: {p.metric}</span>
            <span className="dimension-arrow-right"></span>
          </div>

          {/* System Pipeline Dataflow */}
          <section style={{ margin: '32px 0' }}>
            <span className="stamp stamp-spec" style={{ fontSize: '10px', marginBottom: '12px' }}>
              PIPELINE GRAPH // DATAFLOW TRANSFORMATIONS
            </span>
            <h2 style={{ fontSize: '20px', margin: '8px 0 16px', color: 'var(--pencil-blue-deep)' }}>
              Execution Stages & Transformers
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {p.stages.map((st) => (
                <div
                  key={st.id}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '70px 1fr',
                    gap: '16px',
                    padding: '14px 18px',
                    background: 'var(--paper-sheet-alt)',
                    border: '1px solid var(--pencil-blue)',
                    borderLeft: '4px solid var(--pencil-blue)',
                  }}
                >
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', fontWeight: 700, color: 'var(--pencil-blue)' }}>
                    [{st.id}]
                  </div>
                  <div>
                    <h3 style={{ margin: '0 0 4px', fontSize: '15px', color: 'var(--ink-primary)' }}>{st.title}</h3>
                    <p style={{ margin: 0, fontSize: '13px', color: 'var(--ink-secondary)', fontFamily: 'var(--font-mono)' }}>
                      {st.spec}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* System Overview */}
          <section style={{ margin: '36px 0' }}>
            <h2 style={{ fontSize: '20px', color: 'var(--pencil-blue-deep)', borderBottom: '1px solid var(--paper-border)', paddingBottom: '8px', margin: '0 0 14px' }}>
              System Overview & Problem Statement
            </h2>
            <p style={{ fontSize: '15px', lineHeight: 1.8, color: 'var(--ink-secondary)' }}>
              {p.overview}
            </p>
          </section>

          {/* Key Design Decisions */}
          <section style={{ margin: '36px 0' }}>
            <h2 style={{ fontSize: '20px', color: 'var(--pencil-blue-deep)', borderBottom: '1px solid var(--paper-border)', paddingBottom: '8px', margin: '0 0 14px' }}>
              Architectural & Algorithmic Decisions
            </h2>
            <ul style={{ paddingLeft: '20px', fontSize: '14px', lineHeight: 1.8, color: 'var(--ink-secondary)' }}>
              {p.designDecisions.map((dec, i) => (
                <li key={i} style={{ marginBottom: '8px' }}>{dec}</li>
              ))}
            </ul>
          </section>

          {/* Failure Modes & Guardrails */}
          <section style={{ margin: '36px 0' }}>
            <h2 style={{ fontSize: '20px', color: 'var(--pencil-blue-deep)', borderBottom: '1px solid var(--paper-border)', paddingBottom: '8px', margin: '0 0 14px' }}>
              Edge Cases & Numerical Stability
            </h2>
            <ul style={{ paddingLeft: '20px', fontSize: '14px', lineHeight: 1.8, color: 'var(--ink-secondary)' }}>
              {p.failureModes.map((fm, i) => (
                <li key={i} style={{ marginBottom: '8px' }}>{fm}</li>
              ))}
            </ul>
          </section>

          {/* Tech Stack */}
          <section style={{ margin: '36px 0' }}>
            <h2 style={{ fontSize: '20px', color: 'var(--pencil-blue-deep)', borderBottom: '1px solid var(--paper-border)', paddingBottom: '8px', margin: '0 0 14px' }}>
              Technologies & Frameworks
            </h2>
            <div className="stack-tags" style={{ marginTop: '12px' }}>
              {p.stack.map((item) => (
                <span key={item} className="stack-tag" style={{ fontSize: '12px', padding: '5px 10px' }}>
                  {item}
                </span>
              ))}
            </div>
          </section>

          {/* Repository & Demo Actions */}
          <div style={{ marginTop: '36px', paddingTop: '20px', borderTop: '2px solid var(--pencil-blue)', display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            {p.github && (
              <a href={p.github} target="_blank" rel="noopener noreferrer" className="resume-btn">
                <span>VIEW GITHUB REPOSITORY</span>
                <span>↗</span>
              </a>
            )}
            {p.demo && (
              <a href={p.demo} target="_blank" rel="noopener noreferrer" className="filter-btn" style={{ fontWeight: 600, padding: '8px 16px' }}>
                <span>OPEN LIVE DEMO (HUGGING FACE)</span>
                <span>↗</span>
              </a>
            )}
            {p.prUrl && (
              <a href={p.prUrl} target="_blank" rel="noopener noreferrer" className="filter-btn" style={{ fontWeight: 600, padding: '8px 16px' }}>
                <span>VIEW UPSTREAM MERGED PULL REQUEST</span>
                <span>↗</span>
              </a>
            )}
          </div>
        </div>
      </article>
    </div>
  )
}
