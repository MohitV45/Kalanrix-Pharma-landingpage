'use client'

import Navbar from '@/components/navbar'
import HeroSection from '@/components/hero-section'
import AboutSection from '@/components/about-section'
import ProductsSection from '@/components/products-section'
import FeaturesSection from '@/components/features-section'
import CredentialsSection from '@/components/credentials-section'
import CareersSection from '@/components/careers-section'
import ContactSection from '@/components/contact-section'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="w-full bg-white min-h-screen bg-noise">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <FeaturesSection />
      <CredentialsSection />
      <CareersSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
