import { useMemo, useState } from 'react'
import { ArrowLeft, BookOpenText, Check, Copy } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/motion/tabs'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/motion/card'
import { Button } from '@/components/motion/button'
import {
  AnimatedToastStack,
  useAnimatedToastStack,
} from '@/components/motion/animated-toast-stack'
import { cn } from '@/lib/utils'
import content from '@/data/content.json'

type Block = { kind: string; text: string }
type Pair = { en: Block | null; my: Block | null }
type Piece = {
  id: string
  category: string
  titleEn: string
  titleMy: string
  blocks: Pair[]
}

const CATEGORIES = ['Articles', 'Case Studies', 'UX Bites', 'Cheatsheets', 'Glossary']
const pieces = content.pieces as Piece[]

function CopyButton({ text, onCopied }: { text: string; onCopied: () => void }) {
  const [copied, setCopied] = useState(false)
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text)
    } catch {
      const ta = document.createElement('textarea')
      ta.value = text
      document.body.appendChild(ta)
      ta.select()
      document.execCommand('copy')
      ta.remove()
    }
    setCopied(true)
    onCopied()
    setTimeout(() => setCopied(false), 1500)
  }
  return (
    <button
      type="button"
      onClick={copy}
      aria-label="Copy paragraph"
      className={cn(
        'absolute right-2 top-2 inline-flex size-7 items-center justify-center rounded-md border border-border/60 bg-background/80 text-muted-foreground backdrop-blur transition',
        'hover:text-primary sm:opacity-0 sm:group-hover:opacity-100 focus-visible:opacity-100',
        copied && 'text-emerald-400 sm:opacity-100',
      )}
    >
      {copied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
    </button>
  )
}

function BlockView({
  block,
  lang,
  onCopied,
}: {
  block: Block
  lang: 'EN' | 'MY'
  onCopied: () => void
}) {
  const isMy = lang === 'MY'
  return (
    <div
      className={cn(
        'group relative rounded-lg border px-4 py-3',
        isMy ? 'border-primary/25 bg-primary/[0.06]' : 'border-border/70 bg-card',
        block.kind === 'card' && 'border-primary/40 bg-primary/[0.08]',
      )}
    >
      <span className="mb-1.5 inline-block rounded bg-secondary px-1.5 py-0.5 text-[10px] font-semibold tracking-wider text-muted-foreground">
        {lang}
        {block.kind !== 'paragraph' ? ` · ${block.kind}` : ''}
      </span>
      <CopyButton text={block.text} onCopied={onCopied} />
      {block.kind === 'heading' ? (
        <h3 className="pr-8 text-base font-semibold leading-snug text-foreground">
          {block.text}
        </h3>
      ) : block.kind === 'list' ? (
        <ul className="space-y-1 pr-8 text-[15px] leading-relaxed">
          {block.text.split('\n').map((line, i) => (
            <li key={i}>{line}</li>
          ))}
        </ul>
      ) : (
        <div className="whitespace-pre-wrap pr-8 text-[15px] leading-relaxed text-foreground/90">
          {block.text}
        </div>
      )}
    </div>
  )
}

function PieceDetail({
  piece,
  onBack,
  onCopied,
}: {
  piece: Piece
  onBack: () => void
  onCopied: () => void
}) {
  return (
    <div>
      <Button variant="ghost" size="sm" onClick={onBack} className="mb-4 -ml-2">
        <ArrowLeft className="mr-1.5 size-4" /> Back
      </Button>
      <p className="text-xs font-medium uppercase tracking-widest text-primary">
        {piece.category}
      </p>
      <h2 className="mt-1 text-2xl font-bold leading-tight">{piece.titleEn}</h2>
      {piece.titleMy && (
        <p className="mt-1.5 text-lg leading-snug text-muted-foreground">{piece.titleMy}</p>
      )}
      <div className="mt-6 space-y-2.5">
        {piece.blocks.map((pair, i) => (
          <div key={i} className="space-y-2.5">
            {pair.en && <BlockView block={pair.en} lang="EN" onCopied={onCopied} />}
            {pair.my && <BlockView block={pair.my} lang="MY" onCopied={onCopied} />}
          </div>
        ))}
      </div>
    </div>
  )
}

export default function App() {
  const [tab, setTab] = useState('Articles')
  const [openId, setOpenId] = useState<string | null>(null)
  const { toasts, showToast, dismissToast } = useAnimatedToastStack({ limit: 3 })

  const byCategory = useMemo(() => {
    const map: Record<string, Piece[]> = {}
    for (const c of CATEGORIES) map[c] = pieces.filter((p) => p.category === c)
    return map
  }, [])

  const openPiece = openId ? pieces.find((p) => p.id === openId) : undefined
  const copied = () =>
    showToast({ title: 'Copied', description: 'Paragraph copied to clipboard.', status: 'success', duration: 1600 })

  return (
    <div className="mx-auto min-h-screen w-full max-w-3xl px-4 pb-24 sm:px-6">
      <header className="pb-5 pt-8">
        <h1 className="text-3xl font-bold tracking-tight">
          UX Contents <span className="text-primary">Preview</span>
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">Batman UX — draft review</p>
      </header>

      <Tabs
        value={tab}
        onValueChange={(v) => {
          setTab(v)
          setOpenId(null)
        }}
      >
        <TabsList className="flex w-full flex-wrap justify-start gap-1">
          {CATEGORIES.map((c) => (
            <TabsTrigger key={c} value={c}>
              {c}
              <span className="ml-1.5 text-xs text-muted-foreground">
                {byCategory[c].length || ''}
              </span>
            </TabsTrigger>
          ))}
        </TabsList>

        {CATEGORIES.map((c) => (
          <TabsContent key={c} value={c} className="pt-5">
            {openPiece && openPiece.category === c ? (
              <PieceDetail
                piece={openPiece}
                onBack={() => setOpenId(null)}
                onCopied={copied}
              />
            ) : byCategory[c].length === 0 ? (
              <div className="rounded-xl border border-dashed border-border px-6 py-14 text-center">
                <BookOpenText className="mx-auto mb-3 size-8 text-primary" />
                <p className="font-medium">Nothing here yet</p>
                <p className="mx-auto mt-1 max-w-sm text-sm text-muted-foreground">
                  {c === 'Glossary'
                    ? 'The 30 glossary terms are being written. They will appear here as soon as the draft lands.'
                    : `No ${c.toLowerCase()} drafts yet. New drafts will appear here automatically.`}
                </p>
              </div>
            ) : (
              <div className="grid gap-3">
                {byCategory[c].map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setOpenId(p.id)}
                    className="text-left"
                  >
                    <Card className="transition hover:border-primary/50">
                      <CardHeader>
                        <CardTitle className="text-lg leading-snug">{p.titleEn}</CardTitle>
                        {p.titleMy && (
                          <CardDescription className="text-[15px] leading-snug">
                            {p.titleMy}
                          </CardDescription>
                        )}
                        <p className="pt-1 text-xs text-muted-foreground">
                          {p.category} · {p.blocks.length} blocks
                        </p>
                      </CardHeader>
                    </Card>
                  </button>
                ))}
              </div>
            )}
          </TabsContent>
        ))}
      </Tabs>

      <AnimatedToastStack toasts={toasts} onDismiss={dismissToast} position="bottom-right" fixed />
    </div>
  )
}
