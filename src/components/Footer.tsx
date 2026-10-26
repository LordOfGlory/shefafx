import { Link } from 'react-router-dom'
import { academy, hasEmail, hasPhone, hasWhatsapp, safeHttps, whatsappLink } from '../config/academy'

const nav = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/courses', label: 'Courses' },
  { to: '/mentorship', label: 'Mentorship' },
  { to: '/resources', label: 'Resources' },
  { to: '/contact', label: 'Contact' },
  { to: '/enroll', label: 'Enrollment interest' },
]

const socials: { label: string; url: string }[] = [
  { label: 'Facebook', url: academy.social.facebook },
  { label: 'Instagram', url: academy.social.instagram },
  { label: 'TikTok', url: academy.social.tiktok },
  { label: 'YouTube', url: academy.social.youtube },
].filter((s) => safeHttps(s.url))

const pending = <span className="italic text-slate-500">To be added</span>

export default function Footer() {
  return (
    <footer className="bg-navy text-slate-300">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_1fr_1.2fr]">
        <div>
          <p className="font-display text-xl font-semibold text-white">{academy.name}</p>
          <p className="mt-1 font-mono text-xs uppercase tracking-[0.2em] text-gold">{academy.tagline}</p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed">
            Forex trading education and professional development, based in {academy.location}.
          </p>
        </div>

        <nav aria-label="Footer">
          <p className="text-sm font-semibold text-white">Explore</p>
          <ul className="mt-4 grid gap-2 text-sm">
            {nav.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="hover:text-white">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-sm font-semibold text-white">Contact</p>
          <ul className="mt-4 grid gap-2 text-sm">
            <li>{academy.location}</li>
            <li>
              Email:{' '}
              {hasEmail() ? (
                <a className="underline hover:text-white" href={`mailto:${academy.contact.email}`}>
                  {academy.contact.email}
                </a>
              ) : (
                pending
              )}
            </li>
            <li>Telephone: {hasPhone() ? academy.contact.phone : pending}</li>
            <li>
              WhatsApp:{' '}
              {hasWhatsapp() ? (
                <a className="underline hover:text-white" href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                  {academy.contact.phone || 'Chat on WhatsApp'}
                </a>
              ) : (
                pending
              )}
            </li>
          </ul>
          {socials.length > 0 && (
            <>
              <p className="mt-5 text-sm font-semibold text-white">Social media</p>
              <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm">
                {socials.map((s) => (
                  <li key={s.label}>
                    <a className="underline hover:text-white" href={safeHttps(s.url)} target="_blank" rel="noopener noreferrer">
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-8 text-xs leading-relaxed text-slate-400 sm:px-6">
          <p>
            <strong className="font-semibold text-slate-300">Risk disclaimer.</strong> Trading foreign exchange and other leveraged
            products carries a high level of risk and can result in the loss of more than your initial deposit. {academy.name}{' '}
            provides education only. Nothing on this website is investment advice or a promise of profit. Past performance,
            including any example chart, does not indicate future results. Trade only with money you can afford to lose.
          </p>
          <p className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2">
            <span>&copy; {new Date().getFullYear()} {academy.name}. All rights reserved.</span>
            <Link to="/privacy" className="underline hover:text-white">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
