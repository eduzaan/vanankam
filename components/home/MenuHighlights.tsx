'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import Link from 'next/link'
import { 
  card3DVariants, 
  staggerContainerVariants, 
  fadeUpVariants,
  scaleVariants,
  flip3DVariants
} from '@/lib/animations'
import { useTilt3D, useMagneticHover } from '@/hooks/useAdvancedAnimations'

const menuHighlights = [
  {
    name: 'Kulhad Masala Chai',
    price: '₹30',
    description: 'Our signature blend of aromatic spices and premium tea leaves, served in authentic kulhad',
    image: '/images/pouring-tea-into-clay-cups.jpg',
    badge: 'Bestseller',
    category: 'Hot Beverages',
    ingredients: ['Premium Tea', 'Cardamom', 'Ginger', 'Cloves'],
    rating: 4.9
  },
  {
    name: 'Kulhad Elaichi Chai',
    price: '₹40',
    description: 'Cardamom-infused premium chai with a rich, royal flavor that soothes your soul',
    image: '/images/bff4bd6e-ee5a-422a-adbf-67a70f3637a0.jpg',
    badge: 'Premium',
    category: 'Hot Beverages',
    ingredients: ['Premium Tea', 'Green Cardamom', 'Milk', 'Sugar'],
    rating: 4.8
  },
  {
    name: 'Cold Coffee',
    price: '₹60',
    description: 'Creamy cold coffee topped with ice cream and chocolate sauce - a perfect treat',
    image: '/images/pexels-pitamaas-575428118-16942970.jpg',
    badge: 'Trending',
    category: 'Cold Beverages',
    ingredients: ['Coffee', 'Ice Cream', 'Chocolate', 'Milk'],
    rating: 4.7
  },
  {
    name: 'Vada Pav',
    price: '₹25',
    description: 'Mumbai\'s iconic street food - crispy potato vada in soft bun with tangy chutneys',
    image: '/images/60bb3389-89d4-4b60-9fbc-0ee20fedf4fb.jpg',
    badge: 'Popular',
    category: 'Snacks',
    ingredients: ['Potato', 'Spices', 'Pav Bread', 'Chutney'],
    rating: 4.6
  }
]

export default function MenuHighlights() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section ref={ref} className="py-24 gradient-bg relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 left-10 w-64 h-64 bg-accent rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-primary-dark rounded-full blur-3xl"
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
            ⭐ CHEF'S SPECIAL
          </motion.span>
          
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-primary-dark mb-6">
            Our <span className="text-accent relative">
              Signature
              <motion.span
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute bottom-0 left-0 right-0 h-3 bg-accent/30 -z-10"
              />
            </span> Items
          </h2>
          <p className="text-primary text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Discover our most loved items that keep customers coming back for more. 
            Each item is crafted with love and premium ingredients.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {menuHighlights.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                delay: index * 0.15, 
                duration: 0.6,
                type: "spring",
                stiffness: 100
              }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="group relative"
            >
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden relative"
              >
                {/* Gradient Border Effect */}
                <motion.div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: 'linear-gradient(45deg, #F6C000, #6B4423)',
                    padding: '3px',
                    zIndex: -1
                  }}
                />

                {/* Image Section with Overlay */}
                <div className="relative w-full h-64 overflow-hidden rounded-t-3xl">
                  <motion.div
                    animate={hoveredIndex === index ? { scale: 1.15 } : { scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="w-full h-full"
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </motion.div>

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  {/* Floating Badge */}
                  <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    animate={inView ? { x: 0, opacity: 1 } : {}}
                    transition={{ delay: index * 0.15 + 0.3 }}
                    className="absolute top-4 left-4 z-10"
                  >
                    <span className="bg-accent text-primary-dark text-xs font-bold px-4 py-2 rounded-full shadow-lg backdrop-blur-sm flex items-center gap-1">
                      <span className="animate-pulse">✨</span>
                      {item.badge}
                    </span>
                  </motion.div>

                  {/* Category Tag */}
                  <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    animate={inView ? { x: 0, opacity: 1 } : {}}
                    transition={{ delay: index * 0.15 + 0.4 }}
                    className="absolute top-4 right-4"
                  >
                    <span className="bg-white/20 backdrop-blur-md text-white text-xs px-3 py-1 rounded-full">
                      {item.category}
                    </span>
                  </motion.div>

                  {/* Rating Stars - Bottom of Image */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-2">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={inView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ delay: index * 0.15 + 0.5 + i * 0.05 }}
                          className="text-accent text-sm"
                        >
                          ⭐
                        </motion.span>
                      ))}
                    </div>
                    <span className="text-white text-sm font-bold bg-black/50 backdrop-blur-sm px-2 py-1 rounded">
                      {item.rating}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  {/* Name and Price */}
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-heading font-bold text-primary-dark flex-1 group-hover:text-accent transition-colors duration-300">
                      {item.name}
                    </h3>
                    <motion.span
                      whileHover={{ scale: 1.1 }}
                      className="text-2xl font-bold text-accent ml-2"
                    >
                      {item.price}
                    </motion.span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
                    {item.description}
                  </p>

                  {/* Ingredients Pills */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.ingredients.map((ingredient, i) => (
                      <motion.span
                        key={ingredient}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: index * 0.15 + 0.6 + i * 0.05 }}
                        className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full"
                      >
                        {ingredient}
                      </motion.span>
                    ))}
                  </div>

                  {/* Order Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-primary-dark to-primary text-white py-3 rounded-xl font-medium hover:from-primary hover:to-primary-dark transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                  >
                    <span>View Details</span>
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </motion.button>
                </div>

                {/* Hover Glow Effect */}
                <motion.div
                  className="absolute inset-0 pointer-events-none rounded-3xl"
                  animate={{
                    boxShadow: hoveredIndex === index
                      ? '0 0 30px rgba(246, 192, 0, 0.3)'
                      : '0 0 0px rgba(246, 192, 0, 0)'
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Full Menu CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-r from-primary-dark to-primary rounded-3xl p-10 inline-block shadow-2xl max-w-2xl mx-auto border-4 border-accent/20"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              className="text-6xl mb-4"
            >
              📖
            </motion.div>
            <h3 className="text-3xl font-heading font-bold text-white mb-4">
              Explore Our Complete Menu
            </h3>
            <p className="text-gray-200 text-lg mb-6">
              Discover 30+ varieties of beverages and snacks crafted to perfection
            </p>
            <Link href="/menu">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary bg-accent hover:bg-accent/90 text-primary-dark px-8 py-4 text-lg font-bold rounded-full shadow-lg inline-flex items-center gap-3"
              >
                View Full Menu
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  →
                </motion.span>
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
