'use client'

import { Button } from '@/components/ui/button'

export default function CtaSection() {
  return (
    <section className="py-24 bg-slate-50 border-t border-slate-100 text-center">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
          Partner with Pharmagen Today
        </h2>
        <p className="text-lg text-slate-600 mb-10">
          Whether you are a healthcare provider, distributor, or research institution, we are ready to collaborate and supply the medical solutions you need.
        </p>
        <Button className="bg-primary hover:bg-primary/90 text-white font-semibold px-10 py-6 rounded shadow-md text-lg transition-colors">
          Get in Touch
        </Button>
      </div>
    </section>
  )
}
