import { experience } from '../content/experience'
import { ui } from '../content/ui'
import { useLang } from '../context/LangContext'
import { BriefcaseIcon, CalendarIcon, CheckCircleIcon, PinIcon } from './Icons'
import { Reveal } from './Reveal'
import { Section } from './Section'
import { Card, CardContent, CardHeader, CardTitle } from './ui/Card'

export function Experience() {
  const { t } = useLang()

  return (
    <Section id="experience" heading={ui.sections.experience}>
      <div className="mx-auto max-w-4xl space-y-8">
        {experience.map((item, index) => (
          <Reveal key={index} delay={index * 0.08}>
            <Card className="overflow-hidden hover:shadow-xl hover:shadow-black/15">
              {/* Encabezado en color, como en la referencia */}
              <CardHeader className="bg-primary px-6 py-6 text-white">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <CardTitle className="mb-2 text-2xl">{t(item.role)}</CardTitle>
                    <p className="text-lg opacity-90">{t(item.company)}</p>
                  </div>
                  <span className="shrink-0 rounded-full bg-white/20 p-3">
                    <BriefcaseIcon size={28} />
                  </span>
                </div>
              </CardHeader>

              <CardContent className="p-6 sm:p-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                  {/* Datos del puesto */}
                  <div>
                    <h4 className="mb-4 font-display text-lg font-bold">
                      {t(ui.sections.details)}
                    </h4>
                    <div className="space-y-3">
                      <div className="flex items-center text-muted">
                        <PinIcon size={16} className="mr-3 shrink-0" />
                        <span>{t(item.place)}</span>
                      </div>
                      <div className="flex items-center text-muted">
                        <CalendarIcon size={16} className="mr-3 shrink-0" />
                        <span>{t(item.period)}</span>
                      </div>
                    </div>

                    {item.tools.length > 0 && (
                      <>
                        <h4 className="mb-4 mt-6 font-display text-lg font-bold">
                          {t(ui.sections.toolsUsed)}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {item.tools.map((tool, toolIndex) => (
                            <span
                              key={toolIndex}
                              className="rounded-md bg-accent/15 px-2.5 py-1 text-sm text-accent"
                            >
                              {t(tool)}
                            </span>
                          ))}
                        </div>
                      </>
                    )}
                  </div>

                  {/* Logros */}
                  <div>
                    <h4 className="mb-4 font-display text-lg font-bold">
                      {t(ui.sections.achievements)}
                    </h4>
                    <div className="space-y-3">
                      {item.bullets.map((bullet, bulletIndex) => (
                        <div key={bulletIndex} className="flex items-start">
                          <CheckCircleIcon
                            size={20}
                            className="mr-3 mt-0.5 shrink-0 text-accent"
                          />
                          <span className="text-sm leading-relaxed text-muted">{t(bullet)}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
