import type { CertificationItem, EducationItem } from './types'

export const education: EducationItem[] = [
  {
    degree: { es: 'Especialización en Análisis de Datos', en: 'Postgraduate Specialization in Data Analysis' },
    school: { es: 'Universidad de Buenos Aires (UBA)', en: 'University of Buenos Aires (UBA)' },
    location: { es: 'Buenos Aires, Argentina', en: 'Buenos Aires, Argentina' },
    period: { es: 'Egreso estimado: marzo 2027', en: 'Expected: March 2027' },
    detail: {
      es: 'Formación en modelos de clasificación, clustering y PCA aplicados a problemas de negocio, salud y gestión de procesos. Incluye Técnicas Operativas para la Gestión, Métodos de Análisis Multivariado, Taller de Programación, Métodos Analíticos Predictivos, Gestión y Procesamiento de Bases de Datos, y Proyecto Integrador Final.',
      en: 'Training in classification, clustering and PCA models applied to business, healthcare and process-management problems. Coursework includes Operational Management Techniques, Multivariate Analysis Methods, Programming Workshop, Predictive Analytical Methods, Database Management and Processing, and a Final Integrative Project.',
    },
    current: true,
  },
  {
    degree: { es: 'Licenciatura en Antropología', en: 'BA in Anthropology' },
    school: { es: 'Universidad de los Andes', en: 'Universidad de los Andes' },
    location: { es: 'Bogotá, Colombia', en: 'Bogotá, Colombia' },
    period: { es: '2020 – 2024', en: '2020 – 2024' },
    detail: {
      es: 'Formación en métodos de investigación cualitativa y cuantitativa, y en el análisis de comportamiento social.',
      en: 'Training in qualitative and quantitative research methods, and in the analysis of social behaviour.',
    },
    current: false,
  },
]

export const certifications: CertificationItem[] = [
  {
    name: { es: 'Data Science Foundation', en: 'Data Science Foundation' },
    issuer: { es: 'Programa GCI World · Matsuo Lab', en: 'GCI World Programme · Matsuo Lab' },
    detail: {
      es: 'Desarrollo de un proyecto de solución de datos de punta a punta.',
      en: 'End-to-end development of a data solution project.',
    },
  },
  {
    name: { es: 'UX Research', en: 'UX Research' },
    issuer: { es: 'Coderhouse', en: 'Coderhouse' },
    detail: null,
  },
  {
    name: { es: 'UX/UI Inicial y Avanzado', en: 'UX/UI Foundations and Advanced' },
    issuer: { es: 'Coderhouse', en: 'Coderhouse' },
    detail: {
      es: 'Dos cursos de aproximadamente 3 meses cada uno.',
      en: 'Two courses of roughly 3 months each.',
    },
  },
]
