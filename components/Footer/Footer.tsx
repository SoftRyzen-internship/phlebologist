import React, { FC } from 'react';
import { ButtonPrimary } from '@/components';

interface FooterProps {
  staticData: any;
}

const Footer: FC<FooterProps> = ({ staticData }) => {
  console.log(staticData);
  return (
    <footer className="pb-4 pt-6">
      <div className="container text-center">
        <div className="mb-6 flex items-start justify-between">
          <p className="text-[16px] font-semibold uppercase leading-[1.19] -tracking-[0.64px] text-black-dark">
            Sergii Voitsitskyi
          </p>
          <ButtonPrimary variant="light" view="header" className="px-6">
            Меню
          </ButtonPrimary>
        </div>
        <div className="mb-6 flex items-start justify-between text-left">
          <p className="max-w-[158px] text-xs -tracking-[0.48px] text-black-dark  opacity-50">
            Клініка “Медейра” - м. Київ, проспект Перемоги, 67
          </p>
          <a
            href="tel:+380933521235"
            className="max-w-[158px] text-[12px] leading-loose -tracking-[0.48px] text-black-dark  opacity-50"
          >
            +380933521235
          </a>
        </div>
        <a
          href="https://softryzen.com/"
          rel="noopener noreferrer nofollow"
          target="_blank"
          className="text-[12px] leading-tight -tracking-[0.48px] text-black-dark opacity-50"
        >
          Made by SoftRyzen
        </a>
      </div>
    </footer>
  );
};

export default Footer;
