import { experience } from '../content/experience'
import { ui } from '../content/ui'
import { useLang } from '../context/LangContext'
import { Reveal } from './Reveal'
import { Section } from './Section'

export function Experience() {
  const { t } = useLang()

  return (
    <Section id="experience" eyebrow={ui.sections.experienceEyebrow} title={ui.sections.experienceTitle}>
      <div className="relative">
        {/* Línea vertical del timeline */}
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-line sm:left-[9px]" aria-hidden="true" />

        <div className="space-y-10">
          {experience.map((item, index) => (
            <Reveal key={index} delay={index * 0.08}>
              <article className="relative pl-8 sm:pl-12">
                {/* Punto del timeline */}
                <span className="absolute left-0 top-1.5 flex h-4 w-4 items-center justify-center sm:h-[19px] sm:w-[19px]">
                  <span className="absolute h-full w-full rounded-full bg-accent/20" />
                  <span className="relative h-2 w-2 rounded-full bg-accent" />
                </span>

                <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                  {t(item.period)}
                </p>
                <h3 className="mt-1.5 font-display text-lg font-bold sm:text-xl">{t(item.role)}</h3>
                <p className="mt-0.5 text-sm text-muted">
                  {t(item.company)} · {t(item.place)}
                </p>

                <ul className="mt-4 max-w-3xl space-y-2.5">
                  {item.bullets.map((bullet, bulletIndex) => (
                    <li key={bulletIndex} className="flex gap-3 text-sm leading-relaxed text-muted">
                      <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-accent/60" />
                      {t(bullet)}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}
