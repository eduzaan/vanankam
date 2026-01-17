/**
 * Advanced Animation Utilities and Variants for Framer Motion
 * Centralized animation configurations for consistent and powerful animations
 */

import { Variants, Transition } from 'framer-motion'

// ============================================================================
// EASING FUNCTIONS - Custom bezier curves for smooth animations
// ============================================================================

export const easings = {
  smooth: [0.43, 0.13, 0.23, 0.96],
  bouncy: [0.68, -0.55, 0.265, 1.55],
  elastic: [0.175, 0.885, 0.32, 1.275],
  sharp: [0.4, 0.0, 0.2, 1],
  easeInOut: [0.645, 0.045, 0.355, 1],
  easeOut: [0.22, 1, 0.36, 1],
}

// ============================================================================
// TRANSITION PRESETS
// ============================================================================

export const transitions = {
  smooth: {
    duration: 0.6,
    ease: easings.smooth,
  } as Transition,
  
  bouncy: {
    type: 'spring',
    stiffness: 260,
    damping: 20,
  } as Transition,
  
  elastic: {
    type: 'spring',
    stiffness: 400,
    damping: 25,
    mass: 0.8,
  } as Transition,
  
  slow: {
    duration: 1.2,
    ease: easings.smooth,
  } as Transition,
  
  fast: {
    duration: 0.3,
    ease: easings.sharp,
  } as Transition,
}

// ============================================================================
// FADE VARIANTS
// ============================================================================

export const fadeVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: transitions.smooth,
  },
  exit: {
    opacity: 0,
    transition: transitions.fast,
  },
}

export const fadeUpVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 60,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: transitions.smooth,
  },
  exit: {
    opacity: 0,
    y: -60,
    transition: transitions.fast,
  },
}

export const fadeDownVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: -60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitions.smooth,
  },
}

export const fadeLeftVariants: Variants = {
  hidden: { 
    opacity: 0, 
    x: -80,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: transitions.smooth,
  },
}

export const fadeRightVariants: Variants = {
  hidden: { 
    opacity: 0, 
    x: 80,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: transitions.smooth,
  },
}

// ============================================================================
// SCALE VARIANTS
// ============================================================================

export const scaleVariants: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: transitions.bouncy,
  },
  hover: {
    scale: 1.05,
    transition: transitions.fast,
  },
}

export const popVariants: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0,
    rotate: -180,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: transitions.elastic,
  },
}

// ============================================================================
// 3D TRANSFORM VARIANTS
// ============================================================================

export const flip3DVariants: Variants = {
  hidden: { 
    opacity: 0,
    rotateY: -90,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    rotateY: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: easings.easeOut,
    },
  },
}

export const tilt3DVariants: Variants = {
  rest: {
    rotateX: 0,
    rotateY: 0,
    scale: 1,
  },
  hover: {
    rotateX: 5,
    rotateY: 5,
    scale: 1.05,
    transition: transitions.fast,
  },
}

export const card3DVariants: Variants = {
  hidden: {
    opacity: 0,
    rotateX: -15,
    y: 50,
  },
  visible: {
    opacity: 1,
    rotateX: 0,
    y: 0,
    transition: {
      duration: 0.7,
      ease: easings.easeOut,
    },
  },
  hover: {
    y: -12,
    rotateY: 2,
    rotateX: 2,
    scale: 1.02,
    transition: transitions.fast,
  },
}

// ============================================================================
// STAGGER CONTAINER VARIANTS
// ============================================================================

export const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

export const staggerFastContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
}

export const staggerSlowContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}

// ============================================================================
// TEXT ANIMATION VARIANTS
// ============================================================================

export const textRevealVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    rotateX: -90,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.5,
      ease: easings.easeOut,
    },
  },
}

export const charVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    scale: 0.3,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 15,
    },
  },
}

export const wordVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: easings.easeOut,
    },
  },
}

// ============================================================================
// SLIDE VARIANTS
// ============================================================================

export const slideVariants: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
  }),
}

// ============================================================================
// SPECIAL EFFECTS VARIANTS
// ============================================================================

export const glowVariants: Variants = {
  initial: {
    boxShadow: '0 0 0px rgba(255, 193, 7, 0)',
  },
  animate: {
    boxShadow: [
      '0 0 20px rgba(255, 193, 7, 0.5)',
      '0 0 40px rgba(255, 193, 7, 0.8)',
      '0 0 20px rgba(255, 193, 7, 0.5)',
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
}

export const floatVariants: Variants = {
  animate: {
    y: [0, -20, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
}

export const rotateVariants: Variants = {
  animate: {
    rotate: 360,
    transition: {
      duration: 20,
      repeat: Infinity,
      ease: 'linear',
    },
  },
}

export const pulseVariants: Variants = {
  animate: {
    scale: [1, 1.05, 1],
    opacity: [1, 0.8, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
}

// ============================================================================
// MAGNETIC HOVER EFFECT
// ============================================================================

export const magneticVariants: Variants = {
  initial: {
    x: 0,
    y: 0,
  },
}

// ============================================================================
// REVEAL VARIANTS (for scroll animations)
// ============================================================================

export const revealVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 75,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: easings.easeOut,
    },
  },
}

export const revealLeftVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -100,
    rotate: -5,
  },
  visible: {
    opacity: 1,
    x: 0,
    rotate: 0,
    transition: {
      duration: 0.8,
      ease: easings.easeOut,
    },
  },
}

export const revealRightVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 100,
    rotate: 5,
  },
  visible: {
    opacity: 1,
    x: 0,
    rotate: 0,
    transition: {
      duration: 0.8,
      ease: easings.easeOut,
    },
  },
}

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

/**
 * Creates a stagger container with custom delay
 */
export const createStaggerContainer = (staggerDelay = 0.1, childrenDelay = 0.2): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: staggerDelay,
      delayChildren: childrenDelay,
    },
  },
})

/**
 * Creates a fade variant with custom direction and distance
 */
export const createFadeVariant = (
  direction: 'up' | 'down' | 'left' | 'right' = 'up',
  distance = 60
): Variants => {
  const axis = direction === 'up' || direction === 'down' ? 'y' : 'x'
  const value = direction === 'up' || direction === 'left' ? distance : -distance

  return {
    hidden: {
      opacity: 0,
      [axis]: value,
    },
    visible: {
      opacity: 1,
      [axis]: 0,
      transition: transitions.smooth,
    },
  }
}

/**
 * Viewport configuration for scroll animations
 */
export const viewportConfig = {
  once: true,
  amount: 0.3,
  margin: '-100px',
}

export const viewportConfigPartial = {
  once: true,
  amount: 0.1,
  margin: '-50px',
}
