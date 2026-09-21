import type { ReactNode } from 'react'
import { useLang } from '../context/LangContext'
import type { I18nText } from '../content/types'
import { Reveal } from './Reveal'

/** Encabezado común a todas las secciones: pastilla + título + bajada. */
export function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  className = '',
  align = 'left',
}: {
  id: string
  eyebrow: I18nText
  title: I18nText
  intro?: I18nText
  children: ReactNode
  className?: string
  align?: 'left' | 'center'
}) {
  const { t } = useLang()
  const centered = align === 'center'

  return (
    <section id={id} className={`relative scroll-mt-24 py-20 sm:py-28 ${className}`}>
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className={`mb-12 sm:mb-16 ${centered ? 'text-center' : ''}`}>
            <span
              className={`inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent ${
                centered ? 'justify-center' : ''
              }`}
            >
              <span className="h-px w-7 bg-accent/60" />
              {t(eyebrow)}
            </span>
            <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl md:text-[2.6rem]">
              {t(title)}
            </h2>
            {intro && (
              <p
                className={`mt-4 max-w-2xl text-base leading-relaxed text-muted ${
                  centered ? 'mx-auto' : ''
                }`}
              >
                {t(intro)}
              </p>
            )}
          </div>
        </Reveal>

        {children}
      </div>
    </section>
  )
}
