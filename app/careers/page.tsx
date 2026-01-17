'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import HeroBanner from '@/components/ui/HeroBanner'
import { Briefcase, MapPin, Clock, ChevronDown, ChevronUp, Send } from 'lucide-react'
import Link from 'next/link'

const benefits = [
  { title: 'Competitive Salary', description: 'Industry-leading compensation packages', icon: '💰' },
  { title: 'Health Insurance', description: 'Comprehensive health coverage for you and family', icon: '🏥' },
  { title: 'Growth Opportunities', description: 'Clear career progression paths', icon: '📈' },
  { title: 'Learning & Development', description: 'Continuous training and skill development', icon: '📚' },
  { title: 'Work-Life Balance', description: 'Flexible working arrangements', icon: '⚖️' },
  { title: 'Team Events', description: 'Regular team outings and celebrations', icon: '🎉' },
]

const jobs = [
  {
    id: 1,
    title: 'Store Manager',
    location: 'Multiple Locations',
    type: 'Full-time',
    experience: '2-4 years',
    description: 'Lead and manage store operations, ensuring excellent customer service and achieving sales targets. Oversee inventory, staff training, and maintain brand standards.',
    requirements: [
      'Bachelor\'s degree in any field',
      '2-4 years of retail management experience',
      'Strong leadership and communication skills',
      'Ability to work in shifts and handle pressure',
      'Proficiency in basic computer operations',
    ],
  },
  {
    id: 2,
    title: 'Barista',
    location: 'Pan India',
    type: 'Full-time',
    experience: '0-2 years',
    description: 'Prepare and serve beverages, maintain cleanliness, and provide excellent customer experience. Learn traditional chai-making techniques.',
    requirements: [
      'High school diploma or equivalent',
      'Passion for tea and coffee',
      'Good communication and interpersonal skills',
      'Ability to work in fast-paced environment',
      'Willingness to learn and adapt',
    ],
  },
  {
    id: 3,
    title: 'Area Manager',
    location: 'Metro Cities',
    type: 'Full-time',
    experience: '5-8 years',
    description: 'Oversee multiple store operations, drive growth, and ensure brand standards across the region. Mentor store managers and implement strategic initiatives.',
    requirements: [
      'MBA or equivalent qualification',
      '5-8 years of multi-unit retail experience',
      'Strong analytical and problem-solving skills',
      'Willingness to travel extensively (50-70%)',
      'Experience in F&B industry preferred',
    ],
  },
  {
    id: 4,
    title: 'Marketing Executive',
    location: 'Mumbai (HQ)',
    type: 'Full-time',
    experience: '2-4 years',
    description: 'Plan and execute marketing campaigns, manage social media, and drive brand awareness. Work closely with design and content teams.',
    requirements: [
      'Bachelor\'s degree in Marketing or related field',
      '2-4 years of marketing experience',
      'Experience with digital marketing tools and platforms',
      'Creative thinking and attention to detail',
      'Strong writing and presentation skills',
    ],
  },
  {
    id: 5,
    title: 'Franchise Development Manager',
    location: 'Mumbai (HQ)',
    type: 'Full-time',
    experience: '4-6 years',
    description: 'Identify and onboard new franchise partners, support existing franchisees, and drive network growth. Build relationships and ensure franchise success.',
    requirements: [
      'MBA or equivalent',
      '4-6 years in franchise development or business development',
      'Strong negotiation and relationship management skills',
      'Experience in F&B industry preferred',
      'Excellent presentation and communication abilities',
    ],
  },
  {
    id: 6,
    title: 'Supply Chain Manager',
    location: 'Mumbai (HQ)',
    type: 'Full-time',
    experience: '5-7 years',
    description: 'Manage end-to-end supply chain operations, vendor relationships, and inventory optimization across the network.',
    requirements: [
      'Engineering or MBA in Supply Chain',
      '5-7 years in supply chain management',
      'Strong analytical and negotiation skills',
      'Experience with ERP systems',
      'F&B supply chain experience preferred',
    ],
  },
  {
    id: 7,
    title: 'HR Executive',
    location: 'Mumbai (HQ)',
    type: 'Full-time',
    experience: '2-3 years',
    description: 'Handle recruitment, onboarding, training coordination, and employee engagement activities for our growing team.',
    requirements: [
      'MBA in HR or related field',
      '2-3 years of HR experience',
      'Strong interpersonal skills',
      'Experience with HRMS software',
      'Knowledge of labor laws',
    ],
  },
  {
    id: 8,
    title: 'Chef / Kitchen Manager',
    location: 'Multiple Locations',
    type: 'Full-time',
    experience: '3-5 years',
    description: 'Oversee kitchen operations, maintain food quality standards, develop new menu items, and train kitchen staff.',
    requirements: [
      'Culinary degree or equivalent',
      '3-5 years in commercial kitchen',
      'Knowledge of food safety standards',
      'Creative and innovative mindset',
      'FSSAI certification preferred',
    ],
  },
]

