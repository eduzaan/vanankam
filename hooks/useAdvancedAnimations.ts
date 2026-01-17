/**
 * Advanced Animation Hooks
 * Custom hooks for complex animations and interactions
 */

import { useEffect, useState, useRef, RefObject } from 'react'
import { useMotionValue, useTransform, useSpring, useScroll, MotionValue } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

// ============================================================================
// SCROLL ANIMATION HOOKS
// ============================================================================

/**
 * Enhanced scroll animation with customizable options
 */
export const useScrollAnimation = (
  threshold = 0.1,
  triggerOnce = true,
  rootMargin = '-50px'
) => {
  const { ref, inView, entry } = useInView({
    threshold,
    triggerOnce,
    rootMargin,
  })

  return { ref, inView, entry }
}

/**
 * Multiple scroll triggers for stepped animations
 */
export const useMultiScrollAnimation = (thresholds: number[] = [0.1, 0.5, 0.9]) => {
  const [activeThreshold, setActiveThreshold] = useState(0)
  const { ref, entry } = useInView({
    threshold: thresholds,
    triggerOnce: false,
  })

  useEffect(() => {
    if (entry && entry.intersectionRatio) {
      const ratio = entry.intersectionRatio
      const closestIndex = thresholds.reduce((prev, curr, index) => {
        return Math.abs(curr - ratio) < Math.abs(thresholds[prev] - ratio) ? index : prev
      }, 0)
      setActiveThreshold(closestIndex)
    }
  }, [entry, thresholds])

  return { ref, activeThreshold, entry }
}

/**
 * Parallax scroll effect
 */
export const useParallax = (speed = 0.5) => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', `${speed * 100}%`])
  
  return { ref, y }
}

/**
 * Smooth parallax with spring physics
 */
export const useSmoothParallax = (speed = 0.5, stiffness = 100, damping = 30) => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const yRaw = useTransform(scrollYProgress, [0, 1], [0, speed * 100])
  const y = useSpring(yRaw, { stiffness, damping })
  
  return { ref, y, scrollYProgress }
}

// ============================================================================
// COUNTER ANIMATION HOOK
// ============================================================================

/**
 * Animated counter with easing
 */
export const useAnimatedCounter = (
  end: number,
  duration: number = 2000,
  start: number = 0,
  enabled: boolean = true
) => {
  const [count, setCount] = useState(start)

  useEffect(() => {
    if (!enabled) return

    let startTime: number | null = null
    let animationFrame: number

    const easeOutQuad = (t: number): number => t * (2 - t)

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const easedProgress = easeOutQuad(progress)
      
      setCount(Math.floor(easedProgress * (end - start) + start))
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(step)
      }
    }

    animationFrame = requestAnimationFrame(step)

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [end, duration, start, enabled])

  return count
}

// ============================================================================
// MOUSE TRACKING HOOKS
// ============================================================================

/**
 * Track mouse position
 */
export const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    if (typeof window === 'undefined') return

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return mousePosition
}

/**
 * Magnetic hover effect
 */
export const useMagneticHover = (strength = 0.3) => {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springConfig = { damping: 20, stiffness: 300 }
  const xSpring = useSpring(x, springConfig)
  const ySpring = useSpring(y, springConfig)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const distanceX = (e.clientX - centerX) * strength
    const distanceY = (e.clientY - centerY) * strength

    x.set(distanceX)
    y.set(distanceY)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return {
    ref,
    x: xSpring,
    y: ySpring,
    handleMouseMove,
    handleMouseLeave,
  }
}

/**
 * 3D tilt effect on mouse move
 */
