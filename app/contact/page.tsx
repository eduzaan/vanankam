"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import HeroBanner from '@/components/ui/HeroBanner'
import Button from '@/components/ui/Button'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { contactSchema, ContactForm } from '@/lib/validators'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  CheckCircle
} from 'lucide-react'

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    details: ['+91-6269112500', '+91-9876543210'],
    action: 'tel:+916269112500',
  },
  {
    icon: Mail,
    title: 'Email',
    details: ['info@vanankam.com', 'franchise@vanankam.com'],
    action: 'mailto:info@vanankam.com',
  },
  {
    icon: MapPin,
    title: 'Head Office',
    details: ['123 Chai Street, Andheri West', 'Mumbai, Maharashtra 400058'],
    action: '#',
  },
  {
    icon: Clock,
    title: 'Business Hours',
    details: ['Monday - Saturday: 9:00 AM - 6:00 PM', 'Sunday: Closed'],
    action: '#',
  },
]

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook', color: 'hover:bg-blue-600' },
  { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:bg-sky-500' },
  { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:bg-pink-600' },
  { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:bg-blue-700' },
  { icon: Youtube, href: '#', label: 'YouTube', color: 'hover:bg-red-600' },
]

export default function ContactPage() {
  const { register, handleSubmit, formState, reset } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  })
  const { errors, isSubmitting } = formState
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  async function onSubmit(data: ContactForm) {
    try {
      const res = await fetch('/api/contact', { 
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' }, 
        body: JSON.stringify(data) 
      })
      const json = await res.json()
      if (res.ok) {
        setIsSubmitted(true)
        reset()
        setTimeout(() => setIsSubmitted(false), 5000)
      } else {
        alert(json.error || 'Failed to send message')
      }
    } catch (err) {
      alert('Network error. Please try again.')
    }
  }

  return (
    <>
      <HeroBanner
        images={[
          '/images/pexels-thel0stkidd-2149128959-31141291.jpg',
          '/images/OIP.jpg',
          '/images/60bb3389-89d4-4b60-9fbc-0ee20fedf4fb.jpg',
        ]}
        title={<>Contact <span className="text-accent">Us</span></>}
        description="We'd love to hear from you! Get in touch with our team for any queries, feedback, or franchise inquiries"
      />

      {/* Contact Section */}
      <section ref={ref} className="py-20 gradient-bg">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              className="lg:col-span-1"
            >
              <h2 className="text-3xl font-heading font-bold text-primary-dark mb-8">
                Get in Touch
              </h2>

              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary-dark mb-1">{item.title}</h3>
                      {item.details.map((detail, i) => (
                        <p key={i} className="text-primary text-sm">{detail}</p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-10">
                <h3 className="font-semibold text-primary-dark mb-4">Follow Us</h3>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className={`w-10 h-10 rounded-full bg-primary-dark text-white flex items-center justify-center transition-colors ${social.color}`}
                    >
                      <social.icon size={18} />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              className="lg:col-span-2"
            >
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-2xl font-heading font-bold text-primary-dark mb-6">
                  Send us a Message
                </h2>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-primary-dark mb-2">
                      Thank You!
                    </h3>
                    <p className="text-primary">
                      We've received your message and will get back to you within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-primary-dark mb-2">
                          Full Name *
                        </label>
                        <input
                          {...register('name')}
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent"
                          placeholder="John Doe"
                        />
                        {errors.name && <div className="text-sm text-red-500 mt-1">{String(errors.name.message)}</div>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-primary-dark mb-2">
                          Email Address *
                        </label>
                        <input
                          {...register('email')}
                          type="email"
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent"
                          placeholder="john@example.com"
                        />
                        {errors.email && <div className="text-sm text-red-500 mt-1">{String(errors.email.message)}</div>}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-primary-dark mb-2">
                        Subject *
                      </label>
                      <select
                        {...register('subject')}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent bg-white"
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="franchise">Franchise Inquiry</option>
                        <option value="careers">Career Inquiry</option>
                        <option value="feedback">Feedback</option>
                        <option value="complaint">Complaint</option>
                      </select>
                      {errors.subject && <div className="text-sm text-red-500 mt-1">{String(errors.subject.message)}</div>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-primary-dark mb-2">
                        Message *
                      </label>
                      <textarea
                        {...register('message')}
                        rows={5}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                        placeholder="Tell us how we can help you..."
                      />
                      {errors.message && <div className="text-sm text-red-500 mt-1">{String(errors.message.message)}</div>}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full md:w-auto flex items-center justify-center gap-2 bg-accent text-primary-dark px-8 py-4 rounded-full font-semibold hover:bg-accent-dark transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-5 h-5 border-2 border-primary-dark border-t-transparent rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={18} />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>

          {/* Map Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="mt-16"
          >
            <div className="bg-gray-200 rounded-2xl h-[400px] flex items-center justify-center">
              <div className="text-center text-gray-500">
                <MapPin size={48} className="mx-auto mb-4" />
                <p className="text-lg font-semibold">Google Maps Integration</p>
                <p className="text-sm">Our Head Office Location - Mumbai, Maharashtra</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
