import { useEffect, useState } from 'react'
import Logo from './Logo.jsx'
import LangSwitch from './LangSwitch.jsx'
import Socials from './Socials.jsx'
import Flag from './Flag.jsx'
import { Chevron, MailIcon, PhoneIcon } from './Icons.jsx'
import { href, hrefLang } from '../router.js'
import { LANGS, useLang, useT } from '../i18n/index.js'
import { company, serviceSlugs } from '../data.js'

const tel = company.phoneMain.replace(/\s/g, '')

export default function Header({ path, anchor }) {
  const t = useT()
  const lang = useLang()
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  useEffect(() => { setMenuOpen(false); setServicesOpen(false) }, [path, lang.code])
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') { setServicesOpen(false); setMenuOpen(false) } }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const isActive = (p) => (path === p || path.startsWith(p + '/') ? 'active' : undefined)

  return (
    <header className={`site-header ${menuOpen ? 'menu-open' : ''}`}>
      <div className="topbar">
        <div className="wrap topbar-row">
          <div className="topbar-contact">
            <a href={`tel:${tel}`}><PhoneIcon /> {company.phoneMain}</a>
            <a href={`mailto:${company.email}`}><MailIcon /> {company.email}</a>
          </div>
          <div className="topbar-right">
            <Socials className="socials-top" />
            <LangSwitch path={path} anchor={anchor} />
          </div>
        </div>
      </div>

      <div className="wrap header-row">
        <a href={href()} className="header-logo" aria-label={`Translog Company — ${t.nav.home}`}>
          <Logo />
        </a>
        <nav className="main-nav" aria-label="Main">
          <ul>
            <li className="has-drop" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
              <button
                type="button"
                className={isActive('services')}
                aria-expanded={servicesOpen}
                aria-controls="services-drop"
                onClick={() => setServicesOpen((v) => !v)}
              >
                {t.nav.services} <Chevron />
              </button>
              <div id="services-drop" className={`drop ${servicesOpen ? 'open' : ''}`}>
                <div className="drop-inner">
                  {serviceSlugs.map((slug) => (
                    <a key={slug} href={href(`services/${slug}`)} className="drop-item">
                      <strong>{t.service[slug].title}</strong>
                      <span>{t.service[slug].short}</span>
                    </a>
                  ))}
                  <a href={href('', 'services')} className="drop-item">
                    <strong>{t.nav.allServices}</strong>
                    <span>{t.nav.allServicesText}</span>
                  </a>
                </div>
              </div>
            </li>
            <li><a href={href('', 'fleet')}>{t.nav.fleet}</a></li>
            <li><a href={href('', 'company')}>{t.nav.company}</a></li>
            <li><a href={href('news')} className={isActive('news')}>{t.nav.news}</a></li>
            <li><a href={href('contacts')} className={isActive('contacts')}>{t.nav.contacts}</a></li>
          </ul>
        </nav>
        <a className="btn btn-cobalt btn-sm header-cta" href={href('contacts', 'quote')}>{t.nav.quote}</a>
        <button
          type="button"
          className="burger"
          aria-label={menuOpen ? t.nav.closeMenu : t.nav.openMenu}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span /><span /><span />
        </button>
      </div>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`} hidden={!menuOpen}>
        <div className="wrap">
          {serviceSlugs.map((slug) => (
            <a key={slug} href={href(`services/${slug}`)}>{t.service[slug].title}</a>
          ))}
          <a href={href('', 'services')}>{t.nav.allServices}</a>
          <a href={href('', 'fleet')}>{t.nav.fleet}</a>
          <a href={href('', 'company')}>{t.nav.company}</a>
          <a href={href('news')}>{t.nav.news}</a>
          <a href={href('contacts')}>{t.nav.contacts}</a>
          <a className="btn btn-cobalt" href={href('contacts', 'quote')}>{t.nav.quote}</a>
          <p className="mobile-label">{t.nav.language}</p>
          <ul className="mobile-langs">
            {LANGS.map((l) => (
              <li key={l.code}>
                <a
                  href={hrefLang(l.code, path, anchor)}
                  lang={l.code}
                  aria-current={l.code === lang.code ? 'true' : undefined}
                  onClick={() => { try { localStorage.setItem('lang', l.code) } catch { /* ignore */ } }}
                >
                  <Flag code={l.flag} /> {l.label}
                </a>
              </li>
            ))}
          </ul>
          <p className="mobile-label">{t.nav.follow}</p>
          <Socials className="socials-mobile" />
        </div>
      </div>
    </header>
  )
}
