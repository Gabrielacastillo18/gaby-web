import { projects } from '../content/projects'
import { ui } from '../content/ui'
import { ProjectCard } from './ProjectCard'
import { Reveal } from './Reveal'
import { Section } from './Section'

export function Projects() {
  // Los destacados primero, respetando el orden del archivo dentro de cada grupo.
  const ordered = [...projects].sort((a, b) => Number(b.featured) - Number(a.featured))

  return (
    <Section
      id="projects"
      eyebrow={ui.sections.projectsEyebrow}
      title={ui.sections.projectsTitle}
      intro={ui.sections.projectsIntro}
    >
      <div className="grid gap-5 md:grid-cols-2">
        {ordered.map((project, index) => (
          <Reveal
            key={project.slug}
            delay={Math.min(index * 0.07, 0.3)}
            className={project.featured ? 'h-full md:col-span-2' : 'h-full'}
          >
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
