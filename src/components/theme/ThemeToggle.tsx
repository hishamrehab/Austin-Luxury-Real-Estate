import { Moon, Sun } from 'lucide-react'

import { cn } from '@/lib/utils'
import { useTheme } from '@/components/theme/ThemeProvider'

type ThemeToggleProps = {
  scrolled: boolean
  className?: string
}

const labels: Record<string, string> = {
  light: 'Light theme',
  dark: 'Dark theme',

}

export function ThemeToggle({ scrolled, className }: ThemeToggleProps) {
  const { theme, cycleTheme } = useTheme()


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
      aria-label={`Color theme: ${labels[theme]}. Click to switch.`}
      title={`${labels[theme]} — click to cycle`}
    >
      {theme === 'light' ? <Sun className="size-[1.15rem]" strokeWidth={1.75} /> : <Moon className="size-[1.15rem]" strokeWidth={1.75} />}
    </button>
  )
}
