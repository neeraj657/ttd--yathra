"use client"

import React from "react"
import { motion } from "framer-motion"
import { Sparkles, MapPin, Heart, ShieldCheck, CheckCircle2, Award, Users } from "lucide-react"

export default function WhyChooseUs() {
  const benefits = [
    {
      number: "01",
      title: "Local Tirupati Expertise",
      subtitle: "Born and based in the shadow of Seshachalam hills",
      description:
        "We live in Tirupati. We track daily crowd trends, official TTD slot releases, token counter timings, and ghat road protocols firsthand — so your pilgrimage never encounters blind spots.",
      points: [
        "Real-time darshan rush updates",
        "Direct local contacts for accommodation & vehicles",
        "Deep knowledge of regional sthala puranam & temple rituals"
      ],
    },
    {
      number: "02",
      title: "End-to-End Coordinated Planning",
      subtitle: "One single dedicated point of contact",
      description:
        "No juggling between hotel receptions, independent cab drivers, and queue guides. Every segment of your itinerary is synchronized by one dedicated coordinator on WhatsApp and phone.",
      points: [
        "Synchronized airport/station meet & greets",
        "Pre-arranged check-ins suited to your darshan slot",
        "Vehicle stays with your family for your entire itinerary"
      ],
    },
    {
      number: "03",
      title: "100% Transparent & Honest Pricing",
      subtitle: "Zero hidden charges or stressful driver haggling",
      description:
        "We believe devotion should be free from financial anxiety. Our quotes are all-inclusive — vehicle, fuel, driver night allowances, interstate permits, hotel taxes, and guidance.",
      points: [
        "Clear itemized package invoices",
        "No sudden surge charges or peak day surcharges",
        "Guaranteed vehicle model delivery"
      ],
    },
    {
      number: "04",
      title: "Devoted Family & Elder Care",
      subtitle: "Unhurried, compassionate pacing for elders and kids",
      description:
        "Pilgrimages with senior citizens require patience and barrier-free access. We arrange ground-floor rooms, wheelchair assistance, and prioritize low-strain walking routes.",
      points: [
        "Wheelchair coordination where permitted",
        "Special elderly & infant darshan token assistance",
        "Satvic & low-spice dining recommendations"
      ],
    },
  ]

  return (
    <section id="why-us" className="py-20 lg:py-32 bg-[#FDFBF7] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Sticky Editorial Column */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 h-fit">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-100/80 border border-gold-300/70 text-maroon-900 text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5 text-gold-600" />
              <span>Devotee Trust & Values</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-ink tracking-tight leading-[1.15] mb-6">
              Why Devotees Choose{" "}
              <span className="text-maroon-800 italic font-normal">TTD Yatra</span>
            </h2>

            <p className="text-base text-ink-muted leading-relaxed mb-8">
              We treat your sacred journey the way we would plan our own family&apos;s pilgrimage — with utmost patience, honesty, spiritual respect, and attention to every delicate detail.
            </p>

            {/* Quick Stat Pill Card */}
            <div className="p-6 rounded-3xl bg-white border border-sand-200/90 shadow-sm space-y-4">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-2xl bg-maroon-800 text-gold-400 flex items-center justify-center font-serif text-xl font-bold">
                  15k+
                </div>
                <div>
                  <h4 className="font-serif font-bold text-base text-ink">
                    Happy Devotees Guided
                  </h4>
                  <p className="text-xs text-ink-muted">Across India and overseas</p>
                </div>
              </div>

              <div className="pt-3 border-t border-sand-100 flex items-center justify-between text-xs text-ink-muted">
                <span className="flex items-center gap-1.5 text-gold-800 font-semibold">
                  <Award className="w-4 h-4 text-gold-600" />
                  Top Rated Pilgrimage Service
                </span>
                <span className="text-ink font-bold">4.9 ★★★★★</span>
              </div>
            </div>
          </div>

          {/* Right Benefits Column (01 to 04) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {benefits.map((b, idx) => (
              <motion.div
                key={b.number}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative rounded-3xl bg-white border border-sand-200/90 p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-gold-300/80"
              >
                <div className="flex items-start gap-6">
                  {/* Big Stylized Number */}
                  <span className="font-serif text-4xl sm:text-5xl font-bold text-sand-300 group-hover:text-gold-500/80 transition-colors shrink-0 leading-none">
                    {b.number}
                  </span>

                  <div className="space-y-2 flex-1">
                    <h3 className="font-serif text-2xl font-bold text-ink group-hover:text-maroon-800 transition-colors">
                      {b.title}
                    </h3>
                    <p className="text-xs font-semibold uppercase tracking-wider text-gold-700">
                      {b.subtitle}
                    </p>
                    <p className="text-sm text-ink-muted leading-relaxed pt-1">
                      {b.description}
                    </p>

                    {/* Bullet Points */}
                    <div className="pt-4 mt-4 border-t border-sand-100 space-y-1.5">
                      {b.points.map((pt, pIdx) => (
                        <div key={pIdx} className="flex items-center gap-2 text-xs text-ink/80">
                          <CheckCircle2 className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
