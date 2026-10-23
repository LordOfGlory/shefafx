import { ArrowRight } from 'lucide-react'
import { course } from '../data/course'

/** The progressive learning path inside the single course. Steps are not separate purchases. */
export default function JourneySteps({ tone = 'light' }: { tone?: 'light' | 'dark' }) {
  const dark = tone === 'dark'
  return (
    <ol className="flex flex-wrap items-stretch gap-x-2 gap-y-3">
      {course.journey.map((step, i) => (
        <li key={step} className="flex items-center gap-2">
          <span
            className={`rounded-md border px-4 py-3 text-sm font-semibold ${
              dark ? 'border-white/20 bg-white/5 text-white' : 'border-slate-200 bg-white text-navy'
            }`}
          >
            <span className={`mr-2 font-mono text-xs ${dark ? 'text-gold' : 'text-gold-deep'}`}>{i + 1}</span>
            {step}
          </span>
          {i < course.journey.length - 1 && (
            <ArrowRight className={`h-4 w-4 shrink-0 ${dark ? 'text-gold' : 'text-gold-deep'}`} aria-hidden="true" />
          )}
        </li>
      ))}
    </ol>
  )
}
