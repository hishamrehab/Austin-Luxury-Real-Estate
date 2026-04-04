import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

import { FadeInSection } from '@/components/motion'
import { neighborhoodSpotlights } from '@/pages/neighborhoods/neighborhoodsData'

export function NeighborhoodsSpotlightsSection() {
  return (
    <section className="bg-sage-50 px-6 py-24 lg:px-8 dark:bg-charcoal-900/40">
      <div className="mx-auto max-w-7xl">
        <FadeInSection className="mb-20 text-center">
          <p className="mb-3 text-sm font-medium tracking-wider text-sage-600 uppercase dark:text-sage-400">
            In-Depth Look
          </p>
          <h2 className="font-serif text-5xl font-semibold text-charcoal-950 dark:text-zinc-50">
            Community Spotlights
          </h2>
        </FadeInSection>

        <div className="space-y-28">
          {neighborhoodSpotlights.map((spot, i) => (
            <FadeInSection key={spot.id} delay={i * 0.05}>
              <div
                className={
                  spot.reverse
                    ? 'flex flex-col items-center gap-12 lg:flex-row-reverse'
                    : 'flex flex-col items-center gap-12 lg:flex-row'
                }
              >
                <div className="w-full lg:w-1/2">
                  <div className="relative">
                    <div className="h-[420px] w-full overflow-hidden rounded-2xl">
                      <img
                        alt={spot.mainAlt}
                        className="h-full w-full object-cover object-top transition-transform duration-700 hover:scale-105"
                        src={spot.mainImage}
                      />
                    </div>
                    <div
                      className={
                        spot.reverse
                          ? 'absolute -bottom-6 -left-6 hidden h-48 w-48 overflow-hidden rounded-2xl border-4 border-white shadow-xl lg:block dark:border-charcoal-900'
                          : 'absolute -right-6 -bottom-6 hidden h-48 w-48 overflow-hidden rounded-2xl border-4 border-white shadow-xl lg:block dark:border-charcoal-900'
                      }
                    >
                      <img
                        alt={spot.detailAlt}
                        className="h-full w-full object-cover object-top"
                        src={spot.detailImage}
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-1/2">
                  <p className="mb-2 text-sm font-medium tracking-wider text-sage-600 uppercase dark:text-sage-400">
                    {spot.eyebrow}
                  </p>
                  <h3 className="mb-4 font-serif text-4xl font-semibold text-charcoal-950 dark:text-zinc-50">
                    <Link
                      to={`/neighborhoods/${spot.slug}`}
                      className="transition-colors hover:text-sage-600 dark:hover:text-sage-400"
                    >
                      {spot.name}
                    </Link>
                  </h3>
                  <p className="mb-6 text-base leading-relaxed text-charcoal-600 dark:text-charcoal-300">
                    {spot.body}
                  </p>
                  <div className="mb-6 grid grid-cols-2 gap-4">
                    {spot.stats.map((s) => (
                      <div
                        key={s.label}
                        className="rounded-xl bg-sage-50 p-4 dark:bg-charcoal-800/60"
                      >
                        <p className="mb-1 text-xs text-charcoal-500 dark:text-charcoal-400">
                          {s.label}
                        </p>
                        <p className="font-serif text-lg font-bold text-charcoal-950 dark:text-zinc-50">
                          {s.value}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className="mb-6 flex flex-wrap gap-2">
                    {spot.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-charcoal-300/90 bg-white px-3.5 py-1.5 text-xs font-semibold text-charcoal-950 shadow-sm ring-1 ring-charcoal-950/[0.06] dark:border-sage-600/40 dark:bg-charcoal-950 dark:text-zinc-50 dark:shadow-md dark:ring-1 dark:ring-white/10"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <Link
                    to={`/neighborhoods/${spot.slug}`}
                    className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-charcoal-950 px-6 py-3 text-sm font-medium whitespace-nowrap text-white transition-colors hover:bg-charcoal-900 dark:bg-white dark:text-charcoal-950 dark:hover:bg-zinc-200"
                  >
                    {spot.exploreLabel}
                    <ArrowRight aria-hidden className="size-4" />
                  </Link>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  )
}
