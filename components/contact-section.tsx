'use client'

import ScrollReveal from './scroll-reveal'
import { MapPin, Phone, Mail, Globe } from 'lucide-react'

export default function ContactSection() {
  return (
    <section id="contacts-us" className="py-32 bg-white relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        
        {/* Header */}
        <ScrollReveal direction="up">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 text-slate-900 text-xs font-bold rounded-full uppercase tracking-widest border border-slate-200 mb-6">
              Get In Touch
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Connect with Kalanrix</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our team of experts is ready to assist you with any inquiries regarding our products, partnerships, or career opportunities.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            <ScrollReveal direction="left" delay={0.2}>
              <div className="bg-slate-900 text-white p-10 md:p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden group h-full">
                {/* Abstract background elements */}
                <div className="absolute -top-12 -right-12 w-48 h-48 bg-primary/20 blur-[40px] rounded-full group-hover:bg-primary/30 transition-all duration-700 will-change-transform transform-gpu"></div>
                <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-blue-500/10 blur-[40px] rounded-full will-change-transform transform-gpu"></div>
                
                <div className="relative z-10 space-y-10">
                  <div>
                    <h3 className="text-3xl font-bold mb-8">Contact Information</h3>
                    <div className="space-y-8">
                      
                      <div className="flex gap-5 items-start">
                        <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0 border border-white/10 group-hover:bg-primary transition-all duration-500">
                          <MapPin className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h4 className="text-slate-400 font-bold text-xs uppercase tracking-widest mb-2">Main Office</h4>
                          <p className="text-white font-medium leading-relaxed">
                            679/2A1B, M M Nagar, Sripuram,<br/>
                            Sholinghur Taulk, Ranipet-631102,<br/>
                            Tamilnadu
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-5 items-start">
                        <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0 border border-white/10 group-hover:bg-primary transition-all duration-500">
                          <Phone className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h4 className="text-slate-400 font-bold text-xs uppercase tracking-widest mb-2">Phone</h4>
                          <p className="text-white font-bold text-lg">+91 (Your Phone Number)</p>
                        </div>
                      </div>

                      <div className="flex gap-5 items-start">
                        <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0 border border-white/10 group-hover:bg-primary transition-all duration-500">
                          <Mail className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h4 className="text-slate-400 font-bold text-xs uppercase tracking-widest mb-2">Email</h4>
                          <a href="mailto:info@kalanrix.com" className="text-white font-bold text-lg hover:text-primary transition-colors">info@kalanrix.com</a>
                        </div>
                      </div>

                    </div>
                  </div>

                  <div className="pt-10 border-t border-white/10 flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-all cursor-pointer">
                      <Globe className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Map Embed */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="right" delay={0.4}>
              <div className="h-[500px] lg:h-full min-h-[500px] w-full rounded-[2.5rem] overflow-hidden border border-slate-200 shadow-xl group relative">
                <iframe 
                  src="https://maps.google.com/maps?q=12.8674387,79.0899245&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Kalanrix Office Map"
                  className="absolute inset-0 transition-all duration-700"
                ></iframe>
                <div className="absolute top-8 right-8 bg-white/90 backdrop-blur-md px-6 py-4 rounded-2xl shadow-xl border border-white/50 pointer-events-none transition-all duration-500 group-hover:opacity-0">
                  <span className="text-slate-900 font-bold text-sm flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" /> Find Us on Maps
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>

      </div>
    </section>
  )
}
