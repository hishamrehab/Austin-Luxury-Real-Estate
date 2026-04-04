import { Link } from 'react-router-dom'
import { motion } from 'motion/react'

import { FadeInSection } from '@/components/motion'
import { sellAdvisors } from '@/pages/sell/sellData'
import { SellAdvisorCard } from '@/pages/sell/components/SellAdvisorCard'

export function SellAdvisorsSection() {
  return (
    <section className="px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <FadeInSection className="mb-16 text-center">
          <p className="mb-4 text-sm font-medium tracking-wider text-sage-600 uppercase dark:text-sage-400">
            Meet Your Advisor
          </p>
          <h2 className="mb-6 font-serif text-4xl font-semibold text-charcoal-950 sm:text-5xl dark:text-zinc-50">
            Work With Austin&apos;s Best
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-charcoal-600 dark:text-charcoal-400">
            Our luxury specialists bring decades of experience and an unmatched network to every
            transaction
          </p>
        </FadeInSection>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {sellAdvisors.map((a, i) => (
            <SellAdvisorCard key={a.email} {...a} index={i} />
          ))}
        </div>

        <FadeInSection className="mt-12 text-center" delay={0.1}>
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link
              to="/agents"
              className="inline-block cursor-pointer rounded-full bg-charcoal-950 px-8 py-4 text-base font-medium whitespace-nowrap text-white transition-colors hover:bg-charcoal-900 dark:bg-zinc-100 dark:text-charcoal-950 dark:hover:bg-white"
            >
              View All Agents
            </Link>
          </motion.div>
        </FadeInSection>
      </div>
    </section>
  )
}
