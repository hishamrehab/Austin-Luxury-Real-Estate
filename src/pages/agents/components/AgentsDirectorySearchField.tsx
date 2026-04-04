import { Search, X } from 'lucide-react'

type AgentsDirectorySearchFieldProps = {
  value: string
  onChange: (value: string) => void
}

export function AgentsDirectorySearchField({ value, onChange }: AgentsDirectorySearchFieldProps) {
  return (
    <div className="w-full">
      <label htmlFor="agents-directory-search" className="sr-only">
        Search agents by name or specialty
      </label>
      <div className="flex min-h-12 items-center gap-3 rounded-xl bg-charcoal-950/[0.035] px-4 py-2.5 transition-[background-color] focus-within:bg-charcoal-950/[0.055] dark:bg-white/[0.06] dark:focus-within:bg-white/[0.09] sm:min-h-[3.25rem] sm:gap-3.5 sm:px-5">
        <Search
          className="size-5 shrink-0 text-charcoal-400 dark:text-charcoal-500"
          aria-hidden
        />
        <input
          id="agents-directory-search"
          type="search"
          placeholder="Search agents…"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          autoComplete="off"
          className="min-h-0 min-w-0 flex-1 border-0 bg-transparent py-1 text-[15px] leading-snug text-charcoal-950 placeholder:text-charcoal-400 focus:ring-0 dark:text-zinc-100 dark:placeholder:text-charcoal-500"
        />
        {value ? (
          <button
            type="button"
            onClick={() => onChange('')}
            className="flex size-9 shrink-0 cursor-pointer items-center justify-center rounded-lg text-charcoal-400 transition-colors hover:bg-charcoal-950/[0.06] hover:text-charcoal-700 dark:hover:bg-white/[0.08] dark:hover:text-zinc-200"
            aria-label="Clear search"
          >
            <X className="size-4" strokeWidth={2} />
          </button>
        ) : null}
      </div>
    </div>
  )
}
