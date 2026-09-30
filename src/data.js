// Данные, не зависящие от языка: контакты, соцсети, фото.
// Тексты на всех языках — в папке src/i18n.

const WP = 'https://translogcompany.com/wp-content/uploads'

export const images = {
  logoWhite: `${WP}/2020/09/logo_gr_hd-white.png`,
  logo: `${WP}/2020/09/logo_gr_hd.png`,
  hero: 'img/hero.webp',
  express: 'img/express.webp',
  terminal: 'img/terminal.webp',
  fleet: 'img/fleet.webp',
  night: 'img/night.webp',
  valley: 'img/valley.webp',
  aerial: 'img/aerial.webp',
  interchange: 'img/interchange.webp',
  tarpaulin: 'img/tarpaulin.webp',
}

export const company = {
  name: 'Translog Company s.r.o.',
  founded: 2005,
  email: 'info@translog.company',
  phoneMain: '+420 222 200 762',
  ceo: 'Alexandera Volynchikova',
}

// Соцсети. Пустой url — иконка показывается бледной и без ссылки.
// Вставьте адреса страниц компании, когда они будут.
export const socials = [
  { id: 'facebook', label: 'Facebook', url: '' },
  { id: 'instagram', label: 'Instagram', url: 'https://instagram.com/translog.company.sro' },
  { id: 'linkedin', label: 'LinkedIn', url: '' },
  { id: 'x', label: 'X', url: '' },
  { id: 'tiktok', label: 'TikTok', url: '' },
  { id: 'youtube', label: 'YouTube', url: '' },
]

export const offices = [
  {
    id: 'prague',
    entity: 'Translog Company s.r.o.',
    address: ['Rohanské nábřeží 693/10', '186 00 Praha'],
    phones: ['+420 222 200 762', '+420 776 783 995'],
  },
  {
    id: 'poland',
    entity: 'Translog Polska Company sp. z o.o.',
    address: [],
    phones: ['+48 664 362 7272'],
  },
]

export const serviceSlugs = ['express', 'dangerous-goods']
export const serviceImages = { express: images.express, 'dangerous-goods': images.terminal }

// Порядок иконок техники совпадает с fleet.items в переводах
export const fleetIcons = ['truck', 'tarp', 'reefer', 'tank', 'van']

export const news = [
  { slug: 'start-translog-company', date: '2016-02-15', image: images.tarpaulin },
]
