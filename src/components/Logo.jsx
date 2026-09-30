import { useState } from 'react'
import { images } from '../data.js'

// Логотип с текущего сайта; если картинка не загрузилась — текстовый вариант
export default function Logo({ light = false }) {
  const [failed, setFailed] = useState(false)
  if (failed) {
    return <span className={`logo-text ${light ? 'on-dark' : ''}`}>Translog<span>Company</span></span>
  }
  return (
    <img
      className="logo-img"
      src={light ? images.logoWhite : images.logo}
      alt="Translog Company"
      width="176"
      height="47"
      onError={() => setFailed(true)}
    />
  )
}
