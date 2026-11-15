'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import type { Post } from '@/lib/blog'
import { sound } from '@/lib/sound'

export function BlogExplorer({ posts }: { posts: Post[] }) {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedTag, setSelectedTag] = useState<string>('ALL')

  // Extract unique tags from dynamic posts
  const allTags = ['ALL', ...Array.from(new Set(posts.flatMap((p) => p.tags)))]

  // Filter posts
  const filteredPosts = posts.filter((post) => {
    const matchesTag = selectedTag === 'ALL' || post.tags.includes(selectedTag)
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesTag && matchesSearch
  })

  return (
    <>
      {/* Search Input Bar */}
      <div className="blog-search-bar">
        <input
          type="text"
          className="search-input"
          placeholder="Search technical notes by keyword, topic, or system (e.g. RAG, Playwright, LangGraph)..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Tag Filter Pills */}
      <div className="project-filters">
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--pencil-blue)', alignSelf: 'center', fontWeight: 600 }}>
          FILTER BY TOPIC:
        </span>
        {allTags.map((tag) => (
          <button
            key={tag}
            className={`filter-btn ${selectedTag === tag ? 'active' : ''}`}
            onClick={() => {
              sound.playMechanicalClick()
              setSelectedTag(tag)
            }}
          >
            {tag === 'ALL' ? 'ALL TOPICS' : `#${tag}`}
          </button>
        ))}
      </div>

      {/* Memos List */}
      <div className="memos-list">
        {filteredPosts.length === 0 ? (
          <div className="blueprint-card" style={{ padding: '30px', textAlign: 'center' }}>
            <p style={{ margin: 0, color: 'var(--ink-muted)', fontFamily: 'var(--font-mono)' }}>
              NO MATCHING MEMORANDUMS LOCATED IN ARCHIVE.
            </p>
          </div>
        ) : (
          filteredPosts.map((post, idx) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}/`}
              className="memo-card"
              onClick={() => sound.playMechanicalClick()}
            >
              <span className="memo-id">MEMO-0{idx + 1}</span>
              <div className="memo-info">
                <h2>{post.title}</h2>
                <p>{post.description}</p>
                <div className="memo-meta">
                  <span>📅 {post.date}</span>
                  <span>⏱ {post.readTime}</span>
                  <div className="stack-tags" style={{ margin: 0 }}>
                    {post.tags.map((t) => (
                      <span key={t} className="stack-tag">#{t}</span>
                    ))}
                  </div>
                </div>
              </div>
              <span className="memo-arrow" style={{ color: 'var(--pencil-blue)', fontSize: '18px' }}>
                →
              </span>
            </Link>
          ))
        )}
      </div>
    </>
  )
}
