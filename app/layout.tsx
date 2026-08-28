import type { Metadata } from "next"
import "./globals.css"
import Navbar from "@/components/navbar/Navbar"
import Footer from "@/components/footer/Footer"

export const metadata: Metadata = {
  title: "TTD Yatra | Premium Tirupati Pilgrimage & Travel Planning",
  description:
    "Plan a comfortable, peaceful, and well-organized Tirupati pilgrimage with TTD Yatra. Hand-picked hotels, dedicated ghat road cabs, darshan guidance, and customized family itineraries.",
  keywords: [
    "Tirupati Yatra",
    "Tirumala Darshan packages",
    "Tirupati car rental",
    "Tirupati hotels near temple",
    "Senior citizen Tirupati pilgrimage",
    "Tirupati family tour package",
    "Srivari Darshan guidance",
    "Srikalahasti Rahu Ketu pooja package"
  ],
  authors: [{ name: "TTD Yatra Concierge Team" }],
  creator: "TTD Yatra",
  publisher: "TTD Yatra Devotional Travel",
  openGraph: {
    title: "TTD Yatra | Premium Tirupati Pilgrimage & Travel Planning",
    description:
      "Plan a serene and comfortable Tirupati pilgrimage with trusted local assistance, premium stays, reliable cabs, and personalized itinerary support.",
    url: "https://ttdyatra.com",
    siteName: "TTD Yatra",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TTD Yatra | Sacred Journeys to Tirumala, Thoughtfully Arranged",
    description:
      "Hotels, private cabs, and end-to-end trip assistance for your Tirupati pilgrimage.",
  },
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col bg-[#FDFBF7] text-ink antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
