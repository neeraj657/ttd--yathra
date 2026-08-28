"use client"

import React from "react"
import { motion } from "framer-motion"
import { Sparkles, Send, ShieldCheck, HeartHandshake, ArrowRight } from "lucide-react"

export default function HowItWorks() {
  const steps = [
    {
      step: "01",
      icon: Send,
      title: "Share Your Plan",
      description:
        "Tell us your preferred travel dates, pickup city (Tirupati, Chennai, Bangalore), number of adults/elders/children, and special seva wishes.",
    },
    {
      step: "02",
      icon: ShieldCheck,
      title: "We Arrange Everything",
      description:
        "We coordinate sanitized hotel rooms near the temple, assign an experienced ghat chauffeur, and provide complete step-by-step darshan guidance.",
    },
    {
      step: "03",
      icon: HeartHandshake,
      title: "Travel Worry-Free",
      description:
        "Arrive in Tirupati with peace of mind. Your driver meets you at arrival, and our local coordinator remains on call 24/7 throughout your stay.",
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-[#FAF7F2] border-y border-sand-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-100/80 border border-gold-300/70 text-maroon-900 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-gold-600" />
            <span>Effortless Pilgrimage</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-ink tracking-tight leading-tight">
            Your Yatra in{" "}
            <span className="text-maroon-800 italic font-normal">3 Simple Steps</span>
          </h2>

          <p className="mt-3 text-sm sm:text-base text-ink-muted leading-relaxed">
            Planning a sacred journey to Tirumala should be spiritually uplifting, not logistically overwhelming.
          </p>
        </div>

        {/* 3 Step Cards with Connecting Line on Desktop */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Desktop Connecting Flow Line */}
          <div className="hidden md:block absolute top-1/2 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-gold-300 via-maroon-300 to-gold-300 -translate-y-8 z-0 pointer-events-none" />

          {steps.map((item, idx) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="relative z-10 flex flex-col items-center text-center p-8 rounded-3xl bg-white border border-sand-200/90 shadow-sm hover:shadow-lg transition-all duration-300 group"
              >
                {/* Step Number Badge */}
                <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-maroon-800 to-maroon-950 text-gold-400 border-2 border-gold-400/40 flex items-center justify-center font-serif text-2xl font-bold shadow-md mb-6 group-hover:scale-105 transition-transform duration-300">
                  {item.step}
                </div>

                <div className="p-2.5 rounded-xl bg-gold-50 text-gold-700 mb-4 border border-gold-200/60">
                  <Icon className="w-5 h-5" />
                </div>

                <h3 className="font-serif text-xl font-bold text-ink mb-3 group-hover:text-maroon-800 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
