'use client'

import { Briefcase, MapPin, Mail } from 'lucide-react'

const jobs = [
  {
    title: "Medical Representative",
    location: "All over Tamilnadu",
    type: "Full Time"
  },
  {
    title: "Area Sales Manager",
    location: "All over Tamilnadu",
    type: "Full Time"
  }
]

export default function CareersSection() {
  return (
    <section id="careers" className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Careers Info */}
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Build Your Career With Us</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              We believe that our employees are our greatest asset and we strive to provide a supportive and collaborative environment that encourages personal and professional development.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed mb-10">
              Join us and be a part of a dynamic team that is dedicated to delivering high-quality healthcare solutions to the masses.
            </p>
            
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Mail className="w-5 h-5 text-primary" /> Apply Now
              </h3>
              <p className="text-slate-700 mb-2">Please submit your resume to:</p>
              <a href="mailto:info@kalanrix.com" className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors">
                info@kalanrix.com
              </a>
            </div>
          </div>

          {/* Right: Job Listings */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Open Positions</h3>
            
            {jobs.map((job, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-xl p-6 hover:border-primary/30 hover:shadow-md transition-all group cursor-pointer">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors">
                    {i + 1}. {job.title}
                  </h4>
                  <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold uppercase rounded-full">
                    {job.type}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-slate-500">
                  <MapPin className="w-4 h-4" />
                  <span className="font-medium">{job.location}</span>
                </div>
              </div>
            ))}
            
          </div>
        </div>

      </div>
    </section>
  )
}
