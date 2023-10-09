'use client';

import classnames from 'classnames';

import { ResultsSlideProps } from './ResultsSlide.props';

const ResultsSlide: React.FC<ResultsSlideProps> = ({
  data,
  className = '',
}) => {
  const slideClass = classnames(
    'flex h-[372px] w-full items-center justify-center rounded-lg text-[16px] text-white md:h-[395px] md:w-[378px] xl:h-[405px] xl:w-full',
    className,
  );

  return (
    <div className={slideClass}>
      <p>FeedbackSlide {data?.__typename}</p>
    </div>
  );
};

export default ResultsSlide;
