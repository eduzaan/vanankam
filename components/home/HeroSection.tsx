'use client'

import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useRef, useState, useEffect } from 'react'
import { 
  charVariants, 
  staggerContainerVariants, 
  fadeUpVariants, 
  scaleVariants,
  pulseVariants,
  floatVariants
} from '@/lib/animations'
import { useAnimatedCounter } from '@/hooks/useAdvancedAnimations'

export default function HeroSection() {
  const headingText = "Where Every Sip Tells a Story"
  const descriptionText = "Experience the authentic taste of traditional Indian chai, served in eco-friendly kulhads. Join the chai revolution with Vanankam!"

  const sectionRef = useRef<HTMLElement>(null)
  const [isMounted, setIsMounted] = useState(false)
  const [windowDimensions, setWindowDimensions] = useState({ width: 1000, height: 800 })
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  // Banner images to rotate
  const bannerImages = [
    '/images/pexels-pitamaas-575428118-16942970.jpg',
    '/images/banner-home-page-2-11082512534588.jpg',
    '/images/banner-home-page-3-11082501005128.jpg',
  ]
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start']
  })

  useEffect(() => {
    setIsMounted(true)
    if (typeof window !== 'undefined') {
      setWindowDimensions({ width: window.innerWidth, height: window.innerHeight })
      
      const handleResize = () => {
        setWindowDimensions({ width: window.innerWidth, height: window.innerHeight })
      }
      
      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
    }
  }, [])

  // Rotate banners with user engagement optimization
  useEffect(() => {
    if (isPaused || isHovered) return

    const interval = setInterval(() => {
      setCurrentBannerIndex((prev) => (prev + 1) % bannerImages.length)
    }, 8000) // 8 seconds when active

    return () => clearInterval(interval)
  }, [isPaused, isHovered, bannerImages.length])

  // Auto-pause when user is not engaged (scrolling, etc.)
  useEffect(() => {
    let timeoutId: NodeJS.Timeout

    const handleUserActivity = () => {
      setIsPaused(false)
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        setIsPaused(true) // Pause after 30 seconds of inactivity
      }, 30000)
    }

    const handleScroll = () => {
      setIsPaused(true) // Pause during scroll
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        setIsPaused(false) // Resume after scroll stops
      }, 2000)
    }

    window.addEventListener('mousemove', handleUserActivity)
    window.addEventListener('keydown', handleUserActivity)
    window.addEventListener('scroll', handleScroll)

    // Start with paused state, resume on first activity
    timeoutId = setTimeout(() => setIsPaused(false), 2000)

    return () => {
      window.removeEventListener('mousemove', handleUserActivity)
      window.removeEventListener('keydown', handleUserActivity)
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(timeoutId)
    }
  }, [])

  // Parallax effects
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8])

  // Smooth spring animations
  const ySmooth = useSpring(y, { stiffness: 100, damping: 30 })
  const opacitySmooth = useSpring(opacity, { stiffness: 100, damping: 30 })

  const textVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.02,
        delayChildren: 0.2,
      },
    },
  }

  return (
    <section 
      ref={sectionRef} 
      className="relative min-h-screen flex items-center overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Parallax Background Image with Rotation */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y: ySmooth, scale }}
        key={currentBannerIndex}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <Image
          src={bannerImages[currentBannerIndex]}
          alt="Vanankam Chai Background"
          fill
          className="object-cover brightness-[0.4]"
          priority
        />
      </motion.div>

      {/* Animated gradient overlay with parallax */}
      <motion.div 
        className="absolute inset-0 z-1 bg-gradient-to-r from-primary-dark/80 via-primary-dark/60 to-transparent"
        style={{ opacity: opacitySmooth }}
      />

      {/* Floating particles effect */}
      <div className="absolute inset-0 z-1 overflow-hidden">
        {isMounted && [...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-accent/30 rounded-full"
            animate={{
              y: [Math.random() * windowDimensions.height, Math.random() * windowDimensions.height],
              x: [Math.random() * windowDimensions.width, Math.random() * windowDimensions.width],
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }}
          >
            <motion.span
              initial={{ opacity: 0, scale: 0, rotate: -180 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ 
                delay: 0.3,
                type: 'spring',
                stiffness: 260,
                damping: 20
              }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="inline-block px-3 md:px-4 py-2 bg-accent/20 backdrop-blur-sm text-primary-dark rounded-full text-xs md:text-sm font-medium mb-6 cursor-default"
            >
              <motion.span
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                🍵
              </motion.span>
              {' '}India's #1 Kulhad Chai Franchise
            </motion.span>

            <motion.div className="space-y-0 mb-6 md:mb-8">
              {/* First Line - White */}
              <motion.h1
                className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-white leading-tight"
                variants={textVariants}
                initial="hidden"
                animate="visible"
              >
                {headingText.split('').map((char, index) => (
                  <motion.span key={`line1-${index}`} variants={charVariants}>
                    {char === ' ' ? '\u00A0' : char}
                  </motion.span>
                ))}
              </motion.h1>

              {/* Second Line - Accent/Gold (Repeated) */}
              <motion.h2
                className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-accent leading-tight"
                variants={textVariants}
                initial="hidden"
                animate="visible"
                transition={{
                  staggerChildren: 0.03,
                  delayChildren: 1.2,
                }}
              >
                {headingText.split('').map((char, index) => (
                  <motion.span key={`line2-${index}`} variants={charVariants}>
                    {char === ' ' ? '\u00A0' : char}
                  </motion.span>
                ))}
              </motion.h2>

              {/* Third Line - Tells a Story (Accent) */}
              <motion.h3
                className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold text-accent leading-tight pt-1"
                variants={textVariants}
                initial="hidden"
                animate="visible"
                transition={{
                  staggerChildren: 0.03,
                  delayChildren: 2.4,
                }}
              >
                {'Tells a Story'.split('').map((char, index) => (
                  <motion.span key={`line3-${index}`} variants={charVariants}>
                    {char === ' ' ? '\u00A0' : char}
                  </motion.span>
                ))}
              </motion.h3>
            </motion.div>

            <motion.div
              className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-6 md:mb-8 leading-relaxed max-w-2xl"
              variants={textVariants}
              initial="hidden"
              animate="visible"
            >
              {descriptionText.split('').map((char, index) => (
                <motion.span key={index} variants={charVariants}>
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col xs:flex-row flex-wrap gap-2 xs:gap-3 sm:gap-4 w-full max-w-lg xs:max-w-none mx-auto xs:mx-0"
            >
              <motion.div
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(255, 193, 7, 0.3)' }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                className="flex-1 xs:flex-initial min-w-0"
              >
                <Link href="/franchise" className="btn-primary text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl px-3 xs:px-4 sm:px-5 md:px-6 lg:px-8 py-2 xs:py-3 sm:py-3.5 md:py-4 block text-center w-full xs:w-auto transition-all duration-300 hover:shadow-xl">
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="inline-flex items-center gap-1 xs:gap-2"
                  >
                    Become a Franchisee
                    <span className="text-sm xs:text-base sm:text-lg md:text-xl">→</span>
                  </motion.span>
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(107, 68, 35, 0.3)' }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                className="flex-1 xs:flex-initial min-w-0"
              >
                <Link href="/menu" className="btn-secondary text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl px-3 xs:px-4 sm:px-5 md:px-6 lg:px-8 py-2 xs:py-3 sm:py-3.5 md:py-4 block text-center w-full xs:w-auto transition-all duration-300 hover:shadow-xl">
                  <span className="inline-flex items-center justify-center gap-1 xs:gap-2">
                    <span className="text-sm xs:text-base sm:text-lg md:text-xl">🍽️</span>
                    Explore Menu
                  </span>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Content - Kulhad Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] flex items-center justify-center">
              {/* Floating Kulhad Stats */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, type: "spring", stiffness: 100 }}
                className="grid grid-cols-2 gap-4 md:gap-5 w-full max-w-sm"
              >
                {[
                  { number: '200+', label: 'Cities', bgClass: 'bg-gradient-to-br from-primary-dark to-primary', delay: 0.7 },
                  { number: '500+', label: 'Outlets', bgClass: 'bg-gradient-to-br from-accent to-primary-dark', delay: 0.8 },
                  { number: '26+', label: 'States', bgClass: 'bg-gradient-to-br from-primary-dark via-primary to-accent', delay: 0.9 },
                  { number: '200M+', label: 'Kulhad Served', bgClass: 'bg-gradient-to-br from-accent via-primary-dark to-primary', delay: 1.0 },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 30, rotate: -20, scale: 0.5 }}
                    animate={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
                    transition={{ 
                      delay: stat.delay, 
                      type: "spring",
                      stiffness: 120,
                      damping: 15,
                      duration: 0.6
                    }}
                    whileHover={{ 
                      scale: 1.08,
                      rotateY: 10,
                      boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
                    }}
                    className={`relative ${stat.bgClass} rounded-2xl p-4 md:p-5 shadow-lg text-center overflow-hidden group`}
                  >
                    {/* Animated Background Shine */}
                    <motion.div
                      className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"
                      animate={{
                        backgroundPosition: ['200% 0', '-200% 0'],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: 'reverse',
                      }}
                      style={{
                        backgroundSize: '200% 100%',
                      }}
                    />

                    {/* Pulsing Background Circle */}
                    <motion.div
                      className="absolute inset-0 opacity-20"
                      animate={{
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                      }}
                    />

                    <div className="relative z-10">
                      {/* Animated Number with Counter Effect */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          delay: stat.delay + 0.2,
                          type: "spring",
                          stiffness: 150,
                        }}
                        className="text-2xl md:text-3xl font-heading font-bold text-white mb-1"
                      >
                        {stat.number}
                      </motion.div>

                      {/* Label with Stagger */}
                      <motion.div
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          delay: stat.delay + 0.3,
                          duration: 0.4,
                        }}
                        className="text-xs md:text-sm text-white font-bold tracking-wider uppercase"
                      >
                        {stat.label.split('').map((char, charIndex) => (
                          <motion.span
                            key={charIndex}
                            initial={{ opacity: 0, y: 2 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                              delay: stat.delay + 0.35 + charIndex * 0.02,
                            }}
                          >
                            {char === ' ' ? '\u00A0' : char}
                          </motion.span>
                        ))}
                      </motion.div>
                    </div>

                    {/* Animated Border */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl border-2 border-white/30 opacity-0 group-hover:opacity-100 transition-opacity"
                      animate={{
                        borderColor: ['rgba(255,255,255,0.3)', 'rgba(255,255,255,0.6)', 'rgba(255,255,255,0.3)'],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                    />

                    {/* Floating particles effect */}
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-white/60 rounded-full"
                        animate={{
                          x: [0, 20, -20, 0],
                          y: [0, -30, 30, 0],
                          opacity: [0, 1, 1, 0],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: i * 0.3,
                        }}
                        style={{
                          left: `${25 + i * 25}%`,
                          top: '50%',
                        }}
                      />
                    ))}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Banner Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center gap-4">
          {/* Previous Button */}
          <motion.button
            onClick={() => setCurrentBannerIndex((prev) => (prev - 1 + bannerImages.length) % bannerImages.length)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors"
            aria-label="Previous banner"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </motion.button>

          {/* Navigation Dots */}
          <div className="flex gap-2">
            {bannerImages.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentBannerIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentBannerIndex ? 'bg-accent' : 'bg-white/50'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                aria-label={`Go to banner ${index + 1}`}
              />
            ))}
          </div>

          {/* Next Button */}
          <motion.button
            onClick={() => setCurrentBannerIndex((prev) => (prev + 1) % bannerImages.length)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors"
            aria-label="Next banner"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </motion.button>
        </div>
      </div>
    </section>
  )
}

