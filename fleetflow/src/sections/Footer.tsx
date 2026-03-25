import { Truck, X, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

const links = {
  Product: ["Features", "How It Works", "Pricing", "Changelog"],
  Company: ["About", "Blog", "Careers", "Press"],
  Legal: ["Privacy Policy", "Terms of Service", "Security"],
}

export function Footer() {
  return (
    <footer className="bg-[var(--brand-navy)]">
      {/* Social proof bar */}
      <div className="border-b border-white/10 bg-[var(--brand-orange)]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap items-center justify-center gap-8 md:gap-16 text-white">
          <div className="flex items-center gap-2 text-sm font-bold">
            <span className="text-white/80 font-normal">Reduce late deliveries by</span>
            <span className="text-white font-black text-lg">40%</span>
          </div>
          <div className="w-px h-6 bg-white/30 hidden md:block" />
          <div className="flex items-center gap-2 text-sm">
            <span className="text-white/80">Paper POD disputes drop to</span>
            <span className="text-white font-black">&lt;1%</span>
          </div>
          <div className="w-px h-6 bg-white/30 hidden md:block" />
          <div className="flex items-center gap-2 text-sm">
            <span className="text-white/80">1 dispatcher manages</span>
            <span className="text-white font-black">25 drivers</span>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand col */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[var(--brand-orange)] rounded-lg flex items-center justify-center">
                <Truck className="w-4 h-4 text-white" />
              </div>
              <span
                className="text-lg font-bold text-white"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                FleetFlow
              </span>
            </div>
            <p className="text-white/45 text-sm leading-relaxed mb-6">
              Dispatch smarter. Deliver faster. Eliminate paperwork.
              Built for last-mile logistics teams.
            </p>
            <Button
              size="sm"
              className="bg-[var(--brand-orange)] hover:bg-orange-500 text-white rounded-full font-semibold"
            >
              Start Free Trial
            </Button>
          </div>

          {/* Link cols */}
          {Object.entries(links).map(([group, items]) => (
            <div key={group}>
              <h4 className="text-white text-xs font-bold tracking-wider uppercase mb-4">{group}</h4>
              <ul className="flex flex-col gap-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-white/45 text-sm hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="bg-white/10 mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            © 2024 FleetFlow Logistics. All rights reserved. Fictional company — portfolio demo.
          </p>
          <div className="flex items-center gap-4">
            {[X, Linkedin, Mail].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-colors"
              >
                <Icon className="w-3.5 h-3.5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
