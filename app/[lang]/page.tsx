import { Locale } from '@/i18n.config';
import { getDictionary } from '@/utils/dictionary';

import { fetchGeneral } from '@/api';

import { Test } from '@/components';

import { ButtonPrimary, SliderBeforeAfter } from '@/components';

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  // fetching local data for the selected lang
  const page = await getDictionary(lang);
  // fetching admin data for the selected lang
  const general = await fetchGeneral(lang);

  return (
    <main>
      {/* local data rendering */}
      <h1 className="text-2xl">{page.page.home.title}</h1>
      <p className="text-base text-gray-700">{page.page.home.description}</p>

      {/* admin data rendering */}
      <Test data={general} />

      <ButtonPrimary>Записатись на консультацію</ButtonPrimary>
      <SliderBeforeAfter page={page} />
    </main>
  );
}
