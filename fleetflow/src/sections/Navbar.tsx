import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Truck, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const links = ["Features", "How It Works", "Pricing", "Testimonials"]

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-[var(--brand-orange)] rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
            <Truck className="w-4 h-4 text-white" />
          </div>
          <span
            className="text-lg font-bold tracking-tight"
            style={{ fontFamily: "var(--font-heading)", color: scrolled ? "var(--brand-navy)" : "white" }}
          >
            FleetFlow
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase().replace(/\s+/g, "-")}`}
              className={cn(
                "text-sm font-medium transition-colors hover:text-[var(--brand-orange)]",
                scrolled ? "text-gray-600" : "text-white/80"
              )}
            >
              {l}
            </a>
          ))}
        </nav>

        {/* CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#pricing"
            className={cn(
              "text-sm font-medium transition-colors",
              scrolled ? "text-gray-700 hover:text-[var(--brand-orange)]" : "text-white/80 hover:text-white"
            )}
          >
            Log in
          </a>
          <Button
            size="sm"
            className="bg-[var(--brand-orange)] text-white hover:bg-orange-600 rounded-full px-5 font-semibold"
          >
            Start Free Trial
          </Button>
        </div>

        {/* Mobile */}
        <button
          className={cn("md:hidden p-2", scrolled ? "text-gray-800" : "text-white")}
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-b border-gray-100 px-6 pb-4">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase().replace(/\s+/g, "-")}`}
              className="block py-3 text-sm font-medium text-gray-700 border-b border-gray-50 last:border-0 hover:text-[var(--brand-orange)]"
              onClick={() => setOpen(false)}
            >
              {l}
            </a>
          ))}
          <Button
            className="mt-3 w-full bg-[var(--brand-orange)] text-white hover:bg-orange-600 rounded-full font-semibold"
          >
            Start Free Trial
          </Button>
        </div>
      )}
    </header>
  )
}
