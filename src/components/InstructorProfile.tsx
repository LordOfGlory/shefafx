import { UserRound } from 'lucide-react'
import { academy, instructorConfigured } from '../config/academy'

/** Renders nothing until an instructor name is set. */
export default function InstructorProfile() {
  if (!instructorConfigured()) return null
  const { name, title, bio, photo } = academy.instructor
  return (
    <div className="grid gap-6 rounded-xl border border-slate-200 bg-white p-6 sm:grid-cols-[auto_1fr] sm:p-8">
      <div className="grid h-28 w-28 place-items-center overflow-hidden rounded-full bg-mist text-slate-400">
        {photo ? (
          <img src={photo} alt={`Portrait of ${name}`} className="h-full w-full object-cover" />
        ) : (
          <UserRound className="h-12 w-12" aria-hidden="true" />
        )}
      </div>
      <div>
        <h3 className="text-2xl font-semibold text-navy">{name}</h3>
        {title && <p className="mt-1 font-mono text-xs uppercase tracking-[0.14em] text-gold-deep">{title}</p>}
        {bio && <p className="mt-4 leading-relaxed text-ink-muted">{bio}</p>}
      </div>
    </div>
  )
}
