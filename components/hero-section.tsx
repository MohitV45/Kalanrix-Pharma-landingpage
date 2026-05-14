'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ArrowRight, ChevronLeft, ChevronRight, Download } from 'lucide-react'

const slides = [
  {
    badge: "KALANRIX PHARMA",
    headline: "HEALTH IS\nLIKE MONEY",
    subheadline: "We never have a true idea of its value until we lose it. Protect your future with Kalanrix.",
    image: "/slide1.jpeg",
  },
  {
    badge: "OUR PHILOSOPHY",
    headline: "THE FIRST\nWEALTH IS HEALTH",
    subheadline: "A healthy outside starts from the inside. We are dedicated to delivering high-quality healthcare solutions.",
    image: "/slide2.jpeg",
  },
  {
    badge: "PATIENT SAFETY",
    headline: "TAKE ONLY\nPRESCRIBED DRUGS",
    subheadline: "Your safety is our priority. We adhere to the highest standards of safety and efficacy.",
    image: "/slide3.jpeg",
  }
]

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext()
    }, 6000)
    return () => clearInterval(timer)
  }, [currentSlide])

  const handleNext = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
      setIsTransitioning(false)
    }, 300) // Reduced transition time for speed
  }

  const handlePrev = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
      setIsTransitioning(false)
    }, 300)
  }

  const goToSlide = (index: number) => {
    if (index === currentSlide) return
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentSlide(index)
      setIsTransitioning(false)
    }, 300)
  }

  return (
    <section id="home" className="relative w-full h-screen min-h-[700px] overflow-hidden bg-slate-900 mt-0 pt-0">
      {/* Background Image - Instant Render for LCP */}
      <div className="absolute inset-0">
        <Image 
          src={slides[currentSlide].image}
          alt="Hero Background"
          fill
          priority
          quality={60}
          className={`object-cover transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/60 to-transparent"></div>

      <div className="relative h-full max-w-7xl mx-auto px-6 lg:px-8 flex flex-col justify-center">
        <div className="max-w-2xl mt-24 text-left">
          {/* Instant Content - Removed reveal animations for above-the-fold speed */}
          <div className="flex items-center gap-4 mb-6">
            <span className="text-sky-400 font-bold tracking-[0.3em] text-xs uppercase">
              {slides[currentSlide].badge}
            </span>
            <div className="h-px w-12 bg-sky-400/50"></div>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-[5.5rem] font-bold text-white mb-6 leading-[1] whitespace-pre-line tracking-tight uppercase">
            {slides[currentSlide].headline}
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-10 max-w-xl font-light">
            {slides[currentSlide].subheadline}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#products" className="group relative overflow-hidden bg-slate-100 text-slate-900 px-10 py-5 font-bold rounded-full shadow-2xl transition-all duration-300 flex items-center justify-center gap-3 text-xs uppercase tracking-[0.2em] w-fit hover:bg-white hover:scale-105">
              Explore Our Products <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a 
              href="/product-catalogue.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group relative overflow-hidden bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-5 font-bold rounded-full shadow-2xl transition-all duration-300 flex items-center justify-center gap-3 text-xs uppercase tracking-[0.2em] w-fit hover:bg-white/20"
            >
              Product Catalogue <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Controls Area */}
      <div className="absolute bottom-0 left-0 right-0 h-32 max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between z-20">
        <div className="flex items-center gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className="relative h-12 flex items-center group px-2"
            >
              <div className={`h-[2px] transition-all duration-300 rounded-full ${
                currentSlide === index ? 'w-10 bg-sky-400' : 'w-6 bg-white/20'
              }`} />
            </button>
          ))}
        </div>

        <div className="flex gap-6">
          <button 
            onClick={handlePrev}
            aria-label="Previous slide"
            className="group w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-all duration-300 backdrop-blur-md"
          >
            <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
          </button>
          <button 
            onClick={handleNext}
            aria-label="Next slide"
            className="group w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-all duration-300 backdrop-blur-md"
          >
            <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  )
}
