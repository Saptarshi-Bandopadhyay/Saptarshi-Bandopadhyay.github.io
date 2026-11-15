import React from 'react'
import Link from 'next/link'

const CONTACT_CHANNELS = [
  {
    id: '01',
    label: 'PRIMARY TRANSMISSION // EMAIL',
    value: 'bandopadhyaysaptarshi@gmail.com',
    href: 'mailto:bandopadhyaysaptarshi@gmail.com',
    desc: 'Direct correspondence for collaborations, contract inquiries, or engineering roles.',
  },
  {
    id: '02',
    label: 'SOURCE REPOSITORIES // GITHUB',
    value: 'github.com/Saptarshi-Bandopadhyay',
    href: 'https://github.com/Saptarshi-Bandopadhyay',
    desc: 'Public codebases, open-source PRs, experiment repositories, and benchmarks.',
  },
  {
    id: '03',
    label: 'PROFESSIONAL NETWORK // LINKEDIN',
    value: 'linkedin.com/in/saptarshi003',
    href: 'https://linkedin.com/in/saptarshi003',
    desc: 'Career updates, professional network endorsements, and industry messaging.',
  },
  {
    id: '04',
    label: 'FIELD DISPATCHES // X (TWITTER)',
    value: 'x.com/saptarshi_021',
    href: 'https://twitter.com/saptarshi_021',
    desc: 'Casual engineering observations, paper summaries, and machine learning discussions.',
  },
]

export default function ContactPage() {
  return (
    <div className="page-container narrow">
      {/* Title Block */}
      <div className="arch-title-block">
        <div className="title-block-grid">
          <div className="title-cell">
            <span className="cell-label">TERMINAL REF</span>
            <span className="cell-value">DWG-COMM-06 // TRANSMISSION DESK</span>
          </div>
          <div className="title-cell">
            <span className="cell-label">LINK STATUS</span>
            <span className="cell-value" style={{ color: 'var(--stamp-green)' }}>ACTIVE LISTENER</span>
          </div>
          <div className="title-cell">
            <span className="cell-label">TIMEZONE</span>
            <span className="cell-value">UTC+00 / UTC+05:30</span>
          </div>
        </div>

        <div className="title-block-hero">
          <div className="hero-titles">
            <h1>Communications Desk</h1>
            <p className="hero-tagline">
              Have an ambiguous problem worth turning into a production system? Reach out directly across any official channel below.
            </p>
          </div>
          <div className="stamp stamp-spec hide-mobile">
            SHEET 06 / 06
          </div>
        </div>
      </div>

      {/* Contact Channels List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {CONTACT_CHANNELS.map((ch) => (
          <a
            key={ch.id}
            href={ch.href}
            target={ch.href.startsWith('mailto:') ? '_self' : '_blank'}
            rel="noopener noreferrer"
            className="blueprint-card"
            style={{ padding: '24px', display: 'block', textDecoration: 'none' }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--pencil-blue)', fontWeight: 700 }}>
                CHANNEL {ch.id} · {ch.label}
              </span>
              <span style={{ color: 'var(--pencil-blue)', fontWeight: 700 }}>↗</span>
            </div>
            <h2 style={{ fontSize: '18px', margin: '0 0 6px', color: 'var(--ink-primary)', fontFamily: 'var(--font-mono)' }}>
              {ch.value}
            </h2>
            <p style={{ margin: 0, fontSize: '13px', color: 'var(--ink-secondary)' }}>
              {ch.desc}
            </p>
          </a>
        ))}
      </div>

      {/* Return Home */}
      <div style={{ marginTop: '36px' }}>
        <Link href="/" className="action-link" style={{ fontWeight: 700 }}>
          <span>← RETURN TO DRAWING BOARD (HOME)</span>
        </Link>
      </div>
    </div>
  )
}
