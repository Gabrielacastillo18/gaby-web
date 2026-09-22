import type { SVGProps } from 'react'

/* Logos de las herramientas.

   Hay dos versiones de cada uno:
   - Los de acá abajo (PythonMark, ExcelMark, etc.) son de un solo trazo,
     pensados para recolorear con currentColor. Los usa la sección
     "Herramientas técnicas", donde todo va en el mismo celeste del sitio.
   - PythonColorMark es la excepción: el logo oficial de Python es
     dos serpientes en dos colores (azul y amarillo), así que no se puede
     representar con un solo currentColor. La usa el hero, donde sí
     queremos el color de marca real.

   SQL no tiene una marca propia, así que usamos el glifo genérico de base
   de datos que se usa en toda la industria para representarlo. */

type MarkProps = SVGProps<SVGSVGElement> & { size?: number }

const PYTHON_PATH =
  'M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z'

const EXCEL_PATH =
  'M23 1.5q.41 0 .7.3.3.29.3.7v19q0 .41-.3.7-.29.3-.7.3H7q-.41 0-.7-.3-.3-.29-.3-.7V18H1q-.41 0-.7-.3-.3-.29-.3-.7V7q0-.41.3-.7Q.58 6 1 6h5V2.5q0-.41.3-.7.29-.3.7-.3zM6 13.28l1.42 2.66h2.14l-2.38-3.87 2.34-3.8H7.46l-1.3 2.4-.05.08-.04.09-.64-1.28-.66-1.29H2.59l2.27 3.82-2.48 3.85h2.16zM14.25 21v-3H7.5v3zm0-4.5v-3.75H12v3.75zm0-5.25V7.5H12v3.75zm0-5.25V3H7.5v3zm8.25 15v-3h-6.75v3zm0-4.5v-3.75h-6.75v3.75zm0-5.25V7.5h-6.75v3.75zm0-5.25V3h-6.75v3Z'

const POWERBI_PATH =
  'M10 12a1 1 0 0 1 1 1v11H4a1 1 0 0 1-1-1V13a1 1 0 0 1 1-1h6Zm-2-.5V7a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v17h-4.5V13a1.5 1.5 0 0 0-1.5-1.5H8Zm5-6V1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v22a1 1 0 0 1-1 1h-3.5V7A1.5 1.5 0 0 0 15 5.5h-2Z'

export const PythonMark = ({ size = 24, ...props }: MarkProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d={PYTHON_PATH} />
  </svg>
)

/** El logo oficial de Python, en sus dos colores reales (no recolorea con currentColor). */
export const PythonColorMark = ({ size = 24, ...props }: MarkProps) => (
  <svg width={size} height={size} viewBox="0 0 128 128" aria-hidden="true" {...props}>
    <linearGradient
      id="python-color-blue"
      gradientUnits="userSpaceOnUse"
      x1="70.252"
      y1="1237.476"
      x2="170.659"
      y2="1151.089"
      gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)"
    >
      <stop offset="0" stopColor="#5A9FD4" />
      <stop offset="1" stopColor="#306998" />
    </linearGradient>
    <linearGradient
      id="python-color-yellow"
      gradientUnits="userSpaceOnUse"
      x1="209.474"
      y1="1098.811"
      x2="173.62"
      y2="1149.537"
      gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)"
    >
      <stop offset="0" stopColor="#FFD43B" />
      <stop offset="1" stopColor="#FFE873" />
    </linearGradient>
    <path
      fill="url(#python-color-blue)"
      d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zM50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z"
      transform="translate(0 10.26)"
    />
    <path
      fill="url(#python-color-yellow)"
      d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z"
      transform="translate(0 10.26)"
    />
  </svg>
)

export const ExcelMark = ({ size = 24, ...props }: MarkProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d={EXCEL_PATH} />
  </svg>
)

export const PowerBIMark = ({ size = 24, ...props }: MarkProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d={POWERBI_PATH} />
  </svg>
)

/** SQL no tiene un logo propio: usamos el glifo genérico de base de datos. */
export const SqlMark = ({ size = 24, ...props }: MarkProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...props}
  >
    <ellipse cx="12" cy="5" rx="8" ry="3" />
    <path d="M4 5v6c0 1.66 3.58 3 8 3s8-1.34 8-3V5" />
    <path d="M4 11v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" />
  </svg>
)
