"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import HeroBanner from '@/components/ui/HeroBanner'
import Button from '@/components/ui/Button'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { franchiseSchema, FranchiseForm } from '@/lib/validators'
import { 
  Store, 
  TrendingUp, 
  Users, 
  HeartHandshake,
  Award,
  Target,
  CheckCircle,
  ArrowRight,
  IndianRupee,
  Clock,
  Briefcase
} from 'lucide-react'

const franchiseModels = [
  {
    name: 'Kiosk Model',
    investment: '₹5-8 Lakhs',
    space: '150-250 sq ft',
    roi: '35-45%',
    payback: '18-24 months',
    features: [
      'Compact footprint',
      'Quick setup (2-3 weeks)',
      'Ideal for high-traffic areas',
      'Lower operational costs',
      'Menu: Chai & Quick Snacks',
    ],
    icon: Store,
  },
  {
    name: 'Express Outlet',
    investment: '₹10-15 Lakhs',
    space: '400-600 sq ft',
    roi: '40-50%',
    payback: '20-26 months',
    features: [
      'Mid-size format',
      'Extended menu options',
      'Seating for 10-15 customers',
      'Takeaway & dine-in',
      'Higher revenue potential',
    ],
    icon: TrendingUp,
    popular: true,
  },
  {
    name: 'Café Format',
    investment: '₹20-30 Lakhs',
    space: '800-1200 sq ft',
    roi: '45-55%',
    payback: '24-30 months',
    features: [
      'Premium ambiance',
      'Full menu with snacks',
      'Seating for 25-35 customers',
      'Brand experience center',
      'Highest revenue model',
    ],
    icon: Award,
  },
]

const benefits = [
  {
    icon: Award,
    title: 'Proven Brand',
    description: '5+ years in market with 50+ successful outlets',
  },
  {
    icon: TrendingUp,
    title: 'High ROI',
    description: '35-55% ROI with 18-30 months payback period',
  },
  {
    icon: Users,
    title: 'Full Training',
    description: 'Comprehensive training and ongoing support',
  },
  {
    icon: HeartHandshake,
    title: 'Marketing Support',
    description: 'National campaigns and local marketing assistance',
  },
  {
    icon: Store,
    title: 'Site Selection',
    description: 'Expert help in finding the perfect location',
  },
  {
    icon: Target,
    title: 'Operations Manual',
    description: 'Detailed SOPs for seamless operations',
  },
]

const process = [
  { step: '1', title: 'Application', description: 'Submit the franchise inquiry form' },
  { step: '2', title: 'Discussion', description: 'Initial call to discuss your interests' },
  { step: '3', title: 'Discovery Day', description: 'Visit our HQ and existing outlets' },
  { step: '4', title: 'Agreement', description: 'Sign franchise agreement' },
  { step: '5', title: 'Setup', description: 'Site setup and staff training' },
  { step: '6', title: 'Launch', description: 'Grand opening of your outlet' },
]

