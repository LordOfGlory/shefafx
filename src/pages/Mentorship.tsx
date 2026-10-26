import { Link } from 'react-router-dom'
import { Check } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import { usePageMeta } from '../hooks/usePageMeta'

const objectives = [
  'Apply what you study to your own charts with guidance.',
  'Build a repeatable analysis routine and review it regularly.',
  'Strengthen risk management and trading discipline.',
  'Understand your own trading habits through journal review.',
]
const suitable = [
  'Students who want guided practice alongside their studies.',
  'Traders who want feedback on their analysis and decisions.',
  'Anyone who wants a more structured way to keep learning.',
]
const topics = [
  'Practical market analysis',
  'Market structure and price action',
  'ICT and Smart Money Concepts in practice',
  'Risk management and position sizing',
  'Trading psychology and journaling',
  'Reviewing and improving a trading plan',
]

function List({ items }: { items: string[] }) {
  return (
    <ul className="mt-6 grid gap-3">
      {items.map((i) => (
        <li key={i} className="flex gap-3 text-ink-muted">
          <Check className="mt-1 h-4 w-4 shrink-0 text-gold-deep" aria-hidden="true" />
          {i}
        </li>
      ))}
    </ul>
  )
}

export default function Mentorship() {
  usePageMeta('Mentorship', 'Forex mentorship at Shefa Forex Academy: structured learning, practical market analysis and continued trading education. Contact the academy for mentorship information.')
  return (
    <>
      <PageHeader
        eyebrow="Mentorship"
        title="Guided learning beyond the lesson"
        text="Mentorship is an opportunity for structured learning, practical market analysis and continued trading education."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <Reveal>
          <SectionHeading
            eyebrow="Overview"
            title="What mentorship offers"
            text="Mentorship supports your trading education with practical discussion of charts, analysis and decisions, in the same disciplined, risk-first spirit as the academy's course."
          />
        </Reveal>
        <div className="mt-12 grid gap-12 md:grid-cols-2">
          <Reveal>
            <h2 className="text-2xl font-semibold text-navy">Learning objectives</h2>
            <List items={objectives} />
          </Reveal>
          <Reveal>
            <h2 className="text-2xl font-semibold text-navy">Who it is suitable for</h2>
            <List items={suitable} />
          </Reveal>
        </div>
      </section>

      <section className="bg-mist">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 lg:py-20">
          <Reveal>
            <h2 className="text-2xl font-semibold text-navy">Topics covered</h2>
            <List items={topics} />
          </Reveal>
          <Reveal>
            <h2 className="text-2xl font-semibold text-navy">Learning format</h2>
            <p className="mt-6 leading-relaxed text-ink-muted">
              Mentorship focuses on practical market analysis, review of your own trading journal and plan, and continued
              education. The academy confirms the format, schedule and availability when you get in touch.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-navy">
        <div className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6">
          <Reveal>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">Mentorship enquiries</h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-slate-300">Contact the academy for mentorship information.</p>
            <Link to="/contact" className="mt-8 inline-flex min-h-12 items-center rounded-md bg-gold px-7 font-semibold text-white hover:bg-[#2f54c7]">
              Contact the academy
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
