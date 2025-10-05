// my-space/src/modules/profile/components/header.tsx
import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { applyTheme, getInitialTheme, toggleTheme, type Theme } from '@/shared/lib/theme'

const locales = ['it', 'en'] as const

export function Header() {
  const { i18n } = useTranslation()
  const [mounted, setMounted] = useState(false)
  const [theme, setThemeState] = useState<Theme>('light')
  const [currentTime, setCurrentTime] = useState('')

  useEffect(() => {
    const initial = getInitialTheme()
    applyTheme(initial)
    setThemeState(initial)
    setMounted(true)

    // Update time every second
    const updateTime = () => {
      const now = new Date()
      const hours = String(now.getHours()).padStart(2, '0')
      const minutes = String(now.getMinutes()).padStart(2, '0')
      const seconds = String(now.getSeconds()).padStart(2, '0')
      setCurrentTime(`${hours}:${minutes}:${seconds}`)
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  const switchLocale = (locale: string) => {
    void i18n.changeLanguage(locale)
  }

  const handleThemeToggle = () => {
    const next = toggleTheme()
    setThemeState(next)
  }

  return (
    <header className="w-full max-w-5xl px-6 md:px-12 lg:px-16 xl:px-24 pt-8">
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        {/* Orario */}
        <div className="text-sm font-medium tabular-nums text-muted-foreground">{currentTime}</div>

        {/* Switcher Lingua e Tema */}
        <div className="flex items-center gap-3">
          {/* Language Switcher */}
          <div className="flex gap-2">
            {locales.map((locale) => (
              <button
                key={locale}
                onClick={() => switchLocale(locale)}
                className={`text-xs font-medium transition-colors cursor-pointer ${
                  i18n.language === locale ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {locale.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Theme Switcher */}
          {mounted && (
            <button
              onClick={handleThemeToggle}
              className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
          )}
        </div>
      </div>
    </header>
  )
}
