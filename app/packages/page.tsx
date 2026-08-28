"use client"

import React, { useState } from "react"
import Link from "next/link"
import { Sparkles, Filter, Search, ArrowRight, ShieldCheck, Check } from "lucide-react"
import { packagesData, PackageItem } from "@/lib/data/packages"
import PackageCard from "@/components/packages/PackageCard"
import PackageModal from "@/components/packages/PackageModal"
import { Button } from "@/components/ui/button"

export default function PackagesPage() {
  const [selectedTag, setSelectedTag] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedPackage, setSelectedPackage] = useState<PackageItem | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const tags = [
    { id: "all", label: "All Itineraries" },
    { id: "family", label: "Family Pilgrimage" },
    { id: "short", label: "2-Day Express" },
    { id: "circuit", label: "Circuit & Kalahasti" },
    { id: "elderly", label: "Senior Citizen Care" },
  ]

  const filteredPackages = packagesData.filter((pkg) => {
    const matchesSearch =
      pkg.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pkg.shortDescription.toLowerCase().includes(searchQuery.toLowerCase())

    if (!matchesSearch) return false

    if (selectedTag === "all") return true
    if (selectedTag === "family") return pkg.slug.includes("family")
    if (selectedTag === "short") return pkg.slug.includes("2d")
    if (selectedTag === "circuit") return pkg.slug.includes("circuit")
    if (selectedTag === "elderly") return pkg.slug.includes("senior")
    return true
  })

  return (
    <div className="py-12 md:py-20 bg-[#FDFBF7] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-100/80 border border-gold-300/70 text-maroon-900 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-gold-600" />
            <span>Devotional Packages Directory</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-ink tracking-tight mb-4">
            Curated Tirupati <span className="text-maroon-800 italic font-normal">Yatra Packages</span>
          </h1>

          <p className="text-sm sm:text-base text-ink-muted leading-relaxed">
            Choose from our pre-planned, family-tested itineraries or request a personalized multi-day circuit customized to your group.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 p-4 rounded-2xl bg-white border border-sand-200 shadow-sm">
          {/* Tag Pills */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {tags.map((tag) => (
              <button
                key={tag.id}
                onClick={() => setSelectedTag(tag.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  selectedTag === tag.id
                    ? "bg-maroon-800 text-white shadow-sm"
                    : "bg-sand-100 text-ink-muted hover:bg-sand-200 hover:text-ink"
                }`}
              >
                {tag.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-sand-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search packages..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs rounded-xl border border-sand-300 bg-sand-50/50 text-ink focus:outline-none focus:ring-2 focus:ring-gold-500"
            />
          </div>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPackages.map((pkg) => (
            <PackageCard
              key={pkg.id}
              pkg={pkg}
              onSelect={(p) => {
                setSelectedPackage(p)
                setIsModalOpen(true)
              }}
            />
          ))}
        </div>

        {/* Comparison Table */}
        <div className="mt-20 p-6 sm:p-10 rounded-3xl bg-white border border-sand-200 shadow-sm">
          <div className="mb-6">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink">
              Compare Yatra Packages
            </h2>
            <p className="text-xs sm:text-sm text-ink-muted mt-1">
              Side-by-side breakdown of inclusions across our most popular itineraries.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-sand-200 bg-sand-50 text-ink">
                  <th className="p-3.5 font-bold">Feature / Inclusion</th>
                  <th className="p-3.5 font-bold">2-Day Express</th>
                  <th className="p-3.5 font-bold text-maroon-800">3-Day Family (Popular)</th>
                  <th className="p-3.5 font-bold">4-Day Grand Circuit</th>
                  <th className="p-3.5 font-bold">Senior Citizen Special</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-sand-100 text-ink-muted">
                <tr>
                  <td className="p-3.5 font-medium text-ink">Duration</td>
                  <td className="p-3.5">2 Days / 1 Night</td>
                  <td className="p-3.5 font-semibold text-maroon-900">3 Days / 2 Nights</td>
                  <td className="p-3.5">4 Days / 3 Nights</td>
                  <td className="p-3.5">3 Days / 2 Nights</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-medium text-ink">Accommodation</td>
                  <td className="p-3.5">3-Star Hotel</td>
                  <td className="p-3.5">4-Star Family Suites</td>
                  <td className="p-3.5">3 & 4-Star Handpicked</td>
                  <td className="p-3.5">Accessible 4-Star (Lift/Grab bars)</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-medium text-ink">Vehicle Type</td>
                  <td className="p-3.5">AC Sedan (Dzire)</td>
                  <td className="p-3.5">AC Innova Crysta</td>
                  <td className="p-3.5">AC Sedan / Innova</td>
                  <td className="p-3.5">Smooth-Ride Innova Crysta</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-medium text-ink">Srivari Darshan Guidance</td>
                  <td className="p-3.5"><Check className="w-4 h-4 text-emerald-600" /></td>
                  <td className="p-3.5"><Check className="w-4 h-4 text-emerald-600" /></td>
                  <td className="p-3.5"><Check className="w-4 h-4 text-emerald-600" /></td>
                  <td className="p-3.5"><Check className="w-4 h-4 text-emerald-600" /></td>
                </tr>
                <tr>
                  <td className="p-3.5 font-medium text-ink">Wheelchair / Porter Support</td>
                  <td className="p-3.5">Optional add-on</td>
                  <td className="p-3.5">On request</td>
                  <td className="p-3.5">On request</td>
                  <td className="p-3.5"><Check className="w-4 h-4 text-emerald-600" /> Included</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-medium text-ink">Srikalahasti & Kanipakam</td>
                  <td className="p-3.5">Optional</td>
                  <td className="p-3.5"><Check className="w-4 h-4 text-emerald-600" /> Kanipakam</td>
                  <td className="p-3.5"><Check className="w-4 h-4 text-emerald-600" /> Full Circuit</td>
                  <td className="p-3.5">Gentle Padmavathi visit</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Package Detail Modal */}
      <PackageModal
        pkg={selectedPackage}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  )
}
