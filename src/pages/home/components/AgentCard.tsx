import { cn } from '@/lib/utils'
import type { Agent } from '@/pages/home/data'

type AgentCardProps = {
  agent: Agent
  className?: string
}

export function AgentCard({ agent: a, className }: AgentCardProps) {
  return (
    <div className={cn('mx-auto w-full max-w-[18rem] cursor-pointer select-none', className)}>
      <div className="group mb-4 overflow-hidden rounded-2xl bg-charcoal-100/40 shadow-md ring-1 ring-charcoal-950/[0.06] transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl dark:bg-zinc-800/40 dark:ring-white/10">
        <div className="relative aspect-[4/5] w-full overflow-hidden">
          <img
            alt={a.name}
            className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
            decoding="async"
            loading="lazy"
            src={a.image}
          />
        </div>
      </div>
      <div className="px-1">
        <h3 className="mb-1 font-serif text-xl font-bold text-charcoal-950 dark:text-zinc-50">
          {a.name}
        </h3>
        <p className="mb-1.5 text-sm leading-snug text-charcoal-600 dark:text-zinc-400">{a.role}</p>
        <p className="text-xs text-charcoal-500 dark:text-zinc-500">{a.listings}</p>
      </div>
    </div>
  )
}
