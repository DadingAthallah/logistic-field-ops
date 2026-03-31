import { useEffect, useRef } from "react"
import { Shield, Smartphone, Monitor, ChevronRight, Navigation } from "lucide-react"
import { DashboardPreview } from "@/components/DashboardPreview"

const features = [
  { icon: Monitor, label: "Web Dispatch Center", desc: "Real-time command & control" },
  { icon: Smartphone, label: "Driver Mobile App", desc: "iOS & Android, offline-ready" },
  { icon: Shield, label: "Digital POD System", desc: "Biometric & photo validation" },
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
    <section ref={ref} className="py-24 bg-[#F9FAFB] overflow-hidden lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left — copy */}
          <div className="max-w-xl">
            <div className="reveal">
              <p className="text-[var(--brand-orange)] text-sm font-bold tracking-[0.2em] uppercase mb-5">
                The Control Center
              </p>
              <h2
                className="text-4xl md:text-5xl lg:text-6xl font-black text-[var(--brand-navy)] leading-[1.1] mb-8"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Seamless alur
                <br />
                dari HQ ke Lapangan
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-10">
                Hubungkan operasional kantor pusat dengan armada Anda secara real-time. Bagikan rute teroptimasi, 
                pantau setiap pergerakan, dan terima bukti pengiriman tepat saat tugas selesai.
              </p>
            </div>

            <div className="flex flex-col gap-5">
              {features.map((f, i) => {
                const Icon = f.icon
                return (
                  <div
                    key={f.label}
                    className={`reveal reveal-delay-${(i + 1) * 100} group flex items-start gap-5 p-5 bg-white rounded-2xl border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:border-orange-200 hover:shadow-[0_10px_30px_-5px_rgba(249,115,22,0.1)] transition-all duration-500`}
                  >
                    <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-[var(--brand-orange)]" />
                    </div>
                    <div className="flex-1 pr-4">
                      <p className="text-base font-bold text-[var(--brand-navy)] mb-1">{f.label}</p>
                      <p className="text-sm text-gray-400 font-medium leading-normal">{f.desc}</p>
                    </div>
                    <div className="self-center opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all">
                       <ChevronRight className="w-5 h-5 text-orange-400" />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right — visual composite (The Dashboard & Phone) */}
          <div className="reveal reveal-delay-200 relative">
            {/* Desktop Frame */}
            <div className="relative z-10 p-2 lg:p-4 bg-[var(--brand-navy)] rounded-[2.5rem] shadow-[0_40px_80px_-15px_rgba(15,34,56,0.4)] border border-white/10 scale-100 lg:scale-110 origin-center transition-transform hover:scale-[1.12] duration-700">
               <div className="bg-[#1a3550] rounded-[1.8rem] overflow-hidden aspect-[16/10] relative">
                  <DashboardPreview />
               </div>
               
               {/* Laptop Reflection/Glass Effect */}
               <div className="absolute inset-x-8 top-8 h-1/2 bg-gradient-to-b from-white/5 to-transparent pointer-events-none rounded-t-[1.8rem]" />
            </div>

            {/* Mobile Driver App - Overlapping */}
            <div className="absolute -bottom-10 -left-6 lg:-left-12 z-20 w-40 lg:w-48 bg-[#0F2238] rounded-[3rem] p-2.5 shadow-[0_30px_60px_-10px_rgba(0,0,0,0.6)] border border-white/20 animate-bounce-subtle">
               <div className="bg-[#111827] rounded-[2.2rem] overflow-hidden aspect-[9/19] flex flex-col relative">
                  {/* Status Bar */}
                  <div className="h-6 flex items-center justify-center">
                     <div className="w-16 h-1 bg-white/10 rounded-full mt-2" />
                  </div>
                  
                  {/* App UI */}
                  <div className="flex-1 p-4 flex flex-col gap-4">
                     <div className="flex items-center justify-between">
                        <div className="flex flex-col">
                           <span className="text-[8px] font-bold text-orange-500 uppercase">Current Job</span>
                           <span className="text-xs font-black text-white">#JB-4401</span>
                        </div>
                        <div className="size-8 rounded-full bg-white/5 flex items-center justify-center">
                           <Navigation className="size-4 text-white/40" />
                        </div>
                     </div>
                     
                     <div className="flex-1 bg-white/5 rounded-2xl p-4 flex flex-col border border-white/10">
                        <div className="flex items-center gap-3">
                           <div className="size-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                           <span className="text-[10px] font-bold text-white/80">Heading: North Park</span>
                        </div>
                        <div className="mt-4 space-y-3">
                           <div className="h-2 w-full bg-white/5 rounded" />
                           <div className="h-2 w-2/3 bg-white/5 rounded" />
                        </div>
                        <div className="mt-auto bg-orange-500 rounded-xl py-2.5 text-center shadow-lg shadow-orange-500/20">
                           <span className="text-[10px] font-black text-white uppercase tracking-wider">Arrive at Stop</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-orange-500/10 blur-[100px] pointer-events-none rounded-full" />
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-subtle {
          animation: bounce-subtle 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}
