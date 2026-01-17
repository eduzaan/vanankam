'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import HeroBanner from '@/components/ui/HeroBanner'
import { Search, MapPin, Phone, Clock, Navigation } from 'lucide-react'

const states = [
  'All States', 'Maharashtra', 'Delhi', 'Karnataka', 'Tamil Nadu', 'Gujarat',
  'Rajasthan', 'Uttar Pradesh', 'Madhya Pradesh', 'West Bengal', 'Punjab', 'Telangana'
]

const stores = [
  {
    id: 1,
    name: 'Vanankam - Andheri West',
    address: 'Shop No. 15, Link Road, Andheri West, Mumbai - 400058',
    state: 'Maharashtra',
    city: 'Mumbai',
    phone: '+91 98765 43210',
    hours: '7:00 AM - 11:00 PM',
    coordinates: { lat: 19.1364, lng: 72.8296 },
  },
  {
    id: 2,
    name: 'Vanankam - Connaught Place',
    address: 'Block B, Inner Circle, Connaught Place, New Delhi - 110001',
    state: 'Delhi',
    city: 'New Delhi',
    phone: '+91 98765 43211',
    hours: '8:00 AM - 10:00 PM',
    coordinates: { lat: 28.6315, lng: 77.2167 },
  },
  {
    id: 3,
    name: 'Vanankam - Koramangala',
    address: '80 Feet Road, 5th Block, Koramangala, Bangalore - 560034',
    state: 'Karnataka',
    city: 'Bangalore',
    phone: '+91 98765 43212',
    hours: '7:00 AM - 11:00 PM',
    coordinates: { lat: 12.9352, lng: 77.6245 },
  },
  {
    id: 4,
    name: 'Vanankam - T Nagar',
    address: 'Usman Road, T Nagar, Chennai - 600017',
    state: 'Tamil Nadu',
    city: 'Chennai',
    phone: '+91 98765 43213',
    hours: '6:00 AM - 10:00 PM',
    coordinates: { lat: 13.0418, lng: 80.2341 },
  },
  {
    id: 5,
    name: 'Vanankam - CG Road',
    address: 'CG Road, Navrangpura, Ahmedabad - 380009',
    state: 'Gujarat',
    city: 'Ahmedabad',
    phone: '+91 98765 43214',
    hours: '7:00 AM - 10:00 PM',
    coordinates: { lat: 23.0339, lng: 72.5619 },
  },
  {
    id: 6,
    name: 'Vanankam - MI Road',
    address: 'MI Road, Near Panch Batti, Jaipur - 302001',
    state: 'Rajasthan',
    city: 'Jaipur',
    phone: '+91 98765 43215',
    hours: '7:00 AM - 11:00 PM',
    coordinates: { lat: 26.9157, lng: 75.8064 },
  },
  {
    id: 7,
    name: 'Vanankam - Gomti Nagar',
    address: 'Vipin Khand, Gomti Nagar, Lucknow - 226010',
    state: 'Uttar Pradesh',
    city: 'Lucknow',
    phone: '+91 98765 43216',
    hours: '7:00 AM - 10:00 PM',
    coordinates: { lat: 26.8467, lng: 80.9462 },
  },
  {
    id: 8,
    name: 'Vanankam - New Market',
    address: 'New Market Area, Bhopal - 462001',
    state: 'Madhya Pradesh',
    city: 'Bhopal',
    phone: '+91 98765 43217',
    hours: '7:00 AM - 10:00 PM',
    coordinates: { lat: 23.2599, lng: 77.4126 },
  },
  {
    id: 9,
    name: 'Vanankam - Park Street',
    address: 'Park Street, Near Forum Mall, Kolkata - 700016',
    state: 'West Bengal',
    city: 'Kolkata',
    phone: '+91 98765 43218',
    hours: '7:00 AM - 11:00 PM',
    coordinates: { lat: 22.5626, lng: 88.3630 },
  },
  {
    id: 10,
    name: 'Vanankam - Model Town',
    address: 'Model Town, Ludhiana - 141002',
    state: 'Punjab',
    city: 'Ludhiana',
    phone: '+91 98765 43219',
    hours: '7:00 AM - 10:00 PM',
    coordinates: { lat: 30.9010, lng: 75.8573 },
  },
  {
    id: 11,
    name: 'Vanankam - Hitech City',
    address: 'HITEC City, Madhapur, Hyderabad - 500081',
    state: 'Telangana',
    city: 'Hyderabad',
    phone: '+91 98765 43220',
    hours: '7:00 AM - 11:00 PM',
    coordinates: { lat: 17.4485, lng: 78.3908 },
  },
  {
    id: 12,
    name: 'Vanankam - FC Road',
    address: 'Fergusson College Road, Pune - 411004',
    state: 'Maharashtra',
    city: 'Pune',
    phone: '+91 98765 43221',
    hours: '7:00 AM - 10:00 PM',
    coordinates: { lat: 18.5204, lng: 73.8567 },
  },
]

