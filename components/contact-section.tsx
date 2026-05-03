'use client'

import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export default function ContactSection() {
  return (
    <section id="contacts-us" className="py-24 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Contact Us</h2>
          <p className="text-xl text-primary font-bold mb-2">We are always happy to help you.</p>
          <p className="text-lg text-slate-600">Get in touch with us NOW!!!</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          
          {/* Contact Details */}
          <div className="p-10 lg:p-12 space-y-8">
            <h3 className="text-2xl font-bold text-slate-900 border-b border-slate-100 pb-4">Office Address</h3>
            
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">Corporate Headquarters</h4>
                <p className="text-slate-600 leading-relaxed">
                  Kalanrix Pharma Pvt. Ltd.<br/>
                  (Your Street Address Here)<br/>
                  Chennai, Tamil Nadu, India
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">Phone</h4>
                <p className="text-slate-600">+91 (Your Phone Number)</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">Email</h4>
                <a href="mailto:info@kalanrix.com" className="text-slate-600 hover:text-primary transition-colors">info@kalanrix.com</a>
              </div>
            </div>

          </div>

          {/* Map Embed Placeholder */}
          <div className="h-[400px] lg:h-auto w-full bg-slate-200 relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m3!1d3886.666114389146!2d80.2458652!3d13.0645479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526615b136894b%3A0x6b7782b57117e0!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Kalanrix Office Map"
              className="absolute inset-0"
            ></iframe>
          </div>

        </div>

      </div>
    </section>
  )
}
