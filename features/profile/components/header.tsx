// features/profile/components/header.tsx
"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { usePathname, useRouter } from "next/navigation"
import { locales } from "@/features/i18n/config"

export function Header() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [currentTime, setCurrentTime] = useState("")
  const pathname = usePathname()
  const router = useRouter()

  const currentLocale = pathname.split("/")[1]

  useEffect(() => {
    setMounted(true)
    const updateTime = () => {
      const now = new Date()
      setCurrentTime(
        now.toLocaleTimeString("it-IT", {
          hour: "2-digit",
          minute: "2-digit",
        }),
      )
    }
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  const switchLocale = (newLocale: string) => {
    const segments = pathname.split("/")
    segments[1] = newLocale
    const newPath = segments.join("/")
    router.push(newPath)
    router.refresh()
  }

  return (
    <header className="lg:ml-72 px-6 md:px-12 lg:px-16 xl:px-24 pt-8">
      <div className="flex items-center justify-between max-w-6xl">
        {/* Orario */}
        <div className="text-sm font-medium tabular-nums text-muted-foreground">
          {currentTime}
        </div>

        {/* Switcher Lingua e Tema */}
        <div className="flex items-center gap-3">
          {/* Language Switcher */}
          <div className="flex gap-2">
            {locales.map((locale) => (
              <button
                key={locale}
                onClick={() => switchLocale(locale)}
                className={`text-xs font-medium transition-colors cursor-pointer ${
                  currentLocale === locale
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {locale.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Theme Switcher */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </button>
          )}
        </div>
      </div>
    </header>
  )
}
