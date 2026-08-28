"use client"

import React, { useState } from "react"
import Link from "next/link"
import { Sparkles, ArrowRight, ShieldCheck } from "lucide-react"
import { packagesData, PackageItem } from "@/lib/data/packages"
import PackageCard from "./PackageCard"
import PackageModal from "./PackageModal"
import { Button } from "@/components/ui/button"

export default function Packages() {
  const [selectedPackage, setSelectedPackage] = useState<PackageItem | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleSelectPackage = (pkg: PackageItem) => {
    setSelectedPackage(pkg)
    setIsModalOpen(true)
  }

  return (
    <section id="packages" className="py-20 lg:py-28 bg-[#FAF7F2] border-y border-sand-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-maroon-50 border border-maroon-200/80 text-maroon-900 text-xs font-semibold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-gold-600" />
              <span>Curated Devotional Itineraries</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-ink tracking-tight leading-tight">
              Popular Tirupati <br className="hidden sm:inline" />
              <span className="text-maroon-800 italic font-normal">Yatra Packages</span>
            </h2>
            <p className="mt-4 text-base text-ink-muted leading-relaxed">
              Thoughtfully organized pilgrimage packages you can book as-is or customize completely to suit your family&apos;s arrival time, special poojas, and pace.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <Button asChild variant="outline" className="gap-2">
              <Link href="/packages">
                <span>View All Itineraries</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packagesData.map((pkg) => (
            <PackageCard
              key={pkg.id}
              pkg={pkg}
              onSelect={handleSelectPackage}
            />
          ))}
        </div>

        {/* Bottom Trust Banner */}
        <div className="mt-14 p-6 rounded-3xl bg-white border border-sand-200/80 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <div className="h-10 w-10 rounded-xl bg-gold-100 text-gold-800 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-gold-700" />
            </div>
            <div>
              <h4 className="font-serif font-bold text-sm text-ink">
                Need a Custom Family Itinerary?
              </h4>
              <p className="text-xs text-ink-muted">
                Traveling from Chennai or Bangalore? We craft personalized multi-day circuits.
              </p>
            </div>
          </div>

          <Button asChild variant="gold" size="sm" className="shrink-0 text-xs">
            <Link href="/contact">
              <span>Request Custom Package</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
            </Link>
          </Button>
        </div>
      </div>

      {/* Package Detail Modal */}
      <PackageModal
        pkg={selectedPackage}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  )
}
