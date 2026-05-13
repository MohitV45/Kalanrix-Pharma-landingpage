'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { PhoneCall } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeLink, setActiveLink] = useState('Home')

  const links = ['Home', 'Abouts us', 'Products', 'Careers', 'Contacts us']

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      // Manual scroll spy for better reliability
      const scrollPosition = window.scrollY + 200 // Offset for navbar

      links.forEach(link => {
        const id = link.toLowerCase().replace(/ /g, '-')
        const element = document.getElementById(id)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveLink(link)
          }
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    // Initial check
    handleScroll()
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className="fixed top-0 w-full z-50 transition-all duration-700 flex justify-center will-change-transform will-change-background py-8">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-7xl mx-auto flex items-center justify-between transition-all duration-700 ease-in-out py-6 px-10 border border-slate-200 rounded-full bg-slate-50/95 backdrop-blur-md shadow-lg"
      >
        {/* Left: Logo */}
        <a href="#home" className="flex items-center group cursor-pointer" onClick={() => setActiveLink('Home')}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center"
          >
            <div className="relative transition-all duration-500 h-20 w-60">
              <Image
                src="/logo.png"
                alt="Kalanrix"
                fill
                className="object-contain transition-all duration-500"
                priority
              />
            </div>
          </motion.div>
        </a>


        {/* Center: Links */}
        <div className="hidden lg:flex items-center gap-2 p-1.5 rounded-full transition-all duration-500 bg-primary/10">
          {links.map((link) => (
            <a 
              key={link} 
              href={`#${link.toLowerCase().replace(/ /g, '-')}`}
              onClick={() => setActiveLink(link)}
              className="relative px-6 py-3.5 rounded-full text-[13px] font-bold uppercase tracking-[0.15em] transition-all duration-300"
            >
              <span className={`relative z-10 transition-colors duration-300 ${activeLink === link ? 'text-primary' : 'text-slate-600 hover:text-primary'}`}>
                {link}
              </span>
              {activeLink === link && (
                <motion.div
                  layoutId="nav-active"
                  className="absolute inset-0 rounded-full bg-primary/20"
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
            className="flex items-center gap-3 px-8 py-3.5 rounded-full font-bold text-[12px] uppercase tracking-widest transition-all duration-500 bg-primary text-white shadow-lg shadow-primary/20"
          >
            <PhoneCall className="w-4 h-4" />
            Connect Us
          </motion.a>
        </div>

        {/* Mobile menu toggle */}
        <button 
          className="lg:hidden flex items-center w-10 h-10 justify-center text-slate-900 bg-transparent border-none cursor-pointer"
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
