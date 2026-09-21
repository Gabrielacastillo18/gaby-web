import { useEffect } from 'react'
import { HashRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { Footer } from './components/Footer'
import { Nav } from './components/Nav'
import { LangProvider } from './context/LangContext'
import { ThemeProvider } from './context/ThemeContext'
import { Home } from './pages/Home'
import { ProjectPage } from './pages/ProjectPage'

/** Al abrir el detalle de un proyecto arrancamos arriba de todo. */
function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    if (pathname !== '/') window.scrollTo({ top: 0, behavior: 'auto' })
  }, [pathname])

  return null
}

export default function App() {
  return (
    <ThemeProvider>
      <LangProvider>
        {/* HashRouter: las rutas viven en el # de la URL, así GitHub Pages
            sirve el sitio sin necesidad de configurar redirecciones. */}
        <HashRouter>
          <ScrollToTop />
          <Nav />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/proyecto/:slug" element={<ProjectPage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          <Footer />
        </HashRouter>
      </LangProvider>
    </ThemeProvider>
  )
}
