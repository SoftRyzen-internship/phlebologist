import { Locale } from '@/i18n.config';
import { getDictionary } from '@/utils/dictionary';

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
      <FeedbackSection staticData={page.home} lang={lang} />
    </main>
  );
}
