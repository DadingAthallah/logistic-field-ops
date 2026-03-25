import { useEffect, useRef } from "react"
import { Shield, Smartphone, Monitor } from "lucide-react"

const features = [
  { icon: Monitor, label: "Web Dashboard", desc: "Full dispatch control center" },
  { icon: Smartphone, label: "Driver App", desc: "iOS & Android, offline-capable" },
  { icon: Shield, label: "Digital POD", desc: "Photo + legal e-signature" },
]

export function AppMockup() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const els = ref.current?.querySelectorAll(".reveal")
    if (!els) return
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible") }),
      { threshold: 0.1 }
    )
    els.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section ref={ref} className="py-24 bg-[#F9FAFB] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — copy */}
          <div>
            <div className="reveal">
              <p className="text-[var(--brand-orange)] text-sm font-bold tracking-[0.15em] uppercase mb-4">
                Built for the field
              </p>
              <h2
                className="text-4xl md:text-5xl font-black text-[var(--brand-navy)] leading-tight mb-6"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                One platform,
                <br />
                two screens
              </h2>
              <p className="text-gray-500 text-base leading-relaxed mb-8">
                Your dispatcher controls the full picture from the web. Your drivers get a clean,
                glove-friendly mobile app that works even when the signal drops.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {features.map((f, i) => {
                const Icon = f.icon
                return (
                  <div
                    key={f.label}
                    className={`reveal reveal-delay-${(i + 1) * 100} flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-100 shadow-sm hover:border-orange-200 hover:shadow-md transition-all duration-300`}
                  >
                    <div className="w-10 h-10 rounded-lg bg-orange-50 border border-orange-100 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-[var(--brand-orange)]" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-[var(--brand-navy)]">{f.label}</p>
                      <p className="text-xs text-gray-400">{f.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right — visual composite */}
          <div className="reveal reveal-delay-200 relative flex justify-center">
            {/* Laptop frame */}
            <div className="relative w-full max-w-lg">
              <div className="bg-[var(--brand-navy)] rounded-2xl p-3 shadow-2xl border border-white/10">
                <div className="bg-[#1a3550] rounded-xl overflow-hidden aspect-[16/9] flex items-center justify-center relative">
                  <img
                    src="/hero-map.png"
                    alt="FleetFlow dispatch dashboard"
                    className="w-full h-full object-cover"
                  />
                  {/* Live badge */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-black/60 backdrop-blur-sm rounded-full px-2.5 py-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-white text-[10px] font-mono font-medium">LIVE</span>
                  </div>
                </div>
                {/* Laptop base */}
                <div className="h-2 bg-[var(--brand-navy-light)] rounded-b-lg mt-2" />
              </div>

              {/* Phone mockup */}
              <div className="absolute -bottom-6 -right-4 w-28 bg-[var(--brand-navy)] rounded-2xl p-1.5 shadow-xl border border-white/10">
                <div className="bg-[#1a3550] rounded-xl overflow-hidden aspect-[9/19] flex flex-col">
                  {/* Phone header */}
                  <div className="px-2 py-2 border-b border-white/10">
                    <div className="text-white text-[8px] font-bold font-mono">TODAY'S JOBS</div>
                  </div>
                  {/* Job cards */}
                  {[
                    { id: "#JB-4401", status: "In Transit", color: "bg-green-400" },
                    { id: "#JB-4402", status: "Delivered", color: "bg-blue-400" },
                    { id: "#JB-4403", status: "Pending", color: "bg-yellow-400" },
                  ].map((j) => (
                    <div key={j.id} className="flex items-center gap-1.5 px-2 py-1.5 border-b border-white/5">
                      <div className={`w-1.5 h-1.5 rounded-full ${j.color} flex-shrink-0`} />
                      <div>
                        <div className="text-white text-[7px] font-mono font-bold">{j.id}</div>
                        <div className="text-white/40 text-[6px]">{j.status}</div>
                      </div>
                    </div>
                  ))}
                  {/* CTA */}
                  <div className="mt-auto p-2">
                    <div className="bg-[var(--brand-orange)] rounded-lg py-1.5 text-center">
                      <span className="text-white text-[7px] font-bold">START JOB</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
