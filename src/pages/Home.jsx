import { useState } from 'react'
import { href } from '../router.js'
import { useT } from '../i18n/index.js'
import { VehicleIcon } from '../components/Icons.jsx'
import { company, fleetIcons, images, news, offices, serviceImages, serviceSlugs } from '../data.js'
import { NewsCard } from './NewsPage.jsx'

function Hero() {
  const t = useT()
  const [from, setFrom] = useState('')
  const [to, setTo] = useState('')
  const go = (e) => {
    e.preventDefault()
    const q = new URLSearchParams({ from, to }).toString()
    window.location.hash = href('contacts', 'quote').replace('/contacts#', `/contacts?${q}#`)
  }
  return (
    <section className="hero" style={{ '--bg': `url(${images.aerial})` }}>
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <h1>{t.hero.title}</h1>
          <p className="hero-lead">{t.hero.lead}</p>
        </div>
        <form className="hero-card" onSubmit={go}>
          <h2>{t.hero.formTitle}</h2>
          <label>{t.hero.from}<input required value={from} onChange={(e) => setFrom(e.target.value)} placeholder={t.hero.placeholder} /></label>
          <label>{t.hero.to}<input required value={to} onChange={(e) => setTo(e.target.value)} placeholder={t.hero.placeholder} /></label>
          <button type="submit" className="btn btn-cobalt">{t.hero.cta}</button>
          <p>{t.hero.formNote}</p>
        </form>
      </div>
      <div className="facts-bar">
        <dl className="wrap facts">
          {t.facts.map((f) => (
            <div key={f.label}><dt>{f.label}</dt><dd>{f.value}</dd></div>
          ))}
        </dl>
      </div>
    </section>
  )
}

function Services() {
  const t = useT()
  return (
    <section id="services" className="section">
      <div className="wrap">
        <header className="section-head">
          <h2>{t.services.title}</h2>
          <p>{t.services.lead}</p>
        </header>
        <div className="mosaic">
          {serviceSlugs.map((slug, i) => (
            <a key={slug} href={href(`services/${slug}`)} className={`tile tile-photo ${i === 0 ? 'tile-big' : ''}`}>
              <img src={serviceImages[slug]} alt="" loading="lazy" />
              <div className="tile-body">
                <h3>{t.service[slug].title}</h3>
                <p>{t.service[slug].short}</p>
                <span className="tile-more">{t.services.more}</span>
              </div>
            </a>
          ))}
          <div className="tile tile-list">
            {t.services.extra.map((x) => (
              <a key={x.title} href={href('contacts', 'quote')}>
                <h3>{x.title}</h3>
                <p>{x.text}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Process() {
  const t = useT().process
  return (
    <section className="section section-sky">
      <div className="wrap">
        <header className="section-head">
          <h2>{t.title}</h2>
          <p>{t.lead}</p>
        </header>
        <ol className="steps">
          {t.steps.map((s, i) => (
            <li key={s.title}>
              <span className="step-no" aria-hidden="true">{i + 1}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

function Fleet() {
  const t = useT().fleet
  return (
    <section id="fleet" className="fleet" style={{ '--bg': `url(${images.fleet})` }}>
      <div className="wrap">
        <header className="section-head on-dark">
          <h2>{t.title}</h2>
          <p>{t.lead}</p>
        </header>
        <ul className="fleet-row">
          {t.items.map((v, i) => (
            <li key={v.title}>
              <VehicleIcon type={fleetIcons[i]} />
              <h3>{v.title}</h3>
              <p>{v.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function Company() {
  const t = useT()
  return (
    <section id="company" className="section">
      <div className="wrap company-grid">
        <div>
          <h2>{t.company.title}</h2>
          <p className="company-text">{t.company.text}</p>
          <blockquote className="motto">
            <p>{t.company.motto}</p>
            <footer>{company.ceo}<span>{t.company.ceoRole}</span></footer>
          </blockquote>
        </div>
        <div className="company-side">
          <div className="side-block">
            <h3>{t.fleet.network}</h3>
            <p>{t.fleet.networkText}</p>
          </div>
          <div className="side-block">
            <h3>{t.fleet.people}</h3>
            <p>{t.fleet.peopleText}</p>
          </div>
          <div className="side-block">
            <h3>{t.industries.title}</h3>
            <ul className="chips">{t.industries.items.map((x) => <li key={x}>{x}</li>)}</ul>
          </div>
          <div className="office-row">
            {offices.map((o) => (
              <div key={o.id} className="office-mini">
                <h3>{t.company.offices[o.id]}</h3>
                <p>{o.entity}</p>
                {o.address.length > 0 ? <p>{o.address.join(', ')}</p> : <p>{o.phones.join(', ')}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function NewsCta() {
  const t = useT()
  return (
    <section className="section section-sky">
      <div className="wrap news-cta">
        <div>
          <div className="nc-head">
            <h2>{t.news.title}</h2>
            <a className="text-link" href={href('news')}>{t.news.all}</a>
          </div>
          <NewsCard item={news[0]} heading="h3" />
        </div>
        <div className="cta-card" style={{ '--bg': `url(${images.night})` }}>
          <h2>{t.hero.formTitle}</h2>
          <p>{t.hero.formNote}</p>
          <a className="btn btn-white" href={href('contacts', 'quote')}>{t.nav.quote}</a>
          <a className="cta-phone" href={`tel:${company.phoneMain.replace(/\s/g, '')}`}>{company.phoneMain}</a>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Process />
      <Fleet />
      <Company />
      <NewsCta />
    </>
  )
}
