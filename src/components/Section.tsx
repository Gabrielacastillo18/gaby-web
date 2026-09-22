import type { ReactNode } from 'react'
import { useLang } from '../context/LangContext'
import type { I18nText } from '../content/types'
import { Reveal } from './Reveal'

/** Título de sección: centrado, con la segunda parte en el color de acento. */
export function SectionTitle({
  heading,
  icon,
  size = 'lg',
}: {
  heading: { pre: I18nText; mark: I18nText }
  icon?: ReactNode
  size?: 'lg' | 'md'
}) {
  const { t } = useLang()
  const classes =
    size === 'lg'
      ? 'text-3xl font-bold leading-tight sm:text-4xl'
      : 'text-2xl font-bold leading-tight'

  return (
    <div className="flex items-center justify-center gap-3">
      {icon}
      <h2 className={classes}>
        {t(heading.pre)} <span className="text-accent">{t(heading.mark)}</span>
      </h2>
    </div>
  )
}

/** Encabezado común: título centrado + bajada, sin etiqueta previa. */
export function Section({
  id,
  heading,
  icon,
  children,
  className = '',
}: {
  id: string
  heading: { pre: I18nText; mark: I18nText; subtitle?: I18nText }
  icon?: ReactNode
  children: ReactNode
  className?: string
}) {
  const { t } = useLang()

  return (
    <section id={id} className={`relative scroll-mt-24 py-20 sm:py-24 ${className}`}>
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="mb-14 text-center sm:mb-16">
            <SectionTitle heading={heading} icon={icon} />
            {heading.subtitle && (
              <p className="mx-auto mt-4 max-w-3xl text-lg leading-relaxed text-muted">
                {t(heading.subtitle)}
              </p>
            )}
          </div>
        </Reveal>

        {children}
      </div>
    </section>
  )
}
