// Parses draft markdown files in content/drafts/ into src/data/content.json
// Run standalone: node scripts/build-content.mjs  (also wired as npm prebuild)
import { readdirSync, readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const draftsDir = join(root, 'content', 'drafts')
const outDir = join(root, 'src', 'data')
mkdirSync(outDir, { recursive: true })

const CATEGORY_BY_PREFIX = [
  ['article-', 'Articles'],
  ['case-study-', 'Case Studies'],
  ['cheatsheet-', 'Cheatsheets'],
  ['ux-bite-', 'UX Bites'],
]

const stripMd = (s) =>
  s.replace(/\*\*/g, '').replace(/^#+\s*/gm, '').trim()

function classify(chunk) {
  const t = chunk.trim()
  if (!t) return null
  if (/^(References:|ကိုးကား:)/.test(t)) return { kind: 'refs', text: stripMd(t) }
  if (/^#\s/.test(t)) return { kind: 'heading', text: stripMd(t) }
  if (/^Principle Card/.test(stripMd(t).split('\n')[0]))
    return { kind: 'card', text: stripMd(t) }
  const lines = t.split('\n').filter((l) => l.trim())
  if (lines.length > 0 && lines.every((l) => /^(-|✓)\s/.test(l.trim())))
    return { kind: 'list', text: stripMd(t) }
  if (
    lines.every((l) =>
      /^(Category|Company|Cover|Image|Topic|Concept|Format|Note|App|Source|Format reference):/.test(l.trim()),
    )
  )
    return { kind: 'meta', text: stripMd(t) }
  // a chunk that is one single bold line acts as a section heading
  if (lines.length === 1 && /^\*\*.+\*\*$/.test(lines[0].trim()))
    return { kind: 'heading', text: stripMd(t) }
  return { kind: 'paragraph', text: stripMd(t) }
}

// split a body of text into classified blocks (blank-line separated chunks)
function toBlocks(text) {
  return text
    .split(/\n\s*\n/)
    .map((c) => classify(c))
    .filter(Boolean)
}

function zipPairs(enBlocks, myBlocks) {
  const pairs = []
  const n = Math.max(enBlocks.length, myBlocks.length)
  for (let i = 0; i < n; i++) {
    // refs blocks are language-neutral: keep them as EN-side standalone pairs
    pairs.push({ en: enBlocks[i] ?? null, my: myBlocks[i] ?? null })
  }
  return pairs
}

// detach refs blocks out of a pair list into standalone EN pairs appended at end
function extractRefs(pairs) {
  const refs = []
  const rest = pairs.filter((p) => {
    for (const side of ['en', 'my']) {
      if (p[side]?.kind === 'refs') {
        refs.push(p[side])
        p[side] = null
      }
    }
    return p.en || p.my
  })
  for (const r of refs) rest.push({ en: r, my: null })
  return rest
}

const MARKER = /^\*\*\[(EN|MY)\]\s*(.*?)\*\*\s*$/

function parsePaired(raw) {
  let titleEn = ''
  let titleMy = ''
  const pairs = []
  const chunks = raw.split(/^\s*---\s*$/m)
  for (const chunk of chunks) {
    if (!chunk.trim()) continue
    // split chunk into language sections by **[EN]** / **[MY]** marker lines
    const sections = [] // {lang, heading, body}
    let current = null
    const preambleLines = []
    for (const line of chunk.split('\n')) {
      const m = line.match(MARKER)
      if (m) {
        current = { lang: m[1].toLowerCase(), heading: m[2].trim(), bodyLines: [] }
        sections.push(current)
      } else if (current) current.bodyLines.push(line)
      else preambleLines.push(line)
    }
    const preamble = preambleLines.join('\n').trim()
    if (preamble) {
      // file header / neutral lines (Impacts, UI Components…) → EN-side blocks
      for (const b of toBlocks(preamble)) pairs.push({ en: b, my: null })
    }
    const enBlocks = []
    const myBlocks = []
    for (const s of sections) {
      const body = s.bodyLines.join('\n').trim()
      if (/^Title:\s*/.test(s.heading)) {
        titleEn = s.heading.replace(/^Title:\s*/, '')
        continue
      }
      if (/^ခေါင်းစဉ်:/.test(s.heading)) {
        titleMy = s.heading.replace(/^ခေါင်းစဉ်:\s*/, '')
        continue
      }
      const blocks = [{ kind: 'heading', text: s.heading }, ...toBlocks(body)]
      ;(s.lang === 'en' ? enBlocks : myBlocks).push(...blocks)
    }
    pairs.push(...zipPairs(enBlocks, myBlocks))
  }
  return { titleEn, titleMy, blocks: extractRefs(pairs) }
}

function extractTitle(blocks, lang) {
  const idx = blocks.findIndex(
    (b) =>
      b.kind === 'heading' &&
      (lang === 'en'
        ? /^(Title|Cheatsheet):\s/.test(b.text)
        : /^ခေါင်းစဉ်:\s/.test(b.text)),
  )
  if (idx === -1) {
    const first = blocks.findIndex((b) => b.kind === 'heading')
    if (first === -1) return { title: '', blocks }
    const [t] = blocks.splice(first, 1)
    return { title: t.text, blocks }
  }
  const [t] = blocks.splice(idx, 1)
  return {
    title: t.text.replace(/^(Title|Cheatsheet|ခေါင်းစဉ်):\s*/, ''),
    blocks,
  }
}

function parseSplit(raw) {
  const enMark = raw.indexOf('## ENGLISH VERSION')
  const myMark = raw.indexOf('## မြန်မာ ဗားရှင်း')
  const preamble = raw.slice(0, enMark)
  const enText = raw.slice(enMark, myMark).replace('## ENGLISH VERSION', '')
  const myText = raw.slice(myMark).replace('## မြန်မာ ဗားရှင်း', '')

  const pairs = []
  for (const b of toBlocks(preamble)) pairs.push({ en: b, my: null })

  let enBlocks = toBlocks(enText)
  let myBlocks = toBlocks(myText)
  const enT = extractTitle(enBlocks, 'en')
  const myT = extractTitle(myBlocks, 'my')
  enBlocks = enT.blocks
  myBlocks = myT.blocks
  pairs.push(...zipPairs(enBlocks, myBlocks))
  return { titleEn: enT.title, titleMy: myT.title, blocks: extractRefs(pairs) }
}

const files = readdirSync(draftsDir).filter((f) => f.endsWith('.md')).sort()
const pieces = []
for (const file of files) {
  const raw = readFileSync(join(draftsDir, file), 'utf8')
  const category =
    CATEGORY_BY_PREFIX.find(([p]) => file.startsWith(p))?.[1] ?? 'Articles'
  const parsed = raw.includes('## ENGLISH VERSION') ? parseSplit(raw) : parsePaired(raw)
  // drop the "# … — Draft for review" banner heading from the top of each draft
  parsed.blocks = parsed.blocks.filter(
    (p) => !(p.en?.kind === 'heading' && /Draft for review/.test(p.en.text) && !p.my),
  )
  pieces.push({
    id: file.replace(/\.md$/, ''),
    category,
    titleEn: parsed.titleEn,
    titleMy: parsed.titleMy,
    blocks: parsed.blocks,
  })
  console.log(
    `${file} → ${category} | EN title: ${parsed.titleEn || '(none)'} | pairs: ${parsed.blocks.length}`,
  )
}

writeFileSync(join(outDir, 'content.json'), JSON.stringify({ pieces }, null, 2))
console.log(`Wrote src/data/content.json with ${pieces.length} pieces`)
