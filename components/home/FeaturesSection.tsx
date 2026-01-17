'use client'

import { useState, useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import { 
  card3DVariants, 
  staggerContainerVariants, 
  scaleVariants,
  fadeUpVariants
} from '@/lib/animations'
import { useTilt3D } from '@/hooks/useAdvancedAnimations'

const features = [
  {
    icon: '🏺',
    title: 'Authentic Kulhad Experience',
    description: 'Traditional clay cups that enhance the aroma and taste of chai while being 100% eco-friendly and biodegradable.',
    image: '/images/pouring-tea-into-clay-cups.jpg',
    gradient: 'from-amber-500 to-orange-600',
    highlight: '100% Eco-Friendly'
  },
  {
    icon: '🌿',
    title: 'Premium Quality Ingredients',
    description: 'We source the finest tea leaves, spices, and ingredients to create the perfect blend that tantalizes your taste buds.',
    image: '/images/pexels-pitamaas-575428118-16942970.jpg',
    gradient: 'from-green-500 to-emerald-600',
    highlight: 'Finest Quality'
  },
  {
    icon: '⚡',
    title: 'Quick Service',
    description: 'Optimized operations ensure you get your favorite chai and snacks within minutes without compromising quality.',
    image: '/images/bff4bd6e-ee5a-422a-adbf-67a70f3637a0.jpg',
    gradient: 'from-yellow-500 to-amber-600',
    highlight: 'Lightning Fast'
  },
  {
    icon: '💰',
    title: 'Affordable Pricing',
    description: 'Premium quality at pocket-friendly prices. Starting from just ₹20, making chai accessible to everyone.',
    image: '/images/OIP.jpg',
    gradient: 'from-blue-500 to-cyan-600',
    highlight: 'Starting ₹20'
  },
  {
    icon: '🎯',
    title: 'Hygienic Standards',
    description: 'Strict quality control and hygiene protocols at every outlet. Your health and safety is our top priority.',
    image: '/images/OIP (1).jpg',
    gradient: 'from-purple-500 to-pink-600',
    highlight: 'FSSAI Certified'
  },
  {
    icon: '🌍',
    title: 'Pan-India Presence',
    description: 'With 500+ outlets across 200+ cities in 26+ states, enjoy Vanankam chai wherever you go in India.',
    image: '/images/OIP (2).jpg',
    gradient: 'from-red-500 to-rose-600',
    highlight: '500+ Outlets'
  }
]

export default function FeaturesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section ref={ref} className="py-24 bg-white relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 opacity-5"
        style={{
          backgroundImage: 'url(/images/teaea_counter_bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5 z-1">
        <motion.div
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          className="w-full h-full"
          style={{
            backgroundImage: 'radial-gradient(circle, #6B4423 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, type: "spring" }}
            className="inline-block px-6 py-2 bg-accent/20 text-primary-dark rounded-full text-sm font-bold mb-4"
          >
            🌟 OUR EXCELLENCE
          </motion.span>

          <h2 className="text-4xl md:text-6xl font-heading font-bold text-primary-dark mb-6">
            Why Choose <span className="text-accent relative">
              Vanankam
              <motion.span
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute bottom-0 left-0 right-0 h-3 bg-accent/30 -z-10"
              />
            </span>?
          </h2>
          <p className="text-primary text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            We're not just serving chai; we're creating experiences. Here's what makes us 
            India's most loved kulhad chai franchise.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ 
                delay: index * 0.12, 
                duration: 0.7,
                type: "spring",
                stiffness: 100
              }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="group relative"
              style={{ perspective: '1000px' }}
            >
              <motion.div
                whileHover={{ 
                  y: -12,
                  rotateY: 2,
                  rotateX: 2,
                }}
                transition={{ duration: 0.4 }}
                className="relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 border-gray-100 hover:border-accent/30"
              >
                {/* Gradient Glow Effect */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl"
                  style={{
                    background: `linear-gradient(135deg, var(--tw-gradient-stops))`,
                  }}
                />

                {/* Image Section with Parallax Effect */}
                <div className="relative w-full h-56 overflow-hidden rounded-t-3xl">
                  <motion.div
                    animate={hoveredIndex === index ? { 
                      scale: 1.2,
                      rotate: 2 
                    } : { 
                      scale: 1,
                      rotate: 0 
                    }}
                    transition={{ duration: 0.6 }}
                    className="w-full h-full"
                  >
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="object-cover"
                    />
                  </motion.div>

                  {/* Dynamic Gradient Overlay */}
                  <motion.div
                    animate={hoveredIndex === index ? { 
                      opacity: 0.9 
                    } : { 
                      opacity: 0.7 
                    }}
                    className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} mix-blend-multiply`}
                  />

                  {/* Animated Icon */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={inView ? { scale: 1, rotate: 0 } : {}}
                    transition={{ delay: index * 0.12 + 0.3, type: "spring", stiffness: 200 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <motion.div
                      animate={hoveredIndex === index ? {
                        scale: [1, 1.2, 1],
                        rotate: [0, 10, -10, 0],
                      } : {}}
                      transition={{ duration: 0.6 }}
                      className="text-7xl drop-shadow-2xl"
                    >
                      {feature.icon}
                    </motion.div>
                  </motion.div>

                  {/* Floating Badge */}
                  <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    animate={inView ? { x: 0, opacity: 1 } : {}}
                    transition={{ delay: index * 0.12 + 0.4 }}
                    className="absolute top-4 left-4"
                  >
                    <motion.span
                      whileHover={{ scale: 1.1 }}
                      className="bg-white/95 backdrop-blur-sm text-primary-dark text-xs font-bold px-4 py-2 rounded-full shadow-lg flex items-center gap-2"
                    >
                      <motion.span
                        animate={{ 
                          scale: [1, 1.3, 1],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-2 h-2 bg-green-500 rounded-full"
                      />
                      {feature.highlight}
                    </motion.span>
                  </motion.div>

                  {/* Number Badge */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : {}}
                    transition={{ delay: index * 0.12 + 0.5, type: "spring" }}
                    className="absolute top-4 right-4"
                  >
                    <div className="w-12 h-12 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-primary-dark font-bold text-xl">
                        {index + 1}
                      </span>
                    </div>
                  </motion.div>

                  {/* Bottom Wave Effect */}
                  <div className="absolute bottom-0 left-0 right-0">
                    <svg viewBox="0 0 1200 120" className="w-full h-8">
                      <motion.path
                        d="M0,0 C300,80 900,80 1200,0 L1200,120 L0,120 Z"
                        fill="white"
                        initial={{ y: 20 }}
                        animate={hoveredIndex === index ? { y: 0 } : { y: 20 }}
                        transition={{ duration: 0.4 }}
                      />
                    </svg>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 relative">
                  {/* Title */}
                  <motion.h3
                    animate={hoveredIndex === index ? { x: 5 } : { x: 0 }}
                    className="text-2xl font-heading font-bold text-primary-dark mb-4 group-hover:text-accent transition-colors duration-300"
                  >
                    {feature.title}
                  </motion.h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {feature.description}
                  </p>

                  {/* Learn More Link */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={hoveredIndex === index ? { 
                      opacity: 1, 
                      x: 0 
                    } : { 
                      opacity: 0, 
                      x: -20 
                    }}
                    className="flex items-center gap-2 text-accent font-medium"
                  >
                    <span>Learn More</span>
                    <motion.span
                      animate={hoveredIndex === index ? { 
                        x: [0, 5, 0] 
                      } : {}}
                      transition={{ 
                        duration: 1, 
                        repeat: hoveredIndex === index ? Infinity : 0 
                      }}
                    >
                      →
                    </motion.span>
                  </motion.div>

                  {/* Decorative Corner Element */}
                  <motion.div
                    animate={hoveredIndex === index ? { 
                      scale: 1, 
                      opacity: 1 
                    } : { 
                      scale: 0, 
                      opacity: 0 
                    }}
                    className="absolute bottom-4 right-4 w-16 h-16 border-4 border-accent/20 rounded-full"
                  />
                </div>

                {/* Shine Effect on Hover */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  animate={hoveredIndex === index ? {
                    background: [
                      'linear-gradient(90deg, transparent 0%, transparent 40%, rgba(255,255,255,0.3) 50%, transparent 60%, transparent 100%)',
                      'linear-gradient(90deg, transparent 0%, transparent 40%, rgba(255,255,255,0.3) 50%, transparent 60%, transparent 100%)',
                    ],
                    backgroundPosition: ['-200%', '200%'],
                  } : {}}
                  transition={{ duration: 1.5 }}
                  style={{ backgroundSize: '200% 100%' }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="text-center"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="inline-block bg-gradient-to-br from-accent via-yellow-400 to-accent rounded-3xl p-1 shadow-2xl"
          >
            <div className="bg-white rounded-3xl p-10">
              <motion.div
                animate={{ 
                  rotate: [0, 10, -10, 0],
                  y: [0, -5, 0]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="text-6xl mb-4"
              >
                📍
              </motion.div>
              <h3 className="text-3xl font-heading font-bold text-primary-dark mb-4">
                Experience the Difference Today!
              </h3>
              <p className="text-gray-600 text-lg mb-6 max-w-xl mx-auto">
                Visit your nearest Vanankam outlet and taste the authentic kulhad chai experience
              </p>
              <motion.a
                href="/store-locator"
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 bg-gradient-to-r from-primary-dark to-primary text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg"
              >
                Find Nearest Outlet
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
