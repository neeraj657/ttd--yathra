import React, { Suspense } from "react"
import Hero from "@/components/hero/Hero"
import TrustHighlights from "@/components/trust/TrustHighlights"
import Services from "@/components/services/Services"
import Packages from "@/components/packages/Packages"
import WhyChooseUs from "@/components/why-choose-us/WhyChooseUs"
import ThreeScene from "@/components/three-scene/ThreeScene"
import Destinations from "@/components/destinations/Destinations"
import HowItWorks from "@/components/how-it-works/HowItWorks"
import Testimonials from "@/components/testimonials/Testimonials"
import FAQ from "@/components/faq/FAQ"
import ContactForm from "@/components/contact/ContactForm"

export default function HomePage() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Trust Highlights */}
      <TrustHighlights />

      {/* 3. Services (6 Services) */}
      <Services />

      {/* 4. Popular Pilgrimage Packages */}
      <Packages />

      {/* 5. Why Choose Us (Editorial 4 Values) */}
      <WhyChooseUs />

      {/* 6. Interactive 3D Journey to Tirumala */}
      <ThreeScene />

      {/* 7. Sacred Destinations & Theerthams */}
      <Destinations />

      {/* 8. How It Works (3 Steps) */}
      <HowItWorks />

      {/* 9. Devotee Testimonials */}
      <Testimonials />

      {/* 10. FAQ Accordion */}
      <FAQ />

      {/* 11. Contact & Custom Yatra Builder */}
      <Suspense fallback={<div className="py-20 text-center text-ink-muted">Loading Yatra Planner...</div>}>
        <ContactForm />
      </Suspense>
    </div>
  )
}
