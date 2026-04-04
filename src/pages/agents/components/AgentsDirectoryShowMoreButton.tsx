import { Loader2 } from 'lucide-react'

type AgentsDirectoryShowMoreButtonProps = {
  loading: boolean
  onClick: () => void
}

export function AgentsDirectoryShowMoreButton({
  loading,
  onClick,
}: AgentsDirectoryShowMoreButtonProps) {
  return (
    <div className="mt-10 flex justify-center">
      <button
        type="button"
        disabled={loading}
        aria-busy={loading}
        onClick={onClick}
        className="inline-flex min-w-[11rem] cursor-pointer items-center justify-center gap-2 rounded-full border border-charcoal-200 bg-white px-8 py-3 text-sm font-medium text-charcoal-950 transition-colors hover:bg-charcoal-50 disabled:cursor-not-allowed disabled:opacity-70 dark:border-charcoal-700 dark:bg-charcoal-900 dark:text-zinc-100 dark:hover:bg-charcoal-800"
      >
        {loading ? (
          <>
            <Loader2 className="size-5 shrink-0 animate-spin text-sage-600 dark:text-sage-400" aria-hidden />
            <span>Loading…</span>
          </>
        ) : (
          'Show more'
        )}
      </button>
    </div>
  )
}
