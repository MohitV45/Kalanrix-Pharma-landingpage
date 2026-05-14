import dynamic from 'next/dynamic'
import Navbar from '@/components/navbar'
import HeroSection from '@/components/hero-section'

const AboutSection = dynamic(() => import('@/components/about-section'), { ssr: true })
const ProductsSection = dynamic(() => import('@/components/products-section'), { ssr: true })
const FeaturesSection = dynamic(() => import('@/components/features-section'), { ssr: true })
const CredentialsSection = dynamic(() => import('@/components/credentials-section'), { ssr: true })
const CareersSection = dynamic(() => import('@/components/careers-section'), { ssr: true })
const ContactSection = dynamic(() => import('@/components/contact-section'), { ssr: true })
const Footer = dynamic(() => import('@/components/footer'), { ssr: true })

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
