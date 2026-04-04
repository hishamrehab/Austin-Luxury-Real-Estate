import { LISTING_EXTERIOR_IMAGES } from '@/pages/listings/listingImageUrls'

export const HERO_IMAGE =
  'https://static.readdy.ai/image/7845fd8c6eb20521d9ee98b10648e98c/71c7515afb634850a28076d6f37066ad.jpeg'

export type FeaturedProperty = {
  id: string
  address: string
  price: string
  beds: number
  baths: number
  sqft: string
  neighborhood: string
  image: string
}

export const featuredProperties: FeaturedProperty[] = [
  {
    id: '1',
    address: '2505 Westlake Drive',
    price: '$4,750,000',
    beds: 5,
    baths: 6,
    sqft: '6,200 sqft',
    neighborhood: 'Westlake Hills',
    image: LISTING_EXTERIOR_IMAGES['1'],
  },
  {
    id: '2',
    address: '1804 Barton Creek Boulevard',
    price: '$3,250,000',
    beds: 4,
    baths: 5,
    sqft: '5,100 sqft',
    neighborhood: 'Barton Creek',
    image: LISTING_EXTERIOR_IMAGES['2'],
  },
  {
    id: '3',
    address: '3312 Mount Bonnell Road',
    price: '$5,900,000',
    beds: 6,
    baths: 7,
    sqft: '7,800 sqft',
    neighborhood: 'Mount Bonnell',
    image: LISTING_EXTERIOR_IMAGES['3'],
  },
  {
    id: '4',
    address: '1205 Scenic Drive',
    price: '$2,850,000',
    beds: 4,
    baths: 4,
    sqft: '4,200 sqft',
    neighborhood: 'Tarrytown',
    image: LISTING_EXTERIOR_IMAGES['4'],
  },
  {
    id: '5',
    address: '4501 Spanish Oaks Club Boulevard',
    price: '$6,750,000',
    beds: 5,
    baths: 6,
    sqft: '8,500 sqft',
    neighborhood: 'Spanish Oaks',
    image: LISTING_EXTERIOR_IMAGES['5'],
  },
  {
    id: '6',
    address: '2108 Pemberton Drive',
    price: '$3,450,000',
    beds: 5,
    baths: 5,
    sqft: '5,600 sqft',
    neighborhood: 'Pemberton Heights',
    image: LISTING_EXTERIOR_IMAGES['6'],
  },
  {
    id: '7',
    address: '7200 Rivercrest Drive',
    price: '$4,850,000',
    beds: 5,
    baths: 6,
    sqft: '6,800 sqft',
    neighborhood: 'Rob Roy',
    image: LISTING_EXTERIOR_IMAGES['7'],
  },
  {
    id: '8',
    address: '200 Lavaca Street #4201',
    price: '$2,150,000',
    beds: 3,
    baths: 3,
    sqft: '2,450 sqft',
    neighborhood: 'Downtown Austin',
    image: LISTING_EXTERIOR_IMAGES['8'],
  },
  {
    id: '9',
    address: '2801 Westlake Terrace',
    price: '$3,925,000',
    beds: 4,
    baths: 5,
    sqft: '5,400 sqft',
    neighborhood: 'Westlake Hills',
    image: LISTING_EXTERIOR_IMAGES['9'],
  },
  {
    id: '10',
    address: '3920 Lost Creek Boulevard',
    price: '$4,450,000',
    beds: 5,
    baths: 5,
    sqft: '6,100 sqft',
    neighborhood: 'Barton Creek',
    image: LISTING_EXTERIOR_IMAGES['10'],
  },
  {
    id: '11',
    address: '805 Windsor Road',
    price: '$2,995,000',
    beds: 4,
    baths: 4,
    sqft: '3,900 sqft',
    neighborhood: 'Tarrytown',
    image: LISTING_EXTERIOR_IMAGES['11'],
  },
  {
    id: '12',
    address: '3600 Bonnie Road',
    price: '$7,850,000',
    beds: 6,
    baths: 8,
    sqft: '9,200 sqft',
    neighborhood: 'Mount Bonnell',
    image: LISTING_EXTERIOR_IMAGES['12'],
  },
]

export function getFeaturedPropertyById(id: string): FeaturedProperty | undefined {
  return featuredProperties.find((p) => p.id === id)
}

export type Agent = {
  name: string
  role: string
  listings: string
  image: string
}

/** Only seq 101–105 return stable images from this API; extras reuse them in rotation. */
const HOME_AGENT_PORTRAITS = [
  'https://readdy.ai/api/search-image?query=professional%20confident%20female%20real%20estate%20agent%20in%20elegant%20business%20attire%20with%20warm%20smile%20standing%20in%20modern%20luxury%20office%20setting%20with%20natural%20lighting%20and%20clean%20minimalist%20background&width=400&height=500&seq=101&orientation=portrait',
  'https://readdy.ai/api/search-image?query=sophisticated%20male%20real%20estate%20professional%20in%20tailored%20suit%20with%20confident%20demeanor%20in%20upscale%20contemporary%20office%20environment%20with%20soft%20lighting%20and%20simple%20elegant%20backdrop&width=400&height=500&seq=102&orientation=portrait',
  'https://readdy.ai/api/search-image?query=elegant%20female%20real%20estate%20expert%20in%20professional%20attire%20with%20approachable%20smile%20in%20bright%20modern%20office%20space%20with%20natural%20light%20and%20clean%20minimalist%20background&width=400&height=500&seq=103&orientation=portrait',
  'https://readdy.ai/api/search-image?query=professional%20male%20real%20estate%20agent%20in%20business%20casual%20attire%20with%20friendly%20expression%20in%20contemporary%20luxury%20office%20with%20soft%20natural%20lighting%20and%20simple%20clean%20backdrop&width=400&height=500&seq=104&orientation=portrait',
  'https://readdy.ai/api/search-image?query=refined%20female%20real%20estate%20professional%20in%20sophisticated%20business%20wear%20with%20warm%20welcoming%20smile%20in%20elegant%20modern%20office%20setting%20with%20natural%20light%20and%20minimalist%20clean%20background&width=400&height=500&seq=105&orientation=portrait',
] as const

