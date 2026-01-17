'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const timeline = [
  {
    year: '2018',
    title: 'The Beginning',
    description: 'Started with a vision to revolutionize chai culture in India with our first outlet in Indore',
    icon: '🌱'
  },
  {
    year: '2019',
    title: 'Rapid Expansion',
    description: 'Opened 50+ outlets across Madhya Pradesh and Maharashtra, establishing our signature kulhad chai experience',
    icon: '🚀'
  },
  {
    year: '2020',
    title: 'National Recognition',
    description: 'Despite challenges, expanded to 100+ outlets across 10 states. Received "Best Emerging Franchise" award',
    icon: '🏆'
  },
  {
    year: '2021',
    title: 'Tech Integration',
    description: 'Launched mobile app for online ordering. Integrated with major food delivery platforms. 200+ outlets milestone',
    icon: '📱'
  },
  {
    year: '2022',
    title: 'Pan-India Presence',
    description: 'Expanded to 300+ outlets across 20+ states. Served 100 million kulhads. Featured in national media',
    icon: '🇮🇳'
  },
  {
    year: '2023',
    title: 'Innovation & Growth',
    description: 'Introduced new menu items and premium outlet formats. Crossed 400+ outlets. Won "Best Tea Franchise" award',
    icon: '💡'
  },
  {
    year: '2024',
    title: 'Market Leader',
    description: 'Achieved 500+ outlets across 26+ states in 200+ cities. Over 200 million kulhads served',
    icon: '👑'
  },
  {
    year: '2025',
    title: 'Global Vision',
    description: 'Planning international expansion. Introducing eco-friendly initiatives. Target: 1000+ outlets by year-end',
    icon: '🌍'
  }
]

export default function OurStory() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section ref={ref} className="py-20 bg-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-primary-dark rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-dark mb-4">
            Our <span className="text-accent">Journey</span> of Excellence
          </h2>
          <p className="text-primary text-lg max-w-3xl mx-auto">
            From a single outlet to India's fastest-growing kulhad chai franchise - 
            here's how we wrote our success story, one cup at a time.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto">
          {timeline.map((milestone, index) => (
            <motion.div
              key={milestone.year}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className={`relative flex items-center gap-8 mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Content */}
              <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                  <div className="text-3xl font-heading font-bold text-accent mb-2">
                    {milestone.year}
                  </div>
                  <h3 className="text-xl font-heading font-bold text-primary-dark mb-3">
                    {milestone.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </div>

              {/* Icon Circle */}
              <div className="relative flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center text-3xl shadow-lg z-10 relative">
                  {milestone.icon}
                </div>
                {/* Connecting Line */}
                {index < timeline.length - 1 && (
                  <div className="absolute top-16 left-1/2 -translate-x-1/2 w-1 h-12 bg-gradient-to-b from-accent to-accent/20" />
                )}
              </div>

              {/* Spacer for alignment */}
              <div className="flex-1 hidden md:block" />
            </motion.div>
          ))}
        </div>

        {/* Future Vision */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-primary-dark to-primary rounded-2xl p-8 text-white max-w-3xl">
            <h3 className="text-2xl font-heading font-bold mb-4">
              The Journey Continues...
            </h3>
            <p className="text-lg leading-relaxed mb-6">
              Every cup of chai we serve is a step towards our vision of taking authentic 
              Indian chai culture to every corner of the world. Join us in this exciting journey!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/about" className="btn-primary bg-accent hover:bg-accent/90 text-primary-dark">
                Read Full Story
              </a>
              <a href="/franchise" className="btn-secondary border-white text-white hover:bg-white hover:text-primary-dark">
                Become a Partner
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
