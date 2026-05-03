'use client'

export default function CredentialsSection() {
  return (
    <section className="py-16 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/20 text-center">
          <div className="px-4">
            <div className="text-4xl font-bold mb-2">25+</div>
            <div className="text-sm text-primary-foreground/80 uppercase tracking-wider font-semibold">Years of Excellence</div>
          </div>
          <div className="px-4">
            <div className="text-4xl font-bold mb-2">150+</div>
            <div className="text-sm text-primary-foreground/80 uppercase tracking-wider font-semibold">Products Formulated</div>
          </div>
          <div className="px-4">
            <div className="text-4xl font-bold mb-2">ISO</div>
            <div className="text-sm text-primary-foreground/80 uppercase tracking-wider font-semibold">9001:2015 Certified</div>
          </div>
          <div className="px-4">
            <div className="text-4xl font-bold mb-2">50+</div>
            <div className="text-sm text-primary-foreground/80 uppercase tracking-wider font-semibold">Countries Reached</div>
          </div>
        </div>
      </div>
    </section>
  )
}
