// src/modules/profile/sections/skills-section.tsx
import { useTranslation } from 'react-i18next'
import { SkillCategory } from '@/modules/profile/components/skill-category'
import { getSkills } from '@/modules/profile/content/skills'

export function SkillsSection() {
  const { t, i18n } = useTranslation('profile')
  const skillCategories = getSkills(i18n.resolvedLanguage || i18n.language)
  
  return (
    <section id="skills" className="py-16">
      <div className="space-y-16">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">{t('sections.skills')}</h2>

        {/* Grid con massimo 2 card per riga */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {skillCategories.map((category) => (
            <SkillCategory key={category.title} {...category} />
          ))}
        </div>
      </div>
    </section>
  )
}
