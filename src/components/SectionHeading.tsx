interface Props {
  eyebrow?: string
  title: string
  text?: string
  tone?: 'light' | 'dark'
  align?: 'left' | 'center'
}

export default function SectionHeading({ eyebrow, title, text, tone = 'light', align = 'left' }: Props) {
  const dark = tone === 'dark'
  return (
    <div className={`max-w-3xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      {eyebrow && (
        <p className={`font-mono text-xs font-medium uppercase tracking-[0.16em] ${dark ? 'text-gold' : 'text-gold-deep'}`}>
          {eyebrow}
        </p>
      )}
      <h2 className={`mt-3 text-3xl font-semibold leading-tight sm:text-4xl ${dark ? 'text-white' : 'text-navy'}`}>{title}</h2>
      {text && <p className={`mt-4 text-lg leading-relaxed ${dark ? 'text-slate-300' : 'text-ink-muted'}`}>{text}</p>}
    </div>
  )
}
