import React from "react"
import Link from "next/link"
import { Phone, Mail, MapPin, Sparkles, MessageSquare, ArrowRight, ShieldCheck, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="mt-auto bg-[#191514] text-sand-100 border-t border-sand-900/40 relative overflow-hidden">
      {/* Decorative top gold gradient hairline */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-gold-500/80 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-sand-800/60">
          {/* Brand Col */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-maroon-700 to-maroon-950 flex items-center justify-center border border-gold-500/40 shadow-md">
                <svg
                  viewBox="0 0 32 32"
                  className="h-6 w-6 text-gold-400"
                  aria-hidden="true"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="16" cy="3.2" r="1.3" fill="currentColor" stroke="none" />
                    <path d="M16 4.6V7" />
                    <path d="M9 28V16c0-5 3.1-8.4 7-8.4s7 3.4 7 8.4v12" />
                    <path d="M11.7 28v-7.6c0-2.6 1.9-4.4 4.3-4.4s4.3 1.8 4.3 4.4V28" />
                    <path d="M6 28h20" />
                    <path d="M8.3 13h15.4" />
                    <path d="M8.6 10.2h14.8" />
                  </g>
                </svg>
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-white">
                TTD <span className="text-gold-400">Yatra</span>
              </span>
            </Link>

            <p className="text-sand-300/80 text-sm leading-relaxed max-w-sm">
              Making every sacred Tirupati journey simpler, calmer, and deeply memorable. Premium stays, courteous ghat chauffeurs, and personalized on-ground pilgrimage coordination.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-950/80 border border-gold-700/50 text-[11px] font-medium text-gold-300">
                <Sparkles className="w-3 h-3 text-gold-400" />
                10+ Years Local Tirupati Heritage
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sand-900/60 border border-sand-800 text-[11px] font-medium text-sand-300">
                <ShieldCheck className="w-3 h-3 text-gold-400" />
                100% Verified Stays
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-gold-400">
              Explore
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm text-sand-300">
              <li>
                <Link href="/" className="hover:text-gold-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/packages" className="hover:text-gold-400 transition-colors">
                  Yatra Packages
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-gold-400 transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/#3d-journey" className="hover:text-gold-400 transition-colors">
                  3D Sacred Hills Route
                </Link>
              </li>
              <li>
                <Link href="/#destinations" className="hover:text-gold-400 transition-colors">
                  Sacred Destinations
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gold-400 transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Packages */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-gold-400">
              Pilgrimage Trips
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm text-sand-300">
              <li>
                <Link href="/packages/tirupati-darshan-2d" className="hover:text-gold-400 transition-colors">
                  2-Day Express Darshan
                </Link>
              </li>
              <li>
                <Link href="/packages/tirumala-family-3d" className="hover:text-gold-400 transition-colors">
                  3-Day Family Pilgrimage
                </Link>
              </li>
              <li>
                <Link href="/packages/temple-circuit-4d" className="hover:text-gold-400 transition-colors">
                  4-Day Temple Circuit
                </Link>
              </li>
              <li>
                <Link href="/packages/senior-citizen-special-3d" className="hover:text-gold-400 transition-colors">
                  Senior Citizen Special Yatra
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gold-400 transition-colors">
                  Custom Itinerary Request
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-gold-400">
              Tirupati Support
            </h4>
            <ul className="flex flex-col gap-3 text-sm text-sand-300">
              <li>
                <a
                  href="tel:+919148391081"
                  className="flex items-center gap-2.5 hover:text-gold-400 transition-colors"
                >
                  <Phone className="w-4 h-4 text-gold-500 shrink-0" />
                  <span>+91 91483 91081</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/919148391081"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 hover:text-gold-400 transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-gold-500 shrink-0" />
                  <span>WhatsApp Concierge</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:yatrattd@gmail.com"
                  className="flex items-center gap-2.5 hover:text-gold-400 transition-colors"
                >
                  <Mail className="w-4 h-4 text-gold-500 shrink-0" />
                  <span>yatrattd@gmail.com</span>
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-xs text-sand-400 pt-1">
                <MapPin className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                <span>Alipiri Bypass Road, Tirupati, Andhra Pradesh 517501, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer & Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-sand-400">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} TTD Yatra. All rights reserved. Crafted with devotion for pilgrims.
          </p>
          <p className="max-w-xl text-center md:text-right text-[11px] text-sand-500 leading-relaxed">
            <strong className="text-sand-400 font-semibold">Disclaimer:</strong> TTD Yatra is a privately managed premium travel and pilgrimage assistance service and is not affiliated with, endorsed by, or operated by Tirumala Tirupati Devasthanams (TTD).
          </p>
        </div>
      </div>
    </footer>
  )
}
