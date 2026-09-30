import { socials } from '../data.js'

const paths = {
  facebook: <path d="M14 8h3V4.5h-3c-2.5 0-4 1.6-4 4.1V11H7.5v3.5H10V21h3.6v-6.5h2.8l.5-3.5h-3.3V9c0-.6.3-1 .9-1z" fill="currentColor" />,
  instagram: (
    <g fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r=".9" fill="currentColor" stroke="none" />
    </g>
  ),
  linkedin: (
    <g fill="currentColor">
      <rect x="4" y="9" width="3.4" height="11" />
      <circle cx="5.7" cy="5.6" r="2" />
      <path d="M10 9h3.2v1.6c.5-.9 1.7-1.9 3.6-1.9 3.4 0 4.2 2.2 4.2 5.1V20h-3.4v-5.4c0-1.3 0-2.9-1.8-2.9s-2.1 1.4-2.1 2.8V20H10z" />
    </g>
  ),
  x: <path d="M4 4h4.6l4 5.6L17.4 4H20l-6.1 7.1L20.5 20h-4.6l-4.3-6-5.1 6H4l6.4-7.4z" fill="currentColor" />,
  tiktok: <path d="M14.5 3h3c.2 2 1.6 3.6 3.5 3.8v3.1c-1.3 0-2.5-.4-3.5-1.1v6.4c0 3.3-2.6 5.8-5.8 5.8S6 18.5 6 15.3s2.6-5.8 5.8-5.8c.3 0 .6 0 .9.1v3.2a2.7 2.7 0 1 0 1.8 2.5z" fill="currentColor" />,
  youtube: (
    <g>
      <rect x="2.5" y="5.5" width="19" height="13" rx="4" fill="currentColor" />
      <path d="M10 9v6l5.2-3z" fill="var(--social-cut, #fff)" />
    </g>
  ),
}

// Иконки соцсетей. Сеть без адреса показывается бледной, без ссылки.
export default function Socials({ className = '' }) {
  return (
    <ul className={`socials ${className}`}>
      {socials.map((s) => (
        <li key={s.id}>
          {s.url ? (
            <a href={s.url} target="_blank" rel="noreferrer" aria-label={s.label} title={s.label}>
              <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">{paths[s.id]}</svg>
            </a>
          ) : (
            <span className="social-off" title={`${s.label}`} aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24">{paths[s.id]}</svg>
            </span>
          )}
        </li>
      ))}
    </ul>
  )
}
