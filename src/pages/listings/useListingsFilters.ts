import { useMemo, useState } from 'react'

import { featuredProperties } from '@/pages/home/data'
import {
  getFilteredSortedListings,
  type BedFilter,
  type PriceTier,
  type SortKey,
  NEIGHBORHOOD_OPTIONS,
} from '@/pages/listings/listingsFilterUtils'

export function useListingsFilters() {
  const [neighborhood, setNeighborhood] = useState<(typeof NEIGHBORHOOD_OPTIONS)[number]>('All')
  const [priceTier, setPriceTier] = useState<PriceTier>('0')
  const [beds, setBeds] = useState<BedFilter>('Any')
  const [sort, setSort] = useState<SortKey>('price-desc')

  const filteredSorted = useMemo(
    () =>
      getFilteredSortedListings(featuredProperties, {
        neighborhood,
        priceTier,
        beds,
        sort,
      }),
    [neighborhood, priceTier, beds, sort],
  )

  const resetFilters = () => {
    setNeighborhood('All')
    setPriceTier('0')
    setBeds('Any')
    setSort('price-desc')
  }

  return {
    neighborhood,
    setNeighborhood,
    priceTier,
    setPriceTier,
    beds,
    setBeds,
    sort,
    setSort,
    filteredSorted,
    resetFilters,
  }
}
