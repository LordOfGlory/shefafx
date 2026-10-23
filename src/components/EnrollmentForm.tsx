import { useState, type FormEvent } from 'react'
import { academy, hasEmail } from '../config/academy'
import { course } from '../data/course'
import { buildMailto, EMAIL_PATTERN, type Errors } from '../lib/mailto'
import FormField, { inputClass } from './FormField'
import PreparedMessage from './PreparedMessage'

const EXPERIENCE = ['Complete beginner', 'Some experience', 'Experienced trader']
const METHODS = ['Online', 'In person in Kampala', 'No preference']

export default function EnrollmentForm() {
  const [errors, setErrors] = useState<Errors>({})
  const [prepared, setPrepared] = useState('')

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const f = new FormData(e.currentTarget)
    const name = String(f.get('name') ?? '').trim()
    const email = String(f.get('email') ?? '').trim()
    const phone = String(f.get('phone') ?? '').trim()
    const experience = String(f.get('experience') ?? '')
    const method = String(f.get('method') ?? '')
    const message = String(f.get('message') ?? '').trim()

    const next: Errors = {}
    if (!name) next.name = 'Enter your full name.'
    if (!email) next.email = 'Enter your email address.'
    else if (!EMAIL_PATTERN.test(email)) next.email = 'Enter a valid email address, such as name@example.com.'
    setErrors(next)
    if (Object.keys(next).length) return

    const subject = `Enrollment interest: ${course.title}`
    const body = [
      `Hello ${academy.name},`,
      '',
      `I am interested in enrolling in ${course.enrolmentLabel}.`,
      '',
      `Name: ${name}`,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : null,
      `Current forex experience: ${experience}`,
      `Preferred learning method: ${method}`,
      message ? `\nMessage:\n${message}` : null,
      '',
      'Please send me the course fee, schedule and enrolment steps.',
    ]
      .filter((line): line is string => line !== null)
      .join('\n')

    setPrepared(`Subject: ${subject}\n\n${body}`)
    if (hasEmail()) window.location.href = buildMailto(academy.contact.email, subject, body)
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-5">
      <div className="rounded-lg border border-gold/60 bg-[#fbf6e4] p-4">
        <p className="font-mono text-xs font-medium uppercase tracking-[0.14em] text-gold-deep">Course</p>
        <p className="mt-1 text-lg font-semibold text-navy">{course.enrolmentLabel}</p>
        <p className="mt-1 text-sm text-ink-muted">One enrolment covers the complete course. {course.statement}</p>
      </div>
      <FormField id="e-name" label="Full name" required error={errors.name}>
        <input id="e-name" name="name" type="text" autoComplete="name" className={inputClass} aria-describedby={errors.name ? 'e-name-error' : undefined} aria-invalid={!!errors.name} />
      </FormField>
      <div className="grid gap-5 sm:grid-cols-2">
        <FormField id="e-email" label="Email" required error={errors.email}>
          <input id="e-email" name="email" type="email" autoComplete="email" className={inputClass} aria-describedby={errors.email ? 'e-email-error' : undefined} aria-invalid={!!errors.email} />
        </FormField>
        <FormField id="e-phone" label="Phone number">
          <input id="e-phone" name="phone" type="tel" autoComplete="tel" className={inputClass} />
        </FormField>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <FormField id="e-experience" label="Your current forex experience" hint="This only helps the academy welcome you. Every level is covered by the one enrolment.">
          <select id="e-experience" name="experience" className={inputClass}>
            {EXPERIENCE.map((x) => (
              <option key={x}>{x}</option>
            ))}
          </select>
        </FormField>
        <FormField id="e-method" label="Preferred learning method" hint="The academy confirms the available formats when it replies.">
          <select id="e-method" name="method" className={inputClass}>
            {METHODS.map((x) => (
              <option key={x}>{x}</option>
            ))}
          </select>
        </FormField>
      </div>
      <FormField id="e-message" label="Additional message">
        <textarea id="e-message" name="message" rows={4} className={inputClass} />
      </FormField>
      <div>
        <button type="submit" className="inline-flex min-h-12 items-center justify-center rounded-md bg-gold px-6 font-semibold text-navy transition-colors hover:bg-[#e2c15a]">
          Prepare enrollment inquiry
        </button>
        <p className="mt-3 text-sm text-ink-muted">
          This form does not enrol you, create an account or take any payment. It prepares an inquiry in your own email
          application, so you need an email application set up on your device. Enrollment is only confirmed by the academy
          after it replies.
        </p>
      </div>
      {prepared && <PreparedMessage text={prepared} />}
    </form>
  )
}
