"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Phone, Sparkles, MapPin, ChevronRight, Compass, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Packages", href: "/packages" },
    { name: "3D Journey", href: "/#3d-journey" },
    { name: "Destinations", href: "/#destinations" },
    { name: "Why Us", href: "/#why-us" },
    { name: "FAQ", href: "/#faq" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 transition-all duration-300 w-full",
          isScrolled
            ? "bg-[#FDFBF7]/90 backdrop-blur-md shadow-sm border-b border-sand-200/80 py-3"
            : "bg-transparent py-4 sm:py-5"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="h-10 w-10 sm:h-11 sm:w-11 rounded-xl bg-gradient-to-br from-maroon-700 via-maroon-800 to-maroon-950 flex items-center justify-center shadow-md border border-gold-400/40 group-hover:scale-105 transition-transform duration-200">
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
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-ink flex items-center gap-1">
                TTD <span className="text-maroon-800">Yatra</span>
              </span>
              <span className="text-[10px] tracking-wider uppercase font-semibold text-gold-700 -mt-1 flex items-center gap-1">
                <Sparkles className="w-2.5 h-2.5 text-gold-500" />
                Sacred Pilgrimages
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors relative py-1 hover:text-maroon-700",
                    isActive
                      ? "text-maroon-800 font-semibold"
                      : "text-ink-muted hover:text-ink"
                  )}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-gold-500 to-maroon-700 rounded-full"
                    />
                  )}
                </Link>
              )
            })}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="tel:+919148391081"
              className="hidden xl:flex items-center gap-2 text-xs font-semibold text-ink-muted hover:text-maroon-800 bg-sand-100/80 px-3 py-2 rounded-xl border border-sand-200/80 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-gold-600" />
              <span>+91 91483 91081</span>
            </a>
            <Button asChild variant="gold" size="sm" className="shadow-sm">
              <Link href="/contact">
                <span>Plan My Yatra</span>
                <ChevronRight className="w-3.5 h-3.5 ml-1" />
              </Link>
            </Button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex sm:hidden items-center gap-2">
            <Button asChild variant="gold" size="sm" className="h-8 px-3 text-xs">
              <Link href="/contact">Plan</Link>
            </Button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-ink hover:bg-sand-200/70 transition-colors focus:outline-none focus:ring-2 focus:ring-gold-500"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-[85%] max-w-sm bg-[#FDFBF7] shadow-2xl p-6 flex flex-col justify-between overflow-y-auto lg:hidden"
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-sand-200">
                  <div className="flex items-center gap-2">
                    <div className="h-9 w-9 rounded-lg bg-maroon-800 flex items-center justify-center text-gold-400">
                      <Compass className="w-5 h-5" />
                    </div>
                    <span className="font-serif text-xl font-bold text-ink">
                      TTD <span className="text-maroon-800">Yatra</span>
                    </span>
                  </div>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 rounded-lg hover:bg-sand-200 text-ink"
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="py-6 flex flex-col gap-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={cn(
                        "flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-colors",
                        pathname === link.href
                          ? "bg-maroon-50 text-maroon-800 font-semibold"
                          : "text-ink hover:bg-sand-100"
                      )}
                    >
                      <span>{link.name}</span>
                      <ChevronRight className="w-4 h-4 text-sand-400" />
                    </Link>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-sand-200 flex flex-col gap-3">
                <Button asChild variant="gold" className="w-full">
                  <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                    Plan My Yatra
                  </Link>
                </Button>
                <a
                  href="tel:+919148391081"
                  className="flex items-center justify-center gap-2 py-2.5 text-xs font-semibold text-ink bg-sand-100 rounded-xl border border-sand-200"
                >
                  <Phone className="w-4 h-4 text-gold-700" />
                  <span>Call +91 91483 91081</span>
                </a>
                <p className="text-[11px] text-center text-ink-muted pt-2 flex items-center justify-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-gold-700" />
                  Official Local Tirupati Pilgrimage Support
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
