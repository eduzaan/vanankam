'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'

const benefits = [
  {
    icon: '💼',
    title: 'Low Investment',
    description: 'Start your journey with minimal investment. Multiple formats available starting from ₹5 lakhs',
    highlight: 'From ₹5L'
  },
  {
    icon: '📈',
    title: 'High ROI',
    description: 'Proven business model with 30-35% profit margins. Most franchises break even within 8-12 months',
    highlight: '30-35% Margins'
  },
  {
    icon: '🎯',
    title: 'Complete Support',
    description: 'End-to-end support from site selection, setup, training, operations, to marketing',
    highlight: 'A to Z Support'
  },
  {
    icon: '🏪',
    title: 'Flexible Models',
    description: 'Choose from Kiosk, Outlet, or Express formats based on your space and budget',
    highlight: '3 Formats'
  },
  {
    icon: '📚',
    title: 'Training Program',
    description: 'Comprehensive 7-day training on operations, product preparation, quality control, and customer service',
    highlight: '7-Day Training'
  },
  {
    icon: '📱',
    title: 'Technology Edge',
    description: 'POS system, inventory management, and online ordering integration provided',
    highlight: 'Tech Enabled'
  },
  {
    icon: '🎨',
    title: 'Brand Power',
    description: 'Leverage our established brand with 500+ outlets. Strong social media presence and marketing',
    highlight: '500+ Outlets'
  },
  {
    icon: '🔧',
    title: 'Equipment Supply',
    description: 'All necessary equipment, machinery, and initial inventory provided by us',
    highlight: 'Turnkey Setup'
  },
  {
    icon: '📊',
    title: 'Marketing Support',
    description: 'National campaigns, local promotions, social media content, and promotional materials',
    highlight: 'Free Marketing'
  }
]

const investmentDetails = [
  { model: 'Kiosk Model', space: '80-120 sq ft', investment: '₹5-8 Lakhs', returns: '₹40-60K/month' },
  { model: 'Outlet Model', space: '200-300 sq ft', investment: '₹12-18 Lakhs', returns: '₹1-1.5L/month' },
  { model: 'Express Model', space: '400-600 sq ft', investment: '₹20-30 Lakhs', returns: '₹2-3L/month' }
]

export default function FranchiseBenefits() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section ref={ref} className="py-20 gradient-bg">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-dark mb-4">
            Why Partner with <span className="text-accent">Vanankam?</span>
          </h2>
          <p className="text-primary text-lg max-w-3xl mx-auto">
            Join India's fastest-growing kulhad chai franchise and be your own boss. 
            Here's what makes us the perfect business partner.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.05 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-accent"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="text-5xl">{benefit.icon}</div>
                <div className="flex-1">
                  <h3 className="text-lg font-heading font-bold text-primary-dark mb-2">
                    {benefit.title}
                  </h3>
                  <span className="inline-block bg-accent/20 text-primary-dark text-xs px-2 py-1 rounded-full font-medium mb-2">
                    {benefit.highlight}
                  </span>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Investment Models */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-heading font-bold text-center text-primary-dark mb-8">
            Choose Your <span className="text-accent">Investment Model</span>
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {investmentDetails.map((model, index) => (
              <motion.div
                key={model.model}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.7 + index * 0.1 }}
                className={`bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 ${
                  index === 1 ? 'border-4 border-accent relative' : ''
                }`}
              >
                {index === 1 && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-primary-dark px-4 py-1 rounded-full text-sm font-bold">
                    Most Popular
                  </div>
                )}

                <h4 className="text-2xl font-heading font-bold text-primary-dark mb-6 text-center">
                  {model.model}
                </h4>

                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                    <span className="text-gray-600">Space Required</span>
                    <span className="font-bold text-primary-dark">{model.space}</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                    <span className="text-gray-600">Investment</span>
                    <span className="font-bold text-accent">{model.investment}</span>
                  </div>
                  <div className="flex justify-between items-center pb-2">
                    <span className="text-gray-600">Expected Returns</span>
                    <span className="font-bold text-green-600">{model.returns}</span>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <Link 
                    href="/franchise"
                    className={`inline-block px-6 py-3 rounded-full font-medium transition-all ${
                      index === 1
                        ? 'bg-accent text-primary-dark hover:bg-accent/90'
                        : 'bg-primary-dark text-white hover:bg-primary'
                    }`}
                  >
                    Learn More
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Success Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.9 }}
          className="bg-primary-dark rounded-2xl p-8 md:p-12"
        >
          <h3 className="text-3xl font-heading font-bold text-center text-white mb-8">
            Franchise Success Metrics
          </h3>

          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {[
              { value: '98%', label: 'Franchise Satisfaction Rate' },
              { value: '8-12', label: 'Months to Break Even' },
              { value: '₹2-4L', label: 'Avg. Monthly Revenue' },
              { value: '3-5', label: 'Year Franchise Agreement' }
            ].map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-heading font-bold text-accent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-white text-lg mb-6">
              Ready to start your entrepreneurial journey with India's favorite kulhad chai brand?
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/franchise" className="btn-primary bg-accent hover:bg-accent/90 text-primary-dark">
                Apply for Franchise
              </Link>
              <Link href="/contact" className="btn-secondary border-white text-white hover:bg-white hover:text-primary-dark">
                Request Callback
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
