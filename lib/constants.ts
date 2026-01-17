import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Youtube 
} from 'lucide-react'

export const SITE_CONFIG = {
  name: 'Vanankam',
  tagline: 'Yaar Mera Kulhad',
  description: 'Join India\'s fastest growing tea franchise. Experience authentic kulhad chai with a modern twist.',
  url: 'https://vanankam.com',
  email: 'info@vanankam.com',
  franchiseEmail: 'franchise@vanankam.com',
  phone: '+91-6269112500',
  whatsapp: '916269112500',
  address: '123 Chai Street, Andheri West, Mumbai, Maharashtra 400058',
}

export const NAV_LINKS = [
  { name: 'About Us', href: '/about' },
  { name: 'Menu', href: '/menu' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Store Locator', href: '/store-locator' },
  { name: 'Careers', href: '/careers' },
  { name: 'Products', href: '/products' },
  { name: 'Contact Us', href: '/contact' },
]

export const SOCIAL_LINKS = [
  { icon: Facebook, href: 'https://facebook.com/vanankam', label: 'Facebook' },
  { icon: Twitter, href: 'https://twitter.com/vanankam', label: 'Twitter' },
  { icon: Linkedin, href: 'https://linkedin.com/company/vanankam', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://instagram.com/vanankam', label: 'Instagram' },
  { icon: Youtube, href: 'https://youtube.com/vanankam', label: 'YouTube' },
]

export const STATS = [
  { number: 200, suffix: '+', label: 'Cities', icon: '🏙️' },
  { number: 500, suffix: '+', label: 'Outlets', icon: '🏪' },
  { number: 26, suffix: '+', label: 'States', icon: '📍' },
  { number: 6, suffix: '+', label: 'Countries', icon: '🌍' },
  { number: 200, suffix: 'M+', label: 'Kulhad Served', icon: '🍵' },
]
