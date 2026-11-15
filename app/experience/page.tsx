import React from 'react'
import { sound } from '@/lib/sound'

const RESUME_URL = 'https://drive.google.com/file/d/1ddpzunXfs3w37A6xgLscMR3WP9OmBlNL/view?usp=sharing'

const LOGBOOK_ENTRIES = [
  {
    id: 'LOG-01',
    period: 'SEP 2025 — PRESENT',
    company: 'AI Tech UK',
    location: 'Leeds, England (Remote)',
    role: 'AI Engineer',
    stamp: 'CURRENT POSITION',
    stampClass: 'stamp-approved',
    systems: ['FastAPI', 'Microsoft Graph API', 'AWS SES', 'MySQL', 'LangGraph'],
    achievements: [
      'Eliminated manual administrative overhead for Outlook users by developing a personal AI assistant for autonomous meeting scheduling, email responses, follow-ups, rule-based delegation, and post-meeting note generation.',
      'Reduced manual compliance overhead by architecting an end-to-end warehouse compliance agent that autonomously monitors email inboxes via Microsoft Graph API to classify operations, extract structured data, track process steps, and generate automated risk-analysis reports.',
      'Scaled automation capacity by designing high-volume, event-driven backends with FastAPI, MySQL, SQLAlchemy, and integrating Microsoft Graph API and AWS SES to support mission-critical enterprise workflows.',
    ],
  },
  {
    id: 'LOG-02',
    period: 'SEP 2024 — JAN 2025',
    company: 'Binoloop',
    location: 'Alberta, Canada (Remote)',
    role: 'Machine Learning Engineer Intern',
    stamp: 'COMPLETED SERVICE',
    stampClass: 'stamp-spec',
    systems: ['LangGraph', 'Milvus Hybrid Search', 'Playwright', 'PostgreSQL', 'Python'],
    achievements: [
      'Architected a multi-step RAG Agent utilizing LangGraph for orchestration and Milvus (Hybrid Search) to deliver high-throughput, streamed query responses.',
      'Engineered and integrated advanced LLM techniques (Query Expansion, Decomposition, Answer Regeneration) to significantly boost contextual accuracy across large document corpora.',
      'Streamlined data lifecycle management through the deployment of an autonomous AI-ETL Agent that dynamically scraped and transformed unstructured web data for structured PostgreSQL ingestion.',
    ],
  },
  {
    id: 'LOG-03',
    period: 'OCT 2023 — FEB 2024',
    company: 'Unify',
    location: 'London, England (Open Source)',
    role: 'Machine Learning Engineer — Top Contributor',
    stamp: 'VERIFIED OSS CONTRIB',
    stampClass: 'stamp-verified',
    systems: ['Python', 'NumPy', 'PyTorch', 'TensorFlow', 'JAX', 'Hypothesis'],
    prUrl: 'https://github.com/unifyai/ivy/pull/22199',
    achievements: [
      'Added instance methods to the NumPy frontend for Unify’s Ivy framework, enabling seamless cross-framework conversion and code unification.',
      'Developed robust property-based test functions for instance methods using Hypothesis to guarantee numeric precision under diverse tensor backends.',
      'Recognized as an official Top Contributor with merged PR #22199 in the upstream repository.',
    ],
  },
  {
    id: 'LOG-04',
    period: '2021 — 2025',
    company: 'JIS University',
    location: 'Kolkata, India',
    role: 'B.Tech — Computer Science & Engineering',
    stamp: 'DEGREE CONFERRED',
    stampClass: 'stamp-spec',
    systems: ['Computer Vision', 'NLP', 'Deep Learning', 'Distributed Systems'],
    achievements: [
      'Conducted extensive deep learning research and implementation spanning Computer Vision (SnapScript, UnoViz), Machine Translation (CrossTalk), and metric learning.',
      'Graduated with honors in Computer Science, focusing on practical AI systems and autonomous software engineering.',
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
            <span className="cell-label">DOCUMENT TYPE</span>
            <span className="cell-value">DWG-SERVICE-LOG // CAREER TRAJECTORY</span>
          </div>
          <div className="title-cell">
            <span className="cell-label">ENGINEER SPECIFICATION</span>
            <span className="cell-value">SAPTARSHI BANDOPADHYAY</span>
          </div>
          <div className="title-cell">
            <span className="cell-label">OFFICIAL RESUME</span>
            <span className="cell-value">
              <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--pencil-blue)', textDecoration: 'underline' }}>
                VIEW GOOGLE DRIVE PDF ↗
              </a>
            </span>
          </div>
        </div>

        <div className="title-block-hero">
          <div className="hero-titles">
            <h1>Engineering Service Record</h1>
            <p className="hero-tagline">
              A chronological logbook of production systems architected, high-throughput pipelines deployed, and open-source contributions.
            </p>
          </div>
          <div className="stamp stamp-spec hide-mobile">
            SHEET 03 / 05
          </div>
        </div>
      </div>

      {/* Logbook Timeline */}
      <div className="logbook-timeline">
        {LOGBOOK_ENTRIES.map((entry) => (
          <article key={entry.id} className="logbook-entry">
            {/* Sidebar Info: Period & Stamp */}
            <div className="entry-sidebar">
              <span className="entry-period">{entry.period}</span>
              <span className="entry-location">{entry.location}</span>
              <div style={{ marginTop: '12px' }}>
                <span className={`stamp ${entry.stampClass}`} style={{ fontSize: '9px', padding: '3px 6px' }}>
                  {entry.stamp}
                </span>
              </div>
            </div>

            {/* Main Content Body */}
            <div className="entry-content">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '8px' }}>
                <h2>{entry.role}</h2>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--pencil-blue)' }}>
                  ENTRY REF: {entry.id}
                </span>
              </div>

              <div className="entry-company">{entry.company}</div>

              {/* Achievements & Responsibilities */}
              <ul className="entry-duties">
                {entry.achievements.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>

              {/* Verified PR Link if available */}
              {entry.prUrl && (
                <div style={{ marginTop: '14px', paddingTop: '10px' }}>
                  <a
                    href={entry.prUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="action-link"
                    style={{ fontWeight: 700 }}
                  >
                    <span>VERIFY MERGED PULL REQUEST (IVY #22199)</span>
                    <span>↗</span>
                  </a>
                </div>
              )}

              {/* Systems Stack */}
              <div className="stack-tags" style={{ marginTop: '16px' }}>
                {entry.systems.map((s) => (
                  <span key={s} className="stack-tag">{s}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Bottom Action Card */}
      <div className="blueprint-card" style={{ marginTop: '48px', padding: '24px', textAlign: 'center' }}>
        <h3 style={{ margin: '0 0 8px', fontSize: '18px' }}>Need the complete formal resume?</h3>
        <p style={{ margin: '0 0 16px', color: 'var(--ink-secondary)', fontSize: '14px' }}>
          Download the latest curriculum vitae with full contact references and academic metrics.
        </p>
        <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" className="resume-btn" style={{ padding: '10px 24px', fontSize: '13px' }}>
          <span>DOWNLOAD RESUME (PDF)</span>
          <span>↗</span>
        </a>
      </div>
    </div>
  )
}
