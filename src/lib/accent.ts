/**
 * Color único para todo lo relacionado con proyectos: categoría, número
 * destacado, gráficos, bordes de la página de detalle. Antes cada proyecto
 * tenía su propio color (arcoíris); ahora todos comparten este, para que la
 * grilla se vea uniforme y prolija.
 *
 * Para cambiarlo alcanza con tocar esta línea.
 */
export const projectAccent = 'var(--accent)'

/**
 * Versión translúcida de un color.
 * Usamos color-mix y no un sufijo hexadecimal porque varios colores del
 * sitio son variables CSS: pegarles "1a" al final produce CSS inválido y el
 * color desaparece sin aviso.
 */
export const softAccent = (color: string, percent: number) =>
  `color-mix(in srgb, ${color} ${percent}%, transparent)`
