import { Moon, Sun } from 'lucide-react'

import { cn } from '@/lib/utils'
import { useTheme } from '@/components/theme/ThemeProvider'

type ThemeToggleProps = {
  scrolled: boolean
  className?: string
}

const iconClass = 'size-[1.15rem]'

export function ThemeToggle({ scrolled, className }: ThemeToggleProps) {
  const { theme, cycleTheme } = useTheme()

  const isLight = theme === 'light'

  return (
    <button
      type="button"
      onClick={cycleTheme}
      className={cn(
        'flex size-10 shrink-0 items-center justify-center rounded-full border transition-colors',
        scrolled
          ? 'border-charcoal-200 bg-white/80 text-charcoal-900 hover:bg-charcoal-100 dark:border-charcoal-600 dark:bg-charcoal-900/60 dark:text-zinc-100 dark:hover:bg-charcoal-800'
          : 'border-white/40 bg-white/10 text-white hover:bg-white/20',
        className,
      )}
      aria-label={
        isLight
          ? 'Color theme: light. Click to switch to dark mode.'
          : 'Color theme: dark. Click to switch to light mode.'
      }
      title={isLight ? 'Light mode — switch to dark' : 'Dark mode — switch to light'}
    >
      {isLight ? (
        <Sun className={iconClass} strokeWidth={1.75} aria-hidden />
      ) : (
        <Moon className={iconClass} strokeWidth={1.75} aria-hidden />
      )}
    </button>
  )
}
