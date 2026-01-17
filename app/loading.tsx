'use client'

import { motion } from 'framer-motion'

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-dark via-primary to-accent overflow-hidden relative">
      {/* Animated Background Circles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white/10"
          style={{
            width: `${(i + 1) * 100}px`,
            height: `${(i + 1) * 100}px`,
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.2,
          }}
        />
      ))}

      <div className="text-center relative z-10">
        {/* Animated Kulhad/Cup */}
        <div className="relative w-32 h-36 mx-auto mb-8">
          {/* Steam Animation */}
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 flex gap-2">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-2 h-8 bg-white/60 rounded-full blur-sm"
                animate={{
                  y: [-10, -40],
                  opacity: [0.6, 0],
                  scale: [1, 1.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: 'easeOut',
                }}
              />
            ))}
          </div>

          {/* Kulhad Cup */}
          <motion.div
            className="w-full h-full bg-gradient-to-b from-amber-600 via-amber-700 to-amber-900 rounded-b-3xl rounded-t-2xl relative shadow-2xl"
            animate={{
              scale: [1, 1.05, 1],
              rotateY: [0, 10, 0, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Chai Liquid */}
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-3/4 bg-gradient-to-b from-amber-800 to-amber-950 rounded-b-3xl"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: [0, 1, 1, 0.9, 1] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              style={{ originY: 1 }}
            />

            {/* Shine Effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-b-3xl rounded-t-2xl"
              animate={{
                x: ['-100%', '200%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />

            {/* Texture Lines */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute left-0 right-0 h-0.5 bg-amber-950/30"
                style={{ top: `${(i + 2) * 10}%` }}
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.1,
                }}
              />
            ))}
          </motion.div>

          {/* Drip Animation */}
          <motion.div
            className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2 h-2 bg-amber-900 rounded-full"
            animate={{
              y: [0, 20],
              opacity: [1, 0],
              scale: [1, 0.5],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeIn',
            }}
          />
        </div>

        {/* Brand Name with Animation */}
        <motion.h2
          className="text-4xl font-heading font-bold text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <motion.span
            className="text-accent"
            animate={{
              textShadow: [
                '0 0 20px rgba(255,193,7,0.5)',
                '0 0 40px rgba(255,193,7,0.8)',
                '0 0 20px rgba(255,193,7,0.5)',
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            V
          </motion.span>
          ANANKAM
        </motion.h2>

        {/* Loading Text with Dots */}
        <motion.div
          className="flex items-center justify-center gap-2 text-white text-lg font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <span>Brewing your experience</span>
          <div className="flex gap-1">
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                animate={{
                  opacity: [0, 1, 0],
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              >
                .
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Spinner */}
        <motion.div
          className="mt-8 mx-auto w-16 h-16 border-4 border-white/20 border-t-accent rounded-full"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        {/* Floating Tea Leaves */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-3 bg-green-600/40 rounded-full blur-sm"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 2) * 20}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, (i % 2 === 0 ? 10 : -10), 0],
              rotate: [0, 360],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.3,
            }}
          />
        ))}
      </div>
    </div>
  )
}
