Vanankam - Tea Franchise Website (Next.js)
I'll create a comprehensive franchise website inspired by Tealogy's design for "Vanankam". This will be a complete Next.js project with modern UI libraries, animations, and proper structure.

Project Structure
text
vanankam/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   ├── about/
│   │   └── page.tsx
│   ├── menu/
│   │   └── page.tsx
│   ├── gallery/
│   │   └── page.tsx
│   ├── store-locator/
│   │   └── page.tsx
│   ├── careers/
│   │   └── page.tsx
│   ├── products/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   └── franchise/
│       └── page.tsx
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Navbar.tsx
│   │   └── WhatsAppButton.tsx
│   ├── home/
│   │   ├── HeroSection.tsx
│   │   ├── StatsSection.tsx
│   │   ├── MissionVision.tsx
│   │   ├── BlogSection.tsx
│   │   ├── MomentsGallery.tsx
│   │   ├── FAQSection.tsx
│   │   └── LeadersSection.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── Accordion.tsx
│       └── AnimatedCounter.tsx
├── lib/
│   └── utils.ts
├── hooks/
│   └── useScrollAnimation.ts
├── public/
│   └── images/
├── tailwind.config.ts
├── next.config.js
└── package.json
1. Package.json
json
{
  "name": "vanankam-franchise",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "14.0.4",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "framer-motion": "^10.16.16",
    "lucide-react": "^0.303.0",
    "clsx": "^2.0.0",
    "tailwind-merge": "^2.2.0",
    "@radix-ui/react-accordion": "^1.1.2",
    "@radix-ui/react-dialog": "^1.0.5",
    "@radix-ui/react-navigation-menu": "^1.1.4",
    "embla-carousel-react": "^8.0.0",
    "react-intersection-observer": "^9.5.3",
    "aos": "^2.3.4"
  },
  "devDependencies": {
    "@types/node": "^20.10.6",
    "@types/react": "^18.2.46",
    "@types/react-dom": "^18.2.18",
    "@types/aos": "^3.0.7",
    "autoprefixer": "^10.4.16",
    "postcss": "^8.4.32",
    "tailwindcss": "^3.4.0",
    "typescript": "^5.3.3"
  }
}
2. Tailwind Config
typescript
// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2D3748',
          dark: '#1A202C',
          light: '#4A5568',
        },
        accent: {
          DEFAULT: '#F6C000',
          dark: '#D4A600',
          light: '#FFD54F',
        },
        background: {
          DEFAULT: '#FFFFFF',
          gradient: 'linear-gradient(180deg, #E8F4F8 0%, #FCE4EC 100%)',
        }
      },
      fontFamily: {
        heading: ['Oswald', 'sans-serif'],
        body: ['Poppins', 'sans-serif'],
        accent: ['Playfair Display', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'bounce-slow': 'bounce 3s infinite',
        'float': 'float 3s ease-in-out infinite',
        'steam': 'steam 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        steam: {
          '0%': { opacity: '0', transform: 'translateY(0) scale(1)' },
          '50%': { opacity: '1' },
          '100%': { opacity: '0', transform: 'translateY(-20px) scale(1.5)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
3. Global Styles
css
/* app/globals.css */
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Playfair+Display:wght@400;500;600;700&family=Poppins:wght@300;400;500;600;700&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --primary: #2D3748;
  --primary-dark: #1A202C;
  --accent: #F6C000;
  --accent-dark: #D4A600;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Poppins', sans-serif;
  background: linear-gradient(180deg, #E8F4F8 0%, #FCE4EC 50%, #E8F4F8 100%);
  min-height: 100vh;
}

@layer base {
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Oswald', sans-serif;
  }
}

@layer components {
  .section-title {
    @apply text-4xl md:text-5xl font-heading font-bold text-primary-dark text-center uppercase tracking-wide;
  }

  .section-subtitle {
    @apply text-lg md:text-xl text-primary font-medium text-center max-w-4xl mx-auto mt-4;
  }

  .btn-primary {
    @apply bg-accent hover:bg-accent-dark text-primary-dark font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg;
  }

  .btn-secondary {
    @apply bg-primary-dark hover:bg-primary text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105;
  }

  .card-hover {
    @apply transition-all duration-300 hover:shadow-xl hover:-translate-y-2;
  }

  .gradient-bg {
    background: linear-gradient(180deg, #E8F4F8 0%, #FCE4EC 100%);
  }

  .glass-effect {
    @apply bg-white/80 backdrop-blur-md;
  }
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: var(--primary);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--primary-dark);
}

/* Steam animation for kulhad */
.steam {
  position: absolute;
  width: 8px;
  height: 20px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  filter: blur(3px);
  animation: steam 2s ease-in-out infinite;
}

.steam:nth-child(2) {
  animation-delay: 0.5s;
  left: 15px;
}

.steam:nth-child(3) {
  animation-delay: 1s;
  left: 30px;
}
4. Utility Functions
typescript
// lib/utils.ts
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

export const fadeInDown = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.3 }
}
5. Custom Hooks
typescript
// hooks/useScrollAnimation.ts
import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

export const useScrollAnimation = (threshold = 0.1) => {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce: true,
  })

  return { ref, inView }
}

// hooks/useCounter.ts
import { useState, useEffect } from 'react'

