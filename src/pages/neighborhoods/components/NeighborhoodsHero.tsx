import { motion, useReducedMotion } from 'motion/react'

import { NEIGHBORHOODS_HERO_IMAGE } from '@/pages/neighborhoods/neighborhoodsData'

export function NeighborhoodsHero() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="relative">
      <div className="relative h-[55vh] w-full overflow-hidden">
        {reduceMotion ? (
          <img
            alt="Austin Luxury Neighborhoods"
            className="h-full w-full object-cover object-center"
            src={NEIGHBORHOODS_HERO_IMAGE}
          />
        ) : (
          <motion.img
            alt="Austin Luxury Neighborhoods"
            className="h-full w-full object-cover object-center"
            src={NEIGHBORHOODS_HERO_IMAGE}
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-black/50" />
        <div className="absolute inset-0 flex w-full items-center justify-center">
          <div className="mx-auto w-full max-w-4xl px-6 text-center">
            {reduceMotion ? (
              <HeroCopy />
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <HeroCopy />
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

function HeroCopy() {
  return (
    <>
      <p className="mb-4 text-sm font-medium tracking-widest text-white/80 uppercase">
        Explore Austin&apos;s Finest Communities
      </p>
      <h1
        className="mb-6 font-serif text-5xl font-semibold text-white md:text-7xl"
        style={{ textShadow: 'rgba(0, 0, 0, 0.3) 0px 2px 20px' }}
      >
        Premier Neighborhoods
      </h1>
      <p className="mx-auto max-w-2xl text-lg text-white/90">
        From lakefront estates to hilltop retreats, discover the distinctive communities that define
        luxury living in Austin
      </p>
    </>
  )
}
