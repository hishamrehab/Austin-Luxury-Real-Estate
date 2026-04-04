import { ChevronDown } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'

import { AGENTS_HERO_IMAGE } from '@/pages/agents/agentsData'

const heroStats = [
  { value: '20', label: 'Expert Agents' },
  { value: '2,500+', label: 'Homes Sold' },
  { value: '$2.8B+', label: 'Total Sales Volume' },
  { value: '4.9', label: 'Average Rating' },
] as const

export function AgentsHero() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="relative h-[70vh] min-h-[600px] overflow-hidden">
      <div className="absolute inset-0">
        {reduceMotion ? (
          <img
            alt="Austin Luxury Realty office interior with skyline views"
            className="h-full w-full object-cover object-center"
            src={AGENTS_HERO_IMAGE}
          />
        ) : (
          <motion.img
            alt="Austin Luxury Realty office interior with skyline views"
            className="h-full w-full object-cover object-center"
            src={AGENTS_HERO_IMAGE}
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
      </div>

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        {reduceMotion ? (
          <HeroCopy />
        ) : (
          <motion.div
            className="max-w-4xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <HeroCopy />
          </motion.div>
        )}
      </div>

      <div className="absolute right-0 bottom-0 left-0 bg-white/95 backdrop-blur-sm dark:bg-charcoal-950/95">
        <div className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {heroStats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="mb-1 font-serif text-3xl text-charcoal-950 dark:text-zinc-50">{s.value}</p>
                <p className="text-sm text-charcoal-500 dark:text-zinc-400">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function HeroCopy() {
  return (
    <>
      <p className="mb-4 text-sm font-medium tracking-widest text-sage-400 uppercase">Our Team</p>
      <h1
        className="mb-6 max-w-4xl font-serif text-5xl text-white md:text-6xl lg:text-7xl"
        style={{ textShadow: 'rgba(0, 0, 0, 0.35) 0px 2px 24px' }}
      >
        Meet Your Luxury Real Estate Experts
      </h1>
      <p className="mx-auto mb-10 max-w-2xl text-xl text-white/80">
        20 dedicated professionals with unparalleled expertise in Austin&apos;s most prestigious
        neighborhoods
      </p>
      <a
        href="#agents"
        className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-sage-500 px-8 py-4 font-medium whitespace-nowrap text-white transition-all hover:bg-sage-600 dark:bg-sage-600 dark:hover:bg-sage-500"
      >
        View All Agents
        <ChevronDown className="size-5 shrink-0" aria-hidden />
      </a>
    </>
  )
}
