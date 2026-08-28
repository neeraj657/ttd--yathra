"use client"

import React, { useState } from "react"
import Link from "next/link"
import { Sparkles, MapPin, ArrowRight } from "lucide-react"
import { destinationsData, DestinationItem } from "@/lib/data/destinations"
import DestinationCard from "./DestinationCard"
import { Button } from "@/components/ui/button"

export default function Destinations() {
  const [activeCategory, setActiveCategory] = useState<string>("All")

  const categories = ["All", "Tirumala", "Tirupati", "Circuit", "Theertham"]

  const filteredDestinations =
    activeCategory === "All"
      ? destinationsData
      : destinationsData.filter((d) => d.category === activeCategory)

  return (
    <section id="destinations" className="py-20 lg:py-28 bg-[#FDFBF7] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-100/80 border border-gold-300/70 text-maroon-900 text-xs font-semibold uppercase tracking-wider mb-3">
              <MapPin className="w-3.5 h-3.5 text-gold-600" />
              <span>Sacred Seshachalam Geography</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-ink tracking-tight leading-tight">
              More Than a Darshan. <br className="hidden sm:inline" />
              <span className="text-maroon-800 italic font-normal">A Journey to Remember.</span>
            </h2>
            <p className="mt-4 text-base text-ink-muted leading-relaxed">
              Explore the timeless sacred shrines, holy waterfalls, and miraculous temples across Tirupati, Tirumala, and the surrounding devotional circuit.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  activeCategory === cat
                    ? "bg-maroon-800 text-white shadow-md"
                    : "bg-sand-100 text-ink-muted hover:bg-sand-200 hover:text-ink"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Destination Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDestinations.map((dest, idx) => (
            <DestinationCard key={dest.id} destination={dest} index={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}
