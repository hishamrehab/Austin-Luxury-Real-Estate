import { useCallback, useEffect, useState, type ReactNode } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import {
  ArrowLeft,
  Bath,
  Bed,
  Calendar,
  Check,
  ChevronRight,
  Heart,
  LayoutGrid,
  Mail,
  Phone,
  Printer,
  Share2,
} from 'lucide-react'

import { cn } from '@/lib/utils'
import { getListingDetail } from '@/pages/listings/listingsDetailData'
import { parseSqft } from '@/pages/listings/listingsFilterUtils'

export function ListingDetailPage() {
  const { id } = useParams<{ id: string }>()
  const listing = id ? getListingDetail(id) : null
  const [activeIdx, setActiveIdx] = useState(0)
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    setActiveIdx(0)
    setSaved(false)
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
  const mainImage = listing.gallery[activeIdx] ?? listing.gallery[0]
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(listing.mapQuery)}&output=embed`

  return (
    <>
      <section className="pt-20">
        <div className="relative">
          <div className="relative h-[70vh] w-full">
            <img
              alt={listing.address}
              className="h-full w-full object-cover object-top"
              src={mainImage}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          </div>

          <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-3">
            {listing.gallery.map((src, i) => (
              <button
                key={src}
                type="button"
                onClick={() => setActiveIdx(i)}
                className={cn(
                  'h-14 w-20 cursor-pointer overflow-hidden rounded-lg border-2 transition-all',
                  i === activeIdx
                    ? 'scale-110 border-white'
                    : 'border-transparent opacity-70 hover:opacity-100',
                )}
                aria-label={`Show photo ${i + 1}`}
              >
                <img alt="" className="h-full w-full object-cover" src={src} />
              </button>
            ))}
          </div>

          <Link
            to="/listings"
            className="absolute top-6 left-6 flex cursor-pointer items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-charcoal-800 backdrop-blur-sm transition-colors hover:bg-white dark:bg-charcoal-900/90 dark:text-zinc-100 dark:hover:bg-charcoal-900"
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
              </div>

              <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
                <StatCard
                  icon={<Bed className="mx-auto size-8 text-sage-500" />}
                  value={String(listing.beds)}
                  label="Bedrooms"
                />
                <StatCard
                  icon={<Bath className="mx-auto size-8 text-sage-500" />}
                  value={String(listing.baths)}
                  label="Bathrooms"
                />
                <StatCard
                  icon={<LayoutGrid className="mx-auto size-8 text-sage-500" />}
                  value={sqftNum ? sqftNum.toLocaleString() : listing.sqft}
                  label="Sq Ft"
                />
                <StatCard
                  icon={<Calendar className="mx-auto size-8 text-sage-500" />}
                  value={String(listing.yearBuilt)}
                  label="Year Built"
                />
              </div>

              <div>
                <h2 className="mb-4 font-serif text-2xl font-semibold text-charcoal-950 dark:text-zinc-50">
                  About This Property
                </h2>
                <p className="text-lg leading-relaxed text-charcoal-600 dark:text-charcoal-300">
                  {listing.about}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
                <DetailFact label="Lot Size" value={listing.lotSize} />
                <DetailFact label="Parking" value={listing.parking} />
                <DetailFact label="Style" value={listing.styleLabel} />
                <DetailFact label="Year Built" value={String(listing.yearBuilt)} />
              </div>

              <div>
                <h2 className="mb-6 font-serif text-2xl font-semibold text-charcoal-950 dark:text-zinc-50">
                  Property Highlights
                </h2>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  {listing.highlights.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-xl bg-white p-4 dark:bg-charcoal-900 dark:ring-1 dark:ring-white/10"
                    >
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sage-100 dark:bg-sage-900/40">
                        <Check className="size-5 text-sage-600 dark:text-sage-400" aria-hidden />
                      </div>
                      <span className="text-charcoal-700 dark:text-charcoal-200">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="mb-6 font-serif text-2xl font-semibold text-charcoal-950 dark:text-zinc-50">
                  Additional Features
                </h2>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  {listing.additionalFeatures.map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <ChevronRight className="size-5 shrink-0 text-sage-500" aria-hidden />
                      <span className="text-charcoal-600 dark:text-charcoal-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
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
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="rounded-2xl bg-white p-6 shadow-sm dark:bg-charcoal-900 dark:shadow-none dark:ring-1 dark:ring-white/10">
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
                  <Link
                    to="/contact"
                    className="flex w-full cursor-pointer items-center justify-center rounded-xl bg-sage-500 py-4 font-medium whitespace-nowrap text-white transition-colors hover:bg-sage-600 dark:bg-sage-600 dark:hover:bg-sage-500"
                  >
                    Request Information
                  </Link>
                </div>

                <div className="rounded-2xl bg-charcoal-950 p-6 text-white dark:bg-black dark:ring-1 dark:ring-white/10">
                  <h3 className="mb-3 font-serif text-xl font-semibold">Schedule a Tour</h3>
                  <p className="mb-6 text-sm text-charcoal-300">
                    Experience this exceptional property in person with a private showing.
                  </p>
                  <Link
                    to="/contact"
                    className="flex w-full cursor-pointer items-center justify-center rounded-xl bg-white py-4 font-medium whitespace-nowrap text-charcoal-950 transition-colors hover:bg-charcoal-100"
                  >
                    Book Private Tour
                  </Link>
                </div>

                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setSaved((s) => !s)}
                    className="flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-xl bg-white py-3 text-charcoal-600 transition-colors hover:bg-charcoal-50 dark:bg-charcoal-900 dark:text-charcoal-300 dark:hover:bg-charcoal-800"
                  >
                    <Heart
                      className={cn('size-5 shrink-0', saved && 'fill-rose-500 text-rose-500')}
                      aria-hidden
                    />
                    <span className="text-sm">{saved ? 'Saved' : 'Save'}</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => void shareListing()}
                    className="flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-xl bg-white py-3 text-charcoal-600 transition-colors hover:bg-charcoal-50 dark:bg-charcoal-900 dark:text-charcoal-300 dark:hover:bg-charcoal-800"
                  >
                    <Share2 className="size-5 shrink-0" aria-hidden />
                    <span className="text-sm">Share</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => window.print()}
                    className="flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-xl bg-white py-3 text-charcoal-600 transition-colors hover:bg-charcoal-50 dark:bg-charcoal-900 dark:text-charcoal-300 dark:hover:bg-charcoal-800"
                  >
                    <Printer className="size-5 shrink-0" aria-hidden />
                    <span className="text-sm">Print</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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
