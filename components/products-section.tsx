'use client'

import { Shield, Award, CheckCircle, Globe } from 'lucide-react'

// Placeholder images for products
const productImages = [
  "https://images.unsplash.com/photo-1584308666744-24d5c474f2ad?q=80&w=2070&auto=format&fit=crop", // Pills
  "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?q=80&w=2079&auto=format&fit=crop", // Blister packs
  "https://images.unsplash.com/photo-1550572017-edb79998811f?q=80&w=2070&auto=format&fit=crop", // Syringe/Vial
  "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?q=80&w=2080&auto=format&fit=crop"  // Boxes
]

export default function ProductsSection() {
  return (
    <section id="products" className="py-24 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Products</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Kalanrix products are trusted by healthcare professionals across India. All our products are manufactured under strict quality control measures and by GMP certified manufacturers, ensuring that our customers receive only the best medicines available.
          </p>
        </div>

        {/* Certifications Strip */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-20">
          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 bg-white rounded-full shadow-sm border border-slate-200 flex items-center justify-center">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <span className="font-bold text-slate-700">GMP</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 bg-white rounded-full shadow-sm border border-slate-200 flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-primary" />
            </div>
            <span className="font-bold text-slate-700">ISO</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 bg-white rounded-full shadow-sm border border-slate-200 flex items-center justify-center">
              <Award className="w-8 h-8 text-primary" />
            </div>
            <span className="font-bold text-slate-700">Halal</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 bg-white rounded-full shadow-sm border border-slate-200 flex items-center justify-center">
              <Globe className="w-8 h-8 text-primary" />
            </div>
            <span className="font-bold text-slate-700">JAS</span>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {productImages.map((src, i) => (
            <div key={i} className="group relative rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 bg-white">
              <div className="aspect-[4/3] w-full">
                <img 
                  src={src} 
                  alt={`Kalanrix Product ${i + 1}`} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <span className="text-white font-bold tracking-wider uppercase text-sm">View Product</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
