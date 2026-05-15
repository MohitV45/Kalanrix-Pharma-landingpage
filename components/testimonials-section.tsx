'use client'

import Image from 'next/image'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: "Dr. Sarah Jenkins",
    role: "Chief Medical Officer, Horizon Health",
    quote: "Pharmagen's predictive models have completely transformed our diagnostic accuracy. We caught potential complications weeks earlier than our legacy systems allowed.",
    avatar: "https://i.pravatar.cc/150?img=47"
  },
  {
    name: "Marcus Chen",
    role: "Head of R&D, BioLife Sciences",
    quote: "The interoperability of their API is unmatched. We integrated our entire tech stack in less than 48 hours without a single point of failure.",
    avatar: "https://i.pravatar.cc/150?img=11"
  },
  {
    name: "Elena Rodriguez",
    role: "Director of IT, Central Hospital",
    quote: "Security was our biggest concern migrating to the cloud. Pharmagen's zero-trust architecture gave our board the confidence we needed to modernize.",
    avatar: "https://i.pravatar.cc/150?img=5"
  },
  {
    name: "Dr. James Wilson",
    role: "Lead Cardiologist, Metro Medical",
    quote: "The unified data lakes mean I spend less time hunting down patient histories and more time actually treating patients. A lifesaver.",
    avatar: "https://i.pravatar.cc/150?img=68"
  },
  {
    name: "Anita Patel",
    role: "Operations Manager, CareFirst",
    quote: "The real-time analytics dashboard is gorgeous and instantly actionable. Reporting that used to take days now takes seconds.",
    avatar: "https://i.pravatar.cc/150?img=44"
  }
]

export default function TestimonialsSection() {
  // Duplicate array for seamless infinite scroll
  const scrollItems = [...testimonials, ...testimonials]

  return (
    <section className="py-32 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Trusted by Innovators</h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg">
          See how leading healthcare organizations are transforming patient care with Pharmagen.
        </p>
      </div>

      <div className="relative w-full max-w-[100vw] mx-auto overflow-hidden">
        {/* Side blur masks for modern feel */}
        <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10"></div>
        <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10"></div>

        {/* Scrolling track */}
        <div className="flex gap-6 w-max animate-scroll hover:[animation-play-state:paused]">
          {scrollItems.map((testimonial, i) => (
            <div key={i} className="w-[400px] glass p-8 rounded-2xl shrink-0 cursor-pointer">
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-slate-300 text-lg leading-relaxed mb-8 italic">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12">
                  <Image 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    fill
                    sizes="48px"
                    className="rounded-full border-2 border-primary/20 object-cover" 
                  />
                </div>
                <div>
                  <h4 className="text-white font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-slate-400">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
