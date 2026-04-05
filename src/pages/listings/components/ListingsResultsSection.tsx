import { useEffect, useRef, useState } from 'react'
import { Loader2 } from 'lucide-react'

import { FadeInSection } from '@/components/motion'
import { cn } from '@/lib/utils'
import type { FeaturedProperty } from '@/pages/home/data'

import { ListingCard } from './ListingCard'

const INITIAL_VISIBLE = 6
const LOAD_MORE_STEP = 6
const LOAD_DELAY_MS = 700

type ListingsResultsSectionProps = {
  properties: FeaturedProperty[]
  layout: 'grid' | 'list'
  onResetFilters: () => void
}

export function ListingsResultsSection({ properties, layout, onResetFilters }: ListingsResultsSectionProps) {
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE)
  const [loadingMore, setLoadingMore] = useState(false)
  const loadTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const listingIdsKey = properties.map((p) => p.id).join(',')

  useEffect(() => {
    setVisibleCount(INITIAL_VISIBLE)
    setLoadingMore(false)
  }, [listingIdsKey])

  useEffect(() => {
    return () => {
      if (loadTimeoutRef.current) clearTimeout(loadTimeoutRef.current)
    }
  }, [])

  if (properties.length === 0) {
    return (
      <section className="px-6 py-12 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <FadeInSection>
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
          </FadeInSection>
        </div>
      </section>
    )
  }

  const cappedCount = Math.min(visibleCount, properties.length)
  const visibleProperties = properties.slice(0, cappedCount)
  const hasMore = cappedCount < properties.length

  function handleShowMore() {
    if (loadingMore || !hasMore) return
    setLoadingMore(true)
    loadTimeoutRef.current = setTimeout(() => {
      setVisibleCount((n) => Math.min(n + LOAD_MORE_STEP, properties.length))
      setLoadingMore(false)
      loadTimeoutRef.current = null
    }, LOAD_DELAY_MS)
  }

  return (
    <section className="px-6 py-12 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div
          className={cn(
            'grid gap-8',
            layout === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1',
          )}
        >
          {visibleProperties.map((p, i) => (
            <FadeInSection key={p.id} delay={i * 0.06} y={16}>
              <ListingCard property={p} layout={layout} />
            </FadeInSection>
          ))}
        </div>

        {hasMore ? (
          <FadeInSection className="mt-12 flex justify-center" delay={0.08}>
            <button
              type="button"
              onClick={handleShowMore}
              disabled={loadingMore}
              aria-busy={loadingMore}
              className={cn(
                'inline-flex min-w-[180px] cursor-pointer items-center justify-center gap-2 rounded-full border border-charcoal-200 bg-white px-8 py-3.5 text-sm font-medium text-charcoal-800 transition-colors',
                'hover:border-sage-400 hover:bg-sage-50 hover:text-sage-800',
                'disabled:pointer-events-none disabled:opacity-70',
                'dark:border-charcoal-600 dark:bg-charcoal-900 dark:text-zinc-100 dark:hover:border-sage-500 dark:hover:bg-charcoal-800',
              )}
            >
              {loadingMore ? (
                <>
                  <Loader2 className="size-4 shrink-0 animate-spin text-sage-600 dark:text-sage-400" aria-hidden />
                  Loading…
                </>
              ) : (
                'Show more'
              )}
            </button>
          </FadeInSection>
        ) : null}
      </div>
    </section>
  )
}
