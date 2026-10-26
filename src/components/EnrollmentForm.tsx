import { useState, type FormEvent } from 'react'
import { course } from '../data/course'
import { sendInquiry } from '../lib/capture'
import { choiceError, clean, emailError, messageError, nameError, oneLine, phoneError, type Errors } from '../lib/validate'
import FormField, { inputClass } from './FormField'
import { ErrorSummary, FailNote, Honeypot, SuccessNote } from './FormStatus'

const EXPERIENCE = ['Complete beginner', 'Some experience', 'Experienced trader'] as const
const METHODS = ['Online', 'In person in Kampala', 'No preference'] as const

export default function EnrollmentForm() {
  const [errors, setErrors] = useState<Errors>({})
  const [sent, setSent] = useState(false)
  const [failed, setFailed] = useState(false)
  const [sending, setSending] = useState(false)

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const next: Errors = {}
    const name = nameError(data.get('name'))
    const email = emailError(data.get('email'))
    const phone = phoneError(data.get('phone'))
    const experience = choiceError(data.get('experience'), EXPERIENCE)
    const method = choiceError(data.get('method'), METHODS)
    const message = messageError(data.get('message'), false)
    if (name) next.name = name
    if (email) next.email = email
    if (phone) next.phone = phone
    if (experience) next.experience = experience
    if (method) next.method = method
    if (message) next.message = message
    setErrors(next)
    setFailed(false)
    if (Object.keys(next).length) {
      const id = ({ name: 'e-name', email: 'e-email', phone: 'e-phone', experience: 'e-experience', method: 'e-method', message: 'e-message' } as Record<string, string>)[
        Object.keys(next)[0]
      ]
      if (id) document.getElementById(id)?.focus()
      return
    }
    if (oneLine(data.get('company_website'), 200)) {
      setSent(true)
      return
    }
    setSending(true)
    const ok = await sendInquiry(
      {
        Name: oneLine(data.get('name'), 80),
        Email: oneLine(data.get('email'), 120),
        Telephone: oneLine(data.get('phone'), 20),
        Course: course.enrolmentLabel,
        Experience: oneLine(data.get('experience'), 80),
        'Preferred method': oneLine(data.get('method'), 80),
        Message: clean(data.get('message'), 2000),
        Source: 'Shefa Forex Academy enrollment form',
      },
      'Forex academy enrollment inquiry',
      oneLine(data.get('email'), 120),
    )
    setSending(false)
    if (ok) setSent(true)
    else setFailed(true)
  }

  if (sent) return <SuccessNote />

  return (
    <form onSubmit={onSubmit} noValidate className="relative grid gap-5">
      <div className="rounded-lg border border-gold/60 bg-[#eef2fc] p-4">
        <p className="font-mono text-xs font-medium uppercase tracking-[0.14em] text-gold-deep">Course</p>
        <p className="mt-1 text-lg font-semibold text-navy">{course.enrolmentLabel}</p>
        <p className="mt-1 text-sm text-ink-muted">One enrolment covers the complete course. {course.statement}</p>
      </div>
      <ErrorSummary errors={errors} />
      {failed && <FailNote />}
      <Honeypot />
      <FormField id="e-name" label="Full name" required error={errors.name}>
        <input id="e-name" name="name" type="text" autoComplete="name" maxLength={80} className={inputClass} aria-describedby={errors.name ? 'e-name-error' : undefined} aria-invalid={!!errors.name} />
      </FormField>
      <div className="grid gap-5 sm:grid-cols-2">
        <FormField id="e-email" label="Email" required error={errors.email}>
          <input id="e-email" name="email" type="email" autoComplete="email" maxLength={120} inputMode="email" className={inputClass} aria-describedby={errors.email ? 'e-email-error' : undefined} aria-invalid={!!errors.email} />
        </FormField>
        <FormField id="e-phone" label="Phone number" error={errors.phone}>
          <input id="e-phone" name="phone" type="tel" autoComplete="tel" maxLength={20} inputMode="tel" className={inputClass} aria-describedby={errors.phone ? 'e-phone-error' : undefined} aria-invalid={!!errors.phone} />
        </FormField>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <FormField id="e-experience" label="Your current forex experience" hint="This only helps the academy welcome you. Every level is covered by the one enrolment." error={errors.experience}>
          <select id="e-experience" name="experience" className={inputClass} aria-invalid={!!errors.experience}>
            {EXPERIENCE.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </FormField>
        <FormField id="e-method" label="Preferred learning method" hint="The academy confirms the available formats when it replies." error={errors.method}>
          <select id="e-method" name="method" className={inputClass} aria-invalid={!!errors.method}>
            {METHODS.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </FormField>
      </div>
      <FormField id="e-message" label="Additional message" error={errors.message}>
        <textarea id="e-message" name="message" rows={4} maxLength={2000} className={inputClass} aria-describedby={errors.message ? 'e-message-error' : undefined} aria-invalid={!!errors.message} />
      </FormField>
      <div>
        <button type="submit" disabled={sending} className="inline-flex min-h-12 items-center justify-center rounded-md bg-gold px-6 font-semibold text-white transition-colors hover:bg-[#2f54c7] disabled:opacity-60">
          {sending ? 'Sending…' : 'Send enrollment request'}
        </button>
        <p className="mt-3 text-sm text-ink-muted">No payment is taken here. A place is confirmed only after the academy replies.</p>
      </div>
    </form>
  )
}
