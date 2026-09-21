import { useState } from 'react'
import { site } from '../content/site'
import { ui } from '../content/ui'
import { useLang } from '../context/LangContext'
import { asset } from '../lib/assets'
import { HireButtons } from './HireButtons'
import {
  ArrowRightIcon,
  CheckIcon,
  CopyIcon,
  DownloadIcon,
  GithubIcon,
  LinkedInIcon,
  MailIcon,
  PinIcon,
} from './Icons'
import { Reveal } from './Reveal'
import { Section } from './Section'

function Card({
  icon,
  label,
  value,
  children,
}: {
  icon: React.ReactNode
  label: string
  value: string
  children?: React.ReactNode
}) {
  return (
    <div className="flex min-w-0 flex-wrap items-center gap-4 rounded-2xl border border-line bg-surface/60 p-5 transition-colors hover:border-accent/40">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/12 text-accent">
        {icon}
      </span>
      <div className="min-w-0 grow basis-40">
        <p className="text-[0.7rem] font-semibold uppercase tracking-wider text-muted">{label}</p>
        <p className="truncate font-medium">{value}</p>
      </div>
      {children}
    </div>
  )
}

export function Contact() {
  const { t, lang } = useLang()
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(site.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      // Si el navegador bloquea el portapapeles, el mail igual está a la vista.
    }
  }

  return (
    <Section
      id="contact"
      eyebrow={ui.sections.contactEyebrow}
      title={ui.sections.contactTitle}
      intro={ui.sections.contactIntro}
      align="center"
      className="relative overflow-hidden"
    >
      {/* Resplandor de fondo */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[28rem] w-[46rem] -translate-x-1/2 blur-3xl"
        style={{ background: 'radial-gradient(ellipse, var(--glow-1) 0%, transparent 68%)' }}
        aria-hidden="true"
      />

      <div className="relative grid gap-5 lg:grid-cols-[1.05fr_1fr]">
        <div className="min-w-0 space-y-4">
          <Reveal>
            <Card icon={<MailIcon size={20} />} label={t(ui.contact.email)} value={site.email}>
              <div className="flex shrink-0 items-center gap-1.5">
                <button
                  type="button"
                  onClick={copyEmail}
                  aria-label={t(copied ? ui.contact.copied : ui.contact.copy)}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-line text-muted transition-colors hover:border-accent/50 hover:text-accent"
                >
                  {copied ? <CheckIcon size={16} className="text-accent" /> : <CopyIcon size={16} />}
                </button>
                <a
                  href={`mailto:${site.email}`}
                  className="flex h-9 items-center gap-1.5 rounded-lg bg-primary px-3.5 text-xs font-semibold text-white transition-transform hover:scale-105"
                >
                  {t(ui.contact.write)}
                  <ArrowRightIcon size={14} />
                </a>
              </div>
            </Card>
          </Reveal>

          <Reveal delay={0.07}>
            <Card
              icon={<LinkedInIcon size={20} />}
              label={t(ui.contact.linkedin)}
              value="/in/castillogabriela"
            >
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 shrink-0 items-center gap-1.5 rounded-lg border border-line px-3.5 text-xs font-semibold transition-colors hover:border-accent/50 hover:text-accent"
              >
                {t(ui.contact.linkedinAction)}
                <ArrowRightIcon size={14} />
              </a>
            </Card>
          </Reveal>

          {site.github && (
            <Reveal delay={0.1}>
              <Card icon={<GithubIcon size={20} />} label="GitHub" value={site.github}>
                <a
                  href={site.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 shrink-0 items-center gap-1.5 rounded-lg border border-line px-3.5 text-xs font-semibold transition-colors hover:border-accent/50 hover:text-accent"
                >
                  {t(ui.contact.linkedinAction)}
                  <ArrowRightIcon size={14} />
                </a>
              </Card>
            </Reveal>
          )}

          <Reveal delay={0.14}>
            <Card
              icon={<PinIcon size={20} />}
              label={t(ui.contact.location)}
              value={t(site.location)}
            />
          </Reveal>
        </div>

        <div className="min-w-0 space-y-4">
          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-line bg-surface/60 p-6">
              <h3 className="font-display text-base font-bold">{t(ui.contact.cvTitle)}</h3>
              <p className="mt-1.5 text-sm text-muted">{t(ui.contact.cvText)}</p>
              <a
                href={asset(site.cv[lang])}
                download
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/35"
              >
                <DownloadIcon size={16} />
                {t(ui.hero.cv)}
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.16}>
            <HireButtons />
          </Reveal>
        </div>
      </div>
    </Section>
  )
}
