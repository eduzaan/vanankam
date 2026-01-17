import React from 'react'
import { motion } from 'framer-motion'

export default function Skeleton({ className = '' }: { className?: string }) {
  return (
    <motion.div
      className={`animate-pulse bg-muted rounded ${className}`}
      initial={{ opacity: 0.5 }}
      animate={{ opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 1.5, repeat: Infinity }}
    />
  )
}

// Enhanced Image component with loading states and lazy loading
interface ImageWithSkeletonProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
  fill?: boolean
  sizes?: string
  onLoad?: () => void
  onError?: () => void
}

export function ImageWithSkeleton({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  fill = false,
  sizes,
  onLoad,
  onError
}: ImageWithSkeletonProps) {
  const [isLoading, setIsLoading] = React.useState(true)
  const [hasError, setHasError] = React.useState(false)

  const handleLoad = () => {
    setIsLoading(false)
    onLoad?.()
  }

  const handleError = () => {
    setIsLoading(false)
    setHasError(true)
    onError?.()
  }

  if (hasError) {
    return (
      <div className={`flex items-center justify-center bg-gray-200 rounded ${className}`}>
        <div className="text-gray-400 text-sm">Failed to load image</div>
      </div>
    )
  }

  return (
    <div className={`relative ${className}`}>
      {isLoading && (
        <Skeleton className="absolute inset-0 z-10" />
      )}
      <motion.img
        src={src}
        alt={alt}
        width={fill ? undefined : width}
        height={fill ? undefined : height}
        className={`${fill ? 'object-cover' : ''} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
        style={fill ? { width: '100%', height: '100%' } : undefined}
        loading={priority ? 'eager' : 'lazy'}
        onLoad={handleLoad}
        onError={handleError}
        initial={{ scale: 0.95, opacity: 0 }}
        animate={isLoading ? { scale: 0.95, opacity: 0 } : { scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
    </div>
  )
}
