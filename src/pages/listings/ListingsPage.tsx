import { useState } from 'react'

import { ListingsCtaSection } from '@/pages/listings/components/ListingsCtaSection'
import { ListingsFilterBar } from '@/pages/listings/components/ListingsFilterBar'
import { ListingsHero } from '@/pages/listings/components/ListingsHero'
import { ListingsResultsSection } from '@/pages/listings/components/ListingsResultsSection'
import { NeighborhoodShowcaseSection } from '@/pages/listings/components/NeighborhoodShowcaseSection'
import { useListingsFilters } from '@/pages/listings/useListingsFilters'

export function ListingsPage() {
  const [layout, setLayout] = useState<'grid' | 'list'>('grid')
  const {
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
  } = useListingsFilters()

  return (
    <>
      <ListingsHero />

      <ListingsFilterBar
        neighborhood={neighborhood}
        setNeighborhood={setNeighborhood}
        priceTier={priceTier}
        setPriceTier={setPriceTier}
        beds={beds}
        setBeds={setBeds}
        sort={sort}
        setSort={setSort}
        layout={layout}
        setLayout={setLayout}
        resultCount={filteredSorted.length}
        onResetFilters={resetFilters}
      />

      <ListingsResultsSection properties={filteredSorted} layout={layout} onResetFilters={resetFilters} />

      <ListingsCtaSection />

      <NeighborhoodShowcaseSection />
    </>
  )
}
