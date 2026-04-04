export const NEIGHBORHOODS_HERO_IMAGE =
  'https://readdy.ai/api/search-image?query=breathtaking%20aerial%20panoramic%20view%20of%20austin%20texas%20luxury%20neighborhoods%20with%20rolling%20green%20hills%20elegant%20estates%20lake%20austin%20winding%20through%20landscape%20and%20dramatic%20golden%20hour%20sunset%20light%20illuminating%20the%20hill%20country%20terrain%20with%20warm%20amber%20tones%20and%20expansive%20sky&width=1920&height=900&seq=580&orientation=landscape'

export const NEIGHBORHOODS_CTA_IMAGE =
  'https://readdy.ai/api/search-image?query=stunning%20luxury%20home%20backyard%20with%20infinity%20pool%20overlooking%20austin%20texas%20hill%20country%20at%20golden%20sunset%20with%20dramatic%20warm%20sky%20elegant%20outdoor%20living%20space%20and%20sophisticated%20landscape%20design&width=1920&height=600&seq=599&orientation=landscape'

export const AUSTIN_MAP_EMBED_SRC =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110339.56!2d-97.83!3d30.30!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b599a0cc032f%3A0x5d9b464bd469d57a!2sAustin%2C+TX!5e0!3m2!1sen!2sus!4v1700000000010'

export const neighborhoodsPageStats = [
  { value: '8', label: 'Premier Communities' },
  { value: '139', label: 'Active Listings' },
  { value: '$3.3M', label: 'Avg. Median Price' },
  { value: '20+', label: 'Years of Expertise' },
] as const

export type NeighborhoodFilterId =
  | 'all'
  | 'lakefront'
  | 'golf-resort'
  | 'urban'
  | 'hill-country'
  | 'family'
  | 'walkable'

export const neighborhoodFilters: {
  id: NeighborhoodFilterId
  label: string
  icon: 'compass' | 'water' | 'golf' | 'building' | 'landscape' | 'users' | 'footprints'
}[] = [
  { id: 'all', label: 'All Communities', icon: 'compass' },
  { id: 'lakefront', label: 'Lakefront', icon: 'water' },
  { id: 'golf-resort', label: 'Golf & Resort', icon: 'golf' },
  { id: 'urban', label: 'Urban Living', icon: 'building' },
  { id: 'hill-country', label: 'Hill Country', icon: 'landscape' },
  { id: 'family', label: 'Family-Friendly', icon: 'users' },
  { id: 'walkable', label: 'Walkable', icon: 'footprints' },
]

export type NeighborhoodGridLayout = 'featured' | 'default' | 'wide'

export type NeighborhoodGridEntry = {
  id: string
  name: string
  subtitle: string
  description?: string
  image: string
  imageAlt: string
  badges: string[]
  fromPrice: string
  listings: number
  filters: Exclude<NeighborhoodFilterId, 'all'>[]
  layout: NeighborhoodGridLayout
  /** Wrapper classes for fixed bento layout (filter: all) */
  gridClass?: string
}

