import { passions } from '../content/passions'
import { ui } from '../content/ui'
import { useLang } from '../context/LangContext'
import { ContentIcon } from './ContentIcon'
import { HeartIcon } from './Icons'
import { Reveal } from './Reveal'
import { Section, SectionTitle } from './Section'
import { Card, CardContent } from './ui/Card'

/** Sección opcional: si no hay contenido cargado, no se muestra nada. */
export function Passions() {
  const { t } = useLang()

  if (passions.length === 0) return null

  return (
    <Section
      id="passions"
      heading={ui.sections.passions}
      icon={<HeartIcon size={28} className="text-accent" />}
      className="bg-elev/60"
    >
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {passions.map((item, index) => (
          <Reveal key={index} delay={index * 0.07} className="h-full">
            <Card className="group h-full p-6 text-center transition-all duration-300 hover:scale-[1.03] hover:shadow-lg hover:shadow-black/10">
              <CardContent className="p-0">
                <div className="mb-6">
                  <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full border-2 border-accent bg-accent/15 transition-transform group-hover:scale-110">
                    <ContentIcon name={item.icon} size={36} className="text-accent" />
                  </div>
                  <h3 className="font-display text-xl font-bold">{t(item.title)}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{t(item.text)}</p>
                </div>
                <div className="flex justify-center">
                  <span className="h-1 w-12 rounded-full bg-accent" />
                </div>
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </div>

      {/* Cierre de la sección */}
      <Reveal delay={0.1}>
        <div className="mt-16 text-center">
          <Card className="mx-auto max-w-4xl p-8">
            <CardContent className="p-0">
              <div className="mb-4">
                <SectionTitle heading={ui.sections.balance} size="md" />
              </div>
              <p className="text-lg leading-relaxed text-muted">{t(ui.sections.balance.text)}</p>
            </CardContent>
          </Card>
        </div>
      </Reveal>
    </Section>
  )
}
