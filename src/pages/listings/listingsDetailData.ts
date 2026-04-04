import { featuredProperties, type FeaturedProperty } from '@/pages/home/data'
import { neighborhoodGridEntries } from '@/pages/neighborhoods/neighborhoodsData'
import {
  buildListingGallery,
  LISTING_AGENT_HEADSHOTS,
} from '@/pages/listings/listingImageUrls'

export type ListingAgent = {
  name: string
  role: string
  image: string
  phoneDisplay: string
  phoneTel: string
  email: string
}

export type ListingDetailExtension = {
  styleLabel: string
  yearBuilt: number
  lotSize: string
  parking: string
  about: string
  /** Second narrative block for interior, flow, and everyday living. */
  lifestyle: string
  schoolDistrict: string
  annualTaxes: string
  hoa: string
  mlsNumber: string
  neighborhoodStory: string
  nearbyHighlights: string[]
  mapQuery: string
  highlights: string[]
  additionalFeatures: string[]
  agent: ListingAgent
}

/** Neighborhood detail routes use grid entry ids; returns null when no matching community page exists. */
export function neighborhoodDetailIdFromName(name: string): string | null {
  return neighborhoodGridEntries.find((e) => e.name === name)?.id ?? null
}

export function getRelatedListings(currentId: string, limit = 3): FeaturedProperty[] {
  return featuredProperties.filter((p) => p.id !== currentId).slice(0, limit)
}

