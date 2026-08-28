"use client"

import React from "react"
import Link from "next/link"
import { Sparkles, ArrowRight } from "lucide-react"
import { servicesData } from "@/lib/data/services"
import ServiceCard from "./ServiceCard"
import { Button } from "@/components/ui/button"

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-[#FDFBF7] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-100/70 border border-gold-300/60 text-maroon-900 text-xs font-semibold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-gold-600" />
              <span>Everything for Your Pilgrimage</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-ink tracking-tight leading-tight">
              Everything You Need for a <br className="hidden sm:inline" />
              <span className="text-maroon-800 italic font-normal">Peaceful Yatra</span>
            </h2>
            <p className="mt-4 text-base text-ink-muted leading-relaxed">
              From handpicked stays and experienced ghat road drivers to step-by-step darshan guidance, we organize the vital details so your family can focus on devotion.
            </p>
          </div>

          <div className="shrink-0">
            <Button asChild variant="outline" className="gap-2">
              <Link href="/services">
                <span>View Full Service Catalog</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
