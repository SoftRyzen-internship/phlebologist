import '@/styles/global.css';

import React from 'react';
import type { Metadata } from 'next';
import { Locale } from '@/i18n.config';
import { Inter } from 'next/font/google';

import { Header } from '@/components';

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  return (
    <html lang={params.lang}>
      <body className={(inter.className, 'leading-normal')}>
        <Header lang={params.lang} />
        {children}
      </body>
    </html>
  );
}
