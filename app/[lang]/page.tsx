import { Locale } from '@/i18n.config';
import { getDictionary } from '@/utils/dictionary';

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const page = await getDictionary(lang);

  return (
    <main>
      <h1 className="text-2xl">{page.page.home.title}</h1>
      <p className="text-base text-gray-700">{page.page.home.description}</p>
    </main>
  );
}
