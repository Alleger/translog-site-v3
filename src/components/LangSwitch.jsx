import { useEffect, useRef, useState } from 'react'
import Flag from './Flag.jsx'
import { LANGS, useLang } from '../i18n/index.js'
import { hrefLang } from '../router.js'

// Переключатель языка: флаг текущего языка, по клику — сетка всех языков
export default function LangSwitch({ path, anchor }) {
  const lang = useLang()
  const [open, setOpen] = useState(false)
  const box = useRef(null)

  useEffect(() => {
    if (!open) return
    const onDown = (e) => { if (!box.current?.contains(e.target)) setOpen(false) }
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('mousedown', onDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  const remember = (code) => {
    try { localStorage.setItem('lang', code) } catch { /* ignore */ }
    setOpen(false)
  }

  return (
    <div className="lang" ref={box}>
      <button
        type="button"
        className="lang-btn"
        aria-expanded={open}
        aria-controls="lang-menu"
        aria-label={`${lang.dict.nav.language}: ${lang.label}`}
        onClick={() => setOpen((v) => !v)}
      >
        <Flag code={lang.flag} />
        <span>{lang.short}</span>
      </button>
      {open && (
        <ul id="lang-menu" className="lang-menu">
          {LANGS.map((l) => (
            <li key={l.code}>
              <a
                href={hrefLang(l.code, path, anchor)}
                lang={l.code}
                aria-current={l.code === lang.code ? 'true' : undefined}
                onClick={() => remember(l.code)}
              >
                <Flag code={l.flag} size={26} />
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
