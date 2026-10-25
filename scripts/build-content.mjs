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
      /^(Category|Company|Cover|Image|Topic|Concept|Format|Note|App|Source|Format reference|Glossary tags):/.test(l.trim()),
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

const slugify = (s) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')

// ---- Multi-piece sources -------------------------------------------------
// glossary-30.md: every `### N. Term` entry becomes its own Glossary piece.
// Each entry has a **[EN]** block (definition + "Example:" line) and a
// **[MY]** block (definition + "ဥပမာ:" line).
function parseGlossaryMulti(raw) {
  const out = []
  const entries = raw.split(/^###\s+/m).slice(1) // drop file header/intro
  for (const entry of entries) {
    const nl = entry.indexOf('\n')
    const term = entry
      .slice(0, nl)
      .replace(/^\d+\.\s*/, '')
      .trim()
    const body = entry.slice(nl + 1)
    const grab = (marker, examplePrefix) => {
      const start = body.indexOf(marker)
      if (start === -1) return []
      let text = body.slice(start + marker.length)
      const nextEn = text.indexOf('**[EN]**')
      const nextMy = text.indexOf('**[MY]**')
      const ends = [nextEn, nextMy].filter((i) => i !== -1)
      if (ends.length) text = text.slice(0, Math.min(...ends))
      const lines = text
        .trim()
        .split('\n')
        .map((l) => l.trim())
        .filter((l) => l && l !== '---')
      const exIdx = lines.findIndex((l) => l.startsWith(examplePrefix))
      const def =
        exIdx === -1 ? lines.join(' ') : lines.slice(0, exIdx).join(' ')
      const blocks = []
      if (def) blocks.push({ kind: 'paragraph', text: stripMd(def) })
      if (exIdx !== -1)
        blocks.push({ kind: 'paragraph', text: stripMd(lines[exIdx]) })
      return blocks
    }
    const enBlocks = grab('**[EN]**', 'Example:')
    const myBlocks = grab('**[MY]**', 'ဥပမာ:')
    out.push({
      id: `glossary-${slugify(term)}`,
      category: 'Glossary',
      titleEn: term,
      titleMy: term,
      blocks: zipPairs(enBlocks, myBlocks),
    })
  }
  return out
}

// cheatsheets-10.md: every `## N. <Topic> Cheatsheet` section becomes one
// Cheatsheets piece. Labelled subsections alternate EN/MY; pair sequential
// EN subsections with the following MY subsection (same pairing logic as
// parsePaired: heading block + body blocks, zipped).
const SUB_MARKER = /^\*\*\[(EN|MY)\]\s*(.+?)\*\*\s*$/
function parseCheatsheetsMulti(raw) {
  const out = []
  const sections = raw.split(/^##\s+/m).slice(1) // drop file header/intro
  for (const section of sections) {
    const nl = section.indexOf('\n')
    const heading = section.slice(0, nl).replace(/^\d+\.\s*/, '').trim()
    const body = section.slice(nl + 1)
    // split body into labelled language subsections
    const subs = [] // {lang, heading, bodyLines}
    let current = null
    for (const line of body.split('\n')) {
      const m = line.match(SUB_MARKER)
      if (m) {
        current = { lang: m[1].toLowerCase(), heading: m[2].trim(), bodyLines: [] }
        subs.push(current)
      } else if (current) current.bodyLines.push(line)
    }
    const pairs = []
    for (let i = 0; i < subs.length; i += 2) {
      const enSub = subs[i]
      const mySub = subs[i + 1]
      const mk = (s) =>
        s
          ? [
              { kind: 'heading', text: s.heading },
              ...toBlocks(
                s.bodyLines.filter((l) => !/^\s*---\s*$/.test(l)).join('\n').trim(),
              ),
            ]
          : []
      pairs.push(...zipPairs(mk(enSub), mk(mySub)))
    }
    out.push({
      id: `cheatsheet-${slugify(heading.replace(/\s+Cheatsheet$/i, ''))}`,
      category: 'Cheatsheets',
      titleEn: heading,
      titleMy: heading,
      blocks: pairs,
    })
  }
  return out
}

// ux-bites-10.md: every `## Bite N — App: pattern` section becomes one
// UX Bites piece: [Screenshot: …] line as a meta block, then an EN
// paragraph paired with a MY paragraph.
function parseBitesMulti(raw) {
  const out = []
  const sections = raw.split(/^##\s+/m).slice(1) // drop file header/intro
  for (const section of sections) {
    const nl = section.indexOf('\n')
    const title = section.slice(0, nl).trim()
    const body = section.slice(nl + 1)
    const pairs = []
    let enText = ''
    let myText = ''
    let enPrinciple = ''
    let myPrinciple = ''
    for (const line of body.split('\n')) {
      const t = line.trim()
      if (/^\[Screenshot:/.test(t))
        pairs.push({ en: { kind: 'meta', text: t }, my: null })
      else if (t.startsWith('**[EN]**')) enText = t.replace(/^\*\*\[EN\]\*\*\s*/, '')
      else if (t.startsWith('**[MY]**')) myText = t.replace(/^\*\*\[MY\]\*\*\s*/, '')
      else if (t.startsWith('Principle applied:')) enPrinciple = t
      else if (t.startsWith('Applied လုပ်ထားတဲ့ principle:')) myPrinciple = t
    }
    if (enText || myText) {
      pairs.push({
        en: enText ? { kind: 'paragraph', text: stripMd(enText) } : null,
        my: myText ? { kind: 'paragraph', text: stripMd(myText) } : null,
      })
    }
    if (enPrinciple || myPrinciple) {
      pairs.push({
        en: enPrinciple ? { kind: 'paragraph', text: stripMd(enPrinciple) } : null,
        my: myPrinciple ? { kind: 'paragraph', text: stripMd(myPrinciple) } : null,
      })
    }
    out.push({
      id: `ux-bite-${slugify(title)}`,
      category: 'UX Bites',
      titleEn: title,
      titleMy: title,
      blocks: pairs,
    })
  }
  return out
}

const MULTI_PARSERS = {
  'glossary-30.md': parseGlossaryMulti,
  'cheatsheets-10.md': parseCheatsheetsMulti,
  'ux-bites-10.md': parseBitesMulti,
}

const files = readdirSync(draftsDir).filter((f) => f.endsWith('.md')).sort()
const pieces = []
for (const file of files) {
  const raw = readFileSync(join(draftsDir, file), 'utf8')
  if (MULTI_PARSERS[file]) {
    const multi = MULTI_PARSERS[file](raw)
    pieces.push(...multi)
    console.log(
      `${file} → ${multi.length} pieces (${multi[0]?.category ?? '?'})`,
    )
    continue
  }
  const category =
    CATEGORY_BY_PREFIX.find(([p]) => file.startsWith(p))?.[1] ?? 'Articles'
  const parsed = raw.includes('## ENGLISH VERSION') ? parseSplit(raw) : parsePaired(raw)
  // drop the "# … — Draft for review" banner heading from the top of each draft
  parsed.blocks = parsed.blocks.filter(
    (p) => !(p.en?.kind === 'heading' && /Draft for review/.test(p.en.text) && !p.my),
  )
  // A `Glossary tags: Term · Term` header line in the draft itself wins over
  // the TAG_RULES below (see tag assignment after the loop).
  const headerTagsMatch = raw.match(/^Glossary tags:\s*(.+)$/m)
  pieces.push({
    id: file.replace(/\.md$/, ''),
    category,
    titleEn: parsed.titleEn,
    titleMy: parsed.titleMy,
    blocks: parsed.blocks,
    ...(headerTagsMatch
      ? {
          headerTags: headerTagsMatch[1]
            .split('·')
            .map((t) => t.trim())
            .filter(Boolean),
        }
      : {}),
  })
  console.log(
    `${file} → ${category} | EN title: ${parsed.titleEn || '(none)'} | pairs: ${parsed.blocks.length}`,
  )
}

// Safety net: cheatsheet titles never carry the redundant word "Cheatsheet"
// (the pieces already live in the Cheatsheets tab).
for (const piece of pieces) {
  if (piece.category === 'Cheatsheets') {
    const clean = (t) => t.replace(/^Cheatsheet:\s*/, '').replace(/\s+Cheatsheet$/, '')
    piece.titleEn = clean(piece.titleEn)
    if (piece.titleMy) piece.titleMy = clean(piece.titleMy)
  }
}

// Glossary tags: pieces linked to related glossary terms.
// Tag names must match glossary piece titles exactly.
// Matching: exact piece id first, then substring rules.
const TAG_RULES = [
  ['ux-bite-001-blinkist-suggest-v2', ['Friction']],
  ['ux-bite-002-netflix-skip-intro', ['Friction']],
  ['duolingo', ['Retention']],
  ['spotify-jump-back-in', ['Friction']],
  ['google-maps-popular-times', ['Social Proof']],
  ['instagram-double-tap', ['Feedback']],
  ['youtube-preview-thumbnails', ['Cognitive Load']],
  ['grab-order-again', ['Friction']],
  ['amazon-frequently-bought', ['Social Proof']],
  ['notion-the-slash-command', ['Progressive Disclosure', 'Cognitive Load']],
  ['tiktok-one-video', ['Cognitive Load']],
  ['airbnb-i-m-flexible', ['Progressive Disclosure']],
  ['article-001-invisible-gorilla', ['Cognitive Load', 'Banner Blindness']],
  ['article-002-peak-end-rule', ['Retention']],
  ['article-003-jakobs-law-mental-models', ['Mental Model']],
  ['case-study-001-mcdonalds-kiosks', ['Cognitive Load', 'Conversion']],
  ['case-study-002-airbnb-trust-paired', ['Social Proof']],
]
for (const piece of pieces) {
  if (piece.headerTags) {
    piece.tags = piece.headerTags
    continue
  }
  const rule =
    TAG_RULES.find(([m]) => piece.id === m) ??
    TAG_RULES.find(([m]) => piece.id.includes(m))
  if (rule) piece.tags = rule[1]
}

// Validate tags against actual Glossary piece titles. Header-derived tags
// are reported loudly if they don't resolve (never silently dropped).
const glossaryTitles = new Set(
  pieces.filter((p) => p.category === 'Glossary').map((p) => p.titleEn),
)
for (const piece of pieces) {
  if (!piece.tags) continue
  const unresolved = piece.tags.filter((t) => !glossaryTitles.has(t))
  if (unresolved.length) {
    console.warn(
      `⚠ ${piece.id}: unresolved glossary tag(s): ${unresolved.join(', ')}` +
        (piece.headerTags ? ' (from Glossary tags header)' : ' (from TAG_RULES)'),
    )
  }
}
for (const piece of pieces) delete piece.headerTags

writeFileSync(join(outDir, 'content.json'), JSON.stringify({ pieces }, null, 2))
console.log(`Wrote src/data/content.json with ${pieces.length} pieces`)
