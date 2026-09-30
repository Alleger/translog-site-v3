import PageHead from '../components/PageHead.jsx'
import { href } from '../router.js'
import { useLang, useT } from '../i18n/index.js'
import { news } from '../data.js'

export const useFmtDate = () => {
  const { locale } = useLang()
  return (d) => new Date(d).toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
}

export function NewsCard({ item, heading: H = 'h2' }) {
  const t = useT()
  const fmt = useFmtDate()
  const n = t.news.items[item.slug]
  return (
    <a className="news-card" href={href(`news/${item.slug}`)}>
      <img src={item.image} alt="" loading="lazy" />
      <div>
        <time dateTime={item.date}>{fmt(item.date)}</time>
        <H>{n.title}</H>
        <p>{n.excerpt}</p>
      </div>
    </a>
  )
}

export default function NewsPage() {
  const t = useT()
  return (
    <>
      <PageHead title={t.news.title} trail={[{ label: t.news.title }]} />
      <section className="section">
        <div className="wrap news-list">
          {news.map((a) => <NewsCard key={a.slug} item={a} />)}
        </div>
      </section>
    </>
  )
}
