// src/modules/profile/sections/certifications-section.tsx
import { useTranslation } from 'react-i18next'
import { CertificationItem } from '@/modules/profile/components/certification-item'
import { getCertifications } from '@/modules/profile/content/certifications'

export function CertificationsSection() {
  const { t, i18n } = useTranslation('profile')
  const certifications = getCertifications(i18n.resolvedLanguage || i18n.language)
  return (
    <section id="certifications">
      <div className="space-y-12">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">{t('sections.certifications')}</h2>
        <div className="space-y-12">
          {certifications.map((item, index) => (
            <div key={`${item.title}-${index}`}>
              <CertificationItem {...item} />
              {index < certifications.length - 1 && <div className="h-px bg-border my-8" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
