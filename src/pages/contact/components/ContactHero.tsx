import { ChevronDown } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'

import { CONTACT_HERO_IMAGE } from '@/pages/contact/contactData'

const heroStats = [
  { value: '24/7', label: 'Availability' },
  { value: '<2hr', label: 'Response Time' },
  { value: '3', label: 'Office Locations' },
  { value: '20+', label: 'Expert Agents' },
] as const

export function ContactHero() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="relative flex min-h-[600px] h-[70vh] items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        {reduceMotion ? (
          <img
            alt="Austin Luxury Realty office interior with skyline views"
            className="h-full w-full object-cover object-center"
            src={CONTACT_HERO_IMAGE}
          />
        ) : (
          <motion.img
            alt="Austin Luxury Realty office interior with skyline views"
            className="h-full w-full object-cover object-center"
            src={CONTACT_HERO_IMAGE}
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 text-center lg:px-8">
        {reduceMotion ? (
          <HeroCopy />
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <HeroCopy />
          </motion.div>
        )}
      </div>

      <a
        href="#contact-consultation"
        className="absolute bottom-8 left-1/2 flex h-10 w-10 -translate-x-1/2 cursor-pointer items-center justify-center rounded-full border border-white/30 animate-bounce"
        aria-label="Scroll to contact form"
      >
        <ChevronDown className="size-5 text-white" aria-hidden />
      </a>
    </section>
  )
}

function HeroCopy() {
  return (
    <>
      <span className="mb-6 inline-block text-sm font-medium tracking-widest text-sage-400 uppercase">
        Get In Touch
      </span>
      <h1
        className="mb-6 font-serif text-5xl leading-tight font-semibold text-white md:text-6xl lg:text-7xl"
        style={{ textShadow: 'rgba(0, 0, 0, 0.35) 0px 2px 24px' }}
      >
        Let&apos;s Start Your
        <br />
        Real Estate Journey
      </h1>
      <p className="mx-auto mb-10 max-w-2xl text-xl text-white/80">
        Whether you&apos;re buying, selling, or simply exploring the Austin luxury market, our team is
        here to provide personalized guidance every step of the way.
      </p>
      <div className="flex flex-wrap justify-center gap-8 md:gap-16">
        {heroStats.map((s) => (
          <div key={s.label} className="text-center">
            <p className="mb-1 font-serif text-4xl font-semibold text-white">{s.value}</p>
            <p className="text-sm text-white/60">{s.label}</p>
          </div>
        ))}
      </div>
    </>
  )
}
