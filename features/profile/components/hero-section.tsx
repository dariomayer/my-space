// /Users/dario/Documents/Progetti/next-core/features/profile/components/hero-section.tsx
import {getTranslations} from 'next-intl/server';

export async function HeroSection() {
  const t = await getTranslations('hero');
  
  return (
    <section className="min-h-dvh flex flex-col items-center justify-center px-6 py-16 gap-8">
      <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-center max-w-4xl">
        {t('headline')}
      </h1>
      <p className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-400 text-center max-w-2xl">
        {t('subheadline')}
      </p>
      <button className="mt-8 px-8 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full font-medium hover:opacity-80 transition-opacity">
        {t('cta')}
      </button>
    </section>
  );
}
