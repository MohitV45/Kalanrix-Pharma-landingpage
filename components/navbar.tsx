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
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = ['Home', 'Abouts us', 'Products', 'Careers', 'Contacts us']

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-700 flex justify-center ${
      scrolled ? 'py-4' : 'py-8'
    }`}>
      <motion.div 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`w-full max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between transition-all duration-700 ease-in-out ${
          scrolled 
            ? 'bg-slate-900/90 backdrop-blur-xl border border-white/10 rounded-full py-2.5 px-3 shadow-[0_20px_50px_rgba(0,0,0,0.3)] max-w-6xl' 
            : 'max-w-7xl'
        }`}
      >
        {/* Left: Logo */}
        <div className="flex items-center group cursor-pointer">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center"
          >
            <div className={`relative transition-all duration-500 ${scrolled ? 'h-10 w-24' : 'h-14 w-32'}`}>
              <Image 
                src="/logo.png" 
                alt="Kalanrix Logo" 
                fill
                className="object-contain brightness-0 invert"
                priority
              />
            </div>
          </motion.div>
        </div>


        {/* Center: Links */}
        <div className={`hidden lg:flex items-center gap-1 p-1 rounded-full transition-all duration-500 ${
          scrolled ? 'bg-white/5' : 'bg-white/10 backdrop-blur-md border border-white/20'
        }`}>
          {links.map((link) => (
            <a 
              key={link} 
              href={`#${link.toLowerCase().replace(/ /g, '-')}`}
              onClick={() => setActiveLink(link)}
              className="relative px-5 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-[0.15em] transition-all duration-300"
            >
              <span className={`relative z-10 transition-colors duration-300 ${
                activeLink === link 
                  ? scrolled ? 'text-primary' : 'text-slate-900'
                  : 'text-white/70 hover:text-white'
              }`}>
                {link}
              </span>
              {activeLink === link && (
                <motion.div
                  layoutId="nav-active"
                  className={`absolute inset-0 rounded-full ${
                    scrolled ? 'bg-white/10' : 'bg-white'
                  }`}
                  transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                />
              )}
            </a>
          ))}
        </div>
        
        {/* Right: CTA Button */}
        <div className="hidden lg:block">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-[10px] uppercase tracking-widest transition-all duration-500 ${
              scrolled
                ? 'bg-primary text-white shadow-lg shadow-primary/20 hover:shadow-primary/40'
                : 'bg-white text-slate-900 shadow-xl'
            }`}
          >
            <PhoneCall className="w-3.5 h-3.5" />
            Connect Now
          </motion.button>
        </div>

        {/* Mobile menu toggle placeholder */}
        <div className="lg:hidden flex items-center">
          <div className="w-10 h-10 flex items-center justify-center text-white">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </div>
        </div>
      </motion.div>
    </nav>
  )
}
