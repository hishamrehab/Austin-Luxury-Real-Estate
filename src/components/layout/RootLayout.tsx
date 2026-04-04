import { Outlet } from 'react-router-dom'

import { SiteFooter } from '@/components/layout/SiteFooter'
import { SiteHeader } from '@/components/layout/SiteHeader'

export function RootLayout() {
  return (
    <div className="min-h-screen bg-[#FAFAF8] text-charcoal-950 transition-colors duration-300 dark:bg-charcoal-950 dark:text-zinc-100">
      <SiteHeader />
      <Outlet />
      <SiteFooter />
    </div>
  )
}
