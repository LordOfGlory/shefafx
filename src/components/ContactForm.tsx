import { useState, type FormEvent } from 'react'
import { course } from '../data/course'
import { sendInquiry, whatsappInquiry } from '../lib/capture'
import { choiceError, clean, emailError, messageError, nameError, oneLine, phoneError, type Errors } from '../lib/validate'
import FormField, { inputClass } from './FormField'
import { ErrorSummary, HandoffNote, Honeypot, SuccessNote } from './FormStatus'

const INTERESTS = [course.enrolmentLabel, 'Mentorship', 'General question'] as const

export default function ContactForm() {
  const [errors, setErrors] = useState<Errors>({})
  const [sent, setSent] = useState(false)
  const [handoff, setHandoff] = useState('')
  const [sending, setSending] = useState(false)

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const next: Errors = {}
    const name = nameError(data.get('name'))
    const email = emailError(data.get('email'))
    const phone = phoneError(data.get('phone'))
    const interest = choiceError(data.get('interest'), INTERESTS)
    const message = messageError(data.get('message'), true)
    if (name) next.name = name
    if (email) next.email = email
    if (phone) next.phone = phone
    if (interest) next.interest = interest
    if (message) next.message = message
    setErrors(next)
    setHandoff('')
    if (Object.keys(next).length) {
      const id = ({ name: 'c-name', email: 'c-email', phone: 'c-phone', interest: 'c-interest', message: 'c-message' } as Record<string, string>)[
        Object.keys(next)[0]
      ]
      if (id) document.getElementById(id)?.focus()
      return
    }
    if (oneLine(data.get('company_website'), 200)) {
      form.reset()
      setSent(true)
      return
    }
    const fullName = oneLine(data.get('name'), 80)
    const emailAddress = oneLine(data.get('email'), 120)
    const phoneNumber = oneLine(data.get('phone'), 20)
    const interestLabel = oneLine(data.get('interest'), 160)
    const note = clean(data.get('message'), 2000)
    form.reset()
    setSending(true)
    const ok = await sendInquiry(
      {
        Name: fullName,
        Email: emailAddress,
        Telephone: phoneNumber,
        Interest: interestLabel,
        Message: note,
        Source: 'Shefa Forex Academy contact form',
      },
      'Forex academy contact inquiry',
      emailAddress,
    )
    setSending(false)
    if (ok) {
      setSent(true)
      return
    }
    setHandoff(
      whatsappInquiry([
        'Hello Shefa Forex Academy,',
        `Name: ${fullName}`,
        `Email: ${emailAddress}`,
        phoneNumber ? `Phone: ${phoneNumber}` : '',
        `Interest: ${interestLabel}`,
        `Message: ${note}`,
      ]),
    )
  }

  if (sent) return <SuccessNote />

  return (
    <form onSubmit={onSubmit} noValidate className="relative grid gap-5">
      <ErrorSummary errors={errors} />
      {handoff && <HandoffNote href={handoff} />}
      <Honeypot />
      <FormField id="c-name" label="Full name" required error={errors.name}>
        <input id="c-name" name="name" type="text" autoComplete="name" maxLength={80} className={inputClass} aria-describedby={errors.name ? 'c-name-error' : undefined} aria-invalid={!!errors.name} />
      </FormField>
      <div className="grid gap-5 sm:grid-cols-2">
        <FormField id="c-email" label="Email address" required error={errors.email}>
          <input id="c-email" name="email" type="email" autoComplete="email" maxLength={120} inputMode="email" className={inputClass} aria-describedby={errors.email ? 'c-email-error' : undefined} aria-invalid={!!errors.email} />
        </FormField>
        <FormField id="c-phone" label="Telephone number" error={errors.phone}>
          <input id="c-phone" name="phone" type="tel" autoComplete="tel" maxLength={20} inputMode="tel" className={inputClass} aria-describedby={errors.phone ? 'c-phone-error' : undefined} aria-invalid={!!errors.phone} />
        </FormField>
      </div>
      <FormField id="c-interest" label="Course of interest" error={errors.interest}>
        <select id="c-interest" name="interest" className={inputClass} aria-invalid={!!errors.interest}>
          {INTERESTS.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </FormField>
      <FormField id="c-message" label="Message" required error={errors.message}>
        <textarea id="c-message" name="message" rows={5} maxLength={2000} className={inputClass} aria-describedby={errors.message ? 'c-message-error' : undefined} aria-invalid={!!errors.message} />
      </FormField>
      <div>
        <button type="submit" disabled={sending} className="inline-flex min-h-12 items-center justify-center rounded-md bg-gold px-6 font-semibold text-white transition-colors hover:bg-[#2f54c7] disabled:opacity-60">
          {sending ? 'Sending…' : 'Send inquiry'}
        </button>
        <p className="mt-3 text-sm text-ink-muted">No payment is taken on this page.</p>
      </div>
    </form>
  )
}
