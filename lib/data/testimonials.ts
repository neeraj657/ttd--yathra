export interface TestimonialItem {
  id: string
  name: string
  location: string
  travellerType: 'Family Pilgrimage' | 'Senior Citizens' | 'Weekend Devotees' | 'Couple' | 'Group Yatra'
  rating: number
  darshanDate: string
  avatarText: string
  review: string
  packageBooked: string
}

export const testimonialsData: TestimonialItem[] = [
  {
    id: 'test-1',
    name: 'Venkatesh & Sunitha Raghavan',
    location: 'Bengaluru, Karnataka',
    travellerType: 'Family Pilgrimage',
    rating: 5,
    darshanDate: 'January 2026',
    avatarText: 'VR',
    review: 'We travelled with our 72-year-old parents and two young kids. TTD Yatra arranged everything flawlessly. The Innova driver was gentle on the ghat roads, the hotel near Alipiri was spotless, and their coordinator guided us right up to the queue point without any confusion. Truly a divine and peaceful experience!',
    packageBooked: '3-Day Family Pilgrimage'
  },
  {
    id: 'test-2',
    name: 'Dr. Anand Kumar Swaminathan',
    location: 'Chennai, Tamil Nadu',
    travellerType: 'Weekend Devotees',
    rating: 5,
    darshanDate: 'February 2026',
    avatarText: 'AS',
    review: 'As a doctor with tight weekend hospital schedules, I needed a crisp 2-day itinerary. TTD Yatra picked me up right at Tirupati station at 5 AM, had room ready for quick freshening up, and by 11 AM I had peaceful darshan. The transparent pricing without haggling with local cab drivers was a huge relief.',
    packageBooked: '2-Day Tirupati Express Darshan'
  },
  {
    id: 'test-3',
    name: 'Meenakshi & Sundaram Pillai',
    location: 'Coimbatore, Tamil Nadu',
    travellerType: 'Senior Citizens',
    rating: 5,
    darshanDate: 'December 2025',
    avatarText: 'MP',
    review: 'My husband and I are both over 70. Our son booked the Senior Citizen Special package for us. The ground floor room, wheelchair assistance, and slow-paced schedule made us feel deeply respected and cared for. We had tears of joy seeing Lord Balaji without getting jostled in crowds.',
    packageBooked: '3-Day Senior Citizen Special'
  },
  {
    id: 'test-4',
    name: 'Rajesh & Divya Agarwal',
    location: 'Hyderabad, Telangana',
    travellerType: 'Group Yatra',
    rating: 5,
    darshanDate: 'January 2026',
    avatarText: 'RA',
    review: 'We booked the 4-Day Temple Circuit covering Tirumala, Srikalahasti, and Kanipakam for a group of 8. The 12-seater AC tempo traveller was brand new. The driver knew temple timings and recommended wonderful pure vegetarian meals. Exceptional professionalism!',
    packageBooked: '4-Day Grand Temple Circuit'
  }
]
