import type { Passion } from './types'

/*
  Sección "Fuera de los datos".
  Si el array queda vacío, la sección no se muestra en la página.
*/

export const passions: Passion[] = [
  {
    icon: 'heart',
    title: { es: 'Experiencia de usuario', en: 'User experience' },
    text: {
      es: 'Entender cómo una persona vive realmente un producto o un servicio, más allá de lo que dice una encuesta.',
      en: 'Understanding how a person actually experiences a product or service, beyond what a survey says.',
    },
  },
  {
    icon: 'leaf',
    title: { es: 'Sistemas agroalimentarios', en: 'Food systems' },
    text: {
      es: 'Cómo se produce, se mueve y se pierde un alimento, desde el campo hasta la mesa.',
      en: 'How food is produced, moved and lost, from the field to the table.',
    },
  },
  {
    icon: 'bulb',
    title: { es: 'Aprender temas nuevos', en: 'Learning new topics' },
    text: {
      es: 'Me meto en campos que no conozco y disfruto el momento en que el problema empieza a tener forma.',
      en: 'I dive into fields I do not know and enjoy the moment the problem starts taking shape.',
    },
  },
  {
    icon: 'layers',
    title: { es: 'Mirada transversal', en: 'A transversal view' },
    text: {
      es: 'Cruzar disciplinas para entender un problema completo antes de reducirlo a una tabla.',
      en: 'Crossing disciplines to understand a whole problem before reducing it to a table.',
    },
  },
]