export default function CareersPage() {
  const [expandedJob, setExpandedJob] = useState<number | null>(null)
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <>
      <HeroBanner
        images={[
          '/images/OIP (2).jpg',
          '/images/60bb3389-89d4-4b60-9fbc-0ee20fedf4fb.jpg',
          '/images/pexels-pitamaas-575428118-16942970.jpg',
        ]}
        title={<>Join Our <span className="text-accent">Team</span></>}
        description="Be part of India's fastest-growing chai revolution. Build your career with Vanankam and make a difference every day."
      />

      {/* Why Join Us */}
      <section ref={ref} className="py-20 gradient-bg">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-dark mb-4">
              Why Join <span className="text-accent">Vanankam?</span>
            </h2>
            <p className="text-lg text-primary max-w-2xl mx-auto">
              We offer more than just a job - we offer a career with purpose, growth, and countless opportunities
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <span className="text-4xl mb-4 block">{benefit.icon}</span>
                <h3 className="text-xl font-heading font-bold text-primary-dark mb-2">
                  {benefit.title}
                </h3>
                <p className="text-primary">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-dark mb-4">
              Open <span className="text-accent">Positions</span>
            </h2>
            <p className="text-lg text-primary max-w-2xl mx-auto">
              Explore exciting career opportunities across various roles and locations
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-4">
            {jobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl overflow-hidden shadow-lg"
              >
                <div
                  className="p-6 cursor-pointer hover:bg-gray-100 transition-colors"
                  onClick={() => setExpandedJob(expandedJob === job.id ? null : job.id)}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-heading font-bold text-primary-dark mb-2">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap gap-4 text-sm text-primary">
                        <span className="flex items-center gap-1">
                          <MapPin size={16} className="text-accent" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Briefcase size={16} className="text-accent" />
                          {job.type}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={16} className="text-accent" />
                          {job.experience}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-accent font-semibold">
                        {expandedJob === job.id ? 'Hide Details' : 'View Details'}
                      </span>
                      {expandedJob === job.id ? (
                        <ChevronUp className="text-accent" />
                      ) : (
                        <ChevronDown className="text-accent" />
                      )}
                    </div>
                  </div>
                </div>

                <AnimatePresence>
                  {expandedJob === job.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 border-t border-gray-200 pt-4">
                        <div className="mb-4">
                          <h4 className="font-semibold text-primary-dark mb-2">Description</h4>
                          <p className="text-primary">{job.description}</p>
                        </div>

                        <div className="mb-6">
                          <h4 className="font-semibold text-primary-dark mb-2">Requirements</h4>
                          <ul className="list-disc list-inside text-primary space-y-1">
                            {job.requirements.map((req, i) => (
                              <li key={i}>{req}</li>
                            ))}
                          </ul>
                        </div>

                        <Link
                          href="/careers/apply"
                          className="inline-flex items-center gap-2 bg-accent text-primary-dark px-6 py-3 rounded-full font-semibold hover:bg-accent-dark transition-colors"
                        >
                          <Send size={18} />
                          Apply Now
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* General Application CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16 p-8 bg-primary-dark rounded-2xl max-w-3xl mx-auto"
          >
            <h3 className="text-2xl font-heading font-bold text-white mb-4">
              Don't see a suitable position?
            </h3>
            <p className="text-gray-300 mb-6">
              Send us your resume and we'll reach out when a matching opportunity arises. We're always looking for talented individuals!
            </p>
            <Link href="/careers/apply" className="btn-primary">
              Submit General Application
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
