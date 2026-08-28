"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Clock, CheckCircle2, Star, Sparkles, ArrowRight, Eye } from "lucide-react"
import { PackageItem } from "@/lib/data/packages"
import { formatCurrency, cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface PackageCardProps {
  pkg: PackageItem
  onSelect: (pkg: PackageItem) => void
  featured?: boolean
}

export default function PackageCard({ pkg, onSelect, featured }: PackageCardProps) {
  const isHighlighted = pkg.isPopular || featured

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className={cn(
        "group relative flex flex-col rounded-3xl bg-white transition-all duration-300 overflow-hidden shadow-sm hover:shadow-xl",
        isHighlighted
          ? "border-2 border-gold-400/80 ring-4 ring-gold-100/50"
          : "border border-sand-200/90 hover:border-sand-300"
      )}
    >
      {/* Featured Header Ribbon */}
      {pkg.isPopular && (
        <div className="absolute top-0 right-0 z-20 bg-gradient-to-r from-gold-500 to-gold-600 text-ink text-[11px] font-bold tracking-wider uppercase px-4 py-1 rounded-bl-2xl shadow-sm flex items-center gap-1">
          <Sparkles className="w-3 h-3 text-ink fill-current" />
          <span>Most Popular</span>
        </div>
      )}

      {/* Image Banner */}
      <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-sand-100">
        <Image
          src={pkg.heroImage}
          alt={pkg.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Duration Badge Bottom Left */}
        <div className="absolute bottom-3 left-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-xs font-semibold text-ink shadow-sm">
            <Clock className="w-3.5 h-3.5 text-gold-600" />
            {pkg.duration}
          </span>
        </div>
      </div>

      {/* Content Body */}
      <div className="p-6 flex flex-1 flex-col justify-between">
        <div>
          {/* Subtitle tag */}
          <div className="flex items-center justify-between gap-2 mb-1.5">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-gold-700">
              {pkg.badge || "Verified Pilgrimage"}
            </span>
          </div>

          {/* Title */}
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-ink mb-2 group-hover:text-maroon-800 transition-colors">
            {pkg.title}
          </h3>

          {/* Description */}
          <p className="text-xs sm:text-sm text-ink-muted leading-relaxed mb-4 line-clamp-2">
            {pkg.shortDescription}
          </p>

          {/* Top Inclusions Checklist */}
          <div className="space-y-1.5 pt-3 pb-4 border-t border-sand-100">
            {pkg.inclusions.slice(0, 3).map((item, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-ink/80">
                <CheckCircle2 className="w-3.5 h-3.5 text-gold-600 shrink-0 mt-0.5" />
                <span className="truncate">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing & CTA Actions */}
        <div className="pt-4 border-t border-sand-100 mt-auto flex items-center justify-between gap-3">
          <div>
            <span className="text-[10px] text-ink-muted uppercase font-semibold block">
              From
            </span>
            <div className="flex items-baseline gap-1">
              <span className="font-serif text-xl sm:text-2xl font-bold text-maroon-900">
                {formatCurrency(pkg.priceStarting)}
              </span>
              <span className="text-[10px] text-ink-muted">/person</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => onSelect(pkg)}
              className="text-xs h-9 px-3 gap-1.5"
            >
              <Eye className="w-3.5 h-3.5 text-gold-700" />
              <span>Details</span>
            </Button>

            <Button
              asChild
              variant={isHighlighted ? "gold" : "default"}
              size="sm"
              className="text-xs h-9 px-3"
            >
              <Link href={`/contact?package=${pkg.slug}`}>
                <span>Enquire</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </motion.article>
  )
}
