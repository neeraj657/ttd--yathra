"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Sparkles, ShieldCheck, Star, ArrowRight, CheckCircle2, MapPin, Users, HeartHandshake } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-6 pb-16 md:pt-12 md:pb-24 lg:pt-16 lg:pb-32 bg-gradient-to-b from-[#FAF7F2] via-[#FDFBF7] to-[#FAF7F2]">
      {/* Background Spiritual Ambient Patterns */}
      <div className="absolute inset-0 spiritual-grid-bg opacity-70 pointer-events-none" />
      
      {/* Subtle Warm Saffron & Gold Radial Glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-r from-gold-300/15 via-maroon-500/10 to-gold-400/15 blur-3xl rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Content Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col gap-6 text-left"
          >
            {/* Spiritual Pill Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sand-200/70 border border-sand-300 text-maroon-900 text-xs font-semibold backdrop-blur-sm self-start shadow-sm"
            >
              <span className="flex h-2 w-2 rounded-full bg-gold-600 animate-pulse" />
              <span>Sacred Pilgrimages to Tirumala & Tirupati</span>
            </motion.div>

            {/* Editorial Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-ink leading-[1.1]"
            >
              Your Tirupati Yatra,{" "}
              <span className="italic font-normal text-maroon-800 relative inline-block">
                Thoughtfully Planned.
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3 text-gold-500/60"
                  viewBox="0 0 200 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2.5 6.5C40 2.5 130 1.5 197.5 5"
                    stroke="currentColor"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </motion.h1>

            {/* Supporting Editorial Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-base sm:text-lg text-ink-muted leading-relaxed max-w-2xl"
            >
              Plan a peaceful and comfortable Tirupati pilgrimage with trusted local assistance, sanitized stays, courteous ghat chauffeurs, darshan guidance, and personalized travel support for your family.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <Button asChild variant="gold" size="lg" className="shadow-lg hover:shadow-xl">
                <Link href="/contact" className="flex items-center gap-2">
                  <span>Plan My Yatra</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>

              <Button asChild variant="outline" size="lg" className="hover:bg-sand-100">
                <Link href="/packages">
                  Explore Packages
                </Link>
              </Button>
            </motion.div>

            {/* Trust Badges Row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="pt-4 border-t border-sand-200/80 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-ink-muted"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0" />
                <span className="font-medium text-ink">Local Tirupati Team</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0" />
                <span className="font-medium text-ink">Senior & Child Friendly</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0" />
                <span className="font-medium text-ink">Zero Hidden Fees</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Visual Composition Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Main Visual Frame with Gold Accent Border */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-sand-100 aspect-[4/5] sm:aspect-[4/4.5] lg:aspect-[4/5]">
              <Image
                src="https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=85"
                alt="Tirumala Sacred Temple Gopuram"
                fill
                priority
                className="object-cover object-center transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 768px) 100vw, 500px"
              />
              
              {/* Subtle Gradient Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Bottom Card Overlay on Image */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-white/40 shadow-lg text-ink">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-xl bg-gold-100 text-gold-800">
                      <Sparkles className="w-4 h-4 text-gold-700" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-ink">Lord Venkateswara Abode</p>
                      <p className="text-[11px] text-ink-muted">Tirumala Sapthagiri Hills</p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-maroon-50 text-maroon-800 text-[10px] font-semibold">
                    Kaliyuga Vaikuntam
                  </span>
                </div>
              </div>
            </div>

            {/* Floating Trust Metric Card 1 (Top Right) */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -top-4 -right-4 sm:-right-6 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-xl border border-sand-200/90 flex items-center gap-3 hidden sm:flex"
            >
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center text-ink shadow-sm">
                <Star className="w-5 h-5 fill-current text-white" />
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <span className="text-sm font-bold text-ink">4.9 / 5.0</span>
                  <span className="text-[10px] text-gold-700 font-semibold">(1,400+ reviews)</span>
                </div>
                <p className="text-[11px] text-ink-muted">Devotee Satisfaction</p>
              </div>
            </motion.div>

            {/* Floating Trust Metric Card 2 (Bottom Left) */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute -bottom-6 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-xl border border-sand-200/90 flex items-center gap-3 hidden sm:flex"
            >
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-maroon-700 to-maroon-900 flex items-center justify-center text-gold-400 shadow-sm">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-ink">15,000+ Devotees</p>
                <p className="text-[11px] text-ink-muted">Assisted with Care</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
