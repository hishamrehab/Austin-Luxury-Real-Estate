export const AGENTS_HERO_IMAGE =
  'https://readdy.ai/api/search-image?query=elegant%20modern%20real%20estate%20office%20interior%20with%20floor%20to%20ceiling%20windows%20overlooking%20Austin%20Texas%20skyline%20at%20golden%20hour%20with%20sophisticated%20furniture%20and%20warm%20ambient%20lighting%20professional%20workspace&width=1920&height=1080&seq=201&orientation=landscape'

export const PRINCIPAL_IMAGE =
  'https://static.readdy.ai/image/7845fd8c6eb20521d9ee98b10648e98c/337d63b605292044027b377f82d66e5d.jpeg'

export const AGENTS_CTA_IMAGE =
  'https://readdy.ai/api/search-image?query=stunning%20aerial%20view%20of%20luxury%20homes%20in%20Austin%20Texas%20hill%20country%20at%20sunset%20with%20rolling%20green%20hills%20and%20lake%20in%20distance%20warm%20golden%20light%20beautiful%20landscape%20photography&width=1920&height=800&seq=208&orientation=landscape'

export const CLIENT_STORIES_IMAGE =
  'https://readdy.ai/api/search-image?query=stunning%20luxury%20home%20exterior%20at%20twilight%20with%20warm%20interior%20lights%20glowing%20through%20large%20windows%20beautiful%20landscaping%20and%20modern%20architecture%20Austin%20Texas%20hill%20country%20setting&width=700&height=500&seq=207&orientation=landscape'

export type SpecialtyFilterId =
  | 'all'
  | 'luxury-estates'
  | 'waterfront'
  | 'golf-resort'
  | 'urban-living'
  | 'hill-country'
  | 'investment'
  | 'new-construction'
  | 'international'

export const specialtyFilters: { id: SpecialtyFilterId; label: string }[] = [
  { id: 'all', label: 'All Specialties' },
  { id: 'luxury-estates', label: 'Luxury Estates' },
  { id: 'waterfront', label: 'Waterfront' },
  { id: 'golf-resort', label: 'Golf & Resort' },
  { id: 'urban-living', label: 'Urban Living' },
  { id: 'hill-country', label: 'Hill Country' },
  { id: 'investment', label: 'Investment' },
  { id: 'new-construction', label: 'New Construction' },
  { id: 'international', label: 'International' },
]

export type DirectoryAgent = {
  id: string
  name: string
  role: string
  image: string
  bio: string
  phone: string
  email: string
  rating: string
  specialties: string[]
  activeListings: number
  propertiesSold: number
  salesVolume: string
  filterIds: Exclude<SpecialtyFilterId, 'all'>[]
}

