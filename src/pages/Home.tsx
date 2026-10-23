import { Link } from 'react-router-dom'
import { Brain, Layers, RefreshCw, ShieldCheck, Target, TrendingUp } from 'lucide-react'
import Hero from '../components/Hero'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import CourseCard from '../components/CourseCard'
import JourneySteps from '../components/JourneySteps'
import InstructorProfile from '../components/InstructorProfile'
import { usePageMeta } from '../hooks/usePageMeta'
import { academy } from '../config/academy'
import { course } from '../data/course'

const features = [
  { icon: Layers, title: 'Structured Learning', text: 'Nine modules in a fixed order, so each topic builds on the one before it.' },
  { icon: Target, title: 'Practical Trading Education', text: 'Lessons are built around chart analysis and worked demonstrations, not theory alone.' },
  { icon: ShieldCheck, title: 'Risk Management', text: 'Position sizing and capital protection are taught as core skills, not an afterthought.' },
  { icon: Brain, title: 'Trading Psychology', text: 'Learn to manage losses, avoid overtrading and keep a journal you can learn from.' },
  { icon: TrendingUp, title: 'Technical Analysis', text: 'Market structure, price action, and ICT and Smart Money Concepts studied in depth.' },
  { icon: RefreshCw, title: 'Continuous Learning', text: 'A review habit and a written trading plan that keep your development going after the course.' },
]

export default function Home() {
  usePageMeta('', 'Shefa Forex Academy in Kampala, Uganda offers one complete forex trading course covering beginner, intermediate and advanced topics. One course. One payment. All levels included.')

  return (
    <>
      <Hero />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
            <SectionHeading eyebrow="The academy" title={`Welcome to ${academy.name}`} />
            <div className="grid gap-5 text-lg leading-relaxed text-ink-muted">
              <p>
                {academy.name} is a forex trading education academy based in {academy.location}. It teaches beginners, traders
                with some experience, and advanced traders who want to study price action and ICT and Smart Money Concepts.
              </p>
              <p>
                Students learn how the market works, how to read charts, how to build and test a strategy, and how to protect
                their capital and manage their emotions while they trade.
              </p>
              <p>
                Structure matters. Trading information online is scattered and often contradictory. A single course, taught in
                a clear order, lets you build each skill on a solid base instead of guessing what to learn next.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="bg-mist">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
          <Reveal>
            <SectionHeading eyebrow="Why choose us" title={`Why choose ${academy.name}`} />
          </Reveal>
          <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <Reveal key={f.title} className="bg-white">
                <div className="h-full p-7">
                  <f.icon className="h-7 w-7 text-gold-deep" aria-hidden="true" />
                  <h3 className="mt-4 text-xl font-semibold text-navy">{f.title}</h3>
                  <p className="mt-2 leading-relaxed text-ink-muted">{f.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <Reveal>
          <SectionHeading
            eyebrow="The course"
            title="One Complete Forex Trading Journey"
            text="From understanding the forex market to developing advanced trading strategies, Shefa Forex Trading Mastery takes you through a structured learning journey covering beginner, intermediate, and advanced trading concepts."
          />
          <p className="mt-6 inline-block border-l-4 border-gold pl-4 font-display text-2xl font-semibold text-navy">{course.statement}</p>
        </Reveal>
        <Reveal className="mt-10">
          <CourseCard />
        </Reveal>
      </section>

      <section className="bg-navy">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
          <Reveal>
            <SectionHeading
              tone="dark"
              eyebrow="Learning journey"
              title="The path you follow inside the course"
              text="You move through these stages in order. They are all part of the same enrolment."
            />
            <div className="mt-10">
              <JourneySteps tone="dark" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <Reveal>
          <SectionHeading eyebrow="Your instructor" title="Learn from your instructor" />
          <div className="mt-10">
            <InstructorProfile />
          </div>
        </Reveal>
      </section>

      <section className="border-t border-slate-200 bg-mist">
        <div className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6">
          <Reveal>
            <h2 className="mx-auto max-w-2xl text-3xl font-semibold text-navy sm:text-4xl">Ready to start your forex education?</h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-ink-muted">
              Explore the course, ask the academy a question, or tell us you are interested in enrolling.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link to="/courses" className="inline-flex min-h-12 items-center rounded-md bg-navy px-6 font-semibold text-white hover:bg-charcoal">
                Explore the course
              </Link>
              <Link to="/contact" className="inline-flex min-h-12 items-center rounded-md border border-navy px-6 font-semibold text-navy hover:bg-white">
                Contact the academy
              </Link>
              <Link to="/enroll" className="inline-flex min-h-12 items-center rounded-md bg-gold px-6 font-semibold text-navy hover:bg-[#e2c15a]">
                Express enrollment interest
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
