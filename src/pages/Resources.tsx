import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import { usePageMeta } from '../hooks/usePageMeta'
import { resourceCategories, resources, type ResourceCategory } from '../data/resources'

export default function Resources() {
  usePageMeta('Forex Education Resources', 'Free educational articles from Shefa Forex Academy on forex terminology, risk management, trading psychology, market structure, technical analysis and trading discipline.')
  const [category, setCategory] = useState<ResourceCategory | 'All'>('All')
  const [open, setOpen] = useState<string | null>(null)
  const shown = category === 'All' ? resources : resources.filter((r) => r.category === category)

  const pill = (active: boolean) =>
    `rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
      active ? 'border-navy bg-navy text-white' : 'border-slate-300 bg-white text-charcoal hover:border-navy'
    }`

  return (
    <>
      <PageHeader eyebrow="Resources" title="Learn the language of the market" text="Short educational articles on the ideas every trader needs. More are added over time." />
      <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:py-20">
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter articles by category">
          <button type="button" className={pill(category === 'All')} aria-pressed={category === 'All'} onClick={() => setCategory('All')}>
            All
          </button>
          {resourceCategories.map((c) => (
            <button key={c} type="button" className={pill(category === c)} aria-pressed={category === c} onClick={() => setCategory(c)}>
              {c}
            </button>
          ))}
        </div>

        <ul className="mt-10 grid gap-4">
          {shown.map((r) => {
            const isOpen = open === r.slug
            return (
              <li key={r.slug} className="rounded-lg border border-slate-200 bg-white">
                <h2 className="text-xl font-semibold text-navy">
                  <button
                    type="button"
                    className="flex w-full items-start justify-between gap-4 p-6 text-left"
                    aria-expanded={isOpen}
                    aria-controls={`art-${r.slug}`}
                    onClick={() => setOpen(isOpen ? null : r.slug)}
                  >
                    <span>
                      <span className="block font-mono text-xs font-medium uppercase tracking-[0.12em] text-gold-deep">{r.category}</span>
                      <span className="mt-2 block">{r.title}</span>
                      <span className="mt-2 block font-sans text-base font-normal text-ink-muted">{r.description}</span>
                    </span>
                    <ChevronDown className={`mt-1 h-5 w-5 shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
                  </button>
                </h2>
                {isOpen && (
                  <div id={`art-${r.slug}`} className="grid gap-4 border-t border-slate-200 px-6 pb-7 pt-5 leading-relaxed text-charcoal">
                    {r.paragraphs.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                    <p className="text-sm text-ink-muted">Educational content only. It is not investment advice.</p>
                  </div>
                )}
              </li>
            )
          })}
        </ul>
      </section>
    </>
  )
}
