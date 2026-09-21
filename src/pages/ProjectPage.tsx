import { motion } from 'framer-motion'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { ArrowLeftIcon, ArrowRightIcon, ExternalIcon } from '../components/Icons'
import { MiniChart } from '../components/MiniChart'
import { Reveal } from '../components/Reveal'
import { findProject, projects } from '../content/projects'
import { ui } from '../content/ui'
import { useLang } from '../context/LangContext'
import { accentColor, softAccent } from '../lib/accent'
import { asset } from '../lib/assets'

export function ProjectPage() {
  const { slug } = useParams()
  const { t } = useLang()
  const navigate = useNavigate()
  const project = findProject(slug)

  // Volver al inicio y aterrizar directo en la grilla de proyectos.
  const backToProjects = () => {
    navigate('/')
    window.setTimeout(() => {
      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 60)
  }

  if (!project) {
    return (
      <div className="mx-auto flex min-h-[70vh] max-w-6xl flex-col items-center justify-center px-5 text-center">
        <p className="text-lg text-muted">{t(ui.project.notFound)}</p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white"
        >
          <ArrowLeftIcon size={16} />
          {t(ui.project.back)}
        </Link>
      </div>
    )
  }

  const color = accentColor[project.accent]
  const index = projects.findIndex((item) => item.slug === project.slug)
  const previous = index > 0 ? projects[index - 1] : null
  const next = index < projects.length - 1 ? projects[index + 1] : null

  return (
    <article className="pt-24 sm:pt-28">
      {/* Encabezado del caso */}
      <header className="relative overflow-hidden border-b border-line">
        <div
          className="pointer-events-none absolute -top-24 right-0 h-96 w-96 rounded-full blur-3xl"
          style={{ background: `radial-gradient(circle, ${softAccent(color, 20)} 0%, transparent 70%)` }}
          aria-hidden="true"
        />

        <div className="relative mx-auto w-full max-w-4xl px-5 py-12 sm:px-8 sm:py-16">
          <button
            type="button"
            onClick={backToProjects}
            className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-accent"
          >
            <ArrowLeftIcon size={16} />
            {t(ui.project.back)}
          </button>

          <div className="mt-8 flex flex-wrap items-center gap-3 text-xs">
            <span
              className="rounded-full px-3 py-1 font-medium"
              style={{ color, backgroundColor: `${softAccent(color, 10)}` }}
            >
              {t(project.category)}
            </span>
            <span className="text-muted">{project.year}</span>
          </div>

          <h1 className="mt-4 text-3xl font-extrabold leading-tight sm:text-5xl">
            {t(project.title)}
          </h1>

          {project.note && <p className="mt-3 text-sm text-muted">{t(project.note)}</p>}

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{t(project.summary)}</p>

          {project.metric && (
            <div className="mt-8 inline-flex items-baseline gap-3 rounded-2xl border border-line bg-surface/60 px-6 py-4">
              <span className="font-display text-3xl font-bold" style={{ color }}>
                {project.metric.value}
              </span>
              <span className="text-sm text-muted">{t(project.metric.label)}</span>
            </div>
          )}
        </div>
      </header>

      {/* Imagen o gráfico generado */}
      <div className="mx-auto w-full max-w-4xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="-mt-px overflow-hidden rounded-2xl border border-line"
          style={{ background: `linear-gradient(135deg, ${softAccent(color, 8)}, transparent 70%)` }}
        >
          {project.cover ? (
            <img src={asset(project.cover)} alt="" className="h-64 w-full object-cover sm:h-80" />
          ) : (
            <MiniChart
              kind={project.chart}
              seed={project.slug}
              accent={project.accent}
              className="h-52 w-full p-8 text-fg sm:h-64"
            />
          )}
        </motion.div>
      </div>

      {/* Cuerpo */}
      <div className="mx-auto w-full max-w-4xl px-5 py-14 sm:px-8 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_15rem] lg:gap-14">
          <div className="space-y-12">
            {/* El resumen en tres pasos, igual que en la tarjeta */}
            <Reveal>
              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  { label: ui.project.problem, text: project.problem },
                  { label: ui.project.analysis, text: project.analysis },
                  { label: ui.project.solution, text: project.solution },
                ].map((step, stepIndex) => (
                  <div
                    key={stepIndex}
                    className="rounded-2xl border border-line bg-surface/60 p-5"
                  >
                    <p className="text-[0.66rem] font-bold uppercase tracking-[0.14em]" style={{ color }}>
                      {t(step.label)}
                    </p>
                    <p className="mt-2.5 text-sm leading-relaxed text-muted">{t(step.text)}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            {project.detail && (
              <>
                <Reveal>
                  <section>
                    <h2 className="font-display text-xl font-bold">{t(ui.project.context)}</h2>
                    <p className="mt-3 leading-relaxed text-muted">{t(project.detail.context)}</p>
                  </section>
                </Reveal>

                <Reveal>
                  <section>
                    <h2 className="font-display text-xl font-bold">{t(ui.project.data)}</h2>
                    <p className="mt-3 leading-relaxed text-muted">{t(project.detail.data)}</p>
                  </section>
                </Reveal>

                <Reveal>
                  <section>
                    <h2 className="font-display text-xl font-bold">{t(ui.project.process)}</h2>
                    <ol className="mt-5 space-y-5">
                      {project.detail.process.map((step, stepIndex) => (
                        <li key={stepIndex} className="relative flex gap-4">
                          <span
                            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold"
                            style={{ color, backgroundColor: `${softAccent(color, 10)}` }}
                          >
                            {stepIndex + 1}
                          </span>
                          <div>
                            <h3 className="font-display text-base font-bold">{t(step.title)}</h3>
                            <p className="mt-1 text-sm leading-relaxed text-muted">{t(step.text)}</p>
                          </div>
                        </li>
                      ))}
                    </ol>
                  </section>
                </Reveal>

                <Reveal>
                  <section>
                    <h2 className="font-display text-xl font-bold">{t(ui.project.findings)}</h2>
                    <ul className="mt-4 space-y-3">
                      {project.detail.findings.map((finding, findingIndex) => (
                        <li key={findingIndex} className="flex gap-3 leading-relaxed text-muted">
                          <span
                            className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full"
                            style={{ backgroundColor: color }}
                          />
                          {t(finding)}
                        </li>
                      ))}
                    </ul>
                  </section>
                </Reveal>

                <Reveal>
                  <section
                    className="rounded-2xl border p-6"
                    style={{ borderColor: `${softAccent(color, 25)}`, backgroundColor: `${softAccent(color, 5)}` }}
                  >
                    <h2 className="font-display text-xl font-bold">{t(ui.project.impact)}</h2>
                    <p className="mt-3 leading-relaxed text-muted">{t(project.detail.impact)}</p>
                  </section>
                </Reveal>
              </>
            )}
          </div>

          {/* Barra lateral */}
          <aside className="space-y-8 lg:sticky lg:top-28 lg:self-start">
            <div>
              <h3 className="text-[0.7rem] font-bold uppercase tracking-[0.14em] text-muted">
                {t(ui.project.tools)}
              </h3>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {project.tools.map((tool, toolIndex) => (
                  <li
                    key={toolIndex}
                    className="rounded-md border border-line bg-surface/60 px-2.5 py-1 text-xs text-muted"
                  >
                    {t(tool)}
                  </li>
                ))}
              </ul>
            </div>

            {project.links.length > 0 && (
              <div>
                <h3 className="text-[0.7rem] font-bold uppercase tracking-[0.14em] text-muted">
                  {t(ui.project.links)}
                </h3>
                <ul className="mt-3 space-y-2">
                  {project.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
                      >
                        {t(link.label)}
                        <ExternalIcon size={14} />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>
      </div>

      {/* Anterior / siguiente */}
      <nav className="border-t border-line">
        <div className="mx-auto grid w-full max-w-4xl gap-4 px-5 py-10 sm:grid-cols-2 sm:px-8">
          {previous ? (
            <Link
              to={`/proyecto/${previous.slug}`}
              className="group rounded-2xl border border-line bg-surface/60 p-5 transition-colors hover:border-accent/50"
            >
              <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted">
                <ArrowLeftIcon size={14} />
                {t(ui.project.prev)}
              </span>
              <p className="mt-2 font-display font-bold transition-colors group-hover:text-accent">
                {t(previous.title)}
              </p>
            </Link>
          ) : (
            <span />
          )}

          {next && (
            <Link
              to={`/proyecto/${next.slug}`}
              className="group rounded-2xl border border-line bg-surface/60 p-5 text-right transition-colors hover:border-accent/50 sm:col-start-2"
            >
              <span className="flex items-center justify-end gap-2 text-xs font-semibold uppercase tracking-wider text-muted">
                {t(ui.project.next)}
                <ArrowRightIcon size={14} />
              </span>
              <p className="mt-2 font-display font-bold transition-colors group-hover:text-accent">
                {t(next.title)}
              </p>
            </Link>
          )}
        </div>
      </nav>
    </article>
  )
}
