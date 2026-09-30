// Флаги в SVG (без внешних картинок), пропорции 3:2
export default function Flag({ code, size = 22 }) {
  const w = size, h = Math.round((size * 2) / 3)
  const common = { width: w, height: h, viewBox: '0 0 30 20', 'aria-hidden': true, className: 'flag' }
  switch (code) {
    case 'gb':
      return (
        <svg {...common}>
          <clipPath id="gbc"><rect width="30" height="20" /></clipPath>
          <g clipPath="url(#gbc)">
            <rect width="30" height="20" fill="#012169" />
            <path d="M0 0l30 20M30 0L0 20" stroke="#fff" strokeWidth="4" />
            <path d="M0 0l30 20M30 0L0 20" stroke="#C8102E" strokeWidth="1.6" />
            <path d="M15 0v20M0 10h30" stroke="#fff" strokeWidth="6" />
            <path d="M15 0v20M0 10h30" stroke="#C8102E" strokeWidth="3.4" />
          </g>
        </svg>
      )
    case 'cz':
      return (
        <svg {...common}>
          <rect width="30" height="10" fill="#fff" />
          <rect y="10" width="30" height="10" fill="#D7141A" />
          <path d="M0 0l15 10L0 20z" fill="#11457E" />
        </svg>
      )
    case 'pl':
      return (
        <svg {...common}>
          <rect width="30" height="10" fill="#fff" />
          <rect y="10" width="30" height="10" fill="#DC143C" />
        </svg>
      )
    case 'de':
      return (
        <svg {...common}>
          <rect width="30" height="6.67" fill="#000" />
          <rect y="6.67" width="30" height="6.67" fill="#DD0000" />
          <rect y="13.33" width="30" height="6.67" fill="#FFCE00" />
        </svg>
      )
    case 'ua':
      return (
        <svg {...common}>
          <rect width="30" height="10" fill="#0057B7" />
          <rect y="10" width="30" height="10" fill="#FFD700" />
        </svg>
      )
    case 'ru':
      return (
        <svg {...common}>
          <rect width="30" height="6.67" fill="#fff" />
          <rect y="6.67" width="30" height="6.67" fill="#0039A6" />
          <rect y="13.33" width="30" height="6.67" fill="#D52B1E" />
        </svg>
      )
    default:
      return null
  }
}
