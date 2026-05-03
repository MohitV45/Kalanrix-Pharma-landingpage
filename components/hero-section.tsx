'use client'

import { useState, useEffect } from 'react'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'

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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)

  return (
    <section id="home" className="relative w-full h-screen min-h-[700px] overflow-hidden bg-slate-900 mt-0 pt-0">
      {/* Slider Container */}
      <div 
        className="flex h-full w-full transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full h-full flex-shrink-0 relative">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('${slide.image}')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/50 to-transparent"></div>
            
            <div className="relative h-full max-w-7xl mx-auto px-6 lg:px-8 flex flex-col justify-center">
              <div className="max-w-2xl mt-24 animate-fade-in text-left">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-[2px] w-8 bg-secondary"></div>
                  <span className="text-secondary font-bold tracking-widest text-sm uppercase">
                    {slide.badge}
                  </span>
                </div>
                
                <h1 className="text-5xl md:text-6xl lg:text-[5rem] font-bold text-white mb-6 leading-[1.1] whitespace-pre-line tracking-tight uppercase">
                  {slide.headline}
                </h1>
                
                <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-10 max-w-xl">
                  {slide.subheadline}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="#products" className="bg-primary hover:bg-primary/90 text-white px-8 py-4 font-bold rounded transition-colors flex items-center justify-center gap-2 text-sm uppercase tracking-wider w-fit">
                    View Products <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Controls Area */}
      <div className="absolute bottom-0 left-0 right-0 h-32 max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between z-20">
        <div className="flex items-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-[3px] transition-all duration-300 ${
                currentSlide === index ? 'w-8 bg-secondary' : 'w-4 bg-white/30 hover:bg-white/60'
              }`}
            />
          ))}
        </div>

        <div className="flex gap-4">
          <button 
            onClick={prevSlide}
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors backdrop-blur-sm"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button 
            onClick={nextSlide}
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors backdrop-blur-sm"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
