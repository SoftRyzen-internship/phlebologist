import React, { FC } from 'react';
import { ButtonPrimary, Logo, SocialsList, Navigation } from '@/components';
import { FooterProps } from './Footer.props';

const Footer: FC<FooterProps> = ({
  staticData: { footerData, socials, navigation, iconBtnData },
}) => {
  const { address, menuBtn, phone } = footerData;

  return (
    <footer className="pb-8 pt-5 md:py-12 xl:pb-[66px] xl:pt-[54px]">
      <div className="container text-center">
        <div className="wrapper">
          <div className="md:hidden">
            <div className="mb-6 flex items-baseline justify-between">
              <Logo />
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
              <p className="max-w-[158px] text-[12px] leading-loose -tracking-[0.48px] text-black-dark  opacity-50">
                {phone}
              </p>
            </div>
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

          <div className="hidden  text-left md:flex">
            <div className="mr-[46px] flex flex-col justify-between xl:mr-[350px]">
              <Logo />
              <div>
                <p className="max-w-[158px] text-[12px] leading-loose -tracking-[0.48px] text-black-dark  opacity-50">
                  {phone}
                </p>
                <p className="w-[158px] w-[281px] text-[12px] leading-loose -tracking-[0.48px]  text-black-dark opacity-50">
                  {address}
                </p>
              </div>
            </div>
            <Navigation
              data={navigation}
              itemClassName="mb-4 last:mb-0"
              variant="footer"
            />
            <div className="ml-auto flex flex-col justify-between text-right">
              <SocialsList
                variant="footer"
                staticData={{ iconBtnData, socials }}
              />
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
      </div>
    </footer>
  );
};

export default Footer;
