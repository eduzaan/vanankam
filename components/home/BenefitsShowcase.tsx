'use client'

import { ImageWithSkeleton } from '@/components/ui/Skeleton'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const benefits = [
  {
    title: 'Premium Quality',
    description: 'Finest tea leaves and authentic spices for superior taste',
    image: '/images/premium-quality-21072512420290.png',
    badge: '⭐ Quality First'
  },
  {
    title: 'Budget Friendly',
    description: 'Affordable pricing without compromising quality',
    image: '/images/budget-friendly-menu-2107251246098.png',
    badge: '💰 Affordable'
  },
  {
    title: 'High ROI',
    description: 'Low investment with high return potential',
    image: '/images/low-cost-high-return-21072512452952.png',
    badge: '📈 Profitable'
  },
  {
    title: 'Quick Service',
    description: 'Chef-less kitchen model for faster operations',
    image: '/images/chef-less-kitchen-21072512442882.png',
    badge: '⚡ Fast Setup'
  },
  {
    title: 'No Royalty',
    description: 'Keep more profits without recurring royalty fees',
    image: '/images/no-royalty-21072512322920.png',
    badge: '✅ No Royalty'
  },
  {
    title: '24/7 Support',
    description: 'Round-the-clock technical and operational support',
    image: '/images/tech-support-system-21072512464098.png',
    badge: '🛠️ Always Ready'
  }
]

export default function BenefitsShowcase() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-dark mb-4">
            What Makes <span className="text-accent">Vanankam</span> Special?
          </h2>
          <p className="text-primary text-lg max-w-3xl mx-auto">
            Six key advantages that set us apart from other chai franchises
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              {/* Card Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-primary/10 rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
              
              {/* Card Content */}
              <div className="relative p-8 rounded-2xl border border-accent/20 group-hover:border-accent/50 transition-colors duration-300">
                
                {/* Image Section */}
                <motion.div
                  className="relative h-32 mb-6 flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                >
                  <ImageWithSkeleton
                    src={benefit.image}
                    alt={benefit.title}
                    width={120}
                    height={120}
                    className="object-contain drop-shadow-lg"
                  />
                </motion.div>

                {/* Badge */}
                <div className="inline-block mb-3 px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-semibold">
                  {benefit.badge}
                </div>

                {/* Title */}
                <h3 className="text-xl font-heading font-bold text-primary-dark mb-2">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="text-primary text-sm leading-relaxed">
                  {benefit.description}
                </p>

                {/* Hover Effect Line */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent/0 via-accent to-accent/0 rounded-full"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
