import { useState } from 'react'
import { Copy, Mail, TriangleAlert } from 'lucide-react'
import { hasEmail, academy } from '../config/academy'

interface Props {
  text: string
}

/** Shown after a form is submitted. Explains what happened and offers the message to copy. */
export default function PreparedMessage({ text }: Props) {
  const [status, setStatus] = useState('')

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setStatus('Message copied.')
    } catch {
      setStatus('Select the text and copy it manually.')
    }
  }

  return (
    <div className="mt-8 rounded-lg border border-slate-200 bg-mist p-5" aria-live="polite">
      {hasEmail() ? (
        <p className="flex gap-3 text-sm leading-relaxed text-charcoal">
          <Mail className="mt-0.5 h-5 w-5 shrink-0 text-gold-deep" aria-hidden="true" />
          <span>
            Your email application should now open with this message addressed to {academy.contact.email}. Nothing has been
            sent yet. Press send in your email application to deliver it. If nothing opened, copy the message below and
            email it yourself.
          </span>
        </p>
      ) : (
        <p className="flex gap-3 text-sm leading-relaxed text-charcoal">
          <TriangleAlert className="mt-0.5 h-5 w-5 shrink-0 text-gold-deep" aria-hidden="true" />
          <span>
            The academy&rsquo;s email address has not been added to this website yet, so no email could be opened. Your
            message is prepared below. Copy it and send it to the academy once contact details are published.
          </span>
        </p>
      )}
      <label htmlFor="prepared-text" className="sr-only">
        Prepared message
      </label>
      <textarea
        id="prepared-text"
        readOnly
        value={text}
        rows={9}
        className="mt-4 w-full rounded-md border border-slate-300 bg-white p-3 font-mono text-sm text-charcoal"
      />
      <div className="mt-3 flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={copy}
          className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-navy hover:border-navy"
        >
          <Copy className="h-4 w-4" aria-hidden="true" />
          Copy message
        </button>
        {status && <span className="text-sm text-ink-muted">{status}</span>}
      </div>
    </div>
  )
}
