import type { I18nText, Skill } from './types'

/* -------------------------------------------------------------------
   Herramientas con barra de nivel.

   OJO: "level" es una autoevaluación (0 a 100) y hoy tiene valores
   tentativos. Revisalos, son los únicos números del sitio que no salen
   del CV.
   ------------------------------------------------------------------- */

export const skills: Skill[] = [
  {
    tool: 'python',
    icon: 'chart',
    name: 'Python',
    description: { es: 'pandas, NumPy, scikit-learn, matplotlib', en: 'pandas, NumPy, scikit-learn, matplotlib' },
    level: 85,
  },
  {
    tool: 'sql',
    icon: 'layers',
    name: 'SQL',
    description: {
      es: 'Consultas, cruces y depuración de bases',
      en: 'Queries, joins and database cleaning',
    },
    level: 80,
  },
  {
    tool: 'powerbi',
    icon: 'chart',
    name: 'Power BI',
    description: {
      es: 'Tableros y visualización de datos',
      en: 'Dashboards and data visualization',
    },
    level: 80,
  },
  {
    tool: 'excel',
    icon: 'layers',
    name: 'Excel',
    description: {
      es: 'Fórmulas avanzadas, tablas dinámicas, auditoría',
      en: 'Advanced formulas, pivot tables, auditing',
    },
    level: 90,
  },
  {
    tool: null,
    icon: 'bulb',
    name: 'scikit-learn',
    description: {
      es: 'Clasificación, clustering, PCA, random forest',
      en: 'Classification, clustering, PCA, random forest',
    },
    level: 75,
  },
  {
    tool: null,
    icon: 'target',
    name: 'Figma',
    description: {
      es: 'Diseño de interfaces e investigación UX',
      en: 'Interface design and UX research',
    },
    level: 70,
  },
]

/** Pastillas que van debajo de la grilla de herramientas. */
export const additionalSkills: I18nText[] = [
  { es: 'Análisis exploratorio (EDA)', en: 'Exploratory analysis (EDA)' },
  { es: 'Auditoría de datos', en: 'Data auditing' },
  { es: 'Análisis discriminante', en: 'Discriminant analysis' },
  { es: 'Regresión logística', en: 'Logistic regression' },
  { es: 'Cadenas de Markov', en: 'Markov chains' },
  { es: 'Investigación cualitativa', en: 'Qualitative research' },
  { es: 'Investigación UX', en: 'UX research' },
  { es: 'Comunicación de resultados', en: 'Communicating results' },
  { es: 'Español (nativo)', en: 'Spanish (native)' },
  { es: 'Inglés', en: 'English' },
]
