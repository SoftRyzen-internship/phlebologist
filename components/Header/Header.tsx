import { Locale } from '@/i18n.config';
import {
  LocaleSwitcher,
  Logo,
  ButtonPrimary,
  ScrollLinkButton,
  BurgerMenu,
} from '@/components';
import { getDictionary } from '@/utils/dictionary';

const Header = async ({ lang }: { lang: Locale }) => {
  const { navigation, header, socials } = await getDictionary(lang);
  const { linkButton, formButton, langButton, menuButton } = header;
  const { telegram } = socials;

  return (
    <header className="pb-3 pt-6 md:pb-6 xl:pt-7">
      <div className="container">
        <div className="wrapper flex items-center justify-between">
          <Logo />

          <div className="flex items-center gap-3 xl:gap-2">
            <div className="hidden items-center gap-3 md:flex xl:gap-2">
              <a
                href={telegram}
                className="outline-without flex  items-center justify-center rounded-normal bg-white px-6 py-3 text-[12px] font-medium uppercase leading-normal -tracking-[0.48px] text-black-dark transition-all duration-300 hover:bg-gray-extra hover:font-bold focus:bg-gray-extra focus:font-bold xl:px-12"
                rel="noopener noreferrer nofollow"
                target="_blank"
              >
                {linkButton}
              </a>
              <ScrollLinkButton
                variant="menu"
                linkto="consultation"
                className=" py-3 -tracking-[0.48px] md:w-auto xl:px-12"
              >
                {formButton}
              </ScrollLinkButton>
              <LocaleSwitcher
                variant="header"
                data={langButton}
                className="hidden xl:block xl:px-12"
              />
            </div>
            <ButtonPrimary
              variant="light"
              view="header"
              className="px-6 xl:px-12"
            >
              {menuButton}
            </ButtonPrimary>
          </div>
        </div>
      </div>
      <BurgerMenu staticData={{ navigation, header, socials }} />
    </header>
  );
};

export default Header;
