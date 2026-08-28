"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { MapPin, Clock, Sparkles, ArrowRight } from "lucide-react"
import { DestinationItem } from "@/lib/data/destinations"
import { Badge } from "@/components/ui/badge"

interface DestinationCardProps {
  destination: DestinationItem
  index: number
}

export default function DestinationCard({ destination, index }: DestinationCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group flex flex-col rounded-3xl bg-white border border-sand-200/90 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
    >
      {/* Visual Image Banner */}
      <div className="relative h-52 sm:h-60 w-full bg-sand-100 overflow-hidden">
        <Image
          src={destination.image}
          alt={destination.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Top Category Badge */}
        <div className="absolute top-3 left-3">
          <Badge variant="goldSolid" className="shadow-sm">
            {destination.category}
          </Badge>
        </div>

        {/* Distance Badge Top Right */}
        <div className="absolute top-3 right-3">
          <span className="inline-flex items-center gap-1 text-[11px] font-semibold bg-black/60 backdrop-blur-md text-sand-100 px-2.5 py-1 rounded-full border border-white/20 shadow-sm">
            <MapPin className="w-3 h-3 text-gold-400" />
            {destination.distance}
          </span>
        </div>

        {/* Telugu Subtitle Bottom on Image */}
        <div className="absolute bottom-3 left-4 right-4 text-white">
          <p className="text-xs font-serif text-gold-300/90 font-medium">
            {destination.teluguName}
          </p>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 flex flex-1 flex-col justify-between">
        <div>
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-ink mb-1 group-hover:text-maroon-800 transition-colors">
            {destination.name}
          </h3>

          <p className="text-xs font-semibold uppercase tracking-wider text-gold-700 mb-3">
            {destination.tagline}
          </p>

          <p className="text-xs sm:text-sm text-ink-muted leading-relaxed mb-4 line-clamp-2">
            {destination.description}
          </p>

          {/* Key Ritual & Timings */}
          <div className="pt-3 border-t border-sand-100 space-y-1.5 text-xs text-ink-muted mb-4">
            <div className="flex items-start gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-gold-600 shrink-0 mt-0.5" />
              <span className="line-clamp-1"><strong>Ritual:</strong> {destination.keyRitual}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-gold-600 shrink-0" />
              <span><strong>Timings:</strong> {destination.timing}</span>
            </div>
          </div>
        </div>

        {/* Action Link */}
        <div className="pt-3 border-t border-sand-100 mt-auto flex items-center justify-between">
          <span className="text-[11px] text-ink-muted font-medium">
            Included in Custom Circuits
          </span>

          <Link
            href={`/contact?destination=${destination.id}`}
            className="inline-flex items-center gap-1 text-xs font-semibold text-maroon-800 hover:text-gold-700 transition-colors group/link"
          >
            <span>Plan Visit</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
          </Link>
        </div>
      </div>
    </motion.article>
  )
}