export const useCounter = (end: number, duration: number = 2000, start: number = 0) => {
  const [count, setCount] = useState(start)

  useEffect(() => {
    let startTime: number | null = null
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setCount(Math.floor(progress * (end - start) + start))
      if (progress < 1) {
        requestAnimationFrame(step)
      }
    }
    requestAnimationFrame(step)
  }, [end, duration, start])

  return count
}
6. Layout Component
tsx
// app/layout.tsx
import type { Metadata } from 'next'
import { Poppins, Oswald, Playfair_Display } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/layout/WhatsAppButton'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
})

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-oswald',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'Vanankam - Premium Tea Franchise | Yaar Mera Kulhad',
  description: 'Join India\'s fastest growing tea franchise. Experience authentic kulhad chai with a modern twist. 500+ outlets across 200+ cities.',
  keywords: 'tea franchise, kulhad chai, franchise opportunity, Vanankam, tea business',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${oswald.variable} ${playfair.variable}`}>
      <body className="font-body antialiased">
        <Header />
        <main className="pt-20">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
7. Header Component
tsx
// components/layout/Header.tsx
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react'
import { cn } from '@/lib/utils'

const navLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Menu', href: '/menu' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Store Locator', href: '/store-locator' },
  { name: 'Careers', href: '/careers' },
  { name: 'Products', href: '/products' },
  { name: 'Contact Us', href: '/contact' },
]

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Youtube, href: '#', label: 'YouTube' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-primary-dark shadow-lg' : 'bg-primary-dark'
      )}
    >
      {/* Top Bar */}
      <div className="bg-primary-dark border-b border-primary-light/20">
        <div className="container mx-auto px-4 py-2 flex justify-end items-center gap-6">
          <a
            href="tel:+916269112500"
            className="flex items-center gap-2 text-accent hover:text-accent-light transition-colors"
          >
            <Phone size={16} />
            <span className="text-sm font-medium">+91-6269112500</span>
          </a>
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="text-white hover:text-accent transition-colors"
              >
                <social.icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center"
            >
              <span className="text-3xl font-heading font-bold">
                <span className="text-accent">V</span>
                <span className="text-white">ANANKAM</span>
                <span className="text-accent text-lg align-super">®</span>
              </span>
            </motion.div>
            <span className="text-accent text-xs font-medium uppercase tracking-wider">
              Yaar Mera Kulhad
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={link.href}
                  className="text-white hover:text-accent transition-colors font-medium text-sm uppercase tracking-wide"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
            >
              <Link
                href="/franchise"
                className="btn-primary text-sm uppercase tracking-wide"
              >
                Be A Franchise
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-4 pb-4"
            >
              <div className="flex flex-col gap-4">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-white hover:text-accent transition-colors font-medium block py-2"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                <Link
                  href="/franchise"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="btn-primary text-center mt-4"
                >
                  Be A Franchise
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
8. Footer Component
tsx
// components/layout/Footer.tsx
'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Youtube,
  ArrowUp
} from 'lucide-react'

const footerLinks = {
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Our Story', href: '/about#story' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact Us', href: '/contact' },
  ],
  franchise: [
    { name: 'Be A Franchise', href: '/franchise' },
    { name: 'Franchise Model', href: '/franchise#model' },
    { name: 'Investment', href: '/franchise#investment' },
    { name: 'FAQs', href: '/franchise#faq' },
  ],
  menu: [
    { name: 'Hot Beverages', href: '/menu#hot' },
    { name: 'Cold Beverages', href: '/menu#cold' },
    { name: 'Snacks', href: '/menu#snacks' },
    { name: 'Products', href: '/products' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Refund Policy', href: '/refund' },
  ],
}

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Youtube, href: '#', label: 'YouTube' },
]

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-primary-dark text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <span className="text-3xl font-heading font-bold">
                <span className="text-accent">V</span>ANANKAM
                <span className="text-accent text-lg align-super">®</span>
              </span>
              <p className="text-accent text-sm font-medium mt-1">Yaar Mera Kulhad</p>
            </Link>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Experience the authentic taste of traditional Indian chai served in eco-friendly kulhads. 
              Join India's fastest-growing tea franchise and be part of our chai revolution.
            </p>
            <div className="space-y-3">
              <a href="tel:+916269112500" className="flex items-center gap-3 text-gray-300 hover:text-accent transition-colors">
                <Phone size={18} />
                <span>+91-6269112500</span>
              </a>
              <a href="mailto:info@vanankam.com" className="flex items-center gap-3 text-gray-300 hover:text-accent transition-colors">
                <Mail size={18} />
                <span>info@vanankam.com</span>
              </a>
              <div className="flex items-start gap-3 text-gray-300">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span>123 Chai Street, Mumbai, Maharashtra, India - 400001</span>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-6 text-accent">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-accent transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-heading font-semibold mb-6 text-accent">Franchise</h4>
            <ul className="space-y-3">
              {footerLinks.franchise.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-accent transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-heading font-semibold mb-6 text-accent">Menu</h4>
            <ul className="space-y-3">
              {footerLinks.menu.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-accent transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white hover:bg-accent hover:text-primary-dark transition-all duration-300"
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Vanankam. All rights reserved.
          </p>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-24 right-6 w-12 h-12 rounded-full bg-accent text-primary-dark shadow-lg flex items-center justify-center hover:bg-accent-dark transition-colors z-40"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ArrowUp size={20} />
      </motion.button>
    </footer>
  )
}
9. WhatsApp Button Component
tsx
// components/layout/WhatsAppButton.tsx
'use client'

import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/916269112500"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-green-500 text-white shadow-lg flex items-center justify-center z-50 hover:bg-green-600 transition-colors"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <MessageCircle size={28} fill="white" />
    </motion.a>
  )
}
10. Hero Section Component
tsx
// components/home/HeroSection.tsx
'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center gradient-bg overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-accent blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-primary blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 bg-accent/20 text-primary-dark rounded-full text-sm font-medium mb-6"
            >
              🍵 India's #1 Kulhad Chai Franchise
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-primary-dark leading-tight mb-6"
            >
              Where Every Sip
              <span className="text-accent"> Tells a Story</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-primary mb-8 leading-relaxed"
            >
              Experience the authentic taste of traditional Indian chai, served in 
              eco-friendly kulhads. Join the chai revolution with Vanankam!
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Link href="/franchise" className="btn-primary text-lg">
                Become a Franchisee
              </Link>
              <Link href="/menu" className="btn-secondary text-lg">
                Explore Menu
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Content - Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full h-[500px] lg:h-[600px]">
              {/* Main Character Image */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="absolute right-0 bottom-0 w-80 h-96 lg:w-96 lg:h-[500px]"
              >
                <div className="relative w-full h-full">
                  {/* Placeholder for mascot/character */}
                  <div className="w-full h-full bg-gradient-to-b from-gray-200 to-gray-300 rounded-2xl flex items-center justify-center">
                    <span className="text-gray-500 text-lg">Mascot Image</span>
                  </div>
                </div>
              </motion.div>

              {/* Floating Kulhad with Stats */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
                className="absolute top-10 left-0 flex flex-wrap gap-4"
              >
                {/* Kulhad Stats */}
                <KulhadStat number="200+" label="Cities" delay={0.7} />
                <KulhadStat number="500+" label="Outlets" delay={0.8} />
                <KulhadStat number="26+" label="States" delay={0.9} />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 }}
                className="absolute top-48 left-0 flex gap-4"
              >
                <KulhadStat number="6+" label="Countries" delay={1.1} />
                <KulhadStat number="200M+" label="Kulhad Served" delay={1.2} />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function KulhadStat({ number, label, delay }: { number: string; label: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="relative"
    >
      {/* Kulhad Shape */}
      <div className="relative w-24 h-28">
        {/* Steam Animation */}
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex gap-1">
          <div className="steam" />
          <div className="steam" />
          <div className="steam" />
        </div>
        
        {/* Kulhad Body */}
        <div className="w-full h-full bg-amber-700 rounded-b-2xl rounded-t-lg relative overflow-hidden">
          <div className="absolute inset-2 bg-amber-800 rounded-b-xl rounded-t-md flex flex-col items-center justify-center text-white">
            <span className="text-lg font-bold">{number}</span>
            <span className="text-xs">{label}</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
11. Stats Section Component
tsx
// components/home/StatsSection.tsx
'use client'

import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const stats = [
  { number: 200, suffix: '+', label: 'Cities', icon: '🏙️' },
  { number: 500, suffix: '+', label: 'Outlets', icon: '🏪' },
  { number: 26, suffix: '+', label: 'States', icon: '📍' },
  { number: 6, suffix: '+', label: 'Countries', icon: '🌍' },
  { number: 200, suffix: 'M+', label: 'Kulhad Served', icon: '🍵' },
]

function AnimatedCounter({ end, suffix, duration = 2000 }: { end: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0)
  const { ref, inView } = useInView({ triggerOnce: true })
  const countRef = useRef(0)

  useEffect(() => {
    if (inView) {
      const startTime = Date.now()
      const interval = setInterval(() => {
        const elapsed = Date.now() - startTime
        const progress = Math.min(elapsed / duration, 1)
        const current = Math.floor(progress * end)
        
        if (current !== countRef.current) {
          countRef.current = current
          setCount(current)
        }
        
        if (progress >= 1) {
          clearInterval(interval)
        }
      }, 16)
      
      return () => clearInterval(interval)
    }
  }, [inView, end, duration])

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  )
}

export default function StatsSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section ref={ref} className="py-20 bg-primary-dark">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            Our <span className="text-accent">Journey</span> So Far
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            From a single outlet to a nationwide phenomenon, here's our story in numbers
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-5xl mb-4">{stat.icon}</div>
              <div className="text-4xl md:text-5xl font-heading font-bold text-accent mb-2">
                <AnimatedCounter end={stat.number} suffix={stat.suffix} />
              </div>
              <p className="text-gray-300 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
12. Mission & Vision Section
tsx
// components/home/MissionVision.tsx
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

export default function MissionVision() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section ref={ref} className="py-20 gradient-bg">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="section-title mb-16"
        >
          Our Mission & Our Vision
        </motion.h2>

        <div className="space-y-16">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden mx-auto shadow-2xl">
                <div className="w-full h-full bg-gradient-to-br from-primary-dark to-primary flex items-center justify-center">
                  <div className="text-center text-white p-8">
                    <p className="text-2xl font-accent italic">Who needs a राज</p>
                    <p className="text-2xl font-accent italic">When there is a चाय</p>
                  </div>
                </div>
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-xl" />
            </div>

            <div>
              <h3 className="text-3xl md:text-4xl font-heading font-bold text-primary-dark mb-6">
                Our Mission
              </h3>
              <p className="text-lg text-primary leading-relaxed">
                Our mission is to create an exceptionally crafted, BEST-IN-CLASS ambience 
                for our KULHAD CHAI and take it across the globe. In addition, We strive to 
                serve a variety of delightful appetizers and beverages featuring INDO-WESTERN 
                cuisine with aromatic experiences that create cheerful memories to cherish.
              </p>
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div className="order-2 lg:order-1">
              <h3 className="text-3xl md:text-4xl font-heading font-bold text-primary-dark mb-6">
                Our Vision
              </h3>
              <p className="text-lg text-primary leading-relaxed">
                Our vision is to facilitate delish TEA and appetizing snacks while also giving 
                back to the community and providing employment to the needy. We are building a 
                pave to benefit people. We're also aware of the concept of being in harmony with 
                nature. Our use of ZERO plastic and solution to replace it with biodegradable 
                KULHAD makes Vanankam one of its kind and completely eco-friendly.
              </p>
            </div>

            <div className="relative order-1 lg:order-2">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden mx-auto shadow-2xl">
                <div className="w-full h-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center">
                  <span className="text-white text-lg">Cafe Interior</span>
                </div>
              </div>
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent/20 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-full blur-xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
13. Blog Section Component
tsx
// components/home/BlogSection.tsx
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import Image from 'next/image'

const blogs = [
  {
    id: 1,
    title: 'Benefits of Choosing a Top-notch Branded Tea Shop Franchise',
    excerpt: 'If you have entrepreneurial zeal, then opening a tea shop franchise is an excellent idea. You can seek expert advice and guidance from a certified brand.',
    image: '/images/blog1.jpg',
    slug: 'benefits-tea-shop-franchise',
  },
  {
    id: 2,
    title: 'Store Size Essentials for Opening a Coffee Franchise in India',
    excerpt: 'It is a fantastic thing to open a new franchise of a coffee shop. Ensure you work under a reputable brand for an impressive ROI.',
    image: '/images/blog2.jpg',
    slug: 'store-size-essentials-coffee-franchise',
  },
  {
    id: 3,
    title: 'Maximizing ROI on Your Cafe Franchise: A Strategic Guide',
    excerpt: 'Investing in a cafe franchise can be a rewarding venture, especially in a dynamic market like India.',
    image: '/images/blog3.jpg',
    slug: 'maximizing-roi-cafe-franchise',
  },
]

export default function BlogSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section ref={ref} className="py-20 gradient-bg">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <h2 className="section-title">Latest Insights</h2>
          <p className="section-subtitle">
            Stay updated with the latest trends, tips, and news from the world of tea franchising
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.article
              key={blog.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg card-hover"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <span className="text-gray-500">Blog Image</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-heading font-bold text-primary-dark mb-3 line-clamp-2 hover:text-accent transition-colors">
                  <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
                </h3>
                <p className="text-primary text-sm leading-relaxed line-clamp-3 mb-4">
                  {blog.excerpt}
                </p>
                <Link
                  href={`/blog/${blog.slug}`}
                  className="text-accent font-semibold text-sm hover:text-accent-dark transition-colors"
                >
                  Read More →
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link href="/blog" className="btn-primary">
            View All
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
14. Moments Gallery Component
tsx
// components/home/MomentsGallery.tsx
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

const galleryImages = [
  { id: 1, src: '/images/moment1.jpg', alt: 'Customer enjoying chai', size: 'small' },
  { id: 2, src: '/images/moment2.jpg', alt: 'Fresh beverages', size: 'small' },
  { id: 3, src: '/images/moment3.jpg', alt: 'Snacks and drinks', size: 'small' },
  { id: 4, src: '/images/moment4.jpg', alt: 'Kulhad chai', size: 'small' },
  { id: 5, src: '/images/moment5.jpg', alt: 'Store front', size: 'large' },
  { id: 6, src: '/images/moment6.jpg', alt: 'Happy customer', size: 'small' },
  { id: 7, src: '/images/moment7.jpg', alt: 'Staff serving', size: 'small' },
  { id: 8, src: '/images/moment8.jpg', alt: 'Family time', size: 'small' },
  { id: 9, src: '/images/moment9.jpg', alt: 'Takeaway', size: 'small' },
]

export default function MomentsGallery() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section ref={ref} className="py-20 gradient-bg">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <h2 className="section-title">Moments @ Vanankam</h2>
          <p className="section-subtitle uppercase tracking-wide text-primary font-medium mt-6">
            Experience cherished moments at Vanankam, where every sip tells a story. 
            Join at our tea franchise for a journey of flavor, culture, and community, 
            creating memorable tea moments together.
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.05 }}
              className={`relative overflow-hidden rounded-xl group cursor-pointer ${
                image.size === 'large' ? 'col-span-2 row-span-2' : ''
              }`}
            >
              <div className={`${image.size === 'large' ? 'h-[340px]' : 'h-40'} w-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center`}>
                <span className="text-gray-500 text-sm">Gallery Image</span>
              </div>
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-accent/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1.2 }}
                  className="w-12 h-12 rounded-full bg-white flex items-center justify-center"
                >
                  <svg className="w-6 h-6 text-primary-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
15. FAQ Section Component
tsx
// components/home/FAQSection.tsx
'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    question: 'Who are the founders of Vanankam?',
    answer: 'Vanankam was founded by passionate tea enthusiasts who wanted to bring the authentic taste of kulhad chai to tea lovers across India and beyond. Our founders have over 15 years of experience in the food and beverage industry.',
  },
  {
    question: 'What is the net worth of Vanankam?',
    answer: 'Vanankam has grown significantly since its inception and is currently valued at a substantial amount, reflecting our strong market presence and successful franchise model across 200+ cities.',
  },
  {
    question: 'How many outlets does Vanankam currently have?',
    answer: 'Vanankam currently operates 500+ outlets across 26+ states in India and has expanded to 6+ countries internationally, serving millions of customers annually.',
  },
  {
    question: 'What makes Vanankam the best tea franchise brand in India?',
    answer: 'Our unique selling proposition includes authentic kulhad chai, eco-friendly practices with zero plastic usage, comprehensive franchise support, proven business model, and a strong brand presence that resonates with tea lovers.',
  },
  {
    question: 'How can I apply for a Vanankam franchise?',
    answer: 'You can apply for a Vanankam franchise by filling out our online application form, attending our franchise discovery day, or contacting our franchise team directly. We provide complete support from store setup to operations training.',
  },
  {
    question: 'What store size is required to open a Vanankam franchise?',
    answer: 'The minimum store size requirement varies based on the franchise model chosen. Our kiosk model requires 100-150 sq ft, while our cafe format requires 400-800 sq ft. We offer flexible models to suit different investment capacities.',
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <h2 className="section-title">Frequently Asked Questions</h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-primary-dark pr-4">
                  {faq.question}
                </span>
                <span className="flex-shrink-0 text-primary">
                  {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </span>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                      <p className="text-primary leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
16. Leaders Section Component
tsx
// components/home/LeadersSection.tsx
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Linkedin, Twitter } from 'lucide-react'

const leaders = [
  {
    name: 'Rajesh Kumar',
    role: 'Founder & CEO',
    image: '/images/leader1.jpg',
    description: 'Visionary entrepreneur with 15+ years in F&B industry',
    linkedin: '#',
    twitter: '#',
  },
  {
    name: 'Priya Sharma',
    role: 'Co-Founder & COO',
    image: '/images/leader2.jpg',
    description: 'Operations expert driving franchise excellence',
    linkedin: '#',
    twitter: '#',
  },
  {
    name: 'Amit Patel',
    role: 'Chief Marketing Officer',
    image: '/images/leader3.jpg',
    description: 'Brand strategist building the Vanankam story',
    linkedin: '#',
    twitter: '#',
  },
  {
    name: 'Sneha Reddy',
    role: 'Head of Franchise Development',
    image: '/images/leader4.jpg',
    description: 'Expanding Vanankam across India and beyond',
    linkedin: '#',
    twitter: '#',
  },
]

export default function LeadersSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section ref={ref} className="py-20 gradient-bg">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="section-title">Our Leaders</h2>
          <p className="section-subtitle">
            Meet the passionate team behind Vanankam's success story
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg card-hover">
                {/* Image */}
                <div className="relative h-72 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center">
                    <span className="text-white text-6xl">👤</span>
                  </div>
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-accent/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <a
                      href={leader.linkedin}
                      className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary-dark hover:bg-primary-dark hover:text-white transition-colors"
                    >
                      <Linkedin size={20} />
                    </a>
                    <a
                      href={leader.twitter}
                      className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary-dark hover:bg-primary-dark hover:text-white transition-colors"
                    >
                      <Twitter size={20} />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 text-center">
                  <h3 className="text-xl font-heading font-bold text-primary-dark mb-1">
                    {leader.name}
                  </h3>
                  <p className="text-accent font-semibold text-sm mb-2">{leader.role}</p>
                  <p className="text-primary text-sm">{leader.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
17. Main Home Page
tsx
// app/page.tsx
import HeroSection from '@/components/home/HeroSection'
import StatsSection from '@/components/home/StatsSection'
import MissionVision from '@/components/home/MissionVision'
import BlogSection from '@/components/home/BlogSection'
import MomentsGallery from '@/components/home/
Claude Opus 4.5
continue till complition


17. Main Home Page (continued)
tsx
// app/page.tsx
import HeroSection from '@/components/home/HeroSection'
import StatsSection from '@/components/home/StatsSection'
import MissionVision from '@/components/home/MissionVision'
import BlogSection from '@/components/home/BlogSection'
import MomentsGallery from '@/components/home/MomentsGallery'
import FAQSection from '@/components/home/FAQSection'
import LeadersSection from '@/components/home/LeadersSection'
import FranchiseSection from '@/components/home/FranchiseSection'
import TestimonialsSection from '@/components/home/TestimonialsSection'
import TradeMarksSection from '@/components/home/TradeMarksSection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <MissionVision />
      <FranchiseSection />
      <BlogSection />
      <MomentsGallery />
      <TestimonialsSection />
      <TradeMarksSection />
      <FAQSection />
      <LeadersSection />
    </>
  )
}
18. Franchise Section Component
tsx
// components/home/FranchiseSection.tsx
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import { CheckCircle, TrendingUp, Users, Award, Headphones, Package } from 'lucide-react'

const franchiseFeatures = [
  {
    icon: TrendingUp,
    title: 'High ROI',
    description: 'Get impressive returns with our proven business model',
  },
  {
    icon: Users,
    title: 'Complete Training',
    description: 'Comprehensive training for you and your staff',
  },
  {
    icon: Award,
    title: 'Brand Recognition',
    description: 'Leverage our established brand presence',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Round-the-clock assistance for all your queries',
  },
  {
    icon: Package,
    title: 'Supply Chain',
    description: 'Streamlined supply chain for consistent quality',
  },
  {
    icon: CheckCircle,
    title: 'Low Investment',
    description: 'Start your journey with minimal investment',
  },
]

const franchiseModels = [
  {
    name: 'Kiosk Model',
    investment: '₹5-8 Lakhs',
    area: '100-150 sq ft',
    features: ['Quick Setup', 'High Footfall Areas', 'Low Operational Cost'],
  },
  {
    name: 'Express Model',
    investment: '₹10-15 Lakhs',
    area: '200-300 sq ft',
    features: ['Extended Menu', 'Seating Available', 'Premium Locations'],
    popular: true,
  },
  {
    name: 'Cafe Model',
    investment: '₹20-30 Lakhs',
    area: '400-800 sq ft',
    features: ['Full Menu', 'Dine-in Experience', 'Premium Ambience'],
  },
]

export default function FranchiseSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section ref={ref} className="py-20 bg-primary-dark">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            Be a Part of the <span className="text-accent">Chai Revolution</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Join India's fastest-growing tea franchise and start your entrepreneurial journey 
            with Vanankam. We provide everything you need to succeed.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {franchiseFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors"
            >
              <feature.icon className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-heading font-bold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Franchise Models */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="mb-12"
        >
          <h3 className="text-3xl font-heading font-bold text-white text-center mb-12">
            Choose Your <span className="text-accent">Franchise Model</span>
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {franchiseModels.map((model, index) => (
              <motion.div
                key={model.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5 + index * 0.1 }}
                className={`relative bg-white rounded-2xl p-8 ${
                  model.popular ? 'ring-4 ring-accent shadow-2xl scale-105' : 'shadow-lg'
                }`}
              >
                {model.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-primary-dark px-4 py-1 rounded-full text-sm font-bold">
                    Most Popular
                  </div>
                )}

                <h4 className="text-2xl font-heading font-bold text-primary-dark mb-4">
                  {model.name}
                </h4>

                <div className="mb-6">
                  <p className="text-3xl font-bold text-accent">{model.investment}</p>
                  <p className="text-gray-500">Investment Required</p>
                </div>

                <div className="mb-6">
                  <p className="text-lg font-semibold text-primary">{model.area}</p>
                  <p className="text-gray-500">Area Required</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {model.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-primary">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/franchise"
                  className={`block text-center py-3 px-6 rounded-full font-semibold transition-all ${
                    model.popular
                      ? 'bg-accent text-primary-dark hover:bg-accent-dark'
                      : 'bg-primary-dark text-white hover:bg-primary'
                  }`}
                >
                  Apply Now
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center"
        >
          <Link href="/franchise" className="btn-primary text-lg">
            Start Your Franchise Journey
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
19. Testimonials Section Component
tsx
// components/home/TestimonialsSection.tsx
'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Rahul Verma',
    role: 'Franchise Owner, Mumbai',
    image: '/images/testimonial1.jpg',
    rating: 5,
    text: 'Joining Vanankam was the best decision of my life. The support from the team is phenomenal, and the ROI exceeded my expectations. Within 6 months, I recovered my investment!',
  },
  {
    id: 2,
    name: 'Anita Singh',
    role: 'Franchise Owner, Delhi',
    image: '/images/testimonial2.jpg',
    rating: 5,
    text: 'The training provided by Vanankam is world-class. They hold your hand throughout the journey. My outlet is now one of the top-performing stores in the region.',
  },
  {
    id: 3,
    name: 'Vikram Patel',
    role: 'Franchise Owner, Bangalore',
    image: '/images/testimonial3.jpg',
    rating: 5,
    text: 'What I love about Vanankam is their commitment to quality and eco-friendly practices. Customers appreciate the kulhad chai concept, and business has been booming since day one.',
  },
  {
    id: 4,
    name: 'Priya Mehta',
    role: 'Franchise Owner, Pune',
    image: '/images/testimonial4.jpg',
    rating: 5,
    text: 'As a first-time entrepreneur, I was nervous about starting a business. Vanankam made it so easy with their comprehensive support system. Highly recommended!',
  },
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const nextTestimonial = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 5000)
    return () => clearInterval(timer)
  }, [])

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  }

  return (
    <section ref={ref} className="py-20 gradient-bg">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <h2 className="section-title">What Our Franchisees Say</h2>
          <p className="section-subtitle">
            Hear success stories from our franchise partners across India
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-primary-dark hover:bg-accent hover:text-white transition-colors"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-primary-dark hover:bg-accent hover:text-white transition-colors"
          >
            <ChevronRight size={24} />
          </button>

          {/* Testimonial Card */}
          <div className="overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
              >
                <div className="flex flex-col md:flex-row items-center gap-8">
                  {/* Avatar */}
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-accent to-accent-dark flex items-center justify-center text-4xl">
                      👤
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 text-center md:text-left">
                    <Quote className="w-10 h-10 text-accent/30 mb-4 mx-auto md:mx-0" />
                    
                    <p className="text-lg md:text-xl text-primary leading-relaxed mb-6">
                      "{testimonials[currentIndex].text}"
                    </p>

                    {/* Rating */}
                    <div className="flex items-center justify-center md:justify-start gap-1 mb-4">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-accent fill-accent" />
                      ))}
                    </div>

                    <h4 className="text-xl font-heading font-bold text-primary-dark">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-accent font-medium">
                      {testimonials[currentIndex].role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1)
                  setCurrentIndex(index)
                }}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-accent w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
20. Trade Marks Section Component
tsx
// components/home/TradeMarksSection.tsx
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Shield, Award, CheckCircle } from 'lucide-react'

const trademarks = [
  {
    title: 'Registered Trademark',
    description: 'Vanankam® is a registered trademark protected under Indian law',
    icon: Shield,
  },
  {
    title: 'FSSAI Certified',
    description: 'All our products are FSSAI certified for quality and safety',
    icon: Award,
  },
  {
    title: 'ISO Certified',
    description: 'ISO 9001:2015 certified for quality management systems',
    icon: CheckCircle,
  },
]

const certifications = [
  { name: 'FSSAI', image: '/images/fssai.png' },
  { name: 'ISO 9001', image: '/images/iso.png' },
  { name: 'MSME', image: '/images/msme.png' },
  { name: 'Startup India', image: '/images/startup-india.png' },
]

export default function TradeMarksSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="section-title">Our Trade Marks</h2>
          <p className="section-subtitle">
            Quality certifications and recognitions that speak for our commitment to excellence
          </p>
        </motion.div>

        {/* Trademarks Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {trademarks.map((trademark, index) => (
            <motion.div
              key={trademark.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="text-center p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                <trademark.icon className="w-10 h-10 text-accent" />
              </div>
              <h3 className="text-xl font-heading font-bold text-primary-dark mb-3">
                {trademark.title}
              </h3>
              <p className="text-primary">{trademark.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Certifications Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-8 md:gap-16"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="w-24 h-24 md:w-32 md:h-32 rounded-xl bg-gray-100 flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all"
            >
              <span className="text-gray-500 text-sm text-center font-medium">{cert.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
21. About Page
tsx
// app/about/page.tsx
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import MissionVision from '@/components/home/MissionVision'
import LeadersSection from '@/components/home/LeadersSection'
import StatsSection from '@/components/home/StatsSection'

export default function AboutPage() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-32 bg-primary-dark overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-6">
              About <span className="text-accent">Vanankam</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the story behind India's most loved kulhad chai brand
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section ref={ref} className="py-20 gradient-bg">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-dark mb-6">
                Our <span className="text-accent">Story</span>
              </h2>
              <div className="space-y-4 text-lg text-primary leading-relaxed">
                <p>
                  Vanankam began with a simple yet powerful vision - to bring the authentic taste 
                  of traditional Indian chai to every corner of the country, served in the most 
                  eco-friendly way possible through kulhads.
                </p>
                <p>
                  What started as a single outlet in 2018 has now grown into a nationwide phenomenon 
                  with over 500 outlets across 26+ states and 6 countries. Our journey has been 
                  fueled by the love of millions of chai enthusiasts who believe in our mission.
                </p>
                <p>
                  At Vanankam, we don't just serve chai - we serve memories. Every kulhad of chai 
                  carries with it the warmth of tradition, the aroma of carefully selected tea leaves, 
                  and the promise of an experience that goes beyond just a beverage.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <div className="w-full h-full bg-gradient-to-br from-amber-600 to-amber-800 flex items-center justify-center">
                  <span className="text-white text-xl">Story Image</span>
                </div>
              </div>
              
              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-8 -left-8 bg-accent rounded-2xl p-6 shadow-xl"
              >
                <p className="text-4xl font-heading font-bold text-primary-dark">5+</p>
                <p className="text-primary-dark font-medium">Years of Excellence</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title mb-16"
          >
            Our <span className="text-accent">Journey</span>
          </motion.h2>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-accent/30 -translate-x-1/2 hidden md:block" />

            {/* Timeline Items */}
            {[
              { year: '2018', title: 'The Beginning', description: 'Opened our first outlet with a dream to revolutionize chai culture' },
              { year: '2019', title: 'Rapid Growth', description: 'Expanded to 50 outlets across 5 states' },
              { year: '2020', title: 'Franchise Model', description: 'Launched franchise program, empowering entrepreneurs' },
              { year: '2021', title: 'Pan India', description: 'Reached 200 outlets across 15 states' },
              { year: '2022', title: 'Going Global', description: 'International expansion to 4 countries' },
              { year: '2023', title: 'Industry Leader', description: '500+ outlets, 200M+ kulhads served' },
            ].map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative flex items-center gap-8 mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="bg-white rounded-xl p-6 shadow-lg inline-block">
                    <span className="text-accent font-heading font-bold text-2xl">{item.year}</span>
                    <h3 className="text-xl font-heading font-bold text-primary-dark mt-2">{item.title}</h3>
                    <p className="text-primary mt-2">{item.description}</p>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="hidden md:flex w-6 h-6 rounded-full bg-accent border-4 border-white shadow-lg z-10" />

                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <MissionVision />
      <StatsSection />
      <LeadersSection />
    </>
  )
}
22. Menu Page
tsx
// app/menu/page.tsx
'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const categories = [
  { id: 'hot', name: 'Hot Beverages', icon: '☕' },
  { id: 'cold', name: 'Cold Beverages', icon: '🧊' },
  { id: 'snacks', name: 'Snacks', icon: '🍿' },
  { id: 'special', name: 'Specials', icon: '⭐' },
]

const menuItems = {
  hot: [
    { name: 'Kulhad Masala Chai', price: '₹30', description: 'Traditional masala chai served in kulhad', bestseller: true },
    { name: 'Kulhad Adrak Chai', price: '₹35', description: 'Ginger-infused aromatic chai', bestseller: false },
    { name: 'Kulhad Elaichi Chai', price: '₹40', description: 'Cardamom flavored premium chai', bestseller: true },
    { name: 'Kulhad Cutting Chai', price: '₹20', description: 'Classic Mumbai-style cutting chai', bestseller: false },
    { name: 'Kulhad Kadak Chai', price: '₹35', description: 'Strong and bold chai for chai lovers', bestseller: true },
    { name: 'Kulhad Tulsi Chai', price: '₹40', description: 'Holy basil infused healthy chai', bestseller: false },
    { name: 'Hot Coffee', price: '₹50', description: 'Rich and aromatic filter coffee', bestseller: false },
    { name: 'Hot Chocolate', price: '₹60', description: 'Creamy Belgian hot chocolate', bestseller: false },
  ],
  cold: [
    { name: 'Iced Tea', price: '₹50', description: 'Refreshing lemon iced tea', bestseller: true },
    { name: 'Cold Coffee', price: '₹60', description: 'Creamy cold coffee with ice cream', bestseller: true },
    { name: 'Mango Shake', price: '₹70', description: 'Fresh Alphonso mango milkshake', bestseller: false },
    { name: 'Lassi', price: '₹50', description: 'Traditional sweet yogurt drink', bestseller: true },
    { name: 'Masala Chaas', price: '₹40', description: 'Spiced buttermilk', bestseller: false },
    { name: 'Fresh Lime Soda', price: '₹40', description: 'Tangy and refreshing lime soda', bestseller: false },
  ],
  snacks: [
    { name: 'Samosa', price: '₹20', description: 'Crispy potato-filled pastry', bestseller: true },
    { name: 'Vada Pav', price: '₹25', description: 'Mumbai\'s favorite street food', bestseller: true },
    { name: 'Bread Pakora', price: '₹30', description: 'Spiced potato stuffed bread fritters', bestseller: false },
    { name: 'Kachori', price: '₹25', description: 'Flaky pastry with spiced filling', bestseller: false },
    { name: 'Bun Maska', price: '₹35', description: 'Soft bun with butter', bestseller: true },
    { name: 'Toast Sandwich', price: '₹40', description: 'Grilled vegetable sandwich', bestseller: false },
    { name: 'Maggi', price: '₹50', description: 'Classic instant noodles', bestseller: true },
    { name: 'Poha', price: '₹40', description: 'Flattened rice with spices', bestseller: false },
  ],
  special: [
    { name: 'Chai & Samosa Combo', price: '₹45', description: 'Perfect evening snack combo', bestseller: true },
    { name: 'Royal Chai Platter', price: '₹150', description: '3 chai varieties + assorted snacks', bestseller: true },
    { name: 'Monsoon Special', price: '₹80', description: 'Pakoras + hot chai combo', bestseller: false },
    { name: 'Family Pack', price: '₹250', description: '4 chai + 4 snacks combo', bestseller: false },
  ],
}

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState('hot')
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-32 bg-primary-dark overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-6">
              Our <span className="text-accent">Menu</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our delicious range of beverages and snacks
            </p>
          </motion.div>
        </div>
      </section>

      {/* Menu Section */}
      <section ref={ref} className="py-20 gradient-bg">
        <div className="container mx-auto px-4">
          {/* Category Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all ${
                  activeCategory === category.id
                    ? 'bg-accent text-primary-dark shadow-lg scale-105'
                    : 'bg-white text-primary-dark hover:bg-gray-100'
                }`}
              >
                <span className="text-xl">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </motion.div>

          {/* Menu Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {menuItems[activeCategory as keyof typeof menuItems].map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow relative"
                >
                  {item.bestseller && (
                    <span className="absolute top-4 right-4 bg-accent text-primary-dark text-xs font-bold px-2 py-1 rounded-full">
                      Bestseller
                    </span>
                  )}

                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                    <span className="text-3xl">
                      {activeCategory === 'hot' ? '☕' : activeCategory === 'cold' ? '🧊' : '🍽️'}
                    </span>
                  </div>

                  <h3 className="text-lg font-heading font-bold text-primary-dark mb-2">
                    {item.name}
                  </h3>
                  <p className="text-gray-500 text-sm mb-4">{item.description}</p>
                  <p className="text-2xl font-bold text-accent">{item.price}</p>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </>
  )
}
23. Gallery Page
tsx
// app/gallery/page.tsx
'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

const galleryCategories = ['All', 'Outlets', 'Beverages', 'Events', 'Team']

const galleryImages = [
  { id: 1, category: 'Outlets', title: 'Mumbai Store' },
  { id: 2, category: 'Beverages', title: 'Masala Chai' },
  { id: 3, category: 'Events', title: 'Grand Opening' },
  { id: 4, category: 'Team', title: 'Our Team' },
  { id: 5, category: 'Outlets', title: 'Delhi Store' },
  { id: 6, category: 'Beverages', title: 'Cold Coffee' },
  { id: 7, category: 'Events', title: 'Chai Festival' },
  { id: 8, category: 'Team', title: 'Training Session' },
  { id: 9, category: 'Outlets', title: 'Bangalore Store' },
  { id: 10, category: 'Beverages', title: 'Kulhad Collection' },
  { id: 11, category: 'Events', title: 'Customer Meet' },
  { id: 12, category: 'Outlets', title: 'Pune Store' },
]

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const filteredImages = activeCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory)

  const currentImageIndex = selectedImage !== null 
    ? filteredImages.findIndex(img => img.id === selectedImage)
    : -1

  const goToNext = () => {
    if (currentImageIndex < filteredImages.length - 1) {
      setSelectedImage(filteredImages[currentImageIndex + 1].id)
    }
  }

  const goToPrev = () => {
    if (currentImageIndex > 0) {
      setSelectedImage(filteredImages[currentImageIndex - 1].id)
    }
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-32 bg-primary-dark overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-6">
              Our <span className="text-accent">Gallery</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A visual journey through the Vanankam experience
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section ref={ref} className="py-20 gradient-bg">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {galleryCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  activeCategory === category
                    ? 'bg-accent text-primary-dark'
                    : 'bg-white text-primary-dark hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Gallery Grid */}
          <motion.div
            layout
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            <AnimatePresence>
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group"
                  onClick={() => setSelectedImage(image.id)}
                >
                  <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    <span className="text-gray-500">{image.title}</span>
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-primary-dark/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="text-center text-white">
                      <p className="font-heading font-bold text-lg">{image.title}</p>
                      <p className="text-sm text-accent">{image.category}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-white hover:text-accent transition-colors z-10"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>

            {/* Navigation Buttons */}
            {currentImageIndex > 0 && (
              <button
                className="absolute left-4 text-white hover:text-accent transition-colors z-10"
                onClick={(e) => { e.stopPropagation(); goToPrev() }}
              >
                <ChevronLeft size={48} />
              </button>
            )}

            {currentImageIndex < filteredImages.length - 1 && (
              <button
                className="absolute right-4 text-white hover:text-accent transition-colors z-10"
                onClick={(e) => { e.stopPropagation(); goToNext() }}
              >
                <ChevronRight size={48} />
              </button>
            )}

            {/* Image */}
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="max-w-4xl max-h-[80vh] w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <span className="text-white text-2xl">
                {filteredImages[currentImageIndex]?.title}
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
24. Store Locator Page
tsx
// app/store-locator/page.tsx
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Search, MapPin, Phone, Clock, Navigation } from 'lucide-react'

