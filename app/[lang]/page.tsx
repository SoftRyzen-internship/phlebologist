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

  // temp - for treatment nav
  const ids = ['1', '2', '3', '4'];
  return (
    <main>
      {/* temp treatment nav */}
      <div className="mx-auto mt-4 flex w-[440px] gap-4 py-10">
        {ids.map((item, index) => (
          <Link
            href={`${lang}/treatment/${item}`}
            className="rounded-md bg-gray-extra p-3"
            key={`${item}${index}`}
          >
            Method {item}
          </Link>
        ))}
      </div>

      <HeroSection staticData={page.home.hero} lang={lang} />
      <AdvantagesSection
        staticData={page.home.advantages}
        className="-mt-5 mb-10 md:-mt-8 xl:-mt-10"
      />
      <ResultsSection
        staticData={page.home.patient_results}
        iconData={page.home.iconBtnData}
        lang={lang}
        className="-mt-5 mb-10 md:-mt-8 xl:-mt-10"
      />
      <FeedbackSection staticData={page.home} lang={lang} />
      <FAQSection staticData={{ faq: page.home.faq, socials }} />
      <ContactsSection
        staticData={{ pageData: page.home, socialData: socials }}
      />
    </main>
  );
}