export const neighborhoodGridEntries: NeighborhoodGridEntry[] = [
  {
    id: '4',
    name: 'Spanish Oaks',
    subtitle: 'Ultra-Luxury Hill Country Estates',
    description:
      "Spanish Oaks represents the pinnacle of luxury living in the Austin Hill Country. This ultra-exclusive gated community features sprawling estate properties on generous lots, offering unmatched privacy and panoramic views of the rolling terrain. Every detail, from the community's private golf course to its meticulously maintained common areas, reflects an unwavering commitment to excellence.",
    image:
      'https://static.readdy.ai/image/ed7a55e088256371a7eb4f9570cf84c8/cb028ec6bc308d0a98791b454c44ac19.jpeg',
    imageAlt: 'Spanish Oaks',
    badges: ['Ultra-Luxury', 'Hill Country'],
    fromPrice: 'From $5.2M',
    listings: 12,
    filters: ['hill-country', 'golf-resort'],
    layout: 'featured',
    gridClass: 'md:col-span-2 lg:col-span-1 lg:row-span-2',
  },
  {
    id: '1',
    name: 'Westlake Hills',
    subtitle: 'Prestigious Hilltop Living',
    image:
      'https://readdy.ai/api/search-image?query=breathtaking%20aerial%20panoramic%20view%20of%20westlake%20hills%20austin%20texas%20luxury%20neighborhood%20with%20elegant%20modern%20homes%20nestled%20among%20lush%20green%20rolling%20hills%20overlooking%20lake%20austin%20at%20golden%20hour%20with%20warm%20natural%20lighting%20and%20expansive%20sky&width=1920&height=800&seq=501&orientation=landscape',
    imageAlt: 'Westlake Hills',
    badges: ['Family-Friendly', 'Lake Views'],
    fromPrice: 'From $3.5M',
    listings: 24,
    filters: ['family', 'lakefront'],
    layout: 'default',
  },
  {
    id: '2',
    name: 'Barton Creek',
    subtitle: 'Resort-Style Estate Living',
    image:
      'https://readdy.ai/api/search-image?query=stunning%20aerial%20view%20of%20barton%20creek%20luxury%20gated%20community%20in%20austin%20texas%20with%20championship%20golf%20course%20winding%20through%20elegant%20estates%20surrounded%20by%20mature%20trees%20and%20rolling%20green%20hills%20in%20warm%20golden%20afternoon%20light&width=1920&height=800&seq=511&orientation=landscape',
    imageAlt: 'Barton Creek',
    badges: ['Golf Course', 'Gated'],
    fromPrice: 'From $2.8M',
    listings: 18,
    filters: ['golf-resort'],
    layout: 'default',
  },
  {
    id: '3',
    name: 'Tarrytown',
    subtitle: 'Historic Charm, Central Location',
    image:
      'https://readdy.ai/api/search-image?query=charming%20tree%20lined%20residential%20street%20in%20tarrytown%20austin%20texas%20with%20beautiful%20traditional%20homes%20mature%20pecan%20and%20oak%20trees%20dappled%20sunlight%20and%20lush%20green%20lawns%20creating%20a%20peaceful%20idyllic%20neighborhood%20scene%20in%20warm%20afternoon%20light&width=1920&height=800&seq=521&orientation=landscape',
    imageAlt: 'Tarrytown',
    badges: ['Historic', 'Walkable'],
    fromPrice: 'From $2.2M',
    listings: 15,
    filters: ['walkable'],
    layout: 'default',
  },
  {
    id: '5',
    name: 'Mount Bonnell',
    subtitle: 'Elevated Living, Iconic Views',
    image:
      'https://readdy.ai/api/search-image?query=dramatic%20elevated%20view%20from%20mount%20bonnell%20austin%20texas%20overlooking%20lake%20austin%20with%20luxury%20hillside%20homes%20dramatic%20cliffs%20lush%20vegetation%20and%20stunning%20panoramic%20cityscape%20in%20warm%20golden%20sunset%20light%20with%20vibrant%20sky%20colors&width=1920&height=800&seq=541&orientation=landscape',
    imageAlt: 'Mount Bonnell',
    badges: ['City Views', 'Lake Views'],
    fromPrice: 'From $4.1M',
    listings: 9,
    filters: ['lakefront'],
    layout: 'default',
  },
  {
    id: '7',
    name: 'Rob Roy',
    subtitle: 'Lakefront Luxury on Lake Austin',
    image:
      'https://readdy.ai/api/search-image?query=stunning%20aerial%20view%20of%20lake%20austin%20waterfront%20luxury%20homes%20with%20private%20boat%20docks%20calm%20blue%20water%20surrounded%20by%20lush%20green%20hills%20and%20elegant%20estates%20in%20warm%20golden%20sunset%20light%20with%20dramatic%20sky%20reflections%20on%20water&width=1920&height=800&seq=561&orientation=landscape',
    imageAlt: 'Rob Roy',
    badges: ['Lakefront', 'Boat Docks'],
    fromPrice: 'From $3.9M',
    listings: 8,
    filters: ['lakefront'],
    layout: 'wide',
    gridClass: 'md:col-span-2 lg:col-span-2',
  },
  {
    id: '8',
    name: 'Downtown Austin',
    subtitle: 'Urban Luxury at Its Finest',
    image:
      'https://readdy.ai/api/search-image?query=stunning%20downtown%20austin%20texas%20skyline%20at%20twilight%20with%20modern%20luxury%20high%20rise%20buildings%20illuminated%20against%20dramatic%20sunset%20sky%20featuring%20iconic%20towers%20lady%20bird%20lake%20reflection%20and%20vibrant%20urban%20atmosphere%20in%20warm%20evening%20light&width=1920&height=800&seq=571&orientation=landscape',
    imageAlt: 'Downtown Austin',
    badges: ['Urban', 'High-Rise'],
    fromPrice: 'From $1.8M',
    listings: 32,
    filters: ['urban'],
    layout: 'default',
    gridClass: 'md:col-span-2 lg:col-span-1',
  },
]