export default function StoreLocatorPage() {
  const [selectedState, setSelectedState] = useState('All States')
  const [searchQuery, setSearchQuery] = useState('')
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  const filteredStores = stores.filter(store => {
    const matchesState = selectedState === 'All States' || store.state === selectedState
    const matchesSearch = store.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         store.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         store.address.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesState && matchesSearch
  })

  return (
    <>
      <HeroBanner
        images={[
          '/images/OIP.jpg',
          '/images/OIP (1).jpg',
          '/images/pexels-thel0stkidd-2149128959-31141291.jpg',
        ]}
        title={<>Store <span className="text-accent">Locator</span></>}
        description="Find a Vanankam outlet near you - 500+ stores across 200+ cities in India and beyond"
      />

      {/* Store Locator Section */}
      <section ref={ref} className="py-20 gradient-bg">
        <div className="container mx-auto px-4">
          {/* Search & Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="bg-white rounded-2xl shadow-xl p-6 mb-12"
          >
            <div className="grid md:grid-cols-3 gap-4">
              {/* Search Input */}
              <div className="md:col-span-2 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search by city, area, or store name..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>

              {/* State Filter */}
              <select
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                className="px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent bg-white"
              >
                {states.map((state) => (
                  <option key={state} value={state}>{state}</option>
                ))}
              </select>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              className="bg-gray-200 rounded-2xl h-[500px] lg:h-full min-h-[400px] flex items-center justify-center sticky top-24"
            >
              <div className="text-center text-gray-500">
                <MapPin size={48} className="mx-auto mb-4" />
                <p className="text-lg font-semibold">Interactive Map</p>
                <p className="text-sm">(Google Maps Integration)</p>
              </div>
            </motion.div>

            {/* Store List */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              className="space-y-4 max-h-[600px] overflow-y-auto pr-4"
            >
              <p className="text-primary font-semibold mb-4">
                {filteredStores.length} store{filteredStores.length !== 1 ? 's' : ''} found
              </p>

              {filteredStores.map((store, index) => (
                <motion.div
                  key={store.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <h3 className="text-lg font-heading font-bold text-primary-dark mb-3">
                    {store.name}
                  </h3>

                  <div className="space-y-2 text-sm text-primary">
                    <div className="flex items-start gap-2">
                      <MapPin size={16} className="text-accent mt-1 flex-shrink-0" />
                      <span>{store.address}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone size={16} className="text-accent flex-shrink-0" />
                      <span>{store.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={16} className="text-accent flex-shrink-0" />
                      <span>{store.hours}</span>
                    </div>
                  </div>

                  <div className="mt-4 flex gap-3">
                    <a
                      href={`https://www.google.com/maps/dir/?api=1&destination=${store.coordinates.lat},${store.coordinates.lng}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-accent text-primary-dark rounded-lg font-semibold text-sm hover:bg-accent-dark transition-colors"
                    >
                      <Navigation size={16} />
                      Get Directions
                    </a>
                    <a
                      href={`tel:${store.phone}`}
                      className="flex items-center gap-2 px-4 py-2 bg-primary-dark text-white rounded-lg font-semibold text-sm hover:bg-primary transition-colors"
                    >
                      <Phone size={16} />
                      Call
                    </a>
                  </div>
                </motion.div>
              ))}

              {filteredStores.length === 0 && (
                <div className="text-center py-12">
                  <MapPin size={48} className="mx-auto text-gray-300 mb-4" />
                  <p className="text-gray-500">No stores found matching your criteria</p>
                  <p className="text-sm text-gray-400 mt-2">Try adjusting your search or filters</p>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