export const useTilt3D = (maxTilt = 10) => {
  const ref = useRef<HTMLDivElement>(null)
  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)

  const springConfig = { damping: 20, stiffness: 400 }
  const rotateXSpring = useSpring(rotateX, springConfig)
  const rotateYSpring = useSpring(rotateY, springConfig)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const percentX = (e.clientX - centerX) / (rect.width / 2)
    const percentY = (e.clientY - centerY) / (rect.height / 2)

    rotateY.set(percentX * maxTilt)
    rotateX.set(-percentY * maxTilt)
  }

  const handleMouseLeave = () => {
    rotateX.set(0)
    rotateY.set(0)
  }

  return {
    ref,
    rotateX: rotateXSpring,
    rotateY: rotateYSpring,
    handleMouseMove,
    handleMouseLeave,
  }
}

// ============================================================================
// SCROLL PROGRESS HOOKS
// ============================================================================

/**
 * Get scroll progress of entire page
 */
export const useScrollProgress = () => {
  const { scrollYProgress } = useScroll()
  return scrollYProgress
}

/**
 * Get scroll progress of specific element
 */
export const useElementScrollProgress = (ref: RefObject<HTMLElement>) => {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  
  return scrollYProgress
}

/**
 * Smooth scroll progress with spring
 */
export const useSmoothScrollProgress = (stiffness = 100, damping = 30) => {
  const { scrollYProgress } = useScroll()
  const smoothProgress = useSpring(scrollYProgress, { stiffness, damping })
  
  return smoothProgress
}

// ============================================================================
// VIEWPORT SIZE HOOKS
// ============================================================================

/**
 * Track viewport size
 */
export const useViewportSize = () => {
  const [size, setSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  })

  useEffect(() => {
    if (typeof window === 'undefined') return

    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return size
}

/**
 * Check if mobile viewport
 */
export const useIsMobile = (breakpoint = 768) => {
  const { width } = useViewportSize()
  return width < breakpoint
}

// ============================================================================
// HOVER STATE HOOKS
// ============================================================================

/**
 * Track hover state with delay
 */
export const useDelayedHover = (delay = 300) => {
  const [isHovered, setIsHovered] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout>()

  const handleMouseEnter = () => {
    timeoutRef.current = setTimeout(() => {
      setIsHovered(true)
    }, delay)
  }

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setIsHovered(false)
  }

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  return { isHovered, handleMouseEnter, handleMouseLeave }
}

// ============================================================================
// STAGGER ANIMATION HOOK
// ============================================================================

/**
 * Create staggered animation delays
 */
export const useStaggerDelay = (index: number, baseDelay = 0.1, maxDelay = 1) => {
  return Math.min(index * baseDelay, maxDelay)
}

// ============================================================================
// REVEAL ON SCROLL HOOK
// ============================================================================

/**
 * Reveal elements as they scroll into view with custom animations
 */
export const useRevealOnScroll = (
  delay = 0,
  threshold = 0.1,
  once = true
) => {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce: once,
  })

  const [shouldAnimate, setShouldAnimate] = useState(false)

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setShouldAnimate(true)
      }, delay)

      return () => clearTimeout(timer)
    }
  }, [inView, delay])

  return { ref, shouldAnimate, inView }
}

// ============================================================================
// TEXT SPLIT ANIMATION HOOK
// ============================================================================

/**
 * Split text for character-by-character animation
 */
export const useTextSplit = (text: string, splitBy: 'chars' | 'words' = 'chars') => {
  if (splitBy === 'words') {
    return text.split(' ').map(word => word + ' ')
  }
  return text.split('')
}

// ============================================================================
// RANDOM STAGGER HOOK
// ============================================================================

/**
 * Generate random delays for more organic animations
 */
export const useRandomStagger = (min = 0, max = 0.5) => {
  const [delay] = useState(() => Math.random() * (max - min) + min)
  return delay
}

// ============================================================================
// PREFERS REDUCED MOTION
// ============================================================================

/**
 * Check if user prefers reduced motion
 */
export const usePrefersReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)

    const handler = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches)
    }

    mediaQuery.addEventListener('change', handler)
    return () => mediaQuery.removeEventListener('change', handler)
  }, [])

  return prefersReducedMotion
}