export type NeighborhoodSpotlight = {
  id: string
  eyebrow: string
  name: string
  slug: string
  body: string
  mainImage: string
  mainAlt: string
  detailImage: string
  detailAlt: string
  stats: { label: string; value: string }[]
  tags: string[]
  exploreLabel: string
  reverse: boolean
}

export const neighborhoodSpotlights: NeighborhoodSpotlight[] = [
  {
    id: '1',
    eyebrow: 'Prestigious Hilltop Living',
    name: 'Westlake Hills',
    slug: '1',
    body: "Perched above the city with sweeping views of downtown Austin and the Hill Country, Westlake Hills is the gold standard for luxury family living. Known for its top-rated Eanes ISD schools, winding tree-canopied roads, and architecturally stunning estates, this community attracts discerning families seeking both privacy and proximity to urban amenities.",
    mainImage:
      'https://readdy.ai/api/search-image?query=luxury%20modern%20home%20exterior%20in%20westlake%20hills%20austin%20texas%20with%20floor%20to%20ceiling%20windows%20stone%20facade%20and%20manicured%20landscaping%20set%20against%20hill%20country%20backdrop%20with%20warm%20golden%20hour%20lighting%20and%20clean%20elegant%20composition&width=600&height=400&seq=502&orientation=landscape',
    mainAlt: 'Westlake Hills',
    detailImage:
      'https://readdy.ai/api/search-image?query=scenic%20overlook%20view%20from%20westlake%20hills%20austin%20texas%20showing%20downtown%20skyline%20in%20distance%20with%20lush%20green%20trees%20and%20luxury%20rooftops%20in%20foreground%20during%20beautiful%20sunset%20with%20warm%20amber%20tones&width=600&height=400&seq=503&orientation=landscape',
    detailAlt: 'Westlake Hills detail',
    stats: [
      { label: 'Median Price', value: '$3.5M' },
      { label: 'Price Range', value: '$2.2M - $12M' },
      { label: 'Avg. Home Size', value: '5,800 sqft' },
      { label: 'School District', value: 'Eanes ISD' },
    ],
    tags: ['Family-Friendly', 'Lake Views', 'Top Schools', 'Nature Trails', 'Fine Dining'],
    exploreLabel: 'Explore Westlake Hills',
    reverse: false,
  },
  {
    id: '2',
    eyebrow: 'Resort-Style Estate Living',
    name: 'Barton Creek',
    slug: '2',
    body: "Barton Creek is Austin's premier gated community, offering an unparalleled blend of championship golf, resort amenities, and architectural grandeur. Home to the legendary Omni Barton Creek Resort & Spa, this exclusive enclave features sprawling estates set among rolling fairways and ancient oaks.",
    mainImage:
      'https://readdy.ai/api/search-image?query=elegant%20luxury%20estate%20home%20in%20barton%20creek%20austin%20texas%20with%20stone%20and%20stucco%20exterior%20grand%20entrance%20and%20beautifully%20landscaped%20grounds%20along%20golf%20course%20fairway%20in%20warm%20natural%20lighting&width=600&height=400&seq=512&orientation=landscape',
    mainAlt: 'Barton Creek',
    detailImage:
      'https://readdy.ai/api/search-image?query=championship%20golf%20course%20hole%20with%20manicured%20green%20fairway%20surrounded%20by%20luxury%20homes%20and%20ancient%20oak%20trees%20in%20barton%20creek%20austin%20texas%20with%20soft%20morning%20light%20and%20pristine%20conditions&width=600&height=400&seq=513&orientation=landscape',
    detailAlt: 'Barton Creek detail',
    stats: [
      { label: 'Median Price', value: '$2.8M' },
      { label: 'Price Range', value: '$1.8M - $9M' },
      { label: 'Avg. Home Size', value: '5,200 sqft' },
      { label: 'School District', value: 'Eanes ISD' },
    ],
    tags: ['Golf Course', 'Gated', 'Resort Living', 'Spa & Wellness', 'Tennis'],
    exploreLabel: 'Explore Barton Creek',
    reverse: true,
  },
  {
    id: '3',
    eyebrow: 'Historic Charm, Central Location',
    name: 'Tarrytown',
    slug: '3',
    body: "Tarrytown is one of Austin's most beloved and established neighborhoods, offering a rare combination of historic charm, walkability, and central convenience. Located just minutes from downtown, this tree-canopied community features a mix of beautifully restored mid-century homes and stunning new construction.",
    mainImage:
      'https://readdy.ai/api/search-image?query=beautifully%20renovated%20craftsman%20style%20luxury%20home%20in%20tarrytown%20austin%20texas%20with%20white%20exterior%20black%20shutters%20covered%20porch%20and%20mature%20landscaping%20in%20soft%20natural%20lighting%20with%20charming%20residential%20setting&width=600&height=400&seq=522&orientation=landscape',
    mainAlt: 'Tarrytown',
    detailImage:
      'https://readdy.ai/api/search-image?query=scenic%20view%20of%20lake%20austin%20from%20tarrytown%20neighborhood%20with%20calm%20blue%20water%20surrounded%20by%20lush%20green%20trees%20and%20luxury%20waterfront%20homes%20in%20warm%20golden%20hour%20lighting%20with%20serene%20atmosphere&width=600&height=400&seq=523&orientation=landscape',
    detailAlt: 'Tarrytown detail',
    stats: [
      { label: 'Median Price', value: '$2.2M' },
      { label: 'Price Range', value: '$1.5M - $6M' },
      { label: 'Avg. Home Size', value: '3,800 sqft' },
      { label: 'School District', value: 'Austin ISD' },
    ],
    tags: ['Historic', 'Walkable', 'Central Location', 'Lake Access', 'Local Shops'],
    exploreLabel: 'Explore Tarrytown',
    reverse: false,
  },
  {
    id: '4',
    eyebrow: 'Ultra-Luxury Hill Country Estates',
    name: 'Spanish Oaks',
    slug: '4',
    body: "Spanish Oaks represents the pinnacle of luxury living in the Austin Hill Country. This ultra-exclusive gated community features sprawling estate properties on generous lots, offering unmatched privacy and panoramic views of the rolling terrain. Every detail, from the community's private golf course to its meticulously maintained common areas, reflects an unwavering commitment to excellence.",
    mainImage:
      'https://readdy.ai/api/search-image?query=spectacular%20luxury%20hill%20country%20estate%20with%20contemporary%20architecture%20stone%20walls%20floor%20to%20ceiling%20windows%20and%20infinity%20pool%20overlooking%20vast%20rolling%20hills%20and%20dramatic%20sunset%20sky%20in%20texas&width=600&height=400&seq=532&orientation=landscape',
    mainAlt: 'Spanish Oaks',
    detailImage:
      'https://readdy.ai/api/search-image?query=private%20golf%20course%20hole%20in%20exclusive%20texas%20hill%20country%20community%20with%20pristine%20green%20fairway%20natural%20limestone%20outcroppings%20and%20panoramic%20views%20of%20rolling%20terrain%20in%20warm%20afternoon%20light&width=600&height=400&seq=533&orientation=landscape',
    detailAlt: 'Spanish Oaks detail',
    stats: [
      { label: 'Median Price', value: '$5.2M' },
      { label: 'Price Range', value: '$3.5M - $18M' },
      { label: 'Avg. Home Size', value: '7,200 sqft' },
      { label: 'School District', value: 'Dripping Springs ISD' },
    ],
    tags: ['Ultra-Luxury', 'Hill Country', 'Privacy', 'Private Golf', 'Estate Living'],
    exploreLabel: 'Explore Spanish Oaks',
    reverse: true,
  },
]

