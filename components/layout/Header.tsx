'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { Menu, X, Phone, Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react'
import { cn } from '@/lib/utils'
import { NAV_LINKS, SOCIAL_LINKS, SITE_CONFIG } from '@/lib/constants'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  
  const { scrollY } = useScroll()

  // Smooth scroll-based header changes
  const headerBackground = useTransform(
    scrollY,
    [0, 50, 100],
    ['rgba(107, 68, 35, 0.8)', 'rgba(107, 68, 35, 0.95)', 'rgba(107, 68, 35, 1)']
  )

  const headerShadow = useTransform(
    scrollY,
    [0, 50],
    ['0 0 0 rgba(0, 0, 0, 0)', '0 10px 30px rgba(0, 0, 0, 0.3)']
  )

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted) return
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isMounted])

  return (
    <motion.header
      style={{
        backgroundColor: headerBackground,
        boxShadow: headerShadow,
      }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm transition-all duration-300"
    >
      {/* Animated Top Border */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-primary to-accent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8 }}
      />

      {/* Top Bar */}
      <div className="hidden md:block bg-primary-dark/50 border-b border-primary-light/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-2 flex justify-end items-center gap-6">
          <motion.a
            href={`tel:${SITE_CONFIG.phone}`}
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 text-accent hover:text-yellow-400 transition-colors text-sm group"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Phone size={16} />
            </motion.div>
            <span className="font-medium hidden sm:inline group-hover:text-shadow-lg transition-all">
              {SITE_CONFIG.phone}
            </span>
          </motion.a>
          <div className="flex items-center gap-3">
            {SOCIAL_LINKS.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ 
                  scale: 1.2, 
                  rotate: 10,
                  textShadow: '0 0 10px rgba(255, 193, 7, 0.6)',
                }}
                className="text-white hover:text-accent transition-colors p-1"
              >
                <social.icon size={16} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Link href="/" className="flex items-center gap-2 md:gap-3">
              {/* Circle Logo */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="relative w-10 md:w-12 h-10 md:h-12 flex-shrink-0"
              >
                <Image
                  src="/images/circle-logo.png"
                  alt="Vanankam Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </motion.div>

              <motion.span
                className="text-lg md:text-2xl font-heading font-bold"
                animate={isScrolled ? { textShadow: '0 0 20px rgba(255, 193, 7, 0.5)' } : {}}
              >
                <span className="text-accent">V</span>
                <span className="text-white">ANANKAM</span>
                <span className="text-accent text-xs md:text-sm align-super">®</span>
              </motion.span>

              <motion.span 
                className="text-accent text-xs font-medium uppercase tracking-wider hidden sm:inline"
                animate={isScrolled ? { scale: 0.9, opacity: 0.7 } : { scale: 1, opacity: 1 }}
              >
                Yaar Mera Kulhad
              </motion.span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -2 }}
              >
                <Link
                  href={link.href}
                  className="text-white hover:text-accent transition-colors font-medium text-sm uppercase tracking-wide relative group"
                >
                  {link.name}
                  <motion.span
                    className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-accent to-transparent"
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
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
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="lg:hidden text-white p-3 -mr-3 hover:bg-primary/50 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                  <Image
                    src="/images/close-white.png"
                    alt="Close menu"
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                </motion.div>
              ) : (
                <motion.div key="menu" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                  <Image
                    src="/images/menu-icon.png"
                    alt="Open menu"
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden mt-4 pb-4"
            >
              <div className="flex flex-col gap-2">
                {NAV_LINKS.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ x: 5 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-white hover:text-accent transition-colors font-medium block py-3 px-4 hover:bg-primary/30 rounded-lg"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <Link
                    href="/franchise"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="btn-primary text-center mt-4 py-3 w-full"
                  >
                    Be A Franchise
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}
