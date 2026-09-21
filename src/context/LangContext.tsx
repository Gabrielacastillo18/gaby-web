import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from 'react'
import type { I18nText, Lang } from '../content/types'

const STORAGE_KEY = 'gc-lang'

function initialLang(): Lang {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === 'es' || saved === 'en') return saved
  } catch {
    /* sin storage disponible */
  }
  // Español por defecto; solo arranca en inglés si el navegador está en inglés.
  return navigator.language?.toLowerCase().startsWith('en') ? 'en' : 'es'
}

const LangContext = createContext<{
  lang: Lang
  setLang: (lang: Lang) => void
  toggleLang: () => void
  t: (text: I18nText) => string
}>({
  lang: 'es',
  setLang: () => {},
  toggleLang: () => {},
  t: (text) => text.es,
})

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(initialLang)

  useEffect(() => {
    document.documentElement.lang = lang
    try {
      localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      /* sin storage disponible */
    }
  }, [lang])

  const toggleLang = useCallback(() => {
    setLang((current) => (current === 'es' ? 'en' : 'es'))
  }, [])

  const t = useCallback((text: I18nText) => text[lang], [lang])

  return (
    <LangContext.Provider value={{ lang, setLang, toggleLang, t }}>{children}</LangContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useLang = () => useContext(LangContext)
