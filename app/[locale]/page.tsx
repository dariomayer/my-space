// /Users/dario/Documents/Progetti/next-core/app/[locale]/page.tsx
import {HeroSection} from '@/features/profile/components/hero-section';
import {LanguageSwitcher} from '@/features/profile/components/language-switcher';

export const dynamic = 'force-dynamic';

export default async function HomePage() {
  return (
    <>
      <LanguageSwitcher />
      <main>
        <HeroSection />
      </main>
    </>
  );
}
