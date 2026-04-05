import { Link } from 'react-router-dom'
import { Bath, Bed, Heart, LayoutGrid, Trash2 } from 'lucide-react'

import { FadeInSection } from '@/components/motion'
import { SavedCollectionTabs } from '@/components/saved/SavedCollectionTabs'
import { ConfirmPopup } from '@/components/ui/ConfirmPopup'
import { cn } from '@/lib/utils'
import { useLovedListings } from '@/context/LovedListingsContext'
import { getFeaturedPropertyById } from '@/pages/home/data'
import { ListingPropertyImage } from '@/pages/listings/components/ListingPropertyImage'
import { formatSqftDisplay } from '@/pages/listings/listingsFilterUtils'

const savedCardClass = cn(
  'group/card relative flex flex-col overflow-hidden rounded-2xl bg-white',
  'shadow-md shadow-charcoal-950/[0.06] ring-1 ring-charcoal-950/[0.06]',
  'transition-[box-shadow,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]',
  'hover:-translate-y-0.5 hover:shadow-xl hover:shadow-charcoal-950/[0.08] hover:ring-sage-400/20',
  'dark:bg-charcoal-900 dark:shadow-black/20 dark:ring-white/10',
  'dark:hover:shadow-black/35 dark:hover:ring-sage-500/25',
)

const savedSummaryClass = cn(
  'relative overflow-hidden rounded-2xl border border-charcoal-200/70 bg-white p-8 shadow-md shadow-charcoal-950/[0.04]',
  'dark:border-charcoal-700/80 dark:bg-charcoal-900 dark:shadow-none dark:ring-1 dark:ring-white/[0.06]',
)

