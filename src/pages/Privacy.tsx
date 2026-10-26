import PageHeader from '../components/PageHeader'
import { usePageMeta } from '../hooks/usePageMeta'
import { academy } from '../config/academy'

export default function Privacy() {
  usePageMeta('Privacy Policy', 'How the Shefa Forex Academy website handles information.')
  return (
    <>
      <PageHeader eyebrow="Privacy" title="Privacy Policy" />
      <section className="mx-auto grid max-w-3xl gap-6 px-4 py-14 leading-relaxed text-ink-muted sm:px-6">
        <p>
          This website is a static information site for {academy.name}. It has no user accounts, no database and no payment system.
        </p>
        <h2 className="text-2xl font-semibold text-navy">Forms</h2>
        <p>
          The contact and enrollment forms send only the details you type to {academy.contact.email}. The message is delivered
          by email. This website does not keep a copy, does not create an account, and does not take payment. A hidden field
          is used to reject automated submissions. Do not put passwords or payment details in the form.
        </p>
        <h2 className="text-2xl font-semibold text-navy">Fonts and hosting</h2>
        <p>
          Page fonts load from Google Fonts, and the site is hosted on GitHub Pages. Both services may record technical
          information such as your IP address when you load a page, under their own policies.
        </p>
        <h2 className="text-2xl font-semibold text-navy">Questions</h2>
        <p>Contact the academy through the Contact page with any question about how your information is handled.</p>
      </section>
    </>
  )
}
