'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { PhoneCall } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeLink, setActiveLink] = useState('Home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = ['Home', 'Abouts us', 'Products', 'Careers', 'Contacts us']

  return (
    <nav className="fixed top-0 w-full z-50 transition-all duration-700 flex justify-center will-change-transform will-change-background py-8">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`w-full max-w-7xl mx-auto flex items-center justify-between transition-all duration-700 ease-in-out py-4 px-8 border rounded-full ${
          scrolled 
            ? 'bg-slate-900/90 backdrop-blur-xl border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.3)]' 
            : 'bg-white/10 backdrop-blur-md border-white/20 shadow-lg'
        }`}
      >
        {/* Left: Logo */}
        <div className="flex items-center group cursor-pointer">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center"
          >
            <div className="relative transition-all duration-500 h-16 w-48">
              <Image
                src="/logo.png"
                alt="Kalanrix"
                fill
                className="object-contain transition-all duration-500 brightness-0 invert"
                priority
              />
            </div>
          </motion.div>
        </div>


        {/* Center: Links */}
        <div className="hidden lg:flex items-center gap-1 p-1 rounded-full transition-all duration-500 bg-white/5">
          {links.map((link) => (
            <a 
              key={link} 
              href={`#${link.toLowerCase().replace(/ /g, '-')}`}
              onClick={() => setActiveLink(link)}
              className="relative px-5 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-[0.15em] transition-all duration-300"
            >
              <span className="relative z-10 transition-colors duration-300 text-white">
                {link}
              </span>
              {activeLink === link && (
                <motion.div
                  layoutId="nav-active"
                  className={`absolute inset-0 rounded-full ${
                    scrolled ? 'bg-white/10' : 'bg-white/20'
                  }`}
                  transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                />
              )}
            </a>
          ))}
        </div>
        
        {/* Right: CTA Button */}
        <div className="hidden lg:block">
          <motion.a
            href="#contacts-us"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Connect with us"
            className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-[10px] uppercase tracking-widest transition-all duration-500 ${
              scrolled
                ? 'bg-primary text-white shadow-lg shadow-primary/20 hover:shadow-primary/40'
                : 'bg-white/10 backdrop-blur-md text-white border border-white/20'
            }`}
          >
            <PhoneCall className="w-3.5 h-3.5" />
            Connect Us
          </motion.a>
        </div>

        {/* Mobile menu toggle */}
        <button 
          className="lg:hidden flex items-center w-10 h-10 justify-center text-white bg-transparent border-none cursor-pointer"
          aria-label="Open navigation menu"
        >
          <div className="w-10 h-10 flex items-center justify-center">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </div>
        </button>
      </motion.div>
    </nav>
  )
}
