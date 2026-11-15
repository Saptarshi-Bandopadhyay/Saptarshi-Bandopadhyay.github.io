import React from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getAllPosts, getPost } from '@/lib/blog'

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }))
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await getPost(slug)

  if (!post) {
    return notFound()
  }

  return (
    <div className="page-container narrow">
      {/* Return Breadcrumb */}
      <div style={{ marginBottom: '24px' }}>
        <Link href="/blog/" className="action-link" style={{ fontWeight: 600 }}>
          <span>← BACK TO ENGINEERING NOTES</span>
        </Link>
      </div>

      {/* Main Whitepaper Document Sheet */}
      <article className="whitepaper-article">
        {/* Document Header Block */}
        <header className="whitepaper-header">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
            <span className="stamp stamp-spec" style={{ fontSize: '10px' }}>
              TECHNICAL NOTE // {post.slug.toUpperCase()}
            </span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--ink-muted)' }}>
              DOC-ID: {post.date.replace(/-/g, '')}
            </span>
          </div>

          <h1 className="whitepaper-title">{post.title}</h1>

          <div className="whitepaper-meta">
            <span><b>AUTHOR:</b> Saptarshi Bandopadhyay</span>
            <span><b>DATE:</b> {post.date}</span>
            <span><b>READING TIME:</b> {post.readTime}</span>
            {post.tags.length > 0 && (
              <span><b>TAGS:</b> {post.tags.join(' · ')}</span>
            )}
          </div>
        </header>

        {/* Table of Contents */}
        {post.toc.length > 0 && (
          <aside style={{ background: 'var(--paper-sheet-alt)', border: '1.5px dashed var(--pencil-blue)', padding: '16px 20px', margin: '0 0 32px', borderRadius: '2px' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--pencil-blue)', fontWeight: 700, display: 'block', marginBottom: '8px' }}>
              TABLE OF CONTENTS:
            </span>
            <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '13px', fontFamily: 'var(--font-mono)', color: 'var(--ink-secondary)' }}>
              {post.toc.map((item) => (
                <li key={item.id} style={{ marginBottom: '6px' }}>
                  <a href={`#${item.id}`} style={{ color: 'var(--pencil-blue)', textDecoration: 'underline' }}>
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </aside>
        )}

        {/* Markdown Rendered Content */}
        <div
          className="markdown-body"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />

        {/* Author Signoff Box */}
        <div style={{ marginTop: '48px', paddingTop: '24px', borderTop: '2px solid var(--pencil-blue)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--pencil-blue)', fontWeight: 700, display: 'block' }}>
              AUTHOR // AI ENGINEER
            </span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', fontWeight: 700 }}>
              Saptarshi Bandopadhyay
            </span>
          </div>

          <div style={{ display: 'flex', gap: '16px' }}>
            <Link href="/blog/" className="action-link" style={{ fontWeight: 700 }}>
              <span>MORE ARTICLES →</span>
            </Link>
            <a href="mailto:bandopadhyaysaptarshi@gmail.com" className="action-link" style={{ fontWeight: 700 }}>
              <span>SEND FEEDBACK →</span>
            </a>
          </div>
        </div>
      </article>
    </div>
  )
}
