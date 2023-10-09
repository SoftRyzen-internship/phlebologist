import { Locale } from '@/i18n.config';
// import Link from 'next/link';
import HeaderLinkBtn from './HeaderLinkBtn';
import {
  LocaleSwitcher,
  Logo,
  ButtonPrimary,
  // ExternalLinkButton,
  // ScrollLinkButton,
} from '@/components';
import { getDictionary } from '@/utils/dictionary';

const Header = async ({ lang }: { lang: Locale }) => {
  const {
    header: buttons,
    socials: { telegram },
  } = await getDictionary(lang);
  const { menuButton, langButton, linkButton, formButton } = buttons;

  return (
    <header className="pb-3 pt-6 md:pb-6 xl:pt-7">
      <div className="container">
        <div className="wrapper flex items-center justify-between">
          <Logo />

          <div className="flex items-center gap-3 xl:gap-2">
            <a
              href={telegram}
              className="outline-without flex items-center justify-center rounded-normal bg-white px-6 py-3 text-[12px] font-medium uppercase leading-normal -tracking-[0.48px] text-black-dark transition-all duration-300 hover:bg-gray-extra hover:font-bold focus:bg-gray-extra focus:font-bold xl:px-12"
              rel="noopener noreferrer nofollow"
              target="_blank"
            >
              {linkButton}
            </a>
            {/* ????link href */}
            <HeaderLinkBtn linkTo="form" href="#form">
              {formButton}
            </HeaderLinkBtn>

            <LocaleSwitcher
              variant="header"
              data={langButton}
              className="hidden xl:block xl:px-12"
            />

            <ButtonPrimary
              variant="light"
              view="header"
              className="px-6 xl:px-12"
            >
              {menuButton}
            </ButtonPrimary>

            {/* <Link href={`/${lang}`}>{navigation[0].title}</Link> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