export const directoryAgents: DirectoryAgent[] = [
  {
    id: '1',
    name: 'Victoria Sterling',
    role: 'Principal Broker',
    image:
      'https://readdy.ai/api/search-image?query=professional%20confident%20female%20real%20estate%20agent%20in%20elegant%20business%20attire%20with%20warm%20smile%20standing%20in%20modern%20luxury%20office%20setting%20with%20natural%20lighting%20and%20clean%20minimalist%20background&width=400&height=500&seq=101&orientation=portrait',
    bio: "With over 15 years of experience in Austin luxury real estate, Victoria has established herself as a trusted advisor to discerning clients.",
    phone: '(512) 555-0101',
    email: 'victoria@austinluxuryrealty.com',
    rating: '4.9',
    specialties: ['Luxury Estates', 'Waterfront Properties'],
    activeListings: 12,
    propertiesSold: 156,
    salesVolume: '$281M+',
    filterIds: ['luxury-estates', 'waterfront'],
  },
  {
    id: '2',
    name: 'Marcus Chen',
    role: 'Senior Agent',
    image:
      'https://readdy.ai/api/search-image?query=sophisticated%20male%20real%20estate%20professional%20in%20tailored%20suit%20with%20confident%20demeanor%20in%20upscale%20contemporary%20office%20environment%20with%20soft%20lighting%20and%20simple%20elegant%20backdrop&width=400&height=500&seq=102&orientation=portrait',
    bio: 'Marcus specializes in connecting clients with architecturally significant properties and lucrative investment opportunities.',
    phone: '(512) 555-0102',
    email: 'marcus@austinluxuryrealty.com',
    rating: '4.8',
    specialties: ['Modern Architecture', 'Investment Properties'],
    activeListings: 8,
    propertiesSold: 124,
    salesVolume: '$223M+',
    filterIds: ['investment'],
  },
  {
    id: '3',
    name: 'Isabella Rodriguez',
    role: 'Luxury Specialist',
    image:
      'https://readdy.ai/api/search-image?query=elegant%20female%20real%20estate%20expert%20in%20professional%20attire%20with%20approachable%20smile%20in%20bright%20modern%20office%20space%20with%20natural%20light%20and%20clean%20minimalist%20background&width=400&height=500&seq=103&orientation=portrait',
    bio: 'Isabella brings a passion for historic preservation and a keen eye for timeless elegance to every transaction.',
    phone: '(512) 555-0103',
    email: 'isabella@austinluxuryrealty.com',
    rating: '4.9',
    specialties: ['Historic Homes', 'Estate Sales'],
    activeListings: 10,
    propertiesSold: 142,
    salesVolume: '$256M+',
    filterIds: ['luxury-estates'],
  },
  {
    id: '4',
    name: 'James Whitmore',
    role: 'Senior Agent',
    image:
      'https://readdy.ai/api/search-image?query=professional%20male%20real%20estate%20agent%20in%20business%20casual%20attire%20with%20friendly%20expression%20in%20contemporary%20luxury%20office%20with%20soft%20natural%20lighting%20and%20simple%20clean%20backdrop&width=400&height=500&seq=104&orientation=portrait',
    bio: 'James works closely with builders and architects to help clients create their dream homes from the ground up.',
    phone: '(512) 555-0104',
    email: 'james@austinluxuryrealty.com',
    rating: '4.7',
    specialties: ['New Construction', 'Custom Builds'],
    activeListings: 15,
    propertiesSold: 98,
    salesVolume: '$176M+',
    filterIds: ['new-construction'],
  },
  {
    id: '5',
    name: 'Sophia Laurent',
    role: 'International Specialist',
    image:
      'https://readdy.ai/api/search-image?query=refined%20female%20real%20estate%20professional%20in%20sophisticated%20business%20wear%20with%20warm%20welcoming%20smile%20in%20elegant%20modern%20office%20setting%20with%20natural%20light%20and%20minimalist%20clean%20background&width=400&height=500&seq=105&orientation=portrait',
    bio: 'Fluent in three languages, Sophia specializes in helping international clients navigate the Austin luxury market.',
    phone: '(512) 555-0105',
    email: 'sophia@austinluxuryrealty.com',
    rating: '5',
    specialties: ['Relocation', 'International Buyers'],
    activeListings: 9,
    propertiesSold: 167,
    salesVolume: '$301M+',
    filterIds: ['international'],
  },
  {
    id: '6',
    name: 'David Thompson',
    role: 'Senior Agent',
    image:
      'https://readdy.ai/api/search-image?query=distinguished%20male%20real%20estate%20agent%20in%20professional%20attire%20with%20confident%20smile%20in%20upscale%20office%20environment%20with%20soft%20lighting%20and%20simple%20elegant%20backdrop&width=400&height=500&seq=106&orientation=portrait',
    bio: "David's expertise in golf course communities and Hill Country properties is unmatched in the Austin market.",
    phone: '(512) 555-0106',
    email: 'david@austinluxuryrealty.com',
    rating: '4.8',
    specialties: ['Golf Course Properties', 'Hill Country Estates'],
    activeListings: 11,
    propertiesSold: 134,
    salesVolume: '$241M+',
    filterIds: ['golf-resort', 'hill-country'],
  },
  {
    id: '7',
    name: 'Emily Harrison',
    role: 'Luxury Agent',
    image:
      'https://readdy.ai/api/search-image?query=stylish%20female%20real%20estate%20professional%20in%20modern%20business%20attire%20with%20bright%20smile%20in%20contemporary%20office%20space%20with%20natural%20lighting%20and%20clean%20minimalist%20background&width=400&height=500&seq=107&orientation=portrait',
    bio: "Emily specializes in luxury urban living and high-rise properties in Austin's vibrant downtown core.",
    phone: '(512) 555-0107',
    email: 'emily@austinluxuryrealty.com',
    rating: '4.9',
    specialties: ['Downtown Condos', 'Urban Living'],
    activeListings: 14,
    propertiesSold: 89,
    salesVolume: '$160M+',
    filterIds: ['urban-living'],
  },
  {
    id: '8',
    name: 'Robert Martinez',
    role: 'Senior Agent',
    image:
      'https://readdy.ai/api/search-image?query=experienced%20male%20real%20estate%20expert%20in%20business%20attire%20with%20professional%20demeanor%20in%20elegant%20office%20setting%20with%20soft%20natural%20light%20and%20simple%20clean%20backdrop&width=400&height=500&seq=108&orientation=portrait',
    bio: "Robert's extensive knowledge of ranch properties and land development makes him the go-to expert for large acreage.",
    phone: '(512) 555-0108',
    email: 'robert@austinluxuryrealty.com',
    rating: '4.7',
    specialties: ['Ranch Properties', 'Land Development'],
    activeListings: 7,
    propertiesSold: 112,
    salesVolume: '$202M+',
    filterIds: ['hill-country'],
  },
  {
    id: '9',
    name: 'Alexandra Kim',
    role: 'Luxury Specialist',
    image:
      'https://readdy.ai/api/search-image?query=polished%20female%20real%20estate%20agent%20in%20elegant%20professional%20attire%20with%20warm%20smile%20in%20bright%20modern%20office%20with%20natural%20lighting%20and%20minimalist%20clean%20background&width=400&height=500&seq=109&orientation=portrait',
    bio: "Alexandra's passion for lakefront living helps clients find their perfect waterfront retreat.",
    phone: '(512) 555-0109',
    email: 'alexandra@austinluxuryrealty.com',
    rating: '4.9',
    specialties: ['Lakefront Properties', 'Second Homes'],
    activeListings: 13,
    propertiesSold: 145,
    salesVolume: '$261M+',
    filterIds: ['waterfront'],
  },
  {
    id: '10',
    name: 'Christopher Blake',
    role: 'Senior Agent',
    image:
      'https://readdy.ai/api/search-image?query=modern%20male%20real%20estate%20professional%20in%20contemporary%20business%20attire%20with%20friendly%20expression%20in%20sleek%20office%20environment%20with%20soft%20light%20and%20simple%20elegant%20backdrop&width=400&height=500&seq=110&orientation=portrait',
    bio: 'Christopher focuses on cutting-edge smart home technology and environmentally conscious luxury properties.',
    phone: '(512) 555-0110',
    email: 'christopher@austinluxuryrealty.com',
    rating: '4.8',
    specialties: ['Smart Homes', 'Sustainable Design'],
    activeListings: 10,
    propertiesSold: 78,
    salesVolume: '$140M+',
    filterIds: ['luxury-estates'],
  },
  {
    id: '11',
    name: 'Nicole Anderson',
    role: 'Luxury Agent',
    image:
      'https://readdy.ai/api/search-image?query=approachable%20female%20real%20estate%20expert%20in%20professional%20business%20wear%20with%20genuine%20smile%20in%20welcoming%20office%20space%20with%20natural%20lighting%20and%20clean%20minimalist%20background&width=400&height=500&seq=111&orientation=portrait',
    bio: "Nicole helps families find homes in Austin's top school districts with a focus on long-term value.",
    phone: '(512) 555-0111',
    email: 'nicole@austinluxuryrealty.com',
    rating: '5',
    specialties: ['Family Estates', 'School Districts'],
    activeListings: 16,
    propertiesSold: 156,
    salesVolume: '$281M+',
    filterIds: ['luxury-estates'],
  },
  {
    id: '12',
    name: 'Michael Foster',
    role: 'Senior Agent',
    image:
      'https://readdy.ai/api/search-image?query=professional%20male%20real%20estate%20agent%20in%20sharp%20business%20attire%20with%20confident%20smile%20in%20upscale%20modern%20office%20with%20soft%20natural%20light%20and%20simple%20clean%20backdrop&width=400&height=500&seq=112&orientation=portrait',
    bio: "Michael's analytical approach helps investors maximize returns in the luxury condo market.",
    phone: '(512) 555-0112',
    email: 'michael@austinluxuryrealty.com',
    rating: '4.7',
    specialties: ['Luxury Condos', 'Investment Analysis'],
    activeListings: 8,
    propertiesSold: 134,
    salesVolume: '$241M+',
    filterIds: ['investment', 'urban-living'],
  },
  {
    id: '13',
    name: 'Rachel Cooper',
    role: 'Luxury Specialist',
    image:
      'https://readdy.ai/api/search-image?query=elegant%20female%20real%20estate%20professional%20in%20sophisticated%20attire%20with%20warm%20expression%20in%20bright%20contemporary%20office%20with%20natural%20lighting%20and%20minimalist%20clean%20background&width=400&height=500&seq=113&orientation=portrait',
    bio: "Rachel's passion for equestrian living helps clients find properties with exceptional horse facilities.",
    phone: '(512) 555-0113',
    email: 'rachel@austinluxuryrealty.com',
    rating: '4.9',
    specialties: ['Equestrian Properties', 'Acreage'],
    activeListings: 6,
    propertiesSold: 92,
    salesVolume: '$166M+',
    filterIds: ['hill-country'],
  },
  {
    id: '14',
    name: 'Daniel Wright',
    role: 'Senior Agent',
    image:
      'https://readdy.ai/api/search-image?query=distinguished%20male%20real%20estate%20expert%20in%20tailored%20business%20attire%20with%20professional%20demeanor%20in%20elegant%20office%20setting%20with%20soft%20light%20and%20simple%20elegant%20backdrop&width=400&height=500&seq=114&orientation=portrait',
    bio: 'Daniel specializes in secure, gated communities offering privacy and exclusivity.',
    phone: '(512) 555-0114',
    email: 'daniel@austinluxuryrealty.com',
    rating: '4.8',
    specialties: ['Gated Communities', 'Security Features'],
    activeListings: 12,
    propertiesSold: 167,
    salesVolume: '$301M+',
    filterIds: ['luxury-estates'],
  },
  {
    id: '15',
    name: 'Lauren Mitchell',
    role: 'Luxury Agent',
    image:
      'https://readdy.ai/api/search-image?query=refined%20female%20real%20estate%20agent%20in%20elegant%20professional%20attire%20with%20welcoming%20smile%20in%20modern%20office%20space%20with%20natural%20lighting%20and%20clean%20minimalist%20background&width=400&height=500&seq=115&orientation=portrait',
    bio: "Lauren's expertise in Texas Hill Country vineyards brings a unique perspective to luxury real estate.",
    phone: '(512) 555-0115',
    email: 'lauren@austinluxuryrealty.com',
    rating: '4.9',
    specialties: ['Wine Country', 'Vineyard Properties'],
    activeListings: 5,
    propertiesSold: 73,
    salesVolume: '$131M+',
    filterIds: ['hill-country'],
  },
  {
    id: '16',
    name: 'Andrew Sullivan',
    role: 'Senior Agent',
    image:
      'https://readdy.ai/api/search-image?query=professional%20male%20real%20estate%20specialist%20in%20modern%20business%20attire%20with%20confident%20expression%20in%20contemporary%20office%20environment%20with%20soft%20natural%20light%20and%20simple%20clean%20backdrop&width=400&height=500&seq=116&orientation=portrait',
    bio: 'Andrew focuses on unique commercial-to-residential conversions and mixed-use developments.',
    phone: '(512) 555-0116',
    email: 'andrew@austinluxuryrealty.com',
    rating: '4.7',
    specialties: ['Commercial Conversion', 'Mixed-Use'],
    activeListings: 9,
    propertiesSold: 88,
    salesVolume: '$158M+',
    filterIds: ['urban-living'],
  },
  {
    id: '17',
    name: 'Catherine Lee',
    role: 'Luxury Specialist',
    image:
      'https://readdy.ai/api/search-image?query=stylish%20female%20real%20estate%20professional%20in%20chic%20business%20attire%20with%20bright%20smile%20in%20elegant%20modern%20office%20with%20natural%20lighting%20and%20minimalist%20clean%20background&width=400&height=500&seq=117&orientation=portrait',
    bio: "Catherine's passion for mid-century modern design helps preserve Austin's architectural heritage.",
    phone: '(512) 555-0117',
    email: 'catherine@austinluxuryrealty.com',
    rating: '5',
    specialties: ['Mid-Century Modern', 'Architectural Gems'],
    activeListings: 11,
    propertiesSold: 129,
    salesVolume: '$232M+',
    filterIds: ['luxury-estates'],
  },
  {
    id: '18',
    name: 'Benjamin Hayes',
    role: 'Senior Agent',
    image:
      'https://readdy.ai/api/search-image?query=experienced%20male%20real%20estate%20agent%20in%20professional%20business%20attire%20with%20friendly%20demeanor%20in%20upscale%20office%20setting%20with%20soft%20lighting%20and%20simple%20elegant%20backdrop&width=400&height=500&seq=118&orientation=portrait',
    bio: 'Benjamin manages a portfolio of luxury rental properties with white-glove service.',
    phone: '(512) 555-0118',
    email: 'benjamin@austinluxuryrealty.com',
    rating: '4.8',
    specialties: ['Luxury Rentals', 'Property Management'],
    activeListings: 18,
    propertiesSold: 156,
    salesVolume: '$281M+',
    filterIds: ['luxury-estates'],
  },
  {
    id: '19',
    name: 'Olivia Parker',
    role: 'Luxury Agent',
    image:
      'https://readdy.ai/api/search-image?query=welcoming%20female%20real%20estate%20expert%20in%20sophisticated%20business%20attire%20with%20warm%20smile%20in%20bright%20contemporary%20office%20with%20natural%20light%20and%20clean%20minimalist%20background&width=400&height=500&seq=119&orientation=portrait',
    bio: 'Olivia provides exceptional concierge-level service to clients entering the luxury market.',
    phone: '(512) 555-0119',
    email: 'olivia@austinluxuryrealty.com',
    rating: '4.9',
    specialties: ['First-Time Luxury Buyers', 'Concierge Service'],
    activeListings: 13,
    propertiesSold: 94,
    salesVolume: '$169M+',
    filterIds: ['luxury-estates'],
  },
  {
    id: '20',
    name: 'Thomas Bennett',
    role: 'Principal Agent',
    image:
      'https://readdy.ai/api/search-image?query=distinguished%20senior%20male%20real%20estate%20expert%20in%20elegant%20business%20attire%20with%20professional%20confidence%20in%20luxurious%20office%20environment%20with%20soft%20natural%20lighting%20and%20simple%20clean%20backdrop&width=400&height=500&seq=120&orientation=portrait',
    bio: 'With 25 years of experience, Thomas specializes in multi-generational estate planning and legacy properties.',
    phone: '(512) 555-0120',
    email: 'thomas@austinluxuryrealty.com',
    rating: '5',
    specialties: ['Estate Planning', 'Legacy Properties'],
    activeListings: 7,
    propertiesSold: 203,
    salesVolume: '$365M+',
    filterIds: ['luxury-estates'],
  },
]

