import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'motion/react'

import { SELL_CTA_IMAGE } from '@/pages/sell/sellData'

export function SellFinalCtaSection() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="relative overflow-hidden px-6 py-40 lg:px-8">
      <div className="absolute inset-0">
        {reduceMotion ? (
          <img
            alt="Luxury pool at sunset"
            className="h-full w-full object-cover object-center"
            src={SELL_CTA_IMAGE}
          />
        ) : (
          <motion.img
            alt="Luxury pool at sunset"
            className="h-full w-full object-cover object-center"
            initial={{ scale: 1.08 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            src={SELL_CTA_IMAGE}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        {reduceMotion ? (
          <CtaContent />
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <CtaContent />
          </motion.div>
        )}
      </div>
    </section>
  )
}

function CtaContent() {
  return (
    <>
      <h2 className="mb-8 font-serif text-4xl leading-tight font-semibold text-white md:text-5xl lg:text-6xl">
        Ready to Sell Your
        <br />
        Luxury Property?
      </h2>
      <p className="mx-auto mb-12 max-w-2xl text-lg text-white/90">
        Connect with our luxury property specialists for a confidential market evaluation and
        personalized selling strategy
      </p>
      <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <a
            href="#valuation"
            className="inline-block cursor-pointer rounded-full bg-white px-8 py-4 text-base font-medium whitespace-nowrap text-charcoal-950 transition-colors hover:bg-white/90"
          >
            Get Your Free Valuation
          </a>
        </motion.div>
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Link
            to="/contact"
            className="inline-block cursor-pointer rounded-full border-2 border-white bg-transparent px-8 py-4 text-base font-medium whitespace-nowrap text-white transition-colors hover:bg-white/10"
          >
            Schedule Consultation
          </Link>
        </motion.div>
      </div>
    </>
  )
}
