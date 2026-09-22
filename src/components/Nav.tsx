import { AnimatePresence, motion } from 'framer-motion'
import { useCallback, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { site } from '../content/site'
import { ui } from '../content/ui'
import { useLang } from '../context/LangContext'
import { useTheme } from '../context/ThemeContext'
import { CloseIcon, MenuIcon, MoonIcon, SunIcon } from './Icons'

const sections = [
  { id: 'home', label: ui.nav.home },
  { id: 'about', label: ui.nav.about },
  { id: 'education', label: ui.nav.education },
  { id: 'experience', label: ui.nav.experience },
  { id: 'skills', label: ui.nav.skills },
  { id: 'projects', label: ui.nav.projects },
  { id: 'passions', label: ui.nav.passions },
  { id: 'contact', label: ui.nav.contact },
]

export function Nav() {
  const { t, lang, toggleLang } = useLang()
  const { theme, toggleTheme } = useTheme()
  const navigate = useNavigate()
  const location = useLocation()

  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('home')

  const onHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Resalta en el menú la sección que se está viendo.
  useEffect(() => {
    if (!onHome) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting)
        if (visible.length > 0) setActive(visible[0].target.id)
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )

    const observed = sections
      .map((section) => document.getElementById(section.id))
      .filter((element): element is HTMLElement => element !== null)

    observed.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [onHome])

  const goToSection = useCallback(
    (id: string) => {
      setMenuOpen(false)
      if (onHome) {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }
      // Desde el detalle de un proyecto: volvemos al inicio y ahí saltamos.
      navigate('/')
      window.setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 60)
    },
    [navigate, onHome],
  )

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen ? 'glass border-b border-line' : 'border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-5 sm:h-[4.5rem] sm:px-8">
        <button
          type="button"
          onClick={() => goToSection('home')}
          className="font-display text-lg font-bold tracking-tight"
        >
          {site.shortName.toLowerCase()}
        </button>

        <nav className="hidden items-center gap-7 lg:flex">
          {sections.map((section) => (
            <button
              key={section.id}
              type="button"
              onClick={() => goToSection(section.id)}
              className={`relative text-sm font-medium transition-colors hover:text-primary ${
                onHome && active === section.id ? 'text-primary' : 'text-muted'
              }`}
            >
              {t(section.label)}
              {onHome && active === section.id && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute -bottom-1.5 left-0 h-[2px] w-full rounded-full bg-primary"
                />
              )}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleLang}
            aria-label={t(ui.a11y.toggleLang)}
            className="flex h-9 items-center rounded-full border border-line px-3 text-xs font-bold tracking-wide transition-colors hover:border-accent/50 hover:text-accent"
          >
            <span className={lang === 'es' ? 'text-accent' : 'text-muted'}>ES</span>
            <span className="mx-1.5 text-muted/50">/</span>
            <span className={lang === 'en' ? 'text-accent' : 'text-muted'}>EN</span>
          </button>

          <button
            type="button"
            onClick={toggleTheme}
            aria-label={t(ui.a11y.toggleTheme)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-line transition-colors hover:border-accent/50 hover:text-accent"
          >
            {theme === 'dark' ? <SunIcon size={16} /> : <MoonIcon size={16} />}
          </button>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={t(menuOpen ? ui.a11y.closeMenu : ui.a11y.openMenu)}
            aria-expanded={menuOpen}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-line transition-colors hover:border-accent/50 hover:text-accent lg:hidden"
          >
            {menuOpen ? <CloseIcon size={16} /> : <MenuIcon size={16} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="overflow-hidden border-t border-line lg:hidden"
          >
            <div className="flex flex-col px-5 py-3 sm:px-8">
              {sections.map((section) => (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => goToSection(section.id)}
                  className="py-2.5 text-left text-sm font-medium text-muted transition-colors hover:text-primary"
                >
                  {t(section.label)}
                </button>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
