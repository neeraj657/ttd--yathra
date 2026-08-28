export interface ItineraryDay {
  dayNumber: number
  title: string
  activities: string[]
  meals?: string
  stay?: string
}

export interface PackageItem {
  id: string
  slug: string
  title: string
  subtitle: string
  duration: string
  daysCount: number
  nightsCount: number
  priceStarting: number
  priceUnit: string
  isPopular?: boolean
  badge?: string
  heroImage: string
  shortDescription: string
  fullDescription: string
  inclusions: string[]
  exclusions: string[]
  highlights: string[]
  itinerary: ItineraryDay[]
  idealFor: string
  vehicleType: string
  accommodationType: string
}

export const packagesData: PackageItem[] = [
  {
    id: 'pkg-1',
    slug: 'tirupati-darshan-2d',
    title: '2-Day Tirupati Express Darshan',
    subtitle: 'Crisp, comfortable & zero-hassle weekend pilgrimage',
    duration: '2 Days / 1 Night',
    daysCount: 2,
    nightsCount: 1,
    priceStarting: 4499,
    priceUnit: 'per person (min 2 pax)',
    isPopular: false,
    badge: 'Best for Quick Trips',
    heroImage: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80',
    shortDescription: 'Ideal for devotees on a tight schedule. Includes comfortable stay, AC cab transfer via the Tirumala ghat road, and complete darshan guidance.',
    fullDescription: 'Our 2-Day Tirupati Darshan package provides an efficient, serene pilgrimage. We handle your station/airport pickup in Tirupati, arrange check-in at a sanitized 3-star hotel, provide private cab transit to Tirumala hill, and walk you through every step of your Srivari darshan queue and prasadam collection.',
    inclusions: [
      '1 Night AC accommodation in premium 3-star hotel (Twin sharing)',
      'Dedicated AC Sedan for station pickup, Tirumala ghat road & drop',
      'All toll gate charges, parking fees, and driver allowances',
      'Step-by-step Srivari Darshan token & queue guidance',
      'Assistance with Mobile Locker, Footwear & Tonsure (Kalyanakatta)',
      'Complimentary South Indian breakfast on Day 2',
      'Assistance with Tirupati Laddu Prasadam collection'
    ],
    exclusions: [
      'Direct darshan ticket fee (we provide guidance on official booking)',
      'Lunches, dinners, and personal pooja expenses',
      'Special archana or seva ticket charges',
      'Anything not explicitly mentioned in inclusions'
    ],
    highlights: [
      'Direct Tirumala Ghat Road transit in dedicated AC cab',
      'Handpicked hotel near Alipiri or Railway Station',
      'Local Tirupati coordinator available 24/7 on call'
    ],
    itinerary: [
      {
        dayNumber: 1,
        title: 'Arrival in Tirupati & Scenic Tirumala Ascent',
        activities: [
          'Warm welcome & pickup from Tirupati Railway Station / Airport',
          'Check-in at sanitized 3-star hotel; freshen up & brief orientation',
          'Scenic drive up the First Ghat Road enjoying panoramic hill views',
          'Visit to Sri Bedi Anjaneya Swamy Temple & Srivari Pushkarini tank',
          'Proceed for your scheduled Srivari Darshan with guided entry assistance',
          'Collection of sacred Tirupati Laddu prasadam',
          'Descent to Tirupati hotel for peaceful overnight stay'
        ],
        meals: 'Dinner recommendation provided',
        stay: 'Premium Hotel in Tirupati'
      },
      {
        dayNumber: 2,
        title: 'Sacred Padmavathi Darshan & Departure',
        activities: [
          'Traditional South Indian breakfast at hotel',
          'Morning visit to Sri Padmavathi Ammavari Temple at Tiruchanur',
          'Visit to ancient Kapila Theertham waterfall and Shiva temple',
          'Souvenir and authentic Tirupati sweets/spices shopping time',
          'Drop-off at Tirupati Railway Station or Airport with divine memories'
        ],
        meals: 'Breakfast included',
        stay: 'Check-out at 12:00 PM'
      }
    ],
    idealFor: 'Working professionals, couples, and devotees seeking a focused short pilgrimage.',
    vehicleType: 'Private AC Sedan (Dzire / Etios) or SUV for larger families',
    accommodationType: '3-Star Premium Hotel with 24/7 Hot Water and Wi-Fi'
  },
  {
    id: 'pkg-2',
    slug: 'tirumala-family-3d',
    title: '3-Day Tirumala Family Pilgrimage',
    subtitle: 'Relaxed, unhurried sacred journey crafted for families & elders',
    duration: '3 Days / 2 Nights',
    daysCount: 3,
    nightsCount: 2,
    priceStarting: 7499,
    priceUnit: 'per person (min 3 pax)',
    isPopular: true,
    badge: 'Most Popular',
    heroImage: 'https://images.unsplash.com/photo-1609766857329-873b88936940?auto=format&fit=crop&w=1200&q=80',
    shortDescription: 'Our signature family package with extra buffer time, spacious family rooms, dedicated chauffeur for all 3 days, and special elder assistance.',
    fullDescription: 'Crafted specifically for families travelling with children or elderly parents. This 3-day pilgrimage removes all anxiety by giving ample rest between temple visits. You will experience the divine Srivari Darshan, visit the scenic theerthams atop Tirumala, receive blessings at Padmavathi Ammavari temple, and explore the miraculous Varasiddhi Vinayaka temple at Kanipakam.',
    inclusions: [
      '2 Nights stay in spacious Family Suites / Connecting Rooms',
      'Exclusive AC Innova Crysta / Ertiga with courteous driver for all 3 days',
      'Full airport / railway station transfers and all sightseeing',
      'Dedicated local pilgrimage coordinator assigned to your family',
      'Special queuing advice and wheelchair coordination for senior citizens',
      'Daily delicious buffet breakfast at hotel',
      'Visits to Tirumala, Tiruchanur, Kanipakam, and Srinivasamangapuram',
      'All toll, ghat entry, parking, and driver night allowances'
    ],
    exclusions: [
      'TTD Official ticket fees (we guide booking procedure)',
      'Lunches and dinners (curated pure-veg restaurant guide provided)',
      'Personal donations, special pooja receipts, and tonsure charges'
    ],
    highlights: [
      'Unhurried schedule with dedicated rest intervals',
      'Comfortable Innova Crysta for smooth hill travel',
      'Comprehensive temple circuit covering 5 sacred shrines',
      'Dedicated on-ground coordinator for queue and locker assistance'
    ],
    itinerary: [
      {
        dayNumber: 1,
        title: 'Warm Welcome, Tirupati Sights & Rest',
        activities: [
          'Arrival at Tirupati; private pickup in AC Innova and hotel check-in',
          'Relax after travel and enjoy authentic Andhra thali lunch',
          'Afternoon visit to Sri Govindaraja Swamy Temple in Tirupati heart',
          'Serene evening visit to Kapila Theertham at the foothills',
          'Pre-darshan briefing on dress codes, guidelines, and timings',
          'Overnight stay in Tirupati'
        ],
        meals: 'Breakfast next morning included',
        stay: '4-Star or Luxury Family Hotel in Tirupati'
      },
      {
        dayNumber: 2,
        title: 'Grand Srivari Darshan at Tirumala & Sacred Theerthams',
        activities: [
          'Early morning scenic drive along the winding Sapthagiri hills',
          'Assistance with head offering (Kalyanakatta) and Pushkarini bath',
          'Blessed entry into the Sanctum Sanctorum for Lord Venkateswara Darshan',
          'Collection of blessed Laddu prasadam and holy theertham',
          'Visit to sacred natural wonders: Silathoranam (natural rock arch) & Akasa Ganga',
          'Visit Japali Hanuman Temple tucked inside lush hill forest',
          'Evening return to Tirupati for relaxing dinner and overnight stay'
        ],
        meals: 'Breakfast included',
        stay: 'Hotel in Tirupati'
      },
      {
        dayNumber: 3,
        title: 'Divine Blessings: Tiruchanur, Kanipakam & Departure',
        activities: [
          'Buffet breakfast at hotel and relaxed checkout',
          'Darshan at Sri Padmavathi Ammavari Temple at Tiruchanur',
          'Excursion to Sri Varasiddhi Vinayaka Swamy Temple at Kanipakam (self-manifested Ganesha)',
          'Visit Sri Kalyana Venkateswara Swamy Temple at Srinivasa Mangapuram',
          'Traditional sweet box shopping & departure drop at station/airport'
        ],
        meals: 'Breakfast included',
        stay: 'Departure'
      }
    ],
    idealFor: 'Families with elders or children, multigenerational groups, and devotees desiring a relaxed pace.',
    vehicleType: 'Private AC Toyota Innova Crysta / Ertiga / Tempo Traveller',
    accommodationType: '4-Star Premium Hotel with Family Quad Rooms or Interconnected Rooms'
  },
  {
    id: 'pkg-3',
    slug: 'temple-circuit-4d',
    title: '4-Day Grand Temple Circuit',
    subtitle: 'A transformative spiritual circuit across Tirupati, Kalahasti & Kanchipuram',
    duration: '4 Days / 3 Nights',
    daysCount: 4,
    nightsCount: 3,
    priceStarting: 11499,
    priceUnit: 'per person (min 2 pax)',
    isPopular: false,
    badge: 'Spiritual Heritage Circuit',
    heroImage: 'https://images.unsplash.com/photo-1621682372775-533449e550ed?auto=format&fit=crop&w=1200&q=80',
    shortDescription: 'For devotees seeking deep spiritual fulfillment. Combines Tirumala Srivari Darshan with Srikalahasti (Vayu Lingam), Kanipakam, and Kanchipuram temples.',
    fullDescription: 'The ultimate South Indian devotional circuit. Beyond the divine abode of Lord Balaji at Tirumala, this 4-day journey takes you to the powerful Pancha Bhoota Sthalam at Srikalahasti for Rahu-Ketu pooja, the self-growing Ganesha at Kanipakam, and the holy city of thousand temples, Kanchipuram.',
    inclusions: [
      '3 Nights accommodation in 3-star/4-star handpicked hotels',
      'Dedicated AC vehicle for all 4 days covering inter-state travel',
      'All toll taxes, state permits (Andhra & Tamil Nadu), and driver fees',
      'Complete Darshan assistance at Tirumala and Srikalahasti',
      'Guidance for Rahu-Ketu Dosha Nivarana Pooja at Srikalahasti',
      'Daily complimentary breakfast',
      'Experienced English/Hindi/Telugu/Tamil speaking driver-cum-guide'
    ],
    exclusions: [
      'Special Pooja tickets (Rahu-Ketu ticket at Srikalahasti ~ ₹500 - ₹2500)',
      'Darshan entrance tickets',
      'Lunch and dinner meals'
    ],
    highlights: [
      'Pancha Bhoota Vayu Sthalam (Srikalahasti) Rahu Ketu Pooja guidance',
      'Tirumala Srivari Darshan + Kanipakam Vinayaka Temple',
      'Kanchipuram Kamakshi Amman & Ekambareswarar Temples',
      'Comprehensive cultural and mythological narration'
    ],
    itinerary: [
      {
        dayNumber: 1,
        title: 'Arrival in Tirupati & Srikalahasti Rahu-Ketu Pooja',
        activities: [
          'Pickup from Tirupati Airport / Railway Station; check-in at hotel',
          'Drive to Srikalahasti Temple (38 km) on the banks of Swarnamukhi River',
          'Participate in special Rahu-Ketu Sarpadosha Nivarana Pooja',
          'Darshan of Sri Kalahasteeswara (Vayu Lingam) and Goddess Gnanaprasunambika',
          'Evening return to Tirupati; temple market walk and rest'
        ],
        meals: 'Breakfast next morning',
        stay: 'Tirupati Hotel'
      },
      {
        dayNumber: 2,
        title: 'The Sacred Summit — Lord Venkateswara Darshan',
        activities: [
          'Ascent to Tirumala via the scenic ghat road',
          'Assistance with head offering (tonsure) and sacred bath',
          'Holy Srivari Maha Darshan at Tirumala Temple',
          'Srivari Laddu Prasadam collection and temple pradakshina',
          'Explore Papavinasam, Akasa Ganga theertham, and Venugopala Swamy temple',
          'Return to Tirupati for restful overnight sleep'
        ],
        meals: 'Breakfast included',
        stay: 'Tirupati Hotel'
      },
      {
        dayNumber: 3,
        title: 'Kanipakam Ganesha & Golden Temple / Kanchipuram Drive',
        activities: [
          'Breakfast and checkout; drive towards Kanipakam',
          'Darshan of Swayambhu Sri Varasiddhi Vinayaka Swamy at Kanipakam',
          'Drive towards Kanchipuram (or Golden Temple Sripuram Vellore on route)',
          'Check-in at Kanchipuram / Vellore hotel',
          'Evening visit to Sri Kamakshi Amman Temple — one of 51 Shakti Peethas',
          'Overnight stay'
        ],
        meals: 'Breakfast included',
        stay: 'Kanchipuram / Vellore Hotel'
      },
      {
        dayNumber: 4,
        title: 'Kanchipuram Heritage Temples & Return',
        activities: [
          'Morning visit to Ekambareswarar Temple (Prithvi Lingam) with ancient mango tree',
          'Visit Varadharaja Perumal Temple known for exquisite Dravidian stone carvings',
          'Authentic Kanchipuram Silk weaving demonstration and shopping',
          'Drop-off at Chennai Airport / Tirupati Station for return journey'
        ],
        meals: 'Breakfast included',
        stay: 'Departure'
      }
    ],
    idealFor: 'Devotees doing Rahu-Ketu remedies, spiritual explorers, and South Indian heritage enthusiasts.',
    vehicleType: 'Dedicated AC Sedan / Innova with Inter-state permits',
    accommodationType: 'Premium 3-Star & Heritage Hotels'
  },
  {
    id: 'pkg-4',
    slug: 'senior-citizen-special-3d',
    title: '3-Day Senior Citizen & Elder Care Yatra',
    subtitle: 'Gentle, barrier-free pilgrimage with priority assistance & dedicated care',
    duration: '3 Days / 2 Nights',
    daysCount: 3,
    nightsCount: 2,
    priceStarting: 8999,
    priceUnit: 'per person (min 2 pax)',
    isPopular: false,
    badge: 'Elder Care Focused',
    heroImage: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80',
    shortDescription: 'Specifically curated for senior citizens (65+ years) with ground-floor rooms, wheelchair coordination, unhurried transit, and caring assistance throughout.',
    fullDescription: 'Pilgrimage should bring joy and spiritual fulfillment, not exhaustion. Our Senior Citizen Special Yatra is thoughtfully crafted with slow-paced schedules, barrier-free access, lift-enabled hotel rooms, dedicated vehicle drop-offs as close to temple gates as permissible, and local assistants to guide elderly devotees.',
    inclusions: [
      '2 Nights in senior-friendly 4-star hotel with lift & accessible bathrooms',
      'Ground-floor or near-elevator room guarantee',
      'Dedicated AC vehicle with easy-entry footboards and courteous driver',
      'Assistance with TTD Senior Citizen / Physically Challenged Special Darshan slot guidance',
      'Wheelchair arrangement and porter assistance where allowed',
      'Pure satvic & low-spice vegetarian meals arranged on request',
      'Dedicated caring assistant accompanying during key checkpoints'
    ],
    exclusions: [
      'Official darshan ticket tokens',
      'Medical emergencies coverage (first-aid kit provided in cab)'
    ],
    highlights: [
      'Zero stairs / minimal walking route planning',
      'Wheelchair coordination and on-ground assistant',
      'Low-spice satvic dining options curated',
      'Emergency medical tie-ups with local hospitals in Tirupati'
    ],
    itinerary: [
      {
        dayNumber: 1,
        title: 'Gentle Arrival & Hotel Settling',
        activities: [
          'Personal meet & greet with luggage handling at airport / station',
          'Express check-in at accessible 4-star hotel; rest and relaxation',
          'Gentle evening drive to Kapila Theertham view point with wheelchair access',
          'Early dinner and restful sleep for next morning energy'
        ],
        meals: 'Warm dinner recommendation provided',
        stay: '4-Star Accessible Hotel in Tirupati'
      },
      {
        dayNumber: 2,
        title: 'Priority Srivari Darshan at Tirumala',
        activities: [
          'Relaxed breakfast; scenic hill ascent with rest stops if needed',
          'Drop-off directly at Senior Citizen special entrance / battery car pickup',
          'Cared guidance through the designated senior citizen queue lines',
          'Soulful peaceful Darshan of Lord Venkateswara without crowd pressure',
          'Laddu prasadam collected and safely handed over to you',
          'Gentle return to hotel for afternoon rest and serene evening'
        ],
        meals: 'Breakfast included',
        stay: 'Hotel in Tirupati'
      },
      {
        dayNumber: 3,
        title: 'Padmavathi Ammavari Temple & Peaceful Return',
        activities: [
          'Comfortable morning breakfast',
          'Visit to Sri Padmavathi Ammavari Temple at Tiruchanur with elder queue access',
          'Souvenir gifts and special prasadam packing assistance',
          'Comfortable drop to railway station / airport with boarding support'
        ],
        meals: 'Breakfast included',
        stay: 'Departure'
      }
    ],
    idealFor: 'Senior citizens, devotees with limited mobility, and sons/daughters gifting a trip to parents.',
    vehicleType: 'Spacious AC Innova Crysta / Ertiga with smooth suspension',
    accommodationType: '4-Star Accessible Hotel with Elevator and Grab-Bars'
  }
]
