import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'motion/react'

import { HERO_IMAGE } from '@/pages/home/data'

export function HeroSection() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="relative flex h-screen items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        {reduceMotion ? (
          <img
            alt="Austin skyline"
            className="h-full w-full object-cover object-center"
            src={HERO_IMAGE}
          />
        ) : (
          <motion.img
            alt="Austin skyline"
            className="h-full w-full object-cover object-center"
            src={HERO_IMAGE}
            initial={{ scale: 1.06 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.35, ease: [0.22, 1, 0.36, 1] }}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/25 to-black/40" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        {reduceMotion ? (
          <HeroContent />
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <HeroContent />
          </motion.div>
        )}
      </div>
    </section>
  )
}

function HeroContent() {
  return (
    <>
      <h2
        className="mb-8 font-serif text-5xl leading-tight font-semibold text-white sm:text-6xl md:text-7xl lg:text-8xl"
        style={{ textShadow: 'rgba(0, 0, 0, 0.35) 0px 2px 24px' }}
      >
        Austin&apos;s Most Distinguished
        <br />
        Real Estate Experience
      </h2>
      <p className="mx-auto mb-12 max-w-2xl text-lg text-white/90">
        Discover exceptional luxury properties with Austin&apos;s premier brokerage, featuring
        exclusive MLS listings and 20 expert agents dedicated to your success
      </p>
      <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
        <Link
          to="/listings"
          className="cursor-pointer rounded-full bg-white px-8 py-4 text-base font-medium whitespace-nowrap text-charcoal-950 shadow-lg shadow-black/15 transition-all hover:bg-white/95 hover:shadow-xl dark:bg-zinc-100 dark:text-charcoal-950 dark:hover:bg-white"
        >
          Explore Listings
        </Link>
        <Link
          to="/contact"
          className="cursor-pointer rounded-full border-2 border-white/90 bg-white/5 px-8 py-4 text-base font-medium whitespace-nowrap text-white backdrop-blur-[2px] transition-all hover:border-white hover:bg-white/15"
        >
          Schedule Consultation
        </Link>
      </div>
    </>
  )
}
