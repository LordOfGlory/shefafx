const CONTROL = /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g

export type Errors = Record<string, string>

/** Drops invisible control characters and keeps the value within a hard limit. */
export function clean(value: unknown, max: number): string {
  return String(value ?? '')
    .replace(CONTROL, '')
    .replace(/\r\n/g, '\n')
    .trim()
    .slice(0, max)
}

export function oneLine(value: unknown, max: number): string {
  return clean(value, max).replace(/[\r\n\t]+/g, ' ').replace(/\s{2,}/g, ' ').trim()
}

export function nameError(raw: unknown): string | undefined {
  const v = oneLine(raw, 80)
  if (v.length < 2) return 'Enter your full name.'
  if (!/^[\p{L}][\p{L}\s.'-]{1,79}$/u.test(v)) return 'Use letters only in your name.'
}

export function emailError(raw: unknown): string | undefined {
  const v = oneLine(raw, 120)
  if (!v) return 'Enter your email address.'
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(v)) return 'Enter a valid email address.'
}

export function phoneError(raw: unknown): string | undefined {
  const v = oneLine(raw, 20)
  if (!v) return
  const digits = v.replace(/\D/g, '')
  if (!/^\+?[\d\s()-]{9,20}$/.test(v) || digits.length < 9 || digits.length > 15) {
    return 'Enter a valid telephone number.'
  }
}

export function messageError(raw: unknown, required: boolean): string | undefined {
  const v = clean(raw, 2000)
  if (!v) return required ? 'Write a short message.' : undefined
  if (required && v.length < 10) return 'Write a short message, at least 10 characters.'
}

export function choiceError(raw: unknown, allowed: readonly string[]): string | undefined {
  if (!allowed.includes(oneLine(raw, 160))) return 'Choose an option from the list.'
}
