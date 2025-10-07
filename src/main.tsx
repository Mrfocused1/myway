import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import { MenuPage } from './pages/MenuPage.tsx'
import { AboutPage } from './pages/AboutPage.tsx'
import { CateringServicesPage } from './pages/CateringServicesPage.tsx'
import { ScrollToTop } from './components/ScrollToTop.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<CateringServicesPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
