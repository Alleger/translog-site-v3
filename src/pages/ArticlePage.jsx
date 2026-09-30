import PageHead from '../components/PageHead.jsx'
import { href } from '../router.js'
import { useT } from '../i18n/index.js'
import { company } from '../data.js'
import { useFmtDate } from './NewsPage.jsx'

export default function ArticlePage({ item }) {
  const t = useT()
  const fmt = useFmtDate()
  const n = t.news.items[item.slug]
  return (
    <>
      <PageHead title={n.title} trail={[{ label: t.news.title, path: 'news' }, { label: n.title }]} />
      <section className="section">
        <article className="wrap article">
          <time dateTime={item.date}>{fmt(item.date)}</time>
          <img src={item.image} alt="" />
          {n.body.map((p, i) => <p key={i}>{p}</p>)}
          <p className="byline">{company.ceo}<span>{t.company.ceoRole}</span></p>
          <a className="text-link" href={href('news')}>{t.news.back}</a>
        </article>
      </section>
    </>
  )
}
