'use client';

import { FC, useState } from 'react';

import Image from 'next/image';

import { Modal, VideoPlayer } from '@/components';

import PlayIcon from '@/public/icons/player.svg';

import { AboutVideoProps } from './AboutVideo.props';

const AboutVideo: FC<AboutVideoProps> = ({ data, lang, staticData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { image, video } = data;

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        type="button"
        className="relative  mx-auto mb-5 block md:mb-8 xl:mb-0 smOnly:w-full"
        aria-label={staticData.play.iconFunction}
      >
        <Image
          src={image}
          alt={lang === 'uk' ? 'Фото лікаря' : 'Photo of the doctor'}
          width={592}
          height={480}
          sizes="(max-width: 767px) 256px, (max-width: 1279px) 416px, 592px"
          className="rounded-medium object-cover object-top  md:h-[338px] md:w-[416px] md:rounded-large xl:h-[480px] xl:w-[592px] smOnly:max-h-[272px] smOnly:w-full"
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
        <VideoPlayer data={video} isShown={isOpen} />
      </Modal>
    </>
  );
};

export default AboutVideo;
