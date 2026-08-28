# TTD Yatra — Premium Tirupati Pilgrimage & Travel Platform

> **A modern, production-grade pilgrimage and travel planning web application crafted for devotees visiting Tirupati and Tirumala.**

---

## 🌟 Project Overview

**TTD Yatra** is an independent, premium pilgrimage and travel planning web application built to assist devotees in planning peaceful, comfortable, and unhurried journeys to the holy hill town of Tirumala (the supreme abode of Kaliyuga Varada Lord Venkateswara) and the surrounding temple circuits (Sri Padmavathi Ammavari Temple, Sri Kalahasteeswara Temple, Kanipakam Vinayaka Temple, and sacred theerthams).

The application provides:
- **End-to-End Pilgrimage Concierge**: Handpicked sanitized stays near Alipiri & Tirupati Station, certified ghat road private cabs, step-by-step darshan guidance, and dedicated on-ground coordinators.
- **Curated Multi-Day Itineraries**: 2-Day Express Darshan, 3-Day Family Pilgrimage, 4-Day Grand Temple Circuit, and 3-Day Senior Citizen Special with interactive modal schedules.
- **Interactive 3D "Journey to Tirumala" (Three.js / React Three Fiber)**: A real-time 3D visualization representing the ascent up the sacred 7 hills (*Sapthagiri*), glowing ghat route, altitude waypoints, and the golden *Ananda Nilayam* temple gopuram with graceful 2D fallback.
- **Interactive Custom Yatra Planner**: Multi-parameter booking and enquiry calculator with instant validation, pickup city selection, and celebratory feedback.
- **Spiritual & Editorial Visual Identity**: Deep Temple Maroon (`#751426`), Divine Gold (`#C5A93C`), Warm Saffron, Ivory Cream, and Charcoal tones with editorial serif typography (*Playfair Display*) and modern sans-serif (*Plus Jakarta Sans*).

---

## 🛠️ Technology Stack

| Technology | Purpose |
| :--- | :--- |
| **Next.js 14+ (App Router)** | Modern React framework providing server/client component boundaries, file-based routing, image optimization, font optimization, and SEO metadata. |
| **React 18** | Declarative component UI library with concurrent rendering and hooks. |
| **TypeScript** | Strict compile-time type safety across data schemas, components, and form handlers. |
| **Tailwind CSS** | Utility-first styling engine with customized spiritual design tokens, responsive breakpoints, and animations. |
| **shadcn/ui (Radix Primitives)** | Accessible, headless UI primitives including Dialog, Accordion, Tabs, Badges, and Buttons. |
| **Three.js & React Three Fiber** | Declarative WebGL 3D rendering pipeline for the interactive 7 Hills pilgrimage route. |
| **@react-three/drei** | Specialized helpers including OrbitControls, Sparkles, Float, and Trail for high-performance 3D scene orchestration. |
| **Framer Motion** | Smooth fluid scroll reveals, staggered text entrances, and mobile drawer transitions. |
| **Lucide React** | Consistent, scalable vector icon library. |
| **Canvas Confetti** | Celebration visual feedback upon successful pilgrimage inquiry submission. |

---

## 💡 Why These Technologies?

### 1. Why Next.js App Router instead of plain React (CRA/Vite)?
- **Server Components & SEO**: Next.js automatically renders semantic HTML server-side, ensuring search engines properly index temple itineraries, local pilgrimage tips, and structured OpenGraph cards.
- **Performance & Font Optimization**: Zero layout shifts with `next/font/google` (*Playfair Display* and *Plus Jakarta Sans*) and automatic webp/avif compression with `next/image`.
- **Clean Route Architecture**: Standalone sub-routes (`/packages`, `/packages/[slug]`, `/services`, `/about`, `/contact`) with static generation (`generateStaticParams`).

### 2. Why TypeScript?
- Enforces strict data models for packages (`PackageItem`, `ItineraryDay`), services (`ServiceItem`), destinations (`DestinationItem`), and testimonials (`TestimonialItem`), completely eliminating runtime `undefined` property crashes.

### 3. Why React Three Fiber + Three.js?
- Enables declarative React component composition (`<mesh>`, `<pointLight>`, `<Sparkles>`) directly inside the component tree while maintaining 60 FPS WebGL rendering without manual imperativeness or memory leaks.

