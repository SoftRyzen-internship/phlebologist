import { Locale } from '@/i18n.config';
import { getDictionary } from '@/utils/dictionary';

import { ContactsSection, TreatmentDetailsSection } from '@/sections';

export default async function Treatment({
  params: { lang, id },
}: {
  params: { lang: Locale; id: string };
}) {
  const { page, socials } = await getDictionary(lang);

  return (
    <main>
      <TreatmentDetailsSection staticData={page.treatment[id]} />
      <ContactsSection
        staticData={{ pageData: page.home, socialData: socials }}
      />
    </main>
  );
}
