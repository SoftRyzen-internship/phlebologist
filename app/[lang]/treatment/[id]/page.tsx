import { Locale } from '@/i18n.config';
import { getDictionary } from '@/utils/dictionary';

import { MainWrapper } from '@/components';

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
    <MainWrapper>
      <TreatmentDetailsSection staticData={page.treatment[id]} />
      <ConsultationSection
        staticData={page.home.consultation}
        className="-mt-[30px] md:-mt-[52px] xl:-mt-[70px]"
      />
      <ContactsSection
        staticData={{ pageData: page.home, socialData: socials }}
      />
    </MainWrapper>
  );
}