const states = [
  'All States', 'Maharashtra', 'Delhi', 'Karnataka', 'Tamil Nadu', 'Gujarat',
  'Rajasthan', 'Uttar Pradesh', 'Madhya Pradesh', 'West Bengal', 'Punjab'
]

const stores = [
  {
    id: 1,
    name: 'Vanankam - Andheri West',
    address: 'Shop No. 15, Link Road, Andheri West, Mumbai - 400058',
    state: 'Maharashtra',
    city: 'Mumbai',
    phone: '+91 98765 43210',
    hours: '7:00 AM - 11:00 PM',
    coordinates: { lat: 19.1364, lng: 72.8296 },
  },
  {
    id: 2,
    name: 'Vanankam - Connaught Place',
    address: 'Block B, Connaught Place, New Delhi - 110001',
    state: 'Delhi',
    city: 'New Delhi',
    phone: '+91 98765 43211',
    hours: '8:00 AM - 10:00 PM',
    coordinates: { lat: 28.6315, lng: 77.2167 },
  },
  {
    id: 3,
    name: 'Vanankam - Koramangala',
    address: '80 Feet Road, Koramangala, Bangalore - 560034',
    state: 'Karnataka',
    city: 'Bangalore',
    phone: '+91 98765 43212',
    hours: '7:00 AM - 11:00 PM',
    coordinates: { lat: 12.9352, lng: 77.6245 },
  },
  {
    id: 4,
    name: 'Vanankam - T Nagar',
    address: 'Usman Road, T Nagar, Chennai - 600017',
    state: 'Tamil Nadu',
    city: 'Chennai',
    phone: '+91 98765 43213',
    hours: '6:00 AM - 10:00 PM',
    coordinates: { lat: 13.0418, lng: 80.2341 },
  },
  {
    id: 5,
    name: 'Vanankam - CG Road',
    address: 'CG Road, Navrangpura, Ahmedabad - 380009',
    state: 'Gujarat',
    city: 'Ahmedabad',
    phone: '+91 98765 43214',
    hours: '7:00 AM - 10:00 PM',
    coordinates: { lat: 23.0339, lng: 72.5619 },
  },
  {
    id: 6,
    name: 'Vanankam - MI Road',
    address: 'MI Road, Jaipur - 302001',
    state: 'Rajasthan',
    city: 'Jaipur',
    phone: '+91 98765 43215',
    hours: '7:00 AM - 11:00 PM',
    coordinates: { lat: 26.9157, lng: 75.8064 },
  },
]

