import { skillGroups } from '../content/skills'
import { ui } from '../content/ui'
import { useLang } from '../context/LangContext'
import { Reveal } from './Reveal'
import { Section } from './Section'

export function Skills() {
  const { t } = useLang()

  return (
    <Section
      id="skills"
      eyebrow={ui.sections.skillsEyebrow}
      title={ui.sections.skillsTitle}
      className="bg-elev/60"
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, index) => (
          <Reveal key={index} delay={index * 0.06}>
            <article className="h-full rounded-2xl border border-line bg-surface/60 p-6 transition-colors hover:border-accent/40">
              <h3 className="mb-4 flex items-center gap-2.5 font-display text-sm font-bold uppercase tracking-wider text-accent">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                {t(group.title)}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="rounded-lg border border-line bg-bg/60 px-3 py-1.5 text-[0.8rem] font-medium text-muted transition-colors hover:border-accent/50 hover:text-fg"
                  >
                    {t(item)}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
