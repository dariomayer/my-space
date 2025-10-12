// src/modules/profile/components/certification-item.tsx
import { ExternalLink, Award } from 'lucide-react'
import { useTranslation } from 'react-i18next'

interface CertificationItemProps {
  title: string
  institution: string
  date: string
  description?: string
  badgeUrl?: string
  certificateUrl?: string
}

export function CertificationItem({
  title,
  institution,
  date,
  description,
  badgeUrl,
  certificateUrl,
}: CertificationItemProps) {
  const { t } = useTranslation('profile')

  return (
    <div className="space-y-4">
      <div className="flex flex-col md:flex-row md:items-start gap-4">
        {/* Badge e Link */}
        <div className="flex flex-col items-center gap-3">
          {/* Badge */}
          {badgeUrl ? (
            <img
              src={badgeUrl}
              alt={`${title} badge`}
              className="h-20 w-20 object-contain"
            />
          ) : (
            <div className="h-20 w-20 rounded-lg bg-muted flex items-center justify-center">
              <Award className="h-10 w-10 text-muted-foreground/50" />
            </div>
          )}

          {/* Link al certificato */}
          {certificateUrl ? (
            <a
              href={certificateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline transition-colors"
            >
              <span>{t('certification.viewCertificate')}</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          ) : (
            <span className="text-xs text-muted-foreground/70 italic">
              {t('certification.noCertificateLink')}
            </span>
          )}
        </div>

        {/* Testi */}
        <div className="min-w-0 flex-1">
          <h3 className="text-2xl font-bold">{title}</h3>
          <p className="text-lg text-primary font-medium">{institution}</p>
          <span className="text-sm text-muted-foreground">{date}</span>
        </div>
      </div>

      {description && <p className="text-base leading-relaxed text-foreground">{description}</p>}
    </div>
  )
}
