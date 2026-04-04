import { Mail, Phone, Star } from 'lucide-react'

import type { DirectoryAgent } from '@/pages/agents/agentsData'

type DirectoryAgentCardProps = {
  agent: DirectoryAgent
  onContact: () => void
}

export function DirectoryAgentCard({ agent, onContact }: DirectoryAgentCardProps) {
  return (
    <div className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-500 hover:shadow-xl dark:bg-charcoal-900 dark:ring-1 dark:ring-white/10">
      <div className="relative h-80 overflow-hidden">
        <img
          alt={agent.name}
          className="h-full w-full scale-100 object-cover object-top transition-transform duration-700 group-hover:scale-105"
          src={agent.image}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/90 via-charcoal-950/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <div className="absolute right-0 bottom-0 left-0 p-6">
            <p className="mb-4 text-sm leading-relaxed text-white/90">{agent.bio}</p>
            <div className="flex items-center gap-3">
              <a
                href={`tel:${agent.phone.replace(/\D/g, '')}`}
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-colors hover:bg-white/30"
                aria-label={`Call ${agent.name}`}
              >
                <Phone className="size-5" />
              </a>
              <a
                href={`mailto:${agent.email}`}
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-colors hover:bg-white/30"
                aria-label={`Email ${agent.name}`}
              >
                <Mail className="size-5" />
              </a>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  onContact()
                }}
                className="flex h-10 flex-1 cursor-pointer items-center justify-center rounded-full bg-sage-500 text-sm font-medium text-white transition-colors hover:bg-sage-600 dark:bg-sage-600 dark:hover:bg-sage-500"
              >
                Contact Agent
              </button>
            </div>
          </div>
        </div>
        <div className="absolute top-4 right-4 flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 backdrop-blur-sm dark:bg-charcoal-900/95">
          <Star className="size-4 fill-amber-400 text-amber-400" aria-hidden />
          <span className="text-sm font-medium text-charcoal-900 dark:text-zinc-100">
            {agent.rating}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="mb-1 font-serif text-xl text-charcoal-950 dark:text-zinc-50">{agent.name}</h3>
        <p className="mb-4 text-sm font-medium text-sage-600 dark:text-sage-400">{agent.role}</p>
        <div className="mb-5 flex flex-wrap gap-2">
          {agent.specialties.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-charcoal-50 px-3 py-1 text-xs font-medium text-charcoal-600 dark:bg-charcoal-800 dark:text-zinc-300"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between border-t border-charcoal-100 pt-5 dark:border-charcoal-800">
          <div className="text-center">
            <p className="font-serif text-lg text-charcoal-950 dark:text-zinc-50">
              {agent.activeListings}
            </p>
            <p className="text-xs text-charcoal-500 dark:text-zinc-500">Active Listings</p>
          </div>
          <div className="h-10 w-px bg-charcoal-100 dark:bg-charcoal-800" />
          <div className="text-center">
            <p className="font-serif text-lg text-charcoal-950 dark:text-zinc-50">
              {agent.propertiesSold}
            </p>
            <p className="text-xs text-charcoal-500 dark:text-zinc-500">Properties Sold</p>
          </div>
          <div className="h-10 w-px bg-charcoal-100 dark:bg-charcoal-800" />
          <div className="text-center">
            <p className="font-serif text-lg text-charcoal-950 dark:text-zinc-50">
              {agent.salesVolume}
            </p>
            <p className="text-xs text-charcoal-500 dark:text-zinc-500">Sales Volume</p>
          </div>
        </div>
      </div>
    </div>
  )
}
