import { aboutHighlights, aboutParagraphs } from '../content/site'
import { ui } from '../content/ui'
import { useLang } from '../context/LangContext'
import { Reveal } from './Reveal'
import { Section } from './Section'

export function About() {
  const { t } = useLang()

  return (
    <Section id="about" eyebrow={ui.sections.aboutEyebrow} title={ui.sections.aboutTitle}>
      <div className="grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
        <Reveal>
          <div className="space-y-5">
            {aboutParagraphs.map((paragraph, index) => (
              <p
                key={index}
                className={
                  index === 0
                    ? 'text-lg leading-relaxed text-fg sm:text-xl'
                    : 'leading-relaxed text-muted'
                }
              >
                {t(paragraph)}
              </p>
            ))}
          </div>
        </Reveal>

        <div className="space-y-4">
          {aboutHighlights.map((item, index) => (
            <Reveal key={index} delay={index * 0.08}>
              <article className="group relative overflow-hidden rounded-2xl border border-line bg-surface/60 p-6 transition-colors hover:border-accent/40">
                {/* Barra de acento que crece al pasar el mouse */}
                <span className="absolute left-0 top-0 h-full w-[3px] bg-accent/70 transition-all duration-300 group-hover:w-1" />
                <h3 className="font-display text-base font-bold">{t(item.title)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{t(item.text)}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}
