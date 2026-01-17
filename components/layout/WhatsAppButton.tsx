'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { SITE_CONFIG } from '@/lib/constants'

export default function WhatsAppButton() {
  return (
    <motion.a
      href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 md:bottom-6 right-4 md:right-6 w-16 h-16 md:w-14 md:h-14 rounded-full bg-green-500 text-white shadow-2xl flex items-center justify-center z-50 hover:bg-green-600 active:scale-90 transition-all duration-300"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.9 }}
      title="Contact us on WhatsApp"
    >
      <Image 
        src="/images/whatsapp-icon.png"
        alt="WhatsApp"
        width={32}
        height={32}
        className="md:w-7 md:h-7"
      />
    </motion.a>
  )
}
