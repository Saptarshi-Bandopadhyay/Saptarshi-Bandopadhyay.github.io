import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const BLOG_DIR = path.join(process.cwd(), 'content/blog')

function normalizeDate(v: unknown): string {
  if (v instanceof Date) return v.toISOString().slice(0, 10)
  return String(v ?? '')
}

export type TocItem = {
  id: string
  text: string
  level: number
}

export type Post = {
  slug: string
  title: string
  date: string
  description: string
  tags: string[]
  readTime: string
  content: string
  html: string
  toc: TocItem[]
}

export function getAllPosts(): Post[] {
  if (!fs.existsSync(BLOG_DIR)) return []

  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith('.md'))

  return files
    .map((file) => {
      const slug = file.replace(/\.md$/, '')
      const fullPath = path.join(BLOG_DIR, file)
      const rawContent = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(rawContent)

      // Calculate read time fallback
      const wordCount = content.split(/\s+/).length
      const estimatedMinutes = Math.max(1, Math.round(wordCount / 200))
      const readTime = data.readTime ? String(data.readTime) : `${estimatedMinutes} min read`

      // Extract Table of Contents
      const toc: TocItem[] = []
      const headingRegex = /^(#{2,3})\s+(.*)$/gm
      let match: RegExpExecArray | null
      while ((match = headingRegex.exec(content)) !== null) {
        const level = match[1].length
        const text = match[2].trim()
        const id = text
          .toLowerCase()
          .replace(/[^\w\s-]/g, '')
          .replace(/\s+/g, '-')
        toc.push({ id, text, level })
      }

      return {
        slug,
        title: String(data.title ?? 'Untitled Memo'),
        date: normalizeDate(data.date),
        description: String(data.description ?? ''),
        tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
        readTime,
        content,
        html: '',
        toc,
      }
    })
    .sort((a, b) => b.date.localeCompare(a.date))
}

export async function getPost(slug: string): Promise<Post | null> {
  const posts = getAllPosts()
  const post = posts.find((p) => p.slug === slug)
  if (!post) return null

  // Process markdown into HTML with remark
  const processed = await remark().use(html, { sanitize: false }).process(post.content)
  let htmlContent = String(processed)

  // Inject heading IDs for TOC link anchoring
  post.toc.forEach((item) => {
    const originalHeadingH2 = `<h2>${item.text}</h2>`
    const originalHeadingH3 = `<h3>${item.text}</h3>`
    if (htmlContent.includes(originalHeadingH2)) {
      htmlContent = htmlContent.replace(originalHeadingH2, `<h2 id="${item.id}">${item.text}</h2>`)
    } else if (htmlContent.includes(originalHeadingH3)) {
      htmlContent = htmlContent.replace(originalHeadingH3, `<h3 id="${item.id}">${item.text}</h3>`)
    }
  })

  return {
    ...post,
    html: htmlContent,
  }
}
