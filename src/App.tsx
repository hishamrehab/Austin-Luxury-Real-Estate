import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { RootLayout } from '@/components/layout/RootLayout'
import { HomePage } from '@/pages/home'
import { ListingsPage } from '@/pages/listings'
import { PlaceholderPage } from '@/pages/PlaceholderPage'
import { NeighborhoodsPage } from '@/pages/neighborhoods'
import { SellPage } from '@/pages/sell'
import { AgentsPage } from '@/pages/agents'
import { AboutPage } from '@/pages/about'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path="listings" element={<ListingsPage />} />
          <Route path="listings/:id" element={<PlaceholderPage />} />
          <Route path="sell" element={<SellPage />} />
          <Route path="neighborhoods" element={<NeighborhoodsPage />} />
          <Route path="neighborhoods/:id" element={<PlaceholderPage />} />
          <Route path="agents" element={<AgentsPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<PlaceholderPage />} />
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
