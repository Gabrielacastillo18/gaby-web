import { contactChannels, site } from '../content/site'
import { ui } from '../content/ui'
import { useLang } from '../context/LangContext'
import { softAccent } from '../lib/accent'
import { asset } from '../lib/assets'
import { HireButtons } from './HireButtons'
import {
  BriefcaseIcon,
  DownloadIcon,
  GithubIcon,
  LinkedInIcon,
  MailIcon,
  PhoneIcon,
  PinIcon,
  SendIcon,
  SparkIcon,
} from './Icons'
import { Reveal } from './Reveal'
import { Section } from './Section'
import { Card, CardContent, CardHeader, CardTitle } from './ui/Card'

const CHANNEL_ICONS = {
  mail: MailIcon,
  linkedin: LinkedInIcon,
  pin: PinIcon,
  github: GithubIcon,
  phone: PhoneIcon,
}

/** Cada tono resuelve a la variable CSS correspondiente. */
const TONE_COLOR = {
  primary: 'var(--primary)',
  accent: 'var(--accent)',
  violet: 'var(--violet)',
}

export function Contact() {
  const { t, lang } = useLang()

  return (
    <Section
      id="contact"
      heading={ui.sections.contact}
      icon={<SparkIcon size={28} className="text-accent" />}
      className="relative overflow-hidden bg-elev/60"
    >
      {/* Orbes y puntos de fondo */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute left-20 top-20 h-64 w-64 animate-pulse rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-20 right-20 h-80 w-80 animate-pulse rounded-full bg-accent/10 blur-3xl [animation-delay:1s]" />
        <div className="absolute left-1/4 top-32 h-2 w-2 animate-ping rounded-full bg-accent" />
        <div className="absolute right-1/3 top-64 h-1 w-1 animate-pulse rounded-full bg-primary [animation-delay:.5s]" />
        <div className="absolute bottom-48 left-1/3 h-3 w-3 animate-bounce rounded-full bg-accent/70 [animation-delay:1s]" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl">
        <Reveal>
          <Card className="glass border-line shadow-2xl shadow-black/20">
            <CardHeader className="pb-8 pt-8 text-center">
              <CardTitle className="flex items-center justify-center text-3xl">
                <SendIcon size={28} className="mr-4 text-accent" />
                {t(ui.contact.getInTouch)}
              </CardTitle>
              <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted">
                {t(ui.contact.getInTouchText)}
              </p>
            </CardHeader>

            <CardContent className="pb-8">
              {/* Canales: tarjetas chicas y centradas, un tono distinto cada una
                  (de la misma familia de color) para que no se vean todas
                  iguales, sin caer en el arcoíris. */}
              <div className="mb-12 grid grid-cols-2 gap-4 sm:gap-5">
                {contactChannels.map((channel, index) => {
                  const Icon = CHANNEL_ICONS[channel.icon]
                  const color = TONE_COLOR[channel.tone]

                  return (
                    <a
                      key={index}
                      href={channel.href}
                      target={channel.href.startsWith('mailto:') ? undefined : '_blank'}
                      rel="noopener noreferrer"
                      className="group relative flex flex-col items-center gap-3 overflow-hidden rounded-2xl bg-bg/40 px-4 py-7 text-center transition-all duration-300 hover:-translate-y-1 hover:bg-bg/70 hover:shadow-xl hover:shadow-black/10 sm:py-8"
                    >
                      {/* Resplandor sutil detrás del ícono, en el tono del canal */}
                      <span
                        className="pointer-events-none absolute -top-10 h-28 w-28 rounded-full opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
                        style={{ backgroundColor: softAccent(color, 35) }}
                        aria-hidden="true"
                      />

                      <span
                        className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110"
                        style={{ backgroundColor: softAccent(color, 14), color }}
                      >
                        <Icon size={24} />
                      </span>

                      <div className="relative min-w-0">
                        <p className="text-xs font-medium text-muted">{t(channel.label)}</p>
                        <p className="mt-1 truncate text-[0.95rem] font-medium transition-colors group-hover:text-accent">
                          {channel.value}
                        </p>
                      </div>
                    </a>
                  )
                })}
              </div>

              {/* Llamado a la acción */}
              <div className="border-t border-line pt-8 text-center">
                <h4 className="mb-6 font-display text-xl font-bold text-muted">
                  {t(ui.sections.readyToTalk)}
                </h4>

                <div className="flex flex-col justify-center gap-4 sm:flex-row">
                  <a
                    href={`mailto:${site.email}`}
                    className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:scale-105"
                  >
                    <MailIcon size={20} className="mr-3" />
                    {t(ui.contact.write)}
                  </a>

                  <a
                    href={asset(site.cv[lang])}
                    download
                    className="inline-flex items-center justify-center rounded-full border-2 border-fg/25 px-8 py-4 font-semibold transition-all hover:scale-105 hover:border-accent hover:text-accent"
                  >
                    <DownloadIcon size={20} className="mr-3" />
                    {t(ui.hero.cv)}
                  </a>
                </div>
              </div>

              {/* Nota de cierre + botón con truco */}
              <div className="mt-12 grid gap-6 lg:grid-cols-2">
                <div className="rounded-2xl border border-line bg-bg/40 p-6 text-center">
                  <BriefcaseIcon size={32} className="mx-auto mb-4 text-accent" />
                  <h5 className="mb-3 font-display text-lg font-bold text-muted">
                    {t(ui.sections.opportunities.title)}
                  </h5>
                  <p className="text-sm leading-relaxed text-muted/80">
                    {t(ui.sections.opportunities.text)}
                  </p>
                </div>

                <HireButtons />
              </div>
            </CardContent>
          </Card>
        </Reveal>
      </div>
    </Section>
  )
}
