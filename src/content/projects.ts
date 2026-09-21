import { same, type Project } from './types'

/* -------------------------------------------------------------------
   Los proyectos del portafolio.

   Para agregar uno nuevo: copiá un bloque entero, cambiá el "slug"
   (tiene que ser único, sin espacios ni acentos) y reemplazá los textos.
   Los destacados (featured: true) aparecen primero y ocupan el ancho
   completo de la grilla.

   - metric: null    -> la tarjeta no muestra número.
   - links: []       -> no se muestran enlaces externos.
   - cover: null     -> se dibuja un mini gráfico según "chart".
   - detail: null    -> el proyecto no tiene página de detalle.
   ------------------------------------------------------------------- */

export const projects: Project[] = [
  {
    slug: 'recuperacion-cartera-salud',
    year: '2026',
    featured: true,
    category: { es: 'Salud · Auditoría de datos', en: 'Healthcare · Data auditing' },
    title: {
      es: 'Recuperación de cartera vencida en salud',
      en: 'Recovering overdue receivables in healthcare',
    },
    summary: {
      es: 'Una cartera de USD 370.000 frenada por inconsistencias entre bases. El análisis encontró dónde estaban los bloqueos y permitió cobrar un tercio en tres meses.',
      en: 'A USD 370,000 portfolio stuck behind data inconsistencies. The analysis found where the blockers were and unlocked a third of it in three months.',
    },
    problem: {
      es: 'El hospital no lograba cobrar una cartera vencida de USD 370.000. Cada reclamo a las aseguradoras se rechazaba por diferencias entre las bases, pero nadie sabía qué diferencias ni dónde se concentraban.',
      en: 'The hospital could not collect a USD 370,000 overdue portfolio. Every claim was rejected over mismatches between databases, but nobody knew which mismatches or where they were concentrated.',
    },
    analysis: {
      es: 'Depuración y cruce de las bases del hospital contra las de cada aseguradora en Excel, sobre carteras de 20 a 400 pacientes por entidad, para aislar y clasificar los tipos de inconsistencia que bloqueaban el pago.',
      en: 'Cleaned and cross-checked the hospital databases against each insurer, across portfolios of 20 to 400 patients per entity, to isolate and classify the inconsistency types blocking payment.',
    },
    solution: {
      es: 'USD 123.000 recuperados en los primeros tres meses, negociando caso por caso con la evidencia documentada de cada cuenta.',
      en: 'USD 123,000 recovered in the first three months, negotiating case by case with documented evidence for every account.',
    },
    metric: {
      value: 'USD 123K',
      label: { es: 'recuperados en 3 meses', en: 'recovered in 3 months' },
    },
    tools: [
      { es: 'Excel avanzado', en: 'Advanced Excel' },
      { es: 'Auditoría de datos', en: 'Data auditing' },
      { es: 'Conciliación de cuentas', en: 'Account reconciliation' },
    ],
    links: [],
    note: {
      es: 'Caso de trabajo real · Hospital de Alcalá',
      en: 'Real work case · Hospital de Alcalá',
    },
    cover: null,
    chart: 'bars',
    accent: 'emerald',
    detail: {
      context: {
        es: 'En el sistema de salud colombiano, los hospitales facturan a las EPS (las aseguradoras) y cobran contra esa factura. Cuando los datos del paciente, el procedimiento o la autorización no coinciden exactamente entre las dos bases, el pago se congela. Con el tiempo se acumula una cartera vencida que todos dan por perdida.',
        en: 'In the Colombian health system, hospitals bill insurers and collect against those invoices. When patient, procedure or authorisation data does not match exactly across both databases, payment freezes. Over time an overdue portfolio builds up that everyone writes off.',
      },
      data: {
        es: 'Bases de facturación del hospital y bases de respuesta de cada aseguradora, con carteras de entre 20 y 400 pacientes por entidad. Datos sin normalizar: nombres escritos distinto, códigos de procedimiento desalineados, fechas en formatos mezclados.',
        en: 'Hospital billing databases and each insurer response file, with portfolios of 20 to 400 patients per entity. Unnormalised data: names spelled differently, misaligned procedure codes, mixed date formats.',
      },
      process: [
        {
          title: { es: 'Normalización', en: 'Normalisation' },
          text: {
            es: 'Unificación de formatos de fecha, documentos de identidad y códigos de procedimiento para poder cruzar las bases con una clave confiable.',
            en: 'Unified date formats, ID documents and procedure codes so the databases could be joined on a reliable key.',
          },
        },
        {
          title: { es: 'Cruce y clasificación', en: 'Join and classification' },
          text: {
            es: 'Cruce cuenta por cuenta y clasificación de cada rechazo según su causa: diferencia de monto, falta de autorización, error de codificación o dato del paciente.',
            en: 'Account-by-account join and classification of every rejection by root cause: amount mismatch, missing authorisation, coding error or patient data.',
          },
        },
        {
          title: { es: 'Priorización', en: 'Prioritisation' },
          text: {
            es: 'Ordenamiento de los casos por monto recuperable y por dificultad de resolución, para atacar primero lo que más rendía por hora de trabajo.',
            en: 'Cases ranked by recoverable amount and resolution difficulty, tackling first whatever paid off most per hour of work.',
          },
        },
        {
          title: { es: 'Negociación', en: 'Negotiation' },
          text: {
            es: 'Presentación del detalle documentado a cada aseguradora y seguimiento del cobro hasta el cierre de la cuenta.',
            en: 'Documented detail presented to each insurer, with follow-up until the account closed.',
          },
        },
      ],
      findings: [
        {
          es: 'La mayoría de los rechazos no venían de cuentas mal facturadas, sino de diferencias de formato entre las dos bases.',
          en: 'Most rejections did not come from badly billed accounts, but from formatting differences between the two databases.',
        },
        {
          es: 'El monto recuperable estaba muy concentrado: unas pocas entidades explicaban la mayor parte de la cartera.',
          en: 'The recoverable amount was highly concentrated: a few entities accounted for most of the portfolio.',
        },
        {
          es: 'Los casos más viejos no eran necesariamente los más difíciles de cobrar, al contrario de lo que se asumía.',
          en: 'The oldest cases were not necessarily the hardest to collect, contrary to what was assumed.',
        },
      ],
      impact: {
        es: 'USD 123.000 recuperados sobre USD 370.000 en tres meses, y un criterio de depuración reutilizable para que las cuentas nuevas no vuelvan a trabarse por lo mismo.',
        en: 'USD 123,000 recovered out of USD 370,000 in three months, plus a reusable cleaning criterion so new accounts do not get stuck for the same reasons.',
      },
    },
  },

  {
    slug: 'deterioro-poscosecha-maiz',
    year: '2026 · en curso',
    featured: true,
    category: { es: 'Agro · Modelos predictivos', en: 'Agriculture · Predictive modeling' },
    title: {
      es: 'Deterioro poscosecha en maíz',
      en: 'Post-harvest maize deterioration',
    },
    summary: {
      es: 'Proyecto de tesis (UBA): predecir en qué momento un lote de maíz almacenado pasa a estado deteriorado, para poder intervenir antes de perderlo.',
      en: 'Thesis project (UBA): predicting when a stored maize lot turns to a deteriorated state, so it can be saved before the loss happens.',
    },
    problem: {
      es: 'El maíz almacenado se deteriora según cómo evolucionan humedad y temperatura en el grano. Sin una forma de anticipar ese salto, las decisiones de secado y venta se toman tarde: cuando se ve el deterioro, la pérdida ya ocurrió.',
      en: 'Stored maize deteriorates depending on how grain moisture and temperature evolve. With no way to anticipate that jump, drying and selling decisions come late: by the time deterioration is visible, the loss already happened.',
    },
    analysis: {
      es: 'Datos georreferenciados de IDECOR (Córdoba) procesados en Python. Una cadena de Markov modela las transiciones entre estados del grano, y se compara contra regresión logística y random forest para predecir el pasaje a estado deteriorado.',
      en: 'Geo-referenced IDECOR data (Córdoba province) processed in Python. A Markov chain models transitions between grain states, benchmarked against logistic regression and random forest to predict the shift into a deteriorated state.',
    },
    solution: {
      es: 'Un modelo que estima la probabilidad de deterioro por lote y ventana de tiempo, pensado para decidir cuándo intervenir. Propuesta de tesis aprobada, en desarrollo.',
      en: 'A model estimating deterioration probability per lot and time window, designed to inform when to intervene. Thesis proposal approved, currently in development.',
    },
    metric: null,
    tools: [same('Python'), same('pandas'), same('NumPy'), same('scikit-learn'), same('Google Colab')],
    links: [],
    note: {
      es: 'Proyecto de tesis · UBA · propuesta aprobada',
      en: 'Thesis project · UBA · proposal approved',
    },
    cover: null,
    chart: 'line',
    accent: 'blue',
    detail: {
      context: {
        es: 'Entre la cosecha y la venta, el maíz pasa semanas o meses almacenado. En ese período la humedad y la temperatura del grano determinan si el lote se conserva o se deteriora. El productor decide cuándo secar y cuándo vender con poca información sobre lo que está por pasar dentro del silo.',
        en: 'Between harvest and sale, maize spends weeks or months in storage. During that window grain moisture and temperature determine whether the lot keeps or spoils. Producers decide when to dry and when to sell with little information about what is about to happen inside the silo.',
      },
      data: {
        es: 'Datos georreferenciados de IDECOR para la provincia de Córdoba, que permiten asociar cada lote a condiciones de su zona, combinados con variables de estado del grano a lo largo del almacenamiento.',
        en: 'Geo-referenced IDECOR data for Córdoba province, linking each lot to its local conditions, combined with grain state variables tracked through storage.',
      },
      process: [
        {
          title: { es: 'Preparación de datos', en: 'Data preparation' },
          text: {
            es: 'Limpieza, unión de fuentes georreferenciadas y definición de los estados discretos del grano sobre los que se apoya el modelo.',
            en: 'Cleaning, joining geo-referenced sources and defining the discrete grain states the model relies on.',
          },
        },
        {
          title: { es: 'Cadena de Markov', en: 'Markov chain' },
          text: {
            es: 'Estimación de las probabilidades de transición entre estados, para describir cómo evoluciona un lote en el tiempo.',
            en: 'Estimating transition probabilities between states, to describe how a lot evolves over time.',
          },
        },
        {
          title: { es: 'Modelos comparados', en: 'Benchmark models' },
          text: {
            es: 'Regresión logística y random forest entrenados sobre las mismas variables, para contrastar el poder predictivo del enfoque markoviano.',
            en: 'Logistic regression and random forest trained on the same variables, to benchmark the Markov approach.',
          },
        },
        {
          title: { es: 'Validación', en: 'Validation' },
          text: {
            es: 'Evaluación del acierto sobre datos reservados, con foco en no subestimar los casos de deterioro.',
            en: 'Accuracy evaluated on held-out data, with emphasis on not under-predicting deterioration cases.',
          },
        },
      ],
      findings: [
        {
          es: 'El proyecto está en desarrollo: los resultados se van a publicar acá cuando la tesis esté cerrada.',
          en: 'The project is in progress: results will be published here once the thesis is complete.',
        },
      ],
      impact: {
        es: 'El objetivo es que un productor pueda anticipar el deterioro de un lote con tiempo suficiente para secar o vender, en vez de descubrirlo cuando la pérdida ya es irreversible.',
        en: 'The goal is for a producer to anticipate a lot deteriorating with enough lead time to dry or sell, instead of finding out once the loss is irreversible.',
      },
    },
  },

  {
    slug: 'churn-bancario',
    year: '2025',
    featured: false,
    category: { es: 'Banca · Segmentación', en: 'Banking · Segmentation' },
    title: {
      es: 'Churn bancario: quién se va y por qué',
      en: 'Bank churn: who leaves and why',
    },
    summary: {
      es: 'Tres técnicas multivariadas sobre el mismo dataset de clientes, para encontrar segmentos con riesgo real de abandono.',
      en: 'Three multivariate techniques on the same customer dataset, to find segments with genuine churn risk.',
    },
    problem: {
      es: 'Un banco pierde clientes sin saber cuáles están por irse ni qué tienen en común. Retener a ciegas es caro: se le habla a todos igual y se gasta donde no hace falta.',
      en: 'A bank loses customers without knowing which ones are about to leave or what they have in common. Blind retention is expensive: everyone gets the same message and money goes where it is not needed.',
    },
    analysis: {
      es: 'Análisis multivariado comparando tres caminos sobre el mismo dataset: análisis discriminante para separar los grupos, clustering para encontrar segmentos naturales y PCA para reducir variables sin perder señal.',
      en: 'Multivariate analysis comparing three paths on the same dataset: discriminant analysis to separate groups, clustering to find natural segments and PCA to reduce variables without losing signal.',
    },
    solution: {
      es: 'Segmentos de clientes con su perfil de riesgo y las variables que más pesan en cada uno, para enfocar la retención donde cambia el resultado.',
      en: 'Customer segments with their risk profile and the variables that weigh most in each, so retention focuses where it changes the outcome.',
    },
    metric: {
      value: '3',
      label: { es: 'técnicas comparadas', en: 'techniques compared' },
    },
    tools: [same('Python'), same('pandas'), same('scikit-learn'), same('PCA'), same('Clustering')],
    links: [],
    note: {
      es: 'UBA · Métodos de Análisis Multivariado',
      en: 'UBA · Multivariate Analysis Methods',
    },
    cover: null,
    chart: 'scatter',
    accent: 'indigo',
    detail: {
      context: {
        es: 'Trabajo de la materia Métodos de Análisis Multivariado de la Especialización. El objetivo no era solo predecir el abandono, sino comparar qué aporta cada técnica cuando se aplica al mismo problema.',
        en: 'Coursework for the Multivariate Analysis Methods module of the postgraduate programme. The goal was not only predicting churn, but comparing what each technique contributes on the same problem.',
      },
      data: {
        es: 'Dataset de clientes bancarios con variables demográficas, de productos contratados y de comportamiento transaccional, con la marca de abandono como variable objetivo.',
        en: 'Banking customer dataset with demographic, product-holding and transactional behaviour variables, with the churn flag as target.',
      },
      process: [
        {
          title: { es: 'Exploración', en: 'Exploration' },
          text: {
            es: 'Análisis exploratorio para entender la distribución de cada variable y detectar las que aportan poca información.',
            en: 'Exploratory analysis to understand each variable distribution and spot the ones carrying little information.',
          },
        },
        {
          title: { es: 'PCA', en: 'PCA' },
          text: {
            es: 'Reducción de dimensiones para quedarse con las componentes que explican la mayor parte de la varianza.',
            en: 'Dimensionality reduction to keep the components explaining most of the variance.',
          },
        },
        {
          title: { es: 'Clustering', en: 'Clustering' },
          text: {
            es: 'Búsqueda de segmentos naturales de clientes sin usar la variable de abandono, para ver si los grupos emergen solos.',
            en: 'Searching for natural customer segments without using the churn variable, to see whether groups emerge on their own.',
          },
        },
        {
          title: { es: 'Análisis discriminante', en: 'Discriminant analysis' },
          text: {
            es: 'Modelo supervisado para separar a quienes se van de quienes se quedan, y medir qué variables sostienen esa separación.',
            en: 'Supervised model to separate leavers from stayers, and measure which variables hold that separation up.',
          },
        },
      ],
      findings: [
        {
          es: 'Los segmentos que aparecen con clustering no coinciden exactamente con los que separa el modelo supervisado: hay grupos homogéneos que mezclan clientes que se van y clientes que se quedan.',
          en: 'The segments found by clustering do not match exactly those separated by the supervised model: some homogeneous groups mix leavers and stayers.',
        },
        {
          es: 'PCA permite trabajar con muchas menos variables sin perder capacidad de separación, lo que simplifica la lectura del modelo.',
          en: 'PCA allows working with far fewer variables without losing separation power, which simplifies reading the model.',
        },
      ],
      impact: {
        es: 'Una base para diseñar acciones de retención por segmento en lugar de campañas masivas, y un criterio para elegir qué técnica usar según la pregunta.',
        en: 'A basis for designing retention actions per segment instead of mass campaigns, and a criterion for choosing which technique fits which question.',
      },
    },
  },

  {
    slug: 'que-libro-leo',
    year: '2025',
    featured: false,
    category: { es: 'Producto · Clasificación', en: 'Product · Classification' },
    title: {
      es: 'Qué Libro Leo: predicción de preferencia lectora',
      en: 'Qué Libro Leo: predicting reading preference',
    },
    summary: {
      es: 'Un clasificador que predice qué tipo de libro va a elegir una persona a partir de su perfil, no de lo que dice que le gusta.',
      en: 'A classifier predicting what kind of book a person will actually pick, based on their profile rather than on what they claim to like.',
    },
    problem: {
      es: 'Recomendar libros a partir de gustos declarados falla seguido: la gente dice que le gusta un género y después elige otro.',
      en: 'Recommending books from stated preferences often fails: people say they like one genre and then choose another.',
    },
    analysis: {
      es: 'Preparación y limpieza del dataset, análisis exploratorio con matplotlib para ver qué variables se relacionan con la elección real, y un RandomForestClassifier entrenado sobre esas variables.',
      en: 'Dataset preparation and cleaning, exploratory analysis with matplotlib to see which variables relate to the actual choice, and a RandomForestClassifier trained on those variables.',
    },
    solution: {
      es: 'Un modelo de clasificación que predice la preferencia lectora a partir del perfil del usuario, con las variables más influyentes identificadas y ordenadas.',
      en: 'A classification model predicting reading preference from the user profile, with the most influential variables identified and ranked.',
    },
    metric: null,
    tools: [same('Python'), same('pandas'), same('scikit-learn'), same('matplotlib'), same('Google Colab')],
    links: [],
    note: { es: 'UBA · proyecto individual', en: 'UBA · individual project' },
    cover: null,
    chart: 'bars',
    accent: 'violet',
    detail: {
      context: {
        es: 'Proyecto individual de la Especialización. La idea era construir el recorrido completo: desde datos crudos hasta un modelo entrenado y evaluado, pasando por todas las decisiones intermedias.',
        en: 'Individual project for the postgraduate programme. The idea was to build the full path: from raw data to a trained and evaluated model, going through every intermediate decision.',
      },
      data: {
        es: 'Dataset de perfiles de lectores con variables de hábito, contexto y elección efectiva de libro.',
        en: 'Reader profile dataset with habit, context and actual book-choice variables.',
      },
      process: [
        {
          title: { es: 'Limpieza', en: 'Cleaning' },
          text: {
            es: 'Tratamiento de faltantes, normalización de categorías y descarte de registros inconsistentes.',
            en: 'Handling missing values, normalising categories and discarding inconsistent records.',
          },
        },
        {
          title: { es: 'EDA', en: 'EDA' },
          text: {
            es: 'Visualizaciones con matplotlib para ver la relación entre cada variable y la elección final.',
            en: 'matplotlib visualisations to see the relationship between each variable and the final choice.',
          },
        },
        {
          title: { es: 'Modelo', en: 'Model' },
          text: {
            es: 'RandomForestClassifier entrenado y evaluado, con revisión de la importancia de cada variable.',
            en: 'RandomForestClassifier trained and evaluated, reviewing the importance of each variable.',
          },
        },
      ],
      findings: [
        {
          es: 'Las variables de contexto de lectura pesaron más que las de gusto declarado a la hora de predecir la elección.',
          en: 'Reading-context variables weighed more than stated-taste ones when predicting the choice.',
        },
      ],
      impact: {
        es: 'Un recomendador que se apoya en comportamiento en vez de en declaraciones, que es donde suelen romperse este tipo de sistemas.',
        en: 'A recommender leaning on behaviour rather than on declarations, which is exactly where these systems usually break.',
      },
    },
  },

  {
    slug: 'auditoria-de-datos',
    year: '2025',
    featured: false,
    category: { es: 'Calidad de datos · EDA', en: 'Data quality · EDA' },
    title: {
      es: 'Informe de auditoría de datos',
      en: 'Data audit report',
    },
    summary: {
      es: 'No alcanza con contar errores: hay que saber dónde se concentran para priorizar la limpieza.',
      en: 'Counting errors is not enough: you need to know where they cluster in order to prioritise cleaning.',
    },
    problem: {
      es: 'Una base con errores silenciosos arrastra ese error a todo lo que se construya encima. La pregunta útil no es cuántos errores hay, sino en qué registros se concentran.',
      en: 'A database with silent errors passes them on to everything built on top. The useful question is not how many errors exist, but which records they cluster in.',
    },
    analysis: {
      es: 'Análisis exploratorio para caracterizar los errores, seguido de un modelo predictivo de cantidad de errores por registro en Python.',
      en: 'Exploratory analysis to characterise the errors, followed by a predictive model of error count per record in Python.',
    },
    solution: {
      es: 'Un informe que ubica los focos de error y permite dirigir el esfuerzo de limpieza a donde más impacto tiene.',
      en: 'A report locating the error hotspots, so cleaning effort goes where it has the most impact.',
    },
    metric: null,
    tools: [same('Python'), same('pandas'), same('scikit-learn'), { es: 'EDA', en: 'EDA' }],
    links: [],
    note: { es: 'UBA · Gestión y Procesamiento de Bases de Datos', en: 'UBA · Database Management and Processing' },
    cover: null,
    chart: 'area',
    accent: 'cyan',
    detail: {
      context: {
        es: 'Trabajo de la materia de bases de datos, con nociones de auditoría. El foco estaba en tratar la calidad del dato como un objeto de análisis en sí mismo, y no como un paso previo que se despacha rápido.',
        en: 'Coursework for the database module, including auditing concepts. The focus was treating data quality as an object of analysis in itself, rather than a preliminary step to rush through.',
      },
      data: {
        es: 'Base con errores de distinta naturaleza: faltantes, valores fuera de rango, inconsistencias entre campos relacionados y duplicados.',
        en: 'Database with errors of different kinds: missing values, out-of-range values, inconsistencies across related fields and duplicates.',
      },
      process: [
        {
          title: { es: 'Tipificación', en: 'Error typing' },
          text: {
            es: 'Clasificación de cada error según su naturaleza, para poder contarlos por categoría y no todos juntos.',
            en: 'Classifying each error by its nature, so they can be counted per category instead of all together.',
          },
        },
        {
          title: { es: 'EDA', en: 'EDA' },
          text: {
            es: 'Exploración de cómo se distribuyen los errores entre registros y qué características comparten los más problemáticos.',
            en: 'Exploring how errors distribute across records and what the most problematic ones have in common.',
          },
        },
        {
          title: { es: 'Modelo predictivo', en: 'Predictive model' },
          text: {
            es: 'Modelo de cantidad de errores por registro, para anticipar qué partes de la base van a requerir más revisión.',
            en: 'Model of error count per record, to anticipate which parts of the database will need more review.',
          },
        },
      ],
      findings: [
        {
          es: 'Los errores no estaban repartidos de manera pareja: un subconjunto chico de registros concentraba la mayor parte.',
          en: 'Errors were not evenly spread: a small subset of records concentrated most of them.',
        },
      ],
      impact: {
        es: 'Permite decidir dónde invertir el tiempo de limpieza, que siempre es limitado, en lugar de revisar la base entera con el mismo criterio.',
        en: 'Makes it possible to decide where to invest always-limited cleaning time, instead of reviewing the whole database with one blanket criterion.',
      },
    },
  },
]

/** Busca un proyecto por su slug (lo usa la página de detalle). */
export const findProject = (slug: string | undefined) =>
  projects.find((p) => p.slug === slug)
