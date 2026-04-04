import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'

export const THEME_STORAGE_KEY = 'alr-theme'

export type ThemePreference = 'light' | 'dark' | 'system'

type ThemeContextValue = {
  theme: ThemePreference
  resolvedTheme: 'light' | 'dark'
  setTheme: (t: ThemePreference) => void
  cycleTheme: () => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

function readStoredTheme(): ThemePreference {
  try {
    const s = localStorage.getItem(THEME_STORAGE_KEY)
    if (s === 'light' || s === 'dark' || s === 'system') return s
  } catch {
    /* ignore */
  }
  return 'system'
}

function getSystemTheme(): 'light' | 'dark' {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function applyDomTheme(dark: boolean) {
  document.documentElement.classList.toggle('dark', dark)
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<ThemePreference>(readStoredTheme)
  const [systemTheme, setSystemTheme] = useState<'light' | 'dark'>(getSystemTheme)

  const resolvedTheme: 'light' | 'dark' = theme === 'system' ? systemTheme : theme

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const onChange = () => setSystemTheme(getSystemTheme())
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  useEffect(() => {
    applyDomTheme(resolvedTheme === 'dark')
  }, [resolvedTheme])

  useEffect(() => {
    try {
      localStorage.setItem(THEME_STORAGE_KEY, theme)
    } catch {
      /* ignore */
    }
  }, [theme])

  const setTheme = useCallback((t: ThemePreference) => {
    setThemeState(t)
  }, [])

  const cycleTheme = useCallback(() => {
    setThemeState((prev) => {
      const order: ThemePreference[] = ['light', 'dark', 'system']
      const i = order.indexOf(prev)
      return order[(i + 1) % order.length]!
    })
  }, [])

  const value = useMemo(
    () => ({ theme, resolvedTheme, setTheme, cycleTheme }),
    [theme, resolvedTheme, setTheme, cycleTheme],
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return ctx
}
