import type { Metadata } from 'next'
import HeroSection from '@/components/home/HeroSection'
import StatsSection from '@/components/home/StatsSection'
import FeaturesSection from '@/components/home/FeaturesSection'
import MenuHighlights from '@/components/home/MenuHighlights'
import MissionVision from '@/components/home/MissionVision'
import BenefitsShowcase from '@/components/home/BenefitsShowcase'
import TestimonialsSection from '@/components/home/TestimonialsSection'
import FAQSection from '@/components/home/FAQSection'
import NewsletterSection from '@/components/home/NewsletterSection'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Vanankam — Premium Kulhad Chai Franchise | Yaar Mera Kulhad',
  description: "Join India's fastest growing kulhad chai franchise. 500+ outlets across 200+ cities, 26+ states. Experience authentic kulhad chai with modern approach. Low investment, high ROI franchise opportunities.",
  keywords: ['kulhad chai franchise', 'tea franchise India', 'chai business', 'franchise opportunity', 'Vanankam', 'best tea franchise', 'low investment franchise'],
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <MenuHighlights />
      <MissionVision />
      <BenefitsShowcase />
      <TestimonialsSection />
      <NewsletterSection />
      <FAQSection />
    </>
  )
}
