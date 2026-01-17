export interface NavLink {
  name: string
  href: string
}

export interface SocialLink {
  icon: React.ComponentType<{ size?: number }>
  href: string
  label: string
}

export interface MenuItem {
  name: string
  price: string
  description: string
  bestseller?: boolean
  category?: string
}

export interface Store {
  id: number
  name: string
  address: string
  state: string
  city: string
  phone: string
  hours: string
  coordinates: {
    lat: number
    lng: number
  }
}

export interface Product {
  id: number
  name: string
  category: string
  price: number
  originalPrice?: number
  rating: number
  reviews: number
  description: string
  bestseller?: boolean
}

export interface Testimonial {
  id: number
  name: string
  role: string
  rating: number
  text: string
}

export interface Leader {
  name: string
  role: string
  description: string
  linkedin?: string
  twitter?: string
}

export interface FAQ {
  question: string
  answer: string
}

export interface Stat {
  number: number
  suffix: string
  label: string
  icon?: string
}
