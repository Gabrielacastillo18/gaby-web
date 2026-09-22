import { certifications, education } from '../content/education'
import { ui } from '../content/ui'
import { useLang } from '../context/LangContext'
import { AwardIcon, CalendarIcon, GraduationIcon, PinIcon } from './Icons'
import { Reveal } from './Reveal'
import { Section, SectionTitle } from './Section'
import { Card, CardContent, CardHeader, CardTitle } from './ui/Card'

export function Education() {
  const { t } = useLang()

  return (
    <Section id="education" heading={ui.sections.education} className="bg-elev/60">
      {/* Línea de tiempo alternada */}
      <div className="relative">
        <div
          className="absolute bottom-8 left-8 top-8 w-1 rounded-full bg-accent/30 md:left-1/2 md:-translate-x-1/2"
          aria-hidden="true"
        />

        <div className="space-y-12">
          {education.map((item, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <div
                className={`relative flex flex-col items-center md:justify-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Punto del timeline */}
                <span
                  className="absolute left-8 z-10 h-4 w-4 rounded-full border-4 border-bg bg-accent shadow-lg md:left-1/2 md:-translate-x-1/2"
                  aria-hidden="true"
                />

                <div
                  // En mobile la tarjeta deja lugar para la línea de la izquierda;
                  // en desktop ocupa media columna a un lado del eje.
                  className={`ml-16 w-[calc(100%-4rem)] md:ml-0 md:w-5/12 ${
                    index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                  }`}
                >
                  <Card className="hover:shadow-lg hover:shadow-black/10">
                    <CardHeader>
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <CardTitle className="mb-2 text-xl">{t(item.degree)}</CardTitle>
                          <p className="text-lg text-accent">{t(item.school)}</p>
                        </div>
                        <span className="rounded-full bg-accent/15 p-2">
                          <GraduationIcon size={24} className="text-accent" />
                        </span>
                      </div>
                    </CardHeader>

                    <CardContent className="pt-4">
                      <div className="space-y-3">
                        <div className="flex items-center text-muted">
                          <CalendarIcon size={16} className="mr-2 shrink-0" />
                          <span>{t(item.period)}</span>
                        </div>
                        <div className="flex items-center text-muted">
                          <PinIcon size={16} className="mr-2 shrink-0" />
                          <span>{t(item.location)}</span>
                        </div>
                        <div className="flex items-center">
                          <AwardIcon size={16} className="mr-2 shrink-0 text-accent" />
                          <span className="text-accent">
                            {t(item.current ? ui.sections.inProgress : ui.sections.completed)}
                          </span>
                        </div>
                        {item.detail && (
                          <p className="leading-relaxed text-muted">{t(item.detail)}</p>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Certificaciones */}
      {certifications.length > 0 && (
        <div className="mt-16 text-center">
          <Reveal>
            <div className="mb-8">
              <SectionTitle heading={ui.sections.certifications} size="md" />
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((item, index) => (
              <Reveal key={index} delay={index * 0.06} className="h-full">
                <Card className="h-full p-6 text-center hover:shadow-lg hover:shadow-black/10">
                  <CardContent className="p-0">
                    <h4 className="font-display text-base font-bold">{t(item.name)}</h4>
                    <p className="mt-1 text-sm text-accent">{t(item.issuer)}</p>
                    {item.detail && (
                      <p className="mt-2.5 text-sm leading-relaxed text-muted">{t(item.detail)}</p>
                    )}
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      )}
    </Section>
  )
}
