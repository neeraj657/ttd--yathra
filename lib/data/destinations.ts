export interface DestinationItem {
  id: string
  name: string
  teluguName: string
  tagline: string
  category: 'Tirumala' | 'Tirupati' | 'Circuit' | 'Theertham'
  distance: string
  timing: string
  significance: string
  image: string
  description: string
  keyRitual: string
}

export const destinationsData: DestinationItem[] = [
  {
    id: 'srivari-temple',
    name: 'Sri Venkateswara Swamy Temple',
    teluguName: 'శ్రీ వేంకటేశ్వర స్వామి దేవస్థానం',
    tagline: 'The Supreme Abode of Kaliyuga Varada Lord Balaji atop the 7 Hills',
    category: 'Tirumala',
    distance: '22 km from Tirupati (via Ghat Road)',
    timing: '03:00 AM – 11:30 PM',
    significance: 'One of the richest and most revered temples in the world, dedicated to Lord Vishnu as Venkateswara.',
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80',
    description: 'Perched on the Venkatadri peak, the sacred temple with its golden Ananda Nilayam vimanam draws millions of devotees seeking divine blessings and liberation.',
    keyRitual: 'Suprabhata Seva, Tomala Seva, Archana, and Maha Laddu Prasadam'
  },
  {
    id: 'padmavathi-temple',
    name: 'Sri Padmavathi Ammavari Temple',
    teluguName: 'శ్రీ పద్మావతి అమ్మావారి ఆలయం',
    tagline: 'Divine Consort of Lord Srinivasa at Holy Tiruchanur',
    category: 'Tirupati',
    distance: '5 km from Tirupati Center',
    timing: '05:00 AM – 09:00 PM',
    significance: 'Pilgrimage custom holds that a Tirupati yatra is complete only after receiving the motherly grace of Goddess Padmavathi.',
    image: 'https://images.unsplash.com/photo-1599839575945-a9e5af0c3fa5?auto=format&fit=crop&w=1200&q=80',
    description: 'Located in Tiruchanur (Alamelu Mangapuram), this serene temple honors Goddess Lakshmi who emerged from the golden lotus in the Padma Sarovaram tank.',
    keyRitual: 'Kumkumarchana & Padma Sarovaram holy dip'
  },
  {
    id: 'srikalahasti',
    name: 'Sri Kalahasteeswara Temple',
    teluguName: 'శ్రీ కాళహస్తీశ్వర స్వామి దేవాలయం',
    tagline: 'Pancha Bhoota Vayu Sthalam & Sacred Rahu-Ketu Kshetram',
    category: 'Circuit',
    distance: '38 km from Tirupati',
    timing: '06:00 AM – 09:00 PM',
    significance: 'Represents the Wind (Vayu) element of Lord Shiva where the flame inside the inner sanctum flickers despite no air flow.',
    image: 'https://images.unsplash.com/photo-1621682372775-533449e550ed?auto=format&fit=crop&w=1200&q=80',
    description: 'Famous worldwide for the potent Rahu-Ketu and Sarpa Dosha Nivarana Poojas, situated between river Swarnamukhi and the surrounding rocky hillocks.',
    keyRitual: 'Rahu Ketu Sarpa Dosha Pooja & Vayu Linga Abhishekam'
  },
  {
    id: 'kapila-theertham',
    name: 'Kapila Theertham & Waterfall',
    teluguName: 'కపిల తీర్థం',
    tagline: 'Ancient Shiva Cave & Holy Waterfall at the Foot of Seshachalam',
    category: 'Theertham',
    distance: '3 km from Tirupati Center',
    timing: '05:30 AM – 08:30 PM',
    significance: 'The only Shiva temple in Tirupati, where Sage Kapila performed deep penance and Lord Shiva manifested with Goddess Kamakshi.',
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80',
    description: 'A picturesque shrine where mountain stream waters plunge into a natural theertham basin at the base of the Tirumala hills.',
    keyRitual: 'Holy bath in mountain falls and Kapileswara Darshan'
  },
  {
    id: 'kanipakam-vinayaka',
    name: 'Sri Varasiddhi Vinayaka Swamy',
    teluguName: 'శ్రీ వరసిద్ధి వినాయక స్వామి (కాణిపాకం)',
    tagline: 'The Swayambhu Ganesha Idol Constantly Growing in Size',
    category: 'Circuit',
    distance: '70 km from Tirupati',
    timing: '05:00 AM – 09:30 PM',
    significance: 'A miraculous self-manifested idol in a perennial water well known for resolving legal disputes and fulfilling heartfelt wishes.',
    image: 'https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&w=1200&q=80',
    description: 'Devotees travel from across India to take sacred vows (Pramanam) and seek divine guidance from the wish-fulfilling Lord Ganesha.',
    keyRitual: 'Ganapathi Homam & Abhishekam in holy well waters'
  },
  {
    id: 'akasa-ganga',
    name: 'Akasa Ganga & Silathoranam',
    teluguName: 'ఆకాశ గంగ & శిలాతోరణం',
    tagline: 'Celestial Water Springs & 2.5 Billion-Year-Old Natural Rock Arch',
    category: 'Theertham',
    distance: '3 km from Tirumala Temple',
    timing: '06:00 AM – 06:00 PM',
    significance: 'Water from Akasa Ganga is used exclusively for the daily sacred Abhishekam of Lord Venkateswara.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    description: 'Set amidst dense green Seshachalam forests, visiting Akasa Ganga and the prehistoric geological rock arch Silathoranam is an invigorating nature pilgrimage.',
    keyRitual: 'Collecting sacred spring water & Forest nature walk'
  }
]
