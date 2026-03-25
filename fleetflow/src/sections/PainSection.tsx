import { useEffect, useRef } from "react"
import { MessageCircle, Table2, FileX } from "lucide-react"

const pains = [
  {
    icon: MessageCircle,
    title: "Dispatch chaos via WhatsApp",
    body: "Your drivers don't know their pickup order until you've sent 15 messages in a group chat — and someone always misses one.",
  },
  {
    icon: Table2,
    title: "Spreadsheets that lie",
    body: "By the time your Excel sheet is updated, three drivers have already moved on. You're always flying blind, one phone call behind.",
  },
  {
    icon: FileX,
    title: "Lost paper PODs cost real money",
    body: "Signature on a wet delivery docket that got left in the van? That's a disputed invoice. Paper POD dispute rate sits at 12–18%.",
  },
]

export function PainSection() {
  const ref = useRef<HTMLDivElement>(null)

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
    <section ref={ref} className="py-24 bg-[var(--brand-navy)] relative overflow-hidden">
      {/* Subtle texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: "radial-gradient(circle at 70% 50%, rgba(249,115,22,0.12) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="reveal text-center mb-16">
          <p className="text-[var(--brand-orange)] text-sm font-bold tracking-[0.15em] uppercase mb-4">
            Sound familiar?
          </p>
          <h2
            className="text-4xl md:text-5xl font-black text-white leading-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Still running dispatch on
            <br />
            <span className="text-white/50">spreadsheets and WhatsApp?</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {pains.map((p, i) => {
            const Icon = p.icon
            return (
              <div
                key={p.title}
                className={`reveal reveal-delay-${(i + 1) * 100} bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/8 hover:border-orange-500/30 transition-all duration-300 group`}
              >
                <div className="w-12 h-12 rounded-xl bg-orange-500/15 border border-orange-500/20 flex items-center justify-center mb-6 group-hover:bg-orange-500/25 transition-colors">
                  <Icon className="w-6 h-6 text-[var(--brand-orange)]" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{p.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{p.body}</p>
              </div>
            )
          })}
        </div>

        {/* Bottom callout */}
        <div className="reveal reveal-delay-400 mt-12 text-center">
          <p className="text-white/40 text-sm">
            Average failed delivery re-attempt costs{" "}
            <span className="text-orange-400 font-semibold">$12–$18</span> per attempt.
            {" "}Every. Single. Time.
          </p>
        </div>
      </div>
    </section>
  )
}
