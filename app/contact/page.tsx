import React, { Suspense } from "react"
import ContactForm from "@/components/contact/ContactForm"
import FAQ from "@/components/faq/FAQ"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#FDFBF7]">
      <Suspense fallback={<div className="py-20 text-center text-ink-muted">Loading Yatra Planner...</div>}>
        <ContactForm />
      </Suspense>
      <FAQ />
    </div>
  )
}
