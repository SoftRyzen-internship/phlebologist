import { Locale } from '@/i18n.config';
import { getDictionary } from '@/utils/dictionary';

import client from '@/tina/__generated__/client';

import { Test } from '@/components';
import { TestSection } from '@/sections';
import { ButtonPrimary, SliderBeforeAfter } from '@/components';

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const page = await getDictionary(lang);

  const result = await client.queries.page({ relativePath: 'home.md' });

  return (
    <main>
      <h1 className="text-2xl">{page.page.home.title}</h1>
      <p className="text-base text-gray-700">{page.page.home.description}</p>

      <Test {...result} />
      <TestSection {...result} />
      <ButtonPrimary buttonsize="large">
        Записатись на консультацію
      </ButtonPrimary>
      <SliderBeforeAfter page={page} />
    </main>
  );
}
