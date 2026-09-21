import { Link } from 'react-router-dom'
import type { Project } from '../content/types'
import { ui } from '../content/ui'
import { useLang } from '../context/LangContext'
import { accentColor, softAccent } from '../lib/accent'
import { asset } from '../lib/assets'
import { ArrowRightIcon } from './Icons'
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
          <dd className="line-clamp-2 text-sm leading-relaxed text-muted">{t(step.text)}</dd>
        </div>
      ))}
    </dl>
  )
}

function Thumb({ project, className }: { project: Project; className: string }) {
  const color = accentColor[project.accent]

  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden ${className}`}
      style={{ background: `linear-gradient(135deg, ${softAccent(color, 12)}, transparent 70%)` }}
    >
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
          accent={project.accent}
          className="aspect-[2/1] max-h-full w-full p-5 text-fg transition-transform duration-700 group-hover:scale-[1.03]"
        />
      )}
    </div>
  )
}

export function ProjectCard({ project }: { project: Project }) {
  const { t } = useLang()
  const featured = project.featured

  return (
    <Link
      to={`/proyecto/${project.slug}`}
      className={`group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface/60 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-xl hover:shadow-black/10 ${
        featured ? 'md:grid md:grid-cols-[minmax(0,19rem)_1fr]' : ''
      }`}
    >
      <Thumb project={project} className={featured ? 'h-44 md:h-full' : 'h-40'} />

      <div className="flex grow flex-col p-6 sm:p-7">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs">
          <span
            className="rounded-full px-2.5 py-1 font-medium"
            style={{
              color: accentColor[project.accent],
              backgroundColor: `${softAccent(accentColor[project.accent], 10)}`,
            }}
          >
            {t(project.category)}
          </span>
          <span className="text-muted">{project.year}</span>
          {featured && (
            <span className="ml-auto rounded-full border border-accent/40 px-2.5 py-1 font-medium text-accent">
              {t(ui.project.featured)}
            </span>
          )}
        </div>

        <h3 className="mt-3.5 font-display text-xl font-bold leading-snug transition-colors group-hover:text-accent sm:text-[1.35rem]">
          {t(project.title)}
        </h3>

        {project.note && <p className="mt-1.5 text-xs text-muted">{t(project.note)}</p>}

        <p className="mt-3 text-sm leading-relaxed text-muted">{t(project.summary)}</p>

        <Steps project={project} />

        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.tools.slice(0, 5).map((tool, index) => (
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
              <p className="font-display text-xl font-bold" style={{ color: accentColor[project.accent] }}>
                {project.metric.value}
              </p>
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
