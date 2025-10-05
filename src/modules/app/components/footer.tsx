// my-space/src/modules/app/components/footer.tsx
import { useMemo } from 'react'

export function Footer() {
  const year = useMemo(() => new Date().getFullYear(), [])

  return (
    <footer className="w-full mt-8">
      <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-16 xl:px-24">
        <div className="flex items-center justify-between gap-4 rounded-2xl border border-border/40 bg-background/40 backdrop-blur-sm px-4 py-3 text-xs text-muted-foreground">
          <p className="truncate">
            Licenza <span className="font-medium text-foreground">MIT</span> · © {year} <span className="font-medium text-foreground">Dario Pratola</span>
          </p>
          <div className="flex items-center gap-3">
            <a
              href="/LICENSE"
              className="rounded-full border border-border/50 px-2 py-1 transition-colors hover:text-primary hover:border-primary/40 hover:bg-primary/10 focus:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              License
            </a>
            <a
              href="https://github.com/dariomayer"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-border/50 px-2 py-1 transition-colors hover:text-primary hover:border-primary/40 hover:bg-primary/10 focus:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
