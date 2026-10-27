import { useEffect, useRef } from 'react'
import type { Errors } from '../lib/validate'

export function ErrorSummary({ errors }: { errors: Errors }) {
  if (!Object.keys(errors).length) return null
  return (
    <div role="alert" className="rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
      <p className="font-semibold">Please correct the following.</p>
      <ul className="mt-1 list-disc pl-5">
        {Object.entries(errors).map(([field, message]) => (
          <li key={field}>{message}</li>
        ))}
      </ul>
    </div>
  )
}

export function SuccessNote() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    ref.current?.scrollIntoView({ block: 'start' })
  }, [])
  return (
    <div ref={ref} id="inquiry-sent" role="status" className="scroll-mt-24 rounded-lg border border-[#c9d6f8] bg-[#eef2fc] px-5 py-5 text-navy">
      <p className="text-lg font-semibold">Your inquiry has been sent.</p>
      <p className="mt-2 text-sm leading-relaxed text-ink-muted">
        The academy will reply by email or WhatsApp. Nothing is charged on this page, and a place is confirmed only after the
        academy replies.
      </p>
    </div>
  )
}

export function HandoffNote({ href }: { href: string }) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    ref.current?.scrollIntoView({ block: 'start' })
  }, [])
  return (
    <div ref={ref} role="status" className="scroll-mt-24 rounded-lg border border-[#c9d6f8] bg-[#eef2fc] px-5 py-5 text-navy">
      <p className="font-semibold">The form has been cleared.</p>
      <p className="mt-2 text-sm leading-relaxed text-ink-muted">
        The email service did not accept it. Send the same inquiry on WhatsApp. Your details are already in the message.
      </p>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex min-h-12 items-center rounded-md bg-gold px-5 font-semibold text-white hover:bg-[#2f54c7]"
      >
        Open WhatsApp
      </a>
    </div>
  )
}

export function Honeypot() {
  return (
    <div className="hp" aria-hidden="true">
      <label htmlFor="company_website">Company website</label>
      <input id="company_website" name="company_website" type="text" tabIndex={-1} autoComplete="off" />
    </div>
  )
}
