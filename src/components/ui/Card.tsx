import type { ReactNode } from 'react'

/* Tarjeta base, con la misma anatomía que usa la referencia:
   Card > CardHeader (título + acción) > CardContent. */

export function Card({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div
      className={`flex flex-col rounded-2xl border border-line bg-surface/60 transition-shadow ${className}`}
    >
      {children}
    </div>
  )
}

export function CardHeader({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return <div className={`px-6 pt-6 ${className}`}>{children}</div>
}

export function CardTitle({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return <h3 className={`font-display font-bold leading-tight ${className}`}>{children}</h3>
}

export function CardContent({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return <div className={`px-6 pb-6 ${className}`}>{children}</div>
}
