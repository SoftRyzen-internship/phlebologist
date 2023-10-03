import { Locale } from '@/i18n.config';
import { getDictionary } from '@/utils/dictionary';

import { About } from '@/sections';
import {
  ButtonPrimary,
  ButtonSecondary,
  ButtonTertiary,
  SliderBeforeAfter,
  IconBtn,
} from '@/components';

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

      <div className="flex flex-col items-center justify-center gap-6 py-12">
        <ButtonPrimary>Записатись на консультацію</ButtonPrimary>
        <ButtonSecondary linkto="">Записатись</ButtonSecondary>
        <ButtonTertiary>Написати у Telegram</ButtonTertiary>
        <SliderBeforeAfter page={page} />
      </div>

      <About lang={lang} staticData={page.home.about} />

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
