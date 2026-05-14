'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { PhoneCall } from 'lucide-react'

export default function Navbar() {
  const [activeLink, setActiveLink] = useState('Home')
  const observer = useRef<IntersectionObserver | null>(null)

  const links = ['Home', 'About us', 'Products', 'Careers', 'Contact us']

  useEffect(() => {
    // Optimized scroll spy using IntersectionObserver
    const options = {
      root: null,
      rootMargin: '-20% 0px -20% 0px', // More lenient margin
      threshold: [0, 0.25, 0.5] // Multiple thresholds for better detection
    }

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id
          // Map section IDs back to navbar link labels
          const linkMap: Record<string, string> = {
            'home': 'Home',
            'about-us': 'About us',
            'products': 'Products',
            'careers': 'Careers',
            'contact-us': 'Contact us'
          }
          if (linkMap[id]) {
            setActiveLink(linkMap[id])
          }
        }
      })
    }

    observer.current = new IntersectionObserver(handleIntersect, options)

    // Wait a bit for dynamic components to mount
    const timeoutId = setTimeout(() => {
      links.forEach(link => {
        const id = link.toLowerCase().replace(/ /g, '-')
        const element = document.getElementById(id)
        if (element) {
          observer.current?.observe(element)
        }
      })
    }, 1000)

    return () => {
      clearTimeout(timeoutId)
      observer.current?.disconnect()
    }
  }, [])

  return (
    <nav className="fixed top-0 w-full z-50 flex justify-center py-4 md:py-8">
      <div className="w-[95%] max-w-7xl mx-auto flex items-center justify-between py-3 md:py-4 px-6 md:px-10 border border-slate-200 rounded-full bg-slate-50/95 backdrop-blur-md shadow-lg">
        {/* Left: Logo - Optimized for LCP and Layout */}
        <a href="#home" className="flex items-center group cursor-pointer" onClick={() => setActiveLink('Home')}>
          <div className="flex items-center">
            <div className="relative h-[40px] w-[180px] md:h-[50px] md:w-[220px]">
              <Image
                src="/logo.png"
                alt="Kalanrix Pharma"
                width={220}
                height={50}
                className="object-contain"
                priority
                quality={60}
                sizes="(max-width: 768px) 180px, 220px"
              />
            </div>
          </div>
        </a>

        {/* Center: Links */}
        <div className="hidden lg:flex items-center gap-1 p-1 rounded-full bg-slate-200/50">
          {links.map((link) => (
            <a 
              key={link} 
              href={`#${link.toLowerCase().replace(/ /g, '-')}`}
              onClick={() => setActiveLink(link)}
              className="relative px-5 py-2.5 rounded-full text-[12px] font-bold uppercase tracking-[0.1em] transition-all duration-300"
            >
              <span 
                className={`relative z-10 transition-colors duration-300 ${
                  activeLink === link 
                    ? 'text-white' 
                    : 'text-[#9eb52d] hover:text-[#8ba028]'
                }`}
              >
                {link}
              </span>
              {activeLink === link && (
                <div className="absolute inset-0 rounded-full bg-slate-900 transition-all duration-300 shadow-sm" />
              )}
            </a>
          ))}
        </div>
        
        {/* Right: CTA Button - Accessibility Fixed (Higher Contrast) */}
        <div className="hidden lg:block">
          <a
            href="#contact-us"
            className="flex items-center gap-3 px-8 py-3 rounded-full font-bold text-[11px] uppercase tracking-widest transition-all duration-300 bg-slate-900 text-white shadow-lg shadow-slate-900/10 hover:bg-slate-800 hover:scale-[1.02] active:scale-[0.98]"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            Connect Us
          </a>
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
      </div>
    </nav>
  )
}
