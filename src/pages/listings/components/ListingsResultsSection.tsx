import { cn } from '@/lib/utils'
import type { FeaturedProperty } from '@/pages/home/data'

import { ListingCard } from './ListingCard'

type ListingsResultsSectionProps = {
  properties: FeaturedProperty[]
  layout: 'grid' | 'list'
  onResetFilters: () => void
}

export function ListingsResultsSection({ properties, layout, onResetFilters }: ListingsResultsSectionProps) {
  return (
    <section className="px-6 py-12 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {properties.length === 0 ? (
          <p className="text-center text-charcoal-600 dark:text-zinc-400">
            No properties match your filters. Try adjusting or{' '}
            <button
              type="button"
              className="font-medium text-sage-600 underline hover:text-sage-700 dark:text-sage-400"
              onClick={onResetFilters}
            >
              reset filters
            </button>
            .
          </p>
        ) : (
          <div
            className={cn(
              'grid gap-8',
              layout === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1',
            )}
          >
            {properties.map((p) => (
              <ListingCard key={p.id} property={p} layout={layout} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
