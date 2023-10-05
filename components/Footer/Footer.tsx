import React, { FC } from 'react';
// import { Link } from 'react-scroll';
import { ButtonPrimary, Logo, SocialsList } from '@/components';
import { navigationLinks } from '@/data/navigation';
import { FooterProps } from './Footer.props';

const Footer: FC<FooterProps> = ({ staticData, iconBtnData }) => {
  const { address, menuBtn, navigation } = staticData;

  return (
    <footer className="pb-4 pt-6">
      <div className="main-container text-center">
        <div className="md:hidden">
          <div className="mb-6 flex items-start justify-between">
            <Logo variant="footer" />
            <ButtonPrimary
              variant="light"
              view="header"
              className="px-6 md:hidden"
            >
              {menuBtn}
            </ButtonPrimary>
          </div>
          <div className="mb-6 flex items-start justify-between text-left md:block">
            <p className="max-w-[158px] text-xs -tracking-[0.48px] text-black-dark  opacity-50">
              {address}
            </p>

            {/* link or p */}
            <a
              href="tel:+380933521235"
              className="max-w-[158px] text-[12px] leading-loose -tracking-[0.48px] text-black-dark  opacity-50"
            >
              +380933521235
            </a>
          </div>
          <ul className="hidden md:block">
            {navigation.map(({ id, item }, index) => {
              console.log(navigationLinks[index]);
              const linkTo =
                id === navigationLinks[index].id
                  ? navigationLinks[index].linkTo
                  : '#';
              console.log(linkTo);
              return (
                <li key={id}>
                  <a href={linkTo}>{item}</a>
                </li>
              );
            })}
          </ul>

          <p className="text-[12px] leading-tight -tracking-[0.48px] text-black-dark ">
            <span className="opacity-50"> Made by </span>

            <a
              href="https://softryzen.com/"
              rel="noopener noreferrer nofollow"
              target="_blank"
              className="text-primary-dark-300 transition-all duration-300 hover:font-bold hover:text-primary-dark-300 hover:opacity-100 focus:font-bold focus:text-primary-dark-300 focus:opacity-100 xl:opacity-50 notXl:font-bold"
            >
              SoftRyzen
            </a>
          </p>
        </div>

        <div className="hidden justify-between text-left md:flex ">
          <div className="flex flex-col justify-between">
            <Logo variant="footer" />
            <div>
              {/* link or p */}
              <a
                href="tel:+380933521235"
                className="max-w-[158px] text-[12px] leading-loose -tracking-[0.48px] text-black-dark  opacity-50"
              >
                +380933521235
              </a>
              <p className="w-[158px] text-xs -tracking-[0.48px] text-black-dark  opacity-50 xl:w-[281px]">
                {address}
              </p>
            </div>
          </div>
          <ul className="hidden md:block">
            {navigation.map(({ id, item }) => (
              <li key={id}>
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
          <div className="flex flex-col justify-between text-right">
            <SocialsList variant="footer" staticData={iconBtnData} />
            <p className="text-[12px] leading-tight -tracking-[0.48px] text-black-dark ">
              <span className="opacity-50"> Made by </span>

              <a
                href="https://softryzen.com/"
                rel="noopener noreferrer nofollow"
                target="_blank"
                className="text-primary-dark-300 transition-all duration-300 hover:font-bold hover:text-primary-dark-300 hover:opacity-100 focus:font-bold focus:text-primary-dark-300 focus:opacity-100 xl:opacity-50 notXl:font-bold"
              >
                SoftRyzen
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
