import { useEffect, useState } from 'react'
import { byCode, detectLang } from './i18n/index.js'

// Адреса вида #/cs/contacts#quote — язык первым сегментом.
// Hash-роутинг работает на любом хостинге без настройки сервера.
let currentLang = 'en'

function parse() {
  const raw = window.location.hash.replace(/^#\/?/, '')
  const [pathPart, anchor] = raw.split('#')
  const [pathOnly, query = ''] = pathPart.split('?')
  const segs = pathOnly.split('/').filter(Boolean)
  let lang = null
  if (segs[0] && byCode[segs[0]]) lang = segs.shift()
  return { lang, path: segs.join('/'), anchor, params: new URLSearchParams(query) }
}

export function useRoute() {
  const [route, setRoute] = useState(() => {
    const r = parse()
    if (!r.lang) r.lang = detectLang()
    return r
  })
  useEffect(() => {
    const onChange = () => {
      const r = parse()
      setRoute((prev) => ({ ...r, lang: r.lang || prev.lang }))
    }
    window.addEventListener('hashchange', onChange)
    return () => window.removeEventListener('hashchange', onChange)
  }, [])
  useEffect(() => {
    if (route.anchor) {
      requestAnimationFrame(() => document.getElementById(route.anchor)?.scrollIntoView({ behavior: 'smooth' }))
    } else {
      window.scrollTo(0, 0)
    }
  }, [route.path, route.anchor, route.lang])
  currentLang = route.lang
  return route
}

// href('contacts', 'quote') → '#/cs/contacts#quote' (с текущим языком)
export const href = (path = '', anchor, lang = currentLang) =>
  `#/${lang}${path ? '/' + path : ''}${anchor ? '#' + anchor : ''}`

// Ссылка на ту же страницу на другом языке
export const hrefLang = (lang, path, anchor) => href(path, anchor, lang)
