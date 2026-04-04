import { Link } from 'react-router-dom'
import { ArrowRight, Award, Globe, Home, ShieldCheck, Star } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'

import { CONTACT_CTA_IMAGE } from '@/pages/contact/contactData'

const trustItems = [
  { icon: ShieldCheck, label: 'Licensed & Insured' },
  { icon: Award, label: 'Top 1% Nationwide' },
  { icon: Star, label: '4.9 Star Rating' },
  { icon: Globe, label: 'Global Network' },
] as const

export function ContactFinalCtaSection() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="relative overflow-hidden py-32">
      <div className="absolute inset-0">
        {reduceMotion ? (
          <img
            alt="Austin Hill Country at sunset"
            className="h-full w-full object-cover object-center"
            src={CONTACT_CTA_IMAGE}
          />
        ) : (
          <motion.img
            alt="Austin Hill Country at sunset"
            className="h-full w-full object-cover object-center"
            src={CONTACT_CTA_IMAGE}
            initial={{ scale: 1.06 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950/80 via-charcoal-950/60 to-charcoal-950/80" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 text-center lg:px-8">
        {reduceMotion ? (
          <CtaInner />
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <CtaInner />
          </motion.div>
        )}
      </div>
    </section>
  )
}

function CtaInner() {
  return (
    <>
      <h2 className="mb-6 font-serif text-4xl font-semibold text-white md:text-5xl">
        Ready to Find Your Dream Home?
      </h2>
      <p className="mx-auto mb-10 max-w-2xl text-xl text-white/80">
        Let our expert team guide you through Austin&apos;s most exclusive properties. Your perfect
        home is waiting.
      </p>
      <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
        <Link
          to="/listings"
          className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-sage-500 px-8 py-4 font-medium whitespace-nowrap text-white transition-colors hover:bg-sage-600 dark:bg-sage-600 dark:hover:bg-sage-500"
        >
          Browse Listings
          <ArrowRight className="size-5 shrink-0" aria-hidden />
        </Link>
        <Link
          to="/sell"
          className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-white/30 bg-white/10 px-8 py-4 font-medium whitespace-nowrap text-white backdrop-blur-sm transition-colors hover:bg-white/20"
        >
          Get Home Valuation
          <Home className="size-5 shrink-0" aria-hidden />
        </Link>
      </div>
      <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-white/60">
        {trustItems.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-2">
            <Icon className="size-5 shrink-0" aria-hidden />
            <span className="text-sm">{label}</span>
          </div>
        ))}
      </div>
    </>
  )
}
