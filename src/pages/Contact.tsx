import { Mail, MapPin, MessageCircle, Phone, Share2 } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import ContactForm from '../components/ContactForm'
import { usePageMeta } from '../hooks/usePageMeta'
import { academy, hasEmail, hasPhone, hasWhatsapp, whatsappLink } from '../config/academy'

const pending = <span className="italic text-slate-500">To be added</span>

export default function Contact() {
  usePageMeta('Contact', 'Contact Shefa Forex Academy in Kampala, Uganda with questions about the forex trading course or mentorship.')
  const socials = [
    ['Facebook', academy.social.facebook],
    ['Instagram', academy.social.instagram],
    ['TikTok', academy.social.tiktok],
    ['YouTube', academy.social.youtube],
  ].filter(([, url]) => url.trim())

  return (
    <>
      <PageHeader eyebrow="Contact" title="Talk to the academy" text="Ask about the course, the fee, the schedule or mentorship." />
      <section className="mx-auto grid max-w-6xl gap-14 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_1.3fr] lg:py-20">
        <div>
          <h2 className="text-2xl font-semibold text-navy">Contact information</h2>
          <ul className="mt-6 grid gap-5">
            <li className="flex gap-4">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-gold-deep" aria-hidden="true" />
              <span>
                <strong className="block text-navy">Location</strong>
                {academy.location}
              </span>
            </li>
            <li className="flex gap-4">
              <Mail className="mt-1 h-5 w-5 shrink-0 text-gold-deep" aria-hidden="true" />
              <span>
                <strong className="block text-navy">Email</strong>
                {hasEmail() ? academy.contact.email : pending}
              </span>
            </li>
            <li className="flex gap-4">
              <Phone className="mt-1 h-5 w-5 shrink-0 text-gold-deep" aria-hidden="true" />
              <span>
                <strong className="block text-navy">Telephone</strong>
                {hasPhone() ? academy.contact.phone : pending}
              </span>
            </li>
            <li className="flex gap-4">
              <MessageCircle className="mt-1 h-5 w-5 shrink-0 text-gold-deep" aria-hidden="true" />
              <span>
                <strong className="block text-navy">WhatsApp</strong>
                {hasWhatsapp() ? (
                  <a className="underline" href={whatsappLink()} target="_blank" rel="noreferrer">
                    Chat on WhatsApp
                  </a>
                ) : (
                  pending
                )}
              </span>
            </li>
            <li className="flex gap-4">
              <Share2 className="mt-1 h-5 w-5 shrink-0 text-gold-deep" aria-hidden="true" />
              <span>
                <strong className="block text-navy">Social media</strong>
                {socials.length ? (
                  <span className="flex flex-wrap gap-x-5">
                    {socials.map(([label, url]) => (
                      <a key={label} className="underline" href={url} target="_blank" rel="noreferrer">
                        {label}
                      </a>
                    ))}
                  </span>
                ) : (
                  pending
                )}
              </span>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-navy">Send an inquiry</h2>
          <p className="mb-6 mt-2 text-ink-muted">Fill in the form and we will prepare an email to the academy for you.</p>
          <ContactForm />
        </div>
      </section>
    </>
  )
}
