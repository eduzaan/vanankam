'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

export default function MissionVision() {
  const [hoveredSection, setHoveredSection] = useState<'mission' | 'vision' | null>(null)
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section ref={ref} className="py-24 gradient-bg relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 opacity-5"
        style={{
          backgroundImage: 'url(/images/our_cafe_bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10 z-1">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 right-20 w-96 h-96 bg-accent rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 left-20 w-80 h-80 bg-primary-dark rounded-full blur-3xl"
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
            🎯 OUR PURPOSE
          </motion.span>

          <h2 className="text-4xl md:text-6xl font-heading font-bold text-primary-dark mb-6">
            Our <span className="text-accent relative">
              Mission
              <motion.span
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute bottom-0 left-0 right-0 h-3 bg-accent/30 -z-10"
              />
            </span> & Our{' '}
            <span className="text-accent relative">
              Vision
              <motion.span
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute bottom-0 left-0 right-0 h-3 bg-accent/30 -z-10"
              />
            </span>
          </h2>
        </motion.div>

        <div className="space-y-20">
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            onHoverStart={() => setHoveredSection('mission')}
            onHoverEnd={() => setHoveredSection(null)}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* Image Section */}
            <motion.div
              whileHover={{ scale: 1.02, rotateY: 5 }}
              transition={{ duration: 0.4 }}
              className="relative group"
              style={{ perspective: '1000px' }}
            >
              <div className="relative w-full aspect-square max-w-md mx-auto">
                {/* Gradient Border */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500 via-orange-500 to-red-500 rounded-[3rem] blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
                
                <div className="relative w-full h-full rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white">
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <Image
                      src="/images/pouring-tea-into-clay-cups.jpg"
                      alt="Mission"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/80 to-primary/60" />
                  </div>

                  {/* Content Overlay */}
                  <div className="relative w-full h-full flex flex-col items-center justify-center p-8 text-center">
                    <motion.div
                      animate={hoveredSection === 'mission' ? {
                        scale: [1, 1.2, 1],
                        rotate: [0, 10, -10, 0]
                      } : {}}
                      transition={{ duration: 0.6 }}
                      className="text-8xl mb-6"
                    >
                      🏆
                    </motion.div>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-2xl md:text-3xl font-accent italic text-white leading-relaxed"
                    >
                      Who needs a <span className="text-accent font-bold">राज</span>
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="text-2xl md:text-3xl font-accent italic text-white leading-relaxed"
                    >
                      When there is a <span className="text-accent font-bold">चाय</span>
                    </motion.p>
                  </div>

                  {/* Animated Corner Accents */}
                  <motion.div
                    animate={hoveredSection === 'mission' ? { scale: 1.2, opacity: 1 } : { scale: 1, opacity: 0.6 }}
                    className="absolute top-4 right-4 w-16 h-16 border-t-4 border-r-4 border-accent rounded-tr-3xl"
                  />
                  <motion.div
                    animate={hoveredSection === 'mission' ? { scale: 1.2, opacity: 1 } : { scale: 1, opacity: 0.6 }}
                    className="absolute bottom-4 left-4 w-16 h-16 border-b-4 border-l-4 border-accent rounded-bl-3xl"
                  />
                </div>

                {/* Floating Decorative Elements */}
                <motion.div
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-8 -right-8 w-24 h-24 bg-accent/30 rounded-full blur-2xl"
                />
                <motion.div
                  animate={{
                    y: [0, 20, 0],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -bottom-8 -left-8 w-32 h-32 bg-primary/20 rounded-full blur-2xl"
                />
              </div>
            </motion.div>

            {/* Content Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative"
            >
              <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border-2 border-gray-100 group-hover:border-accent/30 transition-all">
                <motion.div
                  animate={hoveredSection === 'mission' ? { x: 5 } : { x: 0 }}
                  className="flex items-center gap-4 mb-6"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center text-3xl shadow-lg">
                    🎯
                  </div>
                  <h3 className="text-3xl md:text-4xl font-heading font-bold text-primary-dark">
                    Our Mission
                  </h3>
                </motion.div>

                <p className="text-lg text-primary leading-relaxed mb-6">
                  Our mission is to create an exceptionally crafted, <span className="font-bold text-accent">BEST-IN-CLASS</span> ambience 
                  for our <span className="font-bold text-accent">KULHAD CHAI</span> and take it across the globe.
                </p>

                <p className="text-lg text-primary leading-relaxed mb-8">
                  We strive to serve a variety of delightful appetizers and beverages featuring{' '}
                  <span className="font-bold text-accent">INDO-WESTERN</span> cuisine with aromatic experiences 
                  that create cheerful memories to cherish.
                </p>

                {/* Key Points */}
                <div className="space-y-4">
                  {[
                    { icon: '🌏', text: 'Global Expansion of Kulhad Chai Culture' },
                    { icon: '🍽️', text: 'Delightful Indo-Western Cuisine' },
                    { icon: '✨', text: 'Creating Memorable Experiences' }
                  ].map((point, index) => (
                    <motion.div
                      key={point.text}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      whileHover={{ x: 10 }}
                      className="flex items-center gap-4 bg-accent/10 rounded-xl p-4 border border-accent/20"
                    >
                      <span className="text-3xl">{point.icon}</span>
                      <span className="text-primary-dark font-medium">{point.text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            onHoverStart={() => setHoveredSection('vision')}
            onHoverEnd={() => setHoveredSection(null)}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* Content Section - Left on desktop */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="order-2 lg:order-1 relative"
            >
              <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border-2 border-gray-100 group-hover:border-accent/30 transition-all">
                <motion.div
                  animate={hoveredSection === 'vision' ? { x: 5 } : { x: 0 }}
                  className="flex items-center gap-4 mb-6"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-2xl flex items-center justify-center text-3xl shadow-lg">
                    🌿
                  </div>
                  <h3 className="text-3xl md:text-4xl font-heading font-bold text-primary-dark">
                    Our Vision
                  </h3>
                </motion.div>

                <p className="text-lg text-primary leading-relaxed mb-6">
                  Our vision is to facilitate delicious <span className="font-bold text-accent">TEA</span> and 
                  appetizing snacks while giving back to the community and providing employment to the needy.
                </p>

                <p className="text-lg text-primary leading-relaxed mb-8">
                  We're building a path to benefit people. We're aware of being in harmony with nature. 
                  Our use of <span className="font-bold text-accent">ZERO plastic</span> and biodegradable{' '}
                  <span className="font-bold text-accent">KULHAD</span> makes Vanankam completely eco-friendly.
                </p>

                {/* Key Points */}
                <div className="space-y-4">
                  {[
                    { icon: '🤝', text: 'Community Development & Employment' },
                    { icon: '♻️', text: '100% Zero Plastic Initiative' },
                    { icon: '🌱', text: 'Biodegradable Kulhad - Eco-Friendly' }
                  ].map((point, index) => (
                    <motion.div
                      key={point.text}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.8 + index * 0.1 }}
                      whileHover={{ x: 10 }}
                      className="flex items-center gap-4 bg-emerald-50 rounded-xl p-4 border border-emerald-200"
                    >
                      <span className="text-3xl">{point.icon}</span>
                      <span className="text-primary-dark font-medium">{point.text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Image Section - Right on desktop */}
            <motion.div
              whileHover={{ scale: 1.02, rotateY: -5 }}
              transition={{ duration: 0.4 }}
              className="order-1 lg:order-2 relative group"
              style={{ perspective: '1000px' }}
            >
              <div className="relative w-full aspect-square max-w-md mx-auto">
                {/* Gradient Border */}
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500 via-emerald-500 to-green-500 rounded-[3rem] blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
                
                <div className="relative w-full h-full rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white">
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <Image
                      src="/images/bff4bd6e-ee5a-422a-adbf-67a70f3637a0.jpg"
                      alt="Vision"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-600/80 to-emerald-600/60" />
                  </div>

                  {/* Content Overlay */}
                  <div className="relative w-full h-full flex flex-col items-center justify-center p-8 text-center">
                    <motion.div
                      animate={hoveredSection === 'vision' ? {
                        scale: [1, 1.2, 1],
                        rotate: [0, 360]
                      } : {}}
                      transition={{ duration: 0.8 }}
                      className="text-8xl mb-6"
                    >
                      🌍
                    </motion.div>
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.3, type: "spring" }}
                      className="bg-white/95 backdrop-blur-sm rounded-2xl px-8 py-4 shadow-xl"
                    >
                      <p className="text-2xl md:text-3xl font-heading font-bold text-emerald-600">
                        100% Eco-Friendly
                      </p>
                      <p className="text-lg text-primary-dark mt-2">
                        Zero Plastic • Green Future
                      </p>
                    </motion.div>
                  </div>

                  {/* Animated Corner Accents */}
                  <motion.div
                    animate={hoveredSection === 'vision' ? { scale: 1.2, opacity: 1 } : { scale: 1, opacity: 0.6 }}
                    className="absolute top-4 left-4 w-16 h-16 border-t-4 border-l-4 border-emerald-400 rounded-tl-3xl"
                  />
                  <motion.div
                    animate={hoveredSection === 'vision' ? { scale: 1.2, opacity: 1 } : { scale: 1, opacity: 0.6 }}
                    className="absolute bottom-4 right-4 w-16 h-16 border-b-4 border-r-4 border-emerald-400 rounded-br-3xl"
                  />
                </div>

                {/* Floating Decorative Elements */}
                <motion.div
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                  className="absolute -top-8 -left-8 w-24 h-24 bg-emerald-400/30 rounded-full blur-2xl"
                />
                <motion.div
                  animate={{
                    y: [0, 20, 0],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                  className="absolute -bottom-8 -right-8 w-32 h-32 bg-teal-400/20 rounded-full blur-2xl"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
