import { motion, useReducedMotion } from 'framer-motion'
import { areaPath, tiledSeries } from '../lib/chart'

/* Fondo del hero: tres áreas apiladas que se desplazan en loop infinito.
   Las series están construidas para repetirse sin costura, así el
   movimiento no tiene saltos. */

const WIDTH = 2400
const HEIGHT = 420

const layers = [
  { values: tiledSeries(9, 4211, 0.62, 0.34), color: 'var(--primary)', opacity: 0.55, duration: 54 },
  { values: tiledSeries(9, 90137, 0.44, 0.3), color: 'var(--accent)', opacity: 0.5, duration: 42 },
  { values: tiledSeries(9, 17, 0.26, 0.24), color: 'var(--violet)', opacity: 0.45, duration: 66 },
]

export function AreaChartBg() {
  const reduced = useReducedMotion()

  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      style={{ opacity: 'var(--chart-opacity)' }}
      aria-hidden="true"
    >
      {/* Líneas guía, como la grilla de un gráfico */}
      <div className="absolute inset-0 flex flex-col justify-end">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="h-[11%] border-t border-fg/10" />
        ))}
      </div>

      {layers.map((layer, index) => (
        <motion.div
          key={index}
          className="absolute bottom-0 left-0 h-[58%] w-[200%]"
          animate={reduced ? undefined : { x: ['0%', '-50%'] }}
          transition={{ duration: layer.duration, ease: 'linear', repeat: Infinity }}
        >
          <svg
            viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
            preserveAspectRatio="none"
            className="h-full w-full"
          >
            <path
              d={areaPath(layer.values, WIDTH, HEIGHT)}
              fill={layer.color}
              fillOpacity={layer.opacity}
              stroke={layer.color}
              strokeOpacity={0.9}
              strokeWidth={2}
            />
          </svg>
        </motion.div>
      ))}
    </div>
  )
}
