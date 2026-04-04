import { Outlet } from 'react-router-dom'

import { SiteFooter } from '@/components/layout/Footer'
import { SiteHeader } from '@/components/layout/Header'
import { ScrollToTop } from '@/components/layout/ScrollToTop'
import { ScrollToTopButton } from '@/components/layout/ScrollToTopButton'

export function RootLayout() {
  return (
    <div className="min-h-screen bg-[#FAFAF8] text-charcoal-950 transition-colors duration-300 dark:bg-charcoal-950 dark:text-zinc-100">
      <ScrollToTop />
      <SiteHeader />
      <Outlet />
      <SiteFooter />
      <ScrollToTopButton />
    </div>
  )
}
