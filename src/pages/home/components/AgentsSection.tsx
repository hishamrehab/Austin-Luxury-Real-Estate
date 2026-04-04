import { Link } from 'react-router-dom'

import { FadeInSection } from '@/components/motion'
import { agents } from '@/pages/home/data'
import { AgentCard } from './AgentCard'

const marqueeAgents = [...agents, ...agents]

export function AgentsSection() {
  return (
    <section className="overflow-x-hidden px-6 py-28 sm:py-36 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <FadeInSection className="mb-12 text-center sm:mb-16">
          <p className="mb-3 text-sm font-medium tracking-[0.2em] text-sage-600 uppercase dark:text-sage-400">
            Meet Our Team
          </p>
          <h3 className="font-serif text-4xl font-semibold tracking-tight text-charcoal-950 sm:text-5xl dark:text-zinc-50">
            {agents.length} Expert Agents
          </h3>
          <p className="mx-auto mt-4 max-w-lg text-sm text-charcoal-600 dark:text-zinc-400">
            Trusted advisors across Austin&apos;s premier neighborhoods — browse a few of our specialists below.
          </p>
        </FadeInSection>

        <FadeInSection delay={0.06} className="relative left-1/2 w-screen -translate-x-1/2">
          <div
            className="home-agents-marquee-wrap relative overflow-hidden py-2"
            aria-label="Agent team highlights"
          >
            <div className="home-agents-marquee-track flex w-max gap-5">
              {marqueeAgents.map((a, i) => (
                <AgentCard
                  key={`${a.name}-${i}`}
                  agent={a}
                  className="w-[min(17rem,calc(100vw-4rem))] max-w-none shrink-0 mx-0 sm:w-[17rem]"
                />
              ))}
            </div>
          </div>
        </FadeInSection>

        <FadeInSection className="mt-10 text-center sm:mt-12" delay={0.12}>
          <Link
            to="/agents"
            className="inline-flex cursor-pointer items-center justify-center rounded-full bg-charcoal-950 px-8 py-3.5 text-base font-medium text-white transition-colors hover:bg-charcoal-900 dark:bg-zinc-100 dark:text-charcoal-950 dark:hover:bg-white"
          >
            View All Agents
          </Link>
        </FadeInSection>
      </div>
    </section>
  )
}
