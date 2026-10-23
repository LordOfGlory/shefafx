import type { ReactNode } from 'react'

interface Props {
  id: string
  label: string
  required?: boolean
  error?: string
  hint?: string
  children: ReactNode
}

export const inputClass =
  'w-full rounded-md border border-slate-300 bg-white px-3.5 py-3 text-base text-charcoal placeholder:text-slate-400 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/40'

export default function FormField({ id, label, required, error, hint, children }: Props) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-charcoal">
        {label}
        {required && <span className="text-gold-deep"> *</span>}
      </label>
      {children}
      {hint && !error && <p className="mt-1.5 text-sm text-ink-muted">{hint}</p>}
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-1.5 text-sm font-medium text-red-700">
          {error}
        </p>
      )}
    </div>
  )
}
