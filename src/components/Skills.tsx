import { motion, useReducedMotion } from 'framer-motion'
import { additionalSkills, skills } from '../content/skills'
import { ui } from '../content/ui'
import { useLang } from '../context/LangContext'
import { ContentIcon } from './ContentIcon'
import { Reveal } from './Reveal'
import { Section } from './Section'
import { ExcelMark, PowerBIMark, PythonMark, SqlMark } from './ToolIcons'

const TOOL_MARKS = {
  python: PythonMark,
  sql: SqlMark,
  excel: ExcelMark,
  powerbi: PowerBIMark,
}

/* Antes esto eran dos bloques separados (una grilla de tarjetas grandes con
   barra de nivel, y más abajo un segundo título con las pastillas de "Otras
   competencias"), y entre los dos ocupaban casi dos pantallas.

   Ahora es un único bloque compacto: las herramientas van en filas chicas
   (ícono + nombre + descripción + barra fina, todo en una línea) y las
   competencias adicionales cuelgan del mismo contenedor, separadas apenas
   por una línea. Mismo contenido, mucho menos alto. */

export function Skills() {
  const { t } = useLang()
  const reduced = useReducedMotion()

  return (
    <Section id="skills" heading={ui.sections.skills} className="bg-elev/60">
      <div className="mx-auto max-w-5xl rounded-2xl border border-line bg-surface/60 p-5 sm:p-7">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => {
            const Mark = skill.tool ? TOOL_MARKS[skill.tool] : null

            return (
              <Reveal key={skill.name} delay={index * 0.05}>
                <div className="flex items-center gap-3 rounded-xl bg-bg/50 p-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/15">
                    {Mark ? (
                      <Mark size={20} className="text-accent" />
                    ) : (
                      <ContentIcon name={skill.icon} size={20} className="text-accent" />
                    )}
                  </span>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-baseline justify-between gap-2">
                      <h3 className="font-display text-sm font-bold">{skill.name}</h3>
                      <span className="shrink-0 text-xs font-semibold text-accent">
                        {skill.level}%
                      </span>
                    </div>
                    <p className="text-xs leading-snug text-muted">{t(skill.description)}</p>
                    <div className="mt-1.5 h-1 w-full overflow-hidden rounded-full bg-line">
                      <motion.div
                        className="h-1 rounded-full bg-accent"
                        initial={{ width: reduced ? `${skill.level}%` : 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                      />
                    </div>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>

        {/* Otras competencias: mismo contenedor, separadas por una línea */}
        <Reveal delay={0.15}>
          <div className="mt-5 border-t border-line pt-5">
            <h3 className="mb-3 text-center text-sm font-semibold text-muted">
              {t(ui.sections.additionalSkills.pre)} {t(ui.sections.additionalSkills.mark)}
            </h3>
            <div className="flex flex-wrap justify-center gap-2">
              {additionalSkills.map((item, index) => (
                <span
                  key={index}
                  className="rounded-full border border-accent/40 px-3 py-1 text-xs font-medium text-accent transition-colors hover:bg-accent hover:text-bg"
                >
                  {t(item)}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
