import { MapPin, Phone, Mail, Send } from 'lucide-react'

export default function ContactSection() {
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
                    <p className="text-slate-600 text-xs font-medium">Direct line for manufacturers</p>
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
                    <p className="text-slate-950 font-bold text-lg">Shankar Nagar, Sholinghur</p>
                    <p className="text-slate-600 text-xs font-medium">Ranipet, Tamil Nadu</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form Card */}
          <div className="reveal reveal-right reveal-delay-2">
            <div className="bg-white rounded-2xl shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] border border-slate-100 p-8 md:p-12">
              <form id="enquiry-form" className="space-y-10">
                <div className="grid md:grid-cols-2 gap-10">
                  <div className="space-y-4">
                    <label htmlFor="full-name" className="text-[10px] font-bold text-slate-950 uppercase tracking-widest">Full Name</label>
                    <input 
                      type="text" 
                      id="full-name"
                      placeholder="e.g. Dr. John Doe"
                      className="w-full border-b border-slate-200 py-3 text-slate-950 focus:outline-none focus:border-primary transition-colors placeholder:text-slate-400 font-medium"
                    />
                  </div>
                  <div className="space-y-4">
                    <label htmlFor="email" className="text-[10px] font-bold text-slate-950 uppercase tracking-widest">Professional Email</label>
                    <input 
                      type="email" 
                      id="email"
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
                    placeholder="+91 12345 67890"
                    className="w-full border-b border-slate-200 py-3 text-slate-950 focus:outline-none focus:border-primary transition-colors placeholder:text-slate-400 font-medium"
                  />
                </div>


                <div className="space-y-4">
                  <label htmlFor="subject" className="text-[10px] font-bold text-slate-950 uppercase tracking-widest">Subject / Inquiry Type</label>
                  <input 
                    type="text" 
                    id="subject"
                    placeholder="e.g. Contract Manufacturing Inquiry"
                    className="w-full border-b border-slate-200 py-3 text-slate-950 focus:outline-none focus:border-primary transition-colors placeholder:text-slate-400 font-medium"
                  />
                </div>

                <div className="space-y-4">
                  <label htmlFor="message" className="text-[10px] font-bold text-slate-950 uppercase tracking-widest">Message Details</label>
                  <textarea 
                    id="message"
                    rows={4}
                    placeholder="Please describe your requirements..."
                    className="w-full border-b border-slate-200 py-3 text-slate-950 focus:outline-none focus:border-primary transition-colors placeholder:text-slate-400 font-medium resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="group relative flex items-center justify-center gap-3 bg-slate-950 text-white px-10 py-5 rounded-lg font-bold text-[11px] uppercase tracking-[0.2em] transition-all hover:bg-slate-900 w-fit shadow-xl shadow-slate-950/20"
                >
                  Submit Inquiry <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Full Width Google Map */}
      <div className="w-full h-[450px] md:h-[600px] relative mt-12 bg-slate-100 grayscale hover:grayscale-0 transition-all duration-1000">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.859118223795!2d79.42126375!3d13.108110049999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52b2f72127e293%3A0xbe5a812d2c449970!2sShankar%20Nagar%2C%20Sholinghur%2C%20Tamil%20Nadu%20631102!5e0!3m2!1sen!2sin!4v1778772334362!5m2!1sen!2sin"
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
           <p className="text-slate-600 text-sm">Shankar Nagar, Sholinghur, Ranipet</p>
        </div>
      </div>
    </section>
  )
}
