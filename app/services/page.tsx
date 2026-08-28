import React from "react"
import Link from "next/link"
import { Sparkles, CheckCircle2, ArrowRight, ShieldCheck, Hotel, Car, Compass, Calendar, MapPin } from "lucide-react"
import { servicesData } from "@/lib/data/services"
import { Button } from "@/components/ui/button"

export default function ServicesPage() {
  return (
    <div className="py-12 md:py-20 bg-[#FDFBF7] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-100/80 border border-gold-300/70 text-maroon-900 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-gold-600" />
            <span>Comprehensive Pilgrimage Concierge</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-ink tracking-tight mb-4">
            Our Pilgrimage <span className="text-maroon-800 italic font-normal">Services</span>
          </h1>

          <p className="text-sm sm:text-base text-ink-muted leading-relaxed">
            From comfortable stays and ghat road cabs to elder care and custom itineraries, we manage the logistics so you can focus entirely on Lord Venkateswara&apos;s darshan.
          </p>
        </div>

        {/* Detailed Service Deep-Dives */}
        <div className="space-y-12">
          {servicesData.map((service, idx) => (
            <div
              key={service.id}
              id={service.id}
              className={`p-8 sm:p-12 rounded-3xl bg-white border border-sand-200 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                idx % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="font-serif text-2xl sm:text-3xl font-bold text-gold-700">
                    {service.number}
                  </span>
                  {service.badge && (
                    <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-maroon-50 text-maroon-900 border border-maroon-200">
                      {service.badge}
                    </span>
                  )}
                </div>

                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink">
                  {service.title}
                </h2>

                <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-gold-700">
                  {service.tagline}
                </p>

                <p className="text-sm sm:text-base text-ink-muted leading-relaxed">
                  {service.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                  {service.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-ink/80">
                      <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5 p-6 rounded-2xl bg-sand-50 border border-sand-200 space-y-4 flex flex-col justify-between h-full">
                <div>
                  <h4 className="font-serif font-bold text-base text-ink mb-2">
                    Service Highlights
                  </h4>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.highlights.map((h, i) => (
                      <span key={i} className="text-xs px-3 py-1 rounded-lg bg-white border border-sand-200 text-ink font-medium">
                        {h}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs text-ink-muted leading-relaxed">
                    Available as a standalone service or bundled seamlessly into our all-inclusive Yatra packages.
                  </p>
                </div>

                <Button asChild variant="gold" className="w-full">
                  <Link href={`/contact?service=${service.id}`}>
                    <span>Enquire This Service</span>
                    <ArrowRight className="w-4 h-4 ml-1.5" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