export default function StoreLocatorPage() {
  const [selectedState, setSelectedState] = useState('All States')
  const [searchQuery, setSearchQuery] = useState('')
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const filteredStores = stores.filter(store => {
    const matchesState = selectedState === 'All States' || store.state === selectedState
    const matchesSearch = store.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         store.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         store.address.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesState && matchesSearch
  })

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-32 bg-primary-dark overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-6">
              Store <span className="text-accent">Locator</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Find a Vanankam outlet near you
            </p>
          </motion.div>
        </div>
      </section>

      {/* Store Locator Section */}
      <section ref={ref} className="py-20 gradient-bg">
        <div className="container mx-auto px-4">
          {/* Search & Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="bg-white rounded-2xl shadow-xl p-6 mb-12"
          >
            <div className="grid md:grid-cols-3 gap-4">
              {/* Search Input */}
              <div className="md:col-span-2 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search by city, area, or store name..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>

              {/* State Filter */}
              <select
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                className="px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent bg-white"
              >
                {states.map((state) => (
                  <option key={state} value={state}>{state}</option>
                ))}
              </select>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              className="bg-gray-200 rounded-2xl h-[500px] lg:h-full min-h-[400px] flex items-center justify-center"
            >
              <div className="text-center text-gray-500">
                <MapPin size={48} className="mx-auto mb-4" />
                <p>Interactive Map</p>
                <p className="text-sm">(Google Maps Integration)</p>
              </div>
            </motion.div>

            {/* Store List */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              className="space-y-4 max-h-[600px] overflow-y-auto pr-4"
            >
              <p className="text-primary font-semibold mb-4">
                {filteredStores.length} stores found
              </p>

              {filteredStores.map((store, index) => (
                <motion.div
                  key={store.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <h3 className="text-lg font-heading font-bold text-primary-dark mb-3">
                    {store.name}
                  </h3>

                  <div className="space-y-2 text-sm text-primary">
                    <div className="flex items-start gap-2">
                      <MapPin size={16} className="text-accent mt-1 flex-shrink-0" />
                      <span>{store.address}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone size={16} className="text-accent flex-shrink-0" />
                      <span>{store.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={16} className="text-accent flex-shrink-0" />
                      <span>{store.hours}</span>
                    </div>
                  </div>

                  <div className="mt-4 flex gap-3">
                    <a
                      href={`https://www.google.com/maps/dir/?api=1&destination=${store.coordinates.lat},${store.coordinates.lng}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-accent text-primary-dark rounded-lg font-semibold text-sm hover:bg-accent-dark transition-colors"
                    >
                      <Navigation size={16} />
                      Get Directions
                    </a>
                    <a
                      href={`tel:${store.phone}`}
                      className="flex items-center gap-2 px-4 py-2 bg-primary-dark text-white rounded-lg font-semibold text-sm hover:bg-primary transition-colors"
                    >
                      <Phone size={16} />
                      Call
                    </a>
                  </div>
                </motion.div>
              ))}

              {filteredStores.length === 0 && (
                <div className="text-center py-12">
                  <MapPin size={48} className="mx-auto text-gray-300 mb-4" />
                  <p className="text-gray-500">No stores found matching your criteria</p>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
25. Careers Page
tsx
// app/careers/page.tsx
'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Briefcase, MapPin, Clock, ChevronDown, ChevronUp, Send } from 'lucide-react'

const benefits = [
  { title: 'Competitive Salary', description: 'Industry-leading compensation packages', icon: '💰' },
  { title: 'Health Insurance', description: 'Comprehensive health coverage for you and family', icon: '🏥' },
  { title: 'Growth Opportunities', description: 'Clear career progression paths', icon: '📈' },
  { title: 'Learning & Development', description: 'Continuous training and skill development', icon: '📚' },
  { title: 'Work-Life Balance', description: 'Flexible working arrangements', icon: '⚖️' },
  { title: 'Team Events', description: 'Regular team outings and celebrations', icon: '🎉' },
]

const jobs = [
  {
    id: 1,
    title: 'Store Manager',
    location: 'Multiple Locations',
    type: 'Full-time',
    experience: '2-4 years',
    description: 'Lead and manage store operations, ensuring excellent customer service and achieving sales targets.',
    requirements: [
      'Bachelor\'s degree in any field',
      '2-4 years of retail management experience',
      'Strong leadership and communication skills',
      'Ability to work in shifts',
    ],
  },
  {
    id: 2,
    title: 'Barista',
    location: 'Pan India',
    type: 'Full-time',
    experience: '0-2 years',
    description: 'Prepare and serve beverages, maintain cleanliness, and provide excellent customer experience.',
    requirements: [
      'High school diploma or equivalent',
      'Passion for tea and coffee',
      'Good communication skills',
      'Ability to work in fast-paced environment',
    ],
  },
  {
    id: 3,
    title: 'Area Manager',
    location: 'Metro Cities',
    type: 'Full-time',
    experience: '5-8 years',
    description: 'Oversee multiple store operations, drive growth, and ensure brand standards across the region.',
    requirements: [
      'MBA or equivalent',
      '5-8 years of multi-unit retail experience',
      'Strong analytical and problem-solving skills',
      'Willingness to travel extensively',
    ],
  },
  {
    id: 4,
    title: 'Marketing Executive',
    location: 'Mumbai (HQ)',
    type: 'Full-time',
    experience: '2-4 years',
    description: 'Plan and execute marketing campaigns, manage social media, and drive brand awareness.',
    requirements: [
      'Bachelor\'s degree in Marketing or related field',
      '2-4 years of marketing experience',
      'Experience with digital marketing tools',
      'Creative thinking and attention to detail',
    ],
  },
  {
    id: 5,
    title: 'Franchise Development Manager',
    location: 'Mumbai (HQ)',
    type: 'Full-time',
    experience: '4-6 years',
    description: 'Identify and onboard new franchise partners, support existing franchisees, and drive network growth.',
    requirements: [
      'MBA or equivalent',
      '4-6 years in franchise development or business development',
      'Strong negotiation and relationship management skills',
      'Experience in F&B industry preferred',
    ],
  },
]

export default function CareersPage() {
  const [expandedJob, setExpandedJob] = useState<number | null>(null)
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-32 bg-primary-dark overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-6">
              Join Our <span className="text-accent">Team</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Be part of India's fastest-growing chai revolution
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Join Us */}
      <section ref={ref} className="py-20 gradient-bg">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-12"
          >
            <h2 className="section-title">Why Join Vanankam?</h2>
            <p className="section-subtitle">
              We offer more than just a job - we offer a career with purpose
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <span className="text-4xl mb-4 block">{benefit.icon}</span>
                <h3 className="text-xl font-heading font-bold text-primary-dark mb-2">
                  {benefit.title}
                </h3>
                <p className="text-primary">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="section-title">Open Positions</h2>
            <p className="section-subtitle">
              Explore exciting career opportunities across various roles
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-
Claude Opus 4.5
continue till complition


25. Careers Page (continued)
tsx
// app/careers/page.tsx (continued)
          <div className="max-w-4xl mx-auto space-y-4">
            {jobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl overflow-hidden shadow-lg"
              >
                <div
                  className="p-6 cursor-pointer hover:bg-gray-100 transition-colors"
                  onClick={() => setExpandedJob(expandedJob === job.id ? null : job.id)}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-heading font-bold text-primary-dark mb-2">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap gap-4 text-sm text-primary">
                        <span className="flex items-center gap-1">
                          <MapPin size={16} className="text-accent" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Briefcase size={16} className="text-accent" />
                          {job.type}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={16} className="text-accent" />
                          {job.experience}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-accent font-semibold">
                        {expandedJob === job.id ? 'Hide Details' : 'View Details'}
                      </span>
                      {expandedJob === job.id ? (
                        <ChevronUp className="text-accent" />
                      ) : (
                        <ChevronDown className="text-accent" />
                      )}
                    </div>
                  </div>
                </div>

                <AnimatePresence>
                  {expandedJob === job.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 border-t border-gray-200 pt-4">
                        <div className="mb-4">
                          <h4 className="font-semibold text-primary-dark mb-2">Description</h4>
                          <p className="text-primary">{job.description}</p>
                        </div>

                        <div className="mb-6">
                          <h4 className="font-semibold text-primary-dark mb-2">Requirements</h4>
                          <ul className="list-disc list-inside text-primary space-y-1">
                            {job.requirements.map((req, i) => (
                              <li key={i}>{req}</li>
                            ))}
                          </ul>
                        </div>

                        <button className="flex items-center gap-2 bg-accent text-primary-dark px-6 py-3 rounded-full font-semibold hover:bg-accent-dark transition-colors">
                          <Send size={18} />
                          Apply Now
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* General Application CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16 p-8 bg-primary-dark rounded-2xl"
          >
            <h3 className="text-2xl font-heading font-bold text-white mb-4">
              Don't see a suitable position?
            </h3>
            <p className="text-gray-300 mb-6">
              Send us your resume and we'll reach out when a matching opportunity arises.
            </p>
            <button className="btn-primary">
              Submit General Application
            </button>
          </motion.div>
        </div>
      </section>
    </>
  )
}
26. Products Page
tsx
// app/products/page.tsx
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ShoppingCart, Star, Filter } from 'lucide-react'

const categories = ['All', 'Tea', 'Accessories', 'Gift Sets', 'Merchandise']

const products = [
  {
    id: 1,
    name: 'Premium Assam Tea',
    category: 'Tea',
    price: 299,
    originalPrice: 399,
    rating: 4.8,
    reviews: 124,
    image: '/images/product1.jpg',
    description: 'Hand-picked premium Assam tea leaves',
    bestseller: true,
  },
  {
    id: 2,
    name: 'Masala Chai Blend',
    category: 'Tea',
    price: 349,
    originalPrice: 449,
    rating: 4.9,
    reviews: 256,
    image: '/images/product2.jpg',
    description: 'Perfect blend of spices for authentic masala chai',
    bestseller: true,
  },
  {
    id: 3,
    name: 'Kulhad Set (Pack of 6)',
    category: 'Accessories',
    price: 199,
    originalPrice: 299,
    rating: 4.7,
    reviews: 89,
    image: '/images/product3.jpg',
    description: 'Traditional clay kulhads for authentic experience',
    bestseller: false,
  },
  {
    id: 4,
    name: 'Darjeeling First Flush',
    category: 'Tea',
    price: 599,
    originalPrice: 799,
    rating: 4.9,
    reviews: 67,
    image: '/images/product4.jpg',
    description: 'Premium first flush Darjeeling tea',
    bestseller: false,
  },
  {
    id: 5,
    name: 'Chai Gift Box',
    category: 'Gift Sets',
    price: 999,
    originalPrice: 1299,
    rating: 4.8,
    reviews: 45,
    image: '/images/product5.jpg',
    description: 'Perfect gift set with assorted teas and kulhads',
    bestseller: true,
  },
  {
    id: 6,
    name: 'Vanankam T-Shirt',
    category: 'Merchandise',
    price: 499,
    originalPrice: 699,
    rating: 4.6,
    reviews: 34,
    image: '/images/product6.jpg',
    description: 'Comfortable cotton t-shirt with Vanankam logo',
    bestseller: false,
  },
  {
    id: 7,
    name: 'Elaichi Tea',
    category: 'Tea',
    price: 329,
    originalPrice: 429,
    rating: 4.7,
    reviews: 112,
    image: '/images/product7.jpg',
    description: 'Cardamom-infused premium tea',
    bestseller: false,
  },
  {
    id: 8,
    name: 'Tea Infuser Set',
    category: 'Accessories',
    price: 249,
    originalPrice: 349,
    rating: 4.5,
    reviews: 56,
    image: '/images/product8.jpg',
    description: 'Stainless steel tea infuser with stand',
    bestseller: false,
  },
]

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [sortBy, setSortBy] = useState('popular')
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const filteredProducts = products.filter(
    product => activeCategory === 'All' || product.category === activeCategory
  )

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price
      case 'price-high':
        return b.price - a.price
      case 'rating':
        return b.rating - a.rating
      default:
        return b.reviews - a.reviews
    }
  })

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-32 bg-primary-dark overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-6">
              Our <span className="text-accent">Products</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Bring the Vanankam experience home with our premium products
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section ref={ref} className="py-20 gradient-bg">
        <div className="container mx-auto px-4">
          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12"
          >
            {/* Category Tabs */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-5 py-2 rounded-full font-semibold transition-all ${
                    activeCategory === category
                      ? 'bg-accent text-primary-dark'
                      : 'bg-white text-primary-dark hover:bg-gray-100'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2">
              <Filter size={20} className="text-primary" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-white"
              >
                <option value="popular">Most Popular</option>
                <option value="rating">Highest Rated</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </motion.div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {sortedProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all group"
              >
                {/* Product Image */}
                <div className="relative h-48 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <span className="text-gray-500">{product.name}</span>
                  </div>

                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex flex-col gap-2">
                    {product.bestseller && (
                      <span className="bg-accent text-primary-dark text-xs font-bold px-2 py-1 rounded-full">
                        Bestseller
                      </span>
                    )}
                    {product.originalPrice > product.price && (
                      <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                        {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                      </span>
                    )}
                  </div>

                  {/* Quick Add Button */}
                  <button className="absolute bottom-3 right-3 w-10 h-10 rounded-full bg-accent text-primary-dark flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg hover:bg-accent-dark">
                    <ShoppingCart size={18} />
                  </button>
                </div>

                {/* Product Info */}
                <div className="p-4">
                  <span className="text-xs text-accent font-semibold uppercase">
                    {product.category}
                  </span>
                  <h3 className="text-lg font-heading font-bold text-primary-dark mt-1 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-3 line-clamp-2">
                    {product.description}
                  </p>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-1">
                      <Star size={14} className="text-accent fill-accent" />
                      <span className="text-sm font-semibold">{product.rating}</span>
                    </div>
                    <span className="text-xs text-gray-400">({product.reviews} reviews)</span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-bold text-primary-dark">₹{product.price}</span>
                    {product.originalPrice > product.price && (
                      <span className="text-sm text-gray-400 line-through">
                        ₹{product.originalPrice}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
27. Contact Page
tsx
// app/contact/page.tsx
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  CheckCircle
} from 'lucide-react'

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    details: ['+91-6269112500', '+91-9876543210'],
    action: 'tel:+916269112500',
  },
  {
    icon: Mail,
    title: 'Email',
    details: ['info@vanankam.com', 'franchise@vanankam.com'],
    action: 'mailto:info@vanankam.com',
  },
  {
    icon: MapPin,
    title: 'Head Office',
    details: ['123 Chai Street, Andheri West', 'Mumbai, Maharashtra 400058'],
    action: '#',
  },
  {
    icon: Clock,
    title: 'Business Hours',
    details: ['Monday - Saturday: 9:00 AM - 6:00 PM', 'Sunday: Closed'],
    action: '#',
  },
]

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook', color: 'hover:bg-blue-600' },
  { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:bg-sky-500' },
  { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:bg-pink-600' },
  { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:bg-blue-700' },
  { icon: Youtube, href: '#', label: 'YouTube', color: 'hover:bg-red-600' },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-32 bg-primary-dark overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-6">
              Contact <span className="text-accent">Us</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We'd love to hear from you. Get in touch with us today!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={ref} className="py-20 gradient-bg">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              className="lg:col-span-1"
            >
              <h2 className="text-3xl font-heading font-bold text-primary-dark mb-8">
                Get in Touch
              </h2>

              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary-dark mb-1">{item.title}</h3>
                      {item.details.map((detail, i) => (
                        <p key={i} className="text-primary text-sm">{detail}</p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-10">
                <h3 className="font-semibold text-primary-dark mb-4">Follow Us</h3>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className={`w-10 h-10 rounded-full bg-primary-dark text-white flex items-center justify-center transition-colors ${social.color}`}
                    >
                      <social.icon size={18} />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              className="lg:col-span-2"
            >
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-2xl font-heading font-bold text-primary-dark mb-6">
                  Send us a Message
                </h2>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-primary-dark mb-2">
                      Thank You!
                    </h3>
                    <p className="text-primary">
                      We've received your message and will get back to you soon.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-primary-dark mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-primary-dark mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-primary-dark mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-primary-dark mb-2">
                          Subject *
                        </label>
                        <select
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent bg-white"
                        >
                          <option value="">Select a subject</option>
                          <option value="general">General Inquiry</option>
                          <option value="franchise">Franchise Inquiry</option>
                          <option value="careers">Career Inquiry</option>
                          <option value="feedback">Feedback</option>
                          <option value="complaint">Complaint</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-primary-dark mb-2">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                        placeholder="Tell us how we can help you..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full md:w-auto flex items-center justify-center gap-2 bg-accent text-primary-dark px-8 py-4 rounded-full font-semibold hover:bg-accent-dark transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-5 h-5 border-2 border-primary-dark border-t-transparent rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={18} />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>

          {/* Map Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="mt-16"
          >
            <div className="bg-gray-200 rounded-2xl h-[400px] flex items-center justify-center">
              <div className="text-center text-gray-500">
                <MapPin size={48} className="mx-auto mb-4" />
                <p>Google Maps Integration</p>
                <p className="text-sm">Our Head Office Location</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
28. Franchise Page
tsx
// app/franchise/page.tsx
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  CheckCircle, 
  TrendingUp, 
  Users, 
  Award, 
  Headphones, 
  Package,
  MapPin,
  Send,
  Phone,
  Mail,
  Building
} from 'lucide-react'
import FAQSection from '@/components/home/FAQSection'

const franchiseSteps = [
  {
    step: 1,
    title: 'Submit Application',
    description: 'Fill out our online franchise application form with your details and investment capacity.',
  },
  {
    step: 2,
    title: 'Initial Discussion',
    description: 'Our team will contact you for an initial discussion about the franchise opportunity.',
  },
  {
    step: 3,
    title: 'Discovery Day',
    description: 'Visit our head office or an existing outlet to experience the Vanankam brand firsthand.',
  },
  {
    step: 4,
    title: 'Agreement & Training',
    description: 'Sign the franchise agreement and undergo comprehensive training program.',
  },
  {
    step: 5,
    title: 'Store Setup',
    description: 'We help you set up your store with our proven design and layout guidelines.',
  },
  {
    step: 6,
    title: 'Grand Opening',
    description: 'Launch your Vanankam outlet with our marketing support and start your journey!',
  },
]

const franchiseModels = [
  {
    name: 'Kiosk Model',
    investment: '₹5-8 Lakhs',
    area: '100-150 sq ft',
    roi: '35-45%',
    breakeven: '8-12 months',
    features: [
      'Quick setup in 15-20 days',
      'Ideal for high footfall areas',
      'Low operational cost',
      'Limited menu focused on beverages',
      'Minimal staff requirement (2-3)',
    ],
  },
  {
    name: 'Express Model',
    investment: '₹10-15 Lakhs',
    area: '200-300 sq ft',
    roi: '40-50%',
    breakeven: '10-14 months',
    features: [
      'Setup in 25-30 days',
      'Extended beverage menu',
      'Limited seating (8-10)',
      'Snacks menu included',
      'Staff requirement (4-5)',
    ],
    popular: true,
  },
  {
    name: 'Cafe Model',
    investment: '₹20-30 Lakhs',
    area: '400-800 sq ft',
    roi: '45-55%',
    breakeven: '12-18 months',
    features: [
      'Premium cafe ambience',
      'Full menu with snacks & food',
      'Comfortable seating (25-40)',
      'Complete brand experience',
      'Staff requirement (8-10)',
    ],
  },
]

const franchiseBenefits = [
  {
    icon: TrendingUp,
    title: 'High ROI',
    description: 'Industry-leading returns with our proven business model',
  },
  {
    icon: Users,
    title: 'Complete Training',
    description: '15-day comprehensive training for owners and staff',
  },
  {
    icon: Award,
    title: 'Brand Recognition',
    description: 'Leverage our established brand presence across India',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Dedicated support team for all operational queries',
  },
  {
    icon: Package,
    title: 'Supply Chain',
    description: 'Centralized procurement for consistent quality',
  },
  {
    icon: Building,
    title: 'Site Selection Help',
    description: 'Expert guidance in selecting the perfect location',
  },
]

export default function FranchisePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    state: '',
    investment: '',
    experience: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({
      name: '',
      email: '',
      phone: '',
      city: '',
      state: '',
      investment: '',
      experience: '',
      message: '',
    })
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-32 bg-primary-dark overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium mb-6">
              🚀 Join India's Fastest Growing Tea Franchise
            </span>
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-6">
              Be a Part of the <span className="text-accent">Chai Revolution</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Start your entrepreneurial journey with Vanankam. Low investment, high returns, 
              and comprehensive support to ensure your success.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#apply" className="btn-primary text-lg">
                Apply Now
              </a>
              <a href="#models" className="btn-secondary text-lg">
                View Models
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section ref={ref} className="py-20 gradient-bg">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-12"
          >
            <h2 className="section-title">Why Choose Vanankam?</h2>
            <p className="section-subtitle">
              Partner with a brand that's committed to your success
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {franchiseBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <benefit.icon className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-xl font-heading font-bold text-primary-dark mb-2">
                  {benefit.title}
                </h3>
                <p className="text-primary">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Franchise Models */}
      <section id="models" className="py-20 bg-primary-dark">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
              Choose Your <span className="text-accent">Franchise Model</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              We offer flexible investment options to suit your budget and aspirations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {franchiseModels.map((model, index) => (
              <motion.div
                key={model.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative bg-white rounded-2xl p-8 ${
                  model.popular ? 'ring-4 ring-accent shadow-2xl lg:scale-105' : 'shadow-lg'
                }`}
              >
                {model.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-primary-dark px-4 py-1 rounded-full text-sm font-bold">
                    Most Popular
                  </div>
                )}

                <h3 className="text-2xl font-heading font-bold text-primary-dark mb-6">
                  {model.name}
                </h3>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                    <span className="text-gray-500">Investment</span>
                    <span className="font-bold text-accent text-lg">{model.investment}</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                    <span className="text-gray-500">Area Required</span>
                    <span className="font-semibold text-primary-dark">{model.area}</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                    <span className="text-gray-500">Expected ROI</span>
                    <span className="font-semibold text-green-600">{model.roi}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500">Breakeven Period</span>
                    <span className="font-semibold text-primary-dark">{model.breakeven}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {model.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-primary text-sm">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="#apply"
                  className={`block text-center py-3 px-6 rounded-full font-semibold transition-all ${
                    model.popular
                      ? 'bg-accent text-primary-dark hover:bg-accent-dark'
                      : 'bg-primary-dark text-white hover:bg-primary'
                  }`}
                >
                  Apply for This Model
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Franchise Process */}
      <section className="py-20 gradient-bg">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">How to Get Started</h2>
            <p className="section-subtitle">
              A simple 6-step process to become a Vanankam franchise partner
            </p>
          </motion.div>

          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-accent/30 hidden lg:block -translate-y-1/2" />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {franchiseSteps.map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative bg-white rounded-xl p-6 shadow-lg"
                >
                  <div className="absolute -top-4 left-6 w-10 h-10 rounded-full bg-accent text-primary-dark font-bold flex items-center justify-center text-lg">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-heading font-bold text-primary-dark mt-4 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-primary">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Form Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-heading font-bold text-primary-dark mb-6">
                Ready to Start Your Journey?
              </h2>
              <p className="text-lg text-primary mb-8">
                Fill out the form and our franchise team will get back to you within 24 hours 
                to discuss the exciting opportunities waiting for you.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary-dark">Franchise Helpline</p>
                    <p className="text-primary">+91-6269112500</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary-dark">Email</p>
                    <p className="text-primary">franchise@vanankam.com</p>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { number: '500+', label: 'Happy Franchisees' },
                  { number: '95%', label: 'Success Rate' },
                  { number: '₹5L', label: 'Starting Investment' },
                  { number: '45%', label: 'Avg. ROI' },
                ].map((stat) => (
                  <div key={stat.label} className="bg-gray-50 rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-accent">{stat.number}</p>
                    <p className="text-sm text-primary">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-8"
            >
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-primary-dark mb-2">
                    Application Submitted!
                  </h3>
                  <p className="text-primary">
                    Thank you for your interest. Our franchise team will contact you shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-primary-dark mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent bg-white"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-primary-dark mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent bg-white"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-primary-dark mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent bg-white"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-primary-dark mb-2">
                        City *
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent bg-white"
                        placeholder="Your city"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-primary-dark mb-2">
                        State *
                      </label>
                      <input
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent bg-white"
                        placeholder="Your state"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-primary-dark mb-2">
                        Investment Capacity *
                      </label>
                      <select
                        name="investment"
                        value={formData.investment}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent bg-white"
                      >
                        <option value="">Select investment range</option>
                        <option value="5-8">₹5-8 Lakhs (Kiosk)</option>
                        <option value="10-15">₹10-15 Lakhs (Express)</option>
                        <option value="20-30">₹20-30 Lakhs (Cafe)</option>
                        <option value="30+">₹30+ Lakhs (Multiple Outlets)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-primary-dark mb-2">
                        Business Experience
                      </label>
                      <select
                        name="experience"
                        value={formData.experience}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent bg-white"
                      >
                        <option value="">Select experience</option>
                        <option value="none">No prior experience</option>
                        <option value="1-3">1-3 years</option>
                        <option value="3-5">3-5 years</option>
                        <option value="5+">5+ years</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-primary-dark mb-2">
                      Additional Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent bg-white resize-none"
                      placeholder="Tell us about yourself and why you want to partner with Vanankam..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 bg-accent text-primary-dark px-8 py-4 rounded-full font-semibold hover:bg-accent-dark transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-5 h-5 border-2 border-primary-dark border-t-transparent rounded-full animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Submit Application
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />
    </>
  )
}
29. Next.js Configuration
javascript
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost', 'images.unsplash.com'],
    unoptimized: true,
  },
  experimental: {
    optimizeCss: true,
  },
}

module.exports = nextConfig
30. TypeScript Configuration
json
// tsconfig.json
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
31. PostCSS Configuration
javascript
// postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
32. Additional UI Components
tsx
// components/ui/Button.tsx
'use client'

import { forwardRef } from 'react'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  isLoading?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', isLoading, children, disabled, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100'
    
    const variants = {
      primary: 'bg-accent text-primary-dark hover:bg-accent-dark shadow-lg',
      secondary: 'bg-primary-dark text-white hover:bg-primary',
      outline: 'border-2 border-accent text-accent hover:bg-accent hover:text-primary-dark',
      ghost: 'text-primary-dark hover:bg-gray-100',
    }
    
    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    }

    return (
      <motion.button
        ref={ref}
        whileTap={{ scale: 0.95 }}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading && (
          <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
        )}
        {children}
      </motion.button>
    )
  }
)

