// my-space/src/modules/profile/sections/studies-section.tsx
import { useTranslation } from 'react-i18next'
import { EducationItem } from '@/modules/profile/components/education-item'

const education = [
  {
    degree: 'Master of Computer Science',
    institution: 'University of Technology',
    period: '2015 - 2017',
    description:
      'Specialized in Human-Computer Interaction and User Experience Design. Thesis focused on accessibility in modern web applications.',
  },
  {
    degree: 'Bachelor of Software Engineering',
    institution: 'Institute of Technology',
    period: '2011 - 2015',
    description:
      'Graduated with honors. Focused on web development, software architecture, and database systems.',
  },
]

export function StudiesSection() {
  const { t } = useTranslation('profile')
  return (
    <section id="studies" className="py-16">
      <div className="space-y-16">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">{t('sections.studies')}</h2>

        <div className="space-y-12">
          {education.map((edu, index) => (
            <div key={edu.degree}>
              <EducationItem {...edu} />
              {index < education.length - 1 && <div className="h-px bg-border" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
