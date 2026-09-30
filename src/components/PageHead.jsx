import { href } from '../router.js'
import { useT } from '../i18n/index.js'
import { images } from '../data.js'

export default function PageHead({ title, lead, trail = [], image = images.aerial }) {
  const t = useT()
  return (
    <section className="page-head" style={{ '--bg': `url(${image})` }}>
      <div className="wrap">
        <nav aria-label="Breadcrumb" className="crumbs">
          <a href={href()}>{t.nav.home}</a>
          {trail.map((c) => (
            <span key={c.label}>
              <span aria-hidden="true">/</span>
              {c.path !== undefined ? <a href={href(c.path, c.anchor)}>{c.label}</a> : c.label}
            </span>
          ))}
        </nav>
        <h1>{title}</h1>
        {lead && <p className="page-lead">{lead}</p>}
      </div>
    </section>
  )
}
