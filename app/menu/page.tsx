'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import HeroBanner from '@/components/ui/HeroBanner'

const categories = [
  { id: 'hot', name: 'Hot Beverages', icon: '☕' },
  { id: 'cold', name: 'Cold Beverages', icon: '🧊' },
  { id: 'snacks', name: 'Snacks', icon: '🍿' },
  { id: 'special', name: 'Specials', icon: '⭐' },
]

const menuItems = {
  hot: [
    { name: 'Kulhad Masala Chai', price: '₹30', description: 'Traditional masala chai served in authentic kulhad with perfect spice blend', bestseller: true, image: '/images/pouring-tea-into-clay-cups.jpg' },
    { name: 'Kulhad Adrak Chai', price: '₹35', description: 'Ginger-infused aromatic chai that warms your soul', bestseller: false, image: '/images/pexels-pitamaas-575428118-16942970.jpg' },
    { name: 'Kulhad Elaichi Chai', price: '₹40', description: 'Cardamom flavored premium chai with rich aroma', bestseller: true, image: '/images/bff4bd6e-ee5a-422a-adbf-67a70f3637a0.jpg' },
    { name: 'Kulhad Cutting Chai', price: '₹20', description: 'Classic Mumbai-style half cup cutting chai', bestseller: false, image: '/images/pouring-tea-into-clay-cups.jpg' },
    { name: 'Kulhad Kadak Chai', price: '₹35', description: 'Strong and bold chai for true chai lovers', bestseller: true, image: '/images/pexels-pitamaas-575428118-16942970.jpg' },
    { name: 'Kulhad Tulsi Chai', price: '₹40', description: 'Holy basil infused healthy immunity-boosting chai', bestseller: false, image: '/images/bff4bd6e-ee5a-422a-adbf-67a70f3637a0.jpg' },
    { name: 'Hot Filter Coffee', price: '₹50', description: 'Rich and aromatic South Indian filter coffee', bestseller: false, image: '/images/pexels-pitamaas-575428118-16942970.jpg' },
    { name: 'Hot Chocolate', price: '₹60', description: 'Creamy Belgian hot chocolate with marshmallows', bestseller: false, image: '/images/bff4bd6e-ee5a-422a-adbf-67a70f3637a0.jpg' },
  ],
  cold: [
    { name: 'Iced Lemon Tea', price: '₹50', description: 'Refreshing lemon iced tea perfect for hot days', bestseller: true, image: '/images/bff4bd6e-ee5a-422a-adbf-67a70f3637a0.jpg' },
    { name: 'Cold Coffee', price: '₹60', description: 'Creamy cold coffee with ice cream and chocolate sauce', bestseller: true, image: '/images/pexels-pitamaas-575428118-16942970.jpg' },
    { name: 'Mango Shake', price: '₹70', description: 'Fresh Alphonso mango milkshake - seasonal special', bestseller: false, image: '/images/bff4bd6e-ee5a-422a-adbf-67a70f3637a0.jpg' },
    { name: 'Sweet Lassi', price: '₹50', description: 'Traditional sweet yogurt drink with cardamom', bestseller: true, image: '/images/pexels-pitamaas-575428118-16942970.jpg' },
    { name: 'Masala Chaas', price: '₹40', description: 'Spiced buttermilk with roasted cumin and mint', bestseller: false, image: '/images/bff4bd6e-ee5a-422a-adbf-67a70f3637a0.jpg' },
    { name: 'Fresh Lime Soda', price: '₹40', description: 'Tangy and refreshing lime soda - sweet or salty', bestseller: false, image: '/images/pexels-pitamaas-575428118-16942970.jpg' },
  ],
  snacks: [
    { name: 'Aloo Tikki Burger', price: '₹35', description: 'Crispy potato tikki in burger bun with special sauce', bestseller: true, image: '/images/aloo-tikki-burger-0.1-09102505501667.png' },
    { name: 'Vegetable Sub', price: '₹45', description: 'Fresh vegetables in soft sub bread with mayo', bestseller: true, image: '/images/vegetable-sub-0.2--09102505515145.png' },
    { name: 'Vegetable Wrap', price: '₹40', description: 'Grilled vegetables wrapped in soft tortilla', bestseller: false, image: '/images/vegetable-wrap-0.1-09102505562673.png' },
    { name: 'Dal Kachori (2 pcs)', price: '₹25', description: 'Flaky pastry with spiced lentil filling', bestseller: false },
    { name: 'Bun Maska', price: '₹35', description: 'Soft Irani bun with generous butter', bestseller: true },
    { name: 'Samosa (2 pcs)', price: '₹20', description: 'Crispy potato-filled pastry with mint chutney', bestseller: true },
    { name: 'Masala Maggi', price: '₹50', description: 'Classic instant noodles with extra veggies and spices', bestseller: true },
    { name: 'Poha', price: '₹40', description: 'Flattened rice with spices, peanuts and curry leaves', bestseller: false },
  ],
  special: [
    { name: 'Chai & Samosa Combo', price: '₹45', description: 'Perfect evening snack - 1 chai + 2 samosas', bestseller: true },
    { name: 'Royal Chai Platter', price: '₹150', description: '3 chai varieties (Masala, Elaichi, Adrak) + assorted snacks for 2', bestseller: true },
    { name: 'Monsoon Special Combo', price: '₹80', description: 'Pakoras (4 pcs) + hot cutting chai - perfect for rainy days', bestseller: false },
    { name: 'Family Pack', price: '₹250', description: '4 chai + 4 snacks combo - great value for families', bestseller: false },
  ],
}

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState('hot')
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <>
      {/* Hero Section */}
      <HeroBanner
        images={[
          '/images/pouring-tea-into-clay-cups.jpg',
          '/images/bff4bd6e-ee5a-422a-adbf-67a70f3637a0.jpg',
          '/images/pexels-pitamaas-575428118-16942970.jpg',
        ]}
        title={<>Our <span className="text-accent">Menu</span></>}
        description="Explore our delicious range of traditional and innovative chai blends, refreshing beverages, and mouth-watering snacks"
      />

      {/* Menu Section */}
      <section ref={ref} className="py-20 gradient-bg">
        <div className="container mx-auto px-4">
          {/* Category Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all ${
                  activeCategory === category.id
                    ? 'bg-accent text-primary-dark shadow-lg scale-105'
                    : 'bg-white text-primary-dark hover:bg-gray-100'
                }`}
              >
                <span className="text-xl">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </motion.div>

          {/* Menu Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {menuItems[activeCategory as keyof typeof menuItems].map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden"
                >
                  {item.bestseller && (
                    <span className="absolute top-4 right-4 bg-accent text-primary-dark text-xs font-bold px-2 py-1 rounded-full z-10">
                      Bestseller
                    </span>
                  )}

                  <div className="relative w-full h-48 rounded-lg overflow-hidden mb-4">
                    <Image
                      src={('image' in item ? item.image : undefined) || '/images/pouring-tea-into-clay-cups.jpg'}
                      alt={item.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  <h3 className="text-lg font-heading font-bold text-primary-dark mb-2">
                    {item.name}
                  </h3>
                  <p className="text-gray-500 text-sm mb-4">{item.description}</p>
                  <p className="text-2xl font-bold text-accent">{item.price}</p>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Note Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center max-w-3xl mx-auto"
          >
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-heading font-bold text-primary-dark mb-4">
                Quality Guarantee
              </h3>
              <p className="text-primary mb-4">
                All our beverages are made with premium ingredients and served fresh. 
                Our kulhads are 100% eco-friendly and biodegradable.
              </p>
              <p className="text-sm text-gray-500">
                Prices may vary by location. GST applicable as per government regulations. 
                Seasonal items subject to availability.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
