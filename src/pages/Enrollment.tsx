import PageHeader from '../components/PageHeader'
import EnrollmentForm from '../components/EnrollmentForm'
import { usePageMeta } from '../hooks/usePageMeta'
import { courseDurationText, courseFeeText } from '../config/academy'
import { course } from '../data/course'

const steps = [
  'Send the form. The academy receives it by email.',
  'The academy replies with the fee, the schedule and the enrolment steps.',
  'A place is confirmed only after that reply. Nothing is charged on this page.',
]

export default function Enrollment() {
  usePageMeta('Enrollment Interest', 'Tell Shefa Forex Academy you are interested in the complete Shefa Forex Trading Mastery course, beginner to advanced.')
  return (
    <>
      <PageHeader eyebrow="Enrollment interest" title="Express your interest in the complete course" text={`${course.statement} There is one enrolment for the whole programme.`} />
      <section className="mx-auto grid max-w-6xl gap-14 px-4 py-14 sm:px-6 lg:grid-cols-[1.4fr_1fr] lg:py-20">
        <div>
          <EnrollmentForm />
        </div>
        <aside className="grid content-start gap-8">
          <div className="rounded-lg bg-mist p-6">
            <h2 className="text-xl font-semibold text-navy">The course</h2>
            <p className="mt-2 font-semibold text-charcoal">{course.title}</p>
            <p className="text-sm text-ink-muted">{course.level}</p>
            <dl className="mt-4 grid gap-3 text-sm">
              <div>
                <dt className="font-semibold text-navy">Course fee</dt>
                <dd className="text-ink-muted">{courseFeeText()}</dd>
              </div>
              <div>
                <dt className="font-semibold text-navy">Duration</dt>
                <dd className="text-ink-muted">{courseDurationText()}</dd>
              </div>
            </dl>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-navy">What happens next</h2>
            <ol className="mt-4 grid gap-3">
              {steps.map((s, i) => (
                <li key={s} className="grid grid-cols-[1.75rem_1fr] gap-2 text-ink-muted">
                  <span className="font-mono text-gold-deep">{i + 1}</span>
                  {s}
                </li>
              ))}
            </ol>
            <p className="mt-5 text-sm text-ink-muted">No payment is taken on this website, and submitting the form does not enrol you.</p>
          </div>
        </aside>
      </section>
    </>
  )
}
