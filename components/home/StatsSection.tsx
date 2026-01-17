'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { STATS } from '@/lib/constants'
import { useAnimatedCounter, useSmoothParallax } from '@/hooks/useAdvancedAnimations'
import { scaleVariants, fadeUpVariants, pulseVariants } from '@/lib/animations'

function AnimatedCounter({ end, suffix, duration = 2000 }: { end: number; suffix: string; duration?: number }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })
  const count = useAnimatedCounter(end, duration, 0, inView)

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  )
}

export default function StatsSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const sectionRef = useRef<HTMLElement>(null)

  return (
    <section ref={sectionRef} className="py-20 bg-primary-dark relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-accent rounded-full"
            animate={{
              y: [0, -100, 0],
              x: [0, 50, 0],
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: '100%',
            }}
          />
        ))}
      </div>

      {/* Gradient Orbs */}
      <motion.div
        className="absolute top-20 left-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-primary/30 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.2, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          delay: 2,
        }}
      />

      <div ref={ref} className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={inView ? { scale: 1, rotate: 0 } : {}}
            transition={{ duration: 0.8, type: 'spring', stiffness: 150 }}
            className="inline-block mb-6"
          >
            <span className="text-6xl">📊</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
            Our <motion.span 
              className="text-accent"
              animate={inView ? { 
                textShadow: [
                  '0 0 20px rgba(255, 193, 7, 0.5)',
                  '0 0 40px rgba(255, 193, 7, 0.8)',
                  '0 0 20px rgba(255, 193, 7, 0.5)',
                ]
              } : {}}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Journey
            </motion.span> So Far
          </h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="text-gray-300 text-lg max-w-2xl mx-auto"
          >
            From a single outlet to a nationwide phenomenon, here's our story in numbers
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 60, rotateX: -30 }}
              animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.15,
                type: 'spring',
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.1, 
                rotateY: 5,
                zIndex: 10,
                transition: { duration: 0.3 }
              }}
              className="text-center relative group"
              style={{ perspective: '1000px' }}
            >
              {/* Card Background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary to-primary-dark rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.3,
                }}
              />

              <div className="relative bg-gradient-to-br from-primary/50 to-primary-dark/50 backdrop-blur-sm p-6 rounded-2xl border-2 border-accent/20 group-hover:border-accent/60 transition-all duration-300">
                {/* Animated Icon */}
                <motion.div 
                  className="text-5xl mb-4"
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.2,
                  }}
                >
                  {stat.icon}
                </motion.div>

                {/* Animated Number */}
                <motion.div 
                  className="text-4xl md:text-5xl font-heading font-bold text-accent mb-2 relative"
                  whileHover={{
                    scale: 1.1,
                    textShadow: '0 0 30px rgba(255, 193, 7, 0.8)',
                  }}
                >
                  <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                  
                  {/* Glow Effect */}
                  <motion.span
                    className="absolute inset-0 bg-accent/20 blur-2xl"
                    animate={{
                      opacity: [0, 0.5, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.3,
                    }}
                  />
                </motion.div>

                {/* Label */}
                <motion.p 
                  className="text-gray-300 font-medium text-sm"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ delay: index * 0.15 + 0.5 }}
                >
                  {stat.label}
                </motion.p>

                {/* Decorative Corner */}
                <motion.div
                  className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-accent/40 rounded-tr-lg"
                  animate={{
                    opacity: [0.4, 1, 0.4],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.2,
                  }}
                />
                <motion.div
                  className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-accent/40 rounded-bl-lg"
                  animate={{
                    opacity: [1, 0.4, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.2,
                  }}
                />

                {/* Particle Effects */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-accent rounded-full"
                    animate={{
                      y: [0, -40],
                      x: [0, (i - 1) * 20],
                      opacity: [1, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.3 + i * 0.3,
                    }}
                    style={{
                      bottom: '10%',
                      left: '50%',
                    }}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2 }}
          className="text-center mt-16"
        >
          <motion.p
            className="text-gray-300 text-lg mb-6"
            animate={{
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          >
            Want to be part of this success story?
          </motion.p>
          <motion.a
            href="/franchise"
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 20px 60px rgba(255, 193, 7, 0.4)',
            }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-accent text-primary-dark px-8 py-4 rounded-full font-bold text-lg shadow-2xl"
          >
            Join Vanankam Family
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