export function LovedListingsPage() {
  const { lovedIds, removeLoved, clearLoved, count } = useLovedListings()

  const items = lovedIds
    .map((id) => getFeaturedPropertyById(id))
    .filter((p): p is NonNullable<typeof p> => p != null)

  const singleItem = items.length === 1

  return (
    <>
      <section className="relative border-b border-charcoal-200/80 bg-gradient-to-b from-[#FAFAF8] via-[#FAFAF8] to-[#F0EFEA] pt-24 pb-14 dark:border-charcoal-800 dark:from-charcoal-950 dark:via-charcoal-950 dark:to-charcoal-900">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.35] dark:opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 0%, rgb(120 148 122 / 0.12), transparent 45%),
              radial-gradient(circle at 85% 10%, rgb(120 148 122 / 0.08), transparent 40%)`,
          }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <FadeInSection y={14}>
            <p className="mb-3 text-[11px] font-semibold tracking-[0.22em] text-sage-600 uppercase dark:text-sage-400">
              Your collection
            </p>
          </FadeInSection>
          <FadeInSection delay={0.06} className="flex flex-wrap items-end justify-between gap-6" y={16}>
            <div className="max-w-2xl">
              <h1 className="font-serif text-4xl font-semibold tracking-tight text-charcoal-950 md:text-[2.75rem] md:leading-[1.1] dark:text-zinc-50">
                Loved properties
              </h1>
              <p className="mt-4 max-w-xl text-pretty text-[15px] leading-relaxed text-charcoal-600 dark:text-zinc-400">
                Curate homes you are considering. Your shortlist stays on this device until you are ready to tour.
              </p>
            </div>
            {items.length > 0 ? (
              <p className="text-sm font-medium tabular-nums text-charcoal-500 dark:text-zinc-500">
                <span className="text-charcoal-950 dark:text-zinc-200">{count}</span>
                {count === 1 ? ' home' : ' homes'}
              </p>
            ) : null}
          </FadeInSection>
          <FadeInSection delay={0.1}>
            <div
              className="mt-2 h-px max-w-xs bg-gradient-to-r from-sage-400/50 to-transparent dark:from-sage-500/35"
              aria-hidden
            />
          </FadeInSection>
          <FadeInSection delay={0.12}>
            <SavedCollectionTabs />
          </FadeInSection>
        </div>
      </section>

      <section className="bg-[#EBEAE4] px-6 py-14 dark:bg-charcoal-950 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {items.length === 0 ? (
            <FadeInSection>
              <div className="mx-auto max-w-lg rounded-2xl border border-dashed border-charcoal-300/80 bg-white/90 p-12 text-center shadow-sm backdrop-blur-sm dark:border-charcoal-600 dark:bg-charcoal-900/60">
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-rose-50 to-rose-100/80 dark:from-rose-950/50 dark:to-rose-950/20">
                  <Heart className="size-8 text-rose-400" strokeWidth={1.5} aria-hidden />
                </div>
                <h2 className="font-serif text-2xl font-semibold text-charcoal-950 dark:text-zinc-50">
                  No saved homes yet
                </h2>
                <p className="mt-3 text-[15px] leading-relaxed text-charcoal-600 dark:text-zinc-400">
                  Tap the heart on any listing to add it here. Build a shortlist as you browse.
                </p>
                <Link
                  to="/listings"
                  className="mt-9 inline-flex cursor-pointer items-center justify-center rounded-full bg-sage-500 px-9 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-sage-600 dark:bg-sage-600 dark:hover:bg-sage-500"
                >
                  Browse listings
                </Link>
              </div>
            </FadeInSection>
          ) : (
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
              <div
                className={cn(
                  'grid gap-8',
                  singleItem ? 'lg:col-span-7' : 'sm:grid-cols-2 lg:col-span-8',
                  singleItem && 'max-w-xl lg:max-w-none',
                )}
              >
                {items.map((p, i) => (
                  <FadeInSection key={p.id} delay={i * 0.06} y={16}>
                    <article className={savedCardClass}>
                      <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden sm:aspect-[5/3] md:min-h-[220px]">
                        <Link to={`/listings/${p.id}`} className="absolute inset-0 block" aria-label={`View ${p.address}`}>
                          <ListingPropertyImage
                            alt={p.address}
                            src={p.image}
                            className="h-full w-full object-cover object-top transition-[transform,filter] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/card:scale-[1.045] group-hover/card:brightness-[1.02]"
                          />
                        </Link>
                        <div
                          className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-charcoal-950/55 to-transparent dark:from-charcoal-950/70"
                          aria-hidden
                        />
                        <span className="pointer-events-none absolute top-4 left-4 z-[1] rounded-full border border-white/25 bg-charcoal-950/78 px-3.5 py-1.5 text-[11px] font-semibold tracking-wide text-white shadow-md backdrop-blur-sm">
                          {p.neighborhood}
                        </span>
                        <button
                          type="button"
                          onClick={() => removeLoved(p.id)}
                          className={cn(
                            'absolute top-4 right-4 z-10 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full',
                            'border border-white/30 bg-white/95 text-charcoal-600 shadow-md backdrop-blur-md transition-all',
                            'hover:scale-105 hover:border-rose-200 hover:bg-rose-50 hover:text-rose-600',
                            'dark:border-charcoal-600 dark:bg-charcoal-950/92 dark:text-zinc-300 dark:hover:border-rose-900 dark:hover:bg-rose-950/40 dark:hover:text-rose-400',
                          )}
                          aria-label={`Remove ${p.address} from loved properties`}
                        >
                          <Trash2 className="size-4 shrink-0" strokeWidth={1.75} aria-hidden />
                        </button>
                      </div>
                      <div className="flex flex-1 flex-col border-t border-charcoal-100/90 px-6 pt-6 pb-7 dark:border-charcoal-800/80">
                        <p className="font-serif text-[1.65rem] font-semibold tracking-tight text-sage-800 dark:text-sage-400">
                          {p.price}
                        </p>
                        <Link
                          to={`/listings/${p.id}`}
                          className="mt-1.5 text-lg font-semibold leading-snug text-charcoal-950 transition-colors hover:text-sage-700 dark:text-zinc-50 dark:hover:text-sage-400"
                        >
                          {p.address}
                        </Link>
                        <div className="mt-5 flex flex-wrap items-center gap-x-1 gap-y-2 text-sm text-charcoal-600 dark:text-zinc-400">
                          <span className="flex items-center gap-1.5 pr-1">
                            <Bed className="size-4 shrink-0 text-sage-600 opacity-80 dark:text-sage-500" aria-hidden />
                            <span className="font-medium text-charcoal-800 dark:text-zinc-200">{p.beds} beds</span>
                          </span>
                          <span className="text-charcoal-300 dark:text-charcoal-600" aria-hidden>
                            ·
                          </span>
                          <span className="flex items-center gap-1.5 px-1">
                            <Bath className="size-4 shrink-0 text-sage-600 opacity-80 dark:text-sage-500" aria-hidden />
                            <span className="font-medium text-charcoal-800 dark:text-zinc-200">{p.baths} baths</span>
                          </span>
                          <span className="text-charcoal-300 dark:text-charcoal-600" aria-hidden>
                            ·
                          </span>
                          <span className="flex items-center gap-1.5 pl-1">
                            <LayoutGrid className="size-4 shrink-0 text-sage-600 opacity-80 dark:text-sage-500" aria-hidden />
                            <span className="font-medium text-charcoal-800 dark:text-zinc-200">
                              {formatSqftDisplay(p.sqft)}
                            </span>
                          </span>
                        </div>
                        <Link
                          to={`/listings/${p.id}`}
                          className="group/cta mt-6 inline-flex w-fit items-center gap-2 text-sm font-semibold text-sage-700 transition-colors hover:text-sage-900 dark:text-sage-400 dark:hover:text-sage-300"
                        >
                          View listing
                          <span
                            className="inline-block transition-transform duration-300 group-hover/cta:translate-x-0.5"
                            aria-hidden
                          >
                            →
                          </span>
                        </Link>
                      </div>
                    </article>
                  </FadeInSection>
                ))}
              </div>

              <aside className={cn('lg:col-span-4', singleItem && 'lg:col-span-5')}>
                <FadeInSection delay={0.1} y={18}>
                  <div className={savedSummaryClass}>
                    <div
                      className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-sage-500/0 via-sage-500/70 to-sage-500/0 dark:via-sage-500/50"
                      aria-hidden
                    />
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-sage-100/90 text-sage-700 dark:bg-sage-950/50 dark:text-sage-400">
                        <Heart className="size-5" strokeWidth={1.75} aria-hidden />
                      </div>
                      <div>
                        <h2 className="font-serif text-xl font-semibold text-charcoal-950 dark:text-zinc-50">
                          Your shortlist
                        </h2>
                        <p className="mt-1 text-sm text-charcoal-500 dark:text-zinc-500">Private to this browser</p>
                      </div>
                    </div>
                    <div className="mt-8 border-y border-charcoal-100 py-6 dark:border-charcoal-800">
                      <p className="text-xs font-semibold tracking-wider text-charcoal-500 uppercase dark:text-zinc-500">
                        Saved homes
                      </p>
                      <p className="mt-2 font-serif text-4xl font-semibold tabular-nums text-charcoal-950 dark:text-zinc-50">
                        {count}
                      </p>
                      <p className="mt-1 text-sm text-charcoal-600 dark:text-zinc-400">
                        {count === 1 ? 'Property on your list' : 'Properties on your list'}
                      </p>
                    </div>
                    <div className="mt-6 space-y-3">
                      <Link
                        to="/contact"
                        className="flex w-full cursor-pointer items-center justify-center rounded-full bg-sage-500 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-sage-600 dark:bg-sage-600 dark:hover:bg-sage-500"
                      >
                        Discuss these homes
                      </Link>
                      <Link
                        to="/listings"
                        className="flex w-full cursor-pointer items-center justify-center rounded-full border border-charcoal-200/90 bg-white py-3.5 text-sm font-semibold text-charcoal-800 transition-colors hover:border-sage-300 hover:bg-sage-50/90 dark:border-charcoal-600 dark:bg-charcoal-900 dark:text-zinc-100 dark:hover:border-sage-500 dark:hover:bg-charcoal-800"
                      >
                        Keep browsing
                      </Link>
                    </div>
                    <ConfirmPopup
                      title="Clear all homes?"
                      message="Your loved listings will be removed on this device. You can add them again anytime."
                      onConfirm={clearLoved}
                      trigger={
                        <button
                          type="button"
                          className="mt-6 w-full cursor-pointer text-center text-sm font-medium text-charcoal-400 transition-colors hover:text-rose-600 dark:text-zinc-500 dark:hover:text-rose-400"
                        >
                          Clear all
                        </button>
                      }
                    />
                  </div>
                </FadeInSection>
              </aside>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
