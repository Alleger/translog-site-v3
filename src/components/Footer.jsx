import Logo from './Logo.jsx'
import Socials from './Socials.jsx'
import Flag from './Flag.jsx'
import { href, hrefLang } from '../router.js'
import { LANGS, useLang, useT } from '../i18n/index.js'
import { company, offices, serviceSlugs } from '../data.js'

const tel = (p) => `tel:${p.replace(/\s/g, '')}`

export default function Footer({ path, anchor }) {
  const t = useT()
  const lang = useLang()
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div className="footer-brand">
          <Logo light />
          <p>{t.footer.tagline}</p>
          <h2 className="footer-h">{t.nav.follow}</h2>
          <Socials className="socials-footer" />
        </div>
        <nav aria-label={t.nav.services}>
          <h2 className="footer-h">{t.nav.services}</h2>
          <ul className="footer-list">
            {serviceSlugs.map((slug) => (
              <li key={slug}><a href={href(`services/${slug}`)}>{t.service[slug].title}</a></li>
            ))}
            <li><a href={href('', 'services')}>{t.nav.allServices}</a></li>
          </ul>
        </nav>
        <nav aria-label={t.nav.company}>
          <h2 className="footer-h">{t.nav.company}</h2>
          <ul className="footer-list">
            <li><a href={href('', 'company')}>{t.footer.about}</a></li>
            <li><a href={href('', 'fleet')}>{t.nav.fleet}</a></li>
            <li><a href={href('news')}>{t.nav.news}</a></li>
            <li><a href={href('contacts')}>{t.nav.contacts}</a></li>
            <li><a href="https://translogcompany.com/privacy-policy/">{t.footer.conditions}</a></li>
          </ul>
        </nav>
        <div>
          <h2 className="footer-h">{t.nav.contacts}</h2>
          <ul className="footer-list">
            <li><a href={tel(company.phoneMain)}>{company.phoneMain}</a></li>
            <li><a href={`mailto:${company.email}`}>{company.email}</a></li>
          </ul>
          {offices.map((o) => (
            <p key={o.id} className="footer-office">
              <strong>{t.company.offices[o.id]}</strong>
              {o.entity}
              {o.address.length > 0 && <><br />{o.address.join(', ')}</>}
            </p>
          ))}
        </div>
      </div>
      <div className="wrap footer-langs">
        <ul>
          {LANGS.map((l) => (
            <li key={l.code}>
              <a href={hrefLang(l.code, path, anchor)} lang={l.code} aria-current={l.code === lang.code ? 'true' : undefined}>
                <Flag code={l.flag} size={18} /> {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="wrap footer-bottom">
        <span>© {new Date().getFullYear()} {company.name}. {t.footer.rights}</span>
      </div>
    </footer>
  )
}
