import React from "react"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { packagesData } from "@/lib/data/packages"
import { formatCurrency } from "@/lib/utils"
import {
  Clock,
  CheckCircle2,
  XCircle,
  Hotel,
  Car,
  Users,
  Calendar,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Phone,
  MessageSquare
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function generateStaticParams() {
  return packagesData.map((pkg) => ({
    slug: pkg.slug,
  }))
}

export default function PackageDetailPage({
  params,
}: {
  params: { slug: string }
}) {
  const pkg = packagesData.find((p) => p.slug === params.slug)

  if (!pkg) {
    notFound()
  }

  return (
    <div className="py-10 bg-[#FDFBF7] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-ink-muted mb-6">
          <Link href="/" className="hover:text-ink">Home</Link>
          <span>/</span>
          <Link href="/packages" className="hover:text-ink">Packages</Link>
          <span>/</span>
          <span className="text-maroon-800 font-semibold">{pkg.title}</span>
        </div>

        {/* Hero Banner Card */}
        <div className="relative rounded-3xl overflow-hidden shadow-xl bg-sand-900 aspect-[16/7] sm:aspect-[21/9] w-full mb-10">
          <Image
            src={pkg.heroImage}
            alt={pkg.title}
            fill
            priority
            className="object-cover brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

          <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 right-6 sm:right-10 text-white flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="goldSolid" className="shadow-md">
                  <Clock className="w-3.5 h-3.5 mr-1" />
                  {pkg.duration}
                </Badge>
                {pkg.badge && (
                  <Badge variant="maroonSoft" className="bg-white/90 text-maroon-900 font-semibold">
                    {pkg.badge}
                  </Badge>
                )}
              </div>
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
                {pkg.title}
              </h1>
              <p className="text-sm sm:text-base text-sand-200">
                {pkg.subtitle}
              </p>
            </div>

            <div className="shrink-0 bg-white/95 backdrop-blur-md text-ink p-4 sm:p-5 rounded-2xl border border-white/60 shadow-xl flex items-center justify-between md:flex-col md:items-start gap-2">
              <div>
                <span className="text-[10px] text-ink-muted uppercase font-semibold block">Starting from</span>
                <span className="font-serif text-2xl sm:text-3xl font-bold text-maroon-900">
                  {formatCurrency(pkg.priceStarting)}
                </span>
                <span className="text-[10px] text-ink-muted block">/{pkg.priceUnit}</span>
              </div>
              <Button asChild variant="gold" size="sm" className="w-full mt-2 shadow-md">
                <Link href={`/contact?package=${pkg.slug}`}>
                  <span>Book Yatra</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Content Breakdown Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main Itinerary & Details (8 Cols) */}
          <div className="lg:col-span-8 space-y-10">
            {/* Quick Specs */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-6 rounded-3xl bg-white border border-sand-200 shadow-sm text-xs">
              <div className="flex items-start gap-3">
                <Hotel className="w-5 h-5 text-gold-600 shrink-0" />
                <div>
                  <span className="text-ink-muted uppercase font-semibold block text-[10px]">Accommodation</span>
                  <span className="font-bold text-ink mt-0.5 block">{pkg.accommodationType}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Car className="w-5 h-5 text-gold-600 shrink-0" />
                <div>
                  <span className="text-ink-muted uppercase font-semibold block text-[10px]">Vehicle & Transfers</span>
                  <span className="font-bold text-ink mt-0.5 block">{pkg.vehicleType}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Users className="w-5 h-5 text-gold-600 shrink-0" />
                <div>
                  <span className="text-ink-muted uppercase font-semibold block text-[10px]">Recommended For</span>
                  <span className="font-bold text-ink mt-0.5 block">{pkg.idealFor}</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="p-8 rounded-3xl bg-white border border-sand-200 shadow-sm space-y-4">
              <h2 className="font-serif text-2xl font-bold text-ink">
                About This Pilgrimage
              </h2>
              <p className="text-sm sm:text-base text-ink-muted leading-relaxed">
                {pkg.fullDescription}
              </p>
            </div>

            {/* Day by Day Schedule */}
            <div className="p-8 rounded-3xl bg-white border border-sand-200 shadow-sm space-y-6">
              <h2 className="font-serif text-2xl font-bold text-ink flex items-center gap-2">
                <Calendar className="w-5 h-5 text-gold-600" />
                <span>Day-by-Day Detailed Itinerary</span>
              </h2>

              <div className="space-y-6 relative before:absolute before:inset-0 before:left-4 before:w-0.5 before:bg-sand-200">
                {pkg.itinerary.map((day) => (
                  <div key={day.dayNumber} className="relative pl-11">
                    <div className="absolute left-0 top-0 h-8 w-8 rounded-full bg-maroon-800 text-gold-400 flex items-center justify-center font-serif text-sm font-bold shadow-md ring-4 ring-white">
                      {day.dayNumber}
                    </div>

                    <div className="p-5 rounded-2xl bg-sand-50/70 border border-sand-200">
                      <h3 className="font-serif font-bold text-lg text-ink mb-3">
                        Day {day.dayNumber}: {day.title}
                      </h3>

                      <ul className="space-y-2 text-xs sm:text-sm text-ink-muted mb-4">
                        {day.activities.map((act, i) => (
                          <li key={i} className="flex items-start gap-2.5">
                            <span className="h-1.5 w-1.5 rounded-full bg-gold-600 shrink-0 mt-2" />
                            <span>{act}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-4 pt-3 border-t border-sand-200 text-xs text-ink-muted">
                        {day.meals && <span>🍴 <strong>Meals:</strong> {day.meals}</span>}
                        {day.stay && <span>🏨 <strong>Stay:</strong> {day.stay}</span>}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Inclusions & Exclusions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-3xl bg-emerald-50/60 border border-emerald-200">
                <h3 className="font-bold text-xs uppercase tracking-wider text-emerald-900 mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-700" />
                  <span>Package Inclusions</span>
                </h3>
                <ul className="space-y-2.5 text-xs text-emerald-950/80">
                  {pkg.inclusions.map((inc, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 rounded-3xl bg-rose-50/60 border border-rose-200">
                <h3 className="font-bold text-xs uppercase tracking-wider text-rose-900 mb-4 flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-rose-700" />
                  <span>Package Exclusions</span>
                </h3>
                <ul className="space-y-2.5 text-xs text-rose-950/80">
                  {pkg.exclusions.map((exc, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                      <span>{exc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Sidebar Booking Card (4 Cols) */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-28 h-fit">
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-sand-200 shadow-lg space-y-6">
              <div>
                <span className="text-xs uppercase tracking-wider font-semibold text-gold-700 block">
                  Reserve This Package
                </span>
                <h3 className="font-serif text-2xl font-bold text-ink mt-1">
                  Ready to Plan?
                </h3>
                <p className="text-xs text-ink-muted mt-1 leading-relaxed">
                  Send your travel dates and our Tirupati team will immediately prepare your itinerary confirmation.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-sand-50 border border-sand-200 space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-ink-muted">Starting Rate:</span>
                  <span className="font-bold text-ink">{formatCurrency(pkg.priceStarting)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-ink-muted">Duration:</span>
                  <span className="font-bold text-ink">{pkg.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-ink-muted">Advance Deposit:</span>
                  <span className="font-bold text-emerald-700">Zero until confirmed</span>
                </div>
              </div>

              <Button asChild variant="gold" size="lg" className="w-full shadow-md font-bold">
                <Link href={`/contact?package=${pkg.slug}`}>
                  <span>Request Custom Quote</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </Button>

              <div className="pt-2 border-t border-sand-100 space-y-3">
                <a
                  href="https://wa.me/919148391081"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-semibold hover:bg-emerald-100 transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-600" />
                  <span>Ask Questions on WhatsApp</span>
                </a>

                <a
                  href="tel:+919148391081"
                  className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-sand-100 text-ink text-xs font-semibold hover:bg-sand-200 transition-colors"
                >
                  <Phone className="w-4 h-4 text-gold-700" />
                  <span>Call +91 91483 91081</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
