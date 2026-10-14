import { ExcelMark, PowerBIMark, PythonColorMark, SqlMark } from './ToolIcons'

export type ToolId = 'python' | 'sql' | 'excel' | 'powerbi'

/**
 * Estos cuatro sí van en su color de marca real, bien saturado — a
 * propósito distinto del resto del sitio (que es todo azul serio). Es la
 * excepción: acá el objetivo es que se reconozcan de un vistazo, como
 * cualquier fila de "stack" de un portfolio técnico.
 */
const TOOL_META: Record<
  ToolId,
  { Icon: typeof PythonColorMark; bg: string; iconColor?: string; selfColored?: boolean }
> = {
  python: { Icon: PythonColorMark, bg: '#ffffff', selfColored: true },
  sql: { Icon: SqlMark, bg: '#06b6d4', iconColor: '#ffffff' },
  excel: { Icon: ExcelMark, bg: '#21a366', iconColor: '#ffffff' },
  // Fondo amarillo: ícono oscuro, blanco casi no se ve encima.
  powerbi: { Icon: PowerBIMark, bg: '#f2c811', iconColor: '#1a1a1a' },
}

/** Pastilla con el logo real de la herramienta, a todo color, y el nombre al lado. */
export function ToolBadge({ id, label }: { id: ToolId; label: string }) {
  const { Icon, bg, iconColor, selfColored } = TOOL_META[id]

  return (
    <span className="inline-flex items-center gap-2.5 rounded-full border border-line bg-surface/60 py-1.5 pl-1.5 pr-4 text-sm font-medium text-muted transition-colors hover:border-accent/50 hover:text-fg">
      <span
        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full shadow-sm ring-1 ring-black/5"
        style={{ backgroundColor: bg }}
      >
        <Icon size={selfColored ? 17 : 15} style={selfColored ? undefined : { color: iconColor }} />
      </span>
      {label}
    </span>
  )
}
