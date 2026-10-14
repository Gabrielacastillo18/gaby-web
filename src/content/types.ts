/* Tipos compartidos por todos los archivos de contenido. */

export type Lang = 'es' | 'en'

/** Un texto que existe en los dos idiomas. */
export type I18nText = Record<Lang, string>

/** Atajo para términos que se escriben igual en ambos idiomas ("Python", "SQL"). */
export const same = (value: string): I18nText => ({ es: value, en: value })

export type ChartKind = 'area' | 'bars' | 'line' | 'scatter'

export interface ProjectLink {
  label: I18nText
  href: string
}

export interface ProcessStep {
  title: I18nText
  text: I18nText
}

export interface ProjectDetail {
  /** De dónde salió el problema y en qué contexto se trabajó. */
  context: I18nText
  /** Qué datos se usaron: origen, volumen, limitaciones. */
  data: I18nText
  /** El paso a paso del análisis. */
  process: ProcessStep[]
  /** Qué apareció en los datos. */
  findings: I18nText[]
  /** Qué cambió (o qué debería cambiar) gracias al análisis. */
  impact: I18nText
}

export interface Project {
  /** Identificador para la URL: #/proyecto/<slug>. Sin espacios ni acentos. */
  slug: string
  /** Se muestra tal cual en la tarjeta. Ej: "2026", "2025 · en curso". */
  year: string
  category: I18nText
  title: I18nText
  summary: I18nText
  /** El resumen de tres pasos que se ve en la tarjeta. */
  problem: I18nText
  analysis: I18nText
  solution: I18nText
  /** Número fuerte del proyecto. null si todavía no hay resultados medibles. */
  metric: { value: string; label: I18nText } | null
  tools: I18nText[]
  links: ProjectLink[]
  /** Aclaración opcional bajo el título (ej: si es un trabajo real o académico). */
  note: I18nText | null
  /** Miniatura: si hay imagen se usa esa, si no se dibuja un mini gráfico. */
  cover: string | null
  chart: ChartKind
  detail: ProjectDetail | null
}

export interface ExperienceItem {
  role: I18nText
  company: I18nText
  place: I18nText
  period: I18nText
  bullets: I18nText[]
  /** Se muestran como pastillas debajo de los datos del puesto. */
  tools: I18nText[]
}

export interface EducationItem {
  degree: I18nText
  school: I18nText
  location: I18nText
  period: I18nText
  detail: I18nText | null
  current: boolean
}

export interface CertificationItem {
  name: I18nText
  issuer: I18nText
  detail: I18nText | null
}

/** Ícono disponible para las tarjetas de contenido. */
export type IconName =
  | 'user'
  | 'target'
  | 'layers'
  | 'graduation'
  | 'book'
  | 'chart'
  | 'spark'
  | 'bulb'
  | 'leaf'
  | 'heart'
  | 'briefcase'

/** Bloque de texto con ícono y título (columna izquierda de "Sobre mí"). */
export interface AboutBlock {
  icon: IconName
  title: I18nText
  text: I18nText
}

/** Tarjeta chica de dato (columna derecha de "Sobre mí"). */
export interface AboutFact {
  icon: IconName
  title: I18nText
  subtitle: I18nText
  detail: I18nText
}

/** Herramienta con barra de nivel. */
export interface Skill {
  /** Logo de marca si existe; si no, se usa el ícono genérico. */
  tool: 'python' | 'sql' | 'excel' | 'powerbi' | null
  icon: IconName
  name: string
  description: I18nText
  /** Nivel de dominio, de 0 a 100. Es una autoevaluación: ajustala. */
  level: number
}

export interface Passion {
  icon: IconName
  title: I18nText
  text: I18nText
}

/** Un medio de contacto de la sección final. */
export interface ContactChannel {
  icon: 'pin' | 'mail' | 'linkedin' | 'github' | 'phone'
  label: I18nText
  value: string
  href: string
  /** Color del ícono: rotan entre los tres tonos de la paleta, para que la
      grilla no se vea toda del mismo azul. */
  tone: 'primary' | 'accent' | 'violet'
}
