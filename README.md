# Saptarshi Bandopadhyay — Engineering Blueprint Portfolio

A geeky, high-craft **Drafting Paper & Future Tech Blueprint** portfolio for an AI Engineer architecting autonomous agents, hybrid retrieval systems, and high-throughput data pipelines.

Built with **Next.js 15 (App Router)**, **TypeScript**, and **Web Audio API**, and exported as a 100% static site for **GitHub Pages**.

---

## 📐 Key Features

- **Drafting Paper & Future Tech Blueprints Aesthetic**: Warm engineering graph paper foundation with subtle, high-precision SVG blueprint watermarks of future aerospace & mech technology (hypersonic stealth aircraft, orbital deep-space craft, exoskeleton armors, and quantum telemetry satellites).
- **Clean Extension-Free URLs**: Configured with `trailingSlash: true` so all routes (`/projects/`, `/experience/`, `/blog/`, `/about/`, `/contact/`) have clean directory routing with zero `.html` extensions.
- **Dedicated Independent Pages**:
  - `/`: Architectural drawing board, title block, and interactive CAD system pipeline.
  - `/projects/`: Full blueprint specification sheets with domain filtering (`AGENTIC AI`, `RETRIEVAL`, `DATA & ETL`, `COMPUTER VISION`, `NLP`, `OPEN SOURCE`).
  - `/projects/[slug]/`: Deep-dive engineering spec sheets with pipeline transformers, design trade-offs, and failure recovery modes.
  - `/experience/`: Engineering Service Logbook detailing roles at **AI Tech UK**, **Binoloop**, and **Unify** (Ivy merged PR #22199).
  - `/blog/`: Technical memorandums with instant client-side keyword and topic filtering.
  - `/blog/[slug]/`: Whitepaper reader with automated table of contents, code blocks, and metadata.
  - `/about/`: Engineer Dossier and technical component matrix.
  - `/contact/`: Transmission desk with direct email, GitHub, LinkedIn, and X links.
- **Synthesized Mechanical Audio**: Zero external audio assets—native Web Audio API synthesized mechanical drafting switches, graphite pencil ticks, and a persistent `[SOUND: ON / OFF]` toggle.
- **CAD Command Palette (`⌘K`)**: Quick keyboard-driven navigation across all portfolio sheets.

---

## 🛠 Local Development & Build

```bash
# Install dependencies
npm install

# Start local drafting server
npm run dev

# Compile static HTML export for GitHub Pages
npm run build
```

---

## ✍️ How to Publish New Blog Posts

Drop any standard Markdown file into `content/blog/your-post-slug.md` with YAML frontmatter:

```markdown
---
title: Building RAG systems that answer the real question
date: 2026-11-15
description: Retrieval quality starts before the vector database.
tags: [RAG, LLM, Retrieval]
readTime: 6 min read
---

## Start with the question
Your content here...
```

The system automatically extracts the table of contents from `##` and `###` headings, calculates reading time, indexes tags for instant search, and exports clean URLs at `/blog/your-post-slug/`.

---

## 🚀 Deployment

The repository includes `.github/workflows/deploy.yml` which automatically builds and publishes the `out/` directory to GitHub Pages on every push to `main`.
