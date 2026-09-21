import { motion, useReducedMotion } from 'framer-motion'
import { heroBadge, heroIntro, heroStats, heroTitle, site } from '../content/site'
import { ui } from '../content/ui'
import { useLang } from '../context/LangContext'
import { asset } from '../lib/assets'
import { AreaChartBg } from './AreaChartBg'
import { ArrowDownIcon, ArrowRightIcon, DownloadIcon, PinIcon } from './Icons'
import { Portrait } from './Portrait'

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export function Hero() {
  const { t, lang } = useLang()
  const reduced = useReducedMotion()

  // Entrada escalonada: primero el retrato, después el texto de arriba a abajo.
  const fadeUp = (delay: number) => ({
    initial: reduced ? { opacity: 0 } : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
  })

  return (
    <section
      id="home"
      className="hero-gradient relative flex min-h-[100svh] items-center overflow-hidden pt-24"
    >
      {/* Orbes difusos */}
      <div
        className="pointer-events-none absolute -right-20 top-[12%] h-96 w-96 rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle, var(--glow-1) 0%, transparent 70%)' }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-24 bottom-[18%] h-80 w-80 rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle, var(--glow-2) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="dot-grid pointer-events-none absolute inset-0 opacity-50" aria-hidden="true" />

      <AreaChartBg />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-14 px-5 pb-24 pt-8 sm:px-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-16">
        {/* Columna de texto */}
        <div className="order-2 text-center lg:order-1 lg:text-left">
          <motion.span
            {...fadeUp(0.45)}
            className="inline-flex items-center gap-2.5 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-medium tracking-wide text-accent backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            {t(heroBadge)}
          </motion.span>

          <motion.h1
            {...fadeUp(0.55)}
            className="mt-7 text-[2.6rem] font-extrabold leading-[1.07] sm:text-6xl lg:text-[4.1rem]"
          >
            {t(heroTitle.pre)} <span className="text-gradient">{t(heroTitle.mark)}</span>{' '}
            {t(heroTitle.post)}
          </motion.h1>

          <motion.p
            {...fadeUp(0.68)}
            className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg lg:mx-0"
          >
            {t(heroIntro)}
          </motion.p>

          <motion.div
            {...fadeUp(0.8)}
            className="mt-9 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
          >
            <button
              type="button"
              onClick={() => scrollTo('projects')}
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/35"
            >
              {t(ui.hero.cta)}
              <ArrowRightIcon size={16} className="transition-transform group-hover:translate-x-1" />
            </button>

            <a
              href={asset(site.cv[lang])}
              download
              className="inline-flex items-center gap-2 rounded-full border border-fg/25 px-7 py-3.5 text-sm font-semibold transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent"
            >
              <DownloadIcon size={16} />
              {t(ui.hero.cv)}
            </a>
          </motion.div>

          <motion.p
            {...fadeUp(0.88)}
            className="mt-7 flex items-center justify-center gap-2 text-sm text-muted lg:justify-start"
          >
            <PinIcon size={15} className="text-accent" />
            {t(site.location)}
          </motion.p>

          {/* Números fuertes */}
          <motion.dl
            {...fadeUp(0.96)}
            className="mt-10 grid grid-cols-1 gap-x-8 gap-y-5 border-t border-line pt-8 sm:grid-cols-3"
          >
            {heroStats.map((stat) => (
              <div key={stat.value}>
                <dt className="font-display text-2xl font-bold text-gradient sm:text-[1.75rem]">
                  {stat.value}
                </dt>
                <dd className="mt-1 text-xs leading-snug text-muted">{t(stat.label)}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        {/* Retrato */}
        <div className="order-1 lg:order-2">
          <Portrait />
        </div>
      </div>

      {/* Indicador de scroll */}
      <motion.button
        type="button"
        onClick={() => scrollTo('about')}
        aria-label={t(ui.hero.scroll)}
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-1.5 text-muted transition-colors hover:text-accent sm:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
      >
        <span className="text-[0.65rem] uppercase tracking-[0.2em]">{t(ui.hero.scroll)}</span>
        <motion.span
          animate={reduced ? undefined : { y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDownIcon size={16} />
        </motion.span>
      </motion.button>
    </section>
  )
}