### 4. Why Framer Motion?
- Provides physics-based transitions, spring animations for the mobile drawer, and subtle intersection observer reveals without bloating the DOM with excessive CSS keyframes.

---

## 📁 Project Architecture & Folder Structure

```text
ttd-yatra/
├── app/
│   ├── layout.tsx              # Root HTML shell, Google Fonts, SEO Metadata, Navbar & Footer
│   ├── page.tsx                # Complete 11-section homepage
│   ├── globals.css             # Design tokens, CSS variables, spiritual patterns, scrollbars
│   ├── not-found.tsx           # Custom 404 page with spiritual aesthetic
│   ├── packages/
│   │   ├── page.tsx            # Packages directory with filters, search, and comparison table
│   │   └── [slug]/
│   │       └── page.tsx        # Dynamic deep-dive package detail page with day-by-day breakdown
│   ├── services/
│   │   └── page.tsx            # Dedicated services catalog (Stays, Cabs, Darshan, Circuits)
│   ├── about/
│   │   └── page.tsx            # Brand story, core commitments, Tirupati local team
│   └── contact/
│       └── page.tsx            # Dedicated enquiry hub & interactive quote calculator
│
├── components/
│   ├── navbar/
│   │   └── Navbar.tsx          # Sticky glassmorphism header & animated mobile drawer
│   ├── hero/
│   │   └── Hero.tsx            # Cinematic hero with editorial typography & floating metrics
│   ├── trust/
│   │   └── TrustHighlights.tsx # 4-column trust strip (10+ yrs, transparent pricing, elder care)
│   ├── services/
│   │   ├── Services.tsx        # 6 core services section
│   │   └── ServiceCard.tsx     # Interactive service card with hover effects
│   ├── packages/
│   │   ├── Packages.tsx        # Popular packages grid & modal trigger
│   │   ├── PackageCard.tsx     # Highlighting "Most Popular", inclusions checklist, pricing
│   │   └── PackageModal.tsx    # Detailed day-by-day itinerary dialog with inclusions/exclusions
│   ├── why-choose-us/
│   │   └── WhyChooseUs.tsx     # Editorial asymmetric layout with 01-04 value pillars
│   ├── three-scene/
│   │   ├── ThreeScene.tsx      # Dynamic WebGL canvas, OrbitControls, waypoint controls, fallback
│   │   └── TempleScene.tsx     # 7 Hills 3D terrain, glowing path, gopuram, sparkles, beacon
│   ├── destinations/
│   │   ├── Destinations.tsx    # Category-filtered sacred destinations (Tirumala, Tirupati, Circuit)
│   │   └── DestinationCard.tsx # Cards with Telugu script, timings, distance, and key rituals
│   ├── how-it-works/
│   │   └── HowItWorks.tsx      # 3-step connected timeline
│   ├── testimonials/
│   │   └── Testimonials.tsx    # Verified devotee reviews, ratings, and traveller badges
│   ├── faq/
│   │   └── FAQ.tsx             # Accessible shadcn Accordion with 8+ pilgrimage FAQs
│   ├── contact/
│   │   └── ContactForm.tsx     # Interactive multi-field booking form with confetti confirmation
│   ├── footer/
│   │   └── Footer.tsx          # Branding, TTD independence legal disclaimer, quick links
│   └── ui/                     # shadcn/ui primitives (button, badge, card, dialog, accordion, etc.)
│
├── lib/
│   ├── utils.ts                # Tailwind merge helper (cn) & currency formatter (INR)
│   └── data/
│       ├── services.ts         # Typed data for 6 services
│       ├── packages.ts         # Typed data for 4 comprehensive packages + itineraries
│       ├── destinations.ts     # Typed data for 6 sacred pilgrimage spots
│       ├── testimonials.ts     # Typed devotee reviews
│       └── faq.ts              # Typed pilgrimage Q&A
│
├── tailwind.config.ts          # Custom spiritual colors (maroon, gold, sand, ink) & animations
├── next.config.mjs             # Image remote domains, package transpilation
└── tsconfig.json               # Strict TypeScript configuration
```

---

