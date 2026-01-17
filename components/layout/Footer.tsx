'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, Youtube, ArrowUp } from 'lucide-react'
import { SITE_CONFIG, SOCIAL_LINKS } from '@/lib/constants'

const footerLinks = {
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact Us', href: '/contact' },
  ],
  franchise: [
    { name: 'Be A Franchise', href: '/franchise' },
    { name: 'FAQs', href: '/franchise#faq' },
  ],
  menu: [
    { name: 'Hot Beverages', href: '/menu#hot' },
    { name: 'Cold Beverages', href: '/menu#cold' },
    { name: 'Snacks', href: '/menu#snacks' },
    { name: 'Products', href: '/products' },
  ],
}

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-primary-dark text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12">
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
              <a href={`tel:${SITE_CONFIG.phone}`} className="flex items-center gap-3 text-gray-300 hover:text-accent transition-colors">
                <Phone size={18} />
                <span>{SITE_CONFIG.phone}</span>
              </a>
              <a href={`mailto:${SITE_CONFIG.email}`} className="flex items-center gap-3 text-gray-300 hover:text-accent transition-colors">
                <Mail size={18} />
                <span>{SITE_CONFIG.email}</span>
              </a>
              <div className="flex items-start gap-3 text-gray-300">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span>{SITE_CONFIG.address}</span>
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
        <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-gray-700 flex flex-col sm:flex-row justify-between items-center gap-4 md:gap-6">
          <div className="flex items-center gap-4">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white hover:bg-accent hover:text-primary-dark transition-all duration-300 active:scale-95"
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
          <p className="text-gray-400 text-xs md:text-sm text-center sm:text-right">
            © {new Date().getFullYear()} Vanankam. All rights reserved.
          </p>
        </div>

        {/* Made By */}
        <div className="mt-6 pt-6 border-t border-gray-700 text-center">
          <p className="text-gray-500 text-xs">
            Made with <span className="text-red-500">♥</span> by <span className="text-accent font-semibold">Alok Yadav</span>
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
