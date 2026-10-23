import { UserRound } from 'lucide-react'
import { academy, instructorConfigured } from '../config/academy'

/** Reads the instructor from src/config/academy.ts. Shows a clearly marked placeholder until it is filled in. */
export default function InstructorProfile() {
  const ok = instructorConfigured()
  const { name, title, bio, photo } = academy.instructor
  return (
    <div className="grid gap-6 rounded-xl border border-slate-200 bg-white p-6 sm:grid-cols-[auto_1fr] sm:p-8">
      <div className="grid h-28 w-28 place-items-center overflow-hidden rounded-full bg-mist text-slate-400">
        {ok && photo ? (
          <img src={photo} alt={`Portrait of ${name}`} className="h-full w-full object-cover" />
        ) : (
          <UserRound className="h-12 w-12" aria-hidden="true" />
        )}
      </div>
      <div>
        {ok ? (
          <>
            <h3 className="text-2xl font-semibold text-navy">{name}</h3>
            {title && <p className="mt-1 font-mono text-xs uppercase tracking-[0.14em] text-gold-deep">{title}</p>}
            {bio && <p className="mt-4 leading-relaxed text-ink-muted">{bio}</p>}
          </>
        ) : (
          <>
            <p className="inline-block rounded border border-dashed border-gold-deep px-2 py-1 font-mono text-xs uppercase tracking-[0.12em] text-gold-deep">
              Placeholder
            </p>
            <h3 className="mt-3 text-2xl font-semibold text-navy">Instructor profile to be added</h3>
            <p className="mt-3 leading-relaxed text-ink-muted">
              The academy&rsquo;s instructor name, background and teaching experience will appear here. To publish them, edit the
              instructor section in <code className="rounded bg-mist px-1.5 py-0.5 font-mono text-sm">src/config/academy.ts</code>.
            </p>
          </>
        )}
      </div>
    </div>
  )
}
