'use client'

import Image from 'next/image'
import { Facebook, Twitter, Linkedin, Instagram, ArrowUp } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-slate-950 text-slate-400 py-20 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-1 space-y-6">
            <div className="relative h-14 w-40">
              <Image 
                src="/logo.png" 
                alt="Kalanrix Logo" 
                fill
                className="object-contain brightness-0 invert opacity-90"
              />
            </div>

            <p className="text-sm leading-relaxed max-w-xs">
              Dedicated to delivering innovative pharmaceutical solutions and improving global healthcare standards through research and excellence.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wider uppercase text-xs">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#home" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#abouts-us" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#products" className="hover:text-primary transition-colors">Our Products</a></li>
              <li><a href="#features" className="hover:text-primary transition-colors">Core Pillars</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wider uppercase text-xs">Resources</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#careers" className="hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#credentials" className="hover:text-primary transition-colors">Certifications</a></li>
              <li><a href="#contacts-us" className="hover:text-primary transition-colors">Support Center</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Newsletter/Contact */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wider uppercase text-xs">Stay Connected</h4>
            <p className="text-sm mb-4">Subscribe to our newsletter for latest updates.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
              />
              <button className="absolute right-2 top-2 bg-primary text-white p-1.5 rounded-lg hover:opacity-90 transition-opacity">
                <ArrowUp className="w-4 h-4 rotate-45" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} KalanRix Pharma Private Limited. All rights reserved.
          </p>
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-white transition-colors"
          >
            Back to top
            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary transition-all">
              <ArrowUp className="w-4 h-4" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  )
}
