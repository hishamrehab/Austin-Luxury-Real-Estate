import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'motion/react'

import { AGENTS_CTA_IMAGE } from '@/pages/agents/agentsData'

export function AgentsFinalCtaSection() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="relative overflow-hidden py-32">
      <div className="absolute inset-0">
        {reduceMotion ? (
          <img
            alt="Austin Hill Country at sunset"
            className="h-full w-full object-cover"
            src={AGENTS_CTA_IMAGE}
          />
        ) : (
          <motion.img
            alt="Austin Hill Country at sunset"
            className="h-full w-full object-cover"
            src={AGENTS_CTA_IMAGE}
            initial={{ scale: 1.06 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1] }}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950/80 via-charcoal-950/60 to-charcoal-950/80" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center lg:px-8">
        <h2 className="mb-6 font-serif text-4xl text-white md:text-5xl">
          Ready to Find Your Dream Home?
        </h2>
        <p className="mx-auto mb-10 max-w-2xl text-xl text-white/80">
          Connect with one of our expert agents today and take the first step toward your luxury
          real estate goals.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            to="/listings"
            className="inline-block cursor-pointer rounded-full bg-white px-8 py-4 font-medium whitespace-nowrap text-charcoal-950 transition-colors hover:bg-charcoal-50"
          >
            Browse Listings
          </Link>
          <Link
            to="/sell"
            className="inline-block cursor-pointer rounded-full bg-sage-500 px-8 py-4 font-medium whitespace-nowrap text-white transition-colors hover:bg-sage-600 dark:bg-sage-600 dark:hover:bg-sage-500"
          >
            Get Home Valuation
          </Link>
        </div>
      </div>
    </section>
  )
}