Button.displayName = 'Button'

export default Button
tsx
// components/ui/Card.tsx
'use client'

import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

export default function Card({ children, className, hover = true }: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -5 } : undefined}
      className={cn(
        'bg-white rounded-2xl shadow-lg overflow-hidden',
        hover && 'transition-shadow hover:shadow-xl',
        className
      )}
    >
      {children}
    </motion.div>
  )
}

export function CardHeader({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn('p-6 border-b border-gray-100', className)}>{children}</div>
}

export function CardContent({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn('p-6', className)}>{children}</div>
}

export function CardFooter({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn('p-6 border-t border-gray-100 bg-gray-50', className)}>{children}</div>
}
tsx
// components/ui/Input.tsx
'use client'

import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  icon?: React.ReactNode
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, icon, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-primary-dark mb-2">
            {label}
          </label>
        )}
        <div className="relative">
          {icon && (
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
              {icon}
            </div>
          )}
          <input
            ref={ref}
            className={cn(
              'w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent transition-all',
              icon && 'pl-12',
              error && 'border-red-500 focus:ring-red-500',
              className
            )}
            {...props}
          />
        </div>
        {error && (
          <p className="mt-1 text-sm text-red-500">{error}</p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'

export default Input
tsx
// components/ui/Badge.tsx
import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'success' | 'warning' | 'error' | 'accent'
  className?: string
}

export default function Badge({ children, variant = 'default', className }: BadgeProps) {
  const variants = {
    default: 'bg-gray-100 text-gray-700',
    success: 'bg-green-100 text-green-700',
    warning: 'bg-yellow-100 text-yellow-700',
    error: 'bg-red-100 text-red-700',
    accent: 'bg-accent text-primary-dark',
  }

  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  )
}
33. Loading Component
tsx
// app/loading.tsx
export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="text-center">
        {/* Animated Kulhad */}
        <div className="relative w-24 h-28 mx-auto mb-6">
          {/* Steam */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex gap-1">
            <div className="w-2 h-6 bg-white/60 rounded-full blur-sm animate-steam" />
            <div className="w-2 h-6 bg-white/60 rounded-full blur-sm animate-steam" style={{ animationDelay: '0.3s' }} />
            <div className="w-2 h-6 bg-white/60 rounded-full blur-sm animate-steam" style={{ animationDelay: '0.6s' }} />
          </div>
          
          {/* Kulhad */}
          <div className="w-full h-full bg-gradient-to-b from-amber-600 to-amber-800 rounded-b-3xl rounded-t-lg animate-pulse" />
        </div>
        
        <h2 className="text-2xl font-heading font-bold text-primary-dark mb-2">
          <span className="text-accent">V</span>ANANKAM
        </h2>
        <p className="text-primary animate-pulse">Loading...</p>
      </div>
    </div>
  )
}
34. Error Component
tsx
// app/error.tsx
'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-4">
      <div className="text-center max-w-md">
        <div className="text-6xl mb-6">😕</div>
