
/* Textos fijos de la interfaz (botones, títulos de sección, etiquetas). */

export const ui = {
  nav: {
    home: { es: 'Inicio', en: 'Home' },
    about: { es: 'Sobre mí', en: 'About' },
    skills: { es: 'Herramientas', en: 'Skills' },
    projects: { es: 'Proyectos', en: 'Projects' },
    experience: { es: 'Experiencia', en: 'Experience' },
    education: { es: 'Formación', en: 'Education' },
    passions: { es: 'Intereses', en: 'Interests' },
    contact: { es: 'Contacto', en: 'Contact' },
  },

  hero: {
    cta: { es: 'Ver proyectos', en: 'View projects' },
    cv: { es: 'Descargar CV', en: 'Download CV' },
    scroll: { es: 'Seguí bajando', en: 'Scroll down' },
  },

  /* Cada título se parte en dos: la segunda parte se pinta con el color de
     acento, igual que en la referencia ("About Me", "Technical Skills"). */
  sections: {
    about: {
      pre: { es: 'Sobre', en: 'About' },
      mark: { es: 'mí', en: 'Me' },
      subtitle: {
        es: 'Analista de datos con formación en antropología: primero entiendo el contexto, después bajo a los números.',
        en: 'A data analyst with a background in anthropology: I understand the context first, then get down to the numbers.',
      },
    },

    education: {
      pre: { es: 'Mi', en: 'Educational' },
      mark: { es: 'formación', en: 'Journey' },
      subtitle: {
        es: 'El recorrido académico que formó mi manera de mirar y de preguntar.',
        en: 'The academic path that shaped how I look at things and how I ask questions.',
      },
    },

    experience: {
      pre: { es: 'Experiencia', en: 'Professional' },
      mark: { es: 'profesional', en: 'Experience' },
      subtitle: {
        es: 'Dónde apliqué el análisis a problemas reales, con consecuencias concretas.',
        en: 'Where I applied analysis to real problems, with concrete consequences.',
      },
    },

    skills: {
      pre: { es: 'Herramientas', en: 'Technical' },
      mark: { es: 'técnicas', en: 'Skills' },
      subtitle: {
        es: 'Con qué trabajo para convertir datos en algo que se pueda usar.',
        en: 'What I work with to turn data into something usable.',
      },
    },

    projects: {
      pre: { es: 'Mis', en: 'My' },
      mark: { es: 'proyectos', en: 'Projects' },
      subtitle: {
        es: 'Cada caso empieza por una pregunta concreta y termina en algo que se puede usar. Entrá al detalle para ver el proceso completo.',
        en: 'Every case starts from a concrete question and ends in something usable. Open a case to see the full process.',
      },
    },

    passions: {
      pre: { es: 'Fuera de los', en: 'Passionate' },
      mark: { es: 'datos', en: 'About' },
      subtitle: {
        es: 'Los temas y las formas de mirar que me mantienen curiosa y con ganas de aprender.',
        en: 'The topics and ways of looking at things that keep me curious and eager to learn.',
      },
    },

    contact: {
      pre: { es: 'Hablemos de', en: 'Reach' },
      mark: { es: 'datos', en: 'Me' },
      subtitle: {
        es: 'Estoy abierta a posiciones de análisis de datos, proyectos freelance y colaboraciones. Escribime y te respondo.',
        en: 'I am open to data analyst roles, freelance projects and collaborations. Write to me and I will get back to you.',
      },
    },

    /* Sub-bloques que van debajo de algunas secciones. */
    certifications: {
      pre: { es: 'Certificaciones y', en: 'Certifications and' },
      mark: { es: 'cursos', en: 'courses' },
    },
    additionalSkills: {
      pre: { es: 'Otras', en: 'Additional' },
      mark: { es: 'competencias', en: 'Competencies' },
    },
    balance: {
      pre: { es: 'Mi', en: 'My' },
      mark: { es: 'enfoque', en: 'approach' },
      text: {
        es: 'Creo que la curiosidad fuera del trabajo mejora el trabajo. Entender cómo alguien vive un servicio, o cómo se mueve un alimento desde el campo hasta la mesa, me obliga a mirar un problema completo antes de reducirlo a una tabla. Esa mirada transversal es la que después me permite hacer las preguntas correctas cuando abro los datos.',
        en: 'I believe curiosity outside work makes the work better. Understanding how someone experiences a service, or how food moves from the field to the table, forces me to see a whole problem before reducing it to a table. That transversal view is what later lets me ask the right questions when I open the data.',
      },
    },
    inProgress: { es: 'En curso', en: 'In progress' },
    completed: { es: 'Completado', en: 'Completed' },
    details: { es: 'Detalles', en: 'Details' },
    achievements: { es: 'Logros', en: 'Achievements' },
    toolsUsed: { es: 'Herramientas', en: 'Tools used' },
    readyToTalk: { es: '¿Empezamos una conversación?', en: 'Ready to start a conversation?' },
    opportunities: {
      title: { es: 'Oportunidades profesionales', en: 'Professional opportunities' },
      text: {
        es: 'Busco posiciones de análisis de datos, business intelligence y roles donde el análisis tenga impacto real. Si estás armando equipo o querés colaborar en un proyecto, escribime.',
        en: 'I am looking for roles in data analysis, business intelligence and positions where analysis has real impact. If you are building a team or want to collaborate on a project, write to me.',
      },
    },
  },

  project: {
    problem: { es: 'Problema', en: 'Problem' },
    analysis: { es: 'Análisis', en: 'Analysis' },
    solution: { es: 'Solución', en: 'Solution' },
    viewCase: { es: 'Ver caso', en: 'View case' },
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
    getInTouch: { es: 'Ponete en contacto', en: 'Get in touch' },
    getInTouchText: {
      es: 'Siempre estoy abierta a conversar sobre oportunidades en análisis de datos, colaborar en proyectos o intercambiar ideas. Escribime por el canal que te quede más cómodo.',
      en: 'I am always open to talking about opportunities in data analysis, collaborating on projects or exchanging ideas. Reach out through whichever channel suits you best.',
    },
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
}
