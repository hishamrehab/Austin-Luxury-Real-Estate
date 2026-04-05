import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'motion/react'

import { FadeInSection } from '@/components/motion'

export function ListingsCtaSection() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="bg-sage-50 px-6 py-20 lg:px-8 dark:bg-charcoal-900/60">
      <div className="mx-auto max-w-4xl text-center">
        <FadeInSection>
          <h2 className="mb-4 font-serif text-4xl font-semibold text-charcoal-950 dark:text-zinc-50">
            Can&apos;t Find What You&apos;re Looking For?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-charcoal-600 dark:text-zinc-400">
            Our team has access to exclusive off-market properties and upcoming listings. Let us help you find your
            perfect home.
          </p>
        </FadeInSection>
        <FadeInSection className="flex flex-col justify-center gap-4 sm:flex-row" delay={0.1}>
          {reduceMotion ? (
            <>
              <Link
                to="/contact"
                className="cursor-pointer rounded-xl bg-sage-500 px-8 py-4 font-medium whitespace-nowrap text-white transition-colors hover:bg-sage-600 dark:bg-sage-600 dark:hover:bg-sage-500"
              >
                Contact an Agent
              </Link>
              <Link
                to="/sell"
                className="cursor-pointer rounded-xl bg-white px-8 py-4 font-medium whitespace-nowrap text-charcoal-700 transition-colors hover:bg-charcoal-50 dark:bg-charcoal-800 dark:text-zinc-100 dark:hover:bg-charcoal-700"
              >
                Sell Your Property
              </Link>
            </>
          ) : (
            <>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to="/contact"
                  className="inline-block cursor-pointer rounded-xl bg-sage-500 px-8 py-4 font-medium whitespace-nowrap text-white transition-colors hover:bg-sage-600 dark:bg-sage-600 dark:hover:bg-sage-500"
                >
                  Contact an Agent
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to="/sell"
                  className="inline-block cursor-pointer rounded-xl bg-white px-8 py-4 font-medium whitespace-nowrap text-charcoal-700 transition-colors hover:bg-charcoal-50 dark:bg-charcoal-800 dark:text-zinc-100 dark:hover:bg-charcoal-700"
                >
                  Sell Your Property
                </Link>
              </motion.div>
            </>
          )}
        </FadeInSection>
      </div>
    </section>
  )
}
