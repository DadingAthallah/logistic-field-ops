import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Play } from "lucide-react"
import { useEffect, useRef } from "react"

export function Hero() {
  const imgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = imgRef.current
    if (!el) return
    setTimeout(() => el.classList.add("visible"), 300)
  }, [])

  return (
    <section className="hero-pattern min-h-screen flex items-center pt-16 relative overflow-hidden">
      {/* Radial orange glow bottom-left */}
      <div
        className="absolute bottom-0 left-1/4 w-[600px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, rgba(249,115,22,0.15) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center w-full">
        {/* Left — copy */}
        <div className="reveal visible">
          <Badge
            className="mb-6 inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full border border-orange-400/40 bg-orange-500/10 text-orange-300"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
            Live dispatch platform
          </Badge>

          <h1
            className="text-5xl md:text-6xl font-black text-white leading-[1.05] tracking-tight mb-6"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Deliver More.
            <br />
            <span className="text-[var(--brand-orange)]">Stress Less.</span>
          </h1>

          <p className="text-lg text-white/65 leading-relaxed mb-8 max-w-lg">
            FleetFlow gives your dispatch team real-time driver visibility, digital proof-of-delivery,
            and automated route optimization — all in one platform.
          </p>

          <div className="flex flex-wrap gap-3">
            <Button
              size="lg"
              className="bg-[var(--brand-orange)] hover:bg-orange-500 text-white font-bold rounded-full px-8 h-12 gap-2 animate-pulse-ring"
            >
              Start Free Trial
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-8 h-12 border-white/20 text-white bg-white/5 hover:bg-white/10 gap-2"
            >
              <Play className="w-4 h-4" />
              Watch Demo
            </Button>
          </div>

          {/* Trust badges */}
          <div className="mt-10 flex flex-wrap items-center gap-6 text-white/40 text-xs font-medium">
            <span>No credit card required</span>
            <span className="w-1 h-1 rounded-full bg-white/30" />
            <span>14-day free trial</span>
            <span className="w-1 h-1 rounded-full bg-white/30" />
            <span>Cancel anytime</span>
          </div>
        </div>

        {/* Right — map mockup */}
        <div
          ref={imgRef}
          className="reveal reveal-delay-200 relative"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl orange-glow border border-white/10">
            <img
              src="/hero-map.png"
              alt="FleetFlow dispatch command center showing live driver locations on a city map"
              className="w-full h-auto block"
            />

            {/* Floating live indicator */}
            <div className="absolute top-4 left-4 flex items-center gap-2 bg-[var(--brand-navy)]/90 backdrop-blur-sm border border-white/10 rounded-full px-3 py-1.5">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-white text-xs font-medium font-mono">LIVE — 8 drivers active</span>
            </div>

            {/* Floating KPI card */}
            <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-lg min-w-[140px]">
              <p className="text-[10px] text-gray-400 font-medium mb-0.5">On-time rate</p>
              <p className="text-2xl font-black text-[var(--brand-navy)] font-mono">88.3%</p>
              <p className="text-[10px] text-green-600 font-medium mt-0.5">↑ 2.1% vs yesterday</p>
            </div>
          </div>

          {/* Decorative */}
          <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-full bg-orange-500/5 blur-2xl pointer-events-none" />
        </div>
      </div>
    </section>
  )
}
