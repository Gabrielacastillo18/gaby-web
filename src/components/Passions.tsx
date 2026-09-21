import { passions } from '../content/passions'
import { ui } from '../content/ui'
import { useLang } from '../context/LangContext'
import { Reveal } from './Reveal'
import { Section } from './Section'

/** Sección opcional: si no hay contenido cargado, no se muestra nada. */
export function Passions() {
  const { t } = useLang()

  if (passions.length === 0) return null

  return (
    <Section
      id="passions"
      eyebrow={ui.sections.passionsEyebrow}
      title={ui.sections.passionsTitle}
      align="center"
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {passions.map((item, index) => (
          <Reveal key={index} delay={index * 0.07} className="h-full">
            <article className="h-full rounded-2xl border border-line bg-surface/60 p-6 text-center transition-colors hover:border-accent/40">
              <h3 className="font-display text-base font-bold">{t(item.title)}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{t(item.text)}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
