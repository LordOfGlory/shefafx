import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import ChartIllustration, { chartLegend } from './ChartIllustration'
import { course } from '../data/course'

export default function Hero() {
  return (
    <section
      className="bg-navy text-white"
      style={{
        backgroundImage:
          'linear-gradient(rgba(120,150,210,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(120,150,210,.08) 1px, transparent 1px)',
        backgroundSize: '56px 56px',
      }}
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:py-20">
        <div className="hero-in min-w-0">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-gold">
            Forex trading education &middot; Kampala, Uganda
          </p>
          <h1 className="mt-5 text-4xl font-semibold leading-[1.08] sm:text-5xl lg:text-6xl">
            Master the Forex Market with Confidence
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
            Develop your trading knowledge through structured forex education, practical chart analysis, risk management, and
            disciplined trading strategies.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/courses"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-gold px-6 font-semibold text-navy transition-colors hover:bg-[#e2c15a]"
            >
              Explore Courses <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              to="/enroll"
              className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/30 px-6 font-semibold text-white transition-colors hover:border-white"
            >
              Join Shefa Forex Academy
            </Link>
          </div>
          <p className="mt-8 inline-block border-l-2 border-gold pl-4 font-mono text-sm text-slate-200">{course.statement}</p>
        </div>

        <div className="hero-in-2 min-w-0 rounded-lg border border-white/10 bg-[#0e1a33] p-5">
          <div className="mb-2 flex justify-between gap-3 font-mono text-[11px] uppercase tracking-[0.08em] text-slate-400">
            <span className="text-slate-200">Teaching illustration</span>
            <span>Bearish model</span>
          </div>
          <ChartIllustration />
          <ol className="mt-4 grid gap-2">
            {chartLegend.map(([title, text], i) => (
              <li key={title} className="grid grid-cols-[22px_1fr] gap-3 text-[13px] leading-snug text-slate-400">
                <span className="grid h-[22px] w-[22px] place-items-center rounded-full bg-white font-mono text-[11px] font-semibold text-navy">
                  {i + 1}
                </span>
                <span>
                  <strong className="font-semibold text-slate-200">{title}.</strong> {text}
                </span>
              </li>
            ))}
          </ol>
          <p className="mt-3 text-xs text-slate-500">Drawn for teaching. It is not a live chart, a trading result or a trade recommendation.</p>
        </div>
      </div>
    </section>
  )
}
