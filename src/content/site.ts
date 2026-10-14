import type { AboutBlock, AboutFact, ContactChannel, I18nText } from './types'

/* -------------------------------------------------------------------
   Datos personales, textos del hero y de la sección "Sobre mí".
   Editar acá cambia el encabezado, la presentación y los contactos.
   ------------------------------------------------------------------- */

export const site = {
  fullName: 'Lina Gabriela Castillo',
  shortName: 'Gabriela.',

  role: {
    es: 'Analista de datos - UBA',
    en: 'Data Analyst',
  } as I18nText,

  location: {
    es: 'Buenos Aires, Argentina',
    en: 'Buenos Aires, Argentina',
  } as I18nText,

  email: 'gabscast1820@gmail.com',
  phone: '+54 11 7058-1565',
  linkedin: 'https://www.linkedin.com/in/castillogabriela/',
  github: 'https://github.com/GabrielaCastillo18',

  photo: 'img/gaby.jpg',
  photoWebp: 'img/gaby.webp',

  /** Archivo dentro de /public. Reemplazar por el PDF cuando esté exportado. */
  cv: {
    es: 'cv/CV-Gabriela-Castillo-ES.docx',
    en: 'cv/CV-Gabriela-Castillo-ES.docx',
  } as I18nText,
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
  es: 'Hola, soy Gabriela. Antes de abrir una base de datos, entiendo el contexto: de qué se trata el problema, quién necesita resolverlo y por qué. Parto de mirar primero lo cualitativo, y lo llevo con criterio hasta los números — ese recorrido completo es lo que convierte un dato en una decisión.',
  en: "Hi, I'm Gabriela. Before I open a dataset, I understand the context: what the problem really is, who needs to solve it, and why. I start by looking at the qualitative side, then bring it — with judgment — into the numbers. That full journey is what turns data into a decision.",
}

/** Herramientas que se muestran como logos abajo del hero. */
export const heroTools: { id: 'python' | 'sql' | 'excel' | 'powerbi'; label: string }[] = [
  { id: 'python', label: 'Python' },
  { id: 'sql', label: 'SQL' },
  { id: 'excel', label: 'Excel' },
  { id: 'powerbi', label: 'Power BI' },
]

/* -------------------------------------------------------------------
   Sección "Sobre mí": columna izquierda (bloques con ícono) y columna
   derecha (tarjetas de dato).
   ------------------------------------------------------------------- */

export const aboutBlocks: AboutBlock[] = [
  {
    icon: 'user',
    title: { es: 'Quién soy', en: 'Who I am' },
    text: {
      es: 'Soy analista de datos, pero antes que nada soy alguien que hace preguntas. Me formé en antropología, y esa mirada — entender el porqué antes que el cómo — es la que llevo a cada análisis.',
      en: "I'm a data analyst, but first and foremost I'm someone who asks questions. My background is in anthropology, and that lens — understanding the why before the how — is what I bring to every analysis.",
    },
  },
  {
    icon: 'target',
    title: { es: 'Qué me mueve', en: 'What drives me' },
    text: {
      es: 'Me atrae entender cómo la gente vive un producto o un servicio, y cómo funcionan los sistemas alimentarios de punta a punta. Pero mi curiosidad no se queda ahí: disfruto meterme en temas nuevos, siempre desde una mirada transversal que busca primero entender el problema en su propio contexto.',
      en: "I'm drawn to understanding how people experience a product or service, and how food systems work end to end. But my curiosity doesn't stop there: I enjoy digging into new topics, always through a transversal lens that starts by understanding the problem on its own terms.",
    },
  },
  {
    icon: 'layers',
    title: { es: 'Cómo trabajo', en: 'How I work' },
    text: {
      es: 'Sea cual sea el terreno, mi proceso es el mismo: hago las preguntas que el contexto pide, cruzo esa mirada cualitativa con los datos, y de ahí salen decisiones concretas — no un informe que termina en un cajón.',
      en: 'Whatever the field, my process stays the same: I ask the questions the context calls for, cross that qualitative read with the data, and land on concrete decisions — not a report that ends up in a drawer.',
    },
  },
]

export const aboutFacts: AboutFact[] = [
  {
    icon: 'graduation',
    title: { es: 'Especialización', en: 'Postgraduate' },
    subtitle: { es: 'Análisis de Datos', en: 'Data Analysis' },
    detail: { es: 'UBA · en curso', en: 'UBA · in progress' },
  },
  {
    icon: 'book',
    title: { es: 'Licenciatura', en: "Bachelor's degree" },
    subtitle: { es: 'Antropología', en: 'Anthropology' },
    detail: { es: 'Uniandes, Bogotá', en: 'Uniandes, Bogotá' },
  },
  {
    icon: 'chart',
    title: { es: 'Proyectos', en: 'Projects' },
    subtitle: { es: 'Análisis y modelado', en: 'Analysis and modeling' },
    detail: { es: 'Múltiples dominios', en: 'Multiple domains' },
  },
  {
    icon: 'spark',
    title: { es: 'Enfoque', en: 'Approach' },
    subtitle: { es: 'Cualitativo + cuantitativo', en: 'Qualitative + quantitative' },
    detail: { es: 'El contexto primero', en: 'Context first' },
  },
]

/* -------------------------------------------------------------------
   Canales de contacto de la sección final. Todos comparten el color de
   acento del sitio: antes cada uno tenía el suyo (azul, rojo, violeta) y
   quedaba disperso.
   ------------------------------------------------------------------- */

export const contactChannels: ContactChannel[] = [
  {
    icon: 'phone',
    label: { es: 'Celular', en: 'Phone' },
    value: site.phone,
    href: `tel:${site.phone.replace(/[^+\d]/g, '')}`,
    tone: 'accent',
  },
  {
    icon: 'linkedin',
    label: { es: 'LinkedIn', en: 'LinkedIn' },
    value: 'in/castillogabriela',
    href: site.linkedin,
    tone: 'primary',
  },
  {
    icon: 'github',
    label: { es: 'GitHub', en: 'GitHub' },
    value: site.github.replace(/^https?:\/\//, ''),
    href: site.github,
    tone: 'violet',
  },
  {
    icon: 'pin',
    label: { es: 'Ubicación', en: 'Location' },
    value: 'Buenos Aires, Argentina',
    href: 'https://maps.google.com/?q=Buenos+Aires,+Argentina',
    tone: 'accent',
  },
]
