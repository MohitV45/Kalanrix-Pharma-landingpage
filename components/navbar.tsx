'use client'

import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex items-center cursor-pointer">
          <img 
            src="/logo.png" 
            alt="KalanRix Pharma Private Limited" 
            className={`h-12 md:h-14 w-auto object-contain transition-all duration-300 ${!scrolled ? 'brightness-0 invert' : ''}`}
          />
        </div>

        {/* Center: Links */}
        <div className={`hidden lg:flex items-center gap-2 rounded-full px-3 py-2 transition-colors ${
          scrolled ? '' : 'bg-white/10 backdrop-blur-md border border-white/20'
        }`}>
          {['Home', 'Abouts us', 'Products', 'Careers', 'Contacts us'].map((link, index) => (
            <a 
              key={link} 
              href={`#${link.toLowerCase().replace(/ /g, '-')}`} 
              className={`px-6 py-3 rounded-full text-xs font-bold uppercase tracking-[0.1em] transition-all ${
                index === 0 && !scrolled 
                  ? 'bg-white text-secondary' 
                  : scrolled
                    ? 'text-slate-600 hover:text-primary hover:bg-slate-100'
                    : 'text-white hover:bg-white/20'
              }`}
            >
              {link}
            </a>
          ))}
        </div>
        
        {/* Right spacing placeholder */}
        <div className="hidden lg:block w-48"></div>
      </div>
    </nav>
  )
}
