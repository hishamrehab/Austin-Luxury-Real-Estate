import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'motion/react'

import { NEIGHBORHOODS_CTA_IMAGE } from '@/pages/neighborhoods/neighborhoodsData'

export function NeighborhoodsFinalCtaSection() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="relative overflow-hidden px-6 py-28 lg:px-8">
      <div className="absolute inset-0">
        {reduceMotion ? (
          <img
            alt="Luxury living"
            className="h-full w-full object-cover object-center"
            src={NEIGHBORHOODS_CTA_IMAGE}
          />
        ) : (
          <motion.img
            alt="Luxury living"
            className="h-full w-full object-cover object-center"
            src={NEIGHBORHOODS_CTA_IMAGE}
            initial={{ scale: 1.06 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        {reduceMotion ? (
          <CtaCopy />
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <CtaCopy />
          </motion.div>
        )}
      </div>
    </section>
  )
}

function CtaCopy() {
  return (
    <>
      <h2
        className="mb-6 font-serif text-4xl font-semibold text-white md:text-5xl"
        style={{ textShadow: 'rgba(0, 0, 0, 0.3) 0px 2px 16px' }}
      >
        Ready to Find Your Austin Address?
      </h2>
      <p className="mx-auto mb-10 max-w-xl text-lg text-white/90">
        Our neighborhood specialists have deep local knowledge and exclusive access to off-market
        properties in every community.
      </p>
      <div className="flex flex-col justify-center gap-4 sm:flex-row">
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Link
            to="/listings"
            className="inline-block cursor-pointer rounded-full bg-white px-8 py-4 text-base font-medium whitespace-nowrap text-charcoal-950 transition-colors hover:bg-white/90"
          >
            Browse All Listings
          </Link>
        </motion.div>
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Link
            to="/contact"
            className="inline-block cursor-pointer rounded-full border-2 border-white bg-transparent px-8 py-4 text-base font-medium whitespace-nowrap text-white transition-colors hover:bg-white/10"
          >
            Schedule a Tour
          </Link>
        </motion.div>
      </div>
    </>
  )
}