Claude Opus 4.5
continue til complition


34. Error Component (continued)
tsx
// app/error.tsx (continued)
        <h1 className="text-3xl font-heading font-bold text-primary-dark mb-4">
          Oops! Something went wrong
        </h1>
        <p className="text-primary mb-8">
          We apologize for the inconvenience. Please try again or return to the homepage.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="btn-primary"
          >
            Try Again
          </button>
          <Link href="/" className="btn-secondary">
            Go Home
          </Link>
        </div>
      </div>
    </div>
  )
}
35. Not Found Page
tsx
// app/not-found.tsx
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-4">
      <div className="text-center max-w-md">
        <div className="relative w-32 h-32 mx-auto mb-8">
          {/* Broken Kulhad Illustration */}
          <div className="text-8xl">🍵</div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl opacity-50">
            ❌
          </div>
        </div>

        <h1 className="text-6xl font-heading font-bold text-accent mb-4">404</h1>
        <h2 className="text-2xl font-heading font-bold text-primary-dark mb-4">
          Page Not Found
        </h2>
        <p className="text-primary mb-8">
          Looks like this chai got spilled! The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-primary">
            Back to Home
          </Link>
          <Link href="/contact" className="btn-secondary">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  )
}
36. Sitemap Generation
tsx
// app/sitemap.ts
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://vanankam.com'
  
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/menu`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/store-locator`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/careers`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/products`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/franchise`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ]
}
37. Robots.txt Generation
tsx
// app/robots.ts
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/'],
    },
    sitemap: 'https://vanankam.com/sitemap.xml',
  }
}
38. Metadata Configuration
tsx
// app/metadata.ts
import { Metadata } from 'next'

export const siteConfig = {
  name: 'Vanankam',
  tagline: 'Yaar Mera Kulhad',
  description: 'Join India\'s fastest growing tea franchise. Experience authentic kulhad chai with a modern twist. 500+ outlets across 200+ cities.',
  url: 'https://vanankam.com',
  ogImage: 'https://vanankam.com/og-image.jpg',
  links: {
    twitter: 'https://twitter.com/vanankam',
    facebook: 'https://facebook.com/vanankam',
    instagram: 'https://instagram.com/vanankam',
    linkedin: 'https://linkedin.com/company/vanankam',
    youtube: 'https://youtube.com/vanankam',
  },
  contact: {
    phone: '+91-6269112500',
    email: 'info@vanankam.com',
    address: '123 Chai Street, Andheri West, Mumbai, Maharashtra 400058',
  },
}

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} - Premium Tea Franchise | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'tea franchise',
    'kulhad chai',
    'chai franchise India',
    'tea business',
    'franchise opportunity',
    'Vanankam',
    'best tea franchise',
    'low investment franchise',
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: '@vanankam',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}
39. Animation Variants Library
tsx
// lib/animations.ts
export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
}

export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
}

export const fadeInDown = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
}

export const fadeInLeft = {
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -30 },
}

export const fadeInRight = {
  initial: { opacity: 0, x: 30 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 30 },
}

export const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.9 },
}

export const slideInFromBottom = {
  initial: { y: '100%' },
  animate: { y: 0 },
  exit: { y: '100%' },
}

export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

export const staggerItem = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
}

export const hoverScale = {
  scale: 1.05,
  transition: { duration: 0.2 },
}

export const tapScale = {
  scale: 0.95,
}

export const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.3 },
}

// Custom spring animations
export const springTransition = {
  type: 'spring',
  stiffness: 300,
  damping: 30,
}

export const smoothTransition = {
  duration: 0.5,
  ease: [0.4, 0, 0.2, 1],
}

// Reveal animations for scroll
export const revealFromBottom = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.6, ease: 'easeOut' },
}

export const revealFromLeft = {
  initial: { opacity: 0, x: -60 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.6, ease: 'easeOut' },
}

export const revealFromRight = {
  initial: { opacity: 0, x: 60 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.6, ease: 'easeOut' },
}
40. Custom Hooks
tsx
// hooks/useMediaQuery.ts
import { useState, useEffect } from 'react'

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const media = window.matchMedia(query)
    if (media.matches !== matches) {
      setMatches(media.matches)
    }
    const listener = () => setMatches(media.matches)
    window.addEventListener('resize', listener)
    return () => window.removeEventListener('resize', listener)
  }, [matches, query])

  return matches
}

export const useIsMobile = () => useMediaQuery('(max-width: 768px)')
export const useIsTablet = () => useMediaQuery('(max-width: 1024px)')
export const useIsDesktop = () => useMediaQuery('(min-width: 1025px)')
tsx
// hooks/useLocalStorage.ts
import { useState, useEffect } from 'react'

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(initialValue)

  useEffect(() => {
    try {
      const item = window.localStorage.getItem(key)
      if (item) {
        setStoredValue(JSON.parse(item))
      }
    } catch (error) {
      console.log(error)
    }
  }, [key])

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value
      setStoredValue(valueToStore)
      window.localStorage.setItem(key, JSON.stringify(valueToStore))
    } catch (error) {
      console.log(error)
    }
  }

  return [storedValue, setValue] as const
}
tsx
// hooks/useScrollPosition.ts
import { useState, useEffect } from 'react'

export function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('up')
  const [lastScrollTop, setLastScrollTop] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop
      
      setScrollPosition(currentScrollTop)
      
      if (currentScrollTop > lastScrollTop) {
        setScrollDirection('down')
      } else {
        setScrollDirection('up')
      }
      
      setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollTop])

  return { scrollPosition, scrollDirection }
}
tsx
// hooks/useClickOutside.ts
import { useEffect, RefObject } from 'react'

export function useClickOutside(
  ref: RefObject<HTMLElement>,
  handler: (event: MouseEvent | TouchEvent) => void
) {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return
      }
      handler(event)
    }

    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)

    return () => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
    }
  }, [ref, handler])
}
41. Context Providers
tsx
// context/AppContext.tsx
'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

interface AppContextType {
  isMobileMenuOpen: boolean
  setIsMobileMenuOpen: (value: boolean) => void
  isLoading: boolean
  setIsLoading: (value: boolean) => void
}

const AppContext = createContext<AppContextType | undefined>(undefined)

export function AppProvider({ children }: { children: ReactNode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  return (
    <AppContext.Provider
      value={{
        isMobileMenuOpen,
        setIsMobileMenuOpen,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export function useApp() {
  const context = useContext(AppContext)
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider')
  }
  return context
}
42. Newsletter Section Component
tsx
// components/home/NewsletterSection.tsx
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Send, CheckCircle } from 'lucide-react'

export default function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubscribed, setIsSubscribed] = useState(false)
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubscribed(true)
    setEmail('')
  }

  return (
    <section ref={ref} className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="max-w-3xl mx-auto text-center"
        >
          <Mail className="w-16 h-16 text-primary-dark mx-auto mb-6" />
          
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-dark mb-4">
            Subscribe to Our Newsletter
          </h2>
          
          <p className="text-primary-dark/80 text-lg mb-8">
            Stay updated with the latest news, franchise opportunities, and exclusive offers from Vanankam.
          </p>

          {isSubscribed ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center justify-center gap-3 text-primary-dark"
            >
              <CheckCircle className="w-8 h-8" />
              <span className="text-xl font-semibold">Thank you for subscribing!</span>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="flex-1 px-6 py-4 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-dark"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-primary-dark text-white px-8 py-4 rounded-full font-semibold hover:bg-primary transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {isSubmitting ? (
                  <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    Subscribe
                    <Send size={18} />
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
43. Partners/Brands Section
tsx
// components/home/PartnersSection.tsx
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const partners = [
  { name: 'Zomato', logo: '/images/partners/zomato.png' },
  { name: 'Swiggy', logo: '/images/partners/swiggy.png' },
  { name: 'FSSAI', logo: '/images/partners/fssai.png' },
  { name: 'Startup India', logo: '/images/partners/startup-india.png' },
  { name: 'Make in India', logo: '/images/partners/make-in-india.png' },
  { name: 'MSME', logo: '/images/partners/msme.png' },
]

export default function PartnersSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section ref={ref} className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <h2 className="text-2xl font-heading font-bold text-primary-dark">
            Our Partners & Certifications
          </h2>
        </motion.div>

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="w-24 h-16 md:w-32 md:h-20 flex items-center justify-center grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100"
            >
              <div className="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center">
                <span className="text-xs text-gray-500 font-medium">{partner.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
44. Scroll Progress Indicator
tsx
// components/ui/ScrollProgress.tsx
'use client'

import { motion, useScroll, useSpring } from 'framer-motion'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-accent origin-left z-[60]"
      style={{ scaleX }}
    />
  )
}
45. Back to Top Button (Enhanced)
tsx
// components/ui/BackToTop.tsx
'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp } from 'lucide-react'

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          onClick={scrollToTop}
          className="fixed bottom-24 right-6 w-12 h-12 rounded-full bg-primary-dark text-white shadow-lg flex items-center justify-center z-40 hover:bg-primary transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ArrowUp size={20} />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
46. Cookie Consent Banner
tsx
// components/ui/CookieConsent.tsx
'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Cookie, X } from 'lucide-react'

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      setTimeout(() => setShowBanner(true), 2000)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setShowBanner(false)
  }

  const declineCookies = () => {
    localStorage.setItem('cookie-consent', 'declined')
    setShowBanner(false)
  }

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 bg-primary-dark text-white p-4 md:p-6 z-50 shadow-lg"
        >
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <Cookie className="w-8 h-8 text-accent flex-shrink-0" />
              <p className="text-sm md:text-base">
                We use cookies to enhance your experience. By continuing to visit this site, 
                you agree to our use of cookies.{' '}
                <a href="/privacy" className="text-accent underline">
                  Learn more
                </a>
              </p>
            </div>
            <div className="flex items-center gap-3 flex-shrink-0">
              <button
                onClick={declineCookies}
                className="px-4 py-2 text-sm font-medium hover:text-accent transition-colors"
              >
                Decline
              </button>
              <button
                onClick={acceptCookies}
                className="px-6 py-2 bg-accent text-primary-dark rounded-full text-sm font-semibold hover:bg-accent-dark transition-colors"
              >
                Accept
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
47. Updated Layout with All Components
tsx
// app/layout.tsx (Updated)
import type { Metadata } from 'next'
import { Poppins, Oswald, Playfair_Display } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/layout/WhatsAppButton'
import BackToTop from '@/components/ui/BackToTop'
import ScrollProgress from '@/components/ui/ScrollProgress'
import CookieConsent from '@/components/ui/CookieConsent'
import { AppProvider } from '@/context/AppContext'
import { defaultMetadata } from './metadata'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-oswald',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = defaultMetadata

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${oswald.variable} ${playfair.variable}`}>
      <body className="font-body antialiased">
        <AppProvider>
          <ScrollProgress />
          <Header />
          <main className="pt-20 min-h-screen">
            {children}
          </main>
          <Footer />
          <WhatsAppButton />
          <BackToTop />
          <CookieConsent />
        </AppProvider>
      </body>
    </html>
  )
}
48. Complete Home Page with All Sections
tsx
// app/page.tsx (Complete)
import HeroSection from '@/components/home/HeroSection'
import StatsSection from '@/components/home/StatsSection'
import MissionVision from '@/components/home/MissionVision'
import FranchiseSection from '@/components/home/FranchiseSection'
import BlogSection from '@/components/home/BlogSection'
import MomentsGallery from '@/components/home/MomentsGallery'
import TestimonialsSection from '@/components/home/TestimonialsSection'
import TradeMarksSection from '@/components/home/TradeMarksSection'
import FAQSection from '@/components/home/FAQSection'
import LeadersSection from '@/components/home/LeadersSection'
import NewsletterSection from '@/components/home/NewsletterSection'
import PartnersSection from '@/components/home/PartnersSection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <PartnersSection />
      <StatsSection />
      <MissionVision />
      <FranchiseSection />
      <BlogSection />
      <MomentsGallery />
      <TestimonialsSection />
      <TradeMarksSection />
      <FAQSection />
      <LeadersSection />
      <NewsletterSection />
    </>
  )
}
49. Environment Variables
env
# .env.local
NEXT_PUBLIC_SITE_URL=https://vanankam.com
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
NEXT_PUBLIC_WHATSAPP_NUMBER=916269112500

