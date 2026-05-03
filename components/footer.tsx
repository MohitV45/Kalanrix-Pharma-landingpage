'use client'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Brand */}
        <div className="flex items-center">
          <img 
            src="/logo.png" 
            alt="KalanRix Pharma" 
            className="h-12 w-auto object-contain"
          />
        </div>

        {/* Copyright */}
        <div className="text-sm text-slate-500 text-center md:text-left">
          &copy; {new Date().getFullYear()} KalanRix Pharma Private Limited. All rights reserved.
        </div>

        {/* Links */}
        <div className="flex gap-6 text-sm">
          <a href="#home" className="hover:text-primary transition-colors">Home</a>
          <a href="#abouts-us" className="hover:text-primary transition-colors">About Us</a>
          <a href="#products" className="hover:text-primary transition-colors">Products</a>
          <a href="#careers" className="hover:text-primary transition-colors">Careers</a>
          <a href="#contacts-us" className="hover:text-primary transition-colors">Contact Us</a>
        </div>

      </div>
    </footer>
  )
}
