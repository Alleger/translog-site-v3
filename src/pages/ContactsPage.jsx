import PageHead from '../components/PageHead.jsx'
import QuoteForm from '../components/QuoteForm.jsx'
import Socials from '../components/Socials.jsx'
import { MailIcon, PhoneIcon } from '../components/Icons.jsx'
import { useT } from '../i18n/index.js'
import { company, images, offices } from '../data.js'

const tel = (p) => `tel:${p.replace(/\s/g, '')}`

export default function ContactsPage({ params }) {
  const t = useT()
  return (
    <>
      <PageHead image={images.interchange} title={t.contacts.title} lead={t.contacts.lead} trail={[{ label: t.contacts.title }]} />
      <section className="section">
        <div className="wrap contacts-grid">
          <div>
            <div className="contact-direct">
              <a href={tel(company.phoneMain)}><PhoneIcon /> {company.phoneMain}</a>
              <a href={`mailto:${company.email}`}><MailIcon /> {company.email}</a>
            </div>
            {offices.map((o) => (
              <div key={o.id} className="office-card">
                <h2>{t.company.offices[o.id]}</h2>
                <p><strong>{o.entity}</strong></p>
                {o.address.length > 0 && <p>{o.address.map((l) => <span key={l}>{l}<br /></span>)}</p>}
                <p>{o.phones.map((p) => <a key={p} href={tel(p)}>{p}<br /></a>)}</p>
                {o.address.length > 0 && (
                  <a className="text-link" target="_blank" rel="noreferrer"
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(o.address.join(', '))}`}>
                    {t.contacts.openMap}
                  </a>
                )}
              </div>
            ))}
            <div className="office-card">
              <h2>{t.nav.follow}</h2>
              <Socials className="socials-contacts" />
            </div>
          </div>
          <div className="contacts-form">
            <h2>{t.contacts.formTitle}</h2>
            <QuoteForm id="quote" initial={{ from: params.get('from'), to: params.get('to') }} />
          </div>
        </div>
      </section>
    </>
  )
}
