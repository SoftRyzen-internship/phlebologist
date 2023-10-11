import { Locale } from '@/i18n.config';
import { getDictionary } from '@/utils/dictionary';
import Link from 'next/link';

import {
  HeroSection,
  AdvantagesSection,
  FAQSection,
  ResultsSection,
  ContactsSection,
  FeedbackSection,
} from '@/sections';

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  // fetching local data for the selected lang
  const { page, socials } = await getDictionary(lang);

  return (
    <main>
      <div className="mx-auto w-[440px] py-10">
        <h2 className="text-center font-semibold uppercase">
          temp treatment nav
        </h2>
        <div className="mt-4 flex gap-4">
          <Link
            href={`${lang}/treatment/1`}
            className="rounded-md bg-gray-extra p-3"
          >
            Method 1
          </Link>
          <Link
            href={`${lang}/treatment/2`}
            className="rounded-md bg-gray-extra p-3"
          >
            Method 2
          </Link>
          <Link
            href={`${lang}/treatment/3`}
            className="rounded-md bg-gray-extra p-3"
          >
            Method 3
          </Link>
          <Link
            href={`${lang}/treatment/4`}
            className="rounded-md bg-gray-extra p-3"
          >
            Method 4
          </Link>
        </div>
      </div>

      <HeroSection staticData={page.home.hero} lang={lang} />
      <AdvantagesSection
        staticData={page.home.advantages}
        className="-mt-5 mb-10 md:-mt-8 xl:-mt-10"
      />
      <FAQSection staticData={{ faq: page.home.faq, socials }} />
      <ContactsSection
        staticData={{ pageData: page.home, socialData: socials }}
      />
      <ResultsSection
        staticData={page.home.patient_results}
        iconData={page.home.iconBtnData}
        lang={lang}
        className="-mt-5 mb-10 md:-mt-8 xl:-mt-10"
      />
      <FeedbackSection staticData={page.home.iconBtnData} />
    </main>
  );
}
