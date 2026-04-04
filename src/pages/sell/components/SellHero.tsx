import { motion, useReducedMotion } from 'motion/react'

import { SELL_HERO_IMAGE } from '@/pages/sell/sellData'

export function SellHero() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="relative flex h-screen items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        {reduceMotion ? (
          <img
            alt="Luxury home exterior at golden hour"
            className="h-full w-full object-cover object-center"
            src={SELL_HERO_IMAGE}
          />
        ) : (
          <motion.img
            alt="Luxury home exterior at golden hour"
            className="h-full w-full object-cover object-center"
            src={SELL_HERO_IMAGE}
            initial={{ scale: 1.06 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.35, ease: [0.22, 1, 0.36, 1] }}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-5xl px-6 text-center">
        {reduceMotion ? (
          <HeroContent />
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
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
      <p className="mb-6 text-sm font-medium tracking-widest text-white/80 uppercase">
        Seller Services
      </p>
      <h1
        className="mb-8 font-serif text-5xl leading-tight font-semibold text-white md:text-6xl lg:text-7xl"
        style={{ textShadow: 'rgba(0, 0, 0, 0.3) 0px 2px 20px' }}
      >
        Sell Your Luxury Home
        <br />
        With Confidence
      </h1>
      <p className="mx-auto mb-12 max-w-2xl text-lg text-white/90">
        Expert guidance, premium marketing, and proven results for Austin&apos;s most distinguished
        properties
      </p>
      <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <a
            href="#valuation"
            className="inline-block cursor-pointer rounded-full bg-white px-8 py-4 text-base font-medium whitespace-nowrap text-charcoal-950 transition-colors hover:bg-white/90"
          >
            Get Your Home Valuation
          </a>
        </motion.div>
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <a
            href="#process"
            className="inline-block cursor-pointer rounded-full border-2 border-white bg-transparent px-8 py-4 text-base font-medium whitespace-nowrap text-white transition-colors hover:bg-white/10"
          >
            View Our Process
          </a>
        </motion.div>
      </div>
    </>
  )
}