export const lifestyleHighlights = [
  {
    title: 'Waterfront Living',
    description:
      'Wake up to lake views and enjoy boating, kayaking, and sunset cruises from your private dock.',
    locations: 'Rob Roy, Mount Bonnell',
    image:
      'https://readdy.ai/api/search-image?query=serene%20luxury%20lakefront%20property%20with%20private%20dock%20calm%20blue%20water%20and%20lush%20green%20surroundings%20in%20warm%20golden%20hour%20light%20with%20elegant%20minimalist%20composition&width=400&height=300&seq=590&orientation=landscape',
    alt: 'Waterfront Living',
    icon: 'water' as const,
  },
  {
    title: 'Golf & Resort',
    description:
      'Championship courses, resort-style pools, and world-class clubhouses steps from your front door.',
    locations: 'Barton Creek, Spanish Oaks',
    image:
      'https://readdy.ai/api/search-image?query=pristine%20championship%20golf%20course%20with%20manicured%20green%20fairway%20elegant%20clubhouse%20and%20luxury%20homes%20in%20background%20in%20warm%20afternoon%20light%20with%20clean%20elegant%20composition&width=400&height=300&seq=591&orientation=landscape',
    alt: 'Golf & Resort',
    icon: 'golf' as const,
  },
  {
    title: 'Top Schools',
    description:
      "Access to Texas's highest-rated school districts and prestigious private academies.",
    locations: 'Westlake Hills, Barton Creek',
    image:
      'https://readdy.ai/api/search-image?query=beautiful%20modern%20school%20campus%20with%20elegant%20architecture%20green%20lawns%20and%20families%20walking%20in%20warm%20natural%20light%20with%20clean%20simple%20background%20and%20inviting%20atmosphere&width=400&height=300&seq=592&orientation=landscape',
    alt: 'Top Schools',
    icon: 'graduation' as const,
  },
  {
    title: 'Urban Luxury',
    description:
      'High-rise penthouses with skyline views, walkable dining, and vibrant nightlife at your doorstep.',
    locations: 'Downtown Austin',
    image:
      'https://readdy.ai/api/search-image?query=modern%20luxury%20high%20rise%20building%20with%20illuminated%20windows%20against%20twilight%20sky%20featuring%20sophisticated%20urban%20architecture%20and%20elegant%20city%20atmosphere%20with%20warm%20ambient%20lighting&width=400&height=300&seq=593&orientation=landscape',
    alt: 'Urban Luxury',
    icon: 'building' as const,
  },
]

