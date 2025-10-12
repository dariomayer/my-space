// src/modules/profile/components/header.tsx
import { Moon, Sun, Code2, RefreshCw, ExternalLink } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { applyTheme, getInitialTheme, toggleTheme, type Theme } from '@/shared/lib/theme'

const locales = ['it', 'en'] as const

export function Header() {
  const { i18n } = useTranslation()
  const [mounted, setMounted] = useState(false)
  const [theme, setThemeState] = useState<Theme>('light')

  useEffect(() => {
    const initial = getInitialTheme()
    applyTheme(initial)
    setThemeState(initial)
    setMounted(true)

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
      <div className="flex items-center justify-between gap-4 border-b border-border/40 pb-4">
        
        {/* Tech Stack Info */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <Code2 className="h-4 w-4 text-primary flex-shrink-0" />
            <p className="text-xs text-foreground/80">
              Built by <span className="font-semibold text-foreground">Dario Pratola</span> using{' '}
              <span className="font-medium text-primary">React</span> &{' '}
              <span className="font-medium text-primary">TypeScript</span> with{' '}
              <span className="font-medium text-primary">AI pair programming</span>
            </p>
          </div>
          <div className="flex items-center gap-3">
            <RefreshCw className="h-4 w-4 text-primary flex-shrink-0" />
            <p className="text-xs text-foreground/80">
              Continuously deployed to{' '}
              <span className="font-medium text-primary">Cloudflare</span> from{' '}
              <a
                href="https://github.com/dariomayer/my-space"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-medium text-primary underline transition-colors"
              >
                GitHub
                <ExternalLink className="h-3 w-3" />
              </a>
            </p>
          </div>
        </div>

        {/* Switcher Lingua e Tema */}
        <div className="flex items-center gap-3 flex-shrink-0">
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
