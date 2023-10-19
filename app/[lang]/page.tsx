import { Locale } from '@/i18n.config';
import { getDictionary } from '@/utils/dictionary';

import {
  HeroSection,
  AboutSection,
  AdvantagesSection,
  FAQSection,
  BannerSection,
  ConsultationSection,
  ResultsSection,
  ContactsSection,
  FeedbackSection,
  TreatmentsSection,
} from '@/sections';

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { page, socials } = await getDictionary(lang);

  return (
    <main>
      <HeroSection staticData={page.home.hero} lang={lang} />
      <AboutSection
        lang={lang}
        staticData={{
          about: page.home.about,
          iconData: page.home.iconBtnData,
          fallback: page.home.about.fallback,
        }}
      />
      <AdvantagesSection
        staticData={page.home.advantages}
        className="-mt-5 md:-mt-8 xl:-mt-10"
      />
      <TreatmentsSection lang={lang} staticData={page.home.treatments} />
      <BannerSection
        staticData={page.home.banner}
        lang={lang}
        className="-mt-5 md:-mt-8 xl:-mt-10"
      />
      <ResultsSection
        staticData={page.home.patient_results}
        iconData={page.home.iconBtnData}
        lang={lang}
      />
      <FeedbackSection
        staticData={{
          feedback: page.home.feedback,
          iconBtnData: page.home.iconBtnData,
        }}
        lang={lang}
      />
      <FAQSection staticData={{ faq: page.home.faq, socials }} />
      <ConsultationSection
        staticData={page.home.consultation}
        className="-mt-5 md:-mt-8 xl:-mt-10"
      />
      <ContactsSection
        staticData={{
          pageData: {
            contacts: page.home.contacts,
            iconBtnData: page.home.iconBtnData,
          },
          socialData: socials,
        }}
      />
    </main>
  );
}
