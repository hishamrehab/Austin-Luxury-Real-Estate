import { featuredProperties, type FeaturedProperty } from '@/pages/home/data'
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
  highlights: string[]
  additionalFeatures: string[]
  mapQuery: string
  agent: ListingAgent
}

const extensions: Record<string, ListingDetailExtension> = {
  '1': {
    styleLabel: 'Contemporary',
    yearBuilt: 2022,
    lotSize: '0.85 acres',
    parking: '3-car garage',
    about:
      "This architectural masterpiece in Westlake Hills represents the pinnacle of modern luxury living. Floor-to-ceiling windows flood the open-concept living spaces with natural light while framing breathtaking views of the Texas Hill Country. The chef's kitchen features Miele appliances, custom cabinetry, and a waterfall quartz island perfect for entertaining.",
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
}

export type ListingDetail = FeaturedProperty & ListingDetailExtension & { gallery: string[] }

export function getListingDetail(id: string): ListingDetail | null {
  const base = featuredProperties.find((p) => p.id === id)
  const ext = extensions[id]
  if (!base || !ext) return null
  return { ...base, ...ext, gallery: buildListingGallery(base) }
}
