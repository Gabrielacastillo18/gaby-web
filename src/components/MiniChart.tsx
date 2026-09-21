import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'
import type { Accent, ChartKind } from '../content/types'
import { accentColor } from '../lib/accent'
import { areaPath, hashSeed, linePath, seeded, series } from '../lib/chart'
import { useSize } from '../lib/useSize'

/* Miniatura de cada proyecto: en vez de una foto de stock, un mini gráfico
   generado a partir del slug. Siempre distinto, siempre el mismo.

   Dos detalles que importan:
   - El disparador de la animación se mide sobre el <svg> y no sobre cada forma:
     una barra que arranca en altura cero no tiene área, y el observador de
     intersección nunca la daría por visible.
   - El lienzo se dibuja en píxeles reales en vez de estirar un viewBox fijo,
     así los puntos del scatter son círculos y no óvalos. */

const FALLBACK = { w: 240, h: 120 }
const EASE = [0.22, 1, 0.36, 1] as const

export function MiniChart({
  kind,
  seed,
  accent,
  className = '',
}: {
  kind: ChartKind
  seed: string
  accent: Accent
  className?: string
}) {
  const reduced = useReducedMotion()
  const ref = useRef<SVGSVGElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.25 })
  const show = reduced || inView
  const { w: W, h: H } = useSize(ref, FALLBACK)

  const color = accentColor[accent]
  const numericSeed = hashSeed(seed)
  const values = series(kind === 'bars' ? 9 : 14, numericSeed, 0.5, 0.34)
  const inset = Math.min(14, H * 0.12)

  return (
    <svg ref={ref} viewBox={`0 0 ${W} ${H}`} className={className} aria-hidden="true">
      {/* Grilla de fondo */}
      {[0.25, 0.5, 0.75].map((ratio) => (
        <line
          key={ratio}
          x1="0"
          x2={W}
          y1={H * ratio}
          y2={H * ratio}
          stroke="currentColor"
          strokeOpacity="0.12"
          strokeWidth="1"
        />
      ))}

      {kind === 'area' && (
        <>
          <motion.path
            d={areaPath(values, W, H, inset)}
            fill={color}
            fillOpacity="0.22"
            initial={{ opacity: 0 }}
            animate={{ opacity: show ? 1 : 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <motion.path
            d={linePath(values, W, H, inset)}
            fill="none"
            stroke={color}
            strokeWidth="2.5"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: show ? 1 : 0, opacity: show ? 1 : 0 }}
            transition={{ duration: 1.1, ease: EASE }}
          />
        </>
      )}

      {kind === 'line' && (
        <>
          <motion.path
            d={linePath(values, W, H, inset)}
            fill="none"
            stroke={color}
            strokeWidth="2.5"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: show ? 1 : 0, opacity: show ? 1 : 0 }}
            transition={{ duration: 1.1, ease: EASE }}
          />
          {values.map((value, index) =>
            index % 3 === 0 ? (
              <motion.circle
                key={index}
                cx={(index / (values.length - 1)) * W}
                cy={inset + (1 - value) * (H - inset * 2)}
                r="3"
                fill={color}
                initial={{ opacity: 0 }}
                animate={{ opacity: show ? 1 : 0 }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.04 }}
              />
            ) : null,
          )}
        </>
      )}

      {kind === 'bars' &&
        values.map((value, index) => {
          const barWidth = Math.max(3, W / values.length - W * 0.025)
          const height = value * (H - inset * 1.6)
          return (
            <motion.rect
              key={index}
              x={index * (W / values.length) + W * 0.0125}
              y={H - height}
              width={barWidth}
              height={height}
              rx={Math.min(4, W * 0.015)}
              fill={color}
              fillOpacity={0.45 + (index % 3) * 0.2}
              // La barra ya nace con su tamaño final y crece desde la base,
              // así conserva área y el observador la detecta.
              style={{ transformBox: 'fill-box', transformOrigin: 'bottom' }}
              initial={{ scaleY: 0 }}
              animate={{ scaleY: show ? 1 : 0 }}
              transition={{ duration: 0.7, delay: index * 0.05, ease: EASE }}
            />
          )
        })}

      {kind === 'scatter' && (
        <ScatterMarks color={color} seed={numericSeed} show={show} w={W} h={H} />
      )}
    </svg>
  )
}

function ScatterMarks({
  color,
  seed,
  show,
  w,
  h,
}: {
  color: string
  seed: number
  show: boolean
  w: number
  h: number
}) {
  const random = seeded(seed)
  const unit = Math.min(w, h) / 40
  const dots = Array.from({ length: 30 }, (_, index) => {
    const cluster = index % 2
    return {
      cx: random() * (w - unit * 8) + unit * 4,
      cy: h * 0.1 + random() * h * 0.8 * (cluster ? 0.55 : 1) + (cluster ? h * 0.26 : 0),
      r: unit * (1 + random()),
      o: 0.35 + random() * 0.5,
    }
  })

  return (
    <>
      {dots.map((dot, index) => (
        <motion.circle
          key={index}
          cx={dot.cx}
          cy={dot.cy}
          r={dot.r}
          fill={color}
          fillOpacity={dot.o}
          style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: show ? 1 : 0, opacity: show ? 1 : 0 }}
          transition={{ duration: 0.45, delay: index * 0.02, ease: EASE }}
        />
      ))}
    </>
  )
}
