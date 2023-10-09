import { Locale } from '@/i18n.config';
import Link from 'next/link';
import { getDictionary } from '@/utils/dictionary';
import { LocaleSwitcher, BurgerMenu } from '@/components';

const Header = async ({ lang }: { lang: Locale }) => {
  const { navigation, header, socials } = await getDictionary(lang);

  return (
    <header className="container py-6">
      <div className="wrapper relative flex items-center justify-between">
        <ul className="flex gap-x-8">
          <li>
            <Link href={`/${lang}`}>{navigation[0].title}</Link>
          </li>
        </ul>
        <LocaleSwitcher />
        <BurgerMenu staticData={{ navigation, header, socials }} />
      </div>
    </header>
  );
};

export default Header;
