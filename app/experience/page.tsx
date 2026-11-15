import React from 'react'

const RESUME_URL = 'https://drive.google.com/file/d/1ddpzunXfs3w37A6xgLscMR3WP9OmBlNL/view?usp=sharing'

const EXPERIENCE_ENTRIES = [
  {
    id: 'ROLE-01',
    period: 'SEP 2025 — PRESENT',
    company: 'AI Tech UK',
    location: 'Leeds, England (Remote / Contract)',
    role: 'AI Engineer',
    badge: 'CURRENT ROLE',
    badgeClass: 'stamp-approved',
    stack: ['FastAPI', 'Microsoft Graph API', 'AWS SES', 'MySQL', 'SQLAlchemy', 'Python', 'LangGraph'],
    highlights: [
      'Architected an autonomous Outlook AI assistant that eliminated manual administrative overhead by orchestrating automated meeting scheduling, contextual email drafting, rule-based delegation, and post-meeting note generation.',
      'Designed an end-to-end warehouse compliance agent that autonomously monitors high-volume email streams via Microsoft Graph API to classify operations, extract structured metadata, track compliance milestones, and generate automated risk-analysis reports.',
      'Engineered event-driven backends with FastAPI, MySQL, and SQLAlchemy, integrating Microsoft Graph API webhooks and AWS SES for high-reliability enterprise message dispatching.',
    ],
  },
  {
    id: 'ROLE-02',
    period: 'SEP 2024 — JAN 2025',
    company: 'Binoloop',
    location: 'Alberta, Canada (Remote)',
    role: 'Machine Learning Engineer Intern',
    badge: 'COMPLETED TENURE',
    badgeClass: 'stamp-spec',
    stack: ['LangGraph', 'Milvus Hybrid Search', 'Playwright', 'PostgreSQL', 'Python', 'FastAPI'],
    highlights: [
      'Architected a multi-step RAG Agent utilizing LangGraph for stateful graph orchestration and Milvus for hybrid vector/sparse search to deliver streamed, citation-backed query responses.',
      'Engineered advanced LLM retrieval mechanisms including semantic query expansion, question decomposition, and dynamic answer verification across tens of thousands of technical documents.',
      'Deployed an autonomous AI-ETL Agent powered by Playwright that dynamically scraped, normalized, and validated high-volume unstructured web records for structured PostgreSQL ingestion.',
    ],
  },
  {
    id: 'ROLE-03',
    period: 'OCT 2023 — FEB 2024',
    company: 'Unify',
    location: 'London, England (Open Source)',
    role: 'Machine Learning Engineer — Top Contributor',
    badge: 'VERIFIED OSS MERGE',
    badgeClass: 'stamp-verified',
    stack: ['Python', 'NumPy', 'PyTorch', 'TensorFlow', 'JAX', 'Hypothesis'],
    prUrl: 'https://github.com/unifyai/ivy/pull/22199',
    highlights: [
      'Implemented NumPy frontend instance methods for the Ivy unified machine learning framework, ensuring transparent cross-framework execution and identical casting behavior.',
      'Authored property-based test suites using Hypothesis to guarantee numeric gradient precision across PyTorch, TensorFlow, and JAX execution backends.',
      'Awarded Top Contributor distinction with merged pull request #22199 in the upstream repository.',
    ],
  },
  {
    id: 'ROLE-04',
    period: '2021 — 2025',
    company: 'JIS University',
    location: 'Kolkata, India',
    role: 'B.Tech — Computer Science & Engineering',
    badge: 'DEGREE CONFERRED',
    badgeClass: 'stamp-spec',
    stack: ['Distributed Systems', 'Computer Vision', 'Deep Learning', 'Data Structures & Algorithms'],
    highlights: [
      'Graduated with honors in Computer Science, focusing on neural network architectures, sequence-to-sequence transformers, and metric learning.',
      'Developed standalone deep learning research projects including SnapScript (vision-language captioning) and UnoViz (one-shot Siamese face verification).',
    ],
  },
]

export default function ExperiencePage() {
  return (
    <div className="page-container">
      {/* Title Block */}
      <div className="arch-title-block">
        <div className="title-block-grid">
          <div className="title-cell">
            <span className="cell-label">SYSTEM RECORD</span>
            <span className="cell-value">PROFESSIONAL EXPERIENCE & ROLES</span>
          </div>
          <div className="title-cell">
            <span className="cell-label">FOCUS AREA</span>
            <span className="cell-value">AGENTIC AI, RETRIEVAL & BACKEND SYSTEMS</span>
          </div>
          <div className="title-cell">
            <span className="cell-label">CURRICULUM VITAE</span>
            <span className="cell-value">
              <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--pencil-blue)', textDecoration: 'underline' }}>
                VIEW RESUME PDF ↗
              </a>
            </span>
          </div>
        </div>

        <div className="title-block-hero">
          <div className="hero-titles">
            <h1>Professional Experience</h1>
            <p className="hero-tagline">
              Production systems architected, high-volume event-driven backends deployed, and open-source contributions.
            </p>
          </div>
          <div className="stamp stamp-spec hide-mobile">
            EXPERIENCE // 03
          </div>
        </div>
      </div>

      {/* Experience Timeline */}
      <div className="logbook-timeline">
        {EXPERIENCE_ENTRIES.map((entry) => (
          <article key={entry.id} className="logbook-entry">
            {/* Sidebar Metadata */}
            <div className="entry-sidebar">
              <span className="entry-period">{entry.period}</span>
              <span className="entry-location">{entry.location}</span>
              <div style={{ marginTop: '12px' }}>
                <span className={`stamp ${entry.badgeClass}`} style={{ fontSize: '9px', padding: '3px 6px' }}>
                  {entry.badge}
                </span>
              </div>
            </div>

            {/* Entry Content */}
            <div className="entry-content">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '8px' }}>
                <h2>{entry.role}</h2>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--pencil-blue)' }}>
                  ID: {entry.id}
                </span>
              </div>

              <div className="entry-company">{entry.company}</div>

              {/* Achievements & Responsibilities */}
              <ul className="entry-duties">
                {entry.highlights.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>

              {/* Verified PR Link */}
              {entry.prUrl && (
                <div style={{ marginTop: '14px', paddingTop: '10px' }}>
                  <a
                    href={entry.prUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="action-link"
                    style={{ fontWeight: 700 }}
                  >
                    <span>VERIFY UPSTREAM MERGED PULL REQUEST (IVY #22199)</span>
                    <span>↗</span>
                  </a>
                </div>
              )}

              {/* Systems Stack */}
              <div className="stack-tags" style={{ marginTop: '16px' }}>
                {entry.stack.map((s) => (
                  <span key={s} className="stack-tag">{s}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Bottom Resume Action */}
      <div className="blueprint-card" style={{ marginTop: '48px', padding: '24px', textAlign: 'center' }}>
        <h3 style={{ margin: '0 0 8px', fontSize: '18px' }}>Looking for full academic and career credentials?</h3>
        <p style={{ margin: '0 0 16px', color: 'var(--ink-secondary)', fontSize: '14px' }}>
          Download the complete PDF resume containing formal background, honors, and direct contact details.
        </p>
        <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" className="resume-btn" style={{ padding: '10px 24px', fontSize: '13px' }}>
          <span>DOWNLOAD RESUME (PDF)</span>
          <span>↗</span>
        </a>
      </div>
    </div>
  )
}
