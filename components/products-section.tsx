'use client'

import ScrollReveal from './scroll-reveal'
import Image from 'next/image'
import { Shield, Award, CheckCircle, Globe, ExternalLink, X } from 'lucide-react'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Placeholder images for products
const productImages = [
  { src: "/acekal p.png", name: "Acekal-P", type: "Analgesic" },
  { src: "/ACEKAL P MR.png", name: "AcekalP-MR", type: "Muscle Relaxant" },
  { src: "/HEALGEL.png", name: "HEALLIE GEL", type: "Pain Relief Gel" },
  { src: "/IGGMET VGM2.png", name: "Igemet VGM2", type: "Antidiabetic" },
  { src: "/IGGMET VGM1.png", name: "Iggmet VGM1", type: "Antidiabetic" },
  { src: "/igg pg2.png", name: "Iggmet-PG2", type: "Antidiabetic" },
  { src: "/iggmet vm.png", name: "Iggmet-VM", type: "Antidiabetic" },
  { src: "/iggmet g1.png", name: "IGGMET-G1", type: "Antidiabetic" },
  { src: "/iggmet g2.png", name: "IGGMET-G2", type: "Antidiabetic" },
  { src: "/PREGA.png", name: "PREGATRAZ-M75", type: "Neuropathic Pain" },
  { src: "/sermont lc.png", name: "Sermont-LC", type: "Antiallergic" },
  { src: "/telme calm 40.png", name: "Telmecalm 40", type: "Antihypertensive" }
]



export default function ProductsSection() {
  const [selectedProduct, setSelectedProduct] = useState<null | typeof productImages[0]>(null)

  useEffect(() => {
    if (selectedProduct) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [selectedProduct])

  return (
    <section id="products" className="py-32 bg-slate-50/50 border-t border-slate-100 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute -right-24 top-1/4 w-96 h-96 bg-primary/5 blur-[60px] rounded-full pointer-events-none will-change-transform transform-gpu"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <ScrollReveal direction="up">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white text-primary text-xs font-bold rounded-full uppercase tracking-widest shadow-sm border border-slate-200 mb-6">
              Our Portfolio
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              World-Class Healthcare Solutions
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Kalanrix products are trusted by healthcare professionals across India. All our products are manufactured under strict quality control measures and by GMP certified manufacturers.
            </p>
          </div>
        </ScrollReveal>

        {/* Certifications Strip */}
        <ScrollReveal direction="up" delay={0.2}>
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 mb-24">
            {[
              { src: "/gmp.png", label: "GMP Certified", bg: "bg-blue-50" },
              { src: "/iso-logo.png", label: "ISO 9001:2015", bg: "bg-emerald-50" },
              { src: "/halal-logo.png", label: "Halal Quality", bg: "bg-orange-50" }
            ].map((cert, idx) => (
              <div key={idx} className="group flex items-center gap-4 bg-white px-6 py-4 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300">
                <div className={`w-16 h-16 ${cert.bg} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform overflow-hidden`}>
                  {cert.src ? (
                    <div className="relative w-full h-full p-1 flex items-center justify-center">
                      <Image 
                        src={cert.src} 
                        alt={cert.label} 
                        width={64} 
                        height={64} 
                        loading="lazy"
                        className="object-contain" 
                      />
                    </div>
                  ) : (
                    <cert.icon className={`w-8 h-8 ${cert.color}`} />
                  )}
                </div>
                <span className="font-bold text-slate-800 text-base tracking-wide">{cert.label}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {productImages.map((product, i) => (
            <ScrollReveal key={i} direction="up" delay={0.1 * i}>
              <div className="group relative bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_30px_60px_rgb(0,0,0,0.12)] transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] hover:z-10">
                <div className="aspect-[4/5] w-full relative overflow-hidden">
                  {/* Certification Badges on Card */}
                  <div className="absolute top-4 left-4 z-20 flex flex-col gap-2">
                    {["/gmp.png", "/iso-logo.png"].map((src, idx) => (
                      <div key={idx} className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-lg shadow-sm border border-slate-100 p-1 flex items-center justify-center overflow-hidden hover:scale-125 transition-transform duration-300">
                        <Image src={src} alt="Cert" width={24} height={24} loading="lazy" className="object-contain" />
                      </div>
                    ))}
                  </div>

                  <Image 
                    src={product.src} 
                    alt={product.name} 
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-contain p-6 group-hover:scale-125 transition-transform duration-500 ease-out"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-8">
                    <button 
                      onClick={() => setSelectedProduct(product)}
                      className="w-full py-3 bg-white text-slate-900 font-bold rounded-xl flex items-center justify-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 shadow-xl"
                    >
                      View Details <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-2 block">
                    {product.type}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* View All Button */}
        <ScrollReveal direction="up" delay={0.6}>
          <div className="mt-20 text-center">
            <a 
              href="/product-catalogue.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-10 py-4 bg-slate-900 text-white font-bold rounded-full hover:bg-primary hover:shadow-[0_15px_30px_rgba(158,181,45,0.3)] transition-all duration-300 inline-flex items-center gap-3 mx-auto group"
            >
              Explore Full Catalog
              <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform">
                <Globe className="w-3 h-3" />
              </div>
            </a>
          </div>
        </ScrollReveal>

      </div>

      {/* Product Image Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
          >
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
              className="absolute inset-0 bg-slate-950/90 backdrop-blur-xl"
            />
            
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-4xl aspect-[4/5] md:aspect-square bg-white rounded-3xl overflow-hidden shadow-2xl z-10"
            >
              <button 
                onClick={() => setSelectedProduct(null)}
                className="absolute top-6 right-6 z-20 w-12 h-12 bg-slate-900/50 hover:bg-slate-900 text-white rounded-full flex items-center justify-center backdrop-blur-md transition-all border border-white/10"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="relative w-full h-full p-8 md:p-16 flex items-center justify-center">
                <Image 
                  src={selectedProduct.src} 
                  alt={selectedProduct.name} 
                  fill
                  className="object-contain p-8"
                  priority
                />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-white via-white/95 to-transparent">
                <span className="text-primary font-bold text-xs uppercase tracking-[0.2em] mb-2 block">
                  {selectedProduct.type}
                </span>
                <h3 className="text-3xl font-bold text-slate-900">
                  {selectedProduct.name}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
