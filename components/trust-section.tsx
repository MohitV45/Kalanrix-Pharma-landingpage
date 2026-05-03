'use client'

import { useEffect, useRef, useState } from 'react'
import { Users, Activity, Building2, Globe } from 'lucide-react'

const stats = [
  { icon: Users, value: 50, suffix: 'M+', label: 'Patient Records Analyzed' },
  { icon: Activity, value: 99, suffix: '.9%', label: 'System Uptime SLA' },
  { icon: Building2, value: 450, suffix: '+', label: 'Enterprise Clinics' },
  { icon: Globe, value: 12, suffix: '', label: 'Countries Supported' }
]

function Counter({ end, suffix }: { end: number, suffix: string }) {
  const [count, setCount] = useState(0)
  const countRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        let start = 0
        const duration = 2000 // ms
        const increment = end / (duration / 16)
        
        const timer = setInterval(() => {
          start += increment
          if (start >= end) {
            setCount(end)
            clearInterval(timer)
          } else {
            setCount(Math.floor(start))
          }
        }, 16)
        observer.disconnect()
      }
    })

    if (countRef.current) observer.observe(countRef.current)
    return () => observer.disconnect()
  }, [end])

  return (
    <div ref={countRef} className="text-5xl font-black text-white mb-2 tracking-tight">
      {count}{suffix}
    </div>
  )
}

export default function TrustSection() {
  return (
    <section className="py-24 bg-card/30 border-y border-white/5 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="relative p-6 rounded-2xl bg-background border border-white/10 glow-border group text-center">
              {/* Subtle accent glow behind icon */}
              <div className="absolute top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-primary/20 blur-xl rounded-full"></div>
              
              <div className="relative z-10 flex flex-col items-center">
                <stat.icon className="w-8 h-8 text-primary mb-6 group-hover:scale-110 transition-transform duration-300" />
                <Counter end={stat.value} suffix={stat.suffix} />
                <div className="text-sm text-slate-400 font-medium uppercase tracking-wider">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
