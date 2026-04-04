import { ArrowRight, Mail, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'

import { directoryAgents } from '@/pages/agents/agentsData'

const leadership = directoryAgents.slice(0, 4)

export function AboutLeadershipSection() {
  return (
    <section className="px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <div className="mb-6 flex items-center justify-center gap-3">
            <div className="size-2 rounded-full bg-sage-500" />
            <p className="text-sm font-medium tracking-wider text-sage-600 uppercase dark:text-sage-400">
              Our Leadership
            </p>
          </div>
          <h2 className="mb-4 font-serif text-5xl font-semibold text-charcoal-950 dark:text-zinc-50">
            Meet the Team Behind the Vision
          </h2>
          <p className="mx-auto max-w-xl text-base text-charcoal-600 dark:text-charcoal-300">
            Expertise backed by passion, integrity, and a deep love for Austin
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {leadership.map((agent) => (
            <div key={agent.id} className="group cursor-pointer">
              <div className="relative mb-5 h-80 w-full overflow-hidden rounded-2xl">
                <img
                  alt={agent.name}
                  className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  src={agent.image}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute right-4 bottom-4 left-4 flex translate-y-4 items-center gap-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <a
                    href={`mailto:${agent.email}`}
                    className="flex size-9 items-center justify-center rounded-full bg-white/90 transition-colors hover:bg-white"
                    rel="nofollow"
                    aria-label={`Email ${agent.name}`}
                  >
                    <Mail className="size-4 text-charcoal-800" />
                  </a>
                  <a
                    href={`tel:${agent.phone.replace(/\s/g, '')}`}
                    className="flex size-9 items-center justify-center rounded-full bg-white/90 transition-colors hover:bg-white"
                    rel="nofollow"
                    aria-label={`Call ${agent.name}`}
                  >
                    <Phone className="size-4 text-charcoal-800" />
                  </a>
                </div>
              </div>
              <h3 className="mb-1 font-serif text-lg font-semibold text-charcoal-950 dark:text-zinc-50">
                {agent.name}
              </h3>
              <p className="mb-2 text-xs font-medium tracking-wider text-sage-600 uppercase dark:text-sage-400">
                {agent.role}
              </p>
              <p className="text-sm leading-relaxed text-charcoal-500 dark:text-charcoal-400">
                {agent.bio}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link
            to="/agents"
            className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-charcoal-950 px-8 py-4 text-base font-medium whitespace-nowrap text-white transition-colors hover:bg-charcoal-900 dark:bg-zinc-100 dark:text-charcoal-950 dark:hover:bg-white"
          >
            View All 20 Agents
            <ArrowRight className="size-5 shrink-0" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  )
}
