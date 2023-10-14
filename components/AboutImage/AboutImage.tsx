'use client';

import { FC, useState } from 'react';

import Image from 'next/image';

import { Modal } from '@/components';

import PlayIcon from '@/public/icons/player.svg';

import { AboutImageProps } from './AboutImage.props';

const AboutImage: FC<AboutImageProps> = ({ data, lang, staticData }) => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        type="button"
        className="relative mx-auto md:block"
        aria-label={staticData.play.iconFunction}
      >
        <Image
          src={data?.image as string}
          alt={lang === 'uk' ? 'Фото лікаря' : 'Photo of the doctor'}
          width={256}
          height={191}
          className="object-center-top mb-5 rounded-medium object-cover  md:mb-8 md:h-[338px] md:w-[416px] md:rounded-large xl:mb-0 xl:h-[480px] xl:w-full smOnly:w-full"
        />

        <PlayIcon
          className="absolute left-[50%] top-[50%] z-10 h-[64px] w-[64px] -translate-x-[50%] -translate-y-[50%] fill-white"
          aria-label={staticData.play.iconLabel}
        />
      </button>

      <Modal
        staticData={staticData}
        onCloseClick={() => setIsOpen(false)}
        isOpen={isOpen}
        isReview={false}
      >
        {/* video */}
        <Image
          src={data?.image as string}
          alt={
            lang === 'uk'
              ? 'Лікар сидить за столом'
              : 'The doctor is sitting at the table'
          }
          width={256}
          height={191}
          className="h-[504px] w-[1040px] object-cover object-top"
        />
      </Modal>
    </>
  );
};

export default AboutImage;
