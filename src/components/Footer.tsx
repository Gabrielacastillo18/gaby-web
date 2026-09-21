import { site } from '../content/site'
import { ui } from '../content/ui'
import { useLang } from '../context/LangContext'
import { GithubIcon, LinkedInIcon, MailIcon } from './Icons'

export function Footer() {
  const { t } = useLang()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-line bg-elev/60">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-6 px-5 py-10 sm:px-8 md:flex-row">
        <div className="text-center md:text-left">
          <p className="font-display text-base font-bold">
            {site.fullName}
            <span className="text-accent">.</span>
          </p>
          <p className="mt-1 text-sm text-muted">{t(site.role)}</p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={`mailto:${site.email}`}
            aria-label={t(ui.contact.email)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-accent/50 hover:text-accent"
          >
            <MailIcon size={17} />
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-accent/50 hover:text-accent"
          >
            <LinkedInIcon size={17} />
          </a>
          {site.github && (
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-accent/50 hover:text-accent"
            >
              <GithubIcon size={17} />
            </a>
          )}
        </div>

        <p className="text-center text-xs text-muted md:text-right">
          © {year} {site.fullName}. {t(ui.footer.rights)}
          <br />
          <span className="opacity-70">{t(ui.footer.built)}</span>
        </p>
      </div>
    </footer>
  )
}
