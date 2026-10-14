import type { IconName } from '../content/types'
import {
  BookIcon,
  BriefcaseIcon,
  BulbIcon,
  ChartIcon,
  GraduationIcon,
  HeartIcon,
  LayersIcon,
  LeafIcon,
  SparkIcon,
  TargetIcon,
  UserIcon,
} from './Icons'

const MAP = {
  user: UserIcon,
  target: TargetIcon,
  layers: LayersIcon,
  graduation: GraduationIcon,
  book: BookIcon,
  chart: ChartIcon,
  spark: SparkIcon,
  bulb: BulbIcon,
  leaf: LeafIcon,
  heart: HeartIcon,
  briefcase: BriefcaseIcon,
}

/** Resuelve el ícono que pide un archivo de contenido. */
export function ContentIcon({
  name,
  size = 24,
  className,
}: {
  name: IconName
  size?: number
  className?: string
}) {
  const Icon = MAP[name]
  return <Icon size={size} className={className} />
}
