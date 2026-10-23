import { useEffect, useRef, useState, type ReactNode } from 'react'

/** Fades a block in once as it scrolls into view. Shows immediately for reduced-motion users. */
export default function Reveal({ children, className = '' }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const node = ref.current
    if (reduce || !node || !('IntersectionObserver' in window)) {
      setVisible(true)
      return
    }
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setVisible(true)
          obs.disconnect()
        }
      },
      { rootMargin: '0px 0px -8% 0px' },
    )
    obs.observe(node)
    const fallback = window.setTimeout(() => setVisible(true), 2500)
    return () => {
      obs.disconnect()
      window.clearTimeout(fallback)
    }
  }, [])

  return (
    <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} ${className}`}>
      {children}
    </div>
  )
}
