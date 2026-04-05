import { useCallback, useEffect, useState, type ReactNode } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { Link, Navigate, useParams } from 'react-router-dom'
import {
  ArrowLeft,
  ArrowRight,
  Bath,
  Bed,
  Calendar,
  Check,
  ChevronRight,
  GraduationCap,
  Heart,
  LayoutGrid,
  Mail,
  MapPin,
  Phone,
  Printer,
  Share2,
} from 'lucide-react'

import { FadeInSection } from '@/components/motion'
import { cn } from '@/lib/utils'
import { useLovedListings } from '@/context/LovedListingsContext'
import {
  getListingDetail,
  getRelatedListings,
  neighborhoodDetailIdFromName,
} from '@/pages/listings/listingsDetailData'
import { ListingCard } from '@/pages/listings/components/ListingCard'
import { ListingsCtaSection } from '@/pages/listings/components/ListingsCtaSection'
import { parsePriceUsd, parseSqft } from '@/pages/listings/listingsFilterUtils'

export function ListingDetailPage() {
  const { id } = useParams<{ id: string }>()
  const listing = id ? getListingDetail(id) : null
  const [activeIdx, setActiveIdx] = useState(0)
  const reduceMotion = useReducedMotion()
  const { isLoved, toggleLoved } = useLovedListings()
  const loved = listing ? isLoved(listing.id) : false

  useEffect(() => {
    setActiveIdx(0)
  }, [id])

  const shareListing = useCallback(async () => {
    const url = typeof window !== 'undefined' ? window.location.href : ''
    const title = listing?.address ?? 'Listing'
    try {
      if (navigator.share) {
        await navigator.share({ title, text: `View ${title}`, url })
        return
      }
      await navigator.clipboard.writeText(url)
    } catch {
      /* user cancelled or clipboard blocked */
    }
  }, [listing?.address])

  if (!listing) {
    return <Navigate to="/listings" replace />
  }

  const sqftNum = parseSqft(listing.sqft)
  const priceUsd = parsePriceUsd(listing.price)
  const pricePerSqft =
    sqftNum > 0 && priceUsd > 0 ? Math.round(priceUsd / sqftNum).toLocaleString() : null
  const mainImage = listing.gallery[activeIdx] ?? listing.gallery[0]
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(listing.mapQuery)}&output=embed`
  const neighborhoodPageId = neighborhoodDetailIdFromName(listing.neighborhood)
  const relatedListings = getRelatedListings(listing.id, 3)

  function focusHeroImage(idx: number) {
    setActiveIdx(idx)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <section id="listing-hero" className="relative">
        <div className="relative">
          <div className="relative h-[min(70vh,56rem)] w-full overflow-hidden">
            {reduceMotion ? (
              <img
                alt={listing.address}
                className="h-full w-full object-cover object-top"
                src={mainImage}
              />
            ) : (
              <AnimatePresence mode="wait">
                <motion.img
                  key={`${listing.id}-${activeIdx}`}
                  alt={listing.address}
                  className="absolute inset-0 h-full w-full object-cover object-top"
                  src={mainImage}
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                />
              </AnimatePresence>
            )}
            {/* Top scrim: listing hero is full-bleed under the fixed header; bright ceilings need contrast */}
            <div
              className="pointer-events-none absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-charcoal-950/45 via-charcoal-950/15 to-transparent md:h-44"
              aria-hidden
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" aria-hidden />
          </div>

          <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-3">
            {listing.gallery.map((src, i) => (
              <motion.button
                key={src}
                type="button"
                onClick={() => setActiveIdx(i)}
                whileHover={reduceMotion ? undefined : { scale: 1.06 }}
                whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                className={cn(
                  'h-14 w-20 cursor-pointer overflow-hidden rounded-lg border-2 transition-all',
                  i === activeIdx
                    ? 'scale-110 border-white'
                    : 'border-transparent opacity-70 hover:opacity-100',
                )}
                aria-label={`Show photo ${i + 1}`}
              >
                <img alt="" className="h-full w-full object-cover" src={src} />
              </motion.button>
            ))}
          </div>

          {reduceMotion ? (
            <Link
              to="/listings"
              className="absolute top-24 left-6 z-10 flex cursor-pointer items-center gap-2 rounded-full bg-white/92 px-4 py-2 text-charcoal-800 shadow-md backdrop-blur-sm transition-colors hover:bg-white dark:bg-charcoal-900/92 dark:text-zinc-100 dark:hover:bg-charcoal-900"
            >
              <ArrowLeft className="size-5 shrink-0" aria-hidden />
              <span className="text-sm font-medium">Back</span>
            </Link>
          ) : (
            <motion.div
              className="absolute top-24 left-6 z-10"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                to="/listings"
                className="flex cursor-pointer items-center gap-2 rounded-full bg-white/92 px-4 py-2 text-charcoal-800 shadow-md backdrop-blur-sm transition-colors hover:bg-white dark:bg-charcoal-900/92 dark:text-zinc-100 dark:hover:bg-charcoal-900"
              >
                <ArrowLeft className="size-5 shrink-0" aria-hidden />
                <span className="text-sm font-medium">Back</span>
              </Link>
            </motion.div>
          )}
        </div>
      </section>

      <section className="px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            <div className="space-y-12 lg:col-span-2">
              <FadeInSection>
                <div className="mb-4 flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-sage-100 px-3 py-1 text-sm font-medium text-sage-700 dark:bg-sage-900/40 dark:text-sage-300">
                    {listing.neighborhood}
                  </span>
                  <span className="rounded-full bg-charcoal-100 px-3 py-1 text-sm font-medium text-charcoal-700 dark:bg-charcoal-800 dark:text-charcoal-200">
                    {listing.styleLabel}
                  </span>
                </div>
                <h1 className="mb-4 font-serif text-4xl font-semibold text-charcoal-950 md:text-5xl dark:text-zinc-50">
                  {listing.address}
                </h1>
                <p className="font-serif text-5xl font-bold text-sage-600 dark:text-sage-400">
                  {listing.price}
                </p>
              </FadeInSection>

              <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
                <FadeInSection delay={0}>
                  <StatCard
                    icon={<Bed className="mx-auto size-8 text-sage-500" />}
                    value={String(listing.beds)}
                    label="Bedrooms"
                  />
                </FadeInSection>
                <FadeInSection delay={0.06}>
                  <StatCard
                    icon={<Bath className="mx-auto size-8 text-sage-500" />}
                    value={String(listing.baths)}
                    label="Bathrooms"
                  />
                </FadeInSection>
                <FadeInSection delay={0.12}>
                  <StatCard
                    icon={<LayoutGrid className="mx-auto size-8 text-sage-500" />}
                    value={sqftNum ? sqftNum.toLocaleString() : listing.sqft}
                    label="Sq Ft"
                  />
                </FadeInSection>
                <FadeInSection delay={0.18}>
                  <StatCard
                    icon={<Calendar className="mx-auto size-8 text-sage-500" />}
                    value={String(listing.yearBuilt)}
                    label="Year Built"
                  />
                </FadeInSection>
              </div>

              <FadeInSection>
                <h2 className="mb-4 font-serif text-2xl font-semibold text-charcoal-950 dark:text-zinc-50">
                  About This Property
                </h2>
                <p className="text-lg leading-relaxed text-charcoal-600 dark:text-charcoal-300">
                  {listing.about}
                </p>
                <p className="mt-6 text-lg leading-relaxed text-charcoal-600 dark:text-charcoal-300">
                  {listing.lifestyle}
                </p>
              </FadeInSection>

              <FadeInSection>
                <h2 className="mb-6 font-serif text-2xl font-semibold text-charcoal-950 dark:text-zinc-50">
                  Listing snapshot
                </h2>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  <FadeInSection delay={0}>
                    <SnapshotCard
                      label="Price / sq ft"
                      value={pricePerSqft ? `$${pricePerSqft}` : '—'}
                      hint={sqftNum ? 'Based on listed living area' : undefined}
                    />
                  </FadeInSection>
                  <FadeInSection delay={0.05}>
                    <SnapshotCard label="Annual property taxes" value={listing.annualTaxes} />
                  </FadeInSection>
                  <FadeInSection delay={0.1}>
                    <SnapshotCard label="HOA / community" value={listing.hoa} />
                  </FadeInSection>
                  <FadeInSection delay={0.15}>
                    <SnapshotCard label="MLS® # " value={listing.mlsNumber} mono />
                  </FadeInSection>
                </div>
                <p className="mt-4 text-sm text-charcoal-500 dark:text-charcoal-400">
                  Figures are representative for marketing purposes. Taxes, HOA, and school boundaries should be
                  verified with county records, the association, and{' '}
                  <Link to="/mls-disclaimer" className="text-sage-600 underline-offset-2 hover:underline dark:text-sage-400">
                    MLS sources
                  </Link>
                  .
                </p>
              </FadeInSection>

              <FadeInSection className="rounded-2xl bg-white p-6 dark:bg-charcoal-900 dark:ring-1 dark:ring-white/10">
                <div className="mb-3 flex items-center gap-2">
                  <GraduationCap className="size-6 text-sage-500" aria-hidden />
                  <h2 className="font-serif text-xl font-semibold text-charcoal-950 dark:text-zinc-50">
                    Schools
                  </h2>
                </div>
                <p className="text-charcoal-600 dark:text-charcoal-300">{listing.schoolDistrict}</p>
                <p className="mt-3 text-sm text-charcoal-500 dark:text-charcoal-400">
                  School assignments can change. Confirm enrollment eligibility with the district before making an
                  offer.
                </p>
              </FadeInSection>

              <FadeInSection>
                <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
                  <DetailFact label="Lot Size" value={listing.lotSize} />
                  <DetailFact label="Parking" value={listing.parking} />
                  <DetailFact label="Style" value={listing.styleLabel} />
                  <DetailFact label="Year Built" value={String(listing.yearBuilt)} />
                </div>
              </FadeInSection>

              <FadeInSection>
                <h2 className="mb-6 font-serif text-2xl font-semibold text-charcoal-950 dark:text-zinc-50">
                  Property Highlights
                </h2>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  {listing.highlights.map((item, i) => (
                    <FadeInSection key={item} delay={i * 0.04} y={12}>
                      <div className="flex items-center gap-3 rounded-xl bg-white p-4 dark:bg-charcoal-900 dark:ring-1 dark:ring-white/10">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sage-100 dark:bg-sage-900/40">
                          <Check className="size-5 text-sage-600 dark:text-sage-400" aria-hidden />
                        </div>
                        <span className="text-charcoal-700 dark:text-charcoal-200">{item}</span>
                      </div>
                    </FadeInSection>
                  ))}
                </div>
              </FadeInSection>

              <FadeInSection>
                <h2 className="mb-6 font-serif text-2xl font-semibold text-charcoal-950 dark:text-zinc-50">
                  Additional Features
                </h2>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  {listing.additionalFeatures.map((item, i) => (
                    <FadeInSection key={item} delay={i * 0.03} y={10}>
                      <div className="flex items-center gap-3">
                        <ChevronRight className="size-5 shrink-0 text-sage-500" aria-hidden />
                        <span className="text-charcoal-600 dark:text-charcoal-300">{item}</span>
                      </div>
                    </FadeInSection>
                  ))}
                </div>
              </FadeInSection>

              <FadeInSection className="rounded-2xl bg-sage-50 p-8 dark:bg-sage-950/25 dark:ring-1 dark:ring-sage-800/40">
                <h2 className="mb-4 font-serif text-2xl font-semibold text-charcoal-950 dark:text-zinc-50">
                  About {listing.neighborhood}
                </h2>
                <p className="mb-6 text-lg leading-relaxed text-charcoal-700 dark:text-charcoal-200">
                  {listing.neighborhoodStory}
                </p>
                <div className="flex flex-wrap gap-4">
                  {neighborhoodPageId ? (
                    reduceMotion ? (
                      <Link
                        to={`/neighborhoods/${neighborhoodPageId}`}
                        className="inline-flex items-center gap-2 rounded-full bg-sage-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-sage-700 dark:bg-sage-500 dark:hover:bg-sage-400"
                      >
                        Neighborhood guide
                        <ArrowRight className="size-4" aria-hidden />
                      </Link>
                    ) : (
                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Link
                          to={`/neighborhoods/${neighborhoodPageId}`}
                          className="inline-flex items-center gap-2 rounded-full bg-sage-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-sage-700 dark:bg-sage-500 dark:hover:bg-sage-400"
                        >
                          Neighborhood guide
                          <ArrowRight className="size-4" aria-hidden />
                        </Link>
                      </motion.div>
                    )
                  ) : null}
                  {reduceMotion ? (
                    <Link
                      to="/neighborhoods"
                      className="inline-flex items-center gap-2 rounded-full border border-sage-300 bg-white px-5 py-2.5 text-sm font-medium text-charcoal-800 transition-colors hover:bg-white/90 dark:border-sage-700 dark:bg-charcoal-900 dark:text-zinc-100 dark:hover:bg-charcoal-800"
                    >
                      All communities
                    </Link>
                  ) : (
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Link
                        to="/neighborhoods"
                        className="inline-flex items-center gap-2 rounded-full border border-sage-300 bg-white px-5 py-2.5 text-sm font-medium text-charcoal-800 transition-colors hover:bg-white/90 dark:border-sage-700 dark:bg-charcoal-900 dark:text-zinc-100 dark:hover:bg-charcoal-800"
                      >
                        All communities
                      </Link>
                    </motion.div>
                  )}
                </div>
              </FadeInSection>

              <FadeInSection>
                <h2 className="mb-6 font-serif text-2xl font-semibold text-charcoal-950 dark:text-zinc-50">
                  Nearby
                </h2>
                <ul className="space-y-3">
                  {listing.nearbyHighlights.map((item, i) => (
                    <li key={item} className="text-charcoal-700 dark:text-charcoal-300">
                      <FadeInSection delay={i * 0.04} y={8} className="flex items-start gap-3">
                        <MapPin className="mt-0.5 size-5 shrink-0 text-sage-500" aria-hidden />
                        <span>{item}</span>
                      </FadeInSection>
                    </li>
                  ))}
                </ul>
              </FadeInSection>

              <FadeInSection>
                <h2 className="mb-6 font-serif text-2xl font-semibold text-charcoal-950 dark:text-zinc-50">
                  Photo gallery
                </h2>
                <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
                  {listing.gallery.map((src, i) => (
                    <FadeInSection key={src} delay={i * 0.04} y={14}>
                      <motion.button
                        type="button"
                        onClick={() => focusHeroImage(i)}
                        whileHover={reduceMotion ? undefined : { scale: 1.02 }}
                        whileTap={reduceMotion ? undefined : { scale: 0.99 }}
                        className={cn(
                          'relative aspect-[4/3] w-full cursor-pointer overflow-hidden rounded-xl ring-2 transition-all hover:opacity-95',
                          i === activeIdx
                            ? 'ring-sage-500'
                            : 'ring-transparent hover:ring-sage-300 dark:hover:ring-sage-600',
                        )}
                        aria-label={`Open photo ${i + 1} in hero viewer`}
                      >
                        <img alt="" className="h-full w-full object-cover" src={src} />
                      </motion.button>
                    </FadeInSection>
                  ))}
                </div>
                <p className="mt-4 text-sm text-charcoal-500 dark:text-charcoal-400">
                  Select a photo to preview it in the hero above.
                </p>
              </FadeInSection>

              <FadeInSection>
                <h2 className="mb-6 font-serif text-2xl font-semibold text-charcoal-950 dark:text-zinc-50">
                  Location
                </h2>
                <div className="overflow-hidden rounded-2xl bg-white dark:bg-charcoal-900 dark:ring-1 dark:ring-white/10">
                  <iframe
                    src={mapSrc}
                    width="100%"
                    height={400}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Property location"
                    className="w-full border-0"
                  />
                </div>
              </FadeInSection>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <FadeInSection
                  delay={0.05}
                  className="rounded-2xl bg-white p-6 shadow-sm dark:bg-charcoal-900 dark:shadow-none dark:ring-1 dark:ring-white/10"
                >
                  <div className="mb-6 flex items-center gap-4">
                    <img
                      alt={listing.agent.name}
                      className="h-16 w-16 rounded-full object-cover"
                      src={listing.agent.image}
                    />
                    <div>
                      <p className="font-semibold text-charcoal-950 dark:text-zinc-50">
                        {listing.agent.name}
                      </p>
                      <p className="text-sm text-charcoal-500 dark:text-charcoal-400">
                        {listing.agent.role}
                      </p>
                    </div>
                  </div>
                  <div className="mb-6 space-y-3">
                    <a
                      href={`tel:${listing.agent.phoneTel}`}
                      className="flex cursor-pointer items-center gap-3 text-charcoal-600 transition-colors hover:text-sage-600 dark:text-charcoal-300 dark:hover:text-sage-400"
                    >
                      <Phone className="size-5 shrink-0" aria-hidden />
                      <span>{listing.agent.phoneDisplay}</span>
                    </a>
                    <a
                      href={`mailto:${listing.agent.email}`}
                      className="flex cursor-pointer items-center gap-3 text-charcoal-600 transition-colors hover:text-sage-600 dark:text-charcoal-300 dark:hover:text-sage-400"
                    >
                      <Mail className="size-5 shrink-0" aria-hidden />
                      <span>{listing.agent.email}</span>
                    </a>
                  </div>
                  {reduceMotion ? (
                    <Link
                      to="/contact"
                      className="flex w-full cursor-pointer items-center justify-center rounded-xl bg-sage-500 py-4 font-medium whitespace-nowrap text-white transition-colors hover:bg-sage-600 dark:bg-sage-600 dark:hover:bg-sage-500"
                    >
                      Request Information
                    </Link>
                  ) : (
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Link
                        to="/contact"
                        className="flex w-full cursor-pointer items-center justify-center rounded-xl bg-sage-500 py-4 font-medium whitespace-nowrap text-white transition-colors hover:bg-sage-600 dark:bg-sage-600 dark:hover:bg-sage-500"
                      >
                        Request Information
                      </Link>
                    </motion.div>
                  )}
                </FadeInSection>

                <FadeInSection
                  delay={0.1}
                  className="rounded-2xl bg-charcoal-950 p-6 text-white dark:bg-black dark:ring-1 dark:ring-white/10"
                >
                  <h3 className="mb-3 font-serif text-xl font-semibold">Schedule a Tour</h3>
                  <p className="mb-6 text-sm text-charcoal-300">
                    Experience this exceptional property in person with a private showing.
                  </p>
                  {reduceMotion ? (
                    <Link
                      to="/contact"
                      className="flex w-full cursor-pointer items-center justify-center rounded-xl bg-white py-4 font-medium whitespace-nowrap text-charcoal-950 transition-colors hover:bg-charcoal-100"
                    >
                      Book Private Tour
                    </Link>
                  ) : (
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Link
                        to="/contact"
                        className="flex w-full cursor-pointer items-center justify-center rounded-xl bg-white py-4 font-medium whitespace-nowrap text-charcoal-950 transition-colors hover:bg-charcoal-100"
                      >
                        Book Private Tour
                      </Link>
                    </motion.div>
                  )}
                </FadeInSection>

                <FadeInSection delay={0.14} className="flex gap-3">
                  <motion.button
                    type="button"
                    onClick={() => toggleLoved(listing.id)}
                    whileHover={reduceMotion ? undefined : { scale: 1.02 }}
                    whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                    className="flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-xl bg-white py-3 text-charcoal-600 transition-colors hover:bg-charcoal-50 dark:bg-charcoal-900 dark:text-charcoal-300 dark:hover:bg-charcoal-800"
                    aria-pressed={loved}
                  >
                    <Heart
                      className={cn('size-5 shrink-0', loved && 'fill-rose-500 text-rose-500')}
                      aria-hidden
                    />
                    <span className="text-sm">{loved ? 'Loved' : 'Love'}</span>
                  </motion.button>
                  <motion.button
                    type="button"
                    onClick={() => void shareListing()}
                    whileHover={reduceMotion ? undefined : { scale: 1.02 }}
                    whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                    className="flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-xl bg-white py-3 text-charcoal-600 transition-colors hover:bg-charcoal-50 dark:bg-charcoal-900 dark:text-charcoal-300 dark:hover:bg-charcoal-800"
                  >
                    <Share2 className="size-5 shrink-0" aria-hidden />
                    <span className="text-sm">Share</span>
                  </motion.button>
                  <motion.button
                    type="button"
                    onClick={() => window.print()}
                    whileHover={reduceMotion ? undefined : { scale: 1.02 }}
                    whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                    className="flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-xl bg-white py-3 text-charcoal-600 transition-colors hover:bg-charcoal-50 dark:bg-charcoal-900 dark:text-charcoal-300 dark:hover:bg-charcoal-800"
                  >
                    <Printer className="size-5 shrink-0" aria-hidden />
                    <span className="text-sm">Print</span>
                  </motion.button>
                </FadeInSection>
              </div>
            </div>
          </div>

          <div className="mt-20 border-t border-charcoal-200 pt-16 dark:border-white/10">
            <FadeInSection className="mb-10">
              <h2 className="font-serif text-3xl font-semibold text-charcoal-950 dark:text-zinc-50">
                Similar properties
              </h2>
            </FadeInSection>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {relatedListings.map((p, i) => (
                <FadeInSection key={p.id} delay={i * 0.07} y={18}>
                  <ListingCard property={p} layout="grid" />
                </FadeInSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ListingsCtaSection />
    </>
  )
}

function StatCard({
  icon,
  value,
  label,
}: {
  icon: ReactNode
  value: string
  label: string
}) {
  return (
    <div className="rounded-2xl bg-white p-6 text-center dark:bg-charcoal-900 dark:ring-1 dark:ring-white/10">
      <div className="mb-2 flex justify-center">{icon}</div>
      <p className="font-serif text-2xl font-bold text-charcoal-950 dark:text-zinc-50">{value}</p>
      <p className="text-sm text-charcoal-500 dark:text-charcoal-400">{label}</p>
    </div>
  )
}

function DetailFact({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="mb-1 text-sm text-charcoal-500 dark:text-charcoal-400">{label}</p>
      <p className="font-semibold text-charcoal-950 dark:text-zinc-50">{value}</p>
    </div>
  )
}

function SnapshotCard({
  label,
  value,
  hint,
  mono,
}: {
  label: string
  value: string
  hint?: string
  mono?: boolean
}) {
  return (
    <div className="rounded-2xl border border-charcoal-100 bg-white p-5 dark:border-white/10 dark:bg-charcoal-900">
      <p className="mb-2 text-xs font-medium tracking-wide text-charcoal-500 uppercase dark:text-charcoal-400">
        {label}
      </p>
      <p
        className={cn(
          'text-base font-semibold text-charcoal-950 dark:text-zinc-50',
          mono && 'font-mono text-sm tracking-tight',
        )}
      >
        {value}
      </p>
      {hint ? <p className="mt-2 text-xs text-charcoal-500 dark:text-charcoal-400">{hint}</p> : null}
    </div>
  )
}
