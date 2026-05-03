import ScrollReveal from './scroll-reveal'

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
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-500/10 blur-[120px] rounded-full"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
          {stats.map((stat, idx) => (
            <ScrollReveal key={idx} direction="up" delay={idx * 0.1}>
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
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
