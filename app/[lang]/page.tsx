import { Locale } from '@/i18n.config';
import { getDictionary } from '@/utils/dictionary';

import { AdvantagesSection, FAQSection, ContactsSection } from '@/sections';

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
      <ContactsSection
        staticData={{ pageData: page.home, socialData: socials }}
      />
    </main>
  );
}
