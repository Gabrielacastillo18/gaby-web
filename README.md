# Portafolio de Lina Gabriela Castillo

Sitio estático de un analista de datos: presentación, proyectos con detalle propio,
experiencia, formación y contacto. En español e inglés, con modo claro y oscuro.

Hecho con **React + TypeScript + Vite + Tailwind + Framer Motion**. No tiene backend
ni base de datos: todo el contenido vive en archivos del repositorio.

---

## Cómo levantarlo

```bash
npm install     # solo la primera vez
npm run dev     # abre http://localhost:5173
```

Otros comandos:

| Comando | Para qué sirve |
| --- | --- |
| `npm run build` | Genera el sitio final en `dist/` |
| `npm run preview` | Sirve lo generado, para ver cómo queda publicado |
| `npm run typecheck` | Revisa que no haya errores de tipos |

---

## Dónde se edita cada cosa

Todo el contenido está en `src/content/`. **No hace falta tocar ningún otro archivo
para cambiar textos.**

| Archivo | Qué contiene |
| --- | --- |
| `site.ts` | Nombre, rol, ubicación, email, LinkedIn, título del hero, los tres números destacados y los párrafos de "Sobre mí" |
| `projects.ts` | Los proyectos: tarjeta y página de detalle |
| `experience.ts` | Experiencia laboral |
| `education.ts` | Títulos, cursos y certificaciones |
| `skills.ts` | Herramientas y métodos, agrupados |
| `passions.ts` | Sección opcional "Fuera de los datos" (vacía = no se muestra) |
| `ui.ts` | Textos de la interfaz: botones, títulos de sección, mensajes |

### Los dos idiomas

Cada texto se escribe una vez por idioma:

```ts
title: {
  es: 'Churn bancario: quién se va y por qué',
  en: 'Bank churn: who leaves and why',
}
```

Para términos que se escriben igual en los dos idiomas hay un atajo:

```ts
import { same } from './types'

tools: [same('Python'), same('SQL'), { es: 'Excel avanzado', en: 'Advanced Excel' }]
```

El sitio arranca en español y solo usa inglés si el navegador de quien entra está en
inglés. El visitante puede cambiarlo con el botón `ES / EN` de la barra superior, y
esa elección queda guardada.

---

## Cómo agregar un proyecto

Abrí `src/content/projects.ts`, copiá un bloque completo (desde `{` hasta `},`),
pegalo donde quieras que aparezca y cambiá los textos. Lo único obligatorio es que el
`slug` sea distinto al de los demás.

Campos de cada proyecto:

| Campo | Qué es |
| --- | --- |
| `slug` | Identificador para la dirección web. Sin espacios, sin acentos, sin mayúsculas |
| `year` | Se muestra tal cual: `'2026'`, `'2025 · en curso'` |
| `featured` | `true` lo pone primero y le da el ancho completo |
| `category` | La etiqueta de color de la tarjeta |
| `title`, `summary` | Título y una bajada de dos líneas |
| `problem`, `analysis`, `solution` | El resumen de tres pasos que se ve en la tarjeta |
| `metric` | El número fuerte. `null` si todavía no hay resultados medibles |
| `tools` | Las herramientas usadas |
| `links` | Enlaces externos (GitHub, un dashboard, un notebook). `[]` = ninguno |
| `note` | Aclaración chica bajo el título. `null` para omitirla |
| `cover` | Imagen de portada. `null` dibuja un mini gráfico automático |
| `chart` | Qué mini gráfico dibujar: `'area'`, `'bars'`, `'line'` o `'scatter'` |
| `accent` | Color del proyecto: `'blue'`, `'cyan'`, `'indigo'`, `'violet'` o `'emerald'` |
| `detail` | El contenido de la página de detalle. `null` = el proyecto no tiene detalle |

Dentro de `detail` van el contexto, los datos usados, el proceso paso a paso, los
hallazgos y el impacto.

### Sobre las miniaturas

Si un proyecto no tiene imagen, el sitio dibuja un mini gráfico generado a partir del
`slug`: siempre distinto entre proyectos y siempre igual para el mismo proyecto. Para
usar una imagen propia, guardala en `public/img/` y poné `cover: 'img/nombre.png'`.

---

## Cambiar la foto

1. Guardá la nueva foto **cuadrada** en `public/img/` (recomendado: 900 × 900 px).
2. Actualizá `photo` y `photoWebp` en `src/content/site.ts`.

La foto se muestra dentro de un círculo, así que conviene que la cara quede centrada
y quede algo de aire alrededor.

---

## Cambiar el CV

El botón "Descargar CV" apunta a `public/cv/`. Para reemplazarlo:

1. Poné el archivo nuevo en `public/cv/`.
2. Actualizá la ruta en `site.cv` dentro de `src/content/site.ts`.

> Hoy el botón descarga el `.docx`. Lo ideal es exportar el CV a PDF y reemplazarlo,
> porque un PDF se abre en cualquier dispositivo sin descargar nada.

---

## Publicar

El sitio se publica solo en GitHub Pages cada vez que se sube un cambio a `main`.

La primera vez hay que habilitarlo una sola vez:

1. En el repositorio de GitHub, entrá a **Settings → Pages**.
2. En **Source**, elegí **GitHub Actions**.

Listo. A partir de ahí, cada `git push` a `main` reconstruye y publica el sitio en
un par de minutos. El progreso se ve en la pestaña **Actions**.

No hace falta configurar la dirección del sitio: los archivos se enlazan de forma
relativa, así que funciona igual en `usuario.github.io/repositorio/` que en un
dominio propio.

---

## Estructura del proyecto

```
src/
├── content/      Todo el texto del sitio (es lo único que se edita seguido)
├── components/   Las secciones y piezas visuales
├── pages/        Inicio y página de detalle de proyecto
├── context/      Idioma y tema claro/oscuro
├── lib/          Ayudantes: generación de gráficos, colores, rutas
└── index.css     Colores, tipografías y estilos base
public/
├── img/          Foto y cualquier imagen de proyecto
└── cv/           El CV descargable
origen/           Archivos originales sin procesar (foto sin recortar, CV en Word)
```

### Los colores

Están todos definidos en `src/index.css`, arriba de todo: `:root` para el tema claro
y `.dark` para el oscuro. Cambiando esas variables cambia el sitio entero.
