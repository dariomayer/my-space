// src/modules/profile/components/language-toggle.tsx
import { useTranslation } from 'react-i18next'
import { Button } from '@/shared/ui/button'

export function LanguageToggle() {
  const { i18n } = useTranslation()
  const current = i18n.resolvedLanguage || i18n.language || 'en'

  return (
    <div className="flex gap-2">
      <Button
        variant={current === 'it' ? 'default' : 'secondary'}
        onClick={() => i18n.changeLanguage('it')}
      >
        Italiano
      </Button>
      <Button
        variant={current === 'en' ? 'default' : 'secondary'}
        onClick={() => i18n.changeLanguage('en')}
      >
        English
      </Button>
    </div>
  )
}
