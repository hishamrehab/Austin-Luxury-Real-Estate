import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ThemeProvider } from '@/components/theme'
import { LovedListingsProvider } from '@/context/LovedListingsContext'
import { LovedNeighborhoodsProvider } from '@/context/LovedNeighborhoodsContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <LovedListingsProvider>
        <LovedNeighborhoodsProvider>
          <App />
        </LovedNeighborhoodsProvider>
      </LovedListingsProvider>
    </ThemeProvider>
  </StrictMode>,
)
