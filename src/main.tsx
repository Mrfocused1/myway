import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import { MenuPage } from './pages/MenuPage.tsx'
import { AboutPage } from './pages/AboutPage.tsx'
import { CateringServicesPage } from './pages/CateringServicesPage.tsx'
import { LoginPage } from './pages/LoginPage.tsx'
import { AdminPage } from './pages/AdminPage.tsx'
import { ResetPasswordPage } from './pages/ResetPasswordPage.tsx'
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage.tsx'
import { TermsOfServicePage } from './pages/TermsOfServicePage.tsx'
import { ScrollToTop } from './components/ScrollToTop.tsx'
import { AuthProvider } from './contexts/AuthContext.tsx'
import { ProtectedRoute } from './components/ProtectedRoute.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<CateringServicesPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-of-service" element={<TermsOfServicePage />} />
          <Route path="/admin" element={<LoginPage />} />
          <Route path="/admin/reset-password" element={<ResetPasswordPage />} />
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute>
                <AdminPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
