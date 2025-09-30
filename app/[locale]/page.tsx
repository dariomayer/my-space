// app/[locale]/page.tsx
import { AnimatedBackground } from "@/features/profile/components/animated-background"
import { SideNavigation } from "@/features/profile/components/side-navigation"
import { Header } from "@/features/profile/components/header"
import { IntroductionSection } from "@/features/profile/components/introduction-section"
import { ExperienceSection } from "@/features/profile/components/experience-section"
import { StudiesSection } from "@/features/profile/components/studies-section"
import { SkillsSection } from "@/features/profile/components/skills-section"

export const dynamic = 'force-dynamic';

export default async function HomePage() {
  return (
    <div className="min-h-screen">
      <AnimatedBackground />
      <Header />
      <SideNavigation />

      <main className="lg:ml-72 px-6 md:px-12 lg:px-16 xl:px-24 pt-8 pb-24 max-w-6xl">
        <IntroductionSection />
        <ExperienceSection />
        <StudiesSection />
        <SkillsSection />

        {/* Footer */}
        <footer className="py-12 text-center text-sm text-muted-foreground border-t border-border mt-24">
          <p>© 2025 Selene Yu. All rights reserved.</p>
        </footer>
      </main>
    </div>
  )
}
