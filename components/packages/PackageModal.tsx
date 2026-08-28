"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { PackageItem } from "@/lib/data/packages"
import { formatCurrency } from "@/lib/utils"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Clock,
  CheckCircle2,
  XCircle,
  Car,
  Hotel,
  Users,
  Calendar,
  Sparkles,
  ArrowRight,
  ShieldCheck
} from "lucide-react"

interface PackageModalProps {
  pkg: PackageItem | null
  isOpen: boolean
  onClose: () => void
}

export default function PackageModal({ pkg, isOpen, onClose }: PackageModalProps) {
  if (!pkg) return null

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-3xl p-0 overflow-hidden bg-[#FAF7F2] border-sand-300">
        {/* Modal Hero Banner */}
        <div className="relative h-56 sm:h-64 w-full bg-sand-900">
          <Image
            src={pkg.heroImage}
            alt={pkg.title}
            fill
            className="object-cover brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          
          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            <Badge variant="goldSolid" className="shadow-md">
              <Clock className="w-3 h-3 mr-1" />
              {pkg.duration}
            </Badge>
            {pkg.badge && (
              <Badge variant="maroonSoft" className="bg-white/90 text-maroon-900 font-semibold backdrop-blur-sm">
                {pkg.badge}
              </Badge>
            )}
          </div>

          <div className="absolute bottom-4 left-6 right-6 text-white">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight">
              {pkg.title}
            </h2>
            <p className="text-xs sm:text-sm text-sand-200 mt-1 line-clamp-1">
              {pkg.subtitle}
            </p>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
          {/* Quick Specifications */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-3.5 rounded-2xl bg-white border border-sand-200/90 text-xs">
            <div className="flex items-center gap-2">
              <Hotel className="w-4 h-4 text-gold-600 shrink-0" />
              <div>
                <span className="text-ink-muted block text-[10px] uppercase font-semibold">Stay</span>
                <span className="font-medium text-ink truncate block">{pkg.accommodationType}</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Car className="w-4 h-4 text-gold-600 shrink-0" />
              <div>
                <span className="text-ink-muted block text-[10px] uppercase font-semibold">Transport</span>
                <span className="font-medium text-ink truncate block">{pkg.vehicleType}</span>
              </div>
            </div>

            <div className="col-span-2 sm:col-span-1 flex items-center gap-2">
              <Users className="w-4 h-4 text-gold-600 shrink-0" />
              <div>
                <span className="text-ink-muted block text-[10px] uppercase font-semibold">Ideal For</span>
                <span className="font-medium text-ink truncate block">{pkg.idealFor}</span>
              </div>
            </div>
          </div>

          {/* Detailed Overview */}
          <div>
            <h3 className="font-serif text-lg font-bold text-ink mb-2">
              Package Overview
            </h3>
            <p className="text-sm text-ink-muted leading-relaxed">
              {pkg.fullDescription}
            </p>
          </div>

          {/* Day-by-Day Itinerary */}
          <div>
            <h3 className="font-serif text-lg font-bold text-ink mb-4 flex items-center gap-2">
              <Calendar className="w-4 h-4 text-gold-600" />
              <span>Day-by-Day Detailed Itinerary</span>
            </h3>

            <div className="space-y-4 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-sand-200">
              {pkg.itinerary.map((day) => (
                <div key={day.dayNumber} className="relative pl-9">
                  {/* Step Node */}
                  <div className="absolute left-0 top-0.5 h-7 w-7 rounded-full bg-maroon-800 text-gold-400 flex items-center justify-center font-serif text-xs font-bold shadow-sm ring-4 ring-[#FAF7F2]">
                    {day.dayNumber}
                  </div>

                  <div className="p-4 rounded-2xl bg-white border border-sand-200/80 shadow-sm">
                    <h4 className="font-serif font-bold text-base text-ink mb-2">
                      Day {day.dayNumber}: {day.title}
                    </h4>

                    <ul className="space-y-1.5 text-xs text-ink-muted mb-3">
                      {day.activities.map((act, aIdx) => (
                        <li key={aIdx} className="flex items-start gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-gold-600 shrink-0 mt-1.5" />
                          <span>{act}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-3 pt-2 border-t border-sand-100 text-[11px] text-ink-muted">
                      {day.meals && (
                        <span className="bg-sand-100 px-2 py-0.5 rounded text-ink font-medium">
                          🍴 {day.meals}
                        </span>
                      )}
                      {day.stay && (
                        <span className="bg-sand-100 px-2 py-0.5 rounded text-ink font-medium">
                          🏨 {day.stay}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Inclusions & Exclusions Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Inclusions */}
            <div className="p-4 rounded-2xl bg-green-50/60 border border-green-200/70">
              <h4 className="font-bold text-xs uppercase tracking-wider text-green-900 mb-3 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-green-700" />
                <span>What Is Included</span>
              </h4>
              <ul className="space-y-2 text-xs text-green-950/80">
                {pkg.inclusions.map((inc, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-green-600 shrink-0 mt-0.5" />
                    <span>{inc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Exclusions */}
            <div className="p-4 rounded-2xl bg-rose-50/60 border border-rose-200/70">
              <h4 className="font-bold text-xs uppercase tracking-wider text-rose-900 mb-3 flex items-center gap-1.5">
                <XCircle className="w-4 h-4 text-rose-700" />
                <span>Exclusions & Notes</span>
              </h4>
              <ul className="space-y-2 text-xs text-rose-950/80">
                {pkg.exclusions.map((exc, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <XCircle className="w-3.5 h-3.5 text-rose-500 shrink-0 mt-0.5" />
                    <span>{exc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Modal Footer / Sticky Action */}
        <div className="p-4 sm:p-6 bg-white border-t border-sand-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-[11px] text-ink-muted block uppercase font-semibold">Starting Price</span>
            <div className="flex items-baseline gap-1.5">
              <span className="font-serif text-2xl sm:text-3xl font-bold text-maroon-900">
                {formatCurrency(pkg.priceStarting)}
              </span>
              <span className="text-xs text-ink-muted">/{pkg.priceUnit}</span>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="w-1/2 sm:w-auto text-xs"
            >
              Close
            </Button>
            <Button asChild variant="gold" className="w-1/2 sm:w-auto shadow-md">
              <Link
                href={`/contact?package=${pkg.slug}`}
                onClick={onClose}
                className="flex items-center justify-center gap-1.5 text-xs font-bold"
              >
                <span>Request Custom Quote</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
