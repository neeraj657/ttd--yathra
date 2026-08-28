import React from "react"
import Link from "next/link"
import { Compass, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-[#FDFBF7] px-4 py-16">
      <div className="text-center max-w-md mx-auto space-y-6">
        <div className="h-16 w-16 mx-auto rounded-2xl bg-gold-100 text-gold-700 flex items-center justify-center shadow-sm">
          <Compass className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-maroon-800">
            404 — Path Not Found
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-ink">
            This Sacred Path Leads Elsewhere
          </h1>
          <p className="text-sm text-ink-muted leading-relaxed">
            The page you are looking for does not exist or has moved. Let us guide you back to your Tirupati yatra planning.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Button asChild variant="gold">
            <Link href="/">
              <span>Return Home</span>
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/packages">View Packages</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
