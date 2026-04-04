import { cn } from '@/lib/utils'

export type LogoVariant = 'onLight' | 'onDark'

type LogoProps = {
  variant: LogoVariant
  className?: string
  /** Mark only (no wordmark) */
  iconOnly?: boolean
  /** When true, hide wordmark below `sm` (header). When false, always show (footer). */
  compact?: boolean
  /** Visually hidden label for icon-only use */
  'aria-label'?: string
}

function LogoMark({ variant, className }: { variant: LogoVariant; className?: string }) {
  const isOnDark = variant === 'onDark'

  return (
    <svg
      viewBox="0 0 40 44"
      className={cn('size-9 shrink-0 sm:size-10', className)}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      {isOnDark ? (
        <>
          <path className="fill-white" d="M20 4 36 21v21H4V21l16-17Z" />
          <path className="fill-white/30" d="M15 28h10v14H15V28Z" />
        </>
      ) : (
        <>
          <path
            className="fill-sage-600 dark:fill-sage-400"
            d="M20 4 36 21v21H4V21l16-17Z"
          />
          <path
            className="fill-charcoal-950 dark:fill-zinc-100"
            d="M15 28h10v14H15V28Z"
          />
        </>
      )}
    </svg>
  )
}

export function Logo({
  variant,
  className,
  iconOnly,
  compact = true,
  'aria-label': ariaLabel,
}: LogoProps) {
  const isOnDark = variant === 'onDark'

  if (iconOnly) {
    return (
      <span className={cn('inline-flex', className)} role="img" aria-label={ariaLabel ?? 'Austin Luxury Realty'}>
        <LogoMark variant={variant} />
      </span>
    )
  }

  return (
    <span className={cn('inline-flex min-w-0 items-center gap-2 sm:gap-3', className)}>
      <LogoMark variant={variant} />
      <span
        className={cn(
          'min-w-0 truncate font-serif text-xl font-semibold tracking-tight sm:text-2xl',
          compact && 'hidden sm:inline',
          isOnDark ? 'text-white' : 'text-charcoal-950 dark:text-zinc-50',
        )}
      >
        Austin Luxury Realty
      </span>
    </span>
  )
}

export { LogoMark }
