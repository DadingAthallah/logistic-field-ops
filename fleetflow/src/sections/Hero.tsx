import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Play } from "lucide-react"
import { useEffect, useRef } from "react"
import { Globe } from "@/components/ui/globe"

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

        {/* Right — Interactive Globe */}
        <div
          ref={imgRef}
          className="reveal reveal-delay-200 relative flex items-center justify-center h-full min-h-[400px] lg:min-h-[600px]"
        >
          <div className="relative w-full max-w-[500px] lg:max-w-none aspect-square">
            <Globe
              className="w-full h-full"
              speed={0.003}
              markers={[
                { id: "marcus", location: [37.7749, -122.4194], label: "Marcus Webb", status: "in-transit" },
                { id: "priya", location: [51.5074, -0.1278], label: "Priya Nair", status: "active" },
                { id: "chen", location: [35.6762, 139.6503], label: "Chen Wei", status: "active" },
                { id: "sofia", location: [-33.8688, 151.2093], label: "Sofia R.", status: "assigned" },
                { id: "amir", location: [25.2048, 55.2708], label: "Amir Khan", status: "in-transit" },
                { id: "elena", location: [48.8566, 2.3522], label: "Elena D.", status: "failed" },
                { id: "pedro", location: [-23.5505, -46.6333], label: "Pedro Silva", status: "in-transit" },
                { id: "kwame", location: [6.5244, 3.3792], label: "Kwame A.", status: "active" },
                { id: "arjun", location: [19.0760, 72.8777], label: "Arjun M.", status: "assigned" },
                { id: "li-wei", location: [1.3521, 103.8198], label: "Li Wei", status: "active" },
                { id: "thabo", location: [-33.9249, 18.4241], label: "Thabo M.", status: "in-transit" },
              ]}
              arcs={[
                { id: "sf-tokyo", from: [37.7749, -122.4194], to: [35.6762, 139.6503] },
                { id: "london-dubai", from: [51.5074, -0.1278], to: [25.2048, 55.2708] },
                { id: "dubai-singapore", from: [25.2048, 55.2708], to: [1.3521, 103.8198] },
                { id: "singapore-sydney", from: [1.3521, 103.8198], to: [-33.8688, 151.2093] },
                { id: "sf-saopaulo", from: [37.7749, -122.4194], to: [-23.5505, -46.6333] },
                { id: "london-lagos", from: [51.5074, -0.1278], to: [6.5244, 3.3792] },
                { id: "dubai-mumbai", from: [25.2048, 55.2708], to: [19.0760, 72.8777] },
                { id: "saopaulo-capetown", from: [-23.5505, -46.6333], to: [-33.9249, 18.4241] },
              ]}
            />

            {/* Floating live indicator */}
            <div className="absolute top-4 left-4 z-10 flex items-center gap-2 bg-[var(--brand-navy)]/90 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 shadow-2xl">
              <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.5)]" />
              <span className="text-white text-xs font-bold font-mono tracking-wider">GLOBAL — 1,248 ACTIVE ROUTES</span>
            </div>

            {/* Floating KPI card */}
            <div className="absolute bottom-10 right-4 z-10 bg-white/95 backdrop-blur-xl rounded-2xl p-4 shadow-[0_20px_50px_rgba(0,0,0,0.2)] border border-white/20 min-w-[180px]">
              <div className="flex items-center justify-between mb-2">
                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Global On-time</p>
                <div className="bg-green-100 text-green-700 text-[10px] font-black px-1.5 py-0.5 rounded">↑ 2%</div>
              </div>
              <p className="text-3xl font-black text-[var(--brand-navy)] font-mono leading-none">99.1%</p>
              <div className="mt-3 w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                <div className="bg-[var(--brand-orange)] h-full w-[99%]" />
              </div>
            </div>

            {/* Decorative Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[var(--brand-orange)]/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
