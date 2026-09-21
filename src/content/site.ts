import type { I18nText } from './types'

/* -------------------------------------------------------------------
   Datos personales, textos del hero y de la sección "Sobre mí".
   Editar acá cambia el encabezado, la presentación y los contactos.
   ------------------------------------------------------------------- */

export const site = {
  fullName: 'Lina Gabriela Castillo',
  shortName: 'Gabriela',
  /** Se muestra en el logo de la barra superior. */
  initials: 'GC',

  role: {
    es: 'Analista de datos',
    en: 'Data Analyst',
  } as I18nText,

  location: {
    es: 'Buenos Aires, Argentina',
    en: 'Buenos Aires, Argentina',
  } as I18nText,

  email: 'gabscast1820@gmail.com',
  linkedin: 'https://www.linkedin.com/in/castillogabriela/',
  /** Cuando exista el repo, pegar la URL acá. Vacío = no se muestra el botón. */
  github: '',

  photo: 'img/gaby.jpg',
  photoWebp: 'img/gaby.webp',

  /** Archivo dentro de /public. Reemplazar por el PDF cuando esté exportado. */
  cv: {
    es: 'cv/CV-Gabriela-Castillo-ES.docx',
    en: 'cv/CV-Gabriela-Castillo-ES.docx',
  } as I18nText,
}

/** Pastilla chica arriba del título del hero. */
export const heroBadge: I18nText = {
  es: 'Analista de datos · Especialización en curso (UBA)',
  en: 'Data Analyst · Postgraduate in progress (UBA)',
}

/**
 * Título del hero, partido en tres para poder pintar la palabra del medio
 * con el degradado azul → celeste.
 */
export const heroTitle = {
  pre: { es: 'Convierto datos en', en: 'Turning data into' } as I18nText,
  mark: { es: 'decisiones', en: 'decisions' } as I18nText,
  post: { es: 'que se pueden defender', en: 'you can defend' } as I18nText,
}

export const heroIntro: I18nText = {
  es: 'Hola, soy Gabriela. Analista de datos con formación en antropología: uso Python, SQL y Power BI para responder preguntas de negocio, sin perder de vista la pregunta que casi nadie hace primero — qué decisión hay detrás del dato.',
  en: "Hi, I'm Gabriela. A data analyst with a background in anthropology: I use Python, SQL and Power BI to answer business questions, without losing sight of the one question few people ask first — what decision is behind the data.",
}

/** Números que se muestran abajo del hero. */
export const heroStats: { value: string; label: I18nText }[] = [
  {
    value: 'USD 123K',
    label: { es: 'recuperados en cartera vencida', en: 'recovered in overdue receivables' },
  },
  {
    value: '6/9',
    label: { es: 'materias de la Especialización (UBA)', en: 'courses of the UBA postgraduate' },
  },
  {
    value: '5',
    label: { es: 'proyectos de análisis y modelado', en: 'analysis and modeling projects' },
  },
]

/** Párrafos de la sección "Sobre mí". Agregar o sacar elementos del array. */
export const aboutParagraphs: I18nText[] = [
  {
    es: 'Soy analista de datos y antropóloga. La mezcla no es casual: pasé cuatro años aprendiendo a hacer preguntas sobre cómo se comporta la gente, y hoy uso Python, SQL y Power BI para responderlas con evidencia.',
    en: 'I am a data analyst and an anthropologist. The mix is not accidental: I spent four years learning how to ask questions about how people behave, and today I use Python, SQL and Power BI to answer them with evidence.',
  },
  {
    es: 'Actualmente curso la Especialización en Análisis de Datos de la UBA, donde trabajo con modelos de clasificación, clustering y PCA. En paralelo, auditar cuentas médicas me enseñó algo que ningún curso enseña: un modelo no sirve si los datos de entrada están sucios, y limpiarlos es la mitad del trabajo.',
    en: 'I am currently taking the Data Analysis postgraduate programme at the University of Buenos Aires, working with classification, clustering and PCA models. Meanwhile, auditing medical accounts taught me something no course does: a model is worthless if the input data is dirty, and cleaning it is half the job.',
  },
  {
    es: 'Me interesan los problemas donde el análisis tiene consecuencias concretas: plata que se recupera, procesos que dejan de repetirse, cosechas que no se pierden.',
    en: 'I am drawn to problems where analysis has concrete consequences: money that gets recovered, processes that stop repeating themselves, harvests that are not lost.',
  },
]

/** Tres ideas cortas que acompañan a "Sobre mí". */
export const aboutHighlights: { title: I18nText; text: I18nText }[] = [
  {
    title: { es: 'Del dato a la decisión', en: 'From data to decision' },
    text: {
      es: 'Empiezo por la pregunta de negocio, no por el dataset. Un análisis que no cambia una decisión es un ejercicio.',
      en: 'I start from the business question, not the dataset. An analysis that changes no decision is just an exercise.',
    },
  },
  {
    title: { es: 'Calidad de datos primero', en: 'Data quality first' },
    text: {
      es: 'Auditoría, depuración y cruce de bases antes de modelar. La mayor parte del valor aparece ahí.',
      en: 'Auditing, cleaning and cross-checking before modeling. Most of the value shows up right there.',
    },
  },
  {
    title: { es: 'Resultados explicables', en: 'Explainable results' },
    text: {
      es: 'Un modelo hay que poder contarlo. Si el equipo que decide no lo entiende, no se usa.',
      en: 'A model has to be explainable. If the people deciding do not understand it, it does not get used.',
    },
  },
]
