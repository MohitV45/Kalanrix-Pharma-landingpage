import { Briefcase, MapPin, Mail, ArrowRight } from 'lucide-react'

const jobs = [
  {
    title: "Medical Representative",
    location: "Submit your Resume in the below Enquiry Form",
    type: "",
    dept: "Sales & Marketing",
    isCustom: true
  },
  {
    title: "Area Sales Manager",
    location: "Tamil Nadu, India",
    type: "Full Time",
    dept: "Management"
  }
]

export default function CareersSection() {
  return (
    <section id="careers" className="py-32 bg-slate-50/50 relative overflow-hidden border-t border-slate-100">
      {/* Subtle background glow */}
      <div className="absolute -bottom-24 -right-24 w-[600px] h-[600px] opacity-[0.05] pointer-events-none bg-primary blur-[40px] rounded-full will-change-transform transform-gpu"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          
          {/* Left: Careers Info */}
          <div className="reveal reveal-left">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white text-primary text-xs font-bold rounded-full uppercase tracking-widest shadow-sm border border-slate-200 mb-6">
                Join Our Team
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-950 mb-8 tracking-tight">
                Build a meaningful career with Kalanrix.
              </h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-8">
                We believe that our employees are our greatest asset. We strive to provide a supportive and collaborative environment that encourages both personal and professional growth.
              </p>
              
              <div className="relative group p-1 rounded-[2rem] bg-gradient-to-br from-primary/20 via-blue-500/20 to-primary/20 shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]">
                <div className="absolute inset-0 bg-white m-0.5 rounded-[1.9rem]"></div>
                <div className="relative z-10 p-10">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
                    <Mail className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-950 mb-3">Direct Application</h3>
                  <p className="text-slate-700 mb-6 font-medium">Interested in a position? Send your professional resume to:</p>
                  <a href="mailto:info@kalanrix.co.in" className="text-2xl md:text-3xl font-extrabold text-slate-900 hover:text-primary transition-colors flex items-center gap-3">
                    info@kalanrix.co.in
                    <ArrowRight className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Job Listings */}
          <div className="space-y-6">
            <div className="reveal reveal-up">
              <h3 className="text-2xl font-bold text-slate-950 mb-8 flex items-center gap-3">
                Current Openings <span className="text-sm font-bold bg-slate-200 px-3 py-1 rounded-full text-slate-950">{jobs.length}</span>
              </h3>
            </div>
            
            {jobs.map((job, idx) => (
              <a 
                key={idx} 
                href={('isCustom' in job && job.isCustom) ? "#enquiry-form" : "#"} 
                className="group block p-8 bg-white border border-slate-200 rounded-[2rem] hover:border-primary/40 shadow-sm hover:shadow-[0_20px_40px_rgb(0,0,0,0.06)] transition-all duration-500 reveal reveal-up reveal-stagger-1"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <div>
                    <span className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-2 block">{job.dept}</span>
                    <h4 className="text-2xl font-bold text-slate-950 group-hover:text-primary transition-colors">
                      {job.title}
                    </h4>
                  </div>
                  {(!('isCustom' in job) || !job.isCustom) && (
                    <div className="shrink-0">
                      <span className="px-4 py-1.5 bg-slate-50 text-slate-700 text-xs font-bold uppercase rounded-full border border-slate-100 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300">
                        {job.type}
                      </span>
                    </div>
                  )}
                </div>
                <div className="flex items-center gap-6 text-slate-600">
                  {'isCustom' in job && job.isCustom ? (
                    <div className="flex items-center gap-3 bg-primary/5 py-3 px-6 rounded-2xl border border-primary/20 text-primary hover:bg-primary/10 transition-colors">
                      <ArrowRight className="w-5 h-5" />
                      <span className="text-sm font-bold uppercase tracking-widest">{job.location}</span>
                    </div>
                  ) : (
                    <>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-slate-400" />
                        <span className="text-sm font-bold uppercase tracking-wider">{job.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Briefcase className="w-4 h-4 text-slate-400" />
                        <span className="text-sm font-bold uppercase tracking-wider">In-Person</span>
                      </div>
                    </>
                  )}
                </div>
              </a>
            ))}
            
          </div>
        </div>

      </div>
    </section>
  )
}
