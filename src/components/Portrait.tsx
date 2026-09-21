import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'
import { site } from '../content/site'
import { ui } from '../content/ui'
import { useLang } from '../context/LangContext'
import { asset } from '../lib/assets'

/* Retrato circular con elementos de visualización de datos en órbita.
   Cada órbita gira a distinta velocidad; la pastilla gira al revés a la
   misma velocidad para quedar siempre derecha. */

function Orbit({
  scale,
  duration,
  angle,
  reverse = false,
  children,
}: {
  /** Diámetro de la órbita como proporción del retrato (1.2 = 20% más grande). */
  scale: number
  duration: number
  angle: number
  reverse?: boolean
  children: ReactNode
}) {
  const reduced = useReducedMotion()
  const spin = reverse ? -360 : 360

  return (
    <div
      className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      style={{ width: `${scale * 100}%`, aspectRatio: '1' }}
    >
      <motion.div
        className="h-full w-full"
        animate={reduced ? undefined : { rotate: spin }}
        transition={{ duration, ease: 'linear', repeat: Infinity }}
      >
        <div className="h-full w-full" style={{ transform: `rotate(${angle}deg)` }}>
          <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
            <motion.div
              animate={reduced ? undefined : { rotate: -spin }}
              transition={{ duration, ease: 'linear', repeat: Infinity }}
            >
              {children}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

const chipClass =
  'glass flex h-12 w-12 items-center justify-center rounded-2xl border border-line shadow-lg shadow-black/5 sm:h-14 sm:w-14'

/** Pastilla con barras que suben y bajan. */
function BarsChip() {
  const reduced = useReducedMotion()
  const bars = [
    { x: 6, base: 10, peak: 22 },
    { x: 17, base: 18, peak: 30 },
    { x: 28, base: 13, peak: 26 },
  ]

  return (
    <div className={`${chipClass}`}>
      <svg width="40" height="34" viewBox="0 0 40 34" aria-hidden="true">
        {bars.map((bar, i) => (
          <motion.rect
            key={i}
            x={bar.x}
            width="7"
            rx="2.5"
            fill="var(--accent)"
            initial={{ height: bar.base, y: 30 - bar.base }}
            animate={
              reduced
                ? undefined
                : {
                    height: [bar.base, bar.peak, bar.base],
                    y: [30 - bar.base, 30 - bar.peak, 30 - bar.base],
                  }
            }
            transition={{ duration: 2.6, repeat: Infinity, delay: i * 0.25, ease: 'easeInOut' }}
          />
        ))}
      </svg>
    </div>
  )
}

/** Pastilla con una línea que se dibuja sola. */
function LineChip() {
  const reduced = useReducedMotion()

  return (
    <div className={`${chipClass}`}>
      <svg width="40" height="34" viewBox="0 0 40 34" aria-hidden="true">
        <motion.path
          d="M4 26 L13 16 L21 21 L36 6"
          fill="none"
          stroke="var(--primary)"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: reduced ? 1 : 0 }}
          animate={reduced ? undefined : { pathLength: [0, 1, 1, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, times: [0, 0.45, 0.8, 1] }}
        />
        <circle cx="36" cy="6" r="3" fill="var(--primary)" />
      </svg>
    </div>
  )
}

/** Pastilla con un anillo de progreso. */
function DonutChip() {
  const reduced = useReducedMotion()
  const radius = 13
  const circumference = 2 * Math.PI * radius

  return (
    <div className={`${chipClass}`}>
      <svg width="36" height="36" viewBox="0 0 36 36" aria-hidden="true">
        <circle cx="18" cy="18" r={radius} fill="none" stroke="var(--line)" strokeWidth="4" />
        <motion.circle
          cx="18"
          cy="18"
          r={radius}
          fill="none"
          stroke="var(--violet)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray={circumference}
          transform="rotate(-90 18 18)"
          initial={{ strokeDashoffset: circumference * 0.34 }}
          animate={
            reduced
              ? undefined
              : { strokeDashoffset: [circumference, circumference * 0.34, circumference * 0.34] }
          }
          transition={{ duration: 3.4, repeat: Infinity, times: [0, 0.55, 1], ease: 'easeOut' }}
        />
      </svg>
    </div>
  )
}

export function Portrait() {
  const { t } = useLang()
  const reduced = useReducedMotion()

  return (
    <motion.div
      className="relative mx-auto aspect-square w-[clamp(15rem,64vw,21rem)] lg:w-[23rem]"
      initial={reduced ? { opacity: 0 } : { opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Halo difuso detrás de la foto */}
      <div
        className="absolute -inset-10 rounded-full blur-3xl"
        style={{
          background: 'radial-gradient(circle, var(--glow-2) 0%, transparent 68%)',
        }}
        aria-hidden="true"
      />

      {/* Anillo punteado que gira lento, como el borde de un gráfico circular */}
      <motion.svg
        className="absolute -inset-3"
        viewBox="0 0 100 100"
        aria-hidden="true"
        animate={reduced ? undefined : { rotate: 360 }}
        transition={{ duration: 90, ease: 'linear', repeat: Infinity }}
      >
        <circle
          cx="50"
          cy="50"
          r="48"
          fill="none"
          stroke="var(--accent)"
          strokeOpacity="0.45"
          strokeWidth="0.5"
          strokeDasharray="1 5"
          strokeLinecap="round"
        />
      </motion.svg>

      {/* La foto */}
      <div className="absolute inset-0 overflow-hidden rounded-full border-2 border-accent/45 shadow-2xl shadow-black/25">
        <picture>
          <source srcSet={asset(site.photoWebp)} type="image/webp" />
          <img
            src={asset(site.photo)}
            alt={t(ui.a11y.portrait)}
            width={900}
            height={900}
            loading="eager"
            className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-[1.04]"
          />
        </picture>
      </div>

      {/* Elementos en órbita */}
      <Orbit scale={1.13} duration={34} angle={18}>
        <BarsChip />
      </Orbit>
      <Orbit scale={1.06} duration={46} angle={205} reverse>
        <LineChip />
      </Orbit>
      <Orbit scale={1.2} duration={58} angle={128}>
        <DonutChip />
      </Orbit>
    </motion.div>
  )
}
