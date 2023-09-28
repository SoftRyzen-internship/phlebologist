import { Locale } from '@/i18n.config';
import Link from 'next/link';
import { getDictionary } from '@/utils/dictionary';
import LocaleSwitcher from '@/components/LocaleSwitcher/LocaleSwitcher';

const Header = async ({ lang }: { lang: Locale }) => {
  const { navigation } = await getDictionary(lang);

  return (
    <header className="py-6">
      <nav className="container flex items-center justify-between">
        <ul className="flex gap-x-8">
          <li>
            <Link href={`/${lang}`}>{navigation.home}</Link>
          </li>
        </ul>
        <LocaleSwitcher />
      </nav>
    </header>
  );
};

export default Header;
