import React from "react"
import Link from "next/link"
import Image from "next/image"
import { Sparkles, ShieldCheck, Heart, Users, MapPin, Award, CheckCircle2, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="py-12 md:py-20 bg-[#FDFBF7] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-100/80 border border-gold-300/70 text-maroon-900 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-gold-600" />
            <span>Rooted in Devotion & Service</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-ink tracking-tight mb-4">
            About <span className="text-maroon-800 italic font-normal">TTD Yatra</span>
          </h1>

          <p className="text-sm sm:text-base text-ink-muted leading-relaxed">
            Helping devotees from across the world experience a calm, comfortable, and spiritually fulfilling Tirupati pilgrimage.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink leading-snug">
              Why We Started TTD Yatra
            </h2>
            <p className="text-sm sm:text-base text-ink-muted leading-relaxed">
              Every year, over 25 million devotees journey to the sacred Sapthagiri hills to seek the blessings of Lord Venkateswara. Yet, for many families — especially those traveling with elderly parents or young children — the logistics of finding clean hotels, negotiating with local taxis, and understanding complex queue tokens can turn a sacred pilgrimage into a stressful ordeal.
            </p>
            <p className="text-sm sm:text-base text-ink-muted leading-relaxed">
              TTD Yatra was established with a singular mission: to provide honest, end-to-end devotional travel assistance rooted in genuine Tirupati hospitality. We take care of the stays, vehicles, permits, and timings so that you and your family can immerse yourselves completely in the divine darshan.
            </p>
            <div className="pt-2 flex items-center gap-4 text-xs font-semibold text-maroon-900">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-gold-600" />
                15,000+ Happy Pilgrims
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-gold-600" />
                10+ Years Local Heritage
              </span>
            </div>
          </div>

          <div className="lg:col-span-6 relative rounded-3xl overflow-hidden shadow-xl aspect-[4/3] bg-sand-200">
            <Image
              src="https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80"
              alt="Tirupati Temple Heritage"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* 4 Core Pillars */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink">
              Our Core Commitments
            </h2>
            <p className="text-xs sm:text-sm text-ink-muted mt-1">
              The values guiding every single yatra we plan.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-3xl bg-white border border-sand-200 shadow-sm space-y-3">
              <div className="h-12 w-12 rounded-2xl bg-gold-50 text-gold-700 flex items-center justify-center">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-lg text-ink">Devotion First</h3>
              <p className="text-xs text-ink-muted leading-relaxed">
                We view pilgrimage assistance not as a commercial transaction, but as a sacred service (Kainkaryam) to fellow devotees.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-sand-200 shadow-sm space-y-3">
              <div className="h-12 w-12 rounded-2xl bg-gold-50 text-gold-700 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-lg text-ink">100% Transparency</h3>
              <p className="text-xs text-ink-muted leading-relaxed">
                Clear all-inclusive quotes. No hidden tolls, night fees, or driver haggling during your journey.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-sand-200 shadow-sm space-y-3">
              <div className="h-12 w-12 rounded-2xl bg-gold-50 text-gold-700 flex items-center justify-center">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-lg text-ink">Elder & Child Care</h3>
              <p className="text-xs text-ink-muted leading-relaxed">
                Unhurried itineraries, wheelchair coordination, accessible ground-floor rooms, and caring on-ground drivers.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-sand-200 shadow-sm space-y-3">
              <div className="h-12 w-12 rounded-2xl bg-gold-50 text-gold-700 flex items-center justify-center">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-lg text-ink">Local Tirupati Base</h3>
              <p className="text-xs text-ink-muted leading-relaxed">
                Our operations team and fleet are permanently stationed in Tirupati with immediate 24/7 on-ground assistance.
              </p>
            </div>
          </div>
        </div>

        {/* Disclaimer Banner */}
        <div className="p-6 sm:p-8 rounded-3xl bg-sand-100/70 border border-sand-300 text-xs text-ink-muted leading-relaxed mb-12">
          <h4 className="font-bold text-ink text-sm mb-1 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-gold-700" />
            Independent Service Advisory
          </h4>
          <p>
            TTD Yatra is a privately managed premium travel and pilgrimage assistance service based in Tirupati. We are an independent devotional travel agency and are not affiliated with, endorsed by, or operated by Tirumala Tirupati Devasthanams (TTD), which is the official governing trust of the Sri Venkateswara Temple.
          </p>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <Button asChild variant="gold" size="lg" className="shadow-lg">
            <Link href="/contact" className="gap-2">
              <span>Plan Your Pilgrimage With Us</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
