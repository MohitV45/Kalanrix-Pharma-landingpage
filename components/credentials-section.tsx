import Image from 'next/image'

export default function CredentialsSection() {
  const stats = [
    { value: "2018", label: "Year Founded", suffix: "" },
    { value: "150", label: "Products", suffix: "+" },
    { value: "ISO", label: "Certified", suffix: " 9001" },
    { value: "PAN", label: "India", suffix: " Reach" }
  ]

  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/20 blur-[60px] rounded-full will-change-transform transform-gpu"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-500/10 blur-[60px] rounded-full will-change-transform transform-gpu"></div>
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/10 blur-[100px] rounded-full will-change-transform transform-gpu"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-500/5 blur-[100px] rounded-full will-change-transform transform-gpu"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            A Culture of Excellence & Integrity
          </h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Our credentials reflect our commitment to maintaining the highest standards of quality and regulatory compliance in everything we do.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className={`reveal reveal-up reveal-stagger-${(idx % 5) + 1}`}>
              <div className="text-center group">
                <div className="relative inline-block mb-2">
                  <span className="text-4xl md:text-5xl font-extrabold tracking-tight text-white group-hover:text-primary transition-colors duration-300">
                    {stat.value}
                  </span>
                  <span className="text-2xl md:text-3xl font-bold text-primary ml-0.5">
                    {stat.suffix}
                  </span>
                  {/* Underline effect */}
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary/30 group-hover:w-16 group-hover:bg-primary transition-all duration-500 rounded-full"></div>
                </div>
                <div className="text-xs md:text-sm text-slate-400 uppercase tracking-[0.2em] font-bold mt-4">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certification Logos */}
        <div className="reveal reveal-up reveal-stagger-2">
          <div className="mt-16 pt-8 border-t border-white/5 flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 hover:opacity-100 transition-opacity duration-500">
            {[
              { src: "/gmp.png", alt: "GMP Certified" },
              { src: "/iso-logo.png", alt: "ISO 9001:2015" },
              { src: "/halal-logo.png", alt: "Halal Quality" }
            ].map((logo, idx) => (
              <div key={idx} className="relative h-12 w-24 md:h-20 md:w-40 grayscale invert hover:grayscale-0 hover:invert-0 transition-all duration-500">
                <Image 
                  src={logo.src} 
                  alt={logo.alt} 
                  width={160}
                  height={80}
                  className="object-contain w-full h-full"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
