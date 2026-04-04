import { useMemo, useState } from 'react'
import {
  Building2,
  Compass,
  Footprints,
  Mountain,
  Trophy,
  Users,
  Waves,
} from 'lucide-react'

import { FadeInSection } from '@/components/motion'
import { NeighborhoodGridCard } from '@/pages/neighborhoods/components/NeighborhoodGridCard'
import {
  neighborhoodFilters,
  neighborhoodGridEntries,
  type NeighborhoodFilterId,
} from '@/pages/neighborhoods/neighborhoodsData'

const filterIcons = {
  compass: Compass,
  water: Waves,
  golf: Trophy,
  building: Building2,
  landscape: Mountain,
  users: Users,
  footprints: Footprints,
} as const

function matchesFilter(
  filters: Exclude<NeighborhoodFilterId, 'all'>[],
  active: NeighborhoodFilterId,
) {
  if (active === 'all') return true
  return filters.includes(active)
}

export function NeighborhoodsDiscoverSection() {
  const [activeFilter, setActiveFilter] = useState<NeighborhoodFilterId>('all')

  const filtered = useMemo(
    () => neighborhoodGridEntries.filter((e) => matchesFilter(e.filters, activeFilter)),
    [activeFilter],
  )

  return (
    <section className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <FadeInSection className="mb-14 text-center">
          <p className="mb-3 text-sm font-medium tracking-wider text-sage-600 uppercase dark:text-sage-400">
            Discover Your Community
          </p>
          <h2 className="mb-5 font-serif text-5xl font-semibold text-charcoal-950 dark:text-zinc-50">
            Austin&apos;s Finest Neighborhoods
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-base text-charcoal-500 dark:text-charcoal-400">
            Each community offers a unique lifestyle, from lakefront retreats to urban penthouses.
            Find the one that feels like home.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {neighborhoodFilters.map((f) => {
              const Icon = filterIcons[f.icon]
              const isActive = activeFilter === f.id
              return (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => setActiveFilter(f.id)}
                  className={
                    isActive
                      ? 'flex cursor-pointer items-center gap-2 rounded-full bg-charcoal-950 px-5 py-2.5 text-sm font-medium whitespace-nowrap text-white shadow-lg dark:bg-white dark:text-charcoal-950'
                      : 'flex cursor-pointer items-center gap-2 rounded-full border border-charcoal-200 bg-white px-5 py-2.5 text-sm font-medium whitespace-nowrap text-charcoal-600 transition-all hover:border-charcoal-400 hover:text-charcoal-900 dark:border-charcoal-600 dark:bg-charcoal-900 dark:text-charcoal-300 dark:hover:border-charcoal-400 dark:hover:text-zinc-100'
                  }
                >
                  <Icon className="size-4 shrink-0" aria-hidden />
                  {f.label}
                </button>
              )
            })}
          </div>
        </FadeInSection>

        {activeFilter === 'all' ? (
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {neighborhoodGridEntries.map((entry) => (
              <NeighborhoodGridCard
                key={entry.id}
                entry={entry}
                useLayoutVariant
                wrapperClassName={entry.gridClass}
              />
            ))}
          </div>
        ) : filtered.length > 0 ? (
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((entry) => (
              <NeighborhoodGridCard key={entry.id} entry={entry} useLayoutVariant={false} />
            ))}
          </div>
        ) : (
          <p className="mt-12 text-center text-sm text-charcoal-500 dark:text-charcoal-400">
            No communities match this filter. Try &quot;All Communities&quot;.
          </p>
        )}
      </div>
    </section>
  )
}
