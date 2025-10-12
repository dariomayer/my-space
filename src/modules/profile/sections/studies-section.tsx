// src/modules/profile/sections/studies-section.tsx
import { useTranslation } from 'react-i18next'
import { EducationItem } from '@/modules/profile/components/education-item'
import { getEducation } from '@/modules/profile/content/education'

export function StudiesSection() {
  const { t, i18n } = useTranslation('profile')
  const education = getEducation(i18n.resolvedLanguage || i18n.language)
  return (
    <section id="studies">
      <div className="space-y-12">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">{t('sections.studies')}</h2>

        <div className="space-y-12">
          {education.map((edu, index) => (
            <div key={edu.degree}>
              <EducationItem {...edu} />
              {index < education.length - 1 && <div className="h-px bg-border my-8" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