## 🚀 Quickstart & Commands

### Prerequisites
- Node.js `v18.0.0` or higher
- npm `v9.0.0` or higher

### 1. Installation
```bash
cd ttd-yatra
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build & Start
```bash
npm run build
npm start
```

---

## 🛡️ Technical Challenges & How They Were Solved

### Challenge 1: Integrating Three.js / React Three Fiber with Next.js App Router (SSR)
- **Problem**: Three.js relies on browser-only WebGL APIs (`window`, `HTMLCanvasElement`, `WebGLRenderingContext`). Standard SSR attempts to render the canvas on the server, resulting in hydration errors or canvas crashes.
- **Solution**: Designed `ThreeScene.tsx` as a Client Component (`"use client"`), wrapped the 3D Canvas inside a React `Suspense` boundary, dynamically verified WebGL context availability on mount, and provided a graceful 2D spiritual fallback if WebGL is unavailable or disabled.

### Challenge 2: 3D Performance Optimization on Low-Power & Mobile Devices
- **Problem**: Heavy poly counts and unconstrained continuous render loops drain mobile battery and cause frame drops.
- **Solution**: Used procedural low-poly geometry (`coneGeometry`, `boxGeometry`, `TubeGeometry`) with Catmull-Rom 3D splines, restricted OrbitControls polar/azimuth angles with smooth damping, clamped particle counts (`count={50}`), and avoided heavy texture files.

### Challenge 3: Reusable Data Architecture for Complex Day-by-Day Itineraries
- **Problem**: Hardcoding repeated cards across the homepage, dedicated packages page, and dynamic slug routes leads to code duplication and maintenance hazards.
- **Solution**: Created strongly typed TypeScript schemas in `lib/data/` with full separation of data from UI. The same dataset seamlessly feeds the homepage cards, the interactive modal dialog (`PackageModal`), and the dynamic route (`/packages/[slug]`).

### Challenge 4: Zero Horizontal Overflow & Strict Mobile Responsiveness
- **Problem**: Large 3D canvases, wide data tables, and flex containers frequently cause horizontal scrolling glitches on mobile devices (390px / 414px).
- **Solution**: Enforced `overflow-x-hidden` on the layout body, designed collapsible responsive cards, implemented a slide-in sheet drawer for mobile navigation, and wrapped comparison tables in horizontal touch containers.

---

## 🎤 Technical Interview & Demo Script

When showcasing this project during a technical demo:

1. **Start at Home (`/`)**:
   - Point out the **Navbar**: Mention the scroll-based transition from transparent to frosted glass with subtle shadow, brand emblem, and responsive mobile drawer.
   - Explain the **Hero Section**: Highlight the editorial headline, warm temple palette, floating metrics (*15,000+ Devotees*, *4.9/5 Rating*), and primary CTA buttons.
2. **Services & Packages**:
   - Scroll to **Services**: Showcase the 6 cards with subtle hover lift, numbered tags (01-06), and deep links.
   - Scroll to **Popular Packages**: Demonstrate the "Most Popular" highlighted card and click **"Details"** to open the interactive **`PackageModal`** showcasing the day-by-day schedule, inclusions, and exclusions.
3. **Interactive 3D Experience ("Journey to Tirumala")**:
   - Scroll to **3D Journey**: Rotate the scene using the mouse to demonstrate Three.js camera orbiting.
   - Click each **Sacred Hill Station** (Alipiri to Ananda Nilayam) to show active waypoint highlights, glowing ascent route, moving traveler beacon, and the golden temple gopuram silhouette.
4. **Destinations & How It Works**:
   - Click the category filter tabs (All, Tirumala, Tirupati, Circuit, Theertham) in Destinations.
   - Show the 3-step connected timeline in **How It Works**.
5. **Interactive Booking Enquiry**:
   - Fill out the form with dates, group size, and package selection.
   - Click **"Request My Yatra Plan"** to trigger validation, submission feedback, and celebration confetti.
6. **Sub-Routes & Responsive QA**:
   - Navigate to `/packages`, `/packages/tirumala-family-3d`, `/services`, and `/about`.
   - Open Developer Tools in mobile responsive mode (390px) to demonstrate zero horizontal overflow.
