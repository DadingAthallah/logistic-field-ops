import { useEffect, useRef, useState } from "react"

interface StatItem {
  value: string
  suffix: string
  label: string
  description: string
}

const stats: StatItem[] = [
  { value: "10", suffix: "K+", label: "Active Drivers", description: "using FleetFlow every day" },
  { value: "98", suffix: "%", label: "On-Time Rate", description: "average across all fleet operators" },
  { value: "40", suffix: "%", label: "Fewer Late Deliveries", description: "vs paper-based dispatch" },
  { value: "4", suffix: "×", label: "Driver Capacity", description: "per dispatcher with FleetFlow" },
]

function AnimatedStat({ item, visible }: { item: StatItem; visible: boolean }) {
  const [count, setCount] = useState(0)
  const targetNum = parseInt(item.value)

  useEffect(() => {
    if (!visible) return
    let start = 0
    const step = targetNum / 40
    const timer = setInterval(() => {
      start += step
      if (start >= targetNum) {
        setCount(targetNum)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 30)
    return () => clearInterval(timer)
  }, [visible, targetNum])

  return (
    <div className="text-center px-8 py-6">
      <div className="text-4xl md:text-5xl font-black text-[var(--brand-navy)] font-mono leading-none mb-1">
        {visible ? count : 0}{item.suffix}
      </div>
      <div className="text-sm font-bold text-gray-800 mt-2 mb-0.5">{item.label}</div>
      <div className="text-xs text-gray-400">{item.description}</div>
    </div>
  )
}

export function StatsBar() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold: 0.3 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section ref={ref} className="bg-white border-y border-gray-100 py-2">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-gray-100">
          {stats.map((s) => (
            <AnimatedStat key={s.label} item={s} visible={visible} />
          ))}
        </div>
      </div>
    </section>
  )
}
