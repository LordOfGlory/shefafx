import PageHeader from '../components/PageHeader'
import CourseCard from '../components/CourseCard'
import Reveal from '../components/Reveal'
import { usePageMeta } from '../hooks/usePageMeta'
import { course } from '../data/course'

export default function Courses() {
  usePageMeta('Forex Trading Course', 'Shefa Forex Trading Mastery is one complete forex course, beginner to advanced, with one payment covering every module.')
  return (
    <>
      <PageHeader
        eyebrow="Courses"
        title="One course. Every level."
        text="Shefa Forex Academy offers a single comprehensive course. You enrol once and the complete curriculum, from beginner to advanced, is included."
      />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <Reveal>
          <CourseCard />
        </Reveal>
        <Reveal className="mt-12">
          <div className="grid gap-8 border-t border-slate-200 pt-10 md:grid-cols-3">
            <div>
              <h2 className="text-xl font-semibold text-navy">Enrol once</h2>
              <p className="mt-2 text-ink-muted">There is one enrolment for the whole programme. You do not choose a level to buy.</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-navy">All levels included</h2>
              <p className="mt-2 text-ink-muted">
                Intermediate and advanced modules are part of {course.title}. Nothing extra is needed to move on.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-navy">One payment</h2>
              <p className="mt-2 text-ink-muted">The course is a one-time payment. Contact the academy to confirm the fee and how to pay.</p>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  )
}
