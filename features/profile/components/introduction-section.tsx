// features/profile/components/introduction-section.tsx
"use client"

import { Github, Linkedin, Mail, MapPin, Calendar, Phone } from "lucide-react"
import { useTranslations } from "next-intl"

export function IntroductionSection() {
  const t = useTranslations("introduction")

  return (
    <section id="introduction" className="py-16">
      <div className="w-full space-y-12">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div className="relative">
              <img
                src="/professional-portrait.png"
                alt={t("name")}
                className="w-48 h-48 rounded-full object-cover border-4 border-border shadow-xl"
              />
            </div>
          </div>

          {/* Profile Info */}
          <div className="flex-1 space-y-8">
            <div className="space-y-4">
              {/* <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent border border-accent-foreground/20">
                <Calendar className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">{t("scheduleCall")}</span>
              </div> */}

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">{t("name")}</h1>
              <p className="text-2xl md:text-3xl text-muted-foreground font-light">{t("role")}</p>

              <div className="flex items-center gap-6 pt-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>{t("location")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-secondary text-sm font-medium">
                    {t("languages.italian")}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-secondary text-sm font-medium">
                    {t("languages.english")}
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a
                  href={`mailto:${t("contact.email")}`}
                  className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  <span className="hidden sm:inline">Email</span>
                </a>
                <a
                  href={`tel:${t("contact.phone").replace(/\s/g, "")}`}
                  className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  <Phone className="h-5 w-5" />
                  <span className="hidden sm:inline">{t("contact.phone")}</span>
                </a>
                <a
                  href={`https://${t("contact.linkedin")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="hidden sm:inline">LinkedIn</span>
                </a>
                <a
                  href={`https://github.com/${t("contact.github")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  <Github className="h-5 w-5" />
                  <span className="hidden sm:inline">{t("contact.github")}</span>
                </a>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-base leading-relaxed text-foreground">{t("description")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
