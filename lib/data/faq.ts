export interface FAQItem {
  id: string
  question: string
  answer: string
  category: 'Booking' | 'Darshan' | 'Accommodation' | 'Special Care'
}

export const faqData: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'Booking',
    question: 'How do I plan and book a Tirupati Yatra with TTD Yatra?',
    answer: 'Planning is simple: 1) Fill out our online inquiry form or message us on WhatsApp with your planned travel dates and group size. 2) Our Tirupati pilgrimage concierge will craft a customized itinerary and transparent quote. 3) Upon your confirmation, we pre-book sanitized hotel rooms, dedicated vehicles, and coordinate all on-ground logistics.'
  },
  {
    id: 'faq-2',
    category: 'Darshan',
    question: 'How does Darshan assistance work? Are tickets included?',
    answer: 'Official TTD Darshan tokens (Special Entry Darshan ₹300, Seva, or Slotted Sarva Darshan) must be booked via the official TTD Devasthanams portal due to biometric and Aadhaar requirements. Our team provides step-by-step guidance on release dates, quota booking tips, reporting checkpoints, queue entry, mobile locker assistance, and tonsure (Kalyanakatta) coordination.'
  },
  {
    id: 'faq-3',
    category: 'Accommodation',
    question: 'Where are the hotels located? Can we stay on Tirumala hill?',
    answer: 'Our hand-picked partner hotels are located in prime, peaceful areas of Tirupati close to Alipiri (the base of the hill) and the Railway Station with 24/7 hot water and pure-veg dining. Staying in Tirupati is generally more comfortable for families due to predictable room quality. If you have official TTD cottage allotment on Tirumala hill, our cab provides transfers accordingly.'
  },
  {
    id: 'faq-4',
    category: 'Special Care',
    question: 'What special assistance is provided for senior citizens and infants?',
    answer: 'For senior citizens (65+ years) and infants (under 1 year with parents), we arrange: ground-floor or elevator-accessible rooms, vehicles dropping off closest to allowable gates, assistance with TTD Special Senior Citizen quota reporting, and wheelchair arrangements where needed.'
  },
  {
    id: 'faq-5',
    category: 'Booking',
    question: 'Can we customize our package with pickup from Chennai or Bengaluru?',
    answer: 'Yes! We offer convenient doorstep pickups and drops from Chennai Airport / City (140 km, ~3.5 hrs), Bengaluru Airport / City (250 km, ~4.5 hrs), and Tirupati Airport / Railway Station. Your private vehicle stays with you for the duration of the trip.'
  },
  {
    id: 'faq-6',
    category: 'Booking',
    question: 'What is your pricing policy? Are there hidden charges?',
    answer: 'We believe in 100% transparency. Our package quotes include vehicle rent, fuel, driver night allowances, interstate toll taxes, parking fees, hotel room tariffs, and taxes. There are zero surprise fees or driver haggling during your journey.'
  },
  {
    id: 'faq-7',
    category: 'Darshan',
    question: 'What is the mandatory dress code for Tirumala Temple?',
    answer: 'Traditional attire is strictly enforced by TTD: Men must wear Dhoti (Veshti) with Angavastram/shirt or Kurta Pyjama. Women must wear Saree, Half-Saree, or Chudidar/Salwar Kameez with Dupatta. Western clothes such as jeans, shorts, and T-shirts are not permitted inside the sanctum queue.'
  },
  {
    id: 'faq-8',
    category: 'Darshan',
    question: 'How early should we start planning our trip?',
    answer: 'We recommend contacting us 30 to 60 days before your intended travel date so you can align with TTD online quota release calendars (usually released on the 24th of each month for following months) and secure the best hotel rooms.'
  }
]
