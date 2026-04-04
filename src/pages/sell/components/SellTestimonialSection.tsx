import { motion, useReducedMotion } from 'motion/react'

import { FadeInSection } from '@/components/motion'
import { SELL_STORY_AVATAR, SELL_STORY_IMAGE } from '@/pages/sell/sellData'

export function SellTestimonialSection() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="bg-[#F5F3EF] px-6 py-32 lg:px-8 dark:bg-charcoal-900">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-5">
          <FadeInSection className="lg:col-span-2">
            <motion.div
              whileHover={reduceMotion ? undefined : { scale: 1.02 }}
              transition={{ duration: 0.4 }}
              className="overflow-hidden rounded-3xl"
            >
              <img
                alt="Luxury home with sold sign"
                className="h-[500px] w-full object-cover object-top"
                src={SELL_STORY_IMAGE}
              />
            </motion.div>
          </FadeInSection>

          <FadeInSection delay={0.08} className="lg:col-span-3">
            <p className="mb-6 text-sm font-medium tracking-wider text-sage-600 uppercase dark:text-sage-400">
              Client Success Story
            </p>
            <h2 className="mb-8 font-serif text-3xl leading-tight font-semibold text-charcoal-950 sm:text-4xl dark:text-zinc-50">
              <span className="text-charcoal-950 dark:text-zinc-50">&quot;Exceeded Our Expectations</span>
              <br />
              <span className="text-charcoal-400 dark:text-charcoal-500">in Every Way&quot;</span>
            </h2>
            <p className="mb-10 text-xl leading-relaxed text-charcoal-600 italic dark:text-charcoal-300">
              &quot;Austin Luxury Realty exceeded every expectation. Their marketing was exceptional,
              and they secured multiple offers above asking price within the first week. The entire
              process was seamless and stress-free.&quot;
            </p>
            <div className="flex items-center gap-5">
              <img
                alt="Michael and Sarah Chen"
                className="size-16 rounded-full object-cover"
                src={SELL_STORY_AVATAR}
              />
              <div>
                <p className="text-lg font-semibold text-charcoal-950 dark:text-zinc-50">
                  Michael &amp; Sarah Chen
                </p>
                <p className="text-base text-charcoal-500 dark:text-charcoal-400">
                  Sold: $4.2M Estate, Westlake Hills
                </p>
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  )
}
