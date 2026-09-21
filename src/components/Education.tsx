import { certifications, education } from '../content/education'
import { ui } from '../content/ui'
import { useLang } from '../context/LangContext'
import { SparkIcon } from './Icons'
import { Reveal } from './Reveal'
import { Section } from './Section'

export function Education() {
  const { t } = useLang()

  return (
    <Section
      id="education"
      eyebrow={ui.sections.educationEyebrow}
      title={ui.sections.educationTitle}
      className="bg-elev/60"
    >
      <div className="grid gap-5 lg:grid-cols-2">
        {education.map((item, index) => (
          <Reveal key={index} delay={index * 0.08} className="h-full">
            <article className="relative h-full overflow-hidden rounded-2xl border border-line bg-surface/60 p-6 sm:p-7">
              {item.current && (
                <span className="absolute right-5 top-5 flex items-center gap-1.5 rounded-full border border-accent/40 bg-accent/10 px-2.5 py-1 text-[0.68rem] font-semibold text-accent">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
                  {t(ui.sections.inProgress)}
                </span>
              )}

              <p
                className={`text-xs font-semibold uppercase tracking-wider text-accent ${
                  item.current ? 'pr-24' : ''
                }`}
              >
                {t(item.period)}
              </p>
              <h3 className="mt-2 max-w-[85%] font-display text-lg font-bold leading-snug">
                {t(item.degree)}
              </h3>
              <p className="mt-1 text-sm text-muted">{t(item.school)}</p>
              {item.detail && (
                <p className="mt-4 border-t border-line pt-4 text-sm leading-relaxed text-muted">
                  {t(item.detail)}
                </p>
              )}
            </article>
          </Reveal>
        ))}
      </div>

      {certifications.length > 0 && (
        <div className="mt-14">
          <Reveal>
            <h3 className="mb-5 flex items-center gap-2.5 font-display text-sm font-bold uppercase tracking-wider text-muted">
              <SparkIcon size={16} className="text-accent" />
              {t(ui.sections.certifications)}
            </h3>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((item, index) => (
              <Reveal key={index} delay={index * 0.06} className="h-full">
                <article className="h-full rounded-xl border border-line bg-surface/40 p-5 transition-colors hover:border-accent/40">
                  <h4 className="font-display text-sm font-bold">{t(item.name)}</h4>
                  <p className="mt-1 text-xs text-accent">{t(item.issuer)}</p>
                  {item.detail && (
                    <p className="mt-2.5 text-xs leading-relaxed text-muted">{t(item.detail)}</p>
                  )}
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      )}
    </Section>
  )
}
