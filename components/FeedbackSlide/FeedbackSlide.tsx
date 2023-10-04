'use client';

import classNames from 'classnames';

import { FeedbackSlideProps } from './FeedbackSlide.props';

const FeedbackSlide: React.FC<FeedbackSlideProps> = ({ data, className }) => {
  return (
    <div
      className={classNames({
        'flex h-[372px] w-full items-center justify-center rounded-lg text-[16px] text-white md:h-[395px] md:w-[378px] xl:h-[405px] xl:w-full':
          true,
        [className ? className : '']: className,
      })}
    >
      <p>FeedbackSlide {data?.__typename}</p>
    </div>
  );
};

export default FeedbackSlide;
