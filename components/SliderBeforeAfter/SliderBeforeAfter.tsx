'use client';

import React from 'react';

import ReactCompareImage from 'react-compare-image';
import classnames from 'classnames';

import { SliderBeforeAfterProps } from './SliderBeforeAfter.props';
import { SliderBeforeAfterHandle } from '@/components';

const SliderBeforeAfter: React.FC<SliderBeforeAfterProps> = ({
  data,
  staticData,
  className = '',
}) => {
  const { before, after } = data;

  const { beforeAltText, afterAltText } = staticData;

  const sliderWrapperClass = classnames(
    'w-full h-[380px] shrink-0 rounded-medium md:w-[448px] md:h-[497px] md:rounded-large xl:w-[560px] xl:h-full bg-gray-light overflow-hidden mb-5 md:mb-8 xl:mb-0',
    className,
  );

  return (
    <div className={sliderWrapperClass}>
      <ReactCompareImage
        leftImage={before}
        leftImageAlt={beforeAltText}
        rightImage={after}
        rightImageAlt={afterAltText}
        handle={<SliderBeforeAfterHandle staticData={staticData} />}
        sliderLineWidth={3}
        sliderLineColor="#ECEEF2"
      />
    </div>
  );
};

export default SliderBeforeAfter;
