'use client';

import { FC } from 'react';
import classnames from 'classnames';
import { TinaMarkdown } from 'tinacms/dist/rich-text';

import { ResultsSlideProps } from './ResultsSlide.props';
import { SliderBeforeAfter, ScrollLinkButton } from '@/components';
import { formatSlideNumber } from '@/utils/formatSlideNumber';

const ResultsSlide: FC<ResultsSlideProps> = ({
  data,
  staticData,
  currentSlideIdx,
  totalQty,
  className = '',
}) => {
  const { description } = data.content;

  const slideClass = classnames(
    'flex flex-col w-full items-center justify-start rounded-medium xl:flex-row-reverse xl:gap-10 md:px-16 xl:px-0 cursor-auto',
    className,
  );

  return (
    <div className={slideClass}>
      <SliderBeforeAfter data={data} staticData={staticData} />
      <div className="flex h-full w-full flex-col justify-between rounded-extended bg-white-light p-4 text-black-dark md:rounded-large md:px-10 md:py-9 xl:px-16">
        <div>
          <span className="mr-auto text-xs leading-normal -tracking-[0.48px]">
            {formatSlideNumber(currentSlideIdx)}
            <span>/{formatSlideNumber(totalQty)}</span>
          </span>
          <p className="mb-5 mt-5 text-[18px] font-medium leading-[1.11] -tracking-[0.72px] md:mb-8 md:mt-6 md:text-xl md:leading-[1.2] md:-tracking-[0.8px] xl:mb-6 xl:mt-12">
            {staticData.secondaryTitle}
          </p>
          <div className="mb-5 text-justify text-sm leading-[1.21] -tracking-[0.56px] md:mb-10 md:text-base md:-tracking-[0.64px]">
            <TinaMarkdown content={description} />
          </div>
        </div>
        <ScrollLinkButton
          className="mx-auto"
          linkto="consultation"
          variant="dark"
        >
          {staticData.buttonTextMobile}
        </ScrollLinkButton>
      </div>
    </div>
  );
};

export default ResultsSlide;
