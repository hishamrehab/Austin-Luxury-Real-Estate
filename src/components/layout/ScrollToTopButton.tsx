import { useCallback, useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

const SHOW_AFTER_PX = 480

export function ScrollToTopButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SHOW_AFTER_PX)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollUp = useCallback(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [])

  if (!visible) return null

  return (
    <button
      type="button"
      onClick={scrollUp}
      aria-label="Back to top"
      className="fixed right-5 bottom-24 z-50 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-charcoal-200 bg-white text-charcoal-700 shadow-lg transition-all hover:border-sage-400 hover:bg-sage-50 hover:text-sage-800 focus-visible:ring-2 focus-visible:ring-sage-500 focus-visible:ring-offset-2 focus-visible:outline-none md:right-8 md:bottom-28 dark:border-white/15 dark:bg-charcoal-800 dark:text-zinc-100 dark:shadow-charcoal-950/50 dark:hover:border-sage-500 dark:hover:bg-charcoal-700 dark:hover:text-white dark:focus-visible:ring-offset-charcoal-950"
    >
      <ArrowUp className="size-5" strokeWidth={2.25} aria-hidden />
    </button>
  )
}
