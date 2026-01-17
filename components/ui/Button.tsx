"use client"

import React from 'react'
import { motion } from 'framer-motion'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline' | 'gradient'
  size?: 'sm' | 'md' | 'lg'
  animated?: boolean
}

export default function Button({ 
  variant = 'primary', 
  size = 'md',
  animated = true,
  className = '', 
  children,
  ...props 
}: Props) {
  // Base styles
  const baseStyles = 'inline-flex items-center justify-center font-medium font-bold transition-all duration-300 relative overflow-hidden'
  
  // Size variants
  const sizeStyles = {
    sm: 'px-4 py-2 text-sm rounded-lg',
    md: 'px-6 py-3 text-base rounded-xl',
    lg: 'px-8 py-4 text-lg rounded-2xl',
  }

  // Color variants
  const colorStyles = {
    primary: 'bg-gradient-to-r from-primary to-primary-dark text-white hover:shadow-lg hover:shadow-primary/50',
    secondary: 'bg-gradient-to-r from-accent to-yellow-500 text-primary-dark hover:shadow-lg hover:shadow-accent/50',
    ghost: 'bg-transparent text-primary hover:bg-primary/10',
    outline: 'border-2 border-primary text-primary hover:bg-primary/5',
    gradient: 'bg-gradient-to-r from-primary-dark via-accent to-primary text-white hover:shadow-xl hover:shadow-accent/50',
  }

  const buttonContent = (
    <>
      {/* Shimmer effect on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
        initial={{ x: '-100%' }}
        whileHover={animated ? { x: '100%' } : {}}
        transition={{ duration: 0.5 }}
        style={{ opacity: 0 }}
      />

      {/* Content wrapper */}
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>

      {/* Background gradient animation on hover */}
      <motion.div
        className="absolute inset-0 -z-10"
        initial={{ scale: 1 }}
        whileHover={animated ? { scale: 1.15, opacity: 0.5 } : {}}
        transition={{ duration: 0.3 }}
      />
    </>
  )

  if (!animated) {
    return (
      <button
        className={`${baseStyles} ${sizeStyles[size]} ${colorStyles[variant]} ${className}`}
        {...props}
      >
        {buttonContent}
      </button>
    )
  }

  return (
    <motion.button
      className={`${baseStyles} ${sizeStyles[size]} ${colorStyles[variant]} ${className}`}
      whileHover={{
        scale: 1.05,
      }}
      whileTap={{
        scale: 0.95,
      }}
      transition={{
        type: 'spring',
        stiffness: 400,
        damping: 17,
      } as any}
      {...(props as any)}
    >
      {buttonContent}
    </motion.button>
  )
}
