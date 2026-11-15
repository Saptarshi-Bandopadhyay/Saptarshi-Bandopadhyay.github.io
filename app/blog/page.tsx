import React from 'react'
import { getAllPosts } from '@/lib/blog'
import { BlogExplorer } from '@/components/BlogExplorer'

export default function BlogIndexPage() {
  const posts = getAllPosts()

  return (
    <div className="page-container narrow">
      {/* Title Block */}
      <div className="arch-title-block">
        <div className="title-block-grid">
          <div className="title-cell">
            <span className="cell-label">REPOSITORY</span>
            <span className="cell-value">TECHNICAL NOTES & ARCHITECTURE POST-MORTEMS</span>
          </div>
          <div className="title-cell">
            <span className="cell-label">PRIMARY DOMAINS</span>
            <span className="cell-value">RAG, AGENTS, DATA ENGINEERING</span>
          </div>
          <div className="title-cell">
            <span className="cell-label">ARTICLES</span>
            <span className="cell-value">{posts.length} PUBLISHED</span>
          </div>
        </div>

        <div className="title-block-hero">
          <div className="hero-titles">
            <h1>Engineering Notes</h1>
            <p className="hero-tagline">
              Architectural decisions, failure modes, and practical takeaways from engineering production AI and data systems.
            </p>
          </div>
          <div className="stamp stamp-spec hide-mobile">
            PUBLICATIONS // 04
          </div>
        </div>
      </div>

      {/* Dynamic Blog Explorer with Client Search & Tag Filtering */}
      <BlogExplorer posts={posts} />

      {/* Publishing Instructions for Saptarshi */}
      <div className="blueprint-card" style={{ marginTop: '48px', padding: '20px', background: 'var(--pencil-blue-light)' }}>
        <span className="stamp stamp-spec" style={{ fontSize: '9px', marginBottom: '8px' }}>
          DEVELOPER NOTE // WRITING ARTICLES
        </span>
        <h3 style={{ margin: '6px 0', fontSize: '15px', color: 'var(--pencil-blue-deep)' }}>
          Publishing new articles to this portfolio:
        </h3>
        <p style={{ margin: 0, fontSize: '13px', color: 'var(--ink-secondary)', lineHeight: 1.6 }}>
          Simply add any markdown file to <code>content/blog/your-post-title.md</code> with frontmatter (<code>title</code>, <code>date</code>, <code>description</code>, <code>tags</code>). Next.js automatically parses, extracts table of contents, and deploys clean extension-free URLs at <code>/blog/your-post-title/</code>!
        </p>
      </div>
    </div>
  )
}
