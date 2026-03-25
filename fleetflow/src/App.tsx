import { Navbar } from "@/sections/Navbar"
import { Hero } from "@/sections/Hero"
import { StatsBar } from "@/sections/StatsBar"
import { PainSection } from "@/sections/PainSection"
import { FeaturesSection } from "@/sections/FeaturesSection"
import { HowItWorks } from "@/sections/HowItWorks"
import { AppMockup } from "@/sections/AppMockup"
import { ROICalculator } from "@/sections/ROICalculator"
import { Testimonials } from "@/sections/Testimonials"
import { Pricing } from "@/sections/Pricing"
import { Footer } from "@/sections/Footer"

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <PainSection />
        <FeaturesSection />
        <HowItWorks />
        <AppMockup />
        <ROICalculator />
        <Testimonials />
        <Pricing />
      </main>
      <Footer />
    </div>
  )
}
