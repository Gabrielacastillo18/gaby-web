import { Link } from 'react-router-dom'
import type { Project } from '../content/types'
import { ui } from '../content/ui'
import { useLang } from '../context/LangContext'
import { asset } from '../lib/assets'
import { ArrowRightIcon, CalendarIcon } from './Icons'
import { MiniChart } from './MiniChart'

/** Las tres líneas que resumen el caso, en la tarjeta. */
function Steps({ project }: { project: Project }) {
  const { t } = useLang()
  const steps = [
    { label: ui.project.problem, text: project.problem },
    { label: ui.project.analysis, text: project.analysis },
    { label: ui.project.solution, text: project.solution },
  ]

  return (
    <dl className="mt-5 space-y-3 border-t border-line pt-5">
      {steps.map((step, index) => (
        <div key={index} className="grid grid-cols-[4.75rem_1fr] gap-3">
          <dt className="pt-[3px] text-[0.64rem] font-bold uppercase tracking-[0.12em] text-accent">
            {t(step.label)}
          </dt>
          <dd className="text-sm leading-relaxed text-muted">{t(step.text)}</dd>
        </div>
      ))}
    </dl>
  )
}

function Thumb({ project, category }: { project: Project; category: string }) {
  return (
    <div className="relative flex h-40 items-center justify-center overflow-hidden bg-gradient-to-br from-accent/10 to-transparent sm:h-44">
      {/* La categoría flota arriba del gráfico; no importa si lo tapa un poco. */}
      <span className="absolute left-3 top-3 z-10 rounded-full bg-surface/90 px-2.5 py-1 text-xs font-medium text-accent shadow-sm backdrop-blur-sm">
        {category}
      </span>

      {project.cover ? (
        <img
          src={asset(project.cover)}
          alt=""
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      ) : (
        <MiniChart
          kind={project.chart}
          seed={project.slug}
          className="aspect-[2/1] max-h-full w-full p-5 text-accent transition-transform duration-700 group-hover:scale-[1.03]"
        />
      )}
    </div>
  )
}

/**
 * Todas las tarjetas comparten el mismo layout vertical y el mismo color
 * de acento: antes cada proyecto tenía un color distinto (se veía como un
 * arcoíris) y los destacados tenían un ancho especial. Ahora la grilla es
 * uniforme, de a dos por fila en pantallas medianas en adelante.
 */
export function ProjectCard({ project }: { project: Project }) {
  const { t } = useLang()

  return (
    <Link
      to={`/proyecto/${project.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface/60 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-xl hover:shadow-black/10"
    >
      <Thumb project={project} category={t(project.category)} />

      <div className="flex grow flex-col p-6 sm:p-7">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-xl font-semibold leading-snug transition-colors group-hover:text-accent">
            {t(project.title)}
          </h3>

          {/* La fecha va siempre pegada a la derecha del título. */}
          <div className="mt-1 flex shrink-0 items-center gap-1.5 whitespace-nowrap text-xs text-muted">
            <CalendarIcon size={13} />
            <span>{project.year}</span>
          </div>
        </div>

        {project.note && <p className="mt-1.5 text-xs text-muted">{t(project.note)}</p>}

        <p className="mt-3 text-sm leading-relaxed text-muted">{t(project.summary)}</p>

        <Steps project={project} />

        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.tools.map((tool, index) => (
            <span
              key={index}
              className="rounded-md border border-line bg-bg/60 px-2 py-1 text-[0.7rem] text-muted"
            >
              {t(tool)}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-end justify-between gap-4 border-t border-line pt-5">
          {project.metric ? (
            <div>
              <p className="font-display text-xl font-bold text-accent">{project.metric.value}</p>
              <p className="text-[0.7rem] leading-tight text-muted">{t(project.metric.label)}</p>
            </div>
          ) : (
            <span />
          )}

          <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
            {t(ui.project.viewCase)}
            <ArrowRightIcon size={15} className="transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </Link>
  )
}
