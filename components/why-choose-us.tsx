'use client'

import { ShieldCheck, Microscope, Globe2, Award } from 'lucide-react'

const features = [
  {
    icon: ShieldCheck,
    title: 'Quality Assurance',
    description: 'Stringent multi-stage testing ensuring maximum safety and efficacy.'
  },
  {
    icon: Microscope,
    title: 'Advanced Research',
    description: 'Continuous investment in cutting-edge laboratory facilities and talent.'
  },
  {
    icon: Globe2,
    title: 'Global Distribution',
    description: 'Robust supply chains delivering critical care to over 50 countries.'
  },
  {
    icon: Award,
    title: 'Regulatory Compliance',
    description: 'Strict adherence to FDA, EMA, and WHO guidelines worldwide.'
  }
]

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature, i) => (
            <div key={i} className="text-center lg:text-left">
              <div className="inline-flex w-14 h-14 bg-emerald-50 rounded-full items-center justify-center mb-6">
                <feature.icon className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
