import type { Agent } from '@/pages/home/data'

type AgentCardProps = {
  agent: Agent
}

export function AgentCard({ agent: a }: AgentCardProps) {
  return (
    <div className="w-72 cursor-pointer">
      <div className="group mb-4 overflow-hidden rounded-2xl shadow-md ring-1 ring-charcoal-950/5 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl dark:ring-white/10">
        <div className="relative h-80 w-full">
          <img
            alt={a.name}
            className="h-full w-full object-cover object-top grayscale transition-all duration-300 group-hover:grayscale-0"
            src={a.image}
          />
        </div>
      </div>
      <div className="px-2">
        <h3 className="mb-1 font-serif text-xl font-bold text-charcoal-950 dark:text-zinc-50">
          {a.name}
        </h3>
        <p className="mb-2 text-sm text-charcoal-600 dark:text-zinc-400">{a.role}</p>
        <p className="text-xs text-charcoal-500 dark:text-zinc-500">{a.listings}</p>
      </div>
    </div>
  )
}
