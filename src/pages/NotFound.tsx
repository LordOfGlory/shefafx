import { Link } from 'react-router-dom'
import { usePageMeta } from '../hooks/usePageMeta'

export default function NotFound() {
  usePageMeta('Page not found', 'The page you are looking for could not be found.')
  return (
    <section className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6">
      <p className="font-mono text-xs uppercase tracking-[0.16em] text-gold-deep">Page not found</p>
      <h1 className="mt-4 text-4xl font-semibold text-navy">We could not find that page</h1>
      <p className="mt-4 text-lg text-ink-muted">The link may be out of date. Try the home page or the course page.</p>
      <div className="mt-8 flex justify-center gap-3">
        <Link to="/" className="rounded-md bg-navy px-6 py-3 font-semibold text-white hover:bg-charcoal">Go home</Link>
        <Link to="/courses" className="rounded-md border border-navy px-6 py-3 font-semibold text-navy hover:bg-mist">View the course</Link>
      </div>
    </section>
  )
}
