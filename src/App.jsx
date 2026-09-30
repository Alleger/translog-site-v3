import { useEffect } from 'react'
import { useRoute } from './router.js'
import { LangContext, byCode } from './i18n/index.js'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import ServicePage from './pages/ServicePage.jsx'
import NewsPage from './pages/NewsPage.jsx'
import ArticlePage from './pages/ArticlePage.jsx'
import ContactsPage from './pages/ContactsPage.jsx'
import NotFound from './pages/NotFound.jsx'
import { news, serviceSlugs } from './data.js'

function resolve(path, params) {
  if (path === '') return <Home />
  if (path === 'contacts') return <ContactsPage key={params.toString()} params={params} />
  if (path === 'news') return <NewsPage />
  const [section, slug] = path.split('/')
  if (section === 'services' && serviceSlugs.includes(slug)) return <ServicePage slug={slug} />
  if (section === 'news') {
    const item = news.find((x) => x.slug === slug)
    if (item) return <ArticlePage item={item} />
  }
  return <NotFound />
}

export default function App() {
  const { lang, path, anchor, params } = useRoute()
  const L = byCode[lang]

  useEffect(() => {
    document.documentElement.lang = L.code
    document.title = L.dict.meta.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', L.dict.meta.description)
  }, [L])

  return (
    <LangContext.Provider value={L}>
      <a className="skip" href="#main" onClick={(e) => { e.preventDefault(); document.getElementById('main')?.focus() }}>
        {L.dict.nav.skip}
      </a>
      <Header path={path} anchor={anchor} />
      <main id="main" tabIndex={-1}>{resolve(path, params)}</main>
      <Footer path={path} anchor={anchor} />
    </LangContext.Provider>
  )
}
