/* Generadores de paths SVG para los gráficos decorativos del sitio.
   Todo es determinístico: la misma semilla dibuja siempre la misma curva,
   así el diseño no cambia entre recargas. */

/** Generador congruencial lineal: aleatorio pero reproducible. */
export function seeded(seed: number) {
  let state = seed % 2147483647
  if (state <= 0) state += 2147483646
  return () => {
    state = (state * 16807) % 2147483647
    return (state - 1) / 2147483646
  }
}

/** Convierte un texto en una semilla numérica estable. */
export function hashSeed(text: string) {
  let hash = 0
  for (let i = 0; i < text.length; i++) {
    hash = (hash * 31 + text.charCodeAt(i)) % 2147483647
  }
  return hash || 1
}

/**
 * Serie suave de valores entre 0 y 1: mezcla ruido con una tendencia,
 * para que parezca una métrica real y no puro ruido.
 */
export function series(count: number, seed: number, base = 0.45, amplitude = 0.3): number[] {
  const random = seeded(seed)
  const values: number[] = []
  let current = base
  for (let i = 0; i < count; i++) {
    current += (random() - 0.5) * amplitude
    const trend = Math.sin((i / count) * Math.PI * 1.5) * 0.12
    const value = Math.min(0.96, Math.max(0.06, current + trend))
    values.push(value)
    current = value
  }
  return values
}

type Point = [number, number]

/** Spline cardinal: une los puntos con curvas en lugar de rectas. */
function smooth(points: Point[]): string {
  if (points.length === 0) return ''
  const at = (i: number) => points[Math.min(points.length - 1, Math.max(0, i))]
  let d = `M ${points[0][0].toFixed(2)} ${points[0][1].toFixed(2)}`
  for (let i = 0; i < points.length - 1; i++) {
    const [x0, y0] = at(i - 1)
    const [x1, y1] = at(i)
    const [x2, y2] = at(i + 1)
    const [x3, y3] = at(i + 2)
    const c1x = x1 + (x2 - x0) / 6
    const c1y = y1 + (y2 - y0) / 6
    const c2x = x2 - (x3 - x1) / 6
    const c2y = y2 - (y3 - y1) / 6
    d += ` C ${c1x.toFixed(2)} ${c1y.toFixed(2)}, ${c2x.toFixed(2)} ${c2y.toFixed(2)}, ${x2.toFixed(2)} ${y2.toFixed(2)}`
  }
  return d
}

function toPoints(values: number[], width: number, height: number, padding: number): Point[] {
  const step = width / (values.length - 1)
  const usable = height - padding * 2
  return values.map((value, i) => [i * step, padding + (1 - value) * usable] as Point)
}

/** Curva abierta (gráfico de líneas). */
export function linePath(values: number[], width: number, height: number, padding = 0) {
  return smooth(toPoints(values, width, height, padding))
}

/** Curva cerrada contra la base (gráfico de área). */
export function areaPath(values: number[], width: number, height: number, padding = 0) {
  const points = toPoints(values, width, height, padding)
  const last = points[points.length - 1]
  return `${smooth(points)} L ${last[0].toFixed(2)} ${height} L 0 ${height} Z`
}

/**
 * Serie que se puede repetir sin costura: se duplica el mismo tramo,
 * de modo que desplazarla media vuelta deja la curva idéntica.
 */
export function tiledSeries(count: number, seed: number, base?: number, amplitude?: number) {
  const values = series(count, seed, base, amplitude)
  // El último valor vuelve al primero para que el empalme sea continuo.
  const closed = [...values.slice(0, -1), values[0]]
  return [...closed, ...closed.slice(1)]
}
