import type { I18nText } from './types'

/* Textos fijos de la interfaz (botones, títulos de sección, etiquetas). */

export const ui = {
  nav: {
    home: { es: 'Inicio', en: 'Home' },
    about: { es: 'Sobre mí', en: 'About' },
    skills: { es: 'Herramientas', en: 'Skills' },
    projects: { es: 'Proyectos', en: 'Projects' },
    experience: { es: 'Experiencia', en: 'Experience' },
    education: { es: 'Formación', en: 'Education' },
    contact: { es: 'Contacto', en: 'Contact' },
  },

  hero: {
    cta: { es: 'Ver proyectos', en: 'View projects' },
    cv: { es: 'Descargar CV', en: 'Download CV' },
    scroll: { es: 'Seguí bajando', en: 'Scroll down' },
  },

  sections: {
    aboutEyebrow: { es: 'Sobre mí', en: 'About' },
    aboutTitle: { es: 'Quién está detrás del análisis', en: 'Who is behind the analysis' },

    skillsEyebrow: { es: 'Herramientas', en: 'Skills' },
    skillsTitle: { es: 'Con qué trabajo', en: 'What I work with' },

    projectsEyebrow: { es: 'Proyectos', en: 'Projects' },
    projectsTitle: { es: 'Problema, análisis, solución', en: 'Problem, analysis, solution' },
    projectsIntro: {
      es: 'Cada caso empieza por una pregunta concreta y termina en algo que se puede usar. Entrá al detalle para ver el proceso completo.',
      en: 'Every case starts from a concrete question and ends in something usable. Open a case to see the full process.',
    },

    experienceEyebrow: { es: 'Experiencia', en: 'Experience' },
    experienceTitle: { es: 'Dónde estuve', en: 'Where I have been' },

    educationEyebrow: { es: 'Formación', en: 'Education' },
    educationTitle: { es: 'Qué estudié', en: 'What I studied' },
    certifications: { es: 'Certificaciones y cursos', en: 'Certifications and courses' },
    inProgress: { es: 'En curso', en: 'In progress' },

    passionsEyebrow: { es: 'Fuera de los datos', en: 'Beyond data' },
    passionsTitle: { es: 'Qué me mueve', en: 'What keeps me going' },

    contactEyebrow: { es: 'Contacto', en: 'Contact' },
    contactTitle: { es: 'Hablemos', en: "Let's talk" },
    contactIntro: {
      es: 'Estoy abierta a posiciones de análisis de datos, proyectos freelance y colaboraciones. Escribime y te respondo.',
      en: 'I am open to data analyst roles, freelance projects and collaborations. Write to me and I will get back to you.',
    },
  },

  project: {
    problem: { es: 'Problema', en: 'Problem' },
    analysis: { es: 'Análisis', en: 'Analysis' },
    solution: { es: 'Solución', en: 'Solution' },
    viewCase: { es: 'Ver caso', en: 'View case' },
    featured: { es: 'Destacado', en: 'Featured' },
    back: { es: 'Volver a proyectos', en: 'Back to projects' },
    context: { es: 'Contexto', en: 'Context' },
    data: { es: 'Datos', en: 'Data' },
    process: { es: 'Proceso', en: 'Process' },
    findings: { es: 'Hallazgos', en: 'Findings' },
    impact: { es: 'Impacto', en: 'Impact' },
    tools: { es: 'Herramientas', en: 'Tools' },
    links: { es: 'Enlaces', en: 'Links' },
    next: { es: 'Siguiente proyecto', en: 'Next project' },
    prev: { es: 'Proyecto anterior', en: 'Previous project' },
    notFound: { es: 'No encontramos ese proyecto.', en: 'We could not find that project.' },
  },

  contact: {
    email: { es: 'Email', en: 'Email' },
    copy: { es: 'Copiar', en: 'Copy' },
    copied: { es: '¡Copiado!', en: 'Copied!' },
    linkedin: { es: 'LinkedIn', en: 'LinkedIn' },
    linkedinAction: { es: 'Conectar', en: 'Connect' },
    location: { es: 'Ubicación', en: 'Location' },
    write: { es: 'Escribir', en: 'Write' },
    cvTitle: { es: 'Currículum', en: 'Résumé' },
    cvText: {
      es: 'La versión completa, en una página.',
      en: 'The full version, in one page.',
    },
  },

  hire: {
    question: { es: '¿La contratamos?', en: 'Should we hire her?' },
    yes: { es: 'Sí', en: 'Yes' },
    no: { es: 'No', en: 'No' },
    /** Mensajes que van apareciendo a medida que el botón "No" escapa. */
    dodges: [
      { es: 'Ups, se movió.', en: 'Oops, it moved.' },
      { es: 'Probá de nuevo.', en: 'Try again.' },
      { es: 'Los datos dicen que no.', en: 'The data says no.' },
      { es: 'Ese botón tiene vida propia.', en: 'That button has a mind of its own.' },
      { es: 'Correlación no implica que lo alcances.', en: 'Correlation does not imply you will catch it.' },
      { es: 'Estadísticamente, no va a pasar.', en: 'Statistically, this is not happening.' },
      { es: 'Ya está, aceptalo: es que sí.', en: 'Just accept it: the answer is yes.' },
    ],
    yesTitle: { es: '¡Excelente decisión!', en: 'Excellent decision!' },
    yesText: {
      es: 'Te abrimos el mail para que le escribas.',
      en: 'We opened your mail client so you can write to her.',
    },
    yesAgain: { es: 'Volver a intentarlo', en: 'Try again' },
  },

  footer: {
    built: { es: 'Hecho con React y demasiado café.', en: 'Built with React and too much coffee.' },
    rights: { es: 'Todos los derechos reservados.', en: 'All rights reserved.' },
  },

  a11y: {
    toggleTheme: { es: 'Cambiar tema', en: 'Toggle theme' },
    toggleLang: { es: 'Cambiar idioma', en: 'Toggle language' },
    openMenu: { es: 'Abrir menú', en: 'Open menu' },
    closeMenu: { es: 'Cerrar menú', en: 'Close menu' },
    portrait: { es: 'Foto de Lina Gabriela Castillo', en: 'Photo of Lina Gabriela Castillo' },
  },
} satisfies Record<string, Record<string, I18nText | I18nText[]>>
