import { useState, type FormEvent } from 'react'
import { academy, hasEmail } from '../config/academy'
import { course } from '../data/course'
import { buildMailto, EMAIL_PATTERN, type Errors } from '../lib/mailto'
import FormField, { inputClass } from './FormField'
import PreparedMessage from './PreparedMessage'

const INTERESTS = [course.enrolmentLabel, 'Mentorship', 'General question']

export default function ContactForm() {
  const [errors, setErrors] = useState<Errors>({})
  const [prepared, setPrepared] = useState('')

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const f = new FormData(e.currentTarget)
    const name = String(f.get('name') ?? '').trim()
    const email = String(f.get('email') ?? '').trim()
    const phone = String(f.get('phone') ?? '').trim()
    const interest = String(f.get('interest') ?? '')
    const message = String(f.get('message') ?? '').trim()

    const next: Errors = {}
    if (!name) next.name = 'Enter your full name.'
    if (!email) next.email = 'Enter your email address.'
    else if (!EMAIL_PATTERN.test(email)) next.email = 'Enter a valid email address, such as name@example.com.'
    if (!message) next.message = 'Write a short message.'
    setErrors(next)
    if (Object.keys(next).length) return

    const subject = `Inquiry about ${interest}`
    const body = [
      `Hello ${academy.name},`,
      '',
      message,
      '',
      `Interested in: ${interest}`,
      `Name: ${name}`,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : '',
    ]
      .filter((line, i, arr) => line !== '' || arr[i - 1] !== '')
      .join('\n')

    setPrepared(`Subject: ${subject}\n\n${body}`)
    if (hasEmail()) window.location.href = buildMailto(academy.contact.email, subject, body)
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-5">
      <FormField id="c-name" label="Full name" required error={errors.name}>
        <input id="c-name" name="name" type="text" autoComplete="name" className={inputClass} aria-describedby={errors.name ? 'c-name-error' : undefined} aria-invalid={!!errors.name} />
      </FormField>
      <div className="grid gap-5 sm:grid-cols-2">
        <FormField id="c-email" label="Email address" required error={errors.email}>
          <input id="c-email" name="email" type="email" autoComplete="email" className={inputClass} aria-describedby={errors.email ? 'c-email-error' : undefined} aria-invalid={!!errors.email} />
        </FormField>
        <FormField id="c-phone" label="Telephone number">
          <input id="c-phone" name="phone" type="tel" autoComplete="tel" className={inputClass} />
        </FormField>
      </div>
      <FormField id="c-interest" label="Course of interest">
        <select id="c-interest" name="interest" className={inputClass}>
          {INTERESTS.map((i) => (
            <option key={i}>{i}</option>
          ))}
        </select>
      </FormField>
      <FormField id="c-message" label="Message" required error={errors.message}>
        <textarea id="c-message" name="message" rows={5} className={inputClass} aria-describedby={errors.message ? 'c-message-error' : undefined} aria-invalid={!!errors.message} />
      </FormField>
      <div>
        <button type="submit" className="inline-flex min-h-12 items-center justify-center rounded-md bg-gold px-6 font-semibold text-white transition-colors hover:bg-[#2f54c7]">
          Prepare email
        </button>
        <p className="mt-3 text-sm text-ink-muted">
          This form does not send messages from the website. It opens your own email application with the message filled in,
          so you need an email application set up on your device.
        </p>
      </div>
      {prepared && <PreparedMessage text={prepared} />}
    </form>
  )
}
