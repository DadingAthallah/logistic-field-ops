import { useState, useEffect, useRef } from "react"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

function calcHours(drivers: number, deliveries: number) {
  // drivers × deliveries/day × 22 working days × 8 min saved / 60
  return Math.round((drivers * deliveries * 22 * 8) / 60)
}

function calcCost(drivers: number, deliveries: number) {
  // ~$18 saved per failed re-attempt; assume 5% failure rate improvement
  return Math.round(drivers * deliveries * 22 * 0.05 * 15)
}

export function ROICalculator() {
  const [drivers, setDrivers] = useState(10)
  const [deliveries, setDeliveries] = useState(20)
  const ref = useRef<HTMLDivElement>(null)

  const hours = calcHours(drivers, deliveries)
  const savings = calcCost(drivers, deliveries)

  useEffect(() => {
    const els = ref.current?.querySelectorAll(".reveal")
    if (!els) return
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible") }),
      { threshold: 0.15 }
    )
    els.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="reveal text-center mb-16">
          <p className="text-[var(--brand-orange)] text-sm font-bold tracking-[0.15em] uppercase mb-4">
            See your savings
          </p>
          <h2
            className="text-4xl md:text-5xl font-black text-[var(--brand-navy)] leading-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            How much are
            <br />
            inefficiencies costing you?
          </h2>
        </div>

        <div className="reveal max-w-3xl mx-auto bg-[#F9FAFB] rounded-3xl border border-gray-100 p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-10 mb-10">
            {/* Drivers slider */}
            <div>
              <div className="flex justify-between items-baseline mb-4">
                <label className="text-sm font-bold text-[var(--brand-navy)]">Number of drivers</label>
                <span className="text-2xl font-black text-[var(--brand-orange)] font-mono">{drivers}</span>
              </div>
              <Slider
                min={1}
                max={50}
                step={1}
                value={[drivers]}
                onValueChange={([v]) => setDrivers(v)}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-gray-400 mt-2">
                <span>1</span><span>50</span>
              </div>
            </div>

            {/* Deliveries slider */}
            <div>
              <div className="flex justify-between items-baseline mb-4">
                <label className="text-sm font-bold text-[var(--brand-navy)]">Deliveries per driver / day</label>
                <span className="text-2xl font-black text-[var(--brand-orange)] font-mono">{deliveries}</span>
              </div>
              <Slider
                min={1}
                max={60}
                step={1}
                value={[deliveries]}
                onValueChange={([v]) => setDeliveries(v)}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-gray-400 mt-2">
                <span>1</span><span>60</span>
              </div>
            </div>
          </div>

          {/* Result */}
          <div className="bg-[var(--brand-navy)] rounded-2xl p-8 text-center">
            <p className="text-white/60 text-sm mb-4">With FleetFlow, your team could save</p>

            <div className="flex items-center justify-center gap-8 mb-4">
              <div>
                <div className="text-5xl font-black text-[var(--brand-orange)] font-mono leading-none">{hours}</div>
                <div className="text-white/60 text-xs mt-1">hours/month</div>
              </div>
              <div className="text-white/20 text-2xl font-light">+</div>
              <div>
                <div className="text-5xl font-black text-white font-mono leading-none">${savings.toLocaleString()}</div>
                <div className="text-white/60 text-xs mt-1">in failed delivery costs</div>
              </div>
            </div>

            <p className="text-white/40 text-xs mb-6">
              Based on industry benchmarks: 8 min/delivery saved, 5% failed re-attempt reduction @ $15/attempt
            </p>

            <Button
              className="bg-[var(--brand-orange)] hover:bg-orange-500 text-white font-bold rounded-full px-8 gap-2"
            >
              Book a Demo to confirm your savings
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
