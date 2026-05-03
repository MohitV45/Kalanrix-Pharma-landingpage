'use client'

import ScrollReveal from './scroll-reveal'
import { Target, Lightbulb, ShieldCheck } from 'lucide-react'

export default function AboutSection() {
  return (
    <section id="abouts-us" className="py-32 bg-white relative overflow-hidden border-t border-slate-100">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] opacity-[0.03] pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-600 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start group/about">
          
          {/* Left: About Us Content */}
          <ScrollReveal direction="left" duration={1}>
            <div className="bg-blue-200/60 p-8 md:p-10 rounded-3xl border border-blue-300 shadow-[0_8px_30px_rgb(0,0,0,0.02)] space-y-6 transition-all duration-500
                           group-hover/about:blur-[4px] group-hover/about:opacity-50 group-hover/about:scale-[0.98]
                           hover:!blur-none hover:!opacity-100 hover:!scale-[1.03] hover:shadow-[0_30px_60px_rgb(0,0,0,0.12)]">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white text-primary text-sm font-semibold rounded uppercase tracking-wider shadow-sm border border-blue-100/50">
                Who We Are
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                Kalanrix Pharma is an ethical Indian pharmaceutical company.
              </h2>
              <div className="space-y-4">
                <p className="text-lg text-slate-600 leading-relaxed">
                  We have been into pharmaceuticals tied up with corporates since 2018. Our goal is to provide unique and affordable healthcare solutions to everyone. 
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  We offer high-quality products across a range of medical fields, including gynecology, cardiology, diabetes, antibiotics, neurology, and gastroenterology. As a quality-driven organization, we are committed to serving the pharmaceutical industry and specialize in pharma marketing.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Vision, Mission, Values */}
          <div className="space-y-8">
            
            {/* Vision */}
            <ScrollReveal direction="right" delay={0.2}>
              <div className="group bg-emerald-100/80 p-6 rounded-2xl border border-emerald-200 shadow-[0_8px_30px_rgb(0,0,0,0.02)] flex gap-4 transition-all duration-500
                             group-hover/about:blur-[4px] group-hover/about:opacity-50 group-hover/about:scale-[0.98]
                             hover:!blur-none hover:!opacity-100 hover:!scale-[1.03] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)]">
                <div className="shrink-0">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-sm">
                    <Lightbulb className="w-6 h-6 text-emerald-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Our Vision</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Our vision is to provide high-quality products at affordable prices.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Mission */}
            <ScrollReveal direction="right" delay={0.4}>
              <div className="group bg-slate-200/80 p-6 rounded-2xl border border-slate-300 shadow-[0_8px_30px_rgb(0,0,0,0.02)] flex gap-4 transition-all duration-500
                             group-hover/about:blur-[4px] group-hover/about:opacity-50 group-hover/about:scale-[0.98]
                             hover:!blur-none hover:!opacity-100 hover:!scale-[1.03] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)]">
                <div className="shrink-0">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-sm">
                    <Target className="w-6 h-6 text-slate-700" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Our Mission</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Our mission is to make our exceptional products available in every nook and corner of India.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Values */}
            <ScrollReveal direction="right" delay={0.6}>
              <div className="group bg-orange-100/80 p-6 rounded-2xl border border-orange-200 shadow-[0_8px_30px_rgb(0,0,0,0.02)] flex gap-4 transition-all duration-500
                             group-hover/about:blur-[4px] group-hover/about:opacity-50 group-hover/about:scale-[0.98]
                             hover:!blur-none hover:!opacity-100 hover:!scale-[1.03] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)]">
                <div className="shrink-0">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-sm">
                    <ShieldCheck className="w-6 h-6 text-orange-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Our Values</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Kalanrix use only first-class quality pharmaceutical ingredients, ensuring that our medicines meet the highest standards of safety and efficacy.
                  </p>
                </div>
              </div>
            </ScrollReveal>

          </div>

        </div>
      </div>
    </section>
  )
}
