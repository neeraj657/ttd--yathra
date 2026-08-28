export interface ServiceItem {
  id: string
  number: string
  title: string
  tagline: string
  description: string
  features: string[]
  iconName: 'Hotel' | 'Car' | 'Compass' | 'Calendar' | 'MapPin' | 'Sparkles'
  highlights: string[]
  badge?: string
}

export const servicesData: ServiceItem[] = [
  {
    id: 'hotels',
    number: '01',
    title: 'Hotels & Stays',
    tagline: 'Hand-picked comfort near sacred venues',
    description: 'Clean, sanitized, and family-approved hotels in Tirupati & Tirumala. Pre-arranged check-ins matched specifically to your early morning or evening darshan timings.',
    features: [
      'Proximity to Alipiri & Railway Station',
      '24/7 Hot Water & Room Service',
      'Pure Vegetarian Dining on premise',
      'Early check-in & late checkout support'
    ],
    highlights: ['Budget & Luxury Suites', 'Family Rooms', 'Ghat-View Cottages'],
    iconName: 'Hotel',
    badge: 'Verified Cleanliness'
  },
  {
    id: 'car-rentals',
    number: '02',
    title: 'Car Rentals & Ghat Cabs',
    tagline: 'Safe, courteous chauffeurs with mountain expertise',
    description: 'Dedicated AC sedans, SUVs, and tempo travellers with certified drivers experienced on the winding Tirumala ghat roads and temple circuits.',
    features: [
      'Airport pickups (Tirupati, Chennai, Bangalore)',
      'Trained drivers familiar with ghat guidelines',
      'All toll, parking, and permit fees included',
      'Clean vehicle interiors with mobile chargers'
    ],
    highlights: ['Sedans & Innova Crysta', 'Tempo Travellers', 'Airport Transfers'],
    iconName: 'Car',
    badge: 'Ghat Certified Drivers'
  },
  {
    id: 'darshan-assistance',
    number: '03',
    title: 'Darshan Assistance & Guidance',
    tagline: 'Smooth, peaceful entry with complete process clarity',
    description: 'Step-by-step guidance on TTD token protocols, dress code rules, reporting points, mobile storage counters, and tonsure (Mottai) procedures.',
    features: [
      'Token queue reporting location guidance',
      'Special entry assistance for Senior Citizens & Infants',
      'Luggage, footwear & phone locker coordination',
      'Laddu Prasadam collection facilitation'
    ],
    highlights: ['Senior Citizen Assistance', 'Dress Code Advisory', 'Prasadam Guidance'],
    iconName: 'Compass',
    badge: 'Local Guidance'
  },
  {
    id: 'trip-planning',
    number: '04',
    title: 'Personalized Trip Planning',
    tagline: 'Bespoke itineraries tailored to your family pace',
    description: 'Custom travel plans designed around your arrival mode, group age demographics, special pooja preferences, and available travel days.',
    features: [
      'Zero-rush, unhurried daily schedules',
      'Buffer times for rest between darshans',
      'Custom dining and hydration stops',
      'Flexible adjustments for weather or crowds'
    ],
    highlights: ['Custom Day Plans', 'Elder-Paced Schedules', 'Dedicated Coordinator'],
    iconName: 'Calendar'
  },
  {
    id: 'local-sightseeing',
    number: '05',
    title: 'Local Sightseeing & Theerthams',
    tagline: 'Explore the divine heritage surrounding the 7 Hills',
    description: 'Guided visits to ancient theerthams and sacred temples including Sri Padmavathi Ammavari Temple, Kapila Theertham, Srikalahasti, and Kanipakam.',
    features: [
      'Visits to 6+ prominent regional shrines',
      'Local mythological and historical context',
      'Flexible stop durations for photography & poojas',
      'Scenic spots like Akasa Ganga & Silathoranam'
    ],
    highlights: ['Padmavathi Temple', 'Kapila Theertham', 'Srikalahasti Rahu-Ketu'],
    iconName: 'MapPin'
  },
  {
    id: 'complete-yatra',
    number: '06',
    title: 'Complete End-to-End Yatra',
    tagline: 'All-inclusive peace of mind from arrival to departure',
    description: 'A seamless, turnkey pilgrimage where your stays, private transport, temple guidance, dining recommendations, and on-ground logistics are managed under one care.',
    features: [
      'Single point of contact on WhatsApp/Call',
      'Meet & Greet upon Tirupati arrival',
      'Transparent package quote with no hidden extras',
      '24/7 dedicated local emergency assistance'
    ],
    highlights: ['All-In-One Concierge', 'Zero Hassle', '100% Transparent'],
    iconName: 'Sparkles',
    badge: 'Most Comprehensive'
  }
]
