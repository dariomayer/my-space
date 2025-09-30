"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

const sections = [
  { id: "introduction", label: "Introduction" },
  { id: "experience", label: "Work Experience" },
  { id: "studies", label: "Studies" },
  { id: "skills", label: "Technical skills" },
]

export function SideNavigation() {
  const [activeSection, setActiveSection] = useState("introduction")

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150

      for (const section of sections) {
        const element = document.getElementById(section.id)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offsetTop = element.offsetTop - 100
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
  }

  return (
    <>
      <nav className="hidden lg:fixed lg:left-8 lg:top-1/2 lg:-translate-y-1/2 lg:flex lg:flex-col z-40">
        <div className="relative flex flex-col">
          {/* Vertical line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-border" />
          
          {/* Active indicator line */}
          <div
            className="absolute left-0 w-px bg-primary shadow-[0_0_8px_hsl(var(--primary)/0.5)] transition-all duration-500 ease-out"
            style={{
              top: `${sections.findIndex((s) => s.id === activeSection) * 52}px`,
              height: "52px",
            }}
          />

          {sections.map((section, index) => {
            const isActive = activeSection === section.id
            return (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={cn(
                  "relative text-left text-sm transition-all duration-300 pl-6 pr-4 py-4 group h-[52px] flex items-center cursor-pointer",
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground hover:text-primary",
                )}
              >
                {/* Dot indicator */}
                <span
                  className={cn(
                    "absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full transition-all duration-300 border-2 border-background",
                    isActive
                      ? "w-2 h-2 bg-primary shadow-[0_0_6px_hsl(var(--primary)/0.6)]"
                      : "w-1.5 h-1.5 bg-muted-foreground/50 group-hover:bg-primary group-hover:w-2 group-hover:h-2 group-hover:shadow-[0_0_6px_hsl(var(--primary)/0.4)]",
                  )}
                />

                {/* Text */}
                <span 
                  className={cn(
                    "relative transition-all duration-300",
                    isActive && "font-medium tracking-tight"
                  )}
                >
                  {section.label}
                </span>

                {/* Number indicator with blue accent */}
                {/* <span
                  className={cn(
                    "ml-auto text-xs tabular-nums transition-all duration-300",
                    isActive
                      ? "opacity-100 text-blue-600/60 dark:text-blue-400/60"
                      : "opacity-0 group-hover:opacity-100 text-blue-600/40 dark:text-blue-400/40",
                  )}
                >
                  {String(index + 1).padStart(2, '0')}
                </span> */}
              </button>
            )
          })}
        </div>
      </nav>

      <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur-xl border-t border-primary/20 z-50">
        <div className="relative flex justify-around items-center px-2 py-3">
          {/* Animated bottom indicator */}
          <div
            className="absolute bottom-0 h-0.5 bg-primary shadow-[0_0_8px_hsl(var(--primary)/0.5)] transition-all duration-500 ease-out"
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
                  "relative text-xs font-medium transition-all duration-300 px-3 py-2 cursor-pointer",
                  isActive ? "text-primary" : "text-muted-foreground hover:text-primary",
                )}
              >
                <span className="relative z-10">{section.label.split(" ")[0]}</span>
              </button>
            )
          })}
        </div>
      </nav>
    </>
  )
}
