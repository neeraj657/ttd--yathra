"use client"

import React, { useState } from "react"
import { useSearchParams } from "next/navigation"
import confetti from "canvas-confetti"
import {
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Users,
  CheckCircle2,
  Send,
  MessageSquare,
  ShieldCheck,
  HeartHandshake,
  Car,
  Clock
} from "lucide-react"
import { packagesData } from "@/lib/data/packages"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

interface FormState {
  fullName: string
  phoneNumber: string
  email: string
  travelDate: string
  travellersCount: string
  pickupCity: string
  preferredPackage: string
  specialRequirements: string
}

export default function ContactForm() {
  const searchParams = useSearchParams()
  const initialPackage = searchParams?.get("package") || "tirumala-family-3d"

  const [formData, setFormData] = useState<FormState>({
    fullName: "",
    phoneNumber: "",
    email: "",
    travelDate: "",
    travellersCount: "4",
    pickupCity: "Tirupati Airport / Station",
    preferredPackage: initialPackage,
    specialRequirements: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [errorMsg, setErrorMsg] = useState("")

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
    if (errorMsg) setErrorMsg("")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.fullName.trim()) {
      setErrorMsg("Please provide your full name.")
      return
    }

    if (!formData.phoneNumber.trim() || formData.phoneNumber.trim().length < 10) {
      setErrorMsg("Please enter a valid 10-digit phone number.")
      return
    }

    setIsSubmitting(true)

    // Simulate reliable frontend submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#C5A93C", "#751426", "#F3CA52"],
        })
      } catch {
        // graceful confetti fallback
      }
    }, 600)
  }

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#FDFBF7] relative overflow-hidden">
      {/* Background Spiritual Grid */}
      <div className="absolute inset-0 spiritual-grid-bg opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Contact Info & Value Commitments (5 Cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-100/80 border border-gold-300/70 text-maroon-900 text-xs font-semibold uppercase tracking-wider mb-3">
                <Sparkles className="w-3.5 h-3.5 text-gold-600" />
                <span>Local Tirupati Concierge</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-ink tracking-tight leading-tight">
                Let&apos;s Plan Your <br />
                <span className="text-maroon-800 italic font-normal">Tirupati Yatra</span>
              </h2>

              <p className="mt-4 text-sm sm:text-base text-ink-muted leading-relaxed">
                Tell us your travel dates and family size. We will customize the ideal stay, private cab, and darshan itinerary with 100% transparent pricing.
              </p>
            </div>

            {/* Quick Contact Cards */}
            <div className="space-y-4">
              <a
                href="https://wa.me/919148391081"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-sand-200/90 shadow-sm hover:border-emerald-300 hover:shadow-md transition-all group"
              >
                <div className="h-12 w-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-sm text-ink group-hover:text-emerald-800 transition-colors">
                    Chat on WhatsApp
                  </h4>
                  <p className="text-xs text-ink-muted">+91 91483 91081 (Instant response)</p>
                </div>
              </a>

              <a
                href="tel:+919148391081"
                className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-sand-200/90 shadow-sm hover:border-gold-300 hover:shadow-md transition-all group"
              >
                <div className="h-12 w-12 rounded-xl bg-gold-50 text-gold-700 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-sm text-ink group-hover:text-gold-900 transition-colors">
                    Direct Helpline
                  </h4>
                  <p className="text-xs text-ink-muted">+91 91483 91081 (06:00 AM – 10:00 PM)</p>
                </div>
              </a>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-sand-200/90 shadow-sm">
                <div className="h-12 w-12 rounded-xl bg-maroon-50 text-maroon-800 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-sm text-ink">
                    Local Tirupati Office
                  </h4>
                  <p className="text-xs text-ink-muted leading-relaxed">
                    Alipiri Bypass Road, Near Garuda Circle, Tirupati, Andhra Pradesh 517501
                  </p>
                </div>
              </div>
            </div>

            {/* Devotee Guarantee Strip */}
            <div className="p-4 rounded-2xl bg-gold-50/70 border border-gold-200/80 flex items-center gap-3 text-xs text-gold-900 font-medium">
              <ShieldCheck className="w-5 h-5 text-gold-700 shrink-0" />
              <span>We never share your contact details. Zero spam guaranteed.</span>
            </div>
          </div>

          {/* Right Column: Interactive Form Card (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-white border border-sand-200/90 p-6 sm:p-10 shadow-xl relative">
              {isSuccess ? (
                /* Success Confirmation State */
                <div className="text-center py-12 px-4 space-y-6">
                  <div className="h-20 w-20 mx-auto rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shadow-inner">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-ink">
                      Yatra Request Received!
                    </h3>
                    <p className="text-sm text-ink-muted max-w-md mx-auto leading-relaxed">
                      Thank you, <strong className="text-ink">{formData.fullName}</strong>! Our local Tirupati pilgrimage coordinator will review your dates and contact you shortly with a customized itinerary & transparent quote.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-sand-50 border border-sand-200 text-left max-w-md mx-auto text-xs text-ink-muted space-y-1.5">
                    <p><strong>Package:</strong> {formData.preferredPackage}</p>
                    <p><strong>Phone:</strong> {formData.phoneNumber}</p>
                    <p><strong>Pickup:</strong> {formData.pickupCity}</p>
                  </div>

                  <div className="pt-4">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => {
                        setIsSuccess(false)
                        setFormData({
                          fullName: "",
                          phoneNumber: "",
                          email: "",
                          travelDate: "",
                          travellersCount: "4",
                          pickupCity: "Tirupati Airport / Station",
                          preferredPackage: "tirumala-family-3d",
                          specialRequirements: "",
                        })
                      }}
                    >
                      Plan Another Yatra
                    </Button>
                  </div>
                </div>
              ) : (
                /* Main Interactive Form */
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="border-b border-sand-100 pb-4 mb-2">
                    <h3 className="font-serif text-2xl font-bold text-ink">
                      Request Your Pilgrimage Plan
                    </h3>
                    <p className="text-xs text-ink-muted mt-0.5">
                      Receive an itemized quote and itinerary within 30 minutes.
                    </p>
                  </div>

                  {errorMsg && (
                    <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-800 font-medium">
                      {errorMsg}
                    </div>
                  )}

                  {/* Name and Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label htmlFor="fullName">Full Name *</Label>
                      <Input
                        id="fullName"
                        name="fullName"
                        placeholder="e.g. Ramesh Sharma"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="phoneNumber">Phone / WhatsApp *</Label>
                      <Input
                        id="phoneNumber"
                        name="phoneNumber"
                        type="tel"
                        placeholder="e.g. 98765 43210"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  {/* Email & Travel Date */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label htmlFor="email">Email Address (Optional)</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="e.g. ramesh@example.com"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="travelDate">Approximate Travel Date *</Label>
                      <Input
                        id="travelDate"
                        name="travelDate"
                        type="date"
                        value={formData.travelDate}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  {/* Travellers & Pickup City */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label htmlFor="travellersCount">Total Travellers</Label>
                      <select
                        id="travellersCount"
                        name="travellersCount"
                        value={formData.travellersCount}
                        onChange={handleChange}
                        className="flex h-12 w-full rounded-xl border border-sand-300 bg-white px-4 py-2 text-sm text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 shadow-sm"
                      >
                        <option value="1">1 Person (Solo Devotee)</option>
                        <option value="2">2 Persons (Couple)</option>
                        <option value="3-4">3 - 4 Persons (Small Family)</option>
                        <option value="5-7">5 - 7 Persons (Innova Family)</option>
                        <option value="8+">8+ Persons (Group / Tempo)</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="pickupCity">Pickup Point</Label>
                      <select
                        id="pickupCity"
                        name="pickupCity"
                        value={formData.pickupCity}
                        onChange={handleChange}
                        className="flex h-12 w-full rounded-xl border border-sand-300 bg-white px-4 py-2 text-sm text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 shadow-sm"
                      >
                        <option value="Tirupati Airport / Station">Tirupati Airport / Railway Station</option>
                        <option value="Chennai City / Airport">Chennai Airport / City (Doorstep)</option>
                        <option value="Bengaluru City / Airport">Bengaluru Airport / City (Doorstep)</option>
                        <option value="Already in Tirupati">Already arrived in Tirupati</option>
                      </select>
                    </div>
                  </div>

                  {/* Preferred Package */}
                  <div className="space-y-1.5">
                    <Label htmlFor="preferredPackage">Preferred Package / Service</Label>
                    <select
                      id="preferredPackage"
                      name="preferredPackage"
                      value={formData.preferredPackage}
                      onChange={handleChange}
                      className="flex h-12 w-full rounded-xl border border-sand-300 bg-white px-4 py-2 text-sm text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 shadow-sm"
                    >
                      {packagesData.map((pkg) => (
                        <option key={pkg.slug} value={pkg.slug}>
                          {pkg.title} ({pkg.duration})
                        </option>
                      ))}
                      <option value="custom-plan">Customized Itinerary / Cab & Hotel Only</option>
                    </select>
                  </div>

                  {/* Special Requirements */}
                  <div className="space-y-1.5">
                    <Label htmlFor="specialRequirements">
                      Special Requirements / Notes (Optional)
                    </Label>
                    <Textarea
                      id="specialRequirements"
                      name="specialRequirements"
                      rows={3}
                      placeholder="e.g. Senior citizens (need wheelchair assistance), infant under 1 year, arrival at 6 AM by train..."
                      value={formData.specialRequirements}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    variant="gold"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full shadow-lg text-base font-bold"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="h-4 w-4 rounded-full border-2 border-ink border-t-transparent animate-spin" />
                        Processing Request...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="w-4 h-4" />
                        Request My Yatra Plan
                      </span>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
