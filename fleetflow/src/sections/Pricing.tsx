import { useEffect, useRef } from "react"
import { Check, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

const tiers = [
  {
    name: "Starter",
    price: "$79",
    period: "/month",
    description: "For small operations up to 10 drivers",
    features: [
      "Up to 10 drivers",
      "Live GPS tracking",
      "Digital POD capture",
      "Basic reporting",
      "Email support",
      "1 dispatcher seat",
    ],
    cta: "Start Free Trial",
    popular: false,
    variant: "outline" as const,
  },
  {
    name: "Pro",
    price: "$249",
    period: "/month",
    description: "For growing teams who need full visibility",
    features: [
      "Up to 30 drivers",
      "Everything in Starter",
      "Route optimization",
      "Zone & SLA management",
      "Customer SMS notifications",
      "Advanced analytics",
      "5 dispatcher seats",
      "Priority support",
    ],
    cta: "Start Free Trial",
    popular: true,
    variant: "default" as const,
  },
  {
    name: "Fleet",
    price: "Custom",
    period: "",
    description: "For large fleets with custom requirements",
    features: [
      "Unlimited drivers",
      "Everything in Pro",
      "API access & webhooks",
      "Custom integrations",
      "Dedicated account manager",
      "SLA guarantee",
      "Unlimited dispatcher seats",
      "White-label option",
    ],
    cta: "Talk to Sales",
    popular: false,
    variant: "outline" as const,
  },
]

export function Pricing() {
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
    <section id="pricing" ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="reveal text-center mb-16">
          <p className="text-[var(--brand-orange)] text-sm font-bold tracking-[0.15em] uppercase mb-4">
            Pricing
          </p>
          <h2
            className="text-4xl md:text-5xl font-black text-[var(--brand-navy)] leading-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Simple pricing,
            <br />
            real ROI
          </h2>
          <p className="text-gray-500 mt-4 max-w-md mx-auto">
            All plans include a 14-day free trial. No credit card required.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((tier, i) => (
            <div
              key={tier.name}
              className={cn(
                `reveal reveal-delay-${(i + 1) * 100} relative rounded-2xl p-8 flex flex-col`,
                tier.popular
                  ? "bg-[var(--brand-navy)] border-2 border-[var(--brand-orange)] shadow-orange-200 shadow-xl -translate-y-2"
                  : "bg-white border border-gray-200 shadow-sm hover:shadow-md hover:border-orange-200 transition-all duration-300"
              )}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge className="bg-[var(--brand-orange)] text-white border-0 px-4 py-1 rounded-full font-bold text-xs gap-1.5">
                    <Zap className="w-3 h-3" />
                    Most Popular
                  </Badge>
                </div>
              )}

              <div className="mb-8">
                <h3
                  className={cn("text-lg font-bold mb-1", tier.popular ? "text-white" : "text-[var(--brand-navy)]")}
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {tier.name}
                </h3>
                <p className={cn("text-xs mb-4", tier.popular ? "text-white/50" : "text-gray-400")}>
                  {tier.description}
                </p>
                <div className="flex items-end gap-1">
                  <span
                    className={cn("text-4xl font-black font-mono", tier.popular ? "text-white" : "text-[var(--brand-navy)]")}
                  >
                    {tier.price}
                  </span>
                  {tier.period && (
                    <span className={cn("text-sm pb-1", tier.popular ? "text-white/50" : "text-gray-400")}>
                      {tier.period}
                    </span>
                  )}
                </div>
              </div>

              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm">
                    <Check
                      className={cn("w-4 h-4 flex-shrink-0", tier.popular ? "text-[var(--brand-orange)]" : "text-[var(--brand-orange)]")}
                    />
                    <span className={tier.popular ? "text-white/80" : "text-gray-600"}>{f}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={cn(
                  "w-full rounded-full font-bold h-11",
                  tier.popular
                    ? "bg-[var(--brand-orange)] hover:bg-orange-500 text-white"
                    : "border-[var(--brand-navy)] text-[var(--brand-navy)] hover:bg-[var(--brand-navy)] hover:text-white"
                )}
                variant={tier.popular ? "default" : "outline"}
              >
                {tier.cta}
              </Button>
            </div>
          ))}
        </div>

        <p className="reveal text-center text-xs text-gray-400 mt-8">
          All prices in USD. Annual billing available at 20% discount.
        </p>
      </div>
    </section>
  )
}