type AgentStub = Omit<Agent, 'image'>

const homeAgentStubs: AgentStub[] = [
  { name: 'Victoria Sterling', role: 'Principal Broker', listings: '12 Active Listings' },
  { name: 'Marcus Chen', role: 'Senior Agent', listings: '8 Active Listings' },
  { name: 'Isabella Rodriguez', role: 'Luxury Specialist', listings: '10 Active Listings' },
  { name: 'James Whitmore', role: 'Senior Agent', listings: '15 Active Listings' },
  { name: 'Sophia Laurent', role: 'International Specialist', listings: '9 Active Listings' },
  { name: 'Daniel Okonkwo', role: 'New Development Advisor', listings: '7 Active Listings' },
  { name: 'Elena Vasquez', role: 'Waterfront Specialist', listings: '11 Active Listings' },
  { name: 'Thomas Reeves', role: 'Relocation Advisor', listings: '6 Active Listings' },
  { name: 'Amara Williams', role: 'Luxury Specialist', listings: '14 Active Listings' },
  { name: 'Ryan Park', role: 'Senior Agent', listings: '10 Active Listings' },
  { name: 'Natalie Brooks', role: 'Marketing Director', listings: '5 Active Listings' },
  { name: 'Oliver Hart', role: 'Historic Homes Specialist', listings: '8 Active Listings' },
  { name: 'Priya Sharma', role: 'Investment Advisor', listings: '13 Active Listings' },
  { name: 'Gabriel Morales', role: 'Senior Agent', listings: '9 Active Listings' },
  { name: 'Charlotte Avery', role: 'Lake Austin Specialist', listings: '12 Active Listings' },
  { name: 'Ethan Cole', role: 'Commercial Liaison', listings: '4 Active Listings' },
  { name: 'Maya Thompson', role: 'Buyer Specialist', listings: '16 Active Listings' },
  { name: 'Lucas Brennan', role: 'Land & Ranch Advisor', listings: '7 Active Listings' },
  { name: 'Zoe Mitchell', role: 'Concierge Agent', listings: '11 Active Listings' },
  { name: 'Andrew Hayes', role: 'Principal Broker', listings: '18 Active Listings' },
]

export const agents: Agent[] = homeAgentStubs.map((a, i) => ({
  ...a,
  image: HOME_AGENT_PORTRAITS[i % HOME_AGENT_PORTRAITS.length],
}))

export type Testimonial = {
  title: string
  body: string
  author: string
  location: string
  avatar: string
}

export const testimonials: Testimonial[] = [
  {
    title: 'Exceptional Service from Start to Finish',
    body: 'Working with this team was an absolute pleasure. They understood our vision for a luxury home and found us the perfect property in Westlake Hills. Their attention to detail and market knowledge made the entire process seamless.',
    author: 'Sarah & Michael Thompson',
    location: 'Westlake Hills',
    avatar:
      'https://readdy.ai/api/search-image?query=professional%20couple%20portrait%20in%20elegant%20casual%20attire%20smiling%20warmly%20in%20bright%20natural%20setting%20with%20soft%20lighting%20and%20clean%20simple%20background&width=120&height=120&seq=201&orientation=squarish',
  },
  {
    title: 'Sold Our Home Above Asking Price',
    body: 'The marketing strategy was brilliant. Professional photography, virtual tours, and targeted outreach resulted in multiple offers within days. We sold for well above asking price and could not be happier with the outcome.',
    author: 'Jennifer Martinez',
    location: 'Barton Creek',
    avatar:
      'https://readdy.ai/api/search-image?query=confident%20professional%20woman%20portrait%20in%20business%20casual%20attire%20with%20genuine%20smile%20in%20natural%20outdoor%20setting%20with%20soft%20light%20and%20minimalist%20clean%20background&width=120&height=120&seq=202&orientation=squarish',
  },
  {
    title: 'Expert Guidance Through Complex Transaction',
    body: "As an international buyer, I needed someone who could navigate the complexities of purchasing luxury real estate in Austin. The team's expertise and patience made what could have been stressful into an enjoyable experience.",
    author: 'David Chen',
    location: 'Spanish Oaks',
    avatar:
      'https://readdy.ai/api/search-image?query=professional%20asian%20businessman%20portrait%20in%20elegant%20attire%20with%20confident%20smile%20in%20bright%20natural%20setting%20with%20soft%20lighting%20and%20simple%20clean%20background&width=120&height=120&seq=203&orientation=squarish',
  },
]
