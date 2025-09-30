// /Users/dario/Documents/Progetti/next-core/app/[locale]/layout.tsx
import type {Metadata} from 'next';
import type {ReactElement} from 'react';
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {Geist, Geist_Mono} from 'next/font/google';
import '../globals.css';
import {locales} from '@/i18n-config';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'My Profile',
  description: 'CV minimale, elegante e bilingue (IT/EN)',
};

export const dynamic = 'force-dynamic';

function isValidLocale(value: string): value is (typeof locales)[number] {
  return (locales as readonly string[]).includes(value);
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}>): Promise<ReactElement> {
  const {locale} = await params;
  if (!isValidLocale(locale)) notFound();

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
