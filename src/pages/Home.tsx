import { About } from '../components/About'
import { Contact } from '../components/Contact'
import { Education } from '../components/Education'
import { Experience } from '../components/Experience'
import { Hero } from '../components/Hero'
import { Passions } from '../components/Passions'
import { Projects } from '../components/Projects'
import { Skills } from '../components/Skills'

/* El orden sigue el de la referencia:
   inicio → sobre mí → formación → experiencia → herramientas →
   proyectos → intereses → contacto. */
export function Home() {
  return (
    <>
      <Hero />
      <About />
      <Education />
      <Experience />
      <Skills />
      <Projects />
      <Passions />
      <Contact />
    </>
  )
}
