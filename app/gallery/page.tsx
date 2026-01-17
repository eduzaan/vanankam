'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import HeroBanner from '@/components/ui/HeroBanner'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { ImageWithSkeleton } from '@/components/ui/Skeleton'

const galleryCategories = ['All', 'Outlets', 'Beverages', 'Events', 'Team', 'Kulhads', 'Products']

const galleryImages = [
  { id: 1, category: 'Outlets', title: 'Mumbai Flagship Store', location: 'Andheri West', image: '/images/OIP.jpg' },
  { id: 2, category: 'Beverages', title: 'Masala Chai', description: 'Our signature kulhad chai', image: '/images/pouring-tea-into-clay-cups.jpg' },
  { id: 3, category: 'Events', title: 'Grand Opening Ceremony', location: 'Delhi', image: '/images/60bb3389-89d4-4b60-9fbc-0ee20fedf4fb.jpg' },
  { id: 4, category: 'Team', title: 'Training Session', description: 'New franchisee training', image: '/images/OIP (2).jpg' },
  { id: 5, category: 'Outlets', title: 'Delhi Connaught Place', location: 'CP, Delhi', image: '/images/OIP (1).jpg' },
  { id: 6, category: 'Beverages', title: 'Cold Coffee Special', description: 'Summer refresher', image: '/images/bff4bd6e-ee5a-422a-adbf-67a70f3637a0.jpg' },
  { id: 7, category: 'Events', title: 'Chai Festival 2023', location: 'Bangalore', image: '/images/img31-27052406060161.jpg' },
  { id: 8, category: 'Team', title: 'Store Team Chennai', description: 'Our dedicated staff', image: '/images/OIP (2).jpg' },
  { id: 9, category: 'Outlets', title: 'Bangalore Koramangala', location: 'Bangalore', image: '/images/pexels-thel0stkidd-2149128959-31141291.jpg' },
  { id: 10, category: 'Kulhads', title: 'Traditional Kulhads', description: 'Eco-friendly clay cups', image: '/images/pouring-tea-into-clay-cups.jpg' },
  { id: 11, category: 'Events', title: 'Customer Appreciation Day', location: 'Mumbai', image: '/images/60bb3389-89d4-4b60-9fbc-0ee20fedf4fb.jpg' },
  { id: 12, category: 'Outlets', title: 'Pune Store', location: 'FC Road, Pune', image: '/images/OIP.jpg' },
  { id: 13, category: 'Beverages', title: 'Elaichi Chai', description: 'Cardamom delight', image: '/images/pexels-pitamaas-575428118-16942970.jpg' },
  { id: 14, category: 'Team', title: 'Franchise Partner Meet', description: 'Annual gathering', image: '/images/OIP (2).jpg' },
  { id: 15, category: 'Kulhads', title: 'Fresh Kulhad Collection', description: 'Ready to serve', image: '/images/pouring-tea-into-clay-cups.jpg' },
  // Product Images
  { id: 16, category: 'Products', title: 'Aloo Tikki Burger', description: 'Crispy potato patty with spices', image: '/images/aloo-tikki-burger-0.1-09102505501667.png' },
  { id: 17, category: 'Products', title: 'Vegetable Sub', description: 'Fresh veggies in soft bread', image: '/images/vegetable-sub-0.2--09102505515145.png' },
  { id: 18, category: 'Products', title: 'Vegetable Wrap', description: 'Healthy wrap with garden fresh veggies', image: '/images/vegetable-wrap-0.1-09102505562673.png' },
]

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  const filteredImages = activeCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory)

  const currentImageIndex = selectedImage !== null 
    ? filteredImages.findIndex(img => img.id === selectedImage)
    : -1

  const goToNext = () => {
    if (currentImageIndex < filteredImages.length - 1) {
      setSelectedImage(filteredImages[currentImageIndex + 1].id)
    }
  }

  const goToPrev = () => {
    if (currentImageIndex > 0) {
      setSelectedImage(filteredImages[currentImageIndex - 1].id)
    }
  }

  return (
    <>
      <HeroBanner
        images={[
          '/images/60bb3389-89d4-4b60-9fbc-0ee20fedf4fb.jpg',
          '/images/OIP.jpg',
          '/images/pexels-thel0stkidd-2149128959-31141291.jpg',
          '/images/pouring-tea-into-clay-cups.jpg',
        ]}
        title={<>Our <span className="text-accent">Gallery</span></>}
        description="A visual journey through the Vanankam experience - our outlets, beverages, events, and the amazing people who make it all possible"
      />

      {/* Gallery Section */}
      <section ref={ref} className="py-20 gradient-bg">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {galleryCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  activeCategory === category
                    ? 'bg-accent text-primary-dark shadow-lg scale-105'
                    : 'bg-white text-primary-dark hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Gallery Grid */}
          <motion.div
            layout
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            <AnimatePresence>
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group"
                  onClick={() => setSelectedImage(image.id)}
                >
                  <div className="relative w-full h-full bg-gray-200 rounded-xl overflow-hidden">
                    <ImageWithSkeleton
                      src={image.image}
                      alt={image.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-primary-dark/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="text-center text-white p-4">
                      <p className="font-heading font-bold text-lg mb-1">{image.title}</p>
                      <p className="text-sm text-accent">{image.category}</p>
                      {image.location && <p className="text-xs mt-1">{image.location}</p>}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No images found in this category</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-white hover:text-accent transition-colors z-10"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>

            {/* Navigation Buttons */}
            {currentImageIndex > 0 && (
              <button
                className="absolute left-4 text-white hover:text-accent transition-colors z-10"
                onClick={(e) => { e.stopPropagation(); goToPrev() }}
              >
                <ChevronLeft size={48} />
              </button>
            )}

            {currentImageIndex < filteredImages.length - 1 && (
              <button
                className="absolute right-4 text-white hover:text-accent transition-colors z-10"
                onClick={(e) => { e.stopPropagation(); goToNext() }}
              >
                <ChevronRight size={48} />
              </button>
            )}

            {/* Image */}
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="max-w-4xl max-h-[80vh] w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl flex flex-col items-center justify-center p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-full flex flex-col">
                <div className="relative flex-1 rounded-lg overflow-hidden mb-4">
                  <Image
                    src={filteredImages[currentImageIndex]?.image || ''}
                    alt={filteredImages[currentImageIndex]?.title || ''}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="text-center text-white">
                  <h2 className="text-3xl font-heading font-bold mb-2">
                    {filteredImages[currentImageIndex]?.title}
                  </h2>
                  {filteredImages[currentImageIndex]?.description && (
                    <p className="text-gray-300 mb-2">{filteredImages[currentImageIndex].description}</p>
                  )}
                  {filteredImages[currentImageIndex]?.location && (
                    <p className="text-accent">{filteredImages[currentImageIndex].location}</p>
                  )}
                </div>
              </div>
            </motion.div>

            {/* Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm">
              {currentImageIndex + 1} / {filteredImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
