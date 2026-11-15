---
title: Publishing new engineering whitepapers to this portfolio
date: 2026-11-15
description: A quick specification on how to draft and publish technical notes with markdown frontmatter and clean extension-free URLs.
tags: [Meta, Guide, Documentation]
readTime: 3 min read
---

Publishing new technical articles and system retrospectives to this portfolio is designed to be completely frictionless.

## The Publishing Pipeline

To publish a new article:

1. Create a markdown file inside `content/blog/`:
   ```bash
   content/blog/your-post-slug.md
   ```

2. Add the standard YAML frontmatter block at the top of the file:
   ```yaml
   ---
   title: Your Technical Title Here
   date: 2026-11-15
   description: A concise 1-2 sentence engineering summary of the post.
   tags: [RAG, LangGraph, Python]
   readTime: 5 min read
   ---
   ```

3. Write your article using standard GitHub Flavored Markdown (headings, code blocks, lists, quotes).

## Automatic Features

When the site is built or deployed via GitHub Actions:
- The file is automatically parsed by `gray-matter`.
- An automatic **Table of Contents** is generated from your `##` and `###` headings.
- Estimated reading times and tag pills are rendered automatically.
- Next.js exports a clean, extension-free directory: `/blog/your-post-slug/`.
