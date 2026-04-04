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
    image:
      'https://readdy.ai/api/search-image?query=luxurious%20modern%20architectural%20masterpiece%20home%20exterior%20with%20clean%20lines%20floor%20to%20ceiling%20windows%20and%20manicured%20landscaping%20set%20against%20clear%20blue%20sky%20in%20upscale%20neighborhood%20featuring%20contemporary%20design%20elements%20and%20premium%20materials%20with%20simple%20elegant%20background&width=800&height=600&seq=1&orientation=landscape',
  },
  {
    id: '2',
    address: '1804 Barton Creek Boulevard',
    price: '$3,250,000',
    beds: 4,
    baths: 5,
    sqft: '5,100 sqft',
    neighborhood: 'Barton Creek',
    image:
      'https://readdy.ai/api/search-image?query=stunning%20contemporary%20luxury%20estate%20home%20with%20stone%20and%20glass%20facade%20surrounded%20by%20lush%20greenery%20and%20mature%20trees%20featuring%20elegant%20architectural%20details%20and%20sophisticated%20outdoor%20living%20spaces%20with%20minimalist%20clean%20background&width=800&height=600&seq=2&orientation=landscape',
  },
  {
    id: '3',
    address: '3312 Mount Bonnell Road',
    price: '$5,900,000',
    beds: 6,
    baths: 7,
    sqft: '7,800 sqft',
    neighborhood: 'Mount Bonnell',
    image:
      'https://readdy.ai/api/search-image?query=magnificent%20hilltop%20luxury%20residence%20with%20panoramic%20views%20featuring%20modern%20architecture%20infinity%20pool%20and%20expansive%20outdoor%20terraces%20with%20sophisticated%20design%20elements%20and%20premium%20finishes%20against%20simple%20elegant%20backdrop&width=800&height=600&seq=3&orientation=landscape',
  },
  {
    id: '4',
    address: '1205 Scenic Drive',
    price: '$2,850,000',
    beds: 4,
    baths: 4,
    sqft: '4,200 sqft',
    neighborhood: 'Tarrytown',
    image:
      'https://readdy.ai/api/search-image?query=elegant%20traditional%20luxury%20home%20with%20classic%20architecture%20featuring%20brick%20and%20stone%20exterior%20beautiful%20landscaping%20and%20timeless%20design%20elements%20in%20prestigious%20neighborhood%20with%20clean%20simple%20background&width=800&height=600&seq=4&orientation=landscape',
  },
  {
    id: '5',
    address: '4501 Spanish Oaks Club Boulevard',
    price: '$6,750,000',
    beds: 5,
    baths: 6,
    sqft: '8,500 sqft',
    neighborhood: 'Spanish Oaks',
    image:
      'https://readdy.ai/api/search-image?query=spectacular%20mediterranean%20inspired%20luxury%20villa%20with%20terracotta%20roof%20arched%20windows%20and%20resort%20style%20grounds%20featuring%20elegant%20courtyard%20and%20sophisticated%20outdoor%20entertainment%20areas%20with%20minimalist%20clean%20backdrop&width=800&height=600&seq=5&orientation=landscape',
  },
  {
    id: '6',
    address: '2108 Pemberton Drive',
    price: '$3,450,000',
    beds: 5,
    baths: 5,
    sqft: '5,600 sqft',
    neighborhood: 'Pemberton Heights',
    image:
      'https://readdy.ai/api/search-image?query=refined%20contemporary%20luxury%20home%20with%20horizontal%20lines%20natural%20materials%20and%20seamless%20indoor%20outdoor%20living%20spaces%20featuring%20modern%20design%20and%20premium%20craftsmanship%20in%20upscale%20setting%20with%20simple%20elegant%20background&width=800&height=600&seq=6&orientation=landscape',
  },
]

export type Agent = {
  name: string
  role: string
  listings: string
  image: string
}

export const agents: Agent[] = [
  {
    name: 'Victoria Sterling',
    role: 'Principal Broker',
    listings: '12 Active Listings',
    image:
      'https://readdy.ai/api/search-image?query=professional%20confident%20female%20real%20estate%20agent%20in%20elegant%20business%20attire%20with%20warm%20smile%20standing%20in%20modern%20luxury%20office%20setting%20with%20natural%20lighting%20and%20clean%20minimalist%20background&width=400&height=500&seq=101&orientation=portrait',
  },
  {
    name: 'Marcus Chen',
    role: 'Senior Agent',
    listings: '8 Active Listings',
    image:
      'https://readdy.ai/api/search-image?query=sophisticated%20male%20real%20estate%20professional%20in%20tailored%20suit%20with%20confident%20demeanor%20in%20upscale%20contemporary%20office%20environment%20with%20soft%20lighting%20and%20simple%20elegant%20backdrop&width=400&height=500&seq=102&orientation=portrait',
  },
  {
    name: 'Isabella Rodriguez',
    role: 'Luxury Specialist',
    listings: '10 Active Listings',
    image:
      'https://readdy.ai/api/search-image?query=elegant%20female%20real%20estate%20expert%20in%20professional%20attire%20with%20approachable%20smile%20in%20bright%20modern%20office%20space%20with%20natural%20light%20and%20clean%20minimalist%20background&width=400&height=500&seq=103&orientation=portrait',
  },
  {
    name: 'James Whitmore',
    role: 'Senior Agent',
    listings: '15 Active Listings',
    image:
      'https://readdy.ai/api/search-image?query=professional%20male%20real%20estate%20agent%20in%20business%20casual%20attire%20with%20friendly%20expression%20in%20contemporary%20luxury%20office%20with%20soft%20natural%20lighting%20and%20simple%20clean%20backdrop&width=400&height=500&seq=104&orientation=portrait',
  },
  {
    name: 'Sophia Laurent',
    role: 'International Specialist',
    listings: '9 Active Listings',
    image:
      'https://readdy.ai/api/search-image?query=refined%20female%20real%20estate%20professional%20in%20sophisticated%20business%20wear%20with%20warm%20welcoming%20smile%20in%20elegant%20modern%20office%20setting%20with%20natural%20light%20and%20minimalist%20clean%20background&width=400&height=500&seq=105&orientation=portrait',
  },
]

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
