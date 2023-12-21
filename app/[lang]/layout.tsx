import '@/styles/global.css';
import { Analytics } from '@vercel/analytics/react';

import React from 'react';
import type { Metadata } from 'next';
import { Locale } from '@/i18n.config';
import { getDictionary } from '@/utils/dictionary';
import { Inter } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import FacebookPixel from '@/components/FacebookPixel/FacebookPixel';
import { Suspense } from 'react';

import { Footer, Header } from '@/components';
// import Head from 'next/head';

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  variable: '--font-inter',
});

export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: Locale };
}): Promise<Metadata> {
  const { meta } = await getDictionary(lang);
  const { metadata, twitter, openGraph } = meta;

  return {
    title: metadata.title,
    description: metadata.description,
    metadataBase: new URL(metadata.base),
    alternates: {
      canonical: process.env.NEXT_PUBLIC_SITE_URL,
      languages: {
        'uk-UA': '/uk',
        'en-US': '/en',
      },
    },
    keywords: metadata.keywords,
    twitter,
    openGraph,
  };
}

export default async function RootLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  const { footer, page, socials, navigation } = await getDictionary(lang);
  const { iconBtnData } = page.home;

  return (
    <html lang={lang}>
      {/* <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1064048701288094');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1064048701288094&ev=PageView&noscript=1"
          />
        </noscript>
      </Head> */}
      <body
        className={`${inter.className} mt-[75px] bg-white-dark md:mt-[87px] xl:mt-[91px]`}
      >
        <Header lang={lang} />
        {children}
        <Footer
          staticData={{ footerData: footer, socials, iconBtnData, navigation }}
          lang={lang}
        />
        <div id="modal" />
        <Toaster />
        <Analytics />
        <Suspense fallback={null}>
          <FacebookPixel />
        </Suspense>
      </body>
    </html>
  );
}
