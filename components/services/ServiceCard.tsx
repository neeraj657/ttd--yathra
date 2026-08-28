"use client"

import React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Hotel, Car, Compass, Calendar, MapPin, Sparkles, ArrowRight, CheckCircle2 } from "lucide-react"
import { ServiceItem } from "@/lib/data/services"
import { Badge } from "@/components/ui/badge"

const iconMap = {
  Hotel: Hotel,
  Car: Car,
  Compass: Compass,
  Calendar: Calendar,
  MapPin: MapPin,
  Sparkles: Sparkles,
}

interface ServiceCardProps {
  service: ServiceItem
  index: number
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  const IconComponent = iconMap[service.iconName] || Sparkles

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative flex flex-col justify-between rounded-3xl border border-sand-200/90 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-gold-300/80"
    >
      <div>
        {/* Top Header with Number and Icon */}
        <div className="flex items-center justify-between gap-4 mb-5">
          <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-sand-100 to-gold-50 border border-sand-200/80 flex items-center justify-center text-maroon-800 shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:bg-gold-100 group-hover:text-maroon-900">
            <IconComponent className="w-7 h-7 text-maroon-800 transition-colors group-hover:text-maroon-900" />
          </div>

          <div className="flex items-center gap-2">
            {service.badge && (
              <Badge variant="gold" className="text-[10px] uppercase tracking-wider font-semibold">
                {service.badge}
              </Badge>
            )}
            <span className="font-serif text-2xl font-bold text-sand-300 group-hover:text-gold-500/60 transition-colors">
              {service.number}
            </span>
          </div>
        </div>

        {/* Title and Tagline */}
        <h3 className="font-serif text-2xl font-bold text-ink mb-1 group-hover:text-maroon-800 transition-colors">
          {service.title}
        </h3>
        <p className="text-xs font-semibold uppercase tracking-wider text-gold-700 mb-3">
          {service.tagline}
        </p>

        {/* Description */}
        <p className="text-sm text-ink-muted leading-relaxed mb-5">
          {service.description}
        </p>

        {/* Feature Checkpoints */}
        <div className="space-y-2 mb-6 pt-2 border-t border-sand-100">
          {service.features.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs text-ink/80">
              <CheckCircle2 className="w-3.5 h-3.5 text-gold-600 shrink-0 mt-0.5" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Card Action */}
      <div className="pt-4 border-t border-sand-100 flex items-center justify-between">
        <div className="flex flex-wrap gap-1.5">
          {service.highlights.slice(0, 2).map((h, i) => (
            <span
              key={i}
              className="text-[11px] px-2 py-0.5 rounded-md bg-sand-100 text-ink-muted"
            >
              {h}
            </span>
          ))}
        </div>

        <Link
          href={`/contact?service=${service.id}`}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-maroon-800 hover:text-gold-700 transition-colors group/link ml-auto pl-2"
        >
          <span>Enquire</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  )
}
