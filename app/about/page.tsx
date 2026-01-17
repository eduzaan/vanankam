'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import HeroBanner from '@/components/ui/HeroBanner'
import { Award, TrendingUp, Users, Heart, Globe, ShieldCheck } from 'lucide-react'

export default function AboutPage() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  const timeline = [
    { year: '2018', title: 'The Beginning', description: 'Opened our first outlet with a dream to revolutionize chai culture in India' },
    { year: '2019', title: 'Rapid Growth', description: 'Expanded to 50 outlets across 5 states, establishing our brand presence' },
    { year: '2020', title: 'Franchise Model Launch', description: 'Launched franchise program, empowering entrepreneurs across India' },
    { year: '2021', title: 'Pan India Expansion', description: 'Reached 200 outlets across 15 states with consistent quality' },
    { year: '2022', title: 'Going Global', description: 'International expansion to 4 countries, spreading chai revolution worldwide' },
    { year: '2023', title: 'Industry Leader', description: '500+ outlets, 200M+ kulhads served, recognized as India\'s #1 chai franchise' },
  ]

  const values = [
    { icon: Heart, title: 'Authenticity', description: 'Traditional recipes with authentic flavors, served in eco-friendly kulhads' },
    { icon: Award, title: 'Quality Excellence', description: 'Premium ingredients and rigorous quality control at every step' },
    { icon: Globe, title: 'Sustainability', description: 'Zero plastic policy, biodegradable kulhads, and responsible sourcing' },
    { icon: Users, title: 'Partnership', description: 'Transparent franchise model with comprehensive support and training' },
    { icon: TrendingUp, title: 'Innovation', description: 'Blending tradition with modern business practices for sustainable growth' },
    { icon: ShieldCheck, title: 'Trust', description: 'FSSAI certified, ISO compliant, and committed to food safety' },
  ]

  const leaders = [
    { name: 'Rajesh Kumar', role: 'Founder & CEO', bio: '15+ years in F&B industry, passionate about chai and entrepreneurship' },
    { name: 'Priya Sharma', role: 'Co-Founder & COO', bio: 'Operations expert with proven track record in scaling retail businesses' },
    { name: 'Amit Patel', role: 'Chief Marketing Officer', bio: 'Brand strategist who has built some of India\'s most loved F&B brands' },
    { name: 'Sneha Reddy', role: 'Head of Franchise Development', bio: 'Successfully onboarded 500+ franchises with 95% success rate' },
  ]

  return (
    <>
      <HeroBanner
        images={[
          '/images/pexels-pitamaas-575428118-16942970.jpg',
          '/images/pouring-tea-into-clay-cups.jpg',
          '/images/60bb3389-89d4-4b60-9fbc-0ee20fedf4fb.jpg',
        ]}
        title={<>About <span className="text-accent">Vanankam</span></>}
        description="Discover the story behind India's most loved kulhad chai brand - from a single outlet to 500+ locations nationwide"
      />

      {/* Story Section */}
      <section ref={ref} className="py-20 gradient-bg">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-dark mb-6">
                Our <span className="text-accent">Story</span>
              </h2>
              <div className="space-y-4 text-lg text-primary leading-relaxed">
                <p>
                  Vanankam began with a simple yet powerful vision - to bring the authentic taste 
                  of traditional Indian chai to every corner of the country, served in the most 
                  eco-friendly way possible through kulhads.
                </p>
                <p>
                  What started as a single outlet in 2018 has now grown into a nationwide phenomenon 
                  with over 500 outlets across 26+ states and 6 countries. Our journey has been 
                  fueled by the love of millions of chai enthusiasts who believe in our mission.
                </p>
                <p>
                  At Vanankam, we don't just serve chai - we serve memories. Every kulhad of chai 
                  carries with it the warmth of tradition, the aroma of carefully selected tea leaves, 
                  and the promise of an experience that goes beyond just a beverage.
                </p>
                <p>
                  <strong className="text-accent font-semibold">"Who needs a राज when there is a चाय"</strong> - this philosophy 
                  drives everything we do. We believe that a perfect cup of chai has the power to 
                  bring people together, create moments of joy, and brighten even the toughest days.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/pouring-tea-into-clay-cups.jpg"
                  alt="Traditional Chai in Kulhad"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/50 to-transparent" />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-accent text-primary-dark p-8 rounded-2xl shadow-xl">
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="text-sm font-semibold">Outlets Nationwide</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-bold text-center text-primary-dark mb-4"
          >
            Our <span className="text-accent">Journey</span>
          </motion.h2>
          <p className="text-center text-primary max-w-2xl mx-auto mb-16">
            From a single outlet to becoming India's largest kulhad chai franchise network
          </p>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-accent/30 -translate-x-1/2 hidden md:block" />

            {/* Timeline Items */}
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative flex items-center gap-8 mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow inline-block">
                    <span className="text-accent font-heading font-bold text-2xl">{item.year}</span>
                    <h3 className="text-xl font-heading font-bold text-primary-dark mt-2">{item.title}</h3>
                    <p className="text-primary mt-2">{item.description}</p>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="hidden md:flex w-6 h-6 rounded-full bg-accent border-4 border-white shadow-lg z-10 flex-shrink-0" />

                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 gradient-bg">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-bold text-center text-primary-dark mb-16"
          >
            Our Mission & Vision
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-xl"
            >
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-3xl font-heading font-bold text-primary-dark mb-4">Our Mission</h3>
              <p className="text-lg text-primary leading-relaxed">
                Our mission is to create an exceptionally crafted, BEST-IN-CLASS ambience for our KULHAD CHAI 
                and take it across the globe. We strive to serve a variety of delightful appetizers and beverages 
                featuring INDO-WESTERN cuisine with aromatic experiences that create cheerful memories to cherish. 
                Every cup we serve should be a moment of joy, bringing people together and spreading happiness.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-xl"
            >
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-3xl font-heading font-bold text-primary-dark mb-4">Our Vision</h3>
              <p className="text-lg text-primary leading-relaxed">
                Our vision is to facilitate delish TEA and appetizing snacks while also giving back to the community 
                and providing employment to the needy. We're building a path to benefit people and society. 
                We're aware of the concept of being in harmony with nature. Our use of ZERO plastic and solution 
                to replace it with biodegradable KULHAD makes Vanankam one of its kind and completely eco-friendly.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-bold text-center text-primary-dark mb-4"
          >
            Our <span className="text-accent">Values</span>
          </motion.h2>
          <p className="text-center text-primary max-w-2xl mx-auto mb-16">
            The principles that guide everything we do at Vanankam
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <value.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-heading font-bold text-primary-dark mb-2">
                  {value.title}
                </h3>
                <p className="text-primary">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 gradient-bg">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-bold text-center text-primary-dark mb-4"
          >
            Our <span className="text-accent">Leadership</span>
          </motion.h2>
          <p className="text-center text-primary max-w-2xl mx-auto mb-16">
            Meet the passionate team driving Vanankam's success story
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {leaders.map((leader, index) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="h-48 bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-6xl">
                  👤
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-heading font-bold text-primary-dark mb-1">
                    {leader.name}
                  </h3>
                  <p className="text-accent font-semibold text-sm mb-3">{leader.role}</p>
                  <p className="text-primary text-sm">{leader.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-dark">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              Ready to Join the Vanankam Family?
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Whether you're looking to become a franchise partner or want to know more about us, 
              we'd love to hear from you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/franchise" className="btn-primary">
                Become a Franchisee
              </Link>
              <Link href="/contact" className="btn-secondary">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
