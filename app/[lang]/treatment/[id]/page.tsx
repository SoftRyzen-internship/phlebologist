import { Locale } from '@/i18n.config';
import { getDictionary } from '@/utils/dictionary';

import {
  ContactsSection,
  ConsultationSection,
  TreatmentDetailsSection,
} from '@/sections';

export default async function Treatment({
  params: { lang, id },
}: {
  params: { lang: Locale; id: string };
}) {
  const { page, socials } = await getDictionary(lang);

  return (
    <main>
      <TreatmentDetailsSection staticData={page.treatment[id]} />
      <ConsultationSection
        staticData={page.home.consultation}
        className="-mt-5 mb-10 md:-mt-8 xl:-mt-10"
      />
      <ContactsSection
        staticData={{ pageData: page.home, socialData: socials }}
      />
    </main>
  );
}
