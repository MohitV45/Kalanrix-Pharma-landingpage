import ScrollReveal from './scroll-reveal'
import { Microscope, FlaskConical, Truck, ShieldCheck, Users, Activity } from 'lucide-react'

const features = [
  {
    icon: Microscope,
    title: "Advanced R&D",
    description: "Our dedicated research team focuses on developing innovative formulations to address unmet medical needs.",
    extra: "State-of-the-art laboratory facilities in compliance with global standards."
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    description: "Every product undergoes rigorous testing in our WHO-GMP certified facilities to ensure safety and efficacy.",
    extra: "Zero-tolerance policy for impurities and strict batch consistency."
  },
  {
    icon: FlaskConical,
    title: "Diverse Portfolio",
    description: "Comprehensive range of medicines across Cardiology, Neurology, Gastroenterology, and more.",
    extra: "Over 150+ formulations currently active in the Indian market."
  },
  {
    icon: Truck,
    title: "Ethical Supply Chain",
    description: "Temperature-controlled logistics and distribution network reaching the remotest corners of India.",
    extra: "Real-time tracking and cold-chain integrity for sensitive medicines."
  },
  {
    icon: Users,
    title: "Patient-Centricity",
    description: "Developing affordable healthcare solutions without compromising on the quality of active ingredients.",
    extra: "Committed to improving accessibility for underprivileged communities."
  },
  {
    icon: Activity,
    title: "Modern Marketing",
    description: "Scientific and ethical pharmaceutical marketing practices driven by medical data and expertise.",
    extra: "Trained professionals bridging the gap between medicine and practitioners."
  }
]

export default function FeaturesSection() {
  return (
    <section id="features" className="py-32 bg-white relative z-10 overflow-hidden">
      {/* Decorative background gradient */}
      {/* Decorative background gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[30px] pointer-events-none will-change-transform transform-gpu"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        <ScrollReveal direction="up" duration={0.6}>
          <div className="mb-20 text-center">
            <span className="text-primary font-bold uppercase tracking-[0.2em] text-xs mb-3 block">Corporate Pillars</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Our Commitment to Excellence</h2>
            <p className="text-slate-600 max-w-2xl text-lg mx-auto">
              Built on a foundation of ethics and innovation, Kalanrix Pharma is dedicated to transforming the healthcare landscape of India.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <ScrollReveal key={i} direction="up" delay={0.03 * i} duration={0.5}>
              <div 
                className="group p-8 rounded-3xl border border-slate-200 bg-white hover:border-primary/20 hover:shadow-[0_15px_30px_rgba(0,0,0,0.05)] transition-[transform,box-shadow,border-color] duration-300 flex flex-col h-full relative cursor-default overflow-hidden will-change-[transform,opacity]"
              >
                {/* Animated subtle border gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-8 group-hover:bg-primary/5 group-hover:border-primary/10 transition-colors duration-300">
                    <feature.icon className="w-7 h-7 text-slate-600 group-hover:text-primary transition-all duration-300 group-hover:scale-110" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed mb-6">{feature.description}</p>
                  
                  {/* Extra text revealed on hover */}
                  <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-300 ease-in-out">
                    <div className="overflow-hidden">
                      <p className="text-sm text-slate-500 font-medium pt-4 border-t border-slate-100">
                        {feature.extra}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
