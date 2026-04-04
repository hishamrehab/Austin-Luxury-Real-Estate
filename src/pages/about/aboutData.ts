export const ABOUT_HERO_IMAGE =
  'https://readdy.ai/api/search-image?query=stunning%20modern%20luxury%20real%20estate%20office%20interior%20with%20floor%20to%20ceiling%20windows%20overlooking%20Austin%20Texas%20skyline%20at%20golden%20hour%20with%20warm%20amber%20lighting%20elegant%20marble%20floors%20and%20sophisticated%20contemporary%20furnishings%20with%20clean%20architectural%20lines&width=1600&height=900&seq=810&orientation=landscape'

export const aboutHeroStats = [
  { value: '20+', label: 'Years in Austin' },
  { value: '$2.8B+', label: 'Total Sales Volume' },
  { value: '1,200+', label: 'Homes Sold' },
  { value: '20', label: 'Expert Agents' },
] as const

export const aboutStoryImages = {
  luxuryHome:
    'https://readdy.ai/api/search-image?query=elegant%20luxury%20home%20exterior%20in%20Austin%20Texas%20Hill%20Country%20with%20limestone%20facade%20and%20manicured%20landscaping%20at%20golden%20hour%20with%20warm%20natural%20lighting%20and%20lush%20green%20surroundings%20with%20clean%20architectural%20composition&width=400&height=500&seq=811&orientation=portrait',
  teamMeeting:
    'https://readdy.ai/api/search-image?query=professional%20real%20estate%20team%20meeting%20in%20modern%20conference%20room%20with%20glass%20walls%20and%20city%20views%20discussing%20strategy%20with%20warm%20ambient%20lighting%20and%20sophisticated%20contemporary%20interior%20design&width=400&height=300&seq=812&orientation=landscape',
  happyClients:
    'https://readdy.ai/api/search-image?query=happy%20couple%20receiving%20house%20keys%20from%20real%20estate%20agent%20in%20beautiful%20luxury%20home%20foyer%20with%20marble%20floors%20and%20elegant%20chandelier%20warm%20natural%20lighting%20and%20clean%20simple%20composition&width=400&height=300&seq=813&orientation=landscape',
  skyline:
    'https://readdy.ai/api/search-image?query=stunning%20aerial%20view%20of%20Austin%20Texas%20downtown%20skyline%20with%20Lady%20Bird%20Lake%20and%20green%20hills%20at%20sunset%20with%20warm%20golden%20lighting%20and%20dramatic%20sky%20showing%20vibrant%20city%20landscape&width=400&height=500&seq=814&orientation=portrait',
} as const

export const aboutCoreValues = [
  {
    title: 'Integrity',
    description:
      'Every transaction is built on transparency, honesty, and unwavering ethical standards. We protect your interests as if they were our own.',
  },
  {
    title: 'Excellence',
    description:
      'From market analysis to closing day, we deliver a level of service that exceeds expectations at every touchpoint of your journey.',
  },
  {
    title: 'Innovation',
    description:
      'We leverage cutting-edge technology, cinematic marketing, and data-driven strategies to give our clients a decisive advantage.',
  },
  {
    title: 'Relationships',
    description:
      'Our clients become family. We measure success not by transactions closed, but by lasting relationships built over decades.',
  },
] as const

export type TimelineEntry = {
  year: string
  title: string
  body: string
  align: 'left' | 'right'
}

export const aboutTimeline: TimelineEntry[] = [
  {
    year: '2004',
    title: 'Founded in Austin',
    body: 'Victoria Sterling established Austin Luxury Realty with a vision to redefine high-end real estate service in Central Texas.',
    align: 'left',
  },
  {
    year: '2008',
    title: 'Weathering the Storm',
    body: 'Guided clients through the financial crisis with strategic counsel, earning deep trust and long-term loyalty.',
    align: 'right',
  },
  {
    year: '2012',
    title: '$500M in Sales',
    body: "Reached a half-billion in cumulative sales volume, solidifying our position as Austin's premier luxury brokerage.",
    align: 'left',
  },
  {
    year: '2016',
    title: 'Team Expansion',
    body: 'Grew to 15 agents and opened our flagship office in Westlake Hills to better serve the luxury corridor.',
    align: 'right',
  },
  {
    year: '2020',
    title: 'Digital Innovation',
    body: 'Launched virtual tours, AI-powered valuations, and a global digital marketing platform during the pandemic.',
    align: 'left',
  },
  {
    year: '2024',
    title: '$2.8B Milestone',
    body: 'Surpassed $2.8 billion in total sales with 20 expert agents and 500+ homes sold in a single year.',
    align: 'right',
  },
]

export const aboutCommunityInitiatives = [
  {
    title: 'Austin Habitat for Humanity',
    description:
      'Our team volunteers over 500 hours annually building homes for families in need across the Austin metro area.',
    image:
      'https://readdy.ai/api/search-image?query=volunteers%20building%20homes%20together%20in%20community%20service%20event%20with%20warm%20natural%20lighting%20and%20green%20trees%20in%20background%20showing%20teamwork%20and%20generosity%20with%20clean%20simple%20composition&width=600&height=400&seq=801&orientation=landscape',
    alt: 'Austin Habitat for Humanity',
  },
  {
    title: 'Hill Country Conservancy',
    description:
      "We proudly support the preservation of Austin's natural landscapes, trails, and green spaces for future generations.",
    image:
      'https://readdy.ai/api/search-image?query=beautiful%20Texas%20Hill%20Country%20landscape%20with%20rolling%20green%20hills%20and%20wildflowers%20at%20golden%20hour%20with%20warm%20natural%20lighting%20and%20clear%20sky%20showing%20pristine%20nature%20conservation%20area&width=600&height=400&seq=802&orientation=landscape',
    alt: 'Hill Country Conservancy',
  },
  {
    title: 'Austin Education Foundation',
    description:
      "Annual scholarship fund supporting students in Austin's top school districts pursuing higher education.",
    image:
      'https://readdy.ai/api/search-image?query=diverse%20group%20of%20happy%20students%20graduating%20in%20caps%20and%20gowns%20celebrating%20outdoors%20with%20warm%20sunlight%20and%20confetti%20showing%20achievement%20and%20education%20with%20clean%20simple%20background&width=600&height=400&seq=803&orientation=landscape',
    alt: 'Austin Education Foundation',
  },
] as const

export const ABOUT_CONTACT_IMAGE =
  'https://readdy.ai/api/search-image?query=stunning%20luxury%20modern%20living%20room%20interior%20with%20floor%20to%20ceiling%20windows%20overlooking%20Austin%20Texas%20hills%20at%20sunset%20with%20warm%20golden%20lighting%20elegant%20contemporary%20furniture%20and%20sophisticated%20neutral%20color%20palette%20with%20clean%20architectural%20lines&width=800&height=600&seq=820&orientation=landscape'

export const ABOUT_FINAL_CTA_IMAGE =
  'https://readdy.ai/api/search-image?query=breathtaking%20luxury%20infinity%20pool%20overlooking%20Austin%20Texas%20Hill%20Country%20at%20twilight%20with%20warm%20amber%20and%20rose%20gold%20lighting%20reflecting%20on%20water%20surface%20with%20elegant%20modern%20architecture%20and%20lush%20landscaping%20in%20background%20with%20clean%20composition&width=1600&height=600&seq=825&orientation=landscape'
