import { Locale } from '@/i18n.config';
import {
  LocaleSwitcher,
  Logo,
  ScrollLinkButton,
  BurgerMenu,
} from '@/components';
import { getDictionary } from '@/utils/dictionary';

const Header = async ({ lang }: { lang: Locale }) => {
  const { navigation, header, socials } = await getDictionary(lang);
  const { linkButton, formButton, langButton } = header;
  const { telegram } = socials;

  return (
    <header className="pb-3 pt-6 md:pb-6 xl:pt-7">
      <div className="container">
        <div className="wrapper relative flex items-center justify-between">
          <Logo />

          <div className="flex items-center gap-3 xl:gap-2">
            <div className="hidden items-center gap-3 md:flex xl:gap-2">
              <a
                href={telegram}
                className="outline-without flex items-center justify-center rounded-normal bg-white px-3 
                  py-3 text-[12px] font-medium uppercase leading-normal -tracking-[0.48px] text-black-dark transition-all 
                  duration-300 hover:bg-gray-extra hover:font-bold focus:bg-gray-extra focus:font-bold md:w-[140px] xl:w-[187px] "
                rel="noopener noreferrer nofollow"
                target="_blank"
              >
                {linkButton}
              </a>
              <LocaleSwitcher
                variant="header"
                data={langButton}
                className="hidden xl:flex xl:min-w-[120px] xl:px-10"
              />
              <ScrollLinkButton
                variant="menu"
                linkto="consultation"
                className=" py-3 -tracking-[0.48px] md:w-[242px] xl:w-[290px] "
              >
                {formButton}
              </ScrollLinkButton>
            </div>
            <BurgerMenu staticData={{ navigation, header, socials }} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
