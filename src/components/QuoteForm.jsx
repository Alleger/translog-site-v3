import { useState } from 'react'
import { company } from '../data.js'
import { fill, useT } from '../i18n/index.js'

// Форма запроса. Пока без сервера: собирает письмо и открывает почтовый клиент.
// Позже можно отправлять в n8n (webhook) или CRM — поменять только handleSubmit.
export default function QuoteForm({ id = 'quote', initial = {} }) {
  const t = useT().form
  const [data, setData] = useState({
    name: '', company: '', email: '', phone: '', cargo: '', message: '',
    from: initial.from || '', to: initial.to || '',
  })
  const [sent, setSent] = useState(false)
  const set = (k) => (e) => setData({ ...data, [k]: e.target.value })

  function handleSubmit(e) {
    e.preventDefault()
    const subject = `${t.subject}: ${data.from} → ${data.to}`
    const body = [
      `${t.name}: ${data.name}`,
      `${t.company}: ${data.company}`,
      `${t.email}: ${data.email}`,
      `${t.phone}: ${data.phone}`,
      `${t.from}: ${data.from}`,
      `${t.to}: ${data.to}`,
      `${t.cargo}: ${data.cargo}`,
      '',
      data.message,
    ].join('\n')
    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  return (
    <form id={id} className="quote-form" onSubmit={handleSubmit}>
      <div className="form-route">
        <label>{t.from}<input required value={data.from} onChange={set('from')} placeholder={t.placeholder} autoComplete="off" /></label>
        <span className="form-route-line" aria-hidden="true" />
        <label>{t.to}<input required value={data.to} onChange={set('to')} placeholder={t.placeholder} autoComplete="off" /></label>
      </div>
      <label>{t.cargo}<input value={data.cargo} onChange={set('cargo')} placeholder={t.cargoPh} /></label>
      <div className="form-grid">
        <label>{t.name}<input required value={data.name} onChange={set('name')} autoComplete="name" /></label>
        <label>{t.company}<input value={data.company} onChange={set('company')} autoComplete="organization" /></label>
        <label>{t.email}<input required type="email" value={data.email} onChange={set('email')} autoComplete="email" /></label>
        <label>{t.phone}<input type="tel" value={data.phone} onChange={set('phone')} autoComplete="tel" /></label>
      </div>
      <label>{t.details}<textarea rows="3" value={data.message} onChange={set('message')} placeholder={t.detailsPh} /></label>
      <div className="form-foot">
        <button type="submit" className="btn btn-cobalt">{t.submit}</button>
        <p className="form-note" role="status">{fill(sent ? t.sent : t.note, { email: company.email })}</p>
      </div>
    </form>
  )
}