export default function FranchisePage() {
  const { register, handleSubmit, formState, reset } = useForm<FranchiseForm>({
    resolver: zodResolver(franchiseSchema),
  })
  const { errors, isSubmitting } = formState
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  async function onSubmit(data: FranchiseForm) {
    try {
      const res = await fetch('/api/franchise', { 
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' }, 
        body: JSON.stringify(data) 
      })
      const json = await res.json()
      if (res.ok) {
        setIsSubmitted(true)
        reset()
        setTimeout(() => setIsSubmitted(false), 6000)
      } else {
        alert(json.error || 'Failed to submit application')
      }
    } catch (err) {
      alert('Network error. Please try again.')
    }
  }

  return (
    <>
      <HeroBanner
        images={[
          '/images/60bb3389-89d4-4b60-9fbc-0ee20fedf4fb.jpg',
          '/images/OIP (1).jpg',
          '/images/pexels-thel0stkidd-2149128959-31141291.jpg',
        ]}
        title={<>Become a <span className="text-accent">Franchise Partner</span></>}
        description="Join India's fastest-growing chai franchise and build a profitable business with our proven model"
      />

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '50+', label: 'Active Outlets' },
              { value: '35-55%', label: 'ROI Range' },
              { value: '18-30', label: 'Months Payback' },
              { value: '95%', label: 'Success Rate' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2">{stat.value}</div>
                <div className="text-primary font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Franchise Models */}
      <section className="py-20 gradient-bg">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-dark mb-4">
              Choose Your <span className="text-accent">Model</span>
            </h2>
            <p className="text-xl text-primary max-w-2xl mx-auto">
              Select the franchise format that best suits your investment capacity and business goals
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {franchiseModels.map((model, index) => (
              <motion.div
                key={model.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow relative ${
                  model.popular ? 'ring-4 ring-accent' : ''
                }`}
              >
                {model.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-primary-dark px-6 py-2 rounded-full font-bold text-sm">
                    Most Popular
                  </div>
                )}

                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center">
                    <model.icon className="w-8 h-8 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-heading font-bold text-primary-dark">
                      {model.name}
                    </h3>
                    <p className="text-primary text-sm">{model.space}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="text-3xl font-bold text-accent mb-1">{model.investment}</div>
                  <div className="text-sm text-primary">Total Investment</div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-gray-50 rounded-xl">
                  <div>
                    <div className="text-xl font-bold text-primary-dark">{model.roi}</div>
                    <div className="text-xs text-primary">Expected ROI</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-primary-dark">{model.payback}</div>
                    <div className="text-xs text-primary">Payback Period</div>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {model.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-primary">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant="primary"
                  className="w-full"
                  onClick={() => {
                    document.getElementById('franchise-form')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  Apply Now
                  <ArrowRight size={18} />
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section ref={ref} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-dark mb-4">
              Why Partner with <span className="text-accent">Vanankam</span>?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <benefit.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-heading font-bold text-primary-dark mb-2">
                  {benefit.title}
                </h3>
                <p className="text-primary">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 gradient-bg">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-dark mb-4">
              Simple <span className="text-accent">6-Step</span> Process
            </h2>
            <p className="text-xl text-primary max-w-2xl mx-auto">
              From application to launch in just 60-90 days
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {process.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-6 mb-8 last:mb-0"
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-accent text-primary-dark font-bold text-xl flex items-center justify-center flex-shrink-0">
                    {item.step}
                  </div>
                  {index < process.length - 1 && (
                    <div className="w-0.5 h-full bg-accent/30 mt-2"></div>
                  )}
                </div>
                <div className="pb-8">
                  <h3 className="text-xl font-bold text-primary-dark mb-1">{item.title}</h3>
                  <p className="text-primary">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="franchise-form" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-dark mb-4">
              Start Your <span className="text-accent">Journey</span>
            </h2>
            <p className="text-xl text-primary">
              Fill out the form below and our team will contact you within 24 hours
            </p>
          </motion.div>

          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl p-8 md:p-12">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-primary-dark mb-3">
                  Application Submitted Successfully!
                </h3>
                <p className="text-primary text-lg mb-2">
                  Thank you for your interest in Vanankam franchise.
                </p>
                <p className="text-primary">
                  Our franchise team will review your application and contact you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-primary-dark mb-2">
                      Full Name *
                    </label>
                    <input
                      {...register('name')}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="Enter your full name"
                    />
                    {errors.name && <div className="text-sm text-red-500 mt-1">{String(errors.name.message)}</div>}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-primary-dark mb-2">
                      Email Address *
                    </label>
                    <input
                      {...register('email')}
                      type="email"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="you@example.com"
                    />
                    {errors.email && <div className="text-sm text-red-500 mt-1">{String(errors.email.message)}</div>}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-primary-dark mb-2">
                      Phone Number *
                    </label>
                    <input
                      {...register('phone')}
                      type="tel"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="+91 98765 43210"
                    />
                    {errors.phone && <div className="text-sm text-red-500 mt-1">{String(errors.phone.message)}</div>}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-primary-dark mb-2">
                      City *
                    </label>
                    <input
                      {...register('city')}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="Your city"
                    />
                    {errors.city && <div className="text-sm text-red-500 mt-1">{String(errors.city.message)}</div>}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-primary-dark mb-2">
                      Investment Capacity *
                    </label>
                    <select
                      {...register('investment')}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent bg-white"
                    >
                      <option value="">Select investment range</option>
                      <option value="5-10L">₹5-10 Lakhs</option>
                      <option value="10-15L">₹10-15 Lakhs</option>
                      <option value="15-20L">₹15-20 Lakhs</option>
                      <option value="20-30L">₹20-30 Lakhs</option>
                      <option value="30L+">₹30 Lakhs+</option>
                    </select>
                    {errors.investment && <div className="text-sm text-red-500 mt-1">{String(errors.investment.message)}</div>}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-primary-dark mb-2">
                      Preferred Model
                    </label>
                    <select
                      {...register('franchiseModel')}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent bg-white"
                    >
                      <option value="">Select a model</option>
                      <option value="kiosk">Kiosk Model</option>
                      <option value="express">Express Outlet</option>
                      <option value="cafe">Café Format</option>
                      <option value="undecided">Not Sure Yet</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-primary-dark mb-2">
                    Business Experience
                  </label>
                  <select
                    {...register('experience')}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent bg-white"
                  >
                    <option value="">Select your experience</option>
                    <option value="none">No business experience</option>
                    <option value="0-2">0-2 years</option>
                    <option value="2-5">2-5 years</option>
                    <option value="5+">5+ years</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-primary-dark mb-2">
                    Additional Information
                  </label>
                  <textarea
                    {...register('message')}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                    placeholder="Tell us about your location preference, timeline, or any questions you have..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-accent text-primary-dark px-8 py-4 rounded-full font-bold text-lg hover:bg-accent-dark transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-6 h-6 border-3 border-primary-dark border-t-transparent rounded-full animate-spin" />
                      Submitting Application...
                    </>
                  ) : (
                    <>
                      Submit Application
                      <ArrowRight size={20} />
                    </>
                  )}
                </button>

                <p className="text-sm text-primary text-center mt-4">
                  By submitting this form, you agree to our terms and privacy policy
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
