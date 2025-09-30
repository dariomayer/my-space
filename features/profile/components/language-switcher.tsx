//features/profile/components/language-switcher.tsx
'use client';

import {usePathname, useRouter} from 'next/navigation';
import {locales} from '@/features/i18n/config';

export function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();

  const currentLocale = pathname.split('/')[1];

  const switchLocale = (newLocale: string) => {
    const segments = pathname.split('/');
    segments[1] = newLocale;
    const newPath = segments.join('/');
    router.push(newPath);
    router.refresh();
  };

  return (
    <div className="fixed top-6 right-6 flex gap-2 bg-white/80 dark:bg-black/80 backdrop-blur-sm rounded-full p-1 shadow-sm">
      {locales.map((locale) => (
        <button
          key={locale}
          onClick={() => switchLocale(locale)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
            currentLocale === locale
              ? 'bg-black dark:bg-white text-white dark:text-black'
              : 'text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white'
          }`}
        >
          {locale.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
