// my-space/src/modules/profile/sections/experience-section.tsx
import { useTranslation } from 'react-i18next'
import { ExperienceItem } from '@/modules/profile/components/experience-item'

const experiences = [
  {
    company: 'FLY',
    role: 'Senior Design Engineer',
    period: '2022 - Present',
    achievements: [
      'Redesigned the UI/UX for the FLY platform, resulting in a 20% increase in user engagement and 30% faster load times.',
      'Led the development of a comprehensive design system used across multiple products, improving consistency and development speed.',
      'Collaborated with cross-functional teams to implement accessibility standards, achieving WCAG 2.1 AA compliance.',
    ],
  },
  {
    company: 'TechCorp',
    role: 'Frontend Developer',
    period: '2019 - 2022',
    achievements: [
      'Built responsive web applications using React, TypeScript, and modern CSS frameworks.',
      'Optimized application performance, reducing initial load time by 40% through code splitting and lazy loading.',
      'Mentored junior developers and conducted code reviews to maintain high code quality standards.',
    ],
  },
  {
    company: 'StartupXYZ',
    role: 'Junior Developer',
    period: '2017 - 2019',
    achievements: [
      'Developed and maintained client websites using HTML, CSS, JavaScript, and WordPress.',
      'Collaborated with designers to implement pixel-perfect UI components and animations.',
    ],
  },
]

export function ExperienceSection() {
  const { t } = useTranslation('profile')
  return (
    <section id="experience" className="py-16">
      <div className="space-y-16">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">{t('sections.experience')}</h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={exp.company}>
              <ExperienceItem {...exp} />
              {index < experiences.length - 1 && <div className="h-px bg-border" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
