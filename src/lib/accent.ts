import type { Accent } from '../content/types'

/** Color de acento de cada proyecto, para la miniatura y los detalles. */
export const accentColor: Record<Accent, string> = {
  blue: 'var(--primary)',
  cyan: 'var(--accent)',
  indigo: 'var(--violet)',
  violet: '#a855f7',
  emerald: '#10b981',
}

/**
 * Versión translúcida de un color.
 * Usamos color-mix y no un sufijo hexadecimal porque varios acentos son
 * variables CSS: pegarles "1a" al final produce CSS inválido y el color
 * desaparece sin aviso.
 */
export const softAccent = (color: string, percent: number) =>
  `color-mix(in srgb, ${color} ${percent}%, transparent)`
