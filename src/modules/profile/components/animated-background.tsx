// my-space/src/modules/profile/components/animated-background.tsx
export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/30 dark:to-accent/20" />

      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(to right, currentColor 1px, transparent 1px),
            linear-gradient(to bottom, currentColor 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      <div
        className="absolute top-1/4 right-1/4 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-primary/20 to-accent/20 dark:from-primary/15 dark:to-accent/15 blur-3xl"
        style={{ animation: 'float-slow 25s ease-in-out infinite' }}
      />
      <div
        className="absolute bottom-1/3 left-1/3 h-[400px] w-[400px] rounded-full bg-gradient-to-br from-accent/25 to-primary/25 dark:from-accent/15 dark:to-primary/15 blur-3xl"
        style={{ animation: 'float-slower 30s ease-in-out infinite', animationDelay: '5s' }}
      />
      <div
        className="absolute top-1/2 left-1/4 h-[300px] w-[300px] rounded-full bg-gradient-to-br from-primary/25 to-accent/25 dark:from-primary/10 dark:to-accent/10 blur-3xl"
        style={{ animation: 'pulse-subtle 20s ease-in-out infinite', animationDelay: '10s' }}
      />

      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-background/50" />
    </div>
  )
}
