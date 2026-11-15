'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { sound } from '@/lib/sound'

const NAV_ITEMS = [
  { href: '/', label: 'HOME', idx: '01' },
  { href: '/projects/', label: 'PROJECTS', idx: '02' },
  { href: '/experience/', label: 'EXPERIENCE', idx: '03' },
  { href: '/blog/', label: 'BLOG', idx: '04' },
  { href: '/about/', label: 'ABOUT', idx: '05' },
]

const RESUME_URL = 'https://drive.google.com/file/d/1H4kcE37xKn7nxAQsJb5srAsnIRqMJUxp/view?usp=sharing'

export function Nav() {
  const [paletteOpen, setPaletteOpen] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    setMounted(true)
    setIsMuted(sound.getMuted())

    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        sound.playMechanicalClick()
        setPaletteOpen(prev => !prev)
      }
      if (e.key === 'Escape') {
        setPaletteOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const handleNavClick = () => {
    sound.playMechanicalClick()
  }

  const handleToggleSound = () => {
    const newMuted = sound.toggleMute()
    setIsMuted(newMuted)
  }

  const navigateTo = (href: string) => {
    sound.playMechanicalClick()
    setPaletteOpen(false)
    router.push(href)
  }

  return (
    <>
      <header className="nav-wrapper">
        <div className="nav-container">
          {/* Brand Logo */}
          <Link href="/" className="brand-badge" onClick={handleNavClick}>
            <span className="badge-icon">SB</span>
            <div>
              <span>SAPTARSHI.DEV</span>
              <span className="brand-sub">SYS-2026 // AI ENGINEER</span>
            </div>
          </Link>

          {/* Clean Main Navigation Tabs Including ABOUT */}
          <nav className="nav-tabs" aria-label="Main Navigation">
            {NAV_ITEMS.map((item) => {
              const isActive = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href)
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`nav-tab ${isActive ? 'active' : ''}`}
                  onClick={handleNavClick}
                >
                  <span className="tab-idx">{item.idx}</span>
                  <span>{item.label}</span>
                </Link>
              )
            })}
          </nav>

          {/* Controls: Audio Toggle, Resume, Command Palette */}
          <div className="nav-actions">
            {mounted && (
              <button
                className="sound-toggle-btn"
                onClick={handleToggleSound}
                title={isMuted ? 'Unmute Mechanical Sound' : 'Mute Mechanical Sound'}
              >
                <span>{isMuted ? '🔇' : '🔊'}</span>
                <span>{isMuted ? 'SOUND: OFF' : 'SOUND: ON'}</span>
              </button>
            )}

            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="resume-btn"
              onClick={handleNavClick}
            >
              <span>RESUME</span>
              <span>↗</span>
            </a>

            <button
              className="cmd-btn"
              onClick={() => {
                sound.playMechanicalClick()
                setPaletteOpen(true)
              }}
              title="Command Palette (⌘K)"
            >
              <span>⌘K</span>
            </button>
          </div>
        </div>
      </header>

      {/* Terminal Command Palette (⌘K) */}
      {paletteOpen && (
        <div className="palette-overlay" onClick={() => setPaletteOpen(false)}>
          <div className="palette-box" onClick={(e) => e.stopPropagation()}>
            <div className="palette-input-wrap">
              <span className="palette-prompt">&gt;</span>
              <input
                autoFocus
                className="palette-input"
                placeholder="Jump to page or command (e.g. about, projects, experience, email)..."
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    const query = e.currentTarget.value.toLowerCase().trim()
                    const match = NAV_ITEMS.find((item) => item.label.toLowerCase().includes(query))
                    if (match) {
                      navigateTo(match.href)
                    }
                  }
                }}
              />
              <span className="palette-esc">ESC</span>
            </div>

            <div className="palette-results">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.href}
                  className="palette-item"
                  onClick={() => navigateTo(item.href)}
                >
                  <span className="item-idx">{item.idx}</span>
                  <span>{item.label}</span>
                  <span style={{ color: 'var(--pencil-blue)' }}>→</span>
                </button>
              ))}
              <a
                href="mailto:bandopadhyaysaptarshi@gmail.com"
                className="palette-item"
                onClick={handleNavClick}
              >
                <span className="item-idx">06</span>
                <span>EMAIL SAPTARSHI</span>
                <span style={{ color: 'var(--pencil-blue)' }}>↗</span>
              </a>
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="palette-item"
                onClick={handleNavClick}
              >
                <span className="item-idx">07</span>
                <span>OFFICIAL RESUME (PDF)</span>
                <span style={{ color: 'var(--pencil-blue)' }}>↗</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
