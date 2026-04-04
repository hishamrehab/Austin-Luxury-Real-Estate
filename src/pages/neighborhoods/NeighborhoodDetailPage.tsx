import { useCallback, useEffect, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import {
  ArrowLeft,
  ArrowRight,
  Footprints,
  Heart,
  Home,
  MapPin,
  Share2,
  GraduationCap,
} from 'lucide-react'

import { cn } from '@/lib/utils'
import { useLovedNeighborhoods } from '@/context/LovedNeighborhoodsContext'
import { getNeighborhoodDetail } from '@/pages/neighborhoods/neighborhoodDetailData'
import { NEIGHBORHOOD_IMAGE_FALLBACK } from '@/pages/neighborhoods/neighborhoodImageUrls'

export function NeighborhoodDetailPage() {
  const { id } = useParams<{ id: string }>()
  const neighborhood = id ? getNeighborhoodDetail(id) : null
  const [activeIdx, setActiveIdx] = useState(0)
  const { isLoved, toggleLoved } = useLovedNeighborhoods()
  const loved = neighborhood ? isLoved(neighborhood.id) : false

  useEffect(() => {
    setActiveIdx(0)
  }, [id])

  const sharePage = useCallback(async () => {
    const url = typeof window !== 'undefined' ? window.location.href : ''
    const title = neighborhood?.name ?? 'Neighborhood'
    try {
      if (navigator.share) {
        await navigator.share({ title, text: `Explore ${title}`, url })
        return
      }
      await navigator.clipboard.writeText(url)
    } catch {
      /* noop */
    }
  }, [neighborhood?.name])

  if (!neighborhood) {
    return <Navigate to="/neighborhoods" replace />
  }

  const mainImage = neighborhood.gallery[activeIdx] ?? neighborhood.gallery[0]
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(neighborhood.mapQuery)}&output=embed`

  return (
    <>
      <section className="pt-20">
        <div className="relative bg-charcoal-950">
          <div className="relative aspect-[21/9] min-h-[min(70vh,720px)] w-full max-h-[85vh] sm:aspect-[2/1] md:min-h-[520px]">
            <NeighborhoodHeroImage
              key={`${neighborhood.id}-${activeIdx}`}
              alt={neighborhood.imageAlt}
              src={mainImage}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-black/25" />
          </div>

          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent pt-20 pb-5 md:pt-24 md:pb-8">
            <div className="mx-auto flex w-full max-w-5xl flex-wrap justify-center gap-3 px-4 sm:gap-4">
              {neighborhood.gallery.map((src, i) => (
                <button
                  key={`${neighborhood.id}-thumb-${i}`}
                  type="button"
                  onClick={() => setActiveIdx(i)}
                  className={cn(
                    'relative h-16 w-28 shrink-0 cursor-pointer overflow-hidden rounded-xl border-2 bg-charcoal-900 shadow-lg transition-all sm:h-[4.5rem] sm:w-36 md:h-20 md:w-44',
                    i === activeIdx
                      ? 'z-10 scale-[1.03] border-white ring-2 ring-white/40'
                      : 'border-white/20 opacity-80 hover:border-white/50 hover:opacity-100',
                  )}
                  aria-label={`Show image ${i + 1}`}
                  aria-current={i === activeIdx ? 'true' : undefined}
                >
                  <NeighborhoodThumbImage src={src} />
                </button>
              ))}
            </div>
          </div>

          <Link
            to="/neighborhoods"
            className="absolute top-5 left-5 z-20 flex cursor-pointer items-center gap-2 rounded-full bg-white/95 px-4 py-2.5 text-charcoal-800 shadow-md backdrop-blur-sm transition-colors hover:bg-white md:top-7 md:left-7 dark:bg-charcoal-900/95 dark:text-zinc-100 dark:hover:bg-charcoal-900"
          >
            <ArrowLeft className="size-5 shrink-0" aria-hidden />
            <span className="text-sm font-medium">Back</span>
          </Link>
        </div>
      </section>

      <section className="px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            <div className="space-y-12 lg:col-span-2">
              <div>
                <p className="mb-2 text-sm font-medium tracking-wider text-sage-600 uppercase dark:text-sage-400">
                  {neighborhood.eyebrow}
                </p>
                <div className="mb-4 flex flex-wrap gap-2">
                  {neighborhood.badges.map((b) => (
                    <span
                      key={b}
                      className="rounded-full bg-sage-100 px-3 py-1 text-sm font-medium text-sage-700 dark:bg-sage-900/40 dark:text-sage-300"
                    >
                      {b}
                    </span>
                  ))}
                </div>
                <h1 className="mb-4 font-serif text-4xl font-semibold text-charcoal-950 md:text-5xl dark:text-zinc-50">
                  {neighborhood.name}
                </h1>
                <div className="flex flex-wrap items-center gap-6 text-charcoal-600 dark:text-charcoal-300">
                  <span className="font-serif text-2xl font-bold text-sage-600 dark:text-sage-400">
                    {neighborhood.fromPrice}
                  </span>
                  <span className="text-charcoal-400 dark:text-charcoal-500">|</span>
                  <span className="flex items-center gap-2">
                    <Home className="size-5 text-sage-500" aria-hidden />
                    <span className="font-medium text-charcoal-950 dark:text-zinc-50">
                      {neighborhood.listings} active listings
                    </span>
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                {neighborhood.stats.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-2xl bg-white p-5 text-center shadow-sm dark:bg-charcoal-900 dark:shadow-none dark:ring-1 dark:ring-white/10"
                  >
                    <p className="mb-1 text-xs text-charcoal-500 dark:text-charcoal-400">{s.label}</p>
                    <p className="font-serif text-lg font-bold text-charcoal-950 dark:text-zinc-50">
                      {s.value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="grid gap-6 sm:grid-cols-3">
                <div className="flex items-start gap-3 rounded-2xl bg-white p-5 dark:bg-charcoal-900 dark:ring-1 dark:ring-white/10">
                  <Footprints className="mt-0.5 size-5 shrink-0 text-sage-500" aria-hidden />
                  <div>
                    <p className="text-xs text-charcoal-500 dark:text-charcoal-400">Walk Score</p>
                    <p className="font-semibold text-charcoal-950 dark:text-zinc-50">
                      {neighborhood.walkScore}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-2xl bg-white p-5 dark:bg-charcoal-900 dark:ring-1 dark:ring-white/10">
                  <MapPin className="mt-0.5 size-5 shrink-0 text-sage-500" aria-hidden />
                  <div>
                    <p className="text-xs text-charcoal-500 dark:text-charcoal-400">Typical lot</p>
                    <p className="font-semibold text-charcoal-950 dark:text-zinc-50">
                      {neighborhood.lotSize}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-2xl bg-white p-5 dark:bg-charcoal-900 dark:ring-1 dark:ring-white/10">
                  <GraduationCap className="mt-0.5 size-5 shrink-0 text-sage-500" aria-hidden />
                  <div>
                    <p className="text-xs text-charcoal-500 dark:text-charcoal-400">Schools</p>
                    <p className="font-semibold text-charcoal-950 dark:text-zinc-50">
                      {neighborhood.schools}
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="mb-4 font-serif text-2xl font-semibold text-charcoal-950 dark:text-zinc-50">
                  About this community
                </h2>
                <p className="text-lg leading-relaxed text-charcoal-600 dark:text-charcoal-300">
                  {neighborhood.about}
                </p>
              </div>

              <div>
                <h2 className="mb-4 font-serif text-2xl font-semibold text-charcoal-950 dark:text-zinc-50">
                  Lifestyle & amenities
                </h2>
                <div className="flex flex-wrap gap-2">
                  {neighborhood.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-charcoal-200 bg-white px-3.5 py-1.5 text-xs font-semibold text-charcoal-800 dark:border-charcoal-600 dark:bg-charcoal-900 dark:text-zinc-100"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="mb-4 font-serif text-2xl font-semibold text-charcoal-950 dark:text-zinc-50">
                  Location
                </h2>
                <div className="overflow-hidden rounded-2xl bg-white shadow-sm dark:bg-charcoal-900 dark:ring-1 dark:ring-white/10">
                  <iframe
                    src={mapSrc}
                    width="100%"
                    height={400}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Map of ${neighborhood.name}`}
                    className="w-full border-0"
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="rounded-2xl bg-charcoal-950 p-6 text-white dark:bg-black dark:ring-1 dark:ring-white/10">
                  <h3 className="mb-2 font-serif text-xl font-semibold">View homes</h3>
                  <p className="mb-6 text-sm text-charcoal-300">
                    Browse luxury listings and schedule a private tour in {neighborhood.name}.
                  </p>
                  <Link
                    to="/listings"
                    className="mb-3 flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-sage-500 py-4 font-medium text-white transition-colors hover:bg-sage-600 dark:bg-sage-600 dark:hover:bg-sage-500"
                  >
                    Search listings
                    <ArrowRight className="size-4 shrink-0" aria-hidden />
                  </Link>
                  <Link
                    to="/contact"
                    className="flex w-full cursor-pointer items-center justify-center rounded-xl border border-white/25 bg-white/10 py-4 font-medium text-white transition-colors hover:bg-white/15"
                  >
                    Talk to a specialist
                  </Link>
                </div>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <button
                    type="button"
                    onClick={() => toggleLoved(neighborhood.id)}
                    className={cn(
                      'flex w-full cursor-pointer items-center justify-center gap-2 rounded-2xl py-4 text-sm font-medium shadow-sm transition-colors',
                      'bg-white text-charcoal-700 hover:bg-charcoal-50',
                      'dark:bg-charcoal-900 dark:text-charcoal-200 dark:hover:bg-charcoal-800 dark:ring-1 dark:ring-white/10',
                      loved && 'ring-2 ring-rose-400/60 dark:ring-rose-500/45',
                    )}
                    aria-pressed={loved}
                  >
                    <Heart
                      className={cn('size-5 shrink-0', loved && 'fill-rose-500 text-rose-500')}
                      aria-hidden
                    />
                    {loved ? 'Loved' : 'Love'}
                  </button>
                  <button
                    type="button"
                    onClick={() => void sharePage()}
                    className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-2xl bg-white py-4 text-sm font-medium text-charcoal-700 shadow-sm transition-colors hover:bg-charcoal-50 dark:bg-charcoal-900 dark:text-charcoal-200 dark:hover:bg-charcoal-800 dark:ring-1 dark:ring-white/10"
                  >
                    <Share2 className="size-5 shrink-0" aria-hidden />
                    Share
                  </button>
                </div>
                <Link
                  to="/saved-neighborhoods"
                  className="block w-full text-center text-sm text-charcoal-500 underline-offset-2 hover:text-sage-600 hover:underline dark:text-zinc-500 dark:hover:text-sage-400"
                >
                  View all loved neighborhoods
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function NeighborhoodHeroImage({ src, alt }: { src: string; alt: string }) {
  const [resolved, setResolved] = useState(src)

  useEffect(() => {
    setResolved(src)
  }, [src])

  return (
    <img
      alt={alt}
      src={resolved}
      width={2400}
      height={1350}
      decoding="async"
      fetchPriority="high"
      sizes="100vw"
      className="absolute inset-0 h-full w-full object-cover object-center"
      onError={() => setResolved(NEIGHBORHOOD_IMAGE_FALLBACK)}
    />
  )
}

function NeighborhoodThumbImage({ src }: { src: string }) {
  const [resolved, setResolved] = useState(src)

  useEffect(() => {
    setResolved(src)
  }, [src])

  return (
    <img
      alt=""
      src={resolved}
      width={352}
      height={200}
      loading="lazy"
      decoding="async"
      className="h-full w-full object-cover object-center"
      onError={() => setResolved(NEIGHBORHOOD_IMAGE_FALLBACK)}
    />
  )
}
