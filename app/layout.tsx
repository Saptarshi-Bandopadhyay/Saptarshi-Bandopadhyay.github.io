import './globals.css'
import type { Metadata } from 'next'
import { Nav } from '@/components/Nav'
import { DraftingRuler } from '@/components/DraftingRuler'
import { FutureTechBlueprints } from '@/components/FutureTechBlueprints'

export const metadata: Metadata = {
  title: 'Saptarshi Bandopadhyay — AI Engineer & System Architect',
  description: 'Blueprint & drafting paper portfolio of Saptarshi Bandopadhyay. Architecting autonomous agents, hybrid retrieval systems, and high-throughput data automation.',
  keywords: ['AI Engineer', 'LangGraph', 'Milvus', 'RAG', 'Agentic AI', 'FastAPI', 'Saptarshi Bandopadhyay'],
  authors: [{ name: 'Saptarshi Bandopadhyay' }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {/* Subtle Futuristic Tech Blueprint Background */}
        <FutureTechBlueprints />

        {/* Top Margin Coordinate Ruler & Bottom Coordinate Tracker HUD */}
        <DraftingRuler />

        {/* Architectural Tabbed Navigation Header */}
        <Nav />

        {/* Main Drafting Content */}
        <main className="main-content">
          {children}
        </main>
      </body>
    </html>
  )
}
