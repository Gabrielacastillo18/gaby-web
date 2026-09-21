import { same, type SkillGroup } from './types'

/* Herramientas y métodos, agrupados. Agregar o sacar elementos libremente. */

export const skillGroups: SkillGroup[] = [
  {
    title: { es: 'Lenguajes y librerías', en: 'Languages and libraries' },
    items: [
      same('Python'),
      same('pandas'),
      same('NumPy'),
      same('scikit-learn'),
      same('matplotlib'),
      same('spaCy'),
      same('SQL'),
    ],
  },
  {
    title: { es: 'Visualización y reporting', en: 'Visualization and reporting' },
    items: [
      same('Power BI'),
      { es: 'Excel avanzado', en: 'Advanced Excel' },
      { es: 'Tablas dinámicas', en: 'Pivot tables' },
      { es: 'Informes ejecutivos', en: 'Executive reporting' },
    ],
  },
  {
    title: { es: 'Métodos de análisis', en: 'Analytical methods' },
    items: [
      { es: 'Clasificación', en: 'Classification' },
      same('Clustering'),
      { es: 'Análisis discriminante', en: 'Discriminant analysis' },
      same('PCA'),
      { es: 'Regresión logística', en: 'Logistic regression' },
      same('Random Forest'),
      { es: 'Cadenas de Markov', en: 'Markov chains' },
      { es: 'Análisis exploratorio (EDA)', en: 'Exploratory analysis (EDA)' },
      { es: 'Auditoría de datos', en: 'Data auditing' },
    ],
  },
  {
    title: { es: 'Entorno de trabajo', en: 'Working environment' },
    items: [
      same('Google Colab'),
      same('Jupyter'),
      same('VS Code'),
      same('Git'),
      same('Figma'),
      { es: 'Investigación UX', en: 'UX Research' },
    ],
  },
  {
    title: { es: 'Idiomas', en: 'Languages' },
    items: [
      { es: 'Español (nativo)', en: 'Spanish (native)' },
      { es: 'Inglés', en: 'English' },
    ],
  },
]
