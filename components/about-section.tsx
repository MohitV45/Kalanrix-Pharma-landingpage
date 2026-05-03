'use client'

import { Target, Lightbulb, ShieldCheck } from 'lucide-react'

export default function AboutSection() {
  return (
    <section id="abouts-us" className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left: About Us Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-primary text-sm font-semibold rounded uppercase tracking-wider">
              Who We Are
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
              Kalanrix Pharma is an ethical Indian pharmaceutical company.
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              We have been into pharmaceuticals tied up with corporates since 2018. Our goal is to provide unique and affordable healthcare solutions to everyone. 
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              We offer high-quality products across a range of medical fields, including gynecology, cardiology, diabetes, antibiotics, neurology, and gastroenterology. As a quality-driven organization, we are committed to serving the pharmaceutical industry and specialize in pharma marketing.
            </p>
          </div>

          {/* Right: Vision, Mission, Values */}
          <div className="space-y-8">
            
            {/* Vision */}
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 flex gap-4 hover:shadow-md transition-shadow">
              <div className="shrink-0">
                <div className="w-12 h-12 bg-white rounded-lg shadow-sm border border-slate-200 flex items-center justify-center">
                  <Lightbulb className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Our Vision</h3>
                <p className="text-slate-600 leading-relaxed">
                  Our vision is to provide high-quality products at affordable prices.
                </p>
              </div>
            </div>

            {/* Mission */}
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 flex gap-4 hover:shadow-md transition-shadow">
              <div className="shrink-0">
                <div className="w-12 h-12 bg-white rounded-lg shadow-sm border border-slate-200 flex items-center justify-center">
                  <Target className="w-6 h-6 text-secondary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Our Mission</h3>
                <p className="text-slate-600 leading-relaxed">
                  Our mission is to make our exceptional products available in every nook and corner of India.
                </p>
              </div>
            </div>

            {/* Values */}
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 flex gap-4 hover:shadow-md transition-shadow">
              <div className="shrink-0">
                <div className="w-12 h-12 bg-white rounded-lg shadow-sm border border-slate-200 flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Our Values</h3>
                <p className="text-slate-600 leading-relaxed">
                  Kalanrix use only first-class quality pharmaceutical ingredients, ensuring that our medicines meet the highest standards of safety and efficacy.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
