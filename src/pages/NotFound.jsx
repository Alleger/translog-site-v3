import { href } from '../router.js'
import { useT } from '../i18n/index.js'

export default function NotFound() {
  const t = useT().notFound
  return (
    <section className="section">
      <div className="wrap notfound">
        <h1>{t.title}</h1>
        <p>{t.text}</p>
        <a className="btn btn-cobalt" href={href()}>{t.cta}</a>
      </div>
    </section>
  )
}
