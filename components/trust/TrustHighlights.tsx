import React from "react"
import { Clock, ShieldCheck, HeartHandshake, ReceiptText, Users, Award } from "lucide-react"

export default function TrustHighlights() {
  const highlights = [
    {
      icon: Award,
      title: "10+ Years Experience",
      desc: "Deep on-ground roots and local insight in Tirupati",
    },
    {
      icon: HeartHandshake,
      title: "Personalized Care",
      desc: "Customized around your family's pace & comfort",
    },
    {
      icon: Users,
      title: "Family & Senior Friendly",
      desc: "Wheelchair coordination and elder-safe planning",
    },
    {
      icon: ReceiptText,
      title: "100% Clear Pricing",
      desc: "Transparent all-inclusive rates without hidden extras",
    },
  ]

  return (
    <section className="bg-white border-y border-sand-200/80 py-8 relative z-20 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {highlights.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={idx}
                className="flex items-start gap-4 p-3 rounded-2xl hover:bg-sand-50/80 transition-colors"
              >
                <div className="h-12 w-12 rounded-2xl bg-gold-50 border border-gold-200/80 flex items-center justify-center shrink-0 text-gold-700 shadow-sm">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-base text-ink">
                    {item.title}
                  </h3>
                  <p className="text-xs text-ink-muted leading-relaxed mt-0.5">
                    {item.desc}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