const extensions: Record<string, ListingDetailExtension> = {
  '1': {
    styleLabel: 'Contemporary',
    yearBuilt: 2022,
    lotSize: '0.85 acres',
    parking: '3-car garage',
    about:
      "This architectural masterpiece in Westlake Hills represents the pinnacle of modern luxury living. Floor-to-ceiling windows flood the open-concept living spaces with natural light while framing breathtaking views of the Texas Hill Country. The chef's kitchen features Miele appliances, custom cabinetry, and a waterfall quartz island perfect for entertaining.",
    lifestyle:
      'Upper-level retreats include a spa-inspired primary suite with dual dressing rooms, a floating office overlooking the treetops, and secondary bedrooms designed as private suites. The lower level unfolds into a lounge, fitness studio, and temperature-controlled wine display—each space wired for both quiet weeknights and large-scale gatherings.',
    schoolDistrict: 'Eanes ISD',
    annualTaxes: 'Est. $92,400 / year (2024)',
    hoa: 'Voluntary neighborhood association — dues upon request',
    mlsNumber: 'TXAU-1847291',
    neighborhoodStory:
      'Westlake Hills pairs top-rated schools with dramatic topography and quick access to downtown Austin and Lake Austin. Mature oaks, winding roads, and a strong sense of privacy define day-to-day life here.',
    nearbyHighlights: [
      'Westlake High School — ~6 min',
      'Zilker Park & Barton Springs — ~12 min',
      'Downtown Austin — ~15 min',
      'Lake Austin boat launches — ~10 min',
    ],
    highlights: [
      'Infinity edge pool with spa',
      'Home theater with Dolby Atmos',
      'Wine cellar with 500+ bottle capacity',
      'Smart home automation throughout',
      'Private guest casita',
    ],
    additionalFeatures: [
      'Primary suite with private terrace',
      'Gourmet outdoor kitchen',
      'Three-car climate-controlled garage',
      'Whole-house generator',
      'Elevator ready',
    ],
    mapQuery: '2505 Westlake Drive, Austin, TX',
    agent: {
      name: 'Sarah Mitchell',
      role: 'Listing Agent',
      image: LISTING_AGENT_HEADSHOTS.sarah,
      phoneDisplay: '(512) 555-0101',
      phoneTel: '+15125550101',
      email: 'sarah@austinluxuryrealty.com',
    },
  },
  '2': {
    styleLabel: 'Modern Hill Country',
    yearBuilt: 2019,
    lotSize: '0.62 acres',
    parking: '3-car garage',
    about:
      'Set along Barton Creek, this residence pairs Hill Country materials with a crisp modern plan. Expansive glass connects living spaces to covered terraces, while the kitchen and butler pantry are designed for seamless entertaining.',
    lifestyle:
      'Daily living centers on a great room that opens to a loggia and pool terrace. A dedicated study, flexible game or media space, and a mudroom tailored for an active household keep the plan practical without sacrificing polish.',
    schoolDistrict: 'Austin ISD (transfer options available — verify with district)',
    annualTaxes: 'Est. $58,200 / year (2024)',
    hoa: 'Barton Creek HOA — fees upon request',
    mlsNumber: 'TXAU-2910448',
    neighborhoodStory:
      'Barton Creek is known for resort-grade amenities, championship golf, and gated tranquility minutes from the city. Mature landscaping and wide lots create a true estate feel.',
    nearbyHighlights: [
      'Omni Barton Creek Resort — ~4 min',
      'Hill Country Galleria — ~8 min',
      'Downtown Austin — ~18 min',
      'Zilker / ACL footprint — ~14 min',
    ],
    highlights: [
      'Golf course views from main living',
      'Temperature-controlled wine wall',
      'Dedicated study with built-ins',
      'Motor court with porte-cochère',
      'Whole-home audio zones',
    ],
    additionalFeatures: [
      'Outdoor kitchen with grill station',
      'Generous mudroom and drop zone',
      'Tankless water heaters',
      'Low-maintenance native landscaping',
      'Pre-wired for EV charging',
    ],
    mapQuery: '1804 Barton Creek Boulevard, Austin, TX',
    agent: {
      name: 'Marcus Chen',
      role: 'Listing Agent',
      image: LISTING_AGENT_HEADSHOTS.marcus,
      phoneDisplay: '(512) 555-0102',
      phoneTel: '+15125550102',
      email: 'marcus@austinluxuryrealty.com',
    },
  },
  '3': {
    styleLabel: 'Modern Estate',
    yearBuilt: 2021,
    lotSize: '1.4 acres',
    parking: '4-car garage',
    about:
      'Commanding one of the most dramatic view corridors in Austin, this estate layers indoor-outdoor living across multiple levels. Soaring ceilings, a showcase kitchen, and resort-grade outdoor amenities create a rare hilltop offering.',
    lifestyle:
      'Service quarters, a catering kitchen, and discrete storage support effortless hosting. Bedrooms are positioned for views and privacy, while the primary wing includes a sitting room, morning bar, and terrace access for sunrise over the water.',
    schoolDistrict: 'Austin ISD',
    annualTaxes: 'Est. $118,600 / year (2024)',
    hoa: 'None — private road maintenance agreement',
    mlsNumber: 'TXAU-3309182',
    neighborhoodStory:
      'Mount Bonnell and the surrounding hills offer some of the most sought-after vistas in Central Texas—Lake Austin, the skyline, and layered Hill Country ridgelines. Properties here are as much about the setting as the architecture.',
    nearbyHighlights: [
      'Covert Park at Mount Bonnell — ~5 min',
      'Mayfield Park — ~8 min',
      'Clarksville dining — ~10 min',
      'UT campus — ~12 min',
    ],
    highlights: [
      'Panoramic Lake Austin and skyline views',
      'Negative-edge pool and spa',
      'Elevator servicing all levels',
      'Theater and game lounge',
      'Guest wing with kitchenette',
    ],
    additionalFeatures: [
      'Generator and whole-home surge protection',
      'Smart lighting and shading',
      'Climate-controlled art storage',
      'Motorized driveway gate',
      'Landscaped fire feature terrace',
    ],
    mapQuery: '3312 Mount Bonnell Road, Austin, TX',
    agent: {
      name: 'Victoria Sterling',
      role: 'Listing Agent',
      image: LISTING_AGENT_HEADSHOTS.victoria,
      phoneDisplay: '(512) 555-0101',
      phoneTel: '+15125550101',
      email: 'victoria@austinluxuryrealty.com',
    },
  },
  '4': {
    styleLabel: 'Traditional',
    yearBuilt: 2015,
    lotSize: '0.38 acres',
    parking: '2-car garage + carport',
    about:
      'Tarrytown charm meets elevated finishes in this thoughtfully updated residence. Formal and casual spaces flow naturally, with a private primary wing and a backyard designed for quiet evenings under the oaks.',
    lifestyle:
      'A dedicated dining room, breakfast nook, and family room create distinct zones for everyday routines. The primary suite opens toward the garden, and secondary bedrooms work well for children, guests, or a home office.',
    schoolDistrict: 'Austin ISD',
    annualTaxes: 'Est. $52,800 / year (2024)',
    hoa: 'None',
    mlsNumber: 'TXAU-7721055',
    neighborhoodStory:
      'Tarrytown blends historic character with walkability to parks, local cafés, and central Austin. Tree-lined streets and strong community ties make it a favorite for buyers who want proximity without high-rise living.',
    nearbyHighlights: [
      'Tarrytown Park — ~4 min walk',
      'Mozart’s Coffee — ~6 min',
      'Lady Bird Lake trailheads — ~8 min',
      'Texas State Capitol — ~7 min',
    ],
    highlights: [
      'Walkable to local parks and dining',
      'Renovated kitchen and baths',
      'Hardwood floors throughout main level',
      'Covered rear porch',
      'Mature oak canopy for privacy',
    ],
    additionalFeatures: [
      'Built-in office cabinetry',
      'Irrigation and landscape lighting',
      'Spray foam insulation zones',
      'Updated HVAC with zoning',
      'Walk-in attic storage',
    ],
    mapQuery: '1205 Scenic Drive, Austin, TX',
    agent: {
      name: 'Isabella Rodriguez',
      role: 'Listing Agent',
      image: LISTING_AGENT_HEADSHOTS.isabella,
      phoneDisplay: '(512) 555-0103',
      phoneTel: '+15125550103',
      email: 'isabella@austinluxuryrealty.com',
    },
  },
  '5': {
    styleLabel: 'Mediterranean',
    yearBuilt: 2018,
    lotSize: '1.1 acres',
    parking: '4-car garage',
    about:
      'Inspired European estates, this villa centers on a private courtyard and layered outdoor living. Interior volumes are grand yet warm, with artisan finishes and spaces tailored for both celebration and everyday comfort.',
    lifestyle:
      'Arched galleries connect formal rooms to family spaces, while the owner’s suite occupies a quiet wing with a private garden view. Staff paths, generous closets, and multiple laundry connections simplify running a large household.',
    schoolDistrict: 'Lake Travis ISD',
    annualTaxes: 'Est. $132,400 / year (2024)',
    hoa: 'Spanish Oaks POA — fees upon request',
    mlsNumber: 'TXAU-5512044',
    neighborhoodStory:
      'Spanish Oaks is an ultra-private enclave anchored by golf, custom estates, and Hill Country views. Security, scale, and resort-level outdoor design define the community.',
    nearbyHighlights: [
      'Spanish Oaks Golf Club — on campus',
      'Bee Cave & Hill Country Galleria — ~12 min',
      'Lake Travis marinas — ~18 min',
      'Austin-Bergstrom Airport — ~35 min',
    ],
    highlights: [
      'Courtyard with water feature',
      'Resort pool and spa',
      'Formal library with millwork',
      'Climate-controlled wine room',
      'Casual family wing with media',
    ],
    additionalFeatures: [
      'Summer kitchen and pizza oven',
      'Guest house with full bath',
      'Lutron lighting system',
      'Security and camera prewire',
      'Expansive motor court',
    ],
    mapQuery: '4501 Spanish Oaks Club Boulevard, Austin, TX',
    agent: {
      name: 'James Whitmore',
      role: 'Listing Agent',
      image: LISTING_AGENT_HEADSHOTS.james,
      phoneDisplay: '(512) 555-0104',
      phoneTel: '+15125550104',
      email: 'james@austinluxuryrealty.com',
    },
  },
  '6': {
    styleLabel: 'Contemporary',
    yearBuilt: 2020,
    lotSize: '0.28 acres',
    parking: '2-car garage',
    about:
      'Minutes from downtown, this contemporary home emphasizes clean lines, natural stone, and walls of glass. Flexible living zones and a private primary suite make it ideal for professionals seeking Pemberton Heights convenience.',
    lifestyle:
      'A main-level office or studio, open kitchen with walk-in pantry, and a rooftop or upper terrace (per plan) extend usable space without expanding the footprint. Smart storage and minimal thresholds keep the home easy to maintain.',
    schoolDistrict: 'Austin ISD',
    annualTaxes: 'Est. $61,100 / year (2024)',
    hoa: 'Pemberton Heights NA — voluntary; confirm current dues',
    mlsNumber: 'TXAU-6683901',
    neighborhoodStory:
      'Pemberton Heights sits among Austin’s most beloved central neighborhoods—mature trees, architectural variety, and a short commute to downtown, UT, and medical corridors.',
    nearbyHighlights: [
      'Pease Park — ~5 min',
      'Clarksville restaurants — ~6 min',
      'Whole Foods flagship — ~7 min',
      'Downtown Austin — ~8 min',
    ],
    highlights: [
      'Rooftop terrace with skyline glimpses',
      'Floating staircase feature',
      'Wellness room or flex studio',
      'European kitchen appliances',
      'Low-maintenance exterior materials',
    ],
    additionalFeatures: [
      'Electric vehicle charging in garage',
      'Tankless hot water',
      'Foam insulation package',
      'Rainwater collection for irrigation',
      'Smart thermostat and locks',
    ],
    mapQuery: '2108 Pemberton Drive, Austin, TX',
    agent: {
      name: 'Sophia Laurent',
      role: 'Listing Agent',
      image: LISTING_AGENT_HEADSHOTS.sophia,
      phoneDisplay: '(512) 555-0105',
      phoneTel: '+15125550105',
      email: 'sophia@austinluxuryrealty.com',
    },
  },
  '7': {
    styleLabel: 'Lakefront Contemporary',
    yearBuilt: 2020,
    lotSize: '0.95 acres',
    parking: '3-car garage + boat storage',
    about:
      'A rare Lake Austin–oriented estate in Rob Roy with deep water proximity, walls of glass, and terraces designed for sunset entertaining. The plan balances grand public rooms with intimate family spaces.',
    lifestyle:
      'The primary suite captures water views, while secondary bedrooms sit in a separate wing. A dedicated prep kitchen, wet bar, and covered dock path make weekends on the lake effortless.',
    schoolDistrict: 'Eanes ISD',
    annualTaxes: 'Est. $98,200 / year (2024)',
    hoa: 'Rob Roy HOA — fees upon request',
    mlsNumber: 'TXAU-7712204',
    neighborhoodStory:
      'Rob Roy is prized for waterfront access, mature trees, and estate-scale lots along Lake Austin. Privacy and boating culture define the lifestyle.',
    nearbyHighlights: [
      'Private marina access — nearby',
      'Westlake retail — ~12 min',
      'Hula Hut / waterfront dining — ~15 min',
      'Downtown Austin — ~20 min',
    ],
    highlights: [
      'Lake-facing pool and spa',
      'Boat slip or deep-water access (verify)',
      'Glass-walled great room',
      'Guest suite with separate entry',
      'Whole-home generator',
    ],
    additionalFeatures: [
      'Outdoor kitchen and fire lounge',
      'Climate-controlled wine storage',
      'Elevator-ready shaft',
      'Landscape lighting package',
      'Security system with cameras',
    ],
    mapQuery: '7200 Rivercrest Drive, Austin, TX',
    agent: {
      name: 'Victoria Sterling',
      role: 'Listing Agent',
      image: LISTING_AGENT_HEADSHOTS.victoria,
      phoneDisplay: '(512) 555-0101',
      phoneTel: '+15125550101',
      email: 'victoria@austinluxuryrealty.com',
    },
  },
  '8': {
    styleLabel: 'High-Rise Residence',
    yearBuilt: 2023,
    lotSize: 'N/A — condominium',
    parking: '2 reserved spaces',
    about:
      'A sky-level residence in the heart of downtown with floor-to-ceiling glass, designer finishes, and concierge-level services. Ideal for buyers who want lock-and-leave luxury steps from Austin’s best dining and culture.',
    lifestyle:
      'Open living flows to a generous terrace; the kitchen is scaled for entertaining without maintenance overhead. Building amenities extend your square footage with fitness, pool, and guest suites.',
    schoolDistrict: 'Austin ISD',
    annualTaxes: 'Est. $38,400 / year (2024)',
    hoa: 'Condominium HOA — fees upon request',
    mlsNumber: 'TXAU-8829011',
    neighborhoodStory:
      'Downtown Austin pairs walkability to offices, festivals, and the lake with a growing collection of trophy high-rise residences.',
    nearbyHighlights: [
      'Lady Bird Lake trail — ~3 min walk',
      '2nd Street District — ~5 min',
      'Texas Capitol — ~10 min',
      'Austin-Bergstrom Airport — ~20 min',
    ],
    highlights: [
      'Panoramic city views',
      'Private terrace',
      'Concierge & controlled access',
      'Premium appliance package',
      'Assigned storage',
    ],
    additionalFeatures: [
      'Motorized shades',
      'Pre-wired smart home',
      'Sound-attenuated windows',
      'In-unit laundry',
      'EV-ready parking',
    ],
    mapQuery: '200 Lavaca Street, Austin, TX',
    agent: {
      name: 'Marcus Chen',
      role: 'Listing Agent',
      image: LISTING_AGENT_HEADSHOTS.marcus,
      phoneDisplay: '(512) 555-0102',
      phoneTel: '+15125550102',
      email: 'marcus@austinluxuryrealty.com',
    },
  },
  '9': {
    styleLabel: 'Transitional Estate',
    yearBuilt: 2017,
    lotSize: '0.72 acres',
    parking: '3-car garage',
    about:
      'A refined Westlake estate combining classic proportions with today’s finishes: a showcase kitchen, formal and casual living, and a backyard built around a vanishing-edge pool.',
    lifestyle:
      'The main level hosts entertaining and a study; upstairs, bedrooms are arranged for privacy. A flexible bonus room adapts to media, fitness, or remote work.',
    schoolDistrict: 'Eanes ISD',
    annualTaxes: 'Est. $76,500 / year (2024)',
    hoa: 'Voluntary — confirm current dues',
    mlsNumber: 'TXAU-9034418',
    neighborhoodStory:
      'Westlake Hills remains one of Austin’s most sought-after addresses for schools, views, and proximity to both the lake and the city.',
    nearbyHighlights: [
      'Eanes schools — nearby',
      'Zilker Park — ~11 min',
      'Downtown — ~14 min',
      'Lake Austin access — ~8 min',
    ],
    highlights: [
      'Resort-style pool',
      'Outdoor living pavilion',
      'Chef’s kitchen with dual islands',
      'Primary suite with spa bath',
      'Three-car garage',
    ],
    additionalFeatures: [
      'Whole-house water filtration',
      'Landscape irrigation',
      'Built-in sound',
      'Tankless water heaters',
      'Spray-foam zones',
    ],
    mapQuery: '2801 Westlake Terrace, Austin, TX',
    agent: {
      name: 'Sarah Mitchell',
      role: 'Listing Agent',
      image: LISTING_AGENT_HEADSHOTS.sarah,
      phoneDisplay: '(512) 555-0101',
      phoneTel: '+15125550101',
      email: 'sarah@austinluxuryrealty.com',
    },
  },
  '10': {
    styleLabel: 'Hill Country Modern',
    yearBuilt: 2021,
    lotSize: '0.88 acres',
    parking: '3-car garage',
    about:
      'Set on a quiet Lost Creek drive, this newer build pairs limestone and steel with warm interiors. Indoor-outdoor flow is exceptional, with pocket doors opening to a pool terrace and outdoor fireplace.',
    lifestyle:
      'Daily life revolves around the great room and island kitchen; a main-level guest suite suits in-laws or staff. Upstairs, a game room and secondary bedrooms complete the plan.',
    schoolDistrict: 'Austin ISD (verify transfers)',
    annualTaxes: 'Est. $82,100 / year (2024)',
    hoa: 'Barton Creek HOA — fees upon request',
    mlsNumber: 'TXAU-9145520',
    neighborhoodStory:
      'Barton Creek offers gated tranquility, golf, and quick access to retail while feeling miles from the city.',
    nearbyHighlights: [
      'Barton Creek amenities — nearby',
      'Hill Country Galleria — ~7 min',
      'Downtown — ~17 min',
      'Zilker — ~13 min',
    ],
    highlights: [
      'Negative-edge pool',
      'Outdoor kitchen',
      'Glass wine display',
      'Dedicated office',
      'Motor court',
    ],
    additionalFeatures: [
      'Whole-home automation',
      'Generator',
      'Water softener loop',
      'Low-voltage prewire',
      'Drought-tolerant landscape',
    ],
    mapQuery: '3920 Lost Creek Boulevard, Austin, TX',
    agent: {
      name: 'Marcus Chen',
      role: 'Listing Agent',
      image: LISTING_AGENT_HEADSHOTS.marcus,
      phoneDisplay: '(512) 555-0102',
      phoneTel: '+15125550102',
      email: 'marcus@austinluxuryrealty.com',
    },
  },
  '11': {
    styleLabel: 'Classic Traditional',
    yearBuilt: 2014,
    lotSize: '0.35 acres',
    parking: '2-car garage',
    about:
      'A gracious Tarrytown home on a leafy street: formal living and dining, a renovated kitchen open to the family room, and a private yard with room to garden and dine al fresco.',
    lifestyle:
      'Hardwood floors, detailed millwork, and abundant natural light create warmth. The primary suite overlooks the garden; upstairs bedrooms share a flexible loft.',
    schoolDistrict: 'Austin ISD',
    annualTaxes: 'Est. $49,200 / year (2024)',
    hoa: 'None',
    mlsNumber: 'TXAU-9256632',
    neighborhoodStory:
      'Tarrytown offers central convenience, mature trees, and a tight-knit feel minutes from downtown and the lake.',
    nearbyHighlights: [
      'Tarrytown Park — walkable',
      'Mozart’s — ~5 min',
      'Lady Bird Lake — ~7 min',
      'Capitol — ~8 min',
    ],
    highlights: [
      'Renovated kitchen',
      'Primary suite on main',
      'Covered porch',
      'Mature landscaping',
      'Walkable to dining',
    ],
    additionalFeatures: [
      'Tankless water heater',
      'Updated electrical panel',
      'Irrigation',
      'Walk-in attic storage',
      'Smart thermostat',
    ],
    mapQuery: '805 Windsor Road, Austin, TX',
    agent: {
      name: 'Isabella Rodriguez',
      role: 'Listing Agent',
      image: LISTING_AGENT_HEADSHOTS.isabella,
      phoneDisplay: '(512) 555-0103',
      phoneTel: '+15125550103',
      email: 'isabella@austinluxuryrealty.com',
    },
  },
  '12': {
    styleLabel: 'Iconic View Estate',
    yearBuilt: 2019,
    lotSize: '1.6 acres',
    parking: '5-car garage',
    about:
      'One of the most dramatic view sites near Mount Bonnell: layered ridgelines, water, and skyline in a single panorama. Architecture and landscape were composed together for privacy and spectacle.',
    lifestyle:
      'Multiple terraces, a resort pool, and interior volumes scaled for art and entertaining. Service areas and guest quarters are discreetly separated from the main family wing.',
    schoolDistrict: 'Austin ISD',
    annualTaxes: 'Est. $142,800 / year (2024)',
    hoa: 'Private road agreement',
    mlsNumber: 'TXAU-9367744',
    neighborhoodStory:
      'The Mount Bonnell corridor attracts buyers who prioritize views, land, and architectural distinction within minutes of central Austin.',
    nearbyHighlights: [
      'Mount Bonnell — ~4 min',
      'Mayfield Park — ~7 min',
      'Clarksville — ~9 min',
      'UT — ~11 min',
    ],
    highlights: [
      '270° panoramic views',
      'Resort pool and spa',
      'Theater and lounge',
      'Guest wing',
      'Five-car garage',
    ],
    additionalFeatures: [
      'Whole-home generator',
      'Elevator',
      'Climate wine room',
      'Motorized gates',
      'Landscape lighting',
    ],
    mapQuery: '3600 Bonnie Road, Austin, TX',
    agent: {
      name: 'Victoria Sterling',
      role: 'Listing Agent',
      image: LISTING_AGENT_HEADSHOTS.victoria,
      phoneDisplay: '(512) 555-0101',
      phoneTel: '+15125550101',
      email: 'victoria@austinluxuryrealty.com',
    },
  },
}

export type ListingDetail = FeaturedProperty & ListingDetailExtension & { gallery: string[] }

export function getListingDetail(id: string): ListingDetail | null {
  const base = featuredProperties.find((p) => p.id === id)
  const ext = extensions[id]
  if (!base || !ext) return null
  return { ...base, ...ext, gallery: buildListingGallery(base) }
}
