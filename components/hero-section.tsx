'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
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
      <AnimatePresence mode="wait">
        <motion.div 
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${slides[currentSlide].image}')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/60 to-transparent"></div>
          
          <div className="relative h-full max-w-7xl mx-auto px-6 lg:px-8 flex flex-col justify-center">
            <div className="max-w-2xl mt-24 text-left">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="flex items-center gap-4 mb-6"
              >
                <span className="text-sky-400 font-bold tracking-[0.3em] text-xs uppercase">
                  {slides[currentSlide].badge}
                </span>
                <div className="h-px w-12 bg-sky-400/50"></div>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }}
                className="text-5xl md:text-6xl lg:text-[5.5rem] font-bold text-white mb-6 leading-[1] whitespace-pre-line tracking-tight uppercase"
              >
                {slides[currentSlide].headline}
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="text-lg md:text-xl text-slate-300 leading-relaxed mb-10 max-w-xl font-light"
              >
                {slides[currentSlide].subheadline}
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <a href="#products" className="group relative overflow-hidden bg-primary text-white px-10 py-5 font-bold rounded-full shadow-2xl transition-all duration-500 flex items-center justify-center gap-3 text-xs uppercase tracking-[0.2em] w-fit">
                  <span className="relative z-10 flex items-center gap-2">
                    Explore Our Products <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Bottom Controls Area */}
      <div className="absolute bottom-0 left-0 right-0 h-32 max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between z-20">
        <div className="flex items-center gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className="relative h-12 flex items-center group px-2"
            >
              <div className={`h-[2px] transition-all duration-500 rounded-full ${
                currentSlide === index ? 'w-10 bg-sky-400 shadow-[0_0_10px_rgba(56,189,248,0.5)]' : 'w-6 bg-white/20 group-hover:bg-white/50'
              }`} />
            </button>
          ))}
        </div>

        <div className="flex gap-6">
          <button 
            onClick={prevSlide}
            className="group w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300 backdrop-blur-md"
          >
            <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
          </button>
          <button 
            onClick={nextSlide}
            className="group w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300 backdrop-blur-md"
          >
            <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  )
}
