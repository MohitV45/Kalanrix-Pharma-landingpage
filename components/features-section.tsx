'use client'

import { BrainCircuit, Database, Network, Fingerprint, LineChart, Lock } from 'lucide-react'

const features = [
  {
    icon: BrainCircuit,
    title: "Predictive AI Models",
    description: "Identify patient risks before they escalate using our proprietary machine learning algorithms.",
    extra: "Processes up to 10M records per second with 99.9% accuracy."
  },
  {
    icon: Database,
    title: "Unified Data Lakes",
    description: "Centralize all fragmented healthcare data into a single, compliant, and searchable repository.",
    extra: "Seamless integration with Epic, Cerner, and legacy systems."
  },
  {
    icon: Network,
    title: "Interoperable APIs",
    description: "Connect your entire tech stack effortlessly with our HL7/FHIR compliant endpoints.",
    extra: "Developer-first documentation and 99.99% uptime SLA."
  },
  {
    icon: Fingerprint,
    title: "Biometric Security",
    description: "Military-grade encryption and access controls ensuring absolute patient data privacy.",
    extra: "HIPAA, GDPR, and SOC2 Type II certified."
  },
  {
    icon: LineChart,
    title: "Real-Time Analytics",
    description: "Actionable insights delivered instantly via customizable, drag-and-drop dashboards.",
    extra: "Export reports instantly or schedule automated distributions."
  },
  {
    icon: Lock,
    title: "Zero-Trust Architecture",
    description: "Continuous verification across the network to prevent breaches and secure sensitive IP.",
    extra: "Automated threat hunting and anomaly detection."
  }
]

export default function FeaturesSection() {
  return (
    <section id="features" className="py-32 bg-background relative z-10">
      {/* Decorative background gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="mb-20">
          <span className="text-primary font-bold uppercase tracking-wider text-sm mb-2 block">Core Features</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Engineered for Scale</h2>
          <p className="text-slate-400 max-w-2xl text-lg">
            Everything you need to modernize your healthcare infrastructure, built from the ground up for performance and security.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <div 
              key={i} 
              className="group glass p-8 rounded-2xl hover:-translate-y-2 hover-glow transition-all duration-500 flex flex-col h-full overflow-hidden relative cursor-default"
            >
              {/* Animated subtle border gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-primary/10 group-hover:border-primary/30 transition-colors duration-300">
                  <feature.icon className="w-7 h-7 text-white group-hover:text-primary transition-colors duration-300 group-hover:rotate-6 group-hover:scale-110" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed mb-4">{feature.description}</p>
                
                {/* Extra text revealed on hover */}
                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-in-out">
                  <div className="overflow-hidden">
                    <p className="text-sm text-primary/90 font-medium pt-2 border-t border-white/10 mt-2">
                      {feature.extra}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
