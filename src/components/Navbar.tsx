import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { academy } from '../config/academy'
import { LogoMark } from './Logo'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/courses', label: 'Courses' },
  { to: '/mentorship', label: 'Mentorship' },
  { to: '/resources', label: 'Resources' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `rounded px-1 py-1 text-sm font-medium transition-colors ${isActive ? 'text-gold' : 'text-slate-300 hover:text-white'}`

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-navy text-white">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link to="/" className="flex items-center gap-3" aria-label={`${academy.name} home`}>
          <LogoMark />
          <span className="leading-none">
            <span className="block font-display text-lg font-semibold">{academy.name}</span>
            <span className="mt-1 block font-mono text-[10px] uppercase tracking-[0.2em] text-gold">{academy.tagline}</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Main">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === '/'} className={linkClass}>
              {l.label}
            </NavLink>
          ))}
          <Link to="/enroll" className="ml-2 rounded-md bg-gold px-4 py-2.5 text-sm font-semibold text-navy transition-colors hover:bg-[#e2c15a]">
            Enroll Now
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-white/20 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
        </button>
      </div>

      {open && (
        <nav id="mobile-menu" className="border-t border-white/10 bg-navy px-4 pb-6 pt-3 lg:hidden" aria-label="Mobile">
          <ul className="grid">
            {links.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  end={l.to === '/'}
                  className={({ isActive }) =>
                    `block border-b border-white/10 py-3.5 text-base font-medium ${isActive ? 'text-gold' : 'text-slate-200'}`
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <Link to="/enroll" className="mt-5 flex min-h-12 items-center justify-center rounded-md bg-gold font-semibold text-navy">
            Enroll Now
          </Link>
        </nav>
      )}
    </header>
  )
}
