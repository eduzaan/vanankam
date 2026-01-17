/**
 * Advanced Scroll Progress Bar with Animations
 */

'use client'

import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll()
  const [isVisible, setIsVisible] = useState(false)

  // Smooth spring animation for the progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    mass: 0.8,
  })

  // Color transformation based on scroll progress
  const progressColor = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [
      'rgb(255, 193, 7)',      // Accent (gold)
      'rgb(107, 68, 35)',      // Primary dark
      'rgb(216, 155, 73)',     // Primary
      'rgb(255, 193, 7)',      // Accent
      'rgb(107, 68, 35)',      // Primary dark
    ]
  )

  // Show progress after a small delay
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {/* Top Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-primary to-primary-dark z-50 shadow-lg"
        style={{
          scaleX: smoothProgress,
          transformOrigin: '0%',
          opacity: isVisible ? 1 : 0,
        }}
      />

      {/* Top Glow Effect */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-accent/50 to-transparent blur-md z-49"
        style={{
          scaleX: smoothProgress,
          transformOrigin: '0%',
          opacity: isVisible ? 0.5 : 0,
        }}
      />

      {/* Floating Progress Indicator Dot */}
      <motion.div
        className="fixed top-2 z-50 w-3 h-3 bg-accent rounded-full shadow-lg"
        style={{
          left: useTransform(scrollYProgress, [0, 1], ['0%', 'calc(100vw - 12px)']),
          opacity: useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]),
        }}
        animate={{
          boxShadow: [
            '0 0 0px rgba(255, 193, 7, 0.5)',
            '0 0 20px rgba(255, 193, 7, 0.8)',
            '0 0 0px rgba(255, 193, 7, 0.5)',
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      />
    </>
  )
}
