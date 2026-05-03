'use client'

import { AlertCircle, Clock, ShieldAlert, CheckCircle2, Zap, ShieldCheck } from 'lucide-react'

const problems = [
  {
    icon: Clock,
    title: "Slow Diagnostic Processes",
    description: "Traditional methods take days to process critical patient data."
  },
  {
    icon: ShieldAlert,
    title: "High Error Margins",
    description: "Manual formulation calculations lead to costly and dangerous errors."
  },
  {
    icon: AlertCircle,
    title: "Fragmented Patient Data",
    description: "Siloed information systems prevent holistic patient care."
  }
]

const solutions = [
  {
    icon: Zap,
    title: "Real-Time AI Processing",
    description: "Analyze thousands of data points instantly for rapid decision making."
  },
  {
    icon: ShieldCheck,
    title: "Automated Precision",
    description: "Machine learning algorithms ensure 99.9% accuracy in formulations."
  },
  {
    icon: CheckCircle2,
    title: "Unified Health Records",
    description: "Seamlessly integrate and access complete patient histories securely."
  }
]

export default function ProblemSolutionSection() {
  return (
    <section id="solutions" className="py-32 bg-background relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Overcoming Healthcare Hurdles</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            We bridge the gap between legacy systems and the future of medicine.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 relative">
          {/* Subtle divider line */}
          <div className="hidden lg:block absolute left-1/2 top-10 bottom-10 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>

          {/* Problem Side */}
          <div className="space-y-8">
            <h3 className="text-xl font-bold text-slate-300 mb-8 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-destructive"></span> The Challenge
            </h3>
            {problems.map((prob, i) => (
              <div key={i} className="flex gap-6 p-6 rounded-2xl bg-white/5 border border-white/5 opacity-80">
                <div className="shrink-0 mt-1">
                  <div className="w-12 h-12 rounded-xl bg-destructive/10 text-destructive flex items-center justify-center">
                    <prob.icon className="w-6 h-6" />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">{prob.title}</h4>
                  <p className="text-slate-400 leading-relaxed">{prob.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Solution Side */}
          <div className="space-y-8 mt-12 lg:mt-0">
            <h3 className="text-xl font-bold text-slate-300 mb-8 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-primary"></span> The Pharmagen Solution
            </h3>
            {solutions.map((sol, i) => (
              <div key={i} className="group flex gap-6 p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-card hover:-translate-y-1 hover-glow relative overflow-hidden transition-all duration-300">
                {/* Subtle background glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="shrink-0 mt-1 relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <sol.icon className="w-6 h-6" />
                  </div>
                </div>
                <div className="relative z-10">
                  <h4 className="text-lg font-bold text-white mb-2">{sol.title}</h4>
                  <p className="text-slate-400 leading-relaxed">{sol.description}</p>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  )
}
