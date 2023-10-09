'use client';

import { useState } from 'react';
import classNames from 'classnames';
import Image from 'next/image';

import LocationIcon from '@/public/icons/location.svg';

const Location = ({ pageData }) => {
  const sectionData = pageData.contacts;
  const iconData = pageData.iconBtnData;

  const [isPhotoShown, setIsPhotoShown] = useState(false);

  const photoBoxStyles = classNames(
    'absolute inset-0 rounded-extended overflow-hidden px-[41px] md:px-[79px] xl:px-[180px] pt-[12px] md:pt-[34px] xl:pt-[24px] transition-opacity duration-300',
    {
      'xl:opacity-100': isPhotoShown,
      'xl:opacity-0': !isPhotoShown,
    },
  );

  return (
    <div
      className="relative mt-[20px] md:mt-[32px] xl:mt-[64px]"
      onClick={() => {}}
    >
      <a
        href={sectionData.contactData.location.url}
        target="_blank"
        rel="noreferrer noopener nofollow"
      >
        <Image
          src={sectionData.contactData.location.images.map.img}
          alt={sectionData.contactData.location.images.map.alt}
          width={256}
          height={234}
          sizes="(max-width: 767px) 328px, (max-width: 1279px) 600px, (max-width: 1751px) 493px, 256px"
          className="aspect-[1.1/1] w-full rounded-extended object-cover object-top md:h-[311px] md:w-[328px] md:object-bottom xl:h-[351px] xl:w-[560px] "
        />

        <div className={photoBoxStyles}>
          <Image
            src={sectionData.contactData.location.images.office.img}
            alt={sectionData.contactData.location.images.office.alt}
            width={174}
            height={115}
            sizes="(max-width: 767px) 328px, (max-width: 1279px) 600px, (max-width: 1751px) 493px, 716px"
            className="aspect-auto w-full object-cover object-center"
          />
        </div>

        <div className="absolute bottom-[10%] left-[50%] -translate-x-[50%] md:bottom-[76px] xl:bottom-[64px]">
          <LocationIcon
            className="mx-auto flex items-center justify-center fill-current text-notify-error transition-all duration-300 xl:hover:h-[34px] xl:hover:w-[34px] xl:focus:h-[34px] xl:focus:w-[34px]"
            width={32}
            height={32}
            onMouseEnter={() => setIsPhotoShown(true)}
            onMouseLeave={() => setIsPhotoShown(false)}
            onFocus={() => setIsPhotoShown(true)}
            onBlur={() => setIsPhotoShown(false)}
            aria-label={iconData.location.iconLabel}
          />

          <p className="text-center text-[8px] leading-large tracking-[0.24em]">
            {sectionData.contactData.location.placename.firstRow}
          </p>

          <p className="text-center text-[12px] leading-small -tracking-[0.04em]">
            {sectionData.contactData.location.placename.secondRow}
          </p>
        </div>
      </a>
    </div>
  );
};

export default Location;
