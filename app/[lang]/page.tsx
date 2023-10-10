import { Locale } from '@/i18n.config';
import { getDictionary } from '@/utils/dictionary';

import { AdvantagesSection, FAQSection, ResultsSection } from '@/sections';

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  // fetching local data for the selected lang
  const { page, socials } = await getDictionary(lang);

  return (
    <main>
      <AdvantagesSection staticData={page.home.advantages} />
      <FAQSection staticData={{ faq: page.home.faq, socials }} />
      <ResultsSection
        staticData={page.home.patient_results}
        iconData={page.home.iconBtnData}
        lang={lang}
        className="-mt-5 mb-10 md:-mt-8 xl:-mt-10"
      />
    </main>
  );
}
