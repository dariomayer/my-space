// src/modules/profile/sections/experience-section.tsx
import { useTranslation } from 'react-i18next'
import { ExperienceItem } from '@/modules/profile/components/experience-item'
import { getExperiences } from '@/modules/profile/content/experiences'

export function ExperienceSection() {
  const { t, i18n } = useTranslation('profile')
  const experiences = getExperiences(i18n.resolvedLanguage || i18n.language)
  return (
    <section id="experience" className="py-16">
      <div className="space-y-16">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">{t('sections.experience')}</h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={exp.company}>
              <ExperienceItem {...exp} />
              {index < experiences.length - 1 && <div className="h-px bg-border my-8" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
