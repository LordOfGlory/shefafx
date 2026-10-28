import PageHeader from '../components/PageHeader'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import InstructorProfile from '../components/InstructorProfile'
import { instructorConfigured } from '../config/academy'
import { usePageMeta } from '../hooks/usePageMeta'
import { academy } from '../config/academy'

const values = [
  ['Discipline', 'Consistent habits matter more than any single trade.'],
  ['Integrity', 'We teach honestly and make no promises about profit.'],
  ['Excellence', 'Clear, careful teaching and well-organised material.'],
  ['Continuous learning', 'Markets change, and good traders keep studying.'],
  ['Responsibility', 'Risk is respected and capital is protected first.'],
  ['Practical education', 'Every idea is shown on real charts and applied.'],
]

const approach = [
  ['Theory', 'Each topic starts with a clear explanation of the idea and the rules for recognising it.'],
  ['Chart analysis', 'Concepts are marked up and discussed on charts so you see how they appear in the market.'],
  ['Practical demonstrations', 'Worked examples show how an idea turns into a trading decision.'],
  ['Risk management', 'Position sizing and stop placement are part of every strategy discussion.'],
  ['Trading psychology', 'Emotional discipline is taught alongside technical skill.'],
  ['Structured learning', 'One course in a fixed order, from the basics to professional development.'],
]

export default function About() {
  usePageMeta('About the Academy', 'Shefa Forex Academy is a forex education institution in Kampala, Uganda focused on practical education, disciplined risk management and responsible trading.')
  return (
    <>
      <PageHeader eyebrow="About the academy" title={`About ${academy.name}`} text={academy.tagline} />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
            <SectionHeading eyebrow="Who we are" title="A forex education academy in Kampala" />
            <div className="grid gap-5 text-lg leading-relaxed text-ink-muted">
              <p>
                {academy.name} is a forex trading education institution based in {academy.location}. We teach forex trading as a
                skill to be studied, practised and reviewed, not as a shortcut to quick money.
              </p>
              <p>
                We serve beginners starting from zero, traders who want to fill gaps in their knowledge, and advanced traders
                interested in a deeper study of price action. Everyone follows the same structured course.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="bg-mist">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 lg:py-20">
          <Reveal>
            <p className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-gold-deep">Our mission</p>
            <p className="mt-4 font-display text-2xl leading-snug text-navy">{academy.mission}</p>
          </Reveal>
          <Reveal>
            <p className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-gold-deep">Our vision</p>
            <p className="mt-4 font-display text-2xl leading-snug text-navy">{academy.vision}</p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <Reveal>
          <SectionHeading eyebrow="Our values" title="What we stand for" />
        </Reveal>
        <dl className="mt-10 grid gap-x-12 sm:grid-cols-2">
          {values.map(([t, d]) => (
            <Reveal key={t}>
              <div className="border-t border-slate-200 py-5">
                <dt className="font-display text-xl font-semibold text-navy">{t}</dt>
                <dd className="mt-1 text-ink-muted">{d}</dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </section>

      <section className="bg-navy">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
          <Reveal>
            <SectionHeading tone="dark" eyebrow="Our teaching approach" title="How we teach" text="Six elements shape every module of the course." />
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {approach.map(([t, d]) => (
              <Reveal key={t}>
                <div className="h-full rounded-lg border border-white/10 bg-white/5 p-6">
                  <h3 className="text-lg font-semibold text-white">{t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {instructorConfigured() && (
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <Reveal>
          <SectionHeading eyebrow="Instructor" title="Instructor profile" />
          <div className="mt-10">
            <InstructorProfile />
          </div>
        </Reveal>
      </section>
      )}
    </>
  )
}
