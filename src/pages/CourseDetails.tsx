import { Link, useParams } from 'react-router-dom'
import { Check, Clock, Wallet } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import JourneySteps from '../components/JourneySteps'
import NotFound from './NotFound'
import { usePageMeta } from '../hooks/usePageMeta'
import { course, modules } from '../data/course'
import { courseDurationText, courseFeeText } from '../config/academy'

export default function CourseDetails() {
  const { slug } = useParams()
  usePageMeta(
    `${course.title} Course Details`,
    'The complete Shefa Forex Trading Mastery curriculum: nine progressive modules from forex foundations to professional trading development, included in one enrolment.',
  )
  if (slug !== course.slug) return <NotFound />

  return (
    <>
      <PageHeader eyebrow={`Course · ${course.level}`} title={course.title} text={course.description}>
        <p className="mt-6 inline-block border-l-2 border-gold pl-4 font-mono text-sm text-slate-100">{course.statement}</p>
        <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-4 text-sm">
          <div className="flex items-start gap-3">
            <Wallet className="mt-0.5 h-5 w-5 text-gold" aria-hidden="true" />
            <div>
              <dt className="font-semibold text-white">Course fee</dt>
              <dd className="text-slate-300">{courseFeeText()}</dd>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Clock className="mt-0.5 h-5 w-5 text-gold" aria-hidden="true" />
            <div>
              <dt className="font-semibold text-white">Duration</dt>
              <dd className="text-slate-300">{courseDurationText()}</dd>
            </div>
          </div>
        </dl>
        <Link to="/enroll" className="mt-8 inline-flex min-h-12 items-center rounded-md bg-gold px-6 font-semibold text-white hover:bg-[#2f54c7]">
          Enroll in the complete course
        </Link>
      </PageHeader>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <Reveal>
          <SectionHeading
            eyebrow="How enrolment works"
            title="Enrol once for the complete course"
            text="Your single enrolment gives you every module below, from beginner to advanced. There are no separate courses to buy and no level-specific fees. You progress through the modules in sequence."
          />
          <div className="mt-8">
            <JourneySteps />
          </div>
        </Reveal>
      </section>

      <section className="bg-mist">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
          <Reveal>
            <SectionHeading eyebrow="Curriculum" title="Nine progressive modules" text="Study the modules in order. Each one builds on the last." />
          </Reveal>
          <ol className="mt-10 grid gap-5">
            {modules.map((m) => (
              <Reveal key={m.number}>
                <li className="grid gap-4 rounded-lg border border-slate-200 bg-white p-6 sm:grid-cols-[5rem_1fr] sm:p-7">
                  <div>
                    <p className="font-mono text-3xl font-medium text-gold-deep">M{m.number}</p>
                    <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.12em] text-ink-muted">{m.stage} stage</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-navy">{m.title}</h3>
                    <p className="mt-1.5 text-ink-muted">{m.summary}</p>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {m.topics.map((t) => (
                        <li key={t} className="rounded-full bg-mist px-3 py-1 text-sm text-charcoal">
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 lg:py-20">
        <Reveal>
          <h2 className="text-2xl font-semibold text-navy sm:text-3xl">Learning objectives</h2>
          <ul className="mt-6 grid gap-3">
            {course.objectives.map((o) => (
              <li key={o} className="flex gap-3 text-ink-muted">
                <Check className="mt-1 h-4 w-4 shrink-0 text-gold-deep" aria-hidden="true" />
                {o}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal>
          <h2 className="text-2xl font-semibold text-navy sm:text-3xl">Who should enrol</h2>
          <ul className="mt-6 grid gap-3">
            {course.whoShouldEnrol.map((o) => (
              <li key={o} className="flex gap-3 text-ink-muted">
                <Check className="mt-1 h-4 w-4 shrink-0 text-gold-deep" aria-hidden="true" />
                {o}
              </li>
            ))}
          </ul>
          <h2 className="mt-12 text-2xl font-semibold text-navy sm:text-3xl">Skills you will develop</h2>
          <ul className="mt-6 flex flex-wrap gap-2">
            {course.skills.map((s) => (
              <li key={s} className="rounded-full border border-slate-300 px-3.5 py-1.5 text-sm text-charcoal">
                {s}
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      <section className="bg-navy">
        <div className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6">
          <Reveal>
            <h2 className="mx-auto max-w-2xl text-3xl font-semibold text-white sm:text-4xl">One enrolment. The complete course.</h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-slate-300">
              Tell the academy you are interested and it will reply with the fee, schedule and next steps.
            </p>
            <Link to="/enroll" className="mt-8 inline-flex min-h-12 items-center rounded-md bg-gold px-7 font-semibold text-white hover:bg-[#2f54c7]">
              Express Enrollment Interest
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
