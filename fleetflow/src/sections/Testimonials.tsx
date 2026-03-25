import { useEffect, useRef } from "react"
import { Star } from "lucide-react"

const testimonials = [
  {
    quote:
      "We went from calling drivers every 30 minutes to watching them move on a live map. Failed deliveries dropped 38% in the first month. The paper POD nightmare is completely gone.",
    name: "Sarah Nguyen",
    role: "Operations Manager",
    company: "QuickHaul Logistics",
    region: "Melbourne, AU",
    stats: [
      { value: "38%", label: "fewer failed deliveries" },
      { value: "100%", label: "paperless PODs" },
    ],
  },
  {
    quote:
      "As a business owner I finally have the data to justify adding two more drivers. I can see cost-per-delivery, zone profitability, and driver performance in one dashboard. FleetFlow pays for itself.",
    name: "James Okafor",
    role: "Owner & Founder",
    company: "DirectRun Couriers",
    region: "Houston, TX",
    stats: [
      { value: "1:25",  label: "dispatcher-to-driver ratio" },
      { value: "$2.3K", label: "monthly cost savings" },
    ],
  },
]

export function Testimonials() {
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
    <section id="testimonials" ref={ref} className="py-24 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="reveal text-center mb-16">
          <p className="text-[var(--brand-orange)] text-sm font-bold tracking-[0.15em] uppercase mb-4">
            Real results
          </p>
          <h2
            className="text-4xl md:text-5xl font-black text-[var(--brand-navy)] leading-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Ops managers who
            <br />
            made the switch
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`reveal reveal-delay-${(i + 1) * 100} bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300`}
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-6">
                {[...Array(5)].map((_, si) => (
                  <Star key={si} className="w-4 h-4 fill-[var(--brand-orange)] text-[var(--brand-orange)]" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-gray-700 text-base leading-relaxed mb-8 relative">
                <span className="absolute -top-3 -left-1 text-5xl text-orange-100 font-serif leading-none">"</span>
                <span className="relative">{t.quote}</span>
              </blockquote>

              {/* Stats */}
              <div className="flex gap-6 mb-8 p-4 bg-[#F9FAFB] rounded-xl border border-gray-100">
                {t.stats.map((s) => (
                  <div key={s.label}>
                    <div className="text-xl font-black text-[var(--brand-orange)] font-mono">{s.value}</div>
                    <div className="text-xs text-gray-400 mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-bold text-[var(--brand-navy)]">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.role} · {t.company}</p>
                  <p className="text-xs text-gray-400">{t.region}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
