import { Locale } from '@/i18n.config';
import { getDictionary } from '@/utils/dictionary';
// import { AdvantagesSection } from '@/sections';
import { AboutSection } from '@/sections';
import {
  // SliderBeforeAfter,
  IconBtn,
  Slider,
  FeedbackSlide,
  // ButtonPrimary,
  // ButtonSecondary,
  // SubmitButton,
  // ExternalLinkButton,
  // RoutingLinkButton,
  // ScrollLinkButton,
  SocialsList,
} from '@/components';

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  // fetching local data for the selected lang
  const { page } = await getDictionary(lang);

  const slides = [
    { __typename: 2367289350 },
    { __typename: 2367289351 },
    { __typename: 2367289352 },
    { __typename: 2367289353 },
    { __typename: 2367289354 },
  ];
  const iconData = page?.home?.iconBtnData;

  return (
    <main>
      <div className="flex flex-col items-center justify-center gap-6 py-12">
        {/* <ButtonPrimary>Записатись на консультацію</ButtonPrimary> */}
        {/* <ButtonSecondary linkto="">Записатись</ButtonSecondary> */}
        {/* <SubmitButton>Відправити</SubmitButton> */}
        {/* <ExternalLinkButton linkto="">Написати у Telegram</ExternalLinkButton> */}
        {/* <RoutingLinkButton linkto="">Детальніше про метод</RoutingLinkButton> */}
        {/* <ScrollLinkButton linkto="">Записатись</ScrollLinkButton> */}
        {/* <SliderBeforeAfter page={page} /> */}
      </div>
      <SocialsList variant="footer" staticData={page.home.iconBtnData} />
      <AboutSection lang={lang} staticData={page.home.about} />

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

      <Slider
        slides={slides}
        staticData={iconData}
        section="feedback"
        slide={FeedbackSlide}
        slideClassName="bg-secondary-dark"
      />
      {/* <AdvantagesSection staticData={page.home.advantages} /> */}
    </main>
  );
}
