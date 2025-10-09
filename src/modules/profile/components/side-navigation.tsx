// src/modules/profile/components/side-navigation.tsx
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { cn } from '@/shared/lib'

const sectionIds = ['introduction', 'experience', 'certifications', 'studies', 'skills'] as const

export function SideNavigation() {
  const [activeSection, setActiveSection] = useState<string>('introduction')
  const { t } = useTranslation('profile')

  const sections = [
    { id: 'introduction', label: t('sections.introduction', { defaultValue: 'Introduction' }) },
    { id: 'skills', label: t('sections.skills') },
    { id: 'experience', label: t('sections.experience') },
    {id: 'certifications', label: t('sections.certifications')},
    { id: 'studies', label: t('sections.studies') },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150
      for (const id of sectionIds) {
        const element = document.getElementById(id)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(id)
            break
          }
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offsetTop = element.offsetTop - 100
      window.scrollTo({ top: offsetTop, behavior: 'smooth' })
    }
  }

  return (
    <>
      <nav className="hidden lg:fixed lg:left-8 lg:top-1/2 lg:-translate-y-1/2 lg:flex lg:flex-col lg:max-w-[240px] z-40">
        <div className="relative flex flex-col">
          {/* Rail glass ultra-minimal */}
          <div className="absolute left-0 top-2 bottom-2 w-1 rounded-full bg-gradient-to-b from-border/30 via-border/20 to-transparent backdrop-blur-sm" />
          {/* Indicatore attivo con sfumatura ai bordi */}
          <div
            className="absolute left-0 w-1 rounded-full bg-gradient-to-b from-transparent via-primary/80 to-transparent shadow-[0_0_10px_hsl(var(--primary)/0.50)] transition-all duration-500 ease-out"
            style={{
              top: `${sections.findIndex((s) => s.id === activeSection) * 56 - 8}px`,
              height: '72px',
            }}
          />
          {sections.map((section) => {
            const isActive = activeSection === section.id
            return (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={cn(
                  'relative text-left text-md transition-all duration-300 pl-6 pr-3 py-4 group h-[56px] flex items-center cursor-pointer',
                  isActive ? 'text-primary' : 'text-muted-foreground/70 hover:text-foreground',
                )}
              >
                <span
                  className={cn(
                    'absolute left-0 top-1/2 -translate-y-1/2 rounded-full transition-all duration-300',
                    isActive
                      ? 'w-1 h-1 bg-primary shadow-[0_0_8px_hsl(var(--primary)/0.7)]'
                      : 'w-1 h-1 bg-transparent group-hover:bg-foreground/40',
                  )}
                />
                <span className={cn('relative transition-all duration-300 truncate', isActive && 'font-medium tracking-tight')}>
                  {section.label}
                </span>
              </button>
            )
          })}
        </div>
      </nav>

      <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-background/80 backdrop-blur-xl border-t border-border/30 z-50">
        <div className="relative flex justify-around items-center px-2 py-3">
          <div
            className="absolute bottom-0 h-0.5 bg-gradient-to-r from-primary/60 via-primary/80 to-primary/60 shadow-[0_0_12px_hsl(var(--primary)/0.5)] transition-all duration-500 ease-out"
            style={{
              left: `${(sections.findIndex((s) => s.id === activeSection) / sections.length) * 100}%`,
              width: `${100 / sections.length}%`,
            }}
          />
          {sections.map((section) => {
            const isActive = activeSection === section.id
            return (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={cn(
                  'relative text-sm font-medium transition-all duration-300 px-3 py-2 cursor-pointer',
                  isActive ? 'text-primary' : 'text-muted-foreground hover:text-primary',
                )}
              >
                <span className="relative z-10">{String(section.label).split(' ')[0]}</span>
              </button>
            )
          })}
        </div>
      </nav>
    </>
  )
}
