"use client"
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { newsletterSchema, NewsletterForm } from '@/lib/validators'
import { Mail, Zap, Gift, Rocket } from 'lucide-react'

const charVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.03,
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  }),
}

export default function NewsletterSection() {
  const [submitted, setSubmitted] = useState(false)
  const { register, handleSubmit, formState, reset } = useForm<NewsletterForm>({ 
    resolver: zodResolver(newsletterSchema) 
  })
  const { errors, isSubmitting } = formState

  async function onSubmit(data: NewsletterForm) {
    try {
      const res = await fetch('/api/newsletter', { 
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' }, 
        body: JSON.stringify(data) 
      })
      const json = await res.json()
      if (res.ok) {
        setSubmitted(true)
        reset()
        setTimeout(() => setSubmitted(false), 3000)
      } else {
        alert(json.error || 'Subscription failed')
      }
    } catch (err) {
      alert('Network error')
    }
  }

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-primary-dark/30 dark:to-primary-dark/10">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 opacity-5"
        style={{
          backgroundImage: 'url(/images/news_bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      />
      
      {/* Decorative Elements */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-accent/8 rounded-full blur-3xl"
        animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-96 h-96 bg-primary/8 rounded-full blur-3xl"
        animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Main Card */}
          <div className="relative">
            {/* Gradient Border Effect - Subtle */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/30 via-primary/20 to-primary-dark/30 rounded-3xl opacity-20 blur-xl" />

            {/* Content Card */}
            <div className="relative bg-white dark:bg-primary-dark/40 backdrop-blur-sm rounded-3xl p-10 md:p-16 shadow-xl border border-accent/15 dark:border-accent/10">
              
              {/* Icon Section */}
              <motion.div
                className="flex justify-center mb-8"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl p-6 shadow-lg">
                  <Mail className="w-12 h-12 text-accent stroke-[1.5]" />
                </div>
              </motion.div>

              {/* Heading */}
              <motion.div
                className="text-center mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-dark dark:text-white mb-2">
                  Join Our Newsletter
                </h2>
              </motion.div>

              {/* Subtitle with animated characters */}
              <motion.p
                className="text-center text-lg text-primary-dark/65 dark:text-gray-300 mb-10 max-w-2xl mx-auto"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.25 }}
                viewport={{ once: true }}
              >
                {'Get franchise updates, offers, and product launches.'.split('').map((char, i) => (
                  <motion.span
                    key={i}
                    custom={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.015 }}
                    viewport={{ once: true }}
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </motion.span>
                ))}
              </motion.p>

              {/* Form */}
              <motion.form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col sm:flex-row gap-3 justify-center items-stretch sm:items-center">
                  {/* Input Field */}
                  <motion.div
                    className="flex-1 sm:flex-1 relative group/input"
                    whileFocus="focus"
                  >
                    <input
                      {...register('email')}
                      placeholder="Email address"
                      className="w-full px-6 py-3.5 rounded-xl bg-gray-100 dark:bg-primary-dark/50 border-2 border-gray-200 dark:border-primary/30 hover:border-accent/30 focus:border-accent focus:outline-none transition-all duration-200 text-primary-dark dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 font-medium"
                    />
                  </motion.div>

                  {/* Submit Button */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      type="submit"
                      disabled={isSubmitting || submitted}
                      className="px-8 py-3.5 whitespace-nowrap font-bold text-base shadow-lg hover:shadow-xl transition-all duration-200 sm:w-auto w-full"
                    >
                      {submitted ? (
                        <motion.span
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="flex items-center justify-center gap-2"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Subscribed
                        </motion.span>
                      ) : isSubmitting ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity }}
                          className="inline-block"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="1" fill="currentColor" />
                          </svg>
                        </motion.div>
                      ) : (
                        'Subscribe'
                      )}
                    </Button>
                  </motion.div>
                </div>

                {/* Error Message */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={errors.email ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {errors.email && (
                    <p className="text-center text-sm font-semibold text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 px-4 py-3 rounded-xl inline-block">
                      {String(errors.email.message)}
                    </p>
                  )}
                </motion.div>
              </motion.form>

              {/* Divider */}
              <div className="my-10 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

              {/* Benefits Section */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <p className="text-center text-sm font-semibold text-primary-dark dark:text-gray-300 mb-6 uppercase tracking-wide">
                  What You'll Get
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {[
                    { Icon: Zap, label: 'Exclusive Updates', desc: 'First to know about news' },
                    { Icon: Gift, label: 'Special Offers', desc: 'Subscriber-only discounts' },
                    { Icon: Rocket, label: 'Early Access', desc: 'New features & launches' },
                  ].map((benefit, i) => (
                    <motion.div
                      key={i}
                      className="text-center p-4 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-primary-dark/20 dark:to-primary-dark/40 border border-gray-200 dark:border-primary/10 hover:border-accent/30 transition-all duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.45 + i * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -2 }}
                    >
                      <motion.div
                        className="flex justify-center mb-3"
                        animate={{ y: [0, -4, 0] }}
                        transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.3 }}
                      >
                        <benefit.Icon className="w-8 h-8 text-accent stroke-[1.5]" />
                      </motion.div>
                      <p className="text-sm font-bold text-primary-dark dark:text-white mb-1">
                        {benefit.label}
                      </p>
                      <p className="text-xs text-primary-dark/60 dark:text-gray-400">
                        {benefit.desc}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Privacy Note */}
              <motion.p
                className="text-center text-xs text-primary-dark/50 dark:text-gray-500 mt-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
              >
                We respect your privacy. Unsubscribe at any time.
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