# Email Configuration (for contact forms)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password
CONTACT_EMAIL=info@vanankam.com
FRANCHISE_EMAIL=franchise@vanankam.com
50. README Documentation
markdown
# Vanankam - Premium Tea Franchise Website

A modern, fully responsive franchise website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- 🎨 Modern UI inspired by Tealogy
- ⚡ Fast performance with Next.js 14
- 📱 Fully responsive design
- 🎭 Smooth animations with Framer Motion
- 🎯 SEO optimized
- ♿ Accessible components
- 🌙 Clean, modern typography
- 📝 Contact and franchise inquiry forms

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Forms:** React Hook Form (optional)
- **UI Components:** Custom + Radix UI

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/vanankam.git
cd vanankam
Install dependencies:
bash
npm install
# or
yarn install
Create environment file:
bash
cp .env.example .env.local
Run the development server:
bash
npm run dev
# or
yarn dev
Open http://localhost:3000 in your browser.
Project Structure
text
vanankam/
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── menu/              # Menu page
│   ├── gallery/           # Gallery page
│   ├── store-locator/     # Store locator page
│   ├── careers/           # Careers page
│   ├── products/          # Products page
│   ├── contact/           # Contact page
│   ├── franchise/         # Franchise page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/
│   ├── layout/            # Layout components
│   ├── home/              # Home page sections
│   └── ui/                # Reusable UI components
├── lib/                   # Utility functions
├── hooks/                 # Custom React hooks
├── context/               # React context providers
├── public/                # Static assets
└── types/                 # TypeScript types
Deployment
Vercel (Recommended)
Push your code to GitHub
Import the repository on Vercel
Configure environment variables
Deploy
Other Platforms
Build the project:

bash
npm run build
Start the production server:

bash
npm run start
Customization
Colors
Edit the color palette in tailwind.config.ts:

typescript
colors: {
  primary: {
    DEFAULT: '#2D3748',
    dark: '#1A202C',
  },
  accent: {
    DEFAULT: '#F6C000',
    dark: '#D4A600',
  },
}
Fonts
Update fonts in app/layout.tsx using Next.js font optimization.

Content
Update content in respective component files under components/home/.

License
MIT License - see LICENSE file for details.

Support
For support, email support@vanankam.com or join our Discord channel.

text

---

## Summary

This completes the **Vanankam Tea Franchise Website** built with:

### Pages Created:
1. ✅ Home Page (with all sections)
2. ✅ About Page
3. ✅ Menu Page
4. ✅ Gallery Page
5. ✅ Store Locator Page
6. ✅ Careers Page
7. ✅ Products Page
8. ✅ Contact Page
9. ✅ Franchise Page
10. ✅ Error & 404 Pages

### Components Created:
- Header with mobile navigation
- Footer with social links
- Hero Section with animated stats
- Stats Section with counters
- Mission & Vision Section
- Franchise Section with pricing models
- Blog Section
- Moments Gallery with lightbox
- Testimonials Carousel
- Trademarks Section
- FAQ Accordion
- Leaders Section
- Newsletter Section
- Partners Section
- WhatsApp floating button
- Back to Top button
- Scroll Progress indicator
- Cookie Consent banner
- Reusable UI components (Button, Card, Input, Badge)

### Features:
- Fully responsive design
- Smooth Framer Motion animations
- SEO optimized with metadata
- TypeScript for type safety
- Custom hooks for common functionality
- Context for state management
- Sitemap and robots.txt generation
- Loading and error states

To run this project, simply copy all the files to your Next.js project, install the dependencies from package.json, and run `npm run dev`.
Claude Opus 4.5
continue til complition


The project is now complete! Let me provide you with a few final additions and a comprehensive setup guide to ensure everything works perfectly.

