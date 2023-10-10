'use client';

import classNames from 'classnames';

import Send from '@/public/icons/send-telegram.svg';

// import css from './FeedbackSlide.module.css';
import { FeedbackSlideProps } from './FeedbackSlide.props';

const FeedbackSlide: React.FC<FeedbackSlideProps> = ({
  // data,
  className,
}) => {
  return (
    <article
      className={classNames({
        'mx-auto h-[372px] w-full rounded-extended bg-white-light text-[16px] text-black-dark md:h-[395px] md:w-[378px] xl:h-[405px] xl:w-full':
          true,
        [className ? className : '']: className,
      })}
    >
      <p>01.09.23</p>
      <p>Мигаль Анастасія</p>
      <a
        href="#"
        className="text-primary-dark-400 transition-colors duration-300 xl:text-black-dark xl:hover:text-primary-dark-400 xl:focus:text-primary-dark-400"
      >
        <Send className="h-[16px] w-[16px] fill-current"></Send>
        Написати
      </a>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
        voluptatum voluptas iure eligendi eius quidem debitis esse aut tempore
        expedita.
      </p>
    </article>
  );
};

export default FeedbackSlide;
