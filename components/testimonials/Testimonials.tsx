"use client"

import React from "react"
import { motion } from "framer-motion"
import { Star, Sparkles, Quote, CheckCircle2 } from "lucide-react"
import { testimonialsData } from "@/lib/data/testimonials"
import { Badge } from "@/components/ui/badge"

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-[#FDFBF7] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-100/80 border border-gold-300/70 text-maroon-900 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-gold-600" />
            <span>Devotee Experiences</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-ink tracking-tight leading-tight">
            Blessed Journeys &{" "}
            <span className="text-maroon-800 italic font-normal">Devotee Words</span>
          </h2>

          <p className="mt-3 text-sm sm:text-base text-ink-muted leading-relaxed">
            Read how families, working professionals, and elderly devotees experienced peace of mind during their sacred Tirupati pilgrimage.
          </p>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonialsData.map((t, idx) => (
            <motion.article
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col justify-between p-8 rounded-3xl bg-white border border-sand-200/90 shadow-sm hover:shadow-lg transition-all duration-300 relative group"
            >
              <div>
                {/* Top Quote & Rating */}
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-amber-400 text-amber-500"
                      />
                    ))}
                  </div>

                  <Badge variant="maroonSoft" className="text-[11px] font-semibold">
                    {t.travellerType}
                  </Badge>
                </div>

                {/* Review Text */}
                <p className="font-serif text-base sm:text-lg text-ink italic leading-relaxed mb-6">
                  &ldquo;{t.review}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-sand-100 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="h-11 w-11 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 text-ink flex items-center justify-center font-serif text-sm font-bold shadow-sm">
                    {t.avatarText}
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-sm text-ink">
                      {t.name}
                    </h4>
                    <p className="text-xs text-ink-muted">
                      {t.location} • <span className="text-gold-700">{t.darshanDate}</span>
                    </p>
                  </div>
                </div>

                <span className="hidden sm:inline-block text-[11px] font-medium text-ink-muted bg-sand-100 px-2.5 py-1 rounded-md">
                  {t.packageBooked}
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
