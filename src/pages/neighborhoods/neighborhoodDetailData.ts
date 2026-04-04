import { buildNeighborhoodGallery } from '@/pages/neighborhoods/neighborhoodImageUrls'
import {
  neighborhoodComparisonRows,
  neighborhoodGridEntries,
  neighborhoodSpotlights,
  type NeighborhoodGridEntry,
} from '@/pages/neighborhoods/neighborhoodsData'

export type NeighborhoodDetailStat = { label: string; value: string }

export type NeighborhoodDetail = NeighborhoodGridEntry & {
  eyebrow: string
  about: string
  stats: NeighborhoodDetailStat[]
  tags: string[]
  gallery: string[]
  mapQuery: string
  walkScore: number
  lotSize: string
  schools: string
}

function statsFromComparison(row: (typeof neighborhoodComparisonRows)[number]): NeighborhoodDetailStat[] {
  return [
    { label: 'Median Price', value: row.median },
    { label: 'Price Range', value: row.range },
    { label: 'Avg. Home Size', value: row.avgSize },
    { label: 'School District', value: row.schools },
  ]
}

const EXTRA_COMMUNITY_STATS: Record<string, NeighborhoodDetailStat[]> = {
  '7': [
    { label: 'Median Price', value: '$3.9M' },
    { label: 'Price Range', value: '$2.5M - $14M' },
    { label: 'Avg. Home Size', value: '6,200 sqft' },
    { label: 'School District', value: 'Eanes ISD' },
  ],
  '8': [
    { label: 'Median Price', value: '$1.8M' },
    { label: 'Price Range', value: '$750K - $12M' },
    { label: 'Avg. Home Size', value: '2,600 sqft' },
    { label: 'School District', value: 'Austin ISD' },
  ],
}

const DEFAULT_ABOUT =
  'This premier Austin community offers exceptional luxury residences, thoughtful planning, and access to the best of Hill Country and urban living. Connect with our team for a curated tour of available properties and market insight.'

export function getNeighborhoodDetail(id: string): NeighborhoodDetail | null {
  const grid = neighborhoodGridEntries.find((e) => e.id === id)
  if (!grid) return null

  const spotlight = neighborhoodSpotlights.find((s) => s.slug === id)
  const comparison = neighborhoodComparisonRows.find((r) => r.name === grid.name)

  const stats =
    spotlight?.stats ??
    (comparison ? statsFromComparison(comparison) : EXTRA_COMMUNITY_STATS[id]) ??
    [
      { label: 'Active Listings', value: String(grid.listings) },
      { label: 'Starting From', value: grid.fromPrice.replace(/^From\s+/i, '') },
    ]

  const about = spotlight?.body ?? grid.description ?? DEFAULT_ABOUT
  const eyebrow = spotlight?.eyebrow ?? grid.subtitle
  const tags = spotlight?.tags ?? grid.badges
  const gallery = buildNeighborhoodGallery(grid.id, grid.image)
  const mapQuery = `${grid.name}, Austin, TX`

  const walkScore = comparison?.walkScore ?? (id === '7' ? 24 : id === '8' ? 91 : 45)
  const lotSize = comparison?.lot ?? 'Varies'
  const schools = comparison?.schools ?? 'Austin area districts'

  return {
    ...grid,
    eyebrow,
    about,
    stats,
    tags,
    gallery,
    mapQuery,
    walkScore,
    lotSize,
    schools,
  }
}
