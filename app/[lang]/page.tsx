import { Locale } from '@/i18n.config';
import { getDictionary } from '@/utils/dictionary';

import { About } from '@/sections';
import { ButtonPrimary, SliderBeforeAfter } from '@/components';

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  // fetching local data for the selected lang
  const { page } = await getDictionary(lang);

  return (
    <main>
      {/* local data rendering */}
      <h1 className="text-2xl">{page.home.title}</h1>
      <p className="text-base text-gray-700">{page.home.description}</p>

      <ButtonPrimary buttonsize="large">
        Записатись на консультацію
      </ButtonPrimary>
      <SliderBeforeAfter page={page} />

      <About lang={lang} staticData={page.home.about} />
    </main>
  );
}