export type ComparisonRow = {
  id: string
  name: string
  median: string
  range: string
  avgSize: string
  lot: string
  schools: string
  walkScore: number
  listings: number
  stripe: boolean
}

export const neighborhoodComparisonRows: ComparisonRow[] = [
  {
    id: '1',
    name: 'Westlake Hills',
    median: '$3.5M',
    range: '$2.2M - $12M',
    avgSize: '5,800 sqft',
    lot: '0.8 acres',
    schools: 'Eanes ISD',
    walkScore: 42,
    listings: 24,
    stripe: false,
  },
  {
    id: '2',
    name: 'Barton Creek',
    median: '$2.8M',
    range: '$1.8M - $9M',
    avgSize: '5,200 sqft',
    lot: '1.2 acres',
    schools: 'Eanes ISD',
    walkScore: 28,
    listings: 18,
    stripe: true,
  },
  {
    id: '3',
    name: 'Tarrytown',
    median: '$2.2M',
    range: '$1.5M - $6M',
    avgSize: '3,800 sqft',
    lot: '0.3 acres',
    schools: 'Austin ISD',
    walkScore: 68,
    listings: 15,
    stripe: false,
  },
  {
    id: '4',
    name: 'Spanish Oaks',
    median: '$5.2M',
    range: '$3.5M - $18M',
    avgSize: '7,200 sqft',
    lot: '2.5 acres',
    schools: 'Dripping Springs ISD',
    walkScore: 15,
    listings: 12,
    stripe: true,
  },
  {
    id: '5',
    name: 'Mount Bonnell',
    median: '$4.1M',
    range: '$2.8M - $15M',
    avgSize: '6,400 sqft',
    lot: '1.0 acres',
    schools: 'Austin ISD',
    walkScore: 35,
    listings: 9,
    stripe: false,
  },
  {
    id: '6',
    name: 'Pemberton Heights',
    median: '$2.6M',
    range: '$1.8M - $7M',
    avgSize: '4,200 sqft',
    lot: '0.4 acres',
    schools: 'Austin ISD',
    walkScore: 62,
    listings: 21,
    stripe: true,
  },
]

export const neighborhoodInquiryOptions = [
  'Any',
  'Westlake Hills',
  'Barton Creek',
  'Tarrytown',
  'Spanish Oaks',
  'Mount Bonnell',
  'Pemberton Heights',
  'Rob Roy',
  'Downtown Austin',
] as const
