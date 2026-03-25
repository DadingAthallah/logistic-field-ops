import { useEffect, useRef } from "react"
import { ClipboardList, Truck, CheckCircle2 } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Add Jobs",
    body: "Create a delivery or service job in seconds — customer address, priority, notes. Attach files, set schedule, done.",
    detail: "Bulk import via CSV or API",
  },
  {
    number: "02",
    icon: Truck,
    title: "Assign Drivers",
    body: "Drag-drop a job to a driver on the map, or let FleetFlow auto-assign based on proximity and current workload.",
    detail: "Auto-assign by zone & capacity",
  },
  {
    number: "03",
    icon: CheckCircle2,
    title: "Track & Confirm",
    body: "Monitor live ETAs, get notified on delivery confirmation. POD photo and signature land in your dashboard instantly.",
    detail: "Digital POD in < 30 seconds",
  },
]

export function HowItWorks() {
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
    <section id="how-it-works" ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="reveal text-center mb-20">
          <p className="text-[var(--brand-orange)] text-sm font-bold tracking-[0.15em] uppercase mb-4">
            Simple process
          </p>
          <h2
            className="text-4xl md:text-5xl font-black text-[var(--brand-navy)] leading-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Up and running
            <br />
            in three steps
          </h2>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting dashed line */}
          <div className="hidden md:block absolute top-10 left-[calc(16.666%+24px)] right-[calc(16.666%+24px)] h-px border-t-2 border-dashed border-orange-200 pointer-events-none" />

          <div className="grid md:grid-cols-3 gap-8 relative">
            {steps.map((s, i) => {
              const Icon = s.icon
              return (
                <div key={s.number} className={`reveal reveal-delay-${(i + 1) * 100} flex flex-col items-center text-center`}>
                  {/* Orange circle */}
                  <div className="relative mb-8 z-10">
                    <div className="w-20 h-20 rounded-full bg-[var(--brand-orange)] flex items-center justify-center shadow-lg shadow-orange-200">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    {/* Step number */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[var(--brand-navy)] flex items-center justify-center">
                      <span className="text-white text-xs font-black font-mono">{s.number}</span>
                    </div>
                  </div>

                  <h3
                    className="text-xl font-bold text-[var(--brand-navy)] mb-3"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {s.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4 max-w-xs">{s.body}</p>

                  {/* Detail pill */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-orange-50 border border-orange-100 rounded-full text-xs font-semibold text-[var(--brand-orange)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--brand-orange)]" />
                    {s.detail}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
