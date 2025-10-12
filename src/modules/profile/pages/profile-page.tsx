// src/modules/profile/pages/profile-page.tsx
import { useEffect, useState } from 'react'
import { Header } from '@/modules/profile/components/header'
import { Footer } from '@/modules/app/components/footer'
import { IntroductionSection } from '@/modules/profile/components/introduction-section'
import { ExperienceSection } from '@/modules/profile/sections/experience-section'
import { CertificationsSection } from '@/modules/profile/sections/certifications-section'
import { SkillsSection } from '@/modules/profile/sections/skills-section'
import { StudiesSection } from '@/modules/profile/sections/studies-section'
import { AnimatedBackground } from '@/modules/profile/components/animated-background'
import { SideNavigation } from '@/modules/profile/components/side-navigation'
import { ensureProfileI18n } from '@/modules/profile/i18n'

export function ProfilePage() {
  const [i18nReady, setI18nReady] = useState(false)

  useEffect(() => {
    // Pre-carica tutti i namespace (it + en) una sola volta
    ensureProfileI18n().then(() => setI18nReady(true))
  }, [])

  if (!i18nReady) {
    return null
  }

  return (
    <main className="min-h-dvh flex flex-col items-center relative lg:ml-72 pb-24 lg:pb-0">
      <AnimatedBackground />
      <SideNavigation />
      <Header />
      <div className="w-full max-w-5xl px-6 md:px-12 lg:px-16 xl:px-24 my-24">
        <IntroductionSection />
      </div>
      <div className="w-full max-w-5xl px-6 md:px-12 lg:px-16 xl:px-24 mb-24">
        <SkillsSection />
      </div>
      <div className="w-full max-w-5xl px-6 md:px-12 lg:px-16 xl:px-24 mb-24">
        <ExperienceSection />
      </div>
      <div className="w-full max-w-5xl px-6 md:px-12 lg:px-16 xl:px-24 mb-24">
        <CertificationsSection />
      </div>
      <div className="w-full max-w-5xl px-6 md:px-12 lg:px-16 xl:px-24 mb-24">
        <StudiesSection />
      </div>

      <Footer />
    </main>
  )
}

