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

export type ThemePreference = 'light' | 'dark'

type ThemeContextValue = {
  theme: ThemePreference
  setTheme: (t: ThemePreference) => void
  cycleTheme: () => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

function readStoredTheme(): ThemePreference {
  try {
    const s = localStorage.getItem(THEME_STORAGE_KEY)
    if (s === 'light' || s === 'dark') return s
    if (s === 'system') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    }
  } catch {
    /* ignore */
  }
  return 'light'
}

function applyDomTheme(dark: boolean) {
  document.documentElement.classList.toggle('dark', dark)
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<ThemePreference>(readStoredTheme)

  useEffect(() => {
    applyDomTheme(theme === 'dark')
  }, [theme])

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
    setThemeState((prev) => (prev === 'light' ? 'dark' : 'light'))
  }, [])

  const value = useMemo(
    () => ({ theme, setTheme, cycleTheme }),
    [theme, setTheme, cycleTheme],
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
