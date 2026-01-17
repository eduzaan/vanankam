'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import HeroBanner from '@/components/ui/HeroBanner'
import { ShoppingCart, Star, Filter } from 'lucide-react'

const categories = ['All', 'Tea', 'Accessories', 'Gift Sets', 'Merchandise']

const products = [
  {
    id: 1,
    name: 'Premium Assam Tea (250g)',
    category: 'Tea',
    price: 299,
    originalPrice: 399,
    rating: 4.8,
    reviews: 124,
    description: 'Hand-picked premium Assam tea leaves with rich malty flavor',
    bestseller: true,
    inStock: true,
  },
  {
    id: 2,
    name: 'Masala Chai Blend (250g)',
    category: 'Tea',
    price: 349,
    originalPrice: 449,
    rating: 4.9,
    reviews: 256,
    description: 'Perfect blend of spices for authentic masala chai - cardamom, ginger, cinnamon',
    bestseller: true,
    inStock: true,
  },
  {
    id: 3,
    name: 'Ceramic Kulhad Set (Pack of 6)',
    category: 'Accessories',
    price: 199,
    originalPrice: 299,
    rating: 4.7,
    reviews: 89,
    description: 'Traditional kulhad-inspired ceramic cups for authentic chai experience',
    bestseller: false,
    inStock: true,
  },
  {
    id: 4,
    name: 'Darjeeling First Flush (100g)',
    category: 'Tea',
    price: 599,
    originalPrice: 799,
    rating: 4.9,
    reviews: 67,
    description: 'Premium first flush Darjeeling tea - light, floral and aromatic',
    bestseller: false,
    inStock: true,
  },
  {
    id: 5,
    name: 'Chai Lover Gift Box',
    category: 'Gift Sets',
    price: 999,
    originalPrice: 1299,
    rating: 4.8,
    reviews: 45,
    description: 'Complete gift set with 3 tea varieties, kulhads, and Vanankam merchandise',
    bestseller: true,
    inStock: true,
  },
  {
    id: 6,
    name: 'Vanankam Branded T-Shirt',
    category: 'Merchandise',
    price: 499,
    originalPrice: 699,
    rating: 4.6,
    reviews: 34,
    description: 'Premium cotton t-shirt with Vanankam logo - comfortable and stylish',
    bestseller: false,
    inStock: true,
  },
  {
    id: 7,
    name: 'Elaichi (Cardamom) Tea (250g)',
    category: 'Tea',
    price: 329,
    originalPrice: 429,
    rating: 4.7,
    reviews: 112,
    description: 'Cardamom-infused premium tea for aromatic experience',
    bestseller: false,
    inStock: true,
  },
  {
    id: 8,
    name: 'Stainless Steel Tea Infuser Set',
    category: 'Accessories',
    price: 249,
    originalPrice: 349,
    rating: 4.5,
    reviews: 56,
    description: 'Premium stainless steel tea infuser with stand',
    bestseller: false,
    inStock: true,
  },
  {
    id: 9,
    name: 'Ginger Tea (250g)',
    category: 'Tea',
    price: 299,
    originalPrice: 399,
    rating: 4.6,
    reviews: 98,
    description: 'Natural ginger-infused tea for health and warmth',
    bestseller: false,
    inStock: true,
  },
  {
    id: 10,
    name: 'Executive Gift Hamper',
    category: 'Gift Sets',
    price: 1499,
    originalPrice: 1999,
    rating: 4.9,
    reviews: 28,
    description: 'Premium gift hamper with 5 tea varieties, accessories, and branded items',
    bestseller: false,
    inStock: true,
  },
  {
    id: 11,
    name: 'Kulhad Chai Mug',
    category: 'Merchandise',
    price: 299,
    originalPrice: 399,
    rating: 4.7,
    reviews: 67,
    description: 'Ceramic mug designed like traditional kulhad',
    bestseller: true,
    inStock: true,
  },
  {
    id: 12,
    name: 'Tulsi (Basil) Tea (250g)',
    category: 'Tea',
    price: 349,
    originalPrice: 449,
    rating: 4.8,
    reviews: 78,
    description: 'Holy basil infused immunity-boosting herbal tea',
    bestseller: false,
    inStock: true,
  },
  {
    id: 13,
    name: 'Tea Storage Jar Set (3 pieces)',
    category: 'Accessories',
    price: 399,
    originalPrice: 549,
    rating: 4.6,
    reviews: 42,
    description: 'Airtight glass jars for storing different tea varieties',
    bestseller: false,
    inStock: true,
  },
  {
    id: 14,
    name: 'Vanankam Cap',
    category: 'Merchandise',
    price: 399,
    originalPrice: 499,
    rating: 4.5,
    reviews: 23,
    description: 'Comfortable cotton cap with embroidered Vanankam logo',
    bestseller: false,
    inStock: true,
  },
  {
    id: 15,
    name: 'Festival Gift Pack',
    category: 'Gift Sets',
    price: 799,
    originalPrice: 999,
    rating: 4.8,
    reviews: 56,
    description: 'Special festive pack with 4 tea blends and decorative kulhads',
    bestseller: true,
    inStock: true,
  },
]

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [sortBy, setSortBy] = useState('popular')
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  const filteredProducts = products.filter(
    product => activeCategory === 'All' || product.category === activeCategory
  )

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price
      case 'price-high':
        return b.price - a.price
      case 'rating':
        return b.rating - a.rating
      default:
        return b.reviews - a.reviews
    }
  })

  return (
    <>
      <HeroBanner
        images={[
          '/images/bff4bd6e-ee5a-422a-adbf-67a70f3637a0.jpg',
          '/images/pouring-tea-into-clay-cups.jpg',
          '/images/pexels-pitamaas-575428118-16942970.jpg',
        ]}
        title={<>Our <span className="text-accent">Products</span></>}
        description="Bring the Vanankam experience home with our premium tea blends, accessories, and exclusive merchandise"
      />

      {/* Products Section */}
      <section ref={ref} className="py-20 gradient-bg">
        <div className="container mx-auto px-4">
          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12"
          >
            {/* Category Tabs */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-5 py-2 rounded-full font-semibold transition-all ${
                    activeCategory === category
                      ? 'bg-accent text-primary-dark shadow-lg scale-105'
                      : 'bg-white text-primary-dark hover:bg-gray-100'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2">
              <Filter size={20} className="text-primary" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-white"
              >
                <option value="popular">Most Popular</option>
                <option value="rating">Highest Rated</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </motion.div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {sortedProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all group"
              >
                {/* Product Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/images/bff4bd6e-ee5a-422a-adbf-67a70f3637a0.jpg"
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex flex-col gap-2">
                    {product.bestseller && (
                      <span className="bg-accent text-primary-dark text-xs font-bold px-2 py-1 rounded-full">
                        Bestseller
                      </span>
                    )}
                    {product.originalPrice > product.price && (
                      <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                        {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                      </span>
                    )}
                  </div>

                  {/* Quick Add Button */}
                  <button className="absolute bottom-3 right-3 w-10 h-10 rounded-full bg-accent text-primary-dark flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg hover:bg-accent-dark">
                    <ShoppingCart size={18} />
                  </button>
                </div>

                {/* Product Info */}
                <div className="p-4">
                  <span className="text-xs text-accent font-semibold uppercase">
                    {product.category}
                  </span>
                  <h3 className="text-lg font-heading font-bold text-primary-dark mt-1 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-3 line-clamp-2">
                    {product.description}
                  </p>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-1">
                      <Star size={14} className="text-accent fill-accent" />
                      <span className="text-sm font-semibold">{product.rating}</span>
                    </div>
                    <span className="text-xs text-gray-400">({product.reviews} reviews)</span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xl font-bold text-primary-dark">₹{product.price}</span>
                    {product.originalPrice > product.price && (
                      <span className="text-sm text-gray-400 line-through">
                        ₹{product.originalPrice}
                      </span>
                    )}
                  </div>

                  {/* Add to Cart Button */}
                  <button className="w-full bg-accent text-primary-dark py-2 rounded-lg font-semibold hover:bg-accent-dark transition-colors">
                    Add to Cart
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Note Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center max-w-3xl mx-auto"
          >
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-heading font-bold text-primary-dark mb-4">
                Free Shipping & Returns
              </h3>
              <p className="text-primary mb-2">
                Free shipping on orders above ₹500. Easy returns within 7 days.
              </p>
              <p className="text-sm text-gray-500">
                All products are 100% authentic. Contact us for bulk orders and corporate gifting.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
