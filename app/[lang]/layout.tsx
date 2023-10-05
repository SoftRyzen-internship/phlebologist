import '@/styles/global.css';

import React from 'react';
import type { Metadata } from 'next';
import { Locale } from '@/i18n.config';
import { getDictionary } from '@/utils/dictionary';
import { Inter } from 'next/font/google';

import { Footer, Header } from '@/components';

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default async function RootLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  const { footer, page } = await getDictionary(lang);
  const { iconBtnData } = page.home;

  return (
    <html lang={lang}>
      <body className={inter.className}>
        <Header lang={lang} />
        {children}
        <Footer staticData={footer} iconBtnData={iconBtnData} />
      </body>
    </html>
  );
}
