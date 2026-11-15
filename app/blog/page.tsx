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
            <span className="cell-label">INDEX REF</span>
            <span className="cell-value">DWG-MEMO-ARCHIVE // WRITING</span>
          </div>
          <div className="title-cell">
            <span className="cell-label">TOPIC FOCUS</span>
            <span className="cell-value">RAG, AGENTS, DATA SYSTEMS</span>
          </div>
          <div className="title-cell">
            <span className="cell-label">PUBLICATIONS</span>
            <span className="cell-value">{posts.length} MEMORANDUMS</span>
          </div>
        </div>

        <div className="title-block-hero">
          <div className="hero-titles">
            <h1>Technical Memorandums</h1>
            <p className="hero-tagline">
              Notes, post-mortems, and architectural blueprints from building production AI and distributed data systems.
            </p>
          </div>
          <div className="stamp stamp-spec hide-mobile">
            SHEET 04 / 05
          </div>
        </div>
      </div>

      {/* Dynamic Blog Explorer with Client Search & Tag Filtering */}
      <BlogExplorer posts={posts} />

      {/* Developer Publishing Guide */}
      <div className="blueprint-card" style={{ marginTop: '48px', padding: '20px', background: 'var(--pencil-blue-light)' }}>
        <span className="stamp stamp-spec" style={{ fontSize: '9px', marginBottom: '8px' }}>
          DEVELOPER NOTE // POSTING BLOGS
        </span>
        <h3 style={{ margin: '6px 0', fontSize: '15px', color: 'var(--pencil-blue-deep)' }}>
          How to add new blogs to this portfolio:
        </h3>
        <p style={{ margin: 0, fontSize: '13px', color: 'var(--ink-secondary)', lineHeight: 1.6 }}>
          Simply drop any standard markdown file into <code>content/blog/your-post-title.md</code> with frontmatter (<code>title</code>, <code>date</code>, <code>description</code>, <code>tags</code>). The portfolio automatically parses, indexes, and builds clean extension-free pages at <code>/blog/your-post-title/</code>!
        </p>
      </div>
    </div>
  )
}