export type WhyPillar = {
  title: string
  body: string
  icon: 'shield' | 'heart' | 'globe' | 'chart' | 'camera' | 'clock'
}

export const whyPillars: WhyPillar[] = [
  {
    title: 'Trusted Expertise',
    body: 'Our agents average 12+ years of luxury real estate experience in Austin markets.',
    icon: 'shield',
  },
  {
    title: 'Personalized Service',
    body: 'We limit our client roster to ensure every buyer and seller receives dedicated attention.',
    icon: 'heart',
  },
  {
    title: 'Global Reach',
    body: 'Access to international buyers and sellers through our exclusive network partnerships.',
    icon: 'globe',
  },
  {
    title: 'Market Intelligence',
    body: 'Data-driven insights and proprietary market analysis to inform every decision.',
    icon: 'chart',
  },
  {
    title: 'Premium Marketing',
    body: 'Professional photography, virtual tours, and targeted digital campaigns for every listing.',
    icon: 'camera',
  },
  {
    title: 'Always Available',
    body: 'Round-the-clock support and communication throughout your real estate journey.',
    icon: 'clock',
  },
]

export type AgentTestimonial = {
  quote: string
  author: string
  location: string
  agentName: string
  avatar: string
}

export const agentTestimonials: AgentTestimonial[] = [
  {
    quote:
      "Victoria and her team made selling our Westlake home an absolute pleasure. Their market knowledge and negotiation skills resulted in a sale price 8% above asking.",
    author: 'Michael & Sarah Thompson',
    location: 'Westlake Hills',
    agentName: 'Victoria Sterling',
    avatar:
      'https://readdy.ai/api/search-image?query=happy%20affluent%20couple%20in%20their%20fifties%20standing%20in%20front%20of%20luxury%20home%20entrance%20smiling%20warmly%20casual%20elegant%20attire%20natural%20outdoor%20lighting&width=120&height=120&seq=203&orientation=squarish',
  },
  {
    quote:
      'Marcus found us an architecturally significant property off-market. His investment analysis was razor-sharp and saved us weeks of uncertainty.',
    author: 'David & Elena Park',
    location: 'Tarrytown',
    agentName: 'Marcus Chen',
    avatar:
      'https://readdy.ai/api/search-image?query=professional%20couple%20portrait%20in%20elegant%20casual%20attire%20smiling%20warmly%20in%20bright%20natural%20setting%20with%20soft%20lighting%20and%20clean%20simple%20background&width=120&height=120&seq=204&orientation=squarish',
  },
  {
    quote:
      'Relocating from London felt daunting until Sophia guided every detail. Her multilingual support and local insight made Austin feel like home immediately.',
    author: 'James Holloway',
    location: 'Downtown Austin',
    agentName: 'Sophia Laurent',
    avatar:
      'https://readdy.ai/api/search-image?query=professional%20businessman%20portrait%20in%20elegant%20attire%20with%20confident%20smile%20in%20bright%20natural%20setting%20with%20soft%20lighting%20and%20simple%20clean%20background&width=120&height=120&seq=205&orientation=squarish',
  },
  {
    quote:
      'Emily showed us penthouses we did not know existed. Her pulse on downtown luxury inventory is unmatched.',
    author: 'Priya Sharma',
    location: 'Rainey Street',
    agentName: 'Emily Harrison',
    avatar:
      'https://readdy.ai/api/search-image?query=confident%20professional%20woman%20portrait%20in%20business%20casual%20attire%20with%20genuine%20smile%20in%20natural%20outdoor%20setting%20with%20soft%20light%20and%20minimalist%20clean%20background&width=120&height=120&seq=206&orientation=squarish',
  },
]
