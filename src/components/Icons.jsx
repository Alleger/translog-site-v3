// Линейные иконки техники и интерфейса (SVG, наследуют currentColor)
const base = {
  width: 56,
  height: 32,
  viewBox: '0 0 56 32',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinejoin: 'round',
  'aria-hidden': true,
}

const wheels = (xs) =>
  xs.map((x) => <circle key={x} cx={x} cy="26" r="3.2" />)

export function VehicleIcon({ type }) {
  switch (type) {
    case 'van':
      return (
        <svg {...base}>
          <path d="M8 23V9h22l8 6v8" />
          <path d="M30 9v6h8" />
          <path d="M8 23h3m6 0h14m6 0h1" />
          {wheels([14, 34])}
        </svg>
      )
    case 'tarp':
      return (
        <svg {...base}>
          <path d="M2 21V5h38v16z" />
          <path d="M10 5v16M18 5v16M26 5v16M34 5v16" strokeOpacity=".45" />
          <path d="M40 21h4V11h6l4 5v5h-2" />
          {wheels([10, 18, 46])}
        </svg>
      )
    case 'reefer':
      return (
        <svg {...base}>
          <path d="M2 21V5h38v16z" />
          <path d="M21 9v8M17.5 11l7 4M24.5 11l-7 4" />
          <path d="M40 21h4V11h6l4 5v5h-2" />
          {wheels([10, 18, 46])}
        </svg>
      )
    case 'tank':
      return (
        <svg {...base}>
          <rect x="3" y="6" width="36" height="14" rx="7" />
          <path d="M14 6V3h6v3" />
          <path d="M40 21h4V11h6l4 5v5h-2" />
          {wheels([10, 18, 46])}
        </svg>
      )
    default:
      return (
        <svg {...base}>
          <path d="M4 21h28" />
          <path d="M22 21V9h12l8 7v5h-4" />
          <path d="M34 9v7h8" />
          {wheels([10, 18, 34])}
        </svg>
      )
  }
}

export function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />
    </svg>
  )
}

export function MailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  )
}

export function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  )
}

export function Chevron() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="m3 4.5 3 3 3-3" />
    </svg>
  )
}
