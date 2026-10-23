import { Link } from 'react-router-dom'
import { ArrowRight, Check, Clock, Wallet } from 'lucide-react'
import { course, modules } from '../data/course'
import { courseDurationText, courseFeeText } from '../config/academy'

export default function CourseCard() {
  return (
    <article className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="bg-navy px-6 py-7 text-white sm:px-8">
        <span className="inline-block rounded-full border border-gold/60 px-3 py-1 font-mono text-xs uppercase tracking-[0.12em] text-gold">
          {course.level}
        </span>
        <h3 className="mt-4 text-3xl font-semibold sm:text-4xl">{course.title}</h3>
        <p className="mt-3 max-w-2xl leading-relaxed text-slate-300">{course.description}</p>
        <p className="mt-5 inline-block border-l-2 border-gold pl-4 font-mono text-sm text-slate-100">{course.statement}</p>
      </div>

      <div className="grid gap-8 px-6 py-7 sm:px-8 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <h4 className="font-mono text-xs font-medium uppercase tracking-[0.14em] text-gold-deep">Key learning areas</h4>
          <ol className="mt-4 grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
            {modules.map((m) => (
              <li key={m.number} className="grid grid-cols-[2rem_1fr] text-sm leading-snug text-charcoal">
                <span className="font-mono text-gold-deep">M{m.number}</span>
                <span>{m.title}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="grid content-start gap-4 rounded-lg bg-mist p-5">
          <p className="flex gap-3 text-sm">
            <Wallet className="mt-0.5 h-5 w-5 shrink-0 text-gold-deep" aria-hidden="true" />
            <span>
              <strong className="block font-semibold text-navy">Course fee</strong>
              <span className="text-ink-muted">{courseFeeText()}</span>
            </span>
          </p>
          <p className="flex gap-3 text-sm">
            <Clock className="mt-0.5 h-5 w-5 shrink-0 text-gold-deep" aria-hidden="true" />
            <span>
              <strong className="block font-semibold text-navy">Duration</strong>
              <span className="text-ink-muted">{courseDurationText()}</span>
            </span>
          </p>
          <p className="flex gap-3 text-sm">
            <Check className="mt-0.5 h-5 w-5 shrink-0 text-gold-deep" aria-hidden="true" />
            <span className="text-ink-muted">One payment covers every module, beginner to advanced.</span>
          </p>
          <div className="grid gap-3 pt-1">
            <Link
              to={`/courses/${course.slug}`}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-navy px-5 font-semibold text-white transition-colors hover:bg-charcoal"
            >
              View Course <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              to="/enroll"
              className="inline-flex min-h-12 items-center justify-center rounded-md bg-gold px-5 font-semibold text-navy transition-colors hover:bg-[#e2c15a]"
            >
              Express Enrollment Interest
            </Link>
          </div>
        </div>
      </div>
    </article>
  )
}
