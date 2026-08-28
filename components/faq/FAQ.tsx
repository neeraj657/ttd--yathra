"use client"

import React from "react"
import { Sparkles, HelpCircle, Phone, MessageSquare } from "lucide-react"
import { faqData } from "@/lib/data/faq"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"

export default function FAQ() {
  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#FAF7F2] border-y border-sand-200/80 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-100/80 border border-gold-300/70 text-maroon-900 text-xs font-semibold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-gold-600" />
            <span>Got Questions?</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-ink tracking-tight leading-tight">
            Frequently Asked{" "}
            <span className="text-maroon-800 italic font-normal">Questions</span>
          </h2>

          <p className="mt-3 text-sm sm:text-base text-ink-muted leading-relaxed">
            Everything you need to know about planning your Tirupati and Tirumala pilgrimage with complete clarity.
          </p>
        </div>

        {/* Accordion Component */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-sand-200/90 shadow-sm">
          <Accordion type="single" collapsible defaultValue="faq-1" className="w-full">
            {faqData.map((item) => (
              <AccordionItem key={item.id} value={item.id}>
                <AccordionTrigger className="text-base sm:text-lg">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-ink-muted">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Quick Contact Helpline Card */}
        <div className="mt-10 p-6 rounded-3xl bg-white border border-sand-200/80 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-serif font-bold text-base text-ink">
              Have a specific question about your dates or group?
            </h4>
            <p className="text-xs text-ink-muted mt-0.5">
              Our Tirupati pilgrimage coordinators are happy to assist on call or WhatsApp.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href="https://wa.me/919148391081"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-300 text-xs font-semibold hover:bg-emerald-100 transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-emerald-600" />
              <span>WhatsApp Us</span>
            </a>
            <a
              href="tel:+919148391081"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-sand-100 text-ink border border-sand-200 text-xs font-semibold hover:bg-sand-200 transition-colors"
            >
              <Phone className="w-4 h-4 text-gold-700" />
              <span>Call Team</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
