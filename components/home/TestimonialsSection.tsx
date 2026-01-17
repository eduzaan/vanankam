'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'Franchise Owner, Mumbai',
    image: '👨‍💼',
    rating: 5,
    text: 'Joining Vanankam was the best business decision I made. The support from the team is exceptional, and the brand recognition makes it easy to attract customers. Within 6 months, I recovered my investment and now planning my second outlet!',
    revenue: 'Monthly Revenue: ₹3.5L+',
    bgClass: 'bg-gradient-to-br from-primary-dark to-primary',
    location: '📍 Mumbai'
  },
  {
    name: 'Priya Sharma',
    role: 'Franchise Owner, Delhi',
    image: '👩‍💼',
    rating: 5,
    text: 'The business model is fantastic! Low investment, high returns, and complete operational support. The training program was thorough, and the marketing support helped me establish quickly in the market. Highly recommended!',
    revenue: 'ROI achieved in 8 months',
    bgClass: 'bg-gradient-to-br from-accent to-primary-dark',
    location: '📍 Delhi'
  },
  {
    name: 'Amit Patel',
    role: 'Regular Customer, Bangalore',
    image: '👨',
    rating: 5,
    text: 'Vanankam chai reminds me of home. The authentic taste, the eco-friendly kulhad, and the warm ambience make it my daily stop. The masala chai is simply unbeatable! Also love their vada pav and samosas.',
    revenue: 'Loyal Customer since 2021',
    bgClass: 'bg-gradient-to-br from-primary via-accent to-primary-dark',
    location: '📍 Bangalore'
  },
  {
    name: 'Sneha Reddy',
    role: 'Franchise Owner, Hyderabad',
    image: '👩',
    rating: 5,
    text: 'As a woman entrepreneur, Vanankam gave me the confidence and support to start my own business. The entire process was smooth, and the ongoing support ensures I never feel alone. My outlet is now the busiest in my area!',
    revenue: 'Monthly Revenue: ₹4L+',
    bgClass: 'bg-gradient-to-br from-primary-dark via-primary to-accent',
    location: '📍 Hyderabad'
  },
  {
    name: 'Vikram Singh',
    role: 'Customer & Food Blogger',
    image: '🎭',
    rating: 5,
    text: 'I\'ve reviewed 100+ chai outlets across India, and Vanankam stands out for its consistency and quality. Whether it\'s Mumbai or a small town, the taste remains authentic. The kadak chai is my absolute favorite!',
    revenue: 'Featured on Food Network',
    bgClass: 'bg-gradient-to-br from-accent via-primary-dark to-primary',
    location: '📍 Pan India'
  },
  {
    name: 'Meena Iyer',
    role: 'Franchise Owner, Chennai',
    image: '👩‍🦰',
    rating: 5,
    text: 'Started with one outlet in 2022, now running three successful outlets! The scalability of this business model is impressive. The brand value, product quality, and support system make it a winning formula.',
    revenue: 'Combined Revenue: ₹10L+/month',
    bgClass: 'bg-gradient-to-br from-primary to-accent',
    location: '📍 Chennai'
  }
]

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  useEffect(() => {
    if (!isAutoPlaying) return
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextTestimonial = () => {
    setIsAutoPlaying(false)
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setIsAutoPlaying(false)
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToTestimonial = (index: number) => {
    setIsAutoPlaying(false)
    setActiveIndex(index)
  }

  return (
    <section ref={ref} className="py-24 bg-primary-dark relative overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent rounded-full blur-3xl"
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
            className="inline-block px-6 py-2 bg-accent/20 text-accent rounded-full text-sm font-bold mb-4 backdrop-blur-sm"
          >
            💬 TESTIMONIALS
          </motion.span>

          <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
            What Our <span className="text-accent relative">
              Community
              <motion.span
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute bottom-0 left-0 right-0 h-3 bg-accent/30 -z-10"
              />
            </span> Says
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Real stories from our franchise partners and customers across India
          </p>
        </motion.div>

        {/* Enhanced Main Testimonial Carousel */}
        <div className="max-w-5xl mx-auto mb-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, rotateY: 90, scale: 0.8 }}
              animate={{ opacity: 1, rotateY: 0, scale: 1 }}
              exit={{ opacity: 0, rotateY: -90, scale: 0.8 }}
              transition={{ duration: 0.6, type: "spring" }}
              className="relative"
              style={{ perspective: '2000px' }}
            >
              {/* Gradient Border Effect */}
              <div className={`absolute inset-0 rounded-3xl ${testimonials[activeIndex].bgClass} p-1 blur-sm opacity-50`} />
              
              <div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden">
                {/* Decorative Quote Mark */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.3, type: "spring" }}
                  className="absolute top-6 right-6 text-accent/10 text-9xl font-serif leading-none"
                >
                  "
                </motion.div>

                <div className="flex flex-col md:flex-row items-start gap-6 mb-8 relative z-10">
                  {/* Avatar with Gradient Background */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    className={`relative flex-shrink-0`}
                  >
                    <div className={`w-24 h-24 rounded-full ${testimonials[activeIndex].bgClass} p-1 shadow-xl`}>
                      <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                        <span className="text-5xl">{testimonials[activeIndex].image}</span>
                      </div>
                    </div>
                    {/* Verified Badge */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.4 }}
                      className="absolute -bottom-1 -right-1 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-lg border-2 border-white"
                    >
                      <span className="text-white text-sm">✓</span>
                    </motion.div>
                  </motion.div>

                  <div className="flex-1">
                    <motion.h4
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-2xl md:text-3xl font-heading font-bold text-primary-dark mb-2"
                    >
                      {testimonials[activeIndex].name}
                    </motion.h4>
                    
                    <motion.p
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.35 }}
                      className="text-gray-600 mb-3 flex items-center gap-2"
                    >
                      {testimonials[activeIndex].role}
                      <span className="text-sm">{testimonials[activeIndex].location}</span>
                    </motion.p>

                    {/* Star Rating with Animation */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className="flex gap-1 mb-3"
                    >
                      {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                        <motion.span
                          key={i}
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ delay: 0.45 + i * 0.05, type: "spring" }}
                          className="text-accent text-2xl"
                        >
                          ★
                        </motion.span>
                      ))}
                    </motion.div>

                    {/* Revenue Badge */}
                    <motion.span
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 }}
                      className={`inline-block ${testimonials[activeIndex].bgClass} text-white text-sm px-4 py-2 rounded-full font-bold shadow-lg`}
                    >
                      {testimonials[activeIndex].revenue}
                    </motion.span>
                  </div>
                </div>

                {/* Testimonial Text */}
                <motion.blockquote
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="text-lg md:text-xl text-primary leading-relaxed italic relative z-10 pl-6 border-l-4 border-accent"
                >
                  "{testimonials[activeIndex].text}"
                </motion.blockquote>

                {/* Decorative Elements */}
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className={`absolute -bottom-10 -right-10 w-40 h-40 ${testimonials[activeIndex].bgClass} rounded-full blur-3xl opacity-20`}
                />
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Enhanced Navigation */}
          <div className="flex justify-center items-center gap-6 mt-10">
            <motion.button
              whileHover={{ scale: 1.1, backgroundColor: '#F6C000' }}
              whileTap={{ scale: 0.9 }}
              onClick={prevTestimonial}
              className="w-14 h-14 rounded-full bg-accent text-primary-dark flex items-center justify-center shadow-xl hover:shadow-2xl transition-all font-bold text-xl"
              aria-label="Previous testimonial"
            >
              ←
            </motion.button>

            <div className="flex gap-3">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  onClick={() => goToTestimonial(index)}
                  className={`h-3 rounded-full transition-all ${
                    index === activeIndex 
                      ? 'bg-accent w-12 shadow-lg' 
                      : 'bg-white/30 w-3 hover:bg-white/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1, backgroundColor: '#F6C000' }}
              whileTap={{ scale: 0.9 }}
              onClick={nextTestimonial}
              className="w-14 h-14 rounded-full bg-accent text-primary-dark flex items-center justify-center shadow-xl hover:shadow-2xl transition-all font-bold text-xl"
              aria-label="Next testimonial"
            >
              →
            </motion.button>
          </div>

          {/* Auto-play indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mt-4"
          >
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="text-gray-400 text-sm hover:text-white transition-colors"
            >
              {isAutoPlaying ? '⏸️ Pause' : '▶️ Play'} Auto-scroll
            </button>
          </motion.div>
        </div>

        {/* Enhanced Stats from Reviews */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="grid md:grid-cols-4 gap-6"
        >
          {[
            { number: '4.8/5', label: 'Average Rating', icon: '⭐', gradient: 'from-yellow-500 to-orange-500' },
            { number: '5000+', label: 'Happy Customers', icon: '😊', gradient: 'from-green-500 to-emerald-500' },
            { number: '98%', label: 'Satisfaction Rate', icon: '💯', gradient: 'from-blue-500 to-cyan-500' },
            { number: '500+', label: 'Franchise Partners', icon: '🤝', gradient: 'from-purple-500 to-pink-500' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity`} />
              <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20 group-hover:border-white/40 transition-all">
                <motion.div
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 }}
                  className="text-4xl mb-2"
                >
                  {stat.icon}
                </motion.div>
                <div className="text-4xl font-heading font-bold text-accent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-sm font-medium">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
