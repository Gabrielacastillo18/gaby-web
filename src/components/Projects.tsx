import { projects } from '../content/projects'
import { ui } from '../content/ui'
import { ProjectCard } from './ProjectCard'
import { Reveal } from './Reveal'
import { Section } from './Section'

export function Projects() {
  return (
    <Section id="projects" heading={ui.sections.projects}>
      {/* Una columna en mobile para no perder legibilidad, dos a partir de
          pantallas medianas. Todas las tarjetas son iguales: mismo tamaño,
          mismo color, mismo layout. */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <Reveal key={project.slug} delay={Math.min(index * 0.06, 0.3)} className="h-full">
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
