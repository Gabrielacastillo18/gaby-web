import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useCallback, useRef, useState } from 'react'
import { site } from '../content/site'
import { ui } from '../content/ui'
import { useLang } from '../context/LangContext'
import { CheckIcon } from './Icons'

/* El botón "No" se corre cada vez que lo intentan tocar, así que la única
   respuesta posible es que sí. Se mueve con transform dentro de los límites
   de la tarjeta, por lo que nunca se escapa del recuadro. */

const PADDING = 10

export function HireButtons() {
  const { t } = useLang()
  const reduced = useReducedMotion()

  const areaRef = useRef<HTMLDivElement>(null)
  const noRef = useRef<HTMLButtonElement>(null)
  const offsetRef = useRef({ x: 0, y: 0 })

  const [offset, setOffset] = useState({ x: 0, y: 0 })
  const [dodges, setDodges] = useState(0)
  const [accepted, setAccepted] = useState(false)

  const dodge = useCallback(() => {
    const area = areaRef.current
    const button = noRef.current
    if (!area || !button) return

    const areaBox = area.getBoundingClientRect()
    const buttonBox = button.getBoundingClientRect()
    const current = offsetRef.current

    // Posición del botón sin desplazamiento, para calcular los límites reales.
    const originLeft = buttonBox.left - current.x
    const originTop = buttonBox.top - current.y

    const minX = areaBox.left + PADDING - originLeft
    const maxX = areaBox.right - PADDING - buttonBox.width - originLeft
    const minY = areaBox.top + PADDING - originTop
    const maxY = areaBox.bottom - PADDING - buttonBox.height - originTop

    if (maxX <= minX || maxY <= minY) return

    // Buscamos un punto que esté razonablemente lejos del actual, para que
    // el salto se note; si no lo encontramos rápido, usamos el último.
    let next = current
    for (let attempt = 0; attempt < 14; attempt++) {
      const candidate = {
        x: minX + Math.random() * (maxX - minX),
        y: minY + Math.random() * (maxY - minY),
      }
      next = candidate
      const distance = Math.hypot(candidate.x - current.x, candidate.y - current.y)
      if (distance > Math.min(maxX - minX, maxY - minY) * 0.4) break
    }

    offsetRef.current = next
    setOffset(next)
    setDodges((count) => count + 1)
  }, [])

  const accept = () => {
    setAccepted(true)
    window.location.href = `mailto:${site.email}`
  }

  const reset = () => {
    setAccepted(false)
    setDodges(0)
    offsetRef.current = { x: 0, y: 0 }
    setOffset({ x: 0, y: 0 })
  }

  const message = dodges > 0 ? ui.hire.dodges[Math.min(dodges - 1, ui.hire.dodges.length - 1)] : null

  return (
    <div
      ref={areaRef}
      className="relative flex min-h-[11rem] flex-col items-center justify-center overflow-hidden rounded-2xl border border-line bg-bg/40 p-6 text-center"
    >
      <AnimatePresence mode="wait">
        {accepted ? (
          <motion.div
            key="accepted"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.92 }}
            transition={{ duration: 0.35 }}
            className="relative"
          >
            <Confetti active={!reduced} />
            <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-accent/15 text-accent">
              <CheckIcon size={22} />
            </span>
            <p className="mt-3 font-display text-lg font-bold">{t(ui.hire.yesTitle)}</p>
            <p className="mt-1 text-sm text-muted">{t(ui.hire.yesText)}</p>
            <button
              type="button"
              onClick={reset}
              className="mt-4 text-xs font-semibold text-accent underline-offset-4 hover:underline"
            >
              {t(ui.hire.yesAgain)}
            </button>
          </motion.div>
        ) : (
          <motion.div
            key="asking"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full"
          >
            <p className="font-display text-lg font-bold">{t(ui.hire.question)}</p>

            <div className="mt-6 flex items-center justify-center gap-4">
              <button
                type="button"
                onClick={accept}
                className="rounded-full bg-primary px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-transform hover:scale-105"
              >
                {t(ui.hire.yes)}
              </button>

              <motion.button
                ref={noRef}
                type="button"
                onMouseEnter={dodge}
                onPointerDown={(event) => {
                  event.preventDefault()
                  dodge()
                }}
                onFocus={dodge}
                onClick={dodge}
                aria-label={t(ui.hire.no)}
                className="rounded-full border border-fg/25 px-8 py-3 text-sm font-semibold text-muted"
                animate={{ x: offset.x, y: offset.y }}
                transition={
                  reduced
                    ? { duration: 0 }
                    : { type: 'spring', stiffness: 700, damping: 26, mass: 0.6 }
                }
              >
                {t(ui.hire.no)}
              </motion.button>
            </div>

            <div className="mt-5 h-5">
              <AnimatePresence mode="wait">
                {message && (
                  <motion.p
                    key={dodges}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.22 }}
                    className="text-xs text-muted"
                  >
                    {t(message)}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

/** Explosión de puntitos cuando aceptan. */
function Confetti({ active }: { active: boolean }) {
  if (!active) return null

  const colors = ['var(--primary)', 'var(--accent)', 'var(--violet)']

  return (
    <div className="pointer-events-none absolute left-1/2 top-2 h-0 w-0" aria-hidden="true">
      {Array.from({ length: 16 }).map((_, index) => {
        const angle = (index / 16) * Math.PI * 2
        const distance = 60 + (index % 4) * 18
        return (
          <motion.span
            key={index}
            className="absolute h-1.5 w-1.5 rounded-full"
            style={{ backgroundColor: colors[index % colors.length] }}
            initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
            animate={{
              x: Math.cos(angle) * distance,
              y: Math.sin(angle) * distance + 30,
              opacity: 0,
              scale: 0.4,
            }}
            transition={{ duration: 1.1, ease: 'easeOut', delay: index * 0.012 }}
          />
        )
      })}
    </div>
  )
}
