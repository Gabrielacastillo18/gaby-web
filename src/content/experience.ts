import type { ExperienceItem } from './types'

/* Experiencia laboral, de lo más reciente a lo más antiguo. */

export const experience: ExperienceItem[] = [
  {
    role: { es: 'Analista de Cuentas Médicas', en: 'Medical Accounts Analyst' },
    company: { es: 'Hospital de Alcalá', en: 'Hospital de Alcalá' },
    place: { es: 'Bogotá, Colombia · Remoto', en: 'Bogotá, Colombia · Remote' },
    period: { es: 'Ene 2026 – Jul 2026', en: 'Jan 2026 – Jul 2026' },
    bullets: [
      {
        es: 'Revisó y depuró bases de datos en Excel para identificar las inconsistencias que impedían el pago de cartera.',
        en: 'Reviewed and cleaned Excel databases to identify the inconsistencies blocking receivables payment.',
      },
      {
        es: 'Recuperó USD 123.000 de una cartera vencida de USD 370.000 en los primeros 3 meses, negociando directamente con las EPS.',
        en: 'Recovered USD 123,000 of a USD 370,000 overdue portfolio within the first 3 months, negotiating directly with insurers.',
      },
      {
        es: 'Auditó y concilió cuentas médicas en carteras de entre 20 y 400 pacientes por entidad.',
        en: 'Audited and reconciled medical accounts across portfolios of 20 to 400 patients per entity.',
      },
    ],
    tools: [
      { es: 'Excel avanzado', en: 'Advanced Excel' },
      { es: 'Auditoría de datos', en: 'Data auditing' },
      { es: 'Conciliación de cuentas', en: 'Account reconciliation' },
      { es: 'Negociación', en: 'Negotiation' },
    ],
  },
  {
    role: { es: 'Investigadora / Analista Sociojurídica', en: 'Researcher / Socio-legal Analyst' },
    company: { es: 'Independiente (freelance por proyecto)', en: 'Independent (freelance, per project)' },
    place: { es: 'Bogotá, Colombia', en: 'Bogotá, Colombia' },
    period: { es: 'Jun 2025 – Dic 2025', en: 'Jun 2025 – Dec 2025' },
    bullets: [
      {
        es: 'Realizó análisis cualitativo (entrevistas semiestructuradas, revisión bibliográfica) y cuantitativo de métricas de unión familiar para un caso sociojurídico comparado entre Colombia y Ohio (EE. UU.).',
        en: 'Carried out qualitative analysis (semi-structured interviews, literature review) and quantitative analysis of family cohesion metrics for a socio-legal case comparing Colombia and Ohio (USA).',
      },
      {
        es: 'Elaboró el informe pericial presentado ante tribunal, que contribuyó a un fallo favorable en primera instancia.',
        en: 'Produced the expert report submitted to court, which contributed to a favourable first-instance ruling.',
      },
    ],
    tools: [
      { es: 'Investigación cualitativa', en: 'Qualitative research' },
      { es: 'Entrevistas semiestructuradas', en: 'Semi-structured interviews' },
      { es: 'Análisis cuantitativo', en: 'Quantitative analysis' },
      { es: 'Informe pericial', en: 'Expert reporting' },
    ],
  },
  {
    role: { es: 'Practicante de Innovación', en: 'Innovation Intern' },
    company: { es: 'Grupo Bolívar', en: 'Grupo Bolívar' },
    place: { es: 'Bogotá, Colombia', en: 'Bogotá, Colombia' },
    period: { es: 'Ene 2024 – Jul 2024', en: 'Jan 2024 – Jul 2024' },
    bullets: [
      {
        es: 'Analizó desafíos operativos e investigó UX en el proceso de peticiones, quejas y reclamos (PQR), con un promedio de 400 casos mensuales.',
        en: 'Analysed operational challenges and ran UX research on the complaints and claims process, averaging 400 cases per month.',
      },
      {
        es: 'Rediseñó con Figma, Excel y Power BI el flujo de atención, orientado a reducir los 150–200 reclamos repetidos que se registraban por mes.',
        en: 'Redesigned the service flow with Figma, Excel and Power BI, aimed at reducing the 150–200 repeated claims recorded each month.',
      },
    ],
    tools: [
      { es: 'Figma', en: 'Figma' },
      { es: 'Power BI', en: 'Power BI' },
      { es: 'Excel', en: 'Excel' },
      { es: 'Investigación UX', en: 'UX research' },
    ],
  },
]