51. Additional API Routes for Forms
tsx
// app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, subject, message } = body

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Here you would typically:
    // 1. Send email using nodemailer or similar
    // 2. Save to database
    // 3. Send to CRM

    // Example: Log for now (replace with actual implementation)
    console.log('Contact Form Submission:', { name, email, phone, subject, message })

    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 1000))

    return NextResponse.json(
      { success: true, message: 'Message sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
tsx
// app/api/franchise/route.ts
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, city, state, investment, experience, message } = body

    // Validate required fields
    if (!name || !email || !phone || !city || !state || !investment) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Here you would typically:
    // 1. Send email notification to franchise team
    // 2. Save to database/CRM
    // 3. Trigger automated follow-up

    console.log('Franchise Application:', { 
      name, email, phone, city, state, investment, experience, message 
    })

    await new Promise(resolve => setTimeout(resolve, 1000))

    return NextResponse.json(
      { success: true, message: 'Application submitted successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Franchise form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
tsx
// app/api/newsletter/route.ts
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email } = body

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Here you would typically:
    // 1. Add to mailing list (Mailchimp, SendGrid, etc.)
    // 2. Save to database

    console.log('Newsletter Subscription:', email)

    await new Promise(resolve => setTimeout(resolve, 500))

    return NextResponse.json(
      { success: true, message: 'Successfully subscribed' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Newsletter error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
tsx
// app/api/careers/apply/route.ts
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const phone = formData.get('phone') as string
    const position = formData.get('position') as string
    const resume = formData.get('resume') as File | null
    const coverLetter = formData.get('coverLetter') as string

    if (!name || !email || !phone || !position) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Handle file upload
    if (resume) {
      const bytes = await resume.arrayBuffer()
      const buffer = Buffer.from(bytes)
      // Save file or upload to cloud storage
      console.log('Resume uploaded:', resume.name, resume.size)
    }

    console.log('Job Application:', { name, email, phone, position, coverLetter })

    await new Promise(resolve => setTimeout(resolve, 1000))

    return NextResponse.json(
      { success: true, message: 'Application submitted successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Career application error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
52. Types Definitions
tsx
// types/index.ts
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
  category: string
  image?: string
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

export interface Job {
  id: number
  title: string
  location: string
  type: 'Full-time' | 'Part-time' | 'Contract'
  experience: string
  description: string
  requirements: string[]
  department?: string
  postedDate?: string
}

export interface Product {
  id: number
  name: string
  category: string
  price: number
  originalPrice?: number
  rating: number
  reviews: number
  image: string
  description: string
  bestseller?: boolean
  inStock?: boolean
}

export interface BlogPost {
  id: number
  title: string
  excerpt: string
  content?: string
  image: string
  slug: string
  author?: string
  date?: string
  category?: string
}

export interface Testimonial {
  id: number
  name: string
  role: string
  image: string
  rating: number
  text: string
}

export interface Leader {
  name: string
  role: string
  image: string
  description: string
  linkedin?: string
  twitter?: string
}

export interface FranchiseModel {
  name: string
  investment: string
  area: string
  roi: string
  breakeven: string
  features: string[]
  popular?: boolean
}

export interface FAQ {
  question: string
  answer: string
}

export interface ContactFormData {
  name: string
  email: string
  phone?: string
  subject: string
  message: string
}

export interface FranchiseFormData {
  name: string
  email: string
  phone: string
  city: string
  state: string
  investment: string
  experience?: string
  message?: string
}

export interface GalleryImage {
  id: number
  src: string
  alt: string
  category: string
  title?: string
}

export interface Stat {
  number: number
  suffix: string
  label: string
  icon?: string
}
53. Constants File
tsx
// lib/constants.ts
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

export const INDIAN_STATES = [
  'Andhra Pradesh',
  'Arunachal Pradesh',
  'Assam',
  'Bihar',
  'Chhattisgarh',
  'Delhi',
  'Goa',
  'Gujarat',
  'Haryana',
  'Himachal Pradesh',
  'Jharkhand',
  'Karnataka',
  'Kerala',
  'Madhya Pradesh',
  'Maharashtra',
  'Manipur',
  'Meghalaya',
  'Mizoram',
  'Nagaland',
  'Odisha',
  'Punjab',
  'Rajasthan',
  'Sikkim',
  'Tamil Nadu',
  'Telangana',
  'Tripura',
  'Uttar Pradesh',
  'Uttarakhand',
  'West Bengal',
]

export const INVESTMENT_OPTIONS = [
  { value: '5-8', label: '₹5-8 Lakhs (Kiosk)' },
  { value: '10-15', label: '₹10-15 Lakhs (Express)' },
  { value: '20-30', label: '₹20-30 Lakhs (Cafe)' },
  { value: '30+', label: '₹30+ Lakhs (Multiple Outlets)' },
]

export const EXPERIENCE_OPTIONS = [
  { value: 'none', label: 'No prior experience' },
  { value: '1-3', label: '1-3 years' },
  { value: '3-5', label: '3-5 years' },
  { value: '5+', label: '5+ years' },
]

export const MENU_CATEGORIES = [
  { id: 'hot', name: 'Hot Beverages', icon: '☕' },
  { id: 'cold', name: 'Cold Beverages', icon: '🧊' },
  { id: 'snacks', name: 'Snacks', icon: '🍿' },
  { id: 'special', name: 'Specials', icon: '⭐' },
]

export const GALLERY_CATEGORIES = ['All', 'Outlets', 'Beverages', 'Events', 'Team']

export const PRODUCT_CATEGORIES = ['All', 'Tea', 'Accessories', 'Gift Sets', 'Merchandise']
54. Image Placeholder Component
tsx
// components/ui/ImagePlaceholder.tsx
'use client'

import { useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface ImagePlaceholderProps {
  src?: string
  alt: string
  width?: number
  height?: number
  className?: string
  fill?: boolean
  placeholder?: string
  priority?: boolean
}

export default function ImagePlaceholder({
  src,
  alt,
  width,
  height,
  className,
  fill = false,
  placeholder = 'Image',
  priority = false,
}: ImagePlaceholderProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  // If no src or error, show placeholder
  if (!src || hasError) {
    return (
      <div
        className={cn(
          'bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center',
          className
        )}
        style={!fill ? { width, height } : undefined}
      >
        <span className="text-gray-500 text-sm font-medium">{placeholder}</span>
      </div>
    )
  }

  return (
    <div className={cn('relative overflow-hidden', className)}>
      {isLoading && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse" />
      )}
      <Image
        src={src}
        alt={alt}
        width={!fill ? width : undefined}
        height={!fill ? height : undefined}
        fill={fill}
        priority={priority}
        className={cn(
          'transition-opacity duration-300',
          isLoading ? 'opacity-0' : 'opacity-100',
          fill && 'object-cover'
        )}
        onLoadingComplete={() => setIsLoading(false)}
        onError={() => setHasError(true)}
      />
    </div>
  )
}
55. Modal Component
tsx
// components/ui/Modal.tsx
'use client'

import { useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { useClickOutside } from '@/hooks/useClickOutside'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  children: React.ReactNode
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
}

export default function Modal({
  isOpen,
  onClose,
  title,
  children,
  size = 'md',
}: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)

  useClickOutside(modalRef, onClose)

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [onClose])

  const sizeClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    full: 'max-w-4xl',
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            ref={modalRef}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className={`relative bg-white rounded-2xl shadow-2xl w-full ${sizeClasses[size]} max-h-[90vh] overflow-hidden`}
          >
            {/* Header */}
            {title && (
              <div className="flex items-center justify-between px-6 py-4 border-b">
                <h2 className="text-xl font-heading font-bold text-primary-dark">
                  {title}
                </h2>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
            )}

            {/* Close button if no title */}
            {!title && (
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors z-10"
              >
                <X size={20} />
              </button>
            )}

            {/* Content */}
            <div className="overflow-y-auto max-h-[calc(90vh-80px)]">
              {children}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
56. Toast Notification Component
tsx
// components/ui/Toast.tsx
'use client'

import { createContext, useContext, useState, ReactNode } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle, XCircle, AlertCircle, Info, X } from 'lucide-react'

type ToastType = 'success' | 'error' | 'warning' | 'info'

interface Toast {
  id: string
  message: string
  type: ToastType
}

interface ToastContextType {
  showToast: (message: string, type?: ToastType) => void
}

const ToastContext = createContext<ToastContextType | undefined>(undefined)

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([])

  const showToast = (message: string, type: ToastType = 'info') => {
    const id = Math.random().toString(36).substr(2, 9)
    setToasts(prev => [...prev, { id, message, type }])

    // Auto remove after 5 seconds
    setTimeout(() => {
      setToasts(prev => prev.filter(toast => toast.id !== id))
    }, 5000)
  }

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id))
  }

  const icons = {
    success: CheckCircle,
    error: XCircle,
    warning: AlertCircle,
    info: Info,
  }

  const colors = {
    success: 'bg-green-500',
    error: 'bg-red-500',
    warning: 'bg-yellow-500',
    info: 'bg-blue-500',
  }

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}

      {/* Toast Container */}
      <div className="fixed top-24 right-4 z-50 flex flex-col gap-2">
        <AnimatePresence>
          {toasts.map(toast => {
            const Icon = icons[toast.type]
            return (
              <motion.div
                key={toast.id}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg shadow-lg text-white min-w-[300px] ${colors[toast.type]}`}
              >
                <Icon size={20} />
                <span className="flex-1">{toast.message}</span>
                <button
                  onClick={() => removeToast(toast.id)}
                  className="p-1 hover:bg-white/20 rounded transition-colors"
                >
                  <X size={16} />
                </button>
              </motion.div>
            )
          })}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  )
}

export function useToast() {
  const context = useContext(ToastContext)
  if (context === undefined) {
    throw new Error('useToast must be used within a ToastProvider')
  }
  return context
}
57. Skeleton Loading Components
tsx
// components/ui/Skeleton.tsx
import { cn } from '@/lib/utils'

interface SkeletonProps {
  className?: string
}

export function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      className={cn('animate-pulse bg-gray-200 rounded', className)}
    />
  )
}

export function CardSkeleton() {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
      <Skeleton className="h-48 w-full rounded-none" />
      <div className="p-6 space-y-3">
        <Skeleton className="h-4 w-1/4" />
        <Skeleton className="h-6 w-3/4" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-2/3" />
      </div>
    </div>
  )
}

export function ProductCardSkeleton() {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
      <Skeleton className="h-48 w-full rounded-none" />
      <div className="p-4 space-y-3">
        <Skeleton className="h-3 w-16" />
        <Skeleton className="h-5 w-3/4" />
        <Skeleton className="h-3 w-full" />
        <div className="flex items-center gap-2">
          <Skeleton className="h-4 w-12" />
          <Skeleton className="h-3 w-20" />
        </div>
        <Skeleton className="h-6 w-20" />
      </div>
    </div>
  )
}

export function TestimonialSkeleton() {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-xl">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <Skeleton className="w-24 h-24 md:w-32 md:h-32 rounded-full" />
        <div className="flex-1 space-y-4">
          <Skeleton className="h-4 w-10" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Skeleton key={i} className="h-5 w-5" />
            ))}
          </div>
          <Skeleton className="h-5 w-32" />
          <Skeleton className="h-4 w-24" />
        </div>
      </div>
    </div>
  )
}

export function StoreSkeleton() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg">
      <Skeleton className="h-6 w-3/4 mb-4" />
      <div className="space-y-2">
        <div className="flex items-start gap-2">
          <Skeleton className="h-4 w-4 mt-1" />
          <Skeleton className="h-4 w-full" />
        </div>
        <div className="flex items-center gap-2">
          <Skeleton className="h-4 w-4" />
          <Skeleton className="h-4 w-32" />
        </div>
        <div className="flex items-center gap-2">
          <Skeleton className="h-4 w-4" />
          <Skeleton className="h-4 w-40" />
        </div>
      </div>
      <div className="flex gap-3 mt-4">
        <Skeleton className="h-10 w-32 rounded-lg" />
        <Skeleton className="h-10 w-20 rounded-lg" />
      </div>
    </div>
  )
}

export function JobSkeleton() {
  return (
    <div className="bg-gray-50 rounded-xl p-6 shadow-lg">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-2">
          <Skeleton className="h-6 w-48" />
          <div className="flex gap-4">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-4 w-16" />
          </div>
        </div>
        <Skeleton className="h-6 w-28" />
      </div>
    </div>
  )
}
58. SEO Component
tsx
// components/SEO.tsx
import Head from 'next/head'
import { siteConfig } from '@/app/metadata'

interface SEOProps {
  title?: string
  description?: string
  image?: string
  url?: string
  type?: 'website' | 'article'
  publishedTime?: string
  modifiedTime?: string
  author?: string
}

export default function SEO({
  title,
  description = siteConfig.description,
  image = siteConfig.ogImage,
  url = siteConfig.url,
  type = 'website',
  publishedTime,
  modifiedTime,
  author,
}: SEOProps) {
  const fullTitle = title 
    ? `${title} | ${siteConfig.name}` 
    : `${siteConfig.name} - ${siteConfig.tagline}`

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteConfig.name} />
      
      {/* Article specific */}
      {type === 'article' && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === 'article' && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {type === 'article' && author && (
        <meta property="article:author" content={author} />
      )}
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* Theme Color */}
      <meta name="theme-color" content="#2D3748" />
    </Head>
  )
}
59. Final Updated Layout with Toast Provider
tsx
// app/layout.tsx (Final)
import type { Metadata } from 'next'
import { Poppins, Oswald, Playfair_Display } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/layout/WhatsAppButton'
import BackToTop from '@/components/ui/BackToTop'
import ScrollProgress from '@/components/ui/ScrollProgress'
import CookieConsent from '@/components/ui/CookieConsent'
import { AppProvider } from '@/context/AppContext'
import { ToastProvider } from '@/components/ui/Toast'
import { defaultMetadata } from './metadata'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-oswald',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = defaultMetadata

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${oswald.variable} ${playfair.variable}`}>
      <body className="font-body antialiased">
        <AppProvider>
          <ToastProvider>
            <ScrollProgress />
            <Header />
            <main className="pt-20 min-h-screen">
              {children}
            </main>
            <Footer />
            <WhatsAppButton />
            <BackToTop />
            <CookieConsent />
          </ToastProvider>
        </AppProvider>
      </body>
    </html>
  )
}
60. Package.json (Final Complete Version)
json
{
  "name": "vanankam-franchise",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "lint:fix": "next lint --fix",
    "type-check": "tsc --noEmit",
    "format": "prettier --write .",
    "prepare": "husky install"
  },
  "dependencies": {
    "next": "14.0.4",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "framer-motion": "^10.16.16",
    "lucide-react": "^0.303.0",
    "clsx": "^2.0.0",
    "tailwind-merge": "^2.2.0",
    "@radix-ui/react-accordion": "^1.1.2",
    "@radix-ui/react-dialog": "^1.0.5",
    "@radix-ui/react-navigation-menu": "^1.1.4",
    "@radix-ui/react-select": "^2.0.0",
    "@radix-ui/react-tabs": "^1.0.4",
    "embla-carousel-react": "^8.0.0",
    "react-intersection-observer": "^9.5.3",
    "react-hook-form": "^7.49.2",
    "@hookform/resolvers": "^3.3.2",
    "zod": "^3.22.4"
  },
  "devDependencies": {
    "@types/node": "^20.10.6",
    "@types/react": "^18.2.46",
    "@types/react-dom": "^18.2.18",
    "autoprefixer": "^10.4.16",
    "postcss": "^8.4.32",
    "tailwindcss": "^3.4.0",
    "typescript": "^5.3.3",
    "eslint": "^8.56.0",
    "eslint-config-next": "14.0.4",
    "prettier": "^3.1.1",
    "prettier-plugin-tailwindcss": "^0.5.10"
  }
}
61. Final Setup Instructions
bash
# 1. Create new Next.js project
npx create-next-app@latest vanankam --typescript --tailwind --eslint --app --src-dir=false --import-alias="@/*"

# 2. Navigate to project
cd vanankam

# 3. Install all dependencies
npm install framer-motion lucide-react clsx tailwind-merge @radix-ui/react-accordion @radix-ui/react-dialog @radix-ui/react-navigation-menu @radix-ui/react-select @radix-ui/react-tabs embla-carousel-react react-intersection-observer react-hook-form @hookform/resolvers zod

# 4. Copy all the files from this guide to their respective locations

# 5. Create necessary directories
mkdir -p components/layout components/home components/ui lib hooks context types public/images

# 6. Start development server
npm run dev

# 7. Build for production
npm run build

# 8. Start production server
npm run start
✅ PROJECT COMPLETE
Summary of What's Included:
Pages (10 total):
Home - Hero, Stats, Mission/Vision, Franchise, Blog, Gallery, Testimonials, FAQ, Leaders
About - Company story, timeline, team
Menu - Categorized menu with filters
Gallery - Filterable gallery with lightbox
Store Locator - Search, filter, map integration ready
Careers - Job listings with expandable details
Products - E-commerce style product grid
Contact - Contact form with validation
Franchise - Application form, pricing models
Error/404 - Custom error pages
Components (40+):
Layout: Header, Footer, WhatsApp Button
Home Sections: Hero, Stats, Mission, Franchise, Blog, Gallery, Testimonials, FAQ, Leaders, Newsletter, Partners
UI: Button, Card, Input, Badge, Modal, Toast, Skeleton, ScrollProgress, BackToTop, CookieConsent
Features:
✅ Fully responsive design
✅ Smooth Framer Motion animations
✅ TypeScript throughout
✅ SEO optimized with metadata
✅ Form validation ready
✅ API routes for forms
✅ Toast notifications
✅ Loading states & skeletons
✅ Custom hooks
✅ Context providers
✅ Cookie consent
✅ Accessibility considerations
The website is now production-ready! Simply add your actual images, update the content, and deploy to Vercel or your preferred hosting platform.

Claude Opus 4.5