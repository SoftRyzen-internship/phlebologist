'use client';

import classNames from 'classnames';
import Image from 'next/image';

import setupDateFormat from '@/utils/setupDateFromat';
import Send from '@/public/icons/send-telegram.svg';

import { FeedbackCapProps } from './FeedbackCap.props';

const FeedbackCap: React.FC<FeedbackCapProps> = ({
  data,
  staticData,
  isVideo = false,
}) => {
  const date = setupDateFormat(data?.date);

  return (
    <div className="relative z-10 flex justify-between gap-[8px]">
      <div>
        <p
          className={classNames({
            'text-[12px] leading-normal': true,
            'text-gray-dim': !isVideo,
            'text-black-dark/50': isVideo,
          })}
        >
          {date}
        </p>

        <p className="mt-[21px] text-[16px] font-medium leading-medium md:mt-[35px] md:text-[18px] xl:mt-[37px]">
          {data?.name}
        </p>

        {!isVideo && data?.telegram && (
          <a
            href={data?.telegram}
            target="_blank"
            rel="noreferrer noopener nofollow"
            className="mt-[12px] flex items-end gap-[4px] text-[12px] text-primary-dark-400 transition-colors duration-300 md:mt-[22px] xl:mt-[9px] xl:text-black-dark xl:hover:text-primary-dark-400 xl:focus:text-primary-dark-400"
            aria-label={staticData?.links?.send?.icon}
          >
            <Send className="h-[16px] w-[16px] fill-current" />
            {staticData?.links?.send?.text}
          </a>
        )}
      </div>

      <div
        className={classNames({
          'relative  overflow-hidden rounded-extended bg-gray-blur md:h-[124px] md:w-[124px]':
            true,
          'h-[92px] w-[92px]': !isVideo,
          'h-[69px] w-[69px] md:h-[69px] md:w-[69px]': isVideo,
        })}
      >
        <Image
          src={data?.photo}
          alt={staticData?.photo?.alt}
          sizes="(max-width: 767px) 328px, (max-width: 1279px) 600px, (max-width: 1751px) 493px, 256px"
          fill
          className="object-cover object-center"
        />
      </div>
    </div>
  );
};

export default FeedbackCap;
