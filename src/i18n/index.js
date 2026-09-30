import { createContext, useContext } from 'react'
import en from './en.js'
import cs from './cs.js'
import pl from './pl.js'
import de from './de.js'
import uk from './uk.js'
import ru from './ru.js'

// Порядок = порядок в переключателе. Чтобы добавить язык:
// 1) скопировать en.js в новый файл и перевести, 2) добавить строку сюда.
export const LANGS = [
  { code: 'en', short: 'EN', label: 'English', flag: 'gb', dict: en, locale: 'en-GB' },
  { code: 'cs', short: 'CZ', label: 'Čeština', flag: 'cz', dict: cs, locale: 'cs-CZ' },
  { code: 'pl', short: 'PL', label: 'Polski', flag: 'pl', dict: pl, locale: 'pl-PL' },
  { code: 'de', short: 'DE', label: 'Deutsch', flag: 'de', dict: de, locale: 'de-DE' },
  { code: 'uk', short: 'UA', label: 'Українська', flag: 'ua', dict: uk, locale: 'uk-UA' },
  { code: 'ru', short: 'RU', label: 'Русский', flag: 'ru', dict: ru, locale: 'ru-RU' },
]
export const DEFAULT_LANG = 'en'
export const byCode = Object.fromEntries(LANGS.map((l) => [l.code, l]))

export const LangContext = createContext(byCode[DEFAULT_LANG])
export const useLang = () => useContext(LangContext)
export const useT = () => useContext(LangContext).dict

// Подстановка {email} и т. п.
export const fill = (s, vars) => s.replace(/\{(\w+)\}/g, (_, k) => vars[k] ?? '')

// Язык при первом заходе: из браузера, если он есть в списке
export function detectLang() {
  try {
    const saved = localStorage.getItem('lang')
    if (saved && byCode[saved]) return saved
  } catch { /* storage недоступен */ }
  const nav = (navigator.languages || [navigator.language || '']).map((l) => l.slice(0, 2).toLowerCase())
  return nav.find((c) => byCode[c]) || DEFAULT_LANG
}
