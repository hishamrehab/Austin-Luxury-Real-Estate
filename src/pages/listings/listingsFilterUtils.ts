import type { FeaturedProperty } from '@/pages/home/data'

export const NEIGHBORHOOD_OPTIONS = [
  'All',
  'Westlake Hills',
  'Barton Creek',
  'Mount Bonnell',
  'Tarrytown',
  'Spanish Oaks',
  'Pemberton Heights',
  'Rob Roy',
  'Downtown Austin',
] as const

export type PriceTier = '0' | '1' | '2' | '3' | '4'
export type BedFilter = 'Any' | '2+' | '3+' | '4+' | '5+' | '6+'
export type SortKey = 'price-desc' | 'price-asc' | 'sqft-desc' | 'beds-desc'

export function parsePriceUsd(price: string): number {
  return Number(price.replace(/[$,]/g, ''))
}

export function parseSqft(sqft: string): number {
  return Number(sqft.replace(/[^0-9]/g, '')) || 0
}

export function formatSqftDisplay(sqft: string): string {
  const n = parseSqft(sqft)
  if (!n) return sqft
  return `${n.toLocaleString()} Sq Ft`
}

function minBedsFromFilter(f: BedFilter): number | null {
  if (f === 'Any') return null
  return Number(f.replace('+', ''))
}

function matchesPriceTier(usd: number, tier: PriceTier): boolean {
  switch (tier) {
    case '0':
      return true
    case '1':
      return usd < 3_000_000
    case '2':
      return usd >= 3_000_000 && usd < 5_000_000
    case '3':
      return usd >= 5_000_000 && usd < 7_000_000
    case '4':
      return usd >= 7_000_000
    default:
      return true
  }
}

export type ListingsFilterState = {
  neighborhood: (typeof NEIGHBORHOOD_OPTIONS)[number]
  priceTier: PriceTier
  beds: BedFilter
  sort: SortKey
}

export function getFilteredSortedListings(
  properties: FeaturedProperty[],
  { neighborhood, priceTier, beds, sort }: ListingsFilterState,
): FeaturedProperty[] {
  const minBeds = minBedsFromFilter(beds)
  let list = properties.filter((p) => {
    if (neighborhood !== 'All' && p.neighborhood !== neighborhood) return false
    const usd = parsePriceUsd(p.price)
    if (!matchesPriceTier(usd, priceTier)) return false
    if (minBeds !== null && p.beds < minBeds) return false
    return true
  })

  list = [...list].sort((a, b) => {
    switch (sort) {
      case 'price-asc':
        return parsePriceUsd(a.price) - parsePriceUsd(b.price)
      case 'price-desc':
        return parsePriceUsd(b.price) - parsePriceUsd(a.price)
      case 'sqft-desc':
        return parseSqft(b.sqft) - parseSqft(a.sqft)
      case 'beds-desc':
        return b.beds - a.beds
      default:
        return 0
    }
  })

  return list
}
