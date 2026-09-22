import { aboutBlocks, aboutFacts } from '../content/site'
import { ui } from '../content/ui'
import { useLang } from '../context/LangContext'
import { ContentIcon } from './ContentIcon'
import { Reveal } from './Reveal'
import { Section } from './Section'
import { Card, CardContent } from './ui/Card'

export function About() {
  const { t } = useLang()

  return (
    <Section id="about" heading={ui.sections.about}>
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        {/* Bloques con ícono */}
        <div>
          {aboutBlocks.map((block, index) => (
            <Reveal key={index} delay={index * 0.08}>
              <div className={index < aboutBlocks.length - 1 ? 'mb-8' : ''}>
                <div className="mb-4 flex items-center">
                  <ContentIcon name={block.icon} size={24} className="mr-3 text-accent" />
                  <h3 className="font-display text-2xl font-bold">{t(block.title)}</h3>
                </div>
                <p className="leading-relaxed text-muted">{t(block.text)}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Tarjetas de dato */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {aboutFacts.map((fact, index) => (
            <Reveal key={index} delay={index * 0.07} className="h-full">
              <Card className="h-full p-6 text-center hover:shadow-lg hover:shadow-black/10">
                <CardContent className="p-0">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/15">
                    <ContentIcon name={fact.icon} size={32} className="text-accent" />
                  </div>
                  <h4 className="font-display text-xl font-bold">{t(fact.title)}</h4>
                  <p className="mt-1 text-muted">{t(fact.subtitle)}</p>
                  <p className="mt-1 text-sm text-muted/70">{t(fact.detail)}</p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}
