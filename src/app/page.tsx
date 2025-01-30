import BentoGrid from "@/components/BentoGrid"
import Features from "@/components/Features"
import Footer from "@/components/Footer"
import Hero from "@/components/Hero"
// import { PhoneMockup } from "./componants/Phone-mockup"

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        <div className="flex items-center gap-2">
          <span className="text-xl font-semibold text-black">Hydrify</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          
        </div>
        <button className="px-6 py-2 bg-[#8A3FFC] text-white rounded-full hover:bg-[#7B2FED] transition-colors">
          Contact
        </button>
      </nav>

      {/* Hero Section */}
      <Hero />
      {/* Features Section */}
      <Features />

      {/* Features Section */}
      <BentoGrid />
      {/* Footer */}
     <Footer />
    </div>
  )
}

