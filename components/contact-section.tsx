'use client'

import { useState, useRef } from 'react'
import { MapPin, Phone, Mail, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'
import emailjs from '@emailjs/browser'

export default function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formRef.current) return

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''
      )
      setSubmitStatus('success')
      formRef.current.reset()
    } catch (error) {
      console.error('EmailJS Error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000)
    }
  }

  return (
    <section id="contact-us" className="py-24 bg-slate-50 relative overflow-hidden border-t border-slate-100">
      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 md:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: Contact Info */}
          <div className="reveal reveal-left">
            <div className="space-y-12">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <span className="w-5 h-5 flex items-center justify-center">
                    <div className="w-4 h-4 text-primary flex items-center justify-center">
                       <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-square"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                    </div>
                  </span>
                  <span className="text-primary font-bold tracking-[0.2em] text-[10px] uppercase">
                    Connect With Us
                  </span>
                </div>
                
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-950 leading-[1.1] tracking-tight">
                  Partnering for Global <br/>
                  <span className="text-primary">Health Solutions</span>
                </h2>
                
                <p className="text-slate-700 text-lg leading-relaxed max-w-lg">
                  Connect with our expert team to discuss your manufacturing requirements or explore technical partnerships.
                </p>
              </div>

              <div className="space-y-10">
                {/* Inquiry Item */}
                <div className="flex gap-6 items-center">
                  <div className="w-14 h-14 bg-primary rounded-lg flex items-center justify-center shrink-0 shadow-lg shadow-primary/20">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-slate-950 font-bold text-sm tracking-wide uppercase mb-1">Inquiries</h3>
                    <p className="text-slate-950 font-bold text-lg">+91 77087 20383</p>
                    <p className="text-slate-600 text-xs font-medium">Direct line of Marketers</p>
                  </div>
                </div>

                {/* Email Item */}
                <div className="flex gap-6 items-center">
                  <div className="w-14 h-14 bg-slate-950 rounded-lg flex items-center justify-center shrink-0 shadow-lg shadow-slate-900/10">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-slate-950 font-bold text-sm tracking-wide uppercase mb-1">Direct Email</h3>
                    <p className="text-slate-950 font-bold text-lg">info@kalanrix.co.in</p>
                    <p className="text-slate-600 text-xs font-medium">Corporate relations</p>
                  </div>
                </div>

                {/* Location Item */}
                <div className="flex gap-6 items-center">
                  <div className="w-14 h-14 bg-slate-950 rounded-lg flex items-center justify-center shrink-0 shadow-lg shadow-slate-900/10">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-slate-950 font-bold text-sm tracking-wide uppercase mb-1">Global Hub</h3>
                    <p className="text-slate-950 font-bold text-lg">M.M Nagar, Sholinghur</p>
                    <p className="text-slate-600 text-xs font-medium">Ranipet, Tamil Nadu</p>
                    <p className="text-slate-950 font-bold text-sm mt-2">+91 77087 20383</p>
                    <p className="text-slate-600 text-[10px] font-medium uppercase">Direct line of Marketers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form Card */}
          <div className="reveal reveal-right reveal-delay-2">
             <div className="bg-white rounded-2xl shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] border border-slate-100 p-8 md:p-12">
              <form id="enquiry-form" ref={formRef} onSubmit={handleSubmit} className="space-y-10">
                <div className="grid md:grid-cols-2 gap-10">
                  <div className="space-y-4">
                    <label htmlFor="full-name" className="text-[10px] font-bold text-slate-950 uppercase tracking-widest">Full Name</label>
                    <input 
                      type="text" 
                      id="full-name"
                      name="name"
                      required
                      placeholder="e.g. Dr. John Doe"
                      className="w-full border-b border-slate-200 py-3 text-slate-950 focus:outline-none focus:border-primary transition-colors placeholder:text-slate-400 font-medium"
                    />
                  </div>
                  <div className="space-y-4">
                    <label htmlFor="email" className="text-[10px] font-bold text-slate-950 uppercase tracking-widest">Professional Email</label>
                    <input 
                      type="email" 
                      id="email"
                      name="email"
                      required
                      placeholder="john@organization.com"
                      className="w-full border-b border-slate-200 py-3 text-slate-950 focus:outline-none focus:border-primary transition-colors placeholder:text-slate-400 font-medium"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <label htmlFor="phone" className="text-[10px] font-bold text-slate-950 uppercase tracking-widest">Mobile Number</label>
                  <input 
                    type="tel" 
                    id="phone"
                    name="phone"
                    placeholder="+91 12345 67890"
                    className="w-full border-b border-slate-200 py-3 text-slate-950 focus:outline-none focus:border-primary transition-colors placeholder:text-slate-400 font-medium"
                  />
                </div>


                <div className="space-y-4">
                  <label htmlFor="subject" className="text-[10px] font-bold text-slate-950 uppercase tracking-widest">Subject / Inquiry Type</label>
                  <input 
                    type="text" 
                    id="subject"
                    name="title"
                    required
                    placeholder="e.g. Contract Manufacturing Inquiry"
                    className="w-full border-b border-slate-200 py-3 text-slate-950 focus:outline-none focus:border-primary transition-colors placeholder:text-slate-400 font-medium"
                  />
                </div>

                <div className="space-y-4">
                  <label htmlFor="message" className="text-[10px] font-bold text-slate-950 uppercase tracking-widest">Message Details</label>
                  <textarea 
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Please describe your requirements..."
                    className="w-full border-b border-slate-200 py-3 text-slate-950 focus:outline-none focus:border-primary transition-colors placeholder:text-slate-400 font-medium resize-none"
                  ></textarea>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-6">
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative flex items-center justify-center gap-3 bg-slate-950 text-white px-10 py-5 rounded-lg font-bold text-[11px] uppercase tracking-[0.2em] transition-all hover:bg-slate-900 w-full sm:w-fit shadow-xl shadow-slate-950/20 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>Processing <Loader2 className="w-4 h-4 animate-spin" /></>
                    ) : (
                      <>Submit Inquiry <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>
                    )}
                  </button>

                  {submitStatus === 'success' && (
                    <div className="flex items-center gap-2 text-emerald-600 font-bold text-xs uppercase tracking-wider animate-in fade-in slide-in-from-left-4">
                      <CheckCircle2 className="w-5 h-5" /> Message Sent Successfully
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="flex items-center gap-2 text-rose-600 font-bold text-xs uppercase tracking-wider animate-in fade-in slide-in-from-left-4">
                      <AlertCircle className="w-5 h-5" /> Submission Failed. Try Again.
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Full Width Google Map */}
      <div className="w-full h-[450px] md:h-[600px] relative mt-12 bg-slate-100 grayscale hover:grayscale-0 transition-all duration-1000">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497743.08398792427!2d79.40659840283749!3d12.932265931116401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52b3001a9c8735%3A0x769c2127d4329265!2sGSV%20Illam%20Sholinghur!5e0!3m2!1sen!2sin!4v1778854181995!5m2!1sen!2sin"
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={true} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Global Hub Location Map"
          className="absolute inset-0"
        ></iframe>
        
        {/* Map Label Overlay */}
        <div className="absolute top-12 left-6 md:left-24 bg-white p-6 rounded-lg shadow-2xl border border-slate-100 hidden md:block">
           <h4 className="font-bold text-slate-950 mb-1">Global Production Hub</h4>
           <p className="text-slate-600 text-sm">M.M Nagar, Sholinghur, Ranipet</p>
        </div>
      </div>
    </section>
  )
}
