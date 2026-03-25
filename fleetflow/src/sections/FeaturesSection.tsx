import { useEffect, useRef } from "react"
import { MapPin, Camera, Route, BarChart3 } from "lucide-react"

const features = [
  {
    icon: MapPin,
    title: "Live Driver Tracking",
    body: "See every driver on the map in real time. No more calling to ask 'where are you?' — know instantly, act instantly.",
    stat: "1:25",
    statLabel: "dispatcher-to-driver ratio",
  },
  {
    icon: Camera,
    title: "Digital Proof of Delivery",
    body: "Photo capture + customer signature on the driver's phone. Stored in the cloud, timestamped, legally valid in AU and US.",
    stat: "<1%",
    statLabel: "digital POD dispute rate",
  },
  {
    icon: Route,
    title: "Route Optimization",
    body: "FleetFlow sequences stops to minimize drive time. Add a job mid-run and the route automatically reorders around it.",
    stat: "34 min",
    statLabel: "avg delivery time",
  },
  {
    icon: BarChart3,
    title: "Performance Reporting",
    body: "End-of-day dashboards showing on-time %, failed deliveries per driver, and zone-level profitability — no manual Excel.",
    stat: "40%",
    statLabel: "reduction in late deliveries",
  },
]

export function FeaturesSection() {
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
    <section id="features" ref={ref} className="py-24 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="reveal text-center mb-16">
          <p className="text-[var(--brand-orange)] text-sm font-bold tracking-[0.15em] uppercase mb-4">
            Everything you need
          </p>
          <h2
            className="text-4xl md:text-5xl font-black text-[var(--brand-navy)] leading-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Built for the chaos
            <br />
            of last-mile logistics
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => {
            const Icon = f.icon
            return (
              <div
                key={f.title}
                className={`reveal reveal-delay-${(i + 1) * 100} bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group flex flex-col`}
              >
                <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center mb-6 group-hover:bg-orange-100 transition-colors">
                  <Icon className="w-6 h-6 text-[var(--brand-orange)]" />
                </div>
                <h3 className="text-base font-bold text-[var(--brand-navy)] mb-2">{f.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed flex-1">{f.body}</p>
                <div className="mt-6 pt-4 border-t border-gray-50">
                  <div className="font-mono text-lg font-bold text-[var(--brand-orange)]">{f.stat}</div>
                  <div className="text-xs text-gray-400 mt-0.5">{f.statLabel}</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
