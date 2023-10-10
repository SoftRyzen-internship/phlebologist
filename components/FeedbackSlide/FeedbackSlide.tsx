'use client';

import classNames from 'classnames';
import Image from 'next/image';
import { useState } from 'react';

import Send from '@/public/icons/send-telegram.svg';

// import css from './FeedbackSlide.module.css';
import { FeedbackSlideProps } from './FeedbackSlide.props';

import { Modal } from '@/components';

const FeedbackSlide: React.FC<FeedbackSlideProps> = ({
  // data,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article
      className={classNames({
        'relative mx-auto h-[372px] w-full rounded-extended bg-white-light p-[16px] text-[16px] leading-normal -tracking-[0.04em] text-black-dark md:h-[395px] md:w-[378px] md:p-[36px] xl:h-[405px] xl:w-full xl:p-[40px]':
          true,
        [className ? className : '']: className,
      })}
    >
      <div className="flex justify-between">
        <div>
          <p className="text-[12px] leading-normal text-gray-dim">01.09.23</p>

          <p className="mt-[21px] text-[16px] leading-medium md:mt-[35px] md:text-[18px] xl:mt-[37px]">
            Мигаль Анастасія
          </p>

          <a
            href="#"
            className="mt-[12px] flex items-end gap-[4px] text-[12px] text-primary-dark-400 transition-colors duration-300 md:mt-[22px] xl:mt-[9px] xl:text-black-dark xl:hover:text-primary-dark-400 xl:focus:text-primary-dark-400"
          >
            <Send className="h-[16px] w-[16px] fill-current" />
            Написати
          </a>
        </div>

        <div className=" relative h-[92px] w-[92px] overflow-hidden rounded-extended bg-gray-blur md:h-[124px] md:w-[124px]">
          <Image
            src="/images/feedback/user.webp"
            alt="User"
            sizes="(max-width: 767px) 328px, (max-width: 1279px) 600px, (max-width: 1751px) 493px, 256px"
            fill
            className="object-cover object-center"
          />
        </div>
      </div>

      <p className="mt-[20px] text-[14px] md:mt-[28px] md:text-[16px] xl:mt-[30px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
        voluptatum voluptas iure eligendi eius quidem debitis esse aut tempore
        expedita.
      </p>

      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="absolute bottom-[16px] left-[16px] border-b-[1px] border-b-secondary-dark text-[14px] text-secondary-dark transition-all duration-300  md:bottom-[36px] md:left-[36px] md:text-[16px] xl:bottom-[40px] xl:left-[40px] xl:border-b-black-dark xl:text-black-dark xl:hover:border-b-secondary-dark xl:hover:font-semibold xl:hover:text-secondary-dark xl:focus:border-b-secondary-dark xl:focus:font-semibold"
      >
        Дочитати
      </button>

      <Modal onCloseClick={() => setIsOpen(false)} isOpen={isOpen}>
        <div className=" relative h-[92px] w-[92px] overflow-hidden rounded-extended bg-gray-blur md:h-[124px] md:w-[124px]">
          <Image
            src="/images/feedback/user.webp"
            alt="User"
            sizes="(max-width: 767px) 328px, (max-width: 1279px) 600px, (max-width: 1751px) 493px, 256px"
            fill
            className="object-cover object-center"
          />
        </div>
      </Modal>
    </article>
  );
};

export default FeedbackSlide;
