import type { ReactNode } from 'react'

export default function PageHeader({ eyebrow, title, text, children }: { eyebrow: string; title: string; text?: string; children?: ReactNode }) {
  return (
    <section
      className="bg-navy text-white"
      style={{
        backgroundImage:
          'linear-gradient(rgba(120,150,210,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(120,150,210,.08) 1px, transparent 1px)',
        backgroundSize: '56px 56px',
      }}
    >
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:py-20">
        <p className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-gold">{eyebrow}</p>
        <h1 className="hero-in mt-4 max-w-3xl text-4xl font-semibold leading-[1.1] sm:text-5xl">{title}</h1>
        {text && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">{text}</p>}
        {children}
      </div>
    </section>
  )
}
