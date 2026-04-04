import { Link } from 'react-router-dom'
import { Bath, Bed, Heart, LayoutGrid } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'

import { cn } from '@/lib/utils'
import { useLovedListings } from '@/context/LovedListingsContext'
import type { FeaturedProperty } from '@/pages/home/data'
import { ListingPropertyImage } from '@/pages/listings/components/ListingPropertyImage'

const cardSpring = { type: 'spring' as const, stiffness: 380, damping: 32, mass: 0.85 }

const cardVariants = {
  rest: { y: 0 },
  hover: {
    y: -12,
    transition: cardSpring,
  },
}

type FeaturedPropertyCardProps = {
  property: FeaturedProperty
}

export function FeaturedPropertyCard({ property: p }: FeaturedPropertyCardProps) {
  const { isLoved, toggleLoved } = useLovedListings()
  const saved = isLoved(p.id)
  const reduceMotion = useReducedMotion()

  return (
    <Link
      to={`/listings/${p.id}`}
      className="group block cursor-pointer rounded-2xl outline-none focus-visible:ring-2 focus-visible:ring-sage-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-50 dark:focus-visible:ring-offset-charcoal-950"
    >
      <motion.div
        variants={cardVariants}
        initial="rest"
        animate="rest"
        whileHover={reduceMotion ? undefined : 'hover'}
        className={cn(
          'relative mb-4 overflow-hidden rounded-2xl shadow-md shadow-charcoal-950/[0.06] ring-1 ring-charcoal-950/5',
          'transition-[box-shadow,ring-color] duration-450 ease-[cubic-bezier(0.22,1,0.36,1)]',
          'group-hover:shadow-2xl group-hover:shadow-charcoal-950/12 group-hover:ring-sage-400/25',
          'dark:shadow-black/25 dark:ring-white/10 dark:group-hover:shadow-black/45 dark:group-hover:ring-sage-500/30',
        )}
      >
        <div className="relative h-80 w-full overflow-hidden">
          <div
            className={cn(
              'relative h-full w-full origin-[center_40%] will-change-transform',
              'transition-[transform,filter] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]',
              'motion-reduce:transition-none motion-reduce:group-hover:scale-100 motion-reduce:group-hover:brightness-100',
              'group-hover:scale-[1.055] group-hover:brightness-[1.03]',
            )}
          >
            <ListingPropertyImage
              alt={p.address}
              src={p.image}
              className="h-full w-full object-cover object-top"
            />
          </div>
          <div
            className={cn(
              'pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent',
              'transition-opacity duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none',
              'opacity-[0.92] group-hover:opacity-100 motion-reduce:group-hover:opacity-[0.92]',
            )}
          />
          <button
            type="button"
            className={cn(
              'group/button absolute top-4 right-4 z-10 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full backdrop-blur-sm',
              'bg-white/90 transition-[transform,background-color,box-shadow] duration-300 hover:scale-110 hover:bg-white active:scale-95',
              'dark:bg-charcoal-900/90 dark:hover:bg-charcoal-800',
              saved && 'ring-2 ring-red-400/70 shadow-sm dark:ring-red-500/45',
            )}
            aria-label={saved ? 'Remove saved listing' : 'Save listing'}
            aria-pressed={saved}
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              toggleLoved(p.id)
            }}
          >
            <Heart
              className={cn(
                'size-5 transition-[color,fill,transform] duration-300 ease-out',
                saved
                  ? 'scale-110 fill-red-500 text-red-500 drop-shadow-sm'
                  : 'fill-transparent text-charcoal-700 group-hover/button:scale-105 dark:text-zinc-200',
              )}
            />
          </button>
          <div className="absolute bottom-6 left-6 text-white">
            <p className="mb-1 text-sm opacity-90">{p.address}</p>
            <p className="font-serif text-3xl font-bold">{p.price}</p>
          </div>
        </div>
        <div
          className={cn(
            'rounded-b-2xl bg-white px-6 py-5',
            'transition-colors duration-500 group-hover:bg-zinc-50/90',
            'dark:border-t dark:border-charcoal-800 dark:bg-charcoal-900/90 dark:group-hover:bg-charcoal-900',
          )}
        >
          <div className="flex items-center justify-between text-sm text-charcoal-600 transition-colors duration-500 group-hover:text-charcoal-700 dark:text-zinc-400 dark:group-hover:text-zinc-300">
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
            <span className="inline-block rounded-full bg-sage-50 px-3 py-1 text-xs font-medium text-sage-700 dark:bg-charcoal-800 dark:text-sage-500">
              {p.neighborhood}
            </span>
          </div>
        </div>
      </motion.div>
    </Link>
  )
}
