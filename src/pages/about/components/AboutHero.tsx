import { ChevronDown } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'

import { ABOUT_HERO_IMAGE, aboutHeroStats } from '@/pages/about/aboutData'

export function AboutHero() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="relative min-h-[100dvh] overflow-hidden">
      <div className="absolute inset-0 min-h-[100dvh]">
        {reduceMotion ? (
          <img
            alt="Austin Luxury Realty office interior with skyline views"
            className="h-full min-h-[100dvh] w-full object-cover object-top"
            src={ABOUT_HERO_IMAGE}
          />
        ) : (
          <motion.img
            alt="Austin Luxury Realty office interior with skyline views"
            className="h-full min-h-[100dvh] w-full object-cover object-top"
            src={ABOUT_HERO_IMAGE}
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
      </div>

      <div className="relative z-10 flex min-h-[100dvh] flex-col">
        <div className="flex flex-1 flex-col items-center justify-center px-6 pt-24 pb-8 text-center sm:pt-28">
          <div className="mx-auto w-full max-w-5xl">
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
        </div>

        <div className="shrink-0 border-t border-white/20 bg-white/10 backdrop-blur-md pb-[max(1.5rem,env(safe-area-inset-bottom))]">
          <div className="mx-auto max-w-7xl px-6 py-6 sm:py-8 lg:px-8">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
              {aboutHeroStats.map((s) => (
                <div key={s.label} className="text-center">
                  <p className="mb-1 font-serif text-3xl font-semibold text-white">{s.value}</p>
                  <p className="text-sm text-white/70">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function HeroCopy() {
  return (
    <>
      <p className="mb-6 text-sm font-medium tracking-[3px] text-white/70 uppercase">About Us</p>
      <h1
        className="mb-6 font-serif text-6xl leading-tight font-semibold text-white md:text-7xl"
        style={{ textShadow: 'rgba(0, 0, 0, 0.3) 0px 2px 20px' }}
      >
        Redefining Luxury
        <br />
        Real Estate in Austin
      </h1>
      <p className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-white/85">
        For over two decades, we have curated exceptional properties and delivered unparalleled
        service to Austin&apos;s most discerning clients.
      </p>
      <a
        href="#our-story"
        className="inline-flex cursor-pointer items-center gap-2 rounded-full border-2 border-white px-8 py-4 text-base font-medium whitespace-nowrap text-white transition-all hover:bg-white/10"
      >
        Discover Our Story
        <ChevronDown className="size-5 shrink-0" aria-hidden />
      </a>
    </>
  )
}
