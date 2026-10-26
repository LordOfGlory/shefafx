import { useEffect, useRef } from 'react'
import { academy } from '../config/academy'
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

export function FailNote() {
  return (
    <div role="alert" className="rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
      The form could not be sent. Email {academy.contact.email} or WhatsApp {academy.contact.phone}.
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
