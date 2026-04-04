import { ChevronDown } from 'lucide-react'

import { cn } from '@/lib/utils'
import { specialtyFilters, type SpecialtyFilterId } from '@/pages/agents/agentsData'

type AgentsDirectorySpecialtyFiltersProps = {
  value: SpecialtyFilterId
  onChange: (next: SpecialtyFilterId) => void
}

export function AgentsDirectorySpecialtyFilters({
  value,
  onChange,
}: AgentsDirectorySpecialtyFiltersProps) {
  return (
    <div className="min-w-0 flex-1">
      <label htmlFor="agents-specialty-mobile" className="sr-only">
        Filter by specialty
      </label>
      <div className="relative md:hidden">
        <select
          id="agents-specialty-mobile"
          value={value}
          onChange={(e) => onChange(e.target.value as SpecialtyFilterId)}
          className="h-12 w-full cursor-pointer appearance-none rounded-xl bg-charcoal-950/[0.035] py-2 pr-11 pl-4 text-[15px] text-charcoal-950 transition-[background-color,box-shadow] focus:bg-charcoal-950/[0.055] focus:shadow-[0_4px_20px_rgba(0,0,0,0.08)] focus:outline-none dark:bg-white/[0.06] dark:text-zinc-100 dark:focus:bg-white/[0.09]"
        >
          {specialtyFilters.map((f) => (
            <option key={f.id} value={f.id}>
              {f.label}
            </option>
          ))}
        </select>
        <ChevronDown
          className="pointer-events-none absolute top-1/2 right-3.5 size-4 -translate-y-1/2 text-charcoal-400 dark:text-charcoal-500"
          aria-hidden
        />
      </div>

      <div className="hidden md:block">
        <div
          role="toolbar"
          aria-label="Filter by specialty"
          className="scrollbar-x-theme -mx-1 flex flex-nowrap items-center gap-x-2.5 overflow-x-auto px-1 py-0.5 pb-3 sm:gap-x-3 sm:pr-2"
        >
          {specialtyFilters.map((f) => {
            const active = value === f.id
            return (
              <button
                key={f.id}
                type="button"
                onClick={() => onChange(f.id)}
                aria-pressed={active}
                className={cn(
                  'shrink-0 cursor-pointer rounded-full px-4 py-2.5 text-[15px] leading-tight whitespace-nowrap transition-[background-color,color,box-shadow] focus-visible:ring-2 focus-visible:ring-sage-500/50 focus-visible:ring-offset-2 focus-visible:outline-none dark:focus-visible:ring-offset-charcoal-900',
                  active
                    ? 'bg-sage-600 font-medium text-white shadow-[0_2px_12px_rgba(22,101,52,0.25)] dark:bg-sage-500 dark:shadow-[0_2px_16px_rgba(34,197,94,0.2)]'
                    : 'text-charcoal-600 hover:bg-charcoal-950/[0.06] hover:text-charcoal-950 dark:text-charcoal-400 dark:hover:bg-white/[0.08] dark:hover:text-zinc-100',
                )}
              >
                {f.label}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
