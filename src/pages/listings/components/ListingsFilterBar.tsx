import { ChevronDown, Grid3X3, List } from 'lucide-react'

import { FadeInSection } from '@/components/motion'
import { cn } from '@/lib/utils'
import {
  NEIGHBORHOOD_OPTIONS,
  type BedFilter,
  type PriceTier,
  type SortKey,
} from '@/pages/listings/listingsFilterUtils'

const selectClass =
  'cursor-pointer appearance-none rounded-xl border border-charcoal-200 bg-charcoal-50 py-3 pr-10 pl-4 text-sm text-charcoal-700 focus:border-sage-500 focus:outline-none dark:border-charcoal-700 dark:bg-charcoal-900 dark:text-zinc-200 dark:focus:border-sage-400'

const chevronWrapClass =
  'pointer-events-none absolute top-1/2 right-3 flex h-5 w-5 -translate-y-1/2 items-center justify-center text-charcoal-400 dark:text-charcoal-500'

type ListingsFilterBarProps = {
  neighborhood: (typeof NEIGHBORHOOD_OPTIONS)[number]
  setNeighborhood: (v: (typeof NEIGHBORHOOD_OPTIONS)[number]) => void
  priceTier: PriceTier
  setPriceTier: (v: PriceTier) => void
  beds: BedFilter
  setBeds: (v: BedFilter) => void
  sort: SortKey
  setSort: (v: SortKey) => void
  layout: 'grid' | 'list'
  setLayout: (v: 'grid' | 'list') => void
  resultCount: number
  onResetFilters: () => void
}

export function ListingsFilterBar({
  neighborhood,
  setNeighborhood,
  priceTier,
  setPriceTier,
  beds,
  setBeds,
  sort,
  setSort,
  layout,
  setLayout,
  resultCount,
  onResetFilters,
}: ListingsFilterBarProps) {
  return (
    <section className="border-b border-charcoal-100 bg-white py-8 px-6 lg:px-8 dark:border-charcoal-800 dark:bg-charcoal-950">
      <FadeInSection className="mx-auto max-w-7xl" y={14}>
        <div className="flex flex-col items-center justify-between gap-4 lg:flex-row">
          <div className="flex w-full flex-wrap items-center gap-3 lg:w-auto">
            <div className="relative">
              <select
                className={selectClass}
                value={neighborhood}
                onChange={(e) => setNeighborhood(e.target.value as (typeof NEIGHBORHOOD_OPTIONS)[number])}
                aria-label="Neighborhood"
              >
                {NEIGHBORHOOD_OPTIONS.map((n) => (
                  <option key={n} value={n}>
                    {n === 'All' ? 'All Neighborhoods' : n}
                  </option>
                ))}
              </select>
              <span className={chevronWrapClass}>
                <ChevronDown className="size-5" aria-hidden />
              </span>
            </div>
            <div className="relative">
              <select
                className={selectClass}
                value={priceTier}
                onChange={(e) => setPriceTier(e.target.value as PriceTier)}
                aria-label="Price range"
              >
                <option value="0">Any Price</option>
                <option value="1">Under $3M</option>
                <option value="2">$3M - $5M</option>
                <option value="3">$5M - $7M</option>
                <option value="4">$7M+</option>
              </select>
              <span className={chevronWrapClass}>
                <ChevronDown className="size-5" aria-hidden />
              </span>
            </div>
            <div className="relative">
              <select
                className={selectClass}
                value={beds}
                onChange={(e) => setBeds(e.target.value as BedFilter)}
                aria-label="Bedrooms"
              >
                <option value="Any">Any Beds</option>
                <option value="2+">2+ Beds</option>
                <option value="3+">3+ Beds</option>
                <option value="4+">4+ Beds</option>
                <option value="5+">5+ Beds</option>
                <option value="6+">6+ Beds</option>
              </select>
              <span className={chevronWrapClass}>
                <ChevronDown className="size-5" aria-hidden />
              </span>
            </div>
            <button
              type="button"
              className="cursor-pointer px-4 py-3 text-sm font-medium whitespace-nowrap text-sage-600 hover:text-sage-700 dark:text-sage-400 dark:hover:text-sage-300"
              onClick={onResetFilters}
            >
              Reset Filters
            </button>
          </div>

          <div className="flex w-full items-center justify-between gap-3 lg:w-auto lg:justify-end">
            <span className="text-sm text-charcoal-500 dark:text-zinc-400">
              {resultCount} {resultCount === 1 ? 'property' : 'properties'}
            </span>
            <div className="flex items-center gap-3">
              <div className="relative">
                <select
                  className={selectClass}
                  value={sort}
                  onChange={(e) => setSort(e.target.value as SortKey)}
                  aria-label="Sort listings"
                >
                  <option value="price-desc">Price: High to Low</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="sqft-desc">Largest First</option>
                  <option value="beds-desc">Most Beds</option>
                </select>
                <span className={chevronWrapClass}>
                  <ChevronDown className="size-5" aria-hidden />
                </span>
              </div>
              <div className="flex rounded-xl bg-charcoal-50 p-1 dark:bg-charcoal-800">
                <button
                  type="button"
                  className={cn(
                    'flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg transition-colors',
                    layout === 'grid'
                      ? 'bg-white text-charcoal-900 shadow-sm dark:bg-charcoal-700 dark:text-zinc-50'
                      : 'text-charcoal-400 hover:text-charcoal-600 dark:text-zinc-500 dark:hover:text-zinc-300',
                  )}
                  aria-pressed={layout === 'grid'}
                  aria-label="Grid view"
                  onClick={() => setLayout('grid')}
                >
                  <Grid3X3 className="size-5" />
                </button>
                <button
                  type="button"
                  className={cn(
                    'flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg transition-colors',
                    layout === 'list'
                      ? 'bg-white text-charcoal-900 shadow-sm dark:bg-charcoal-700 dark:text-zinc-50'
                      : 'text-charcoal-400 hover:text-charcoal-600 dark:text-zinc-500 dark:hover:text-zinc-300',
                  )}
                  aria-pressed={layout === 'list'}
                  aria-label="List view"
                  onClick={() => setLayout('list')}
                >
                  <List className="size-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </FadeInSection>
    </section>
  )
}
