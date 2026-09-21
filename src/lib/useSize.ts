import { useEffect, useState, type RefObject } from 'react'

/**
 * Mide el tamaño real que ocupa un elemento en pantalla.
 * Lo usamos para dibujar los gráficos en píxeles reales: si el SVG se estira
 * para llenar su caja, los círculos se deformarían en óvalos.
 */
export function useSize(ref: RefObject<Element | null>, fallback: { w: number; h: number }) {
  const [size, setSize] = useState(fallback)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect
      if (width > 0 && height > 0) {
        setSize({ w: Math.round(width), h: Math.round(height) })
      }
    })

    observer.observe(element)
    return () => observer.disconnect()
  }, [ref])

  return size
}
