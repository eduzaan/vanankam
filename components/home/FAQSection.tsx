'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Plus, Minus, HelpCircle } from 'lucide-react'
import { fadeUpVariants, staggerContainerVariants } from '@/lib/animations'

const faqs = [
  {
    question: 'Who are the founders of Vanankam?',
    answer: 'Vanankam was founded by passionate tea enthusiasts who wanted to bring the authentic taste of kulhad chai to tea lovers across India and beyond. Our founders have over 15 years of experience in the food and beverage industry.',
  },
  {
    question: 'How many outlets does Vanankam currently have?',
    answer: 'Vanankam currently operates 500+ outlets across 26+ states in India and has expanded to 6+ countries internationally, serving millions of customers annually.',
  },
  {
    question: 'What makes Vanankam the best tea franchise brand in India?',
    answer: 'Our unique selling proposition includes authentic kulhad chai, eco-friendly practices with zero plastic usage, comprehensive franchise support, proven business model, and a strong brand presence that resonates with tea lovers.',
  },
  {
    question: 'How can I apply for a Vanankam franchise?',
    answer: 'You can apply for a Vanankam franchise by filling out our online application form, attending our franchise discovery day, or contacting our franchise team directly. We provide complete support from store setup to operations training.',
  },
  {
    question: 'What store size is required to open a Vanankam franchise?',
    answer: 'The minimum store size requirement varies based on the franchise model chosen. Our kiosk model requires 100-150 sq ft, while our cafe format requires 400-800 sq ft. We offer flexible models to suit different investment capacities.',
  },
  {
    question: 'What is the investment required to start a Vanankam franchise?',
    answer: 'Investment ranges from ₹5-8 Lakhs for kiosk model, ₹10-15 Lakhs for express model, and ₹20-30 Lakhs for cafe model. This includes setup costs, equipment, initial inventory, and training.',
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 50,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-20 right-20 w-96 h-96 border-4 border-accent rounded-full"
        />
        <motion.div
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute bottom-20 left-20 w-64 h-64 border-4 border-primary-dark rounded-full"
        />
      </div>

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={inView ? { scale: 1, rotate: 0 } : {}}
            transition={{ duration: 0.8, type: 'spring', stiffness: 150 }}
            className="inline-flex items-center gap-3 mb-6"
          >
            <motion.div
              animate={{
                rotate: [0, 10, -10, 0],
                y: [0, -5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            >
              <HelpCircle className="w-12 h-12 text-accent" />
            </motion.div>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-dark mb-4">
            Frequently Asked <span className="text-accent">Questions</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Got questions? We've got answers! Find everything you need to know about Vanankam.
          </p>
        </motion.div>

        <motion.div 
          variants={staggerContainerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={fadeUpVariants}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              whileHover={{ scale: 1.02 }}
              className="relative"
              style={{ perspective: '1000px' }}
            >
              <motion.div
                animate={hoveredIndex === index ? {
                  boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                } : {
                  boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
                }}
                className="border-2 border-gray-200 rounded-2xl overflow-hidden bg-white relative"
              >
                {/* Gradient Accent Bar */}
                <motion.div
                  className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-accent to-primary-dark"
                  initial={{ scaleY: 0 }}
                  animate={openIndex === index ? { scaleY: 1 } : { scaleY: 0 }}
                  transition={{ duration: 0.3 }}
                />

                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 md:px-8 py-5 text-left flex items-start justify-between bg-white hover:bg-gray-50/50 transition-colors group"
                >
                  <span className="font-bold text-primary-dark pr-4 text-lg group-hover:text-accent transition-colors">
                    {faq.question}
                  </span>

                  <motion.div
                    animate={{
                      rotate: openIndex === index ? 180 : 0,
                      scale: hoveredIndex === index ? 1.2 : 1,
                    }}
                    transition={{ duration: 0.3, type: 'spring' }}
                    className="flex-shrink-0 mt-1"
                  >
                    <motion.div
                      className={`rounded-full p-1 ${
                        openIndex === index 
                          ? 'bg-accent text-white' 
                          : 'bg-gray-100 text-primary group-hover:bg-accent group-hover:text-white'
                      } transition-colors`}
                      whileHover={{ rotate: 90 }}
                    >
                      {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                    </motion.div>
                  </motion.div>
                </button>

                <AnimatePresence mode="wait">
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.43, 0.13, 0.23, 0.96] }}
                      className="overflow-hidden"
                    >
                      <motion.div
                        initial={{ y: -20 }}
                        animate={{ y: 0 }}
                        exit={{ y: -20 }}
                        className="px-6 md:px-8 py-6 bg-gradient-to-br from-gray-50 to-white border-t border-gray-100"
                      >
                        <motion.p 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.1 }}
                          className="text-gray-700 leading-relaxed text-base"
                        >
                          {faq.answer}
                        </motion.p>

                        {/* Decorative element */}
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: '100%' }}
                          className="h-0.5 bg-gradient-to-r from-accent to-transparent mt-4"
                        />
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Shine effect on hover */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  animate={hoveredIndex === index ? {
                    background: [
                      'linear-gradient(90deg, transparent 0%, transparent 40%, rgba(255,193,7,0.1) 50%, transparent 60%, transparent 100%)',
                      'linear-gradient(90deg, transparent 0%, transparent 40%, rgba(255,193,7,0.1) 50%, transparent 60%, transparent 100%)',
                    ],
                    backgroundPosition: ['-200%', '200%'],
                  } : {}}
                  transition={{ duration: 1 }}
                  style={{ backgroundSize: '200% 100%' }}
                />
              </motion.div>

              {/* Index Number Badge */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={inView ? { scale: 1, rotate: 0 } : {}}
                transition={{ delay: index * 0.1, type: 'spring' }}
                className="absolute -left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-gradient-to-br from-accent to-primary-dark rounded-full flex items-center justify-center text-white font-bold shadow-lg z-10"
              >
                {index + 1}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="inline-block bg-gradient-to-br from-accent/10 to-primary-dark/10 backdrop-blur-sm px-8 py-6 rounded-2xl border-2 border-accent/20"
          >
            <p className="text-gray-700 text-lg mb-4 font-medium">
              Still have questions? We're here to help!
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(255, 193, 7, 0.3)' }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-accent to-primary-dark text-white px-6 py-3 rounded-full font-bold shadow-lg"
            >
              Contact Our Team
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
