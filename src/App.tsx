import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { RootLayout } from '@/components/layout/RootLayout'
import { HomePage } from '@/pages/home'
import { ListingDetailPage, ListingsPage } from '@/pages/listings'
import { PlaceholderPage } from '@/pages/PlaceholderPage'
import { NeighborhoodDetailPage, NeighborhoodsPage } from '@/pages/neighborhoods'
import { SellPage } from '@/pages/sell'
import { AgentsPage } from '@/pages/agents'
import { AboutPage } from '@/pages/about'
import { ContactPage } from '@/pages/contact'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path="listings" element={<ListingsPage />} />
          <Route path="listings/:id" element={<ListingDetailPage />} />
          <Route path="sell" element={<SellPage />} />
          <Route path="neighborhoods" element={<NeighborhoodsPage />} />
          <Route path="neighborhoods/:id" element={<NeighborhoodDetailPage />} />
          <Route path="agents" element={<AgentsPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="buy" element={<PlaceholderPage />} />
          <Route path="blog" element={<PlaceholderPage />} />
          <Route path="careers" element={<PlaceholderPage />} />
          <Route path="privacy" element={<PlaceholderPage />} />
          <Route path="terms" element={<PlaceholderPage />} />
          <Route path="mls-disclaimer" element={<PlaceholderPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
