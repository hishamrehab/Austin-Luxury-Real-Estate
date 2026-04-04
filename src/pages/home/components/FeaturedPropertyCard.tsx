import { Link } from 'react-router-dom'
import { Bath, Bed, Heart, LayoutGrid } from 'lucide-react'

import type { FeaturedProperty } from '@/pages/home/data'
import { ListingPropertyImage } from '@/pages/listings/components/ListingPropertyImage'

type FeaturedPropertyCardProps = {
  property: FeaturedProperty
}

export function FeaturedPropertyCard({ property: p }: FeaturedPropertyCardProps) {
  return (
    <Link to={`/listings/${p.id}`} className="group block cursor-pointer">
      <div className="relative mb-4 overflow-hidden rounded-2xl shadow-sm ring-1 ring-charcoal-950/5 transition-transform duration-300 group-hover:-translate-y-2 dark:ring-white/10">
        <div className="relative h-80 w-full">
          <ListingPropertyImage
            alt={p.address}
            src={p.image}
            className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
          <button
            type="button"
            className="absolute top-4 right-4 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white/90 backdrop-blur-sm transition-colors hover:bg-white dark:bg-charcoal-900/90 dark:hover:bg-charcoal-800"
            aria-label="Save listing"
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
            }}
          >
            <Heart className="size-5 text-charcoal-700 dark:text-zinc-200" />
          </button>
          <div className="absolute bottom-6 left-6 text-white">
            <p className="mb-1 text-sm opacity-90">{p.address}</p>
            <p className="font-serif text-3xl font-bold">{p.price}</p>
          </div>
        </div>
        <div className="rounded-b-2xl bg-white px-6 py-5 dark:border-t dark:border-charcoal-800 dark:bg-charcoal-900/90">
          <div className="flex items-center justify-between text-sm text-charcoal-600 dark:text-zinc-400">
            <div className="flex items-center gap-1">
              <Bed className="size-4 shrink-0" />
              <span>{p.beds} Beds</span>
            </div>
            <span className="text-charcoal-300 dark:text-charcoal-600">•</span>
            <div className="flex items-center gap-1">
              <Bath className="size-4 shrink-0" />
              <span>{p.baths} Baths</span>
            </div>
            <span className="text-charcoal-300 dark:text-charcoal-600">•</span>
            <div className="flex items-center gap-1">
              <LayoutGrid className="size-4 shrink-0" />
              <span>{p.sqft}</span>
            </div>
          </div>
          <div className="mt-3 border-t border-charcoal-100 pt-3 dark:border-charcoal-800">
            <span className="inline-block rounded-full bg-sage-50 px-3 py-1 text-xs font-medium text-sage-700 dark:bg-charcoal-800 dark:text-sage-300">
              {p.neighborhood}
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}
