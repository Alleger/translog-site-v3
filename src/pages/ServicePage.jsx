import PageHead from '../components/PageHead.jsx'
import { href } from '../router.js'
import { useT } from '../i18n/index.js'
import { serviceImages, serviceSlugs } from '../data.js'

export default function ServicePage({ slug }) {
  const t = useT()
  const s = t.service[slug]
  return (
    <>
      <PageHead image={serviceImages[slug]} title={s.title} lead={s.intro}
        trail={[{ label: t.nav.services, path: '', anchor: 'services' }, { label: s.title }]} />
      <section className="section">
        <div className="wrap service-detail">
          <div className="service-detail-media"><img src={serviceImages[slug]} alt="" /></div>
          <div>
            <h2>{t.service.whatYouGet}</h2>
            <ul className="ticks">{s.features.map((f) => <li key={f}>{f}</li>)}</ul>
            {s.advantages.length > 0 && (
              <>
                <h2>{t.service.whyUs}</h2>
                <ul className="ticks">{s.advantages.map((f) => <li key={f}>{f}</li>)}</ul>
              </>
            )}
            <div className="detail-cta">
              <a className="btn btn-cobalt" href={href('contacts', 'quote')}>{t.nav.quote}</a>
              {serviceSlugs.filter((x) => x !== slug).map((o) => (
                <a key={o} className="text-link" href={href(`services/${o}`)}>{t.service[o].title}</a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
