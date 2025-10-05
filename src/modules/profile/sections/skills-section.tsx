// my-space/src/modules/profile/sections/skills-section.tsx
import { useTranslation } from 'react-i18next'
import { SkillCategory } from '@/modules/profile/components/skill-category'

const skillCategories = [
  {
    title: 'Frontend Development',
    skills: ['React & Next.js', 'TypeScript & JavaScript', 'HTML5 & CSS3', 'Tailwind CSS', 'Vue.js', 'Responsive Design'],
  },
  {
    title: 'Design Tools',
    skills: ['Figma', 'Adobe XD', 'Sketch', 'Framer', 'Prototyping', 'Design Systems'],
  },
  {
    title: 'Backend & Tools',
    skills: ['Node.js', 'PostgreSQL', 'Git & GitHub', 'REST APIs', 'CI/CD', 'Vercel & AWS'],
  },
  {
    title: 'Soft Skills',
    skills: ['Team Leadership', 'Agile/Scrum', 'Code Review', 'Mentoring', 'Technical Writing', 'Problem Solving'],
  },
  {
    title: 'Accessibility',
    skills: ['WCAG 2.1 AA/AAA', 'ARIA Standards', 'Screen Readers', 'Keyboard Navigation', 'Color Contrast', 'Inclusive Design'],
  },
  {
    title: 'Performance',
    skills: ['Core Web Vitals', 'Code Splitting', 'Lazy Loading', 'Image Optimization', 'Caching Strategies', 'Bundle Analysis'],
  },
]

export function SkillsSection() {
  const { t } = useTranslation('profile')
  return (
    <section id="skills" className="py-16">
      <div className="space-y-16">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">{t('sections.skills')}</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <SkillCategory key={category.title} {...category} />
          ))}
        </div>
      </div>
    </section>
  )
}
