// src/modules/profile/components/introduction-section.tsx
import { Github, Linkedin, Mail, MapPin } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { parseMarkdownToReact } from '@/shared/lib/text-parser'

export function IntroductionSection() {
  const { t } = useTranslation('profile')

  return (
    <section id="introduction">
      <div className="w-full space-y-12">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <div className="flex-shrink-0">
            <div className="relative">
              <img
                src="/professional-portrait.png"
                alt={t('name')}
                className="w-72 h-72 rounded-full object-cover border-4 border-border shadow-xl"
              />
            </div>
          </div>

          <div className="flex-1 space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">{t('name')}</h1>
              <p className="text-2xl md:text-3xl text-muted-foreground font-light">{t('role')}</p>

              <div className="flex items-center gap-6 pt-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 text-red-500" />
                  <span>{t('location')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center rounded-full border border-border px-2 py-0.5 text-xs font-medium text-muted-foreground bg-foreground/5">
                    {t('languages.italian')}
                  </span>
                  <span className="inline-flex items-center rounded-full border border-border px-2 py-0.5 text-xs font-medium text-muted-foreground bg-foreground/5">
                    {t('languages.english')}
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2 pt-4">
                <a
                  href={`mailto:${t('contact.email')}`}
                  className="inline-flex items-center gap-2 text-sm font-medium rounded-full px-3 py-1 border border-accent/70 bg-accent/10 text-foreground transition-colors hover:bg-primary/15 hover:text-primary hover:border-primary/50 focus:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  <Mail className="h-5 w-5 text-primary" />
                  <span className="hidden sm:inline">Email</span>
                </a>
                {/* <a
                  href={`tel:${String(t('contact.phone')).replace(/\s/g, '')}`}
                  className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  <Phone className="h-5 w-5" />
                  <span className="hidden sm:inline">{t('contact.phone')}</span>
                </a> */}
                <a
                  href={`https://${t('contact.linkedin')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium rounded-full px-3 py-1 border border-accent/70 bg-accent/10 text-foreground transition-colors hover:bg-primary/15 hover:text-primary hover:border-primary/50 focus:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  <Linkedin className="h-5 w-5 text-primary" />
                  <span className="hidden sm:inline">LinkedIn</span>
                </a>
                <a
                  href={`https://github.com/${t('contact.github')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium rounded-full px-3 py-1 border border-accent/70 bg-accent/10 text-foreground transition-colors hover:bg-primary/15 hover:text-primary hover:border-primary/50 focus:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  <Github className="h-5 w-5 text-primary" />
                  <span className="hidden sm:inline">{t('contact.github')}</span>
                </a>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-base leading-relaxed text-foreground">{parseMarkdownToReact(t('description'))}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
