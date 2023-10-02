import { Locale } from '@/i18n.config';
import { getDictionary } from '@/utils/dictionary';

import client from '@/tina/__generated__/client';

import { Test } from '@/components';
import { TestSection } from '@/sections';
import { ButtonPrimary, IconBtn } from '@/components';

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { page } = await getDictionary(lang);

  const result = await client.queries.page({ relativePath: 'home.md' });

  return (
    <main>
      <h1 className="text-2xl">{page.home.title}</h1>
      <p className="text-base text-gray-700">{page.home.description}</p>
      <Test {...result} />
      <TestSection {...result} />
      <ButtonPrimary buttonsize="large">
        Записатись на консультацію
      </ButtonPrimary>

      <IconBtn
        icon="tiktok"
        variant="contacts"
        iconFunction={page.home.iconBtnData.tiktok.iconFunction}
        iconLabel={page.home.iconBtnData.tiktok.iconLabel}
        url="#"
      />

      <IconBtn
        icon="facebook"
        variant="contacts"
        iconFunction={page.home.iconBtnData.facebook.iconFunction}
        iconLabel={page.home.iconBtnData.facebook.iconLabel}
        url="#"
      />

      <IconBtn
        icon="instagram"
        variant="contacts"
        iconFunction={page.home.iconBtnData.instagram.iconFunction}
        iconLabel={page.home.iconBtnData.instagram.iconLabel}
        url="#"
      />

      <IconBtn
        icon="arrow"
        variant="result"
        iconFunction={page.home.iconBtnData.arrowRight.iconFunction}
        iconLabel={page.home.iconBtnData.arrowRight.iconLabel}
      />

      <IconBtn
        icon="arrow"
        variant="result"
        reverse
        iconFunction={page.home.iconBtnData.arrowLeft.iconFunction}
        iconLabel={page.home.iconBtnData.arrowLeft.iconLabel}
      />

      <IconBtn
        icon="arrow"
        variant="feedback"
        iconFunction={page.home.iconBtnData.tiktok.iconFunction}
        iconLabel={page.home.iconBtnData.tiktok.iconLabel}
      />

      <IconBtn
        icon="arrow"
        variant="feedback"
        reverse
        iconFunction={page.home.iconBtnData.tiktok.iconFunction}
        iconLabel={page.home.iconBtnData.tiktok.iconLabel}
      />

      <IconBtn
        icon="tiktok"
        variant="footer"
        iconFunction={page.home.iconBtnData.tiktok.iconFunction}
        iconLabel={page.home.iconBtnData.tiktok.iconLabel}
        url="#"
      />

      <IconBtn
        icon="facebook"
        variant="footer"
        iconFunction={page.home.iconBtnData.facebook.iconFunction}
        iconLabel={page.home.iconBtnData.facebook.iconLabel}
        url="#"
      />

      <IconBtn
        icon="instagram"
        variant="footer"
        iconFunction={page.home.iconBtnData.instagram.iconFunction}
        iconLabel={page.home.iconBtnData.instagram.iconLabel}
        url="#"
      />

      <IconBtn
        icon="location"
        variant="location"
        iconFunction={page.home.iconBtnData.location.iconFunction}
        iconLabel={page.home.iconBtnData.location.iconLabel}
        url="#"
        className="ml-[200px]"
      />
    </main>
  );
}
