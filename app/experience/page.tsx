import React from 'react'

const RESUME_URL = 'https://drive.google.com/file/d/1H4kcE37xKn7nxAQsJb5srAsnIRqMJUxp/view?usp=sharing'

const EXPERIENCE_ENTRIES = [
  {
    id: 'ROLE-01',
    period: 'JAN 2026 — APR 2026',
    company: 'AI Tech UK',
    location: 'Leeds, England (Remote)',
    role: 'AI Engineer (Full-time)',
    badge: 'COMPLETED TENURE',
    badgeClass: 'stamp-approved',
    stack: ['LangGraph', 'Microsoft Graph Webhooks', 'Python', 'FastAPI', 'AWS SES'],
    highlights: [
      'Automated high-volume Outlook email operations by engineering an AI assistant handling hundreds of incoming emails per hour across scheduling, email responses, follow-ups, rule-based delegation, and post-meeting note generation; targeting measurable reductions in manual processing time 85%.',
      'Streamlined warehouse compliance monitoring by designing a 9-stage LangGraph agent integrated with Microsoft Graph webhooks, processing 6 operational workflows to extract structured compliance data, track workflow states, and generate risk-analysis reports; evaluated against 100 conversations with 90% classification Macro-F1.',
    ],
  },
  {
    id: 'ROLE-02',
    period: 'SEP 2025 — DEC 2025',
    company: 'AI Tech UK',
    location: 'Leeds, England (Remote)',
    role: 'AI Engineer (Intern)',
    badge: 'INTERNSHIP',
    badgeClass: 'stamp-spec',
    stack: ['FastAPI', 'MySQL', 'SQLAlchemy', 'Python', 'Event Automation'],
    highlights: [
      'Automated event operations across hundreds of registrations per event by engineering a FastAPI platform with MySQL and SQLAlchemy, orchestrating attendee, sponsor, and partner workflows.',
      'Reduced manual event coordination through automated form processing, event matching, scheduling, email routing, onboarding, and follow-ups, with database-backed tracking across 12 workflow stages.',
    ],
  },
  {
    id: 'ROLE-03',
    period: 'SEP 2024 — JAN 2025',
    company: 'Binoloop',
    location: 'Alberta, Canada (Remote)',
    role: 'Machine Learning Engineer Intern',
    badge: 'INTERNSHIP',
    badgeClass: 'stamp-spec',
    stack: ['LangGraph', 'Milvus Hybrid Search', 'Playwright', 'PostgreSQL', 'Recall@5', 'MRR'],
    highlights: [
      'Improved document retrieval across tens of thousands of documents by architecting a multi-step LangGraph RAG agent using Milvus hybrid search, query expansion, query decomposition, answer regeneration, and streamed responses; evaluated retrieval performance using Recall@5 and MRR.',
      'Automated large-scale data extraction by building an AI-ETL agent processing 10,000 records/day, transforming unstructured sources into structured data for PostgreSQL ingestion, with 97% schema validation success.',
    ],
  },
  {
    id: 'ROLE-04',
    period: 'OCT 2023 — FEB 2024',
    company: 'Unify',
    location: 'London, England (Remote)',
    role: 'Machine Learning Engineer — Top Contributor',
    badge: 'VERIFIED OSS MERGE',
    badgeClass: 'stamp-verified',
    stack: ['Python', 'NumPy', 'PyTorch', 'TensorFlow', 'JAX', 'Hypothesis'],
    prUrl: 'https://github.com/unifyai/ivy/pull/22199',
    highlights: [
      'Extended Ivy’s NumPy frontend with an instance method and comprehensive tests, contributing a merged PR.',
      'Recognized as an official Top Contributor for reliable frontend implementation across unified array backends.',
    ],
  },
  {
    id: 'ROLE-05',
    period: 'SEP 2021 — JUN 2025',
    company: 'JIS University',
    location: 'Kolkata, India',
    role: 'B.Tech — Computer Science & Engineering (CGPA - 9.4)',
    badge: 'DEGREE CONFERRED',
    badgeClass: 'stamp-spec',
    stack: ['Distributed Systems', 'Computer Vision', 'Deep Learning', 'Algorithms'],
    highlights: [
      'Graduated with honors in Computer Science and Engineering with a 9.4 CGPA.',
      'Researched and implemented deep learning models across vision-language transformers, sequence-to-sequence translation, and metric learning.',
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
            <span className="cell-value">PROFESSIONAL EXPERIENCE & TENURE</span>
          </div>
          <div className="title-cell">
            <span className="cell-label">FOCUS AREA</span>
            <span className="cell-value">AGENTIC AI, RETRIEVAL & EVENT BACKENDS</span>
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
          Download the updated resume containing formal background, honors, and direct contact details.
        </p>
        <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" className="resume-btn" style={{ padding: '10px 24px', fontSize: '13px' }}>
          <span>DOWNLOAD RESUME (PDF)</span>
          <span>↗</span>
        </a>
      </div>
    </div>
  )
}
